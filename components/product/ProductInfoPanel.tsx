'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { CollectionBadge } from '@/components/ui/Badge';
import { AddToCartButton, BuyNowButton, WishlistButton } from '@/components/cart/CartButtons';
import { formatPrice, priceForSize, cn } from '@/lib/utils';
import type { Product } from '@/lib/types';

export function ProductInfoPanel({ product }: { product: Product }) {
  const sizes = product.sizesMl ?? [];
  const [size, setSize] = useState<number | undefined>(sizes[0]);
  const [qty, setQty] = useState(1);

  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <CollectionBadge collection={product.collection} />
        {product.badges?.map((b) => (
          <span key={b} className="label-caps text-[10px] text-gold">
            {b}
          </span>
        ))}
      </div>

      <h1 className="font-display text-3xl sm:text-4xl">{product.name}</h1>
      {product.inspiredBy && (
        <p className="mt-2 text-sm text-grey">Inspired by {product.inspiredBy}</p>
      )}

      <p className="mt-4 font-body text-2xl font-semibold text-gold">
        {formatPrice(priceForSize(product, size))}
      </p>

      <p className="mt-5 max-w-prose text-sm leading-relaxed text-grey">
        {product.description}
      </p>

      {/* Size selector */}
      {sizes.length > 0 && (
        <div className="mt-7">
          <p className="label-caps mb-2 text-grey">
            Size{sizes.length > 1 ? '' : ''}
          </p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                aria-pressed={size === s}
                className={cn(
                  'min-w-16 rounded-sm border px-4 py-2 text-sm transition-colors',
                  size === s
                    ? 'border-gold bg-gold text-ivory'
                    : 'border-onyx/20 hover:border-gold'
                )}
              >
                {s}ml
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity + actions */}
      <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
        <div className="flex items-center border border-onyx/20">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3 py-3 hover:text-gold"
          >
            <Minus className="h-4 w-4" aria-hidden />
          </button>
          <span className="min-w-10 text-center text-sm">{qty}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((q) => q + 1)}
            className="px-3 py-3 hover:text-gold"
          >
            <Plus className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <WishlistButton
          productId={product.id}
          label="Wishlist"
          className="border border-onyx/20 px-4 py-3"
        />
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <AddToCartButton
          product={product}
          sizeMl={size}
          quantity={qty}
          className="flex-1"
        />
        <BuyNowButton
          product={product}
          sizeMl={size}
          quantity={qty}
          className="flex-1"
        />
      </div>
    </div>
  );
}
