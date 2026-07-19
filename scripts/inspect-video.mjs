import { access } from "node:fs/promises";
import { spawn } from "node:child_process";

const source = process.argv[2];
if (!source) {
  console.error("Usage: node scripts/inspect-video.mjs <source>");
  process.exit(2);
}
await access(source).catch(() => {
  console.error("Source does not exist");
  process.exit(2);
});

const args = ["-v","error","-select_streams","v:0","-show_entries","stream=codec_name,width,height,pix_fmt,r_frame_rate,avg_frame_rate:format=duration,size","-of","json",source];
const child = spawn("ffprobe", args, { stdio:["ignore","pipe","pipe"] });
let stdout="", stderr="";
child.stdout.on("data", chunk => stdout += chunk);
child.stderr.on("data", chunk => stderr += chunk);
child.on("error", error => {
  console.error(`Unable to run ffprobe: ${error.message}`);
  process.exit(127);
});
child.on("close", code => {
  if (code !== 0) {
    console.error(stderr.trim() || "ffprobe failed");
    process.exit(code ?? 1);
  }
  const raw = JSON.parse(stdout);
  const stream = raw.streams?.[0];
  if (!stream) {
    console.error("No video stream found");
    process.exit(3);
  }
  const result = {
    source,
    codec: stream.codec_name,
    width: Number(stream.width),
    height: Number(stream.height),
    pixelFormat: stream.pix_fmt,
    reportedFrameRate: stream.avg_frame_rate || stream.r_frame_rate,
    durationSeconds: Number(raw.format?.duration),
    sourceBytes: Number(raw.format?.size)
  };
  process.stdout.write(JSON.stringify(result, null, 2) + "\n");
});
