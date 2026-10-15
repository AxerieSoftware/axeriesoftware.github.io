# Agent guide

How to work in this repo. [README.md](README.md) covers what the site is and the commands. [PRODUCT.md](PRODUCT.md) covers who it's for and the copy voice; [DESIGN.md](DESIGN.md) covers the visual system.

## Every change

- `npm run check` passes (Astro typecheck and Biome).
- `npm run build` passes.
- Check the page in light and dark mode, at phone and desktop widths.

## Code

Follow [docs/code-style.md](docs/code-style.md). In short:

- **Self-documenting first.** Descriptive names, no abbreviations. Comments say why, not what.
- **Tools are data.** Adding a tool is an entry in `src/data/tools.ts` plus a light and a dark screenshot in `src/assets/screenshots/`, never a layout change.
- **No over-implementation.** Static only: no server, forms, analytics or tracking.
- **US English** in copy, comments and docs.

## Copy

- Say what a tool does for the visitor in plain, concrete words. No hype or slogans.
- Never invent claims, user counts, testimonials or press.
