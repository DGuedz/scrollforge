# ScrollForge

ScrollForge is an internal, spec-driven toolkit for turning video assets into accessible, testable scroll-driven image sequences.

## Status

Architecture scaffold. Functional media processing and browser performance claims remain unverified until the first end-to-end fixture is executed.

## Workflow

```text
brief -> inspect -> extract -> optimize -> implement -> validate -> evidence
```

## Requirements

- Node.js 22+
- FFmpeg and ffprobe for media operations
- A browser test environment for visual and performance validation

## Commands

```bash
npm test
npm run inspect -- ./input/video.mp4
npm run extract -- ./input/video.mp4 ./dist/frames 24
```

## Repository map

- `specs/`: ATLAS product specification and acceptance checklist
- `context/`: canonical system context and policies
- `routines/`: operational triggers and ordered workflows
- `skills/`: orchestrator and specialist skills
- `schemas/`: machine-verifiable input and evidence contracts
- `scripts/`: deterministic media utilities
- `tests/`: contract and structure tests

## Evidence policy

A claim is not considered proven without an attached command, exit status, artifact inventory, and reproducible environment metadata.
