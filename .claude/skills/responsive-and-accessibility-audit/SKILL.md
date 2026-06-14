---
name: responsive-and-accessibility-audit
description: "Use as a final-pass checklist when a page or section is functionally complete, to verify responsiveness and accessibility before considering it done. Trigger on 'review this page', 'check accessibility', 'make this responsive', or before marking any page as complete."
---

# Responsive & Accessibility Audit

## Overview
A checklist-driven review pass applied to each of the three pages (Home, Shop, Product Detail) and shared components, ensuring the site works well across breakpoints and meets WCAG AA basics against the FIRAS ivory/gold/onyx/teal palette.

## Breakpoints to Verify
- Mobile: ~375px width
- Tablet: ~768px width
- Desktop: ~1280px+ width

## Responsiveness Checklist
- [ ] No horizontal scroll/overflow on any breakpoint
- [ ] Header collapses to mobile nav (Sheet/drawer) below `md`
- [ ] CollectionSplit ("For Him"/"For Her") stacks vertically on mobile
- [ ] CategoryExplorer and carousels show edge-peek/partial slides on mobile, full row on desktop
- [ ] ProductGrid: 1 column mobile, 2 tablet, 4 desktop (or as specified per section)
- [ ] Product Detail gallery thumbnails reflow from vertical (desktop) to horizontal scroll (mobile)
- [ ] Mini-cart drawer is full-width on mobile, fixed-width panel on desktop
- [ ] Footer columns stack on mobile, multi-column on desktop

## Accessibility Checklist
- [ ] All images have meaningful `alt` text (product name + context, e.g. "Creed Aventus inspired perfume bottle")
- [ ] Decorative images/icons use `alt=""` or `aria-hidden`
- [ ] All interactive elements (buttons, links, drawer triggers) are reachable via Tab and show a visible focus ring
- [ ] Color contrast: body text on ivory (#F7F2E8) and on teal (#8FCFC8) meets WCAG AA (4.5:1 for normal text); verify gold (#B8860B) text is only used at sizes/weights that meet AA, or paired with a darker background
- [ ] Drawers/dialogs (mini-cart, mobile nav) trap focus and close on Esc
- [ ] Form inputs (newsletter, filters) have associated labels (visible or `sr-only`)
- [ ] Carousels are operable via keyboard, not mouse/touch-only
- [ ] Headings follow a logical hierarchy (one `h1` per page, nested `h2`/`h3` for sections)

## Process
Run this audit after completing each page (Home, Shop, Product Detail) and again after any shared-component change (header, footer, cart drawer). Document any unresolved items as follow-ups rather than blocking unrelated work.
