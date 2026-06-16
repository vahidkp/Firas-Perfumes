'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { products } from '@/data/products';
import { formatPrice, cn } from '@/lib/utils';
import { useMounted } from '@/lib/use-mounted';

export function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const mounted = useMounted();

  // Esc to close, lock scroll, focus the input, reset on close.
  useEffect(() => {
    if (!open) {
      setQuery('');
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => inputRef.current?.focus(), 60);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      clearTimeout(t);
    };
  }, [open, onClose]);

  const term = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!term) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.inspiredBy?.toLowerCase().includes(term)
      )
      .slice(0, 6);
  }, [term]);

  function goToResults() {
    if (!term) return;
    router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
    onClose();
  }

  // Render the portal only after mount so the server and the client's first
  // paint agree (both render nothing), avoiding a hydration mismatch.
  if (!mounted) return null;

  return createPortal(
    <div
      aria-hidden={!open}
      className={cn(
        'fixed inset-0 z-[110] transition-opacity duration-300',
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      )}
    >
      <div
        className="absolute inset-0 bg-onyx/50 backdrop-blur-[1px]"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search fragrances"
        className={cn(
          'absolute inset-x-0 top-0 bg-ivory shadow-2xl transition-transform duration-300 ease-out',
          open ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="container-px py-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              goToResults();
            }}
            className="flex items-center gap-3 border-b border-onyx/20 pb-3 focus-within:border-gold"
          >
            <Search className="h-5 w-5 shrink-0 text-grey" aria-hidden />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search fragrances…"
              aria-label="Search fragrances"
              className="w-full bg-transparent text-base text-onyx placeholder:text-grey focus:outline-none sm:text-lg"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="shrink-0 p-2 text-onyx transition-colors hover:text-gold"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </form>

          {!term ? (
            <p className="py-5 text-xs text-grey">
              Try “Aventus”, “oud”, or “Good Girl”.
            </p>
          ) : results.length === 0 ? (
            <p className="py-6 text-sm text-grey">
              No fragrances match “{query.trim()}”.
            </p>
          ) : (
            <div className="max-h-[60vh] overflow-y-auto py-2">
              <ul className="divide-y divide-onyx/10">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/product/${p.slug}`}
                      onClick={onClose}
                      className="group flex items-center gap-4 py-3"
                    >
                      <span className="relative h-16 w-14 shrink-0 overflow-hidden rounded-sm bg-[#fbf8f1]">
                        <Image
                          src={p.images[0]}
                          alt=""
                          aria-hidden
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-sm transition-colors group-hover:text-gold">
                          {p.name}
                        </span>
                        <span className="mt-0.5 block truncate text-[11px] uppercase tracking-[0.14em] text-grey">
                          {p.inspiredBy ? `Inspired by ${p.inspiredBy}` : 'FIRAS Attar Oil'}
                        </span>
                      </span>
                      <span className="shrink-0 text-sm font-medium text-onyx">
                        {formatPrice(p.price)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={goToResults}
                className="label-caps mt-3 inline-flex items-center text-gold underline-offset-4 hover:underline"
              >
                View all results
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
