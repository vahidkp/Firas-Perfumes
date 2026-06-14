---
name: mini-cart-drawer
description: "Use when building or editing the slide-in mini-cart panel — line items, quantity controls, subtotal, and checkout/WhatsApp CTA. Trigger on 'build the cart drawer', 'add the mini cart', or 'show cart contents in a drawer'."
---

# Mini-Cart Drawer

## Overview
A right-side slide-in panel (built on the `Sheet` component from ui-component-library) showing current cart contents. Opens automatically when an item is added (via the cart-drawer-open store) and can also be opened from the header cart icon.

## Structure

```
[ Header: "Your Bag" + close icon ]
[ Scrollable list of CartItem rows: image, name, size, price, qty stepper, remove icon ]
[ Footer: Subtotal line, "Proceed to Checkout" button, "Order via WhatsApp" secondary button, "Continue Shopping" link ]
```

## Conventions
- Background `bg-ivory`, header border-bottom `border-gold/30`
- Empty state: friendly message + "Continue Shopping" CTA linking to `/shop`
- Quantity stepper: `-` / quantity / `+`, min 1, calls `updateQuantity` from `useCart`
- Remove icon calls `removeItem`
- Subtotal computed via `useCart().subtotal()`, formatted with the shared `formatPrice` util
- "Order via WhatsApp" button (Phase 1 checkout): constructs a `wa.me` link pre-filled with cart contents as text, e.g.:

```ts
function buildWhatsAppMessage(items: CartItem[], subtotal: number) {
  const lines = items.map(i => `${i.name}${i.sizeMl ? ` (${i.sizeMl}ml)` : ''} x${i.quantity} — ${formatPrice(i.price * i.quantity)}`);
  const text = `Hi FIRAS Perfume, I'd like to order:\n${lines.join('\n')}\n\nSubtotal: ${formatPrice(subtotal)}`;
  return `https://wa.me/97477833024?text=${encodeURIComponent(text)}`;
}
```

- "Proceed to Checkout" can route to a future `/checkout` page (out of scope for this PRD's 3 pages, but link should not 404 — either point to WhatsApp flow or a placeholder route)

## Checklist
- [ ] Drawer opens on add-to-cart from any ProductCard or Product Detail page
- [ ] Quantity changes and removals update subtotal immediately
- [ ] Empty cart state is handled gracefully
- [ ] WhatsApp link correctly encodes cart contents and opens in a new tab
- [ ] Drawer is dismissible via close icon, overlay click, and Esc key
