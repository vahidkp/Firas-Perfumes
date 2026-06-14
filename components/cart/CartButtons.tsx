'use client';

import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/store/cart';
import { useWishlist } from '@/lib/store/wishlist';
import { useCartDrawer } from '@/lib/store/drawer';
import { useMounted } from '@/lib/use-mounted';
import { cn, priceForSize } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import type { Product } from '@/lib/types';

function toCartItem(product: Product, sizeMl?: number, quantity = 1) {
  const size = sizeMl ?? product.sizesMl?.[0];
  return {
    productId: product.id,
    slug: product.slug,
    name: product.name,
    image: product.images[0],
    price: priceForSize(product, size),
    sizeMl: size,
    quantity,
  };
}

export function AddToCartButton({
  product,
  sizeMl,
  quantity = 1,
  variant = 'primary',
  size = 'md',
  label = 'Add to Cart',
  className,
}: {
  product: Product;
  sizeMl?: number;
  quantity?: number;
  variant?: 'primary' | 'secondary' | 'light';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}) {
  const addItem = useCart((s) => s.addItem);
  const openDrawer = useCartDrawer((s) => s.open);

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(toCartItem(product, sizeMl, quantity));
        openDrawer();
      }}
    >
      <ShoppingBag className="h-4 w-4" aria-hidden />
      {label}
    </Button>
  );
}

export function BuyNowButton({
  product,
  sizeMl,
  quantity = 1,
  className,
}: {
  product: Product;
  sizeMl?: number;
  quantity?: number;
  className?: string;
}) {
  const addItem = useCart((s) => s.addItem);
  const openDrawer = useCartDrawer((s) => s.open);

  return (
    <Button
      type="button"
      variant="secondary"
      className={className}
      onClick={() => {
        addItem(toCartItem(product, sizeMl, quantity));
        openDrawer();
      }}
    >
      Buy Now
    </Button>
  );
}

export function WishlistButton({
  productId,
  className,
  label,
}: {
  productId: string;
  className?: string;
  label?: string;
}) {
  const toggle = useWishlist((s) => s.toggle);
  const ids = useWishlist((s) => s.ids);
  const mounted = useMounted();
  const active = mounted && ids.includes(productId);

  return (
    <button
      type="button"
      aria-label={active ? 'Remove from wishlist' : 'Add to wishlist'}
      aria-pressed={active}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(productId);
      }}
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-ivory/90 p-2 text-onyx shadow-sm transition-colors hover:text-gold',
        className
      )}
    >
      <Heart
        className={cn('h-4 w-4', active && 'fill-gold text-gold')}
        aria-hidden
      />
      {label && <span className="label-caps text-[11px]">{label}</span>}
    </button>
  );
}
