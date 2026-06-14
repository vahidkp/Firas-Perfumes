---
name: hero-and-section-blocks
description: "Use when building the Home page's content sections — hero banner, value props, collection split (For Him/For Her), category explorer, brand story, lifestyle banner, testimonials. Trigger on 'build the hero', 'create the For Him/For Her section', 'add the brand story section', or any Home page section work."
---

# Hero & Home Page Section Blocks

## Overview
Implements the reusable section components that make up the Home page, each modeled on a corresponding Scentido section but reskinned with FIRAS imagery and the gold/onyx/teal/ivory palette. Each component should accept content via props so it could (in theory) be reused or driven by CMS data later.

## Components & Specs

### `HeroBanner`
- Full-bleed image (women's or men's bottle on a lifestyle backdrop), `h-[70vh]` on desktop, `h-[50vh]` mobile
- Overlay: large `font-display` wordmark/tagline, one primary CTA button ("Shop Now" → `/shop`)
- Props: `image`, `heading`, `subheading?`, `ctaLabel`, `ctaHref`

### `ValuePropsRow`
- 3-column row, icon + title + short description each
- Suggested content: "Premium Ingredients", "Free Shipping on Prepaid Orders", "Complimentary Sample with Every Order"
- Props: `items: { icon, title, description }[]`

### `CollectionSplit` ("For Him" / "For Her")
- Two-panel layout, each panel ~50% width on desktop, stacked on mobile
- Left panel: `bg-onyx text-ivory`, men's product collage image, heading "FOR HIM", CTA → `/shop?collection=men`
- Right panel: `bg-teal text-onyx` (or bottle-green), women's product collage, heading "FOR HER", CTA → `/shop?collection=women`
- Props: `panels: { image, heading, ctaHref, theme: 'dark' | 'light' }[]`

### `CategoryExplorer` ("Elevate Your Scent Journey" equivalent)
- Horizontal row of 5–6 circular/rounded image tiles, each labeled with a scent note (Oud, Musk, Floral, Citrus, Woody, Amber)
- Each tile links to `/shop?note={note}`
- Props: `categories: { image, label, note }[]`

### `FeaturedProductGrid`
- Reuses `ProductGrid`/`ProductCard` from the product-card-and-grid skill, showing a curated subset (e.g. 10 of 12 SKUs)

### `BrandDiscoverStrip`
- 3-column: "Men's Collection", "Women's Collection", "Misk & Attar Oils" — each a lifestyle image + heading + "Shop Now" linking to the relevant filtered Shop view

### `BrandStoryBlock` ("In Focus")
- Two-column: text block (Palestine heritage, premium-quality inspired perfumes, craftsmanship) + supporting image
- Props: `heading`, `body`, `image`, `ctaLabel?`, `ctaHref?`

### `LifestyleBanner`
- Full-width atmospheric image, optional centered overlay text
- Props: `image`, `overlayText?`

### `TestimonialsCarousel`
- Uses the carousel-slider skill; 2–3 quote cards with star rating + name

### `ContactLocationStrip`
- Banner-style section with WhatsApp contact (+974 77833024) and "Al Thumama Complex" location text, styled to match the Scentido store-location banner but adapted for a brand without a physical retail photo (use a styled graphic/pattern background if no photo is available)

## Checklist
- [ ] Every section component is in `components/sections/` and accepts props (no hardcoded copy where avoidable)
- [ ] Sections stack correctly on mobile (no horizontal overflow)
- [ ] CollectionSplit and CategoryExplorer links produce correct `/shop` query params
- [ ] Images use `next/image` with appropriate `sizes` and `priority` only for the hero
