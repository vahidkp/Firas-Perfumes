'use client';

import { useCallback, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { SlidersHorizontal, X, Check, ChevronDown } from 'lucide-react';
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

export function ShopFilterBar({ resultCount }: { resultCount: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);

  const collection = searchParams.get('collection');
  const note = searchParams.get('note');
  const sort = searchParams.get('sort') ?? 'featured';

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null || params.get(key) === value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      const qs = params.toString();
      router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const hasFilters = Boolean(collection || note);

  const Pills = (
    <>
      <FilterGroup label="Collection">
        {COLLECTIONS.map((c) => (
          <Pill
            key={c}
            active={collection === c}
            onClick={() => setParam('collection', c)}
          >
            {COLLECTION_LABELS[c]}
          </Pill>
        ))}
      </FilterGroup>
      <FilterGroup label="Scent Note">
        {NOTES.map((n) => (
          <Pill key={n} active={note === n} onClick={() => setParam('note', n)}>
            {SCENT_NOTE_LABELS[n]}
          </Pill>
        ))}
      </FilterGroup>
    </>
  );

  return (
    <div className="border-y border-onyx/10 bg-ivory">
      <div className="container-px flex flex-wrap items-center gap-x-4 gap-y-3 py-4">
        {/* Desktop filters */}
        <div className="hidden min-w-0 flex-wrap items-center gap-x-6 gap-y-3 lg:flex">
          {Pills}
        </div>

        {/* Mobile filter trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="label-caps inline-flex shrink-0 items-center gap-2 border border-onyx/20 px-4 py-2 lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" aria-hidden />
          Filters
          {hasFilters && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
        </button>

        {/* Results + sort — pinned right, never wraps/squeezes */}
        <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-4">
          {hasFilters && (
            <button
              type="button"
              onClick={() => router.push(pathname, { scroll: false })}
              className="hidden whitespace-nowrap text-xs text-grey underline-offset-4 hover:text-gold hover:underline lg:inline"
            >
              Clear all
            </button>
          )}
          <span className="hidden whitespace-nowrap text-xs text-grey sm:inline">
            {resultCount} {resultCount === 1 ? 'item' : 'items'}
          </span>
          <span aria-hidden className="hidden h-4 w-px bg-onyx/15 sm:block" />
          <SortDropdown value={sort} onChange={(v) => setParam('sort', v)} />
        </div>
      </div>

      {/* Mobile filter drawer */}
      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        side="left"
        label="Filters"
      >
        <div className="flex items-center justify-between border-b border-gold/30 px-5 py-4">
          <h2 className="font-display text-xl">Filters</h2>
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setMobileOpen(false)}
            className="p-2 text-onyx hover:text-gold"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <div className="flex flex-col gap-6 overflow-y-auto p-5">{Pills}</div>
        <div className="mt-auto border-t border-onyx/10 p-5">
          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                router.push(pathname, { scroll: false });
                setMobileOpen(false);
              }}
              className="label-caps mb-3 block w-full border border-onyx/20 py-3 text-center"
            >
              Clear all
            </button>
          )}
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="label-caps block w-full bg-gold py-3 text-center text-ivory"
          >
            Show {resultCount} items
          </button>
        </div>
      </Drawer>
    </div>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <span className="label-caps text-grey">{label}</span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
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
    <div className="relative">
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
