'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AddToCartButton, WishlistButton } from '@/components/cart/CartButtons';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/lib/types';

/** Clean, centered, editorial product card matching the reference catalogue grid. */
export function ProductCard({ product }: { product: Product }) {
  const hasHover = product.images.length > 1;

  return (
    <div className="group min-w-0 text-center">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-onyx/5 bg-[#fbf8f1] shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
          <Image
            src={product.images[0]}
            alt={`${product.name} — inspired perfume by FIRAS`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          {hasHover && (
            <Image
              src={product.images[1]}
              alt=""
              aria-hidden
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}

          {product.badges?.[0] && (
            <span className="label-caps absolute left-3 top-3 rounded-sm bg-ivory/85 px-2 py-1 text-[10px] text-gold shadow-sm backdrop-blur-sm">
              {product.badges[0]}
            </span>
          )}

          {/* Wishlist: revealed on hover where supported, always visible on touch. */}
          <WishlistButton
            productId={product.id}
            className="absolute right-3 top-3 transition-opacity [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100"
          />

          {/* Add-to-cart: slides up on hover-capable devices, pinned visible on touch. */}
          <div className="absolute inset-x-0 bottom-0 transition-transform duration-300 [@media(hover:hover)]:translate-y-full [@media(hover:hover)]:group-hover:translate-y-0">
            <AddToCartButton
              product={product}
              size="sm"
              label="Add to Cart"
              className="w-full rounded-none"
            />
          </div>
        </div>
      </Link>

      <div className="pt-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className="line-clamp-2 min-h-[2.75rem] break-words font-display text-base leading-snug tracking-wide transition-colors hover:text-gold">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 min-h-[1.9rem] break-words text-[11px] uppercase leading-snug tracking-[0.16em] text-grey">
          {product.inspiredBy ? `Inspired by ${product.inspiredBy}` : 'FIRAS Attar Oil'}
        </p>
        <p className="mt-2 text-sm font-medium text-onyx">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
