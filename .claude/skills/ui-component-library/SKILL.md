---
name: ui-component-library
description: "Use when building or styling shared UI primitives (Button, Badge, Accordion, Drawer, Dropdown, Input) for FIRAS Perfume. Trigger on 'add a button component', 'create a badge', 'set up shadcn', or whenever a new section needs a primitive that doesn't exist yet in components/ui."
---

# UI Component Library (shadcn/ui base)

## Overview
Provides the shared, brand-styled primitives used across all three pages (Home, Shop, Product Detail): buttons, badges, accordions, drawers, dropdowns. Built on shadcn/ui + Radix for accessibility, restyled with FIRAS tokens (gold/onyx/teal/ivory, Playfair Display/Poppins).

## Setup
```bash
npx shadcn@latest add button badge accordion sheet dropdown-menu separator
```
(`sheet` = drawer component, used for the mini-cart and mobile nav)

## Component Conventions

### Button
- Variants: `primary` (gold bg, ivory text), `secondary` (outline, onyx border/text), `ghost` (text-only, for nav/icon buttons)
- Default size matches Scentido's slim CTA buttons (compact padding, uppercase tracking-wide label)

```tsx
<Button variant="primary">Shop Now</Button>
<Button variant="secondary">Buy Now</Button>
```

### Badge
- Used for: collection tags (MEN/WOMEN/MISK & OUD), status tags (New/Bestseller)
- Style: `font-body uppercase text-[10px] tracking-wider px-2 py-1 rounded-sm`
- Colour mapping: `men` → onyx bg/ivory text, `women` → teal bg/onyx text, `misk` → gold bg/onyx text, `New`/`Bestseller` → outline gold

### Accordion
- Used on Product Detail for Description / Ingredients / Shipping sections
- Single-open or multi-open both acceptable; default to single-open for cleaner mobile UX

### Sheet (Drawer)
- Used for: Mini-cart drawer (right side), mobile navigation menu (left or full-screen)
- Background `bg-ivory`, header with FIRAS logo + close icon

### Dropdown
- Used for: account menu, sort dropdown on Shop page, mobile filter accordion

## Checklist
- [ ] All primitives styled with brand tokens, not default shadcn colours
- [ ] Buttons have visible focus states (keyboard accessible)
- [ ] Badge colour mapping documented and applied consistently across ProductCard and Product Detail
- [ ] Sheet/drawer traps focus and closes on Esc + overlay click
