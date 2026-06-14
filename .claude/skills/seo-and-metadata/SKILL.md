---
name: seo-and-metadata
description: "Use when configuring site-wide or per-page SEO metadata, Open Graph tags, sitemap, or robots.txt for FIRAS Perfume. Trigger on 'add SEO metadata', 'set up Open Graph', 'create a sitemap', or 'improve search visibility'."
---

# SEO & Metadata

## Overview
Configures Next.js Metadata API for consistent, search-friendly titles/descriptions across the three pages, plus basic site infrastructure (sitemap, robots.txt, favicon/OG defaults).

## Root Metadata

```ts
// app/layout.tsx
export const metadata: Metadata = {
  title: { default: 'FIRAS Perfume | Premium Inspired Fragrances', template: '%s | FIRAS Perfume' },
  description: 'FIRAS Perfume offers premium-quality fragrances inspired by iconic designer scents, crafted with high-quality ingredients for a long-lasting experience. Made in Palestine.',
  metadataBase: new URL('https://firasperfume.com'), // placeholder domain — confirm with client
  openGraph: {
    siteName: 'FIRAS Perfume',
    images: ['/images/brand/og-default.jpg'],
  },
};
```

## Per-Page Metadata

| Page | Title | Notes |
|---|---|---|
| Home (`/`) | "FIRAS Perfume \| Premium Inspired Fragrances" | uses root default |
| Shop (`/shop`) | Dynamic based on `collection` query param — e.g. "Men's Collection \| FIRAS Perfume", "Women's Collection \| FIRAS Perfume", "Misk & Attar Oils \| FIRAS Perfume", or "Shop All Fragrances \| FIRAS Perfume" |
| Product (`/product/[slug]`) | "{Product Name} \| FIRAS Perfume", description = `product.description`, OG image = `product.images[0]` |

## Sitemap & Robots

```ts
// app/sitemap.ts
import { products } from '@/data/products';

export default function sitemap() {
  const base = 'https://firasperfume.com';
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/shop`, lastModified: new Date() },
    ...products.map(p => ({ url: `${base}/product/${p.slug}`, lastModified: new Date() })),
  ];
}
```

```ts
// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://firasperfume.com/sitemap.xml',
  };
}
```

## Checklist
- [ ] Root metadata includes title template, description, and default OG image
- [ ] Shop page title reflects active collection filter
- [ ] Every product page has unique title, description, and OG image
- [ ] `sitemap.ts` includes Home, Shop, and all 12 product pages
- [ ] `robots.ts` allows crawling and references the sitemap
- [ ] Replace placeholder domain `firasperfume.com` with the actual production domain once confirmed
