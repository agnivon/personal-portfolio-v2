---
name: DevPro Portfolio v2
description: A premium, dark-mode portfolio design system tailored for software engineers.
version: "1.0.0"
colors:
  background: "#09090b"
  foreground: "#fafafa"
  card: "#18181b"
  popover: "#09090b"
  primary: "#fafafa"
  secondary: "#27272a"
  muted: "#27272a"
  accent: "#06b6d4"
  border: "#27272a"
typography:
  font-sans:
    fontFamily: Inter
  font-heading:
    fontFamily: Space Grotesk
rounded:
  sm: 6px
  md: 8px
  lg: 10px
  xl: 14px
components:
  primary-button:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
    rounded: "{rounded.xl}"
  secondary-button:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
  card:
    backgroundColor: "{colors.card}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
---

## Overview

Architectural Minimalism meets Engineering Precision. The UI evokes a premium IDE or high-end technical tooling. The design is strictly dark-mode-first, providing a deeply immersive and distraction-free environment that lets technical case studies and code artifacts shine.

## Colors

The palette relies heavily on deep, high-contrast Zinc tones punctuated by a vibrant, electric Cyan accent.

- **Background (#09090b):** A near-black void (Zinc-950) serving as the spatial foundation.
- **Card (#18181b):** Slightly elevated (Zinc-900) panels for content separation.
- **Foreground (#fafafa):** Crisp, high-contrast white for ultimate readability of primary text.
- **Secondary (#27272a):** Slate borders and subtle element backgrounds (Zinc-800).
- **Accent (#06b6d4):** Electric Cyan (Cyan-500). Used strictly for interactive states, primary calls-to-action, and subtle glows to provide a cyber-tech aesthetic.

## Typography

Typography focuses heavily on sharp readability and a modern, algorithmic feel.

- **Sans (Inter):** Highly legible, perfectly balanced geometric sans-serif for all body copy and metadata.
- **Heading (Space Grotesk):** A unique, squarish display font that brings a technical, slightly brutalist personality to titles and hero text.

## Elevation & Depth

Depth is established primarily through color layering and subtle border treatments rather than heavy drop shadows.

- **Base:** The main background represents infinite space.
- **Surface:** Cards and panels float slightly above, defined primarily by a delicate 1px border (`#27272a`) rather than a shadow. Hovering over interactive cards introduces a subtle upward transform (`-translate-y-1`) and a faint cyan glow (`shadow-cyan-500/5`).
- **Floating:** Modals, tooltips, and fixed navigation bars use background blurring (`backdrop-blur-md`) combined with partial opacity (`bg-zinc-950/80`) to create a glassmorphism effect.

## Shapes

Shapes heavily favor generous, friendly corner rounding to contrast against the sharp typography and dark colors.

- **Pill (Rounded Full):** Used for all interactive buttons and tags to create a welcoming, clickable affordance.
- **LG (10px):** The standard corner radius for broad surfaces like project cards and containers.
- **SM (6px) / MD (8px):** Used for inner elements like tooltips and smaller images inside cards.

## Components

The system relies on a minimal set of highly polished core components.

- **Project Cards:** Deep backgrounds (`#18181b`) with a faint border. On hover, the border takes on a subtle hint of the accent color (`border-cyan-500/50`).
- **Primary Buttons:** High-contrast interactions. Electric cyan backgrounds with near-black text.
- **Pill Tags:** Small, semi-transparent overlays used for displaying tech stacks and metadata (e.g. `bg-zinc-800 text-zinc-300`).

## Do's and Don'ts

- **Do** rely on generous padding and whitespace to separate content.
- **Don't** use multiple bright accent colors. Cyan is the sole primary accent.
- **Do** use `font-heading` (Space Grotesk) strictly for structural H1-H3 elements.
- **Don't** apply heavy drop-shadows to cards; use border contrasts instead.
