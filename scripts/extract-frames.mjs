import { access, mkdir, readdir, writeFile } from "node:fs/promises";
import { resolve, join } from "node:path";
import { spawn } from "node:child_process";

const [source, outputArg, fpsArg] = process.argv.slice(2);
const fps = Number(fpsArg);
if (!source || !outputArg || !Number.isInteger(fps) || fps < 1 || fps > 60) {
  console.error("Usage: node scripts/extract-frames.mjs <source> <output-dir> <fps:1-60>");
  process.exit(2);
}
await access(source).catch(() => {
  console.error("Source does not exist");
  process.exit(2);
});
const output = resolve(outputArg);
await mkdir(output, { recursive:true });
const existing = await readdir(output);
if (existing.length > 0) {
  console.error("Output directory must be empty");
  process.exit(4);
}
const pattern = join(output, "frame_%05d.png");
const args = ["-nostdin","-hide_banner","-loglevel","error","-i",source,"-vf",`fps=${fps}`,"-start_number","0",pattern];
const child = spawn("ffmpeg", args, { stdio:["ignore","ignore","pipe"] });
let stderr="";
child.stderr.on("data", chunk => stderr += chunk);
child.on("error", error => {
  console.error(`Unable to run ffmpeg: ${error.message}`);
  process.exit(127);
});
child.on("close", async code => {
  if (code !== 0) {
    console.error(stderr.trim() || "ffmpeg failed");
    process.exit(code ?? 1);
  }
  const frames = (await readdir(output)).filter(name => /^frame_\d{5}\.png$/.test(name)).sort();
  const manifest = { schemaVersion:"1.0.0", source, fps, frameCount:frames.length, pattern:"frame_%05d.png" };
  await writeFile(join(output, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", { flag:"wx" });
  process.stdout.write(JSON.stringify(manifest, null, 2) + "\n");
});
