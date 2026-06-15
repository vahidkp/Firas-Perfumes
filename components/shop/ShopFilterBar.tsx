'use client';

import { useCallback, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { SlidersHorizontal, X, Check, ChevronDown, Plus, Minus } from 'lucide-react';
import { Drawer } from '@/components/ui/Drawer';
import { cn, COLLECTION_LABELS, SCENT_NOTE_LABELS } from '@/lib/utils';
import type { Collection, ScentNote } from '@/lib/types';

const COLLECTIONS: Collection[] = ['men', 'women', 'misk'];
const NOTES: ScentNote[] = ['oud', 'musk', 'floral', 'citrus', 'woody', 'fresh', 'amber'];
const SORTS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
] as const;

/** Shared URL-param state for both the desktop sidebar and the mobile drawer. */
function useFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const collection = searchParams.get('collection');
  const note = searchParams.get('note');
  const sort = searchParams.get('sort') ?? 'featured';

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null || params.get(key) === value) params.delete(key);
      else params.set(key, value);
      const qs = params.toString();
      router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const clearAll = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('collection');
    params.delete('note');
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [router, pathname, searchParams]);

  return {
    collection,
    note,
    sort,
    setParam,
    clearAll,
    hasFilters: Boolean(collection || note),
  };
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-full border px-3 py-1.5 text-xs transition-colors',
        active
          ? 'border-gold bg-gold text-ivory'
          : 'border-onyx/20 text-onyx hover:border-gold hover:text-gold'
      )}
    >
      {children}
    </button>
  );
}

function FilterSection({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-onyx/10 py-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="label-caps flex w-full items-center justify-between text-onyx"
      >
        {title}
        {open ? (
          <Minus className="h-4 w-4 text-gold" aria-hidden />
        ) : (
          <Plus className="h-4 w-4 text-gold" aria-hidden />
        )}
      </button>
      {open && <div className="mt-4 flex flex-wrap gap-2">{children}</div>}
    </div>
  );
}

/** The filter panel — reused in the desktop sidebar and the mobile drawer. */
export function FilterSidebar() {
  const { collection, note, setParam, clearAll, hasFilters } = useFilters();

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h2 className="label-caps text-onyx">Filters</h2>
        {hasFilters && (
          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-grey underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterSection title="Collection">
        {COLLECTIONS.map((c) => (
          <Pill
            key={c}
            active={collection === c}
            onClick={() => setParam('collection', c)}
          >
            {COLLECTION_LABELS[c]}
          </Pill>
        ))}
      </FilterSection>

      <FilterSection title="Scent Note">
        {NOTES.map((n) => (
          <Pill key={n} active={note === n} onClick={() => setParam('note', n)}>
            {SCENT_NOTE_LABELS[n]}
          </Pill>
        ))}
      </FilterSection>
    </div>
  );
}

/** Top toolbar above the grid: result count + sort, plus a mobile "Filters" button. */
export function ShopToolbar({ resultCount }: { resultCount: number }) {
  const { sort, setParam, hasFilters } = useFilters();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="mb-8 flex items-center justify-between gap-4 border-b border-onyx/10 pb-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="label-caps inline-flex items-center gap-2 border border-onyx/20 px-4 py-2 lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" aria-hidden />
            Filters
            {hasFilters && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
          </button>
          <span className="whitespace-nowrap text-xs text-grey">
            {resultCount} {resultCount === 1 ? 'item' : 'items'}
          </span>
        </div>
        <SortDropdown value={sort} onChange={(v) => setParam('sort', v)} />
      </div>

      {/* Mobile filter drawer */}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)} side="left" label="Filters">
        <div className="flex items-center justify-end border-b border-gold/30 px-5 py-4">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setMobileOpen(false)}
            className="p-2 text-onyx hover:text-gold"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <FilterSidebar />
        </div>
        <div className="mt-auto border-t border-onyx/10 p-5">
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="label-caps block w-full bg-gold py-3 text-center text-ivory"
          >
            Show {resultCount} {resultCount === 1 ? 'item' : 'items'}
          </button>
        </div>
      </Drawer>
    </>
  );
}

function SortDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const current = SORTS.find((s) => s.value === value) ?? SORTS[0];

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="label-caps inline-flex items-center gap-2 border border-onyx/20 px-4 py-2"
      >
        {current.label}
        <ChevronDown className="h-3.5 w-3.5" aria-hidden />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-20 mt-1 w-56 border border-onyx/15 bg-ivory shadow-lg"
        >
          {SORTS.map((s) => (
            <li key={s.value} role="option" aria-selected={s.value === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(s.value);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm hover:bg-onyx/5"
              >
                {s.label}
                {s.value === value && <Check className="h-4 w-4 text-gold" aria-hidden />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
