---
name: frame-extractor
description: Extract deterministic, numbered image sequences from inspected video with FFmpeg for scroll-driven animation. Use after media inspection when frame rate, output path and size limits have been approved.
---

# Frame Extractor

Run `node scripts/extract-frames.mjs <source> <output-dir> <fps>`. Require FPS from 1 through 60 and an empty output directory. Never overwrite the source or existing frames. Return the generated manifest and FFmpeg exit evidence.
