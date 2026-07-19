---
name: media-inspector
description: Inspect source video metadata for a ScrollForge workflow using ffprobe. Use to determine duration, dimensions, frame rate, codec, pixel format and estimated extraction scale before frames are generated.
---

# Media Inspector

Run `node scripts/inspect-video.mjs <source>`. Treat ffprobe output as canonical. Return normalized JSON and preserve the raw command evidence. Block on missing source, unavailable ffprobe, malformed metadata or policy limits. Do not infer codec, duration or FPS from the filename.
