'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Drawer } from '@/components/ui/Drawer';
import { Button } from '@/components/ui/Button';
import { useCart, type CartItem } from '@/lib/store/cart';
import { useCartDrawer } from '@/lib/store/drawer';
import { formatPrice } from '@/lib/utils';
import { whatsappLink } from '@/lib/site';

function buildWhatsAppMessage(items: CartItem[], subtotal: number) {
  const lines = items.map(
    (i) =>
      `• ${i.name}${i.sizeMl ? ` (${i.sizeMl}ml)` : ''} ×${i.quantity} — ${formatPrice(
        i.price * i.quantity
      )}`
  );
  return `Hi FIRAS Perfume, I'd like to order:\n${lines.join('\n')}\n\nSubtotal: ${formatPrice(
    subtotal
  )}`;
}

export function MiniCartDrawer() {
  const isOpen = useCartDrawer((s) => s.isOpen);
  const close = useCartDrawer((s) => s.close);
  const items = useCart((s) => s.items);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);
  const subtotal = useCart((s) => s.subtotal());

  return (
    <Drawer open={isOpen} onClose={close} side="right" label="Your shopping bag">
      <div className="flex items-center justify-between border-b border-gold/30 px-5 py-4">
        <h2 className="font-display text-xl">Your Bag</h2>
        <button
          type="button"
          aria-label="Close bag"
          onClick={close}
          className="p-2 text-onyx hover:text-gold"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
          <ShoppingBag className="h-10 w-10 text-gold" aria-hidden />
          <p className="font-display text-lg">Your bag is empty</p>
          <p className="max-w-xs text-sm text-grey">
            Discover our signature inspired fragrances and Misk attar oils.
          </p>
          <Button href="/shop" onClick={close}>
            Continue Shopping
          </Button>
        </div>
      ) : (
        <>
          <ul className="flex-1 divide-y divide-onyx/10 overflow-y-auto px-5">
            {items.map((item) => (
              <li
                key={`${item.productId}-${item.sizeMl ?? 'one'}`}
                className="flex gap-4 py-4"
              >
                <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-sm bg-onyx/5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-2">
                    <Link
                      href={`/product/${item.slug}`}
                      onClick={close}
                      className="font-display text-sm hover:text-gold"
                    >
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Remove ${item.name}`}
                      onClick={() => removeItem(item.productId, item.sizeMl)}
                      className="text-grey hover:text-gold"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                  {item.sizeMl && (
                    <p className="mt-0.5 text-xs text-grey">{item.sizeMl}ml</p>
                  )}
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="flex items-center border border-onyx/20">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() =>
                          updateQuantity(item.productId, item.sizeMl, item.quantity - 1)
                        }
                        className="px-2 py-1 text-onyx hover:text-gold"
                      >
                        <Minus className="h-3.5 w-3.5" aria-hidden />
                      </button>
                      <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() =>
                          updateQuantity(item.productId, item.sizeMl, item.quantity + 1)
                        }
                        className="px-2 py-1 text-onyx hover:text-gold"
                      >
                        <Plus className="h-3.5 w-3.5" aria-hidden />
                      </button>
                    </div>
                    <span className="text-sm font-semibold text-gold">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-gold/30 px-5 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="label-caps">Subtotal</span>
              <span className="font-display text-xl text-gold">
                {formatPrice(subtotal)}
              </span>
            </div>
            <Button
              href={whatsappLink(buildWhatsAppMessage(items, subtotal))}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              Order via WhatsApp
            </Button>
            <Button
              variant="secondary"
              onClick={close}
              className="mt-2 w-full"
              href="/shop"
            >
              Continue Shopping
            </Button>
            <p className="mt-3 text-center text-xs text-grey">
              Taxes &amp; shipping calculated at checkout.
            </p>
          </div>
        </>
      )}
    </Drawer>
  );
}
