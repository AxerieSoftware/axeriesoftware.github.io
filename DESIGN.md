---
name: Axerie
description: A quiet studio page where each tool's real screenshot does the persuading.
colors:
  ground: "#f3f4f1"
  surface: "#ffffff"
  ink: "#111312"
  ink-muted: "#545955"
  line: "#dcdfd9"
  accent: "#2c6a4c"
  ground-dark: "#121413"
  surface-dark: "#1b1e1c"
  ink-dark: "#eef0ec"
  ink-muted-dark: "#a9afaa"
  line-dark: "#2a2e2b"
  accent-dark: "#7cc49d"
typography:
  heading:
    fontFamily: "Familjen Grotesk Variable, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Hanken Grotesk Variable, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk Variable, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.6
rounded:
  frame: "14px"
  pill: "999px"
spacing:
  gutter: "1rem"
  gutter-wide: "2rem"
  band: "clamp(3rem, 6vw, 4.5rem)"
  column-gap: "clamp(2rem, 5vw, 4.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.35rem"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ground}"
  screenshot-frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.frame}"
---

# Design System: Axerie

## Overview

A plain, well-made studio page. The tools are the whole page, with no headline or intro: each one gets a band with its name, what it does in everyday words, one action and its real screenshot. Everything else stays out of the way. The page follows the visitor's color scheme, and so do the screenshots.

## Colors

### Primary

- **Ink** (`#111312` light, `#eef0ec` dark): headlines, body and the primary button's fill.

### Secondary

- **Accent green** (`#2c6a4c` light, `#7cc49d` dark): the small "kind" label under each tool name, button hover, focus rings and text selection. Never a large field.

### Neutral

- **Ground** (`#f3f4f1` / `#121413`): the page.
- **Surface** (`#ffffff` / `#1b1e1c`): behind screenshots while they load.
- **Muted ink** (`#545955` / `#a9afaa`): descriptions, header links, footer.
- **Line** (`#dcdfd9` / `#2a2e2b`): the 1px rule between bands.

### Named Rules

- **One accent, small.** Green marks labels and interaction only; the screenshots supply the page's color.

## Typography

Familjen Grotesk for display and tool names, Hanken Grotesk for text. Both are self-hosted variable fonts.

### Hierarchy

- **Heading:** each tool's name.
- **Body:** 1.125rem, descriptions capped near 38–46ch.
- **Label:** the tool's kind and where it runs, in accent green.

## Layout

One centered column, max 72rem, with 1rem gutters on phones and 2rem from 40rem up. Tool bands are a two-column grid, copy beside screenshot, alternating sides; below 60rem they stack with the screenshot after the action. Bands are separated by a 1px line, never by cards; the first band starts right under the header with no line.

## Elevation & Depth

Only screenshots lift. They sit in a 14px frame with a long, soft drop shadow; in dark mode a faint 1px light ring keeps their edge. Hovering a band's action or screenshot raises the screenshot slightly.

## Shapes

Screenshot frames 14px. Buttons are pills. Nothing else is rounded or boxed.

## Components

### Buttons

The one primary action per tool: an ink pill with a trailing arrow that nudges right on hover while the fill turns accent green.

### Navigation

Wordmark ("Axerie" in ink, "Software" in muted ink) on the left, a GitHub link on the right.

### Tool band

Name, kind label, description, action and screenshot, all from one entry in `src/data/tools.ts`. Adding a tool adds a band.

## Do's and Don'ts

### Do:

- Show every tool with a real light and dark screenshot.
- Write copy the way the tools' own sites do: what it does for you, plainly, and "Free and open source, forever."

### Don't:

- Add eyebrows, section numbers, stats, icon cards, gradient fields or a bio.
- Introduce a second accent or color a whole region.
