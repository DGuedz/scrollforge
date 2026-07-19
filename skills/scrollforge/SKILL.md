---
name: scrollforge
description: Orchestrate the creation or audit of scroll-driven, frame-by-frame web animations from video assets. Use when a user wants a cinematic scroll sequence, synchronized copy motion, video-to-frames workflow, Canvas and GSAP integration, premium typography, asset optimization, performance validation, or reproducible evidence.
---

# ScrollForge Orchestrator

Read `../../context/general.md`, `../../context/policies.md` and the active specification before acting.

## Workflow

1. Validate the request against `../../schemas/project.schema.json`.
2. Call media-inspector.
3. Record configuration decisions and classify estimates.
4. Call frame-extractor.
5. Call asset-optimizer.
6. Call canvas-engineer for the target framework.
7. When copy is synchronized to the scene, validate `../../schemas/motion.schema.json` and call copy-motion-director.
8. Feed the same normalized progress value to the frame renderer and motion runtime.
9. Call performance-guardian.
10. Call visual-qa.
11. Validate the evidence bundle.

Block completion when a required specialist reports `blocked`, motion cue timing is unordered, font licensing is undocumented, or measured claims lack evidence. Preserve source media and avoid deployment without explicit authorization.
