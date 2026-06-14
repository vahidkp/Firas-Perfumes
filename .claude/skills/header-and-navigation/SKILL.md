---
name: header-and-navigation
description: "Use when building or editing the site header, announcement bar, navigation menu, or footer for FIRAS Perfume. Trigger on 'build the header', 'add navigation', 'create the footer', or 'add the announcement bar'."
---

# Header, Navigation & Footer

## Overview
Builds the global layout chrome shared by all three pages, modeled on the Scentido reference: a slim announcement bar, a centered-logo sticky header with utility icons, a primary nav row, and a multi-column footer.

## Header Structure

```
[ Announcement Bar — full width, gold bg, centered promo text ]
[ Search icon ......... FIRAS crest logo (centered) ......... Account | Wishlist | Cart ]
[ Primary nav: Home | Men's | Women's | Misk & Oud | About Us | Contact ]
```

### Conventions
- Container: `sticky top-0 z-50 bg-ivory border-b border-onyx/10`
- Announcement bar: `bg-gold text-onyx text-xs text-center py-2`
- Logo: centered FIRAS crest SVG/PNG, links to `/`
- Cart icon shows a badge with item count from `useCart()` (see cart-state-management skill)
- On mobile (< md): collapse primary nav into a hamburger that opens the Sheet/drawer nav from ui-component-library

### Primary Nav Links
| Label | Route |
|---|---|
| Home | `/` |
| Men's Collection | `/shop?collection=men` |
| Women's Collection | `/shop?collection=women` |
| Misk & Oud | `/shop?collection=misk` |
| About Us | `/#about` (anchor to Brand Story section on Home, or future `/about`) |
| Contact | `/#contact` or WhatsApp link |

## Footer Structure

4–5 columns, `bg-onyx text-ivory` (or `bg-ivory text-onyx` with gold dividers — choose one consistently):

1. **Brand column**: FIRAS crest logo + 1–2 line brand statement + "Made in Palestine" badge
2. **Legal**: Privacy Policy, Terms & Conditions, Cookie Policy, Refund Policy
3. **Customer Service**: Contact Us, My Account, FAQ
4. **About**: Our Story, Careers/Press (optional, can be placeholders)
5. **Newsletter**: email input + subscribe button (stub API route acceptable for Phase 1)

Bottom row: social icons (Instagram @FERAS_BARFAN), WhatsApp contact (+974 77833024), copyright line.

## Checklist
- [ ] Header is sticky and remains usable on scroll without layout shift
- [ ] Logo, search, account, wishlist, cart icons all present and linked
- [ ] Mobile nav opens in a Sheet/drawer with all primary links + utility icons
- [ ] Footer includes Made in Palestine badge and WhatsApp contact
- [ ] Cart icon badge updates reactively when items are added/removed
