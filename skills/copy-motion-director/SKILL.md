---
name: copy-motion-director
description: Design and implement copy entrances, holds and fade-out exits synchronized to scroll-driven video progress. Use when a builder asks for phrases, headlines or calls to action to appear at exact narrative moments in any HTML, React, Next.js or Vite scene.
---

# Copy Motion Director

Consume a motion cue manifest validated against `../../schemas/motion.schema.json`.

For every phrase define four ordered normalized progress points: `enterStart < enterEnd <= exitStart < exitEnd`. Bind copy progress to the same canonical progress value used to select the video frame. Never attach a second independent scroll listener when the canvas player already exposes progress.

Use transform and opacity for motion. Default to a restrained cinematic entrance, readable hold and fade-out exit. Preserve semantic HTML, selectable text, responsive line length and reduced-motion behavior.

Typography must use licensed project fonts, approved open-source fonts, or system fallbacks. Never download, embed or redistribute proprietary font files without documented permission.
