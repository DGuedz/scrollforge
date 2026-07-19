# ScrollForge v0 Specification

## Objective

Convert an input video and implementation brief into an auditable scroll-driven image-sequence package.

## Scope

- Inspect source media with ffprobe.
- Extract deterministic frame sequences with FFmpeg.
- Define optimization and delivery contracts.
- Generate framework implementation guidance through a canvas specialist.
- Validate accessibility, loading strategy and visual behavior.
- Produce a machine-readable evidence bundle.

## Non-scope

- AI video generation.
- CDN provisioning or production deployment.
- Claims of Core Web Vitals compliance without browser measurements.
- Automatic publication to a marketplace.

## Invariants

1. Source files are never overwritten.
2. Missing tools or inputs fail closed with a non-zero exit status.
3. Every generated frame set has a manifest.
4. Performance claims require measured evidence.
5. Reduced-motion fallback is mandatory.
6. Secrets and credentials never enter manifests or logs.

## Threat model

- Path traversal or unintended overwrite.
- Command argument injection.
- Unbounded frame count and memory pressure.
- Decompression bombs or malformed media.
- Misleading performance claims based on estimates.
- Canvas implementations without accessibility fallback.

## Acceptance criteria

- All skill files contain valid frontmatter.
- Input and evidence schemas parse as JSON.
- Inspector returns normalized JSON for a valid fixture.
- Extraction refuses invalid FPS and missing sources.
- Evidence validator rejects incomplete bundles.
- GitHub Actions executes the repository test suite.
