---
name: cart-state-management
description: "Use when implementing or modifying cart or wishlist state — add/remove items, quantities, persistence, or the useCart/useWishlist hooks. Trigger on 'add to cart logic', 'wishlist functionality', 'persist cart', or 'cart store'."
---

# Cart & Wishlist State Management

## Overview
Provides global, persisted state for the shopping cart and wishlist using Zustand, consumed by ProductCard, Mini-Cart Drawer, Product Detail page, and the header's cart badge.

## Setup
```bash
npm install zustand
```

## Cart Store

```ts
// lib/store/cart.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '@/lib/types';

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  sizeMl?: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, sizeMl?: number) => void;
  updateQuantity: (productId: string, sizeMl: number | undefined, quantity: number) => void;
  clear: () => void;
  totalCount: () => number;
  subtotal: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => {
        const existing = state.items.find(i => i.productId === item.productId && i.sizeMl === item.sizeMl);
        if (existing) {
          return { items: state.items.map(i => i === existing ? { ...i, quantity: i.quantity + item.quantity } : i) };
        }
        return { items: [...state.items, item] };
      }),
      removeItem: (productId, sizeMl) => set((state) => ({
        items: state.items.filter(i => !(i.productId === productId && i.sizeMl === sizeMl))
      })),
      updateQuantity: (productId, sizeMl, quantity) => set((state) => ({
        items: state.items.map(i => (i.productId === productId && i.sizeMl === sizeMl) ? { ...i, quantity } : i)
      })),
      clear: () => set({ items: [] }),
      totalCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    { name: 'firas-cart' }
  )
);
```

## Wishlist Store

Same pattern as `useCart` but simpler — stores an array of `productId`s with `toggle(productId)`, persisted under key `firas-wishlist`.

## Drawer Open State

A small separate store (or local Context) `useCartDrawer` with `isOpen` / `open()` / `close()`, so adding an item can trigger the drawer to open from anywhere (ProductCard, Product Detail).

## Checklist
- [ ] Cart and wishlist persist across page reloads (localStorage via zustand `persist`)
- [ ] Adding the same product+size increments quantity instead of duplicating
- [ ] `totalCount()` drives the header cart badge reactively
- [ ] Hydration mismatch avoided — guard persisted state reads on the client (e.g. render badge only after mount, or use `skipHydration` + manual rehydrate)
