---
name: shop-filtering-and-sorting
description: "Use when building or editing the Shop/Collection page's filter bar, sort dropdown, or URL-driven filtering logic. Trigger on 'add filters to the shop page', 'implement sorting', or 'filter products by collection/note'."
---

# Shop Filtering & Sorting

## Overview
Implements URL-driven filtering and sorting on the Shop page (`/shop`), so filtered/sorted views are shareable, bookmarkable, and work correctly with browser back/forward.

## URL Query Params

| Param | Values | Example |
|---|---|---|
| `collection` | `men` \| `women` \| `misk` | `/shop?collection=men` |
| `note` | `oud` \| `musk` \| `floral` \| `citrus` \| `woody` \| `fresh` \| `amber` | `/shop?note=oud` |
| `sort` | `featured` \| `price-asc` \| `price-desc` \| `newest` | `/shop?sort=price-asc` |
| `price_min`, `price_max` | numbers | `/shop?price_min=50&price_max=150` |

Multiple params combine with AND logic (e.g. `?collection=men&note=oud&sort=price-asc`).

## Implementation Pattern

```tsx
// app/shop/page.tsx
import { products } from '@/data/products';

export default function ShopPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  let filtered = [...products];

  if (searchParams.collection) {
    filtered = filtered.filter(p => p.collection === searchParams.collection);
  }
  if (searchParams.note) {
    filtered = filtered.filter(p =>
      [...p.scentNotes.top, ...p.scentNotes.middle, ...p.scentNotes.base].includes(searchParams.note as any)
    );
  }
  if (searchParams.price_min) filtered = filtered.filter(p => p.price >= Number(searchParams.price_min));
  if (searchParams.price_max) filtered = filtered.filter(p => p.price <= Number(searchParams.price_max));

  switch (searchParams.sort) {
    case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
    case 'newest': filtered.sort((a, b) => (b.badges?.includes('New') ? 1 : 0) - (a.badges?.includes('New') ? 1 : 0)); break;
    default: break; // 'featured' = catalogue order
  }

  return (
    <>
      <ShopFilterBar />
      <ProductGrid products={filtered} />
    </>
  );
}
```

## ShopFilterBar Component
- Client component using `useRouter`/`usePathname`/`useSearchParams` to update the URL on filter change (`router.push` with merged query string)
- Desktop: horizontal filter row + sort dropdown on the right
- Mobile: filters collapse into a "Filters" button that opens a Sheet (drawer) containing the same controls

## Page Title Logic
- If `collection=men` → "Men's Collection"
- If `collection=women` → "Women's Collection"
- If `collection=misk` → "Misk & Attar Oils"
- Otherwise → "All Fragrances"

## Empty State
If `filtered.length === 0`, show a centered message ("No fragrances match your filters") and a "Clear Filters" button linking to `/shop`.

## Checklist
- [ ] All filter/sort combinations update the URL and are shareable
- [ ] Page title reflects the active collection filter
- [ ] Empty state renders correctly for impossible filter combinations
- [ ] Mobile filter drawer contains identical controls to desktop bar
- [ ] Filtering/sorting works correctly with the full 12-product catalogue
