# Routine: Build Scroll Scene

## Trigger

Manual command with a source video and project contract.

## Flow

1. Load context and policies.
2. Validate the project contract.
3. Inspect the media.
4. Select FPS, dimensions, formats and loading budget.
5. Extract frames without overwriting the source.
6. Optimize assets and create a manifest.
7. Produce the canvas integration.
8. Run performance and visual QA.
9. Validate and persist the evidence bundle.

## Exit states

- success
- blocked
- hypothesis_only
- needs_human_review
