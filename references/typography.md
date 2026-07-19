# Typography Policy

## Premium-feel defaults

ScrollForge ships CSS family declarations, not third-party font binaries.

Recommended open-source pairings:

- Manrope + Inter: modern product and technology.
- Space Grotesk + Inter: cinematic technology.
- Cormorant Garamond + Manrope: editorial luxury.
- Archivo Black + Archivo: music and high-impact campaigns.

## Commercial fonts

Commercial or client-owned fonts require the font files, a webfont license for the intended domains, and a license reference in the motion manifest. Store licensed files in the consuming project, not in this public repository.

## Rules

- Use WOFF2 for licensed local webfonts.
- Apply `font-display: swap`.
- Preload only the primary above-the-fold face.
- Provide fallbacks.
- Keep animated copy as semantic, selectable HTML text.
- Never rasterize copy into video frames merely to reproduce typography.
