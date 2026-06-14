# FIRAS Perfume — E-commerce Frontend

A 3-page luxury perfume storefront (Home · Shop · Product Detail) built with **Next.js 14
App Router**, TypeScript, Tailwind CSS, Zustand and Framer Motion — styled after the Scentido
reference layout with FIRAS's own gold / onyx / teal / ivory brand identity.

Built to the [PRD](./FIRAS_Perfume_NextJS_PRD.docx) and
[Design Audit](<./Firas_Perfumes_Design_Audit (1).docx>), following the 16 project skills in
`.claude/skills/`.

## Quick start
```bash
npm install
cp .env.example .env.local   # optional for local dev
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Tech stack
| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router, RSC, SSG) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + brand design tokens |
| State | Zustand (cart, wishlist, drawer) with `localStorage` persistence |
| Animation | Framer Motion + CSS keyframes |
| Carousels | Embla Carousel |
| Icons | lucide-react |
| Deploy | Vercel |

## Pages
- **`/`** — Home: hero, best-sellers carousel, value props, For Him/For Her split, scent-note
  explorer, featured grid, discovery strip, brand story, lifestyle banner, testimonials,
  contact strip.
- **`/shop`** — Catalogue with **URL-driven** collection + scent-note filters and sort
  (`/shop?collection=men&note=oud&sort=price-asc`), shareable & bookmarkable, mobile filter
  drawer, empty state.
- **`/product/[slug]`** — SSG page per SKU: gallery + thumbnails, size/qty selectors, scent
  profile, description accordion, trust badges, related-products carousel, per-product SEO.

## Project structure
```
app/            layout, home, shop, product/[slug], sitemap, robots, not-found
components/
  layout/       AnnouncementBar, Header, Footer, NewsletterForm
  sections/     Hero, ValueProps, CollectionSplit, CategoryExplorer, BestSellers,
                FeaturedGrid, BrandDiscoverStrip, BrandStoryBlock, LifestyleBanner,
                TestimonialsCarousel, ContactLocationStrip
  product/      ProductCard, ProductGrid, ProductCarousel, ProductGallery,
                ProductInfoPanel, ScentProfile, TrustBadges
  cart/         CartButtons, MiniCartDrawer
  shop/         ShopFilterBar
  ui/           Button, Badge, Accordion, Drawer, Carousel, Logo, SectionHeading, Reveal
lib/            types, utils, site config, use-mounted, store/{cart,wishlist,drawer}
data/           products.ts (12 SKUs)
public/images/  branded SVG placeholders (see IMAGE_PROMPTS.md to replace)
scripts/        gen-placeholders.mjs
```

## Cart & checkout (Phase 1)
Add-to-cart opens a slide-in mini-cart; checkout is a **WhatsApp order flow** — the CTA builds
a `wa.me` link pre-filled with the cart contents (number set via `NEXT_PUBLIC_WHATSAPP_NUMBER`).
Stripe/PayPal can be added in Phase 2.

## Images
All non-product art currently ships as **branded SVG placeholders**. Generate real imagery
with the prompts in **[IMAGE_PROMPTS.md](./IMAGE_PROMPTS.md)** and the client's retouched
bottle/box photos for products. Regenerate placeholders any time with
`node scripts/gen-placeholders.mjs`.

## Deploy to Vercel
1. Push to GitHub and import the repo at vercel.com (framework auto-detected).
2. Set env vars `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_WHATSAPP_NUMBER`.
3. Connect the production domain and update `NEXT_PUBLIC_SITE_URL` to match.

## Notes / assumptions
- Currency displayed as **QAR** (Qatar contact); change in `lib/utils.ts → formatPrice`.
- Product images are shared per gender until per-SKU photos are supplied (per the Design Audit).
- About/Contact resolve to on-page anchors + WhatsApp; full pages are out of the 3-page scope.
