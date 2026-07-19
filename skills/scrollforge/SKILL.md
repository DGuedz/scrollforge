---
name: scrollforge
description: Orchestrate the creation or audit of scroll-driven, frame-by-frame web animations from video assets. Use when a user wants a cinematic scroll sequence, video-to-frames workflow, Canvas and GSAP integration, asset optimization, performance validation, or reproducible evidence for such an implementation.
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
7. Call performance-guardian.
8. Call visual-qa.
9. Validate the evidence bundle.

Block completion when a required specialist reports `blocked` or when measured claims lack evidence. Preserve source media and avoid deployment without explicit authorization.
