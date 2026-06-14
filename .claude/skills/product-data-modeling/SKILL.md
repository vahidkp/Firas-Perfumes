---
name: product-data-modeling
description: "Use when defining or updating the product catalogue, the Product TypeScript type, or any data file that ProductCard, ProductGrid, Shop filters, or Product Detail pages consume. Trigger on 'add a product', 'update the catalogue', 'define the Product type', or 'seed data'."
---

# Product Data Modeling

## Overview
Defines the canonical shape of a FIRAS product and the seed data file (`data/products.ts`) covering all 12 SKUs (Men's, Women's, Misk/Attar). All other skills (cards, grid, filters, detail page) read from this single source of truth.

## Product Type

```ts
// lib/types.ts
export type Collection = 'men' | 'women' | 'misk';

export type ScentNote = 'oud' | 'musk' | 'floral' | 'citrus' | 'woody' | 'fresh' | 'amber';

export interface Product {
  id: string;
  slug: string;
  name: string;
  collection: Collection;
  inspiredBy?: string;          // e.g. "Creed Aventus"
  scentNotes: {
    top: ScentNote[];
    middle: ScentNote[];
    base: ScentNote[];
  };
  price: number;                 // base price in smallest display unit (e.g. QAR)
  sizesMl?: number[];            // e.g. [50, 100] — optional, defaults to single size
  images: string[];              // paths under /public/images/products/
  description: string;
  badges?: ('New' | 'Bestseller')[];
}
```

## Seed Data Conventions

- File: `data/products.ts`, exporting `export const products: Product[] = [...]`
- `slug` is kebab-case, derived from name (e.g. "g-armani", "creed-aventus", "misk-al-tahara")
- `collection`:
  - `men`: G-Armani, Imperial Valley, Creed Aventus, Oud Cady, Misk Oud Al Karam*
  - `women`: Good Girl, Ajmal Lamsa, Chanel No. 5, Gucci Flora, Lanc\u00f4me La Vie Est Belle, Misk Al Tahara*
  - (*Misk products can alternatively use `collection: 'misk'` if a dedicated Misk/Attar shop section is desired — confirm with stakeholders before finalizing)
- `images[]`: first image is the primary bottle shot used in cards/grids; subsequent images (box shot, lifestyle shot) populate the Product Detail gallery
- `inspiredBy` is shown as "Inspired by {inspiredBy}" on cards and detail pages — omit for Misk products with no designer equivalent
- All products in the same collection share the same base bottle/box images unless a specific retouched image exists per SKU — fall back gracefully (see Product Detail Gallery skill)

## Example Entry

```ts
{
  id: 'p01',
  slug: 'creed-aventus',
  name: 'Creed Aventus',
  collection: 'men',
  inspiredBy: 'Creed Aventus',
  scentNotes: { top: ['citrus'], middle: ['woody'], base: ['amber'] },
  price: 120,
  sizesMl: [50, 100],
  images: ['/images/products/men-bottle.jpg', '/images/products/men-box.jpg'],
  description: 'A bold, long-lasting interpretation inspired by Creed Aventus, crafted with premium ingredients for a rich woody-fruity character.',
  badges: ['Bestseller'],
}
```

## Checklist
- [ ] All 12 SKUs present with unique `id` and `slug`
- [ ] Every product has at least one image path that exists under `public/images/products/`
- [ ] `scentNotes` populated (even if approximate) so the Scent Profile section on Product Detail renders
- [ ] Prices are numbers (no currency symbols) — formatting handled in UI layer
