import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.productId === item.productId && i.sizeMl === item.sizeMl
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i === existing ? { ...i, quantity: i.quantity + item.quantity } : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),
      removeItem: (productId, sizeMl) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.productId === productId && i.sizeMl === sizeMl)
          ),
        })),
      updateQuantity: (productId, sizeMl, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId && i.sizeMl === sizeMl
              ? { ...i, quantity: Math.max(1, quantity) }
              : i
          ),
        })),
      clear: () => set({ items: [] }),
      totalCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    { name: 'firas-cart' }
  )
);
