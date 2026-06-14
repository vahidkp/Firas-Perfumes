---
name: product-detail-page
description: "Use when building or editing the Product Detail page (/product/[slug]) — gallery, info panel, scent profile, description accordion, trust badges, and related products. Trigger on 'build the product page', 'add the product gallery', or 'create the scent profile section'."
---

# Product Detail Page

## Overview
Implements `/product/[slug]`, a statically generated page (SSG) for each of the 12 SKUs, combining image gallery, purchase actions, scent profile, descriptive accordion, trust badges, and related products.

## Routing & Data

```tsx
// app/product/[slug]/page.tsx
import { products } from '@/data/products';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} | FIRAS Perfume`,
    description: product.description,
    openGraph: { images: [product.images[0]] },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) notFound();
  // ... render sections
}
```

## Sections

### Breadcrumb
`Home / Shop / {Collection label} / {Product name}` — Collection label maps `men→"Men's Collection"`, `women→"Women's Collection"`, `misk→"Misk & Attar Oils"`.

### Product Gallery
- Main image + thumbnail strip (vertical on desktop, horizontal scroll on mobile)
- If `product.images.length === 1`, hide the thumbnail strip and just show the single image (graceful fallback per product-data-modeling)
- Optional zoom-on-hover using CSS `scale` on the main image container

### Product Info Panel
- `font-display` product name, collection badge
- "Inspired by {inspiredBy}" line (if present)
- Price (updates if size selection changes price — if all sizes share one price, display static price)
- Size selector: pill buttons for each value in `product.sizesMl` (if present)
- Quantity selector (stepper, min 1)
- "Add to Cart" (primary, gold) and "Buy Now" (secondary) buttons
- Wishlist heart icon

### Scent Profile
- Three labeled groups (Top / Middle / Base notes), each rendering `product.scentNotes.{top,middle,base}` as small pill badges or icons
- Visually echoes the Home page's CategoryExplorer note icons for consistency

### Description Accordion
Three sections using the Accordion primitive:
1. **Description** — `product.description`
2. **Ingredients & Quality** — standard copy block disclosing the product is a premium-quality inspired fragrance crafted with high-quality ingredients (not the original branded product)
3. **Shipping & Returns** — standard policy copy (placeholder acceptable, link to footer Legal pages)

### Trust Badges Row
4 icons with short labels: Free Shipping (eligible orders), Long-Lasting Formula, Made in Palestine, Authentic Quality Promise

### Related Products
- Carousel (via carousel-slider skill) of 4–5 products: same `collection` as current product, excluding itself; if fewer than 4 matches exist, fill remainder from other collections

## Checklist
- [ ] All 12 product slugs resolve via `generateStaticParams` with no 404s
- [ ] Metadata (title/description/OG image) generated per product
- [ ] Size selection (where applicable) updates the cart payload correctly
- [ ] Add to Cart opens the mini-cart drawer with the selected size/quantity
- [ ] Scent profile renders even when only some note arrays are populated
- [ ] Related products never show the current product itself
