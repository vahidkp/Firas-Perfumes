---
name: performance-and-image-optimization
description: "Use when optimizing images, loading performance, or Core Web Vitals for FIRAS Perfume. Trigger on 'optimize images', 'improve page speed', 'fix layout shift', or 'lazy load this section'."
---

# Performance & Image Optimization

## Overview
Ensures the site feels as fast and smooth as the Scentido reference, primarily through disciplined use of `next/image`, lazy-loading below-the-fold sections, and minimizing client-side JS where server components suffice.

## Image Conventions

- All product, hero, and lifestyle images go through `next/image`
- Hero banner image: `priority` flag set (loads eagerly, above the fold)
- All other images: default lazy loading (no `priority`)
- Always specify `sizes` for responsive images that change width across breakpoints, e.g.:

```tsx
<Image
  src={product.images[0]}
  alt={product.name}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
  className="object-cover"
/>
```

- Source images should be pre-optimized (compressed JPG/PNG or converted to WebP/AVIF) before adding to `public/images/`; `next/image` will further serve AVIF/WebP per the `next.config.js` formats setting

## Component Boundaries

- Default to Server Components for static sections (HeroBanner, BrandStoryBlock, LifestyleBanner, footer)
- Mark interactive pieces as Client Components only where needed: ProductCard (wishlist/add-to-cart), Carousel, MiniCartDrawer, ShopFilterBar, mobile nav
- Avoid making entire pages Client Components — keep `app/page.tsx`, `app/shop/page.tsx`, `app/product/[slug]/page.tsx` as Server Components that compose smaller client islands

## Layout Shift Prevention

- Reserve space for images via `aspect-ratio` utilities or explicit width/height before they load
- Carousel slides should have a fixed/aspect-ratio container so the carousel doesn't jump on image load
- Fonts loaded via `next/font` (automatic self-hosting, no FOUT/FOIT issues)

## Checklist
- [ ] Only the hero image uses `priority`
- [ ] All images have explicit `sizes` or fixed dimensions
- [ ] No unnecessary `"use client"` directives on page-level files
- [ ] Carousels and below-the-fold sections don't block initial page render
- [ ] Run a Lighthouse pass on each of the three pages before final delivery; address any Core Web Vitals issues (LCP, CLS) flagged
