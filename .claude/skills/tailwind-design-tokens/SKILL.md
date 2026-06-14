---
name: tailwind-design-tokens
description: "Use when configuring Tailwind theme, colours, fonts, or spacing for FIRAS Perfume. Trigger on 'set up the colour palette', 'configure tailwind theme', 'add brand fonts', or whenever a component needs a brand colour/font token that doesn't exist yet."
---

# Tailwind Design Tokens — FIRAS Perfume

## Overview
Centralizes the FIRAS brand design system (from the Brand & Design Audit) into Tailwind theme extensions so every component uses consistent colours, fonts, and spacing instead of hardcoded hex values.

## Colour Tokens
Add to `tailwind.config.ts` under `theme.extend.colors`:

```ts
colors: {
  onyx: '#1A1A1A',        // Men's collection, header/nav, dark sections
  gold: '#B8860B',        // Primary accent — buttons, links, dividers, prices
  'bottle-green': '#1F3D2B', // Women's bottle accent / deep backgrounds
  teal: '#8FCFC8',        // Women's collection sections, badges
  ivory: '#F7F2E8',       // Primary page background
  grey: '#8A8A8A',        // Secondary text
}
```

## Typography Tokens
Use `next/font` for Playfair Display (display/serif) and Poppins (body/sans):

```ts
// app/layout.tsx
import { Playfair_Display, Poppins } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' });
```

```ts
// tailwind.config.ts
fontFamily: {
  display: ['var(--font-display)'],
  body: ['var(--font-body)'],
}
```

## Usage Conventions
- Headings, logo wordmark, hero text → `font-display`
- Body copy, nav, buttons, product info → `font-body`
- Badges/labels (MEN, WOMEN, MISK & OUD, NEW) → `font-body uppercase tracking-wide text-xs`
- Primary CTA buttons → `bg-gold text-ivory hover:bg-gold/90`
- Men's sections → `bg-onyx text-ivory`
- Women's sections → `bg-teal text-onyx` or `bg-bottle-green text-ivory`
- Page background default → `bg-ivory text-onyx`

## Checklist
- [ ] All six brand colours added as Tailwind tokens (no raw hex in components)
- [ ] Playfair Display + Poppins loaded via next/font and mapped to `font-display`/`font-body`
- [ ] Spacing scale uses Tailwind defaults unless a section needs a custom value (document any custom spacing added)
- [ ] Verify contrast: gold text on ivory and teal backgrounds meets WCAG AA for body text size
