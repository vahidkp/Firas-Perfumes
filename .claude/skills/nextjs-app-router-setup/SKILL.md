---
name: nextjs-app-router-setup
description: "Use when initializing or restructuring the FIRAS Perfume Next.js project — scaffolding the App Router folder structure, TypeScript config, linting, and image domain config. Trigger on tasks like 'set up the project', 'create folder structure', 'configure next.config', or any first-time scaffolding request."
---

# Next.js App Router Setup

## Overview
Establishes the foundation for the FIRAS Perfume e-commerce site: a Next.js 14+ App Router project in TypeScript, with a clean folder structure that the other skills (UI components, product data, cart, etc.) build on top of.

## Conventions

### Folder structure
```
app/
  layout.tsx              # Root layout: fonts, global styles, header/footer
  page.tsx                # Home page (Page 1)
  shop/
    page.tsx              # Shop/Collection page (Page 2)
  product/
    [slug]/
      page.tsx            # Product Detail page (Page 3)
  globals.css
components/
  layout/                 # Header, Footer, AnnouncementBar
  sections/               # HeroBanner, CollectionSplit, CategoryExplorer, etc.
  product/                # ProductCard, ProductGrid, ProductGallery
  cart/                   # MiniCartDrawer, CartItem
  ui/                      # shadcn/ui primitives (Button, Badge, Accordion...)
lib/
  store/                  # Zustand stores (cart, wishlist)
  utils.ts
data/
  products.ts             # Product catalogue (12 SKUs)
public/
  images/
    products/
    hero/
    brand/
```

### Setup commands
```bash
npx create-next-app@latest firas-perfume --typescript --tailwind --eslint --app --src-dir=false
cd firas-perfume
npx shadcn@latest init
```

### next.config.js
Configure remote/local image domains and any needed experimental flags:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};
module.exports = nextConfig;
```

### TypeScript
Use strict mode (default with create-next-app). Define shared types in `lib/types.ts` (e.g. `Product`, `CartItem`).

## Checklist
- [ ] App Router enabled (`app/` directory present)
- [ ] TypeScript strict mode on
- [ ] Tailwind configured and `globals.css` imports Tailwind layers
- [ ] Folder structure matches convention above before other skills start adding files
- [ ] ESLint passes with no errors on a clean scaffold
