---
name: product-card-and-grid
description: "Use when building or editing ProductCard or ProductGrid components, used on Home (Best Sellers, Featured Grid) and Shop pages. Trigger on 'create the product card', 'build the product grid', or 'show products in a grid'."
---

# Product Card & Grid

## Overview
The `ProductCard` is the core repeated unit across Home (Best Sellers, Featured Collection) and Shop (full catalogue grid). `ProductGrid` arranges cards responsively.

## ProductCard

### Content
- Primary image (`product.images[0]`), with optional hover-swap to `product.images[1]` if present
- Collection badge (MEN/WOMEN/MISK & OUD) — top-left or top-right corner overlay
- Optional status badge (New/Bestseller) — opposite corner
- Product name (`font-display`, medium weight)
- "Inspired by {inspiredBy}" subtitle (`text-grey text-sm`), omitted if absent
- Price (`text-gold font-semibold`)
- Wishlist icon (heart), top-right, toggles via `useWishlist()`
- Quick "Add to Cart" button — appears on hover (desktop) or always visible (mobile)

### Behaviour
- Entire card links to `/product/[slug]` except the wishlist icon and Add-to-Cart button (which use `stopPropagation`)
- Add-to-Cart adds the default size/quantity and opens the mini-cart drawer

### Example structure
```tsx
<Link href={`/product/${product.slug}`} className="group block">
  <div className="relative aspect-square overflow-hidden bg-ivory">
    <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
    <Badge collection={product.collection} className="absolute top-2 left-2" />
    <WishlistButton productId={product.id} className="absolute top-2 right-2" />
    <AddToCartButton product={product} className="absolute bottom-2 inset-x-2 opacity-0 group-hover:opacity-100 transition" />
  </div>
  <div className="pt-3">
    <h3 className="font-display text-base">{product.name}</h3>
    {product.inspiredBy && <p className="text-grey text-sm">Inspired by {product.inspiredBy}</p>}
    <p className="text-gold font-semibold mt-1">{formatPrice(product.price)}</p>
  </div>
</Link>
```

## ProductGrid

- Responsive columns: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`
- Used for: Shop page full catalogue, Home "Featured Collection" section
- For Home's "Best Sellers" row, wrap `ProductCard`s in the carousel-slider skill instead of a static grid

## Checklist
- [ ] Card works with products that have only one image (no broken hover-swap)
- [ ] Badge colours match the mapping defined in ui-component-library
- [ ] Add-to-Cart and Wishlist clicks do not trigger navigation
- [ ] Grid is responsive at all breakpoints with no overflow
- [ ] Prices formatted consistently (currency to be confirmed — see PRD open questions)
