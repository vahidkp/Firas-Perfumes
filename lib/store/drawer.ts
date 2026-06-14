import { create } from 'zustand';

interface CartDrawerState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

/** Controls the slide-in mini-cart so any component can open it on add-to-cart. */
export const useCartDrawer = create<CartDrawerState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
}));
