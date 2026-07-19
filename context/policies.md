# Policies

- Never overwrite source media.
- Reject missing or malformed required inputs.
- Do not execute shell strings assembled from untrusted input.
- Use argument arrays for child processes.
- Cap FPS, dimensions and frame counts before extraction.
- Never label estimated performance as measured.
- Require a reduced-motion fallback and meaningful static image.
- Do not preload every frame by default; select a bounded loading strategy.
- Do not publish or deploy without explicit authorization.
