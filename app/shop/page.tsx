import { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FilterSidebar, ShopToolbar } from '@/components/shop/ShopFilterBar';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Button } from '@/components/ui/Button';
import { products } from '@/data/products';
import { COLLECTION_LABELS, uniqueNotes } from '@/lib/utils';
import type { Collection, Product, ScentNote } from '@/lib/types';

type SearchParams = { [key: string]: string | string[] | undefined };

function titleFor(params: SearchParams): string {
  const q = (params.q as string | undefined)?.trim();
  if (q) return `Search: “${q}”`;
  const collection = params.collection as string | undefined;
  if (collection && collection in COLLECTION_LABELS) {
    return COLLECTION_LABELS[collection as Collection];
  }
  return 'All Fragrances';
}

export function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Metadata {
  const title = titleFor(searchParams);
  return {
    title,
    description: `Shop ${title} from FIRAS Perfume — premium inspired fragrances and Misk attar oils, crafted with high-quality ingredients. Made in Palestine.`,
  };
}

function filterProducts(params: SearchParams): Product[] {
  let filtered = [...products];
  const collection = params.collection as string | undefined;
  const note = params.note as string | undefined;
  const sort = params.sort as string | undefined;
  const q = (params.q as string | undefined)?.trim().toLowerCase();

  if (q) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.inspiredBy?.toLowerCase().includes(q)
    );
  }
  if (collection) filtered = filtered.filter((p) => p.collection === collection);
  if (note) {
    filtered = filtered.filter((p) =>
      uniqueNotes(p.scentNotes).includes(note as ScentNote)
    );
  }

  switch (sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filtered.sort(
        (a, b) =>
          (b.badges?.includes('New') ? 1 : 0) - (a.badges?.includes('New') ? 1 : 0)
      );
      break;
    default:
      break;
  }
  return filtered;
}

export default function ShopPage({ searchParams }: { searchParams: SearchParams }) {
  const filtered = filterProducts(searchParams);
  const title = titleFor(searchParams);

  return (
    <>
      {/* Page banner */}
      <section className="bg-onyx text-ivory">
        <div className="container-px py-12 text-center">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center justify-center gap-2 text-xs text-ivory/60">
              <li>
                <Link href="/" className="hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-gold">{title}</li>
            </ol>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ivory/70">
            Discover premium inspired fragrances and concentrated Misk attar oils, crafted
            for longevity and presence.
          </p>
        </div>
      </section>

      <section className="container-px py-10 lg:py-12">
        <div className="lg:grid lg:grid-cols-[15rem_1fr] lg:gap-10 xl:grid-cols-[16rem_1fr]">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="lg:sticky lg:top-28">
              <Suspense fallback={null}>
                <FilterSidebar />
              </Suspense>
            </div>
          </aside>

          {/* Toolbar + grid */}
          <div className="min-w-0">
            <Suspense fallback={<div className="mb-8 h-12 border-b border-onyx/10" />}>
              <ShopToolbar resultCount={filtered.length} />
            </Suspense>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center gap-5 py-20 text-center">
                <h2 className="font-display text-2xl">No fragrances match your filters</h2>
                <p className="max-w-sm text-sm text-grey">
                  Try adjusting or clearing your filters to see the full collection.
                </p>
                <Button href="/shop" variant="secondary">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <ProductGrid products={filtered} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
