import { create } from "zustand";

interface UIState {
  cartOpen: boolean;
  checkoutOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
}

export const useUI = create<UIState>((set) => ({
  cartOpen: false,
  checkoutOpen: false,
  openCart: () => set({ cartOpen: true, checkoutOpen: false }),
  closeCart: () => set({ cartOpen: false }),
  openCheckout: () => set({ checkoutOpen: true, cartOpen: false }),
  closeCheckout: () => set({ checkoutOpen: false }),
}));
