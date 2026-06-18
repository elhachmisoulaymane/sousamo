import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/lib/types";

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (slug: string, isUpsell?: boolean) => void;
  clear: () => void;
  total: () => number;
  count: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const idx = state.items.findIndex(
            (i) => i.slug === item.slug && !!i.isUpsell === !!item.isUpsell,
          );
          if (idx >= 0) {
            const next = [...state.items];
            next[idx] = item;
            return { items: next };
          }
          return { items: [...state.items, item] };
        }),
      removeItem: (slug, isUpsell) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.slug === slug && !!i.isUpsell === !!isUpsell),
          ),
        })),
      clear: () => set({ items: [] }),
      total: () => get().items.reduce((sum, i) => sum + i.price, 0),
      count: () => get().items.reduce((sum, i) => sum + i.qty, 0),
    }),
    { name: "nellia-cart" },
  ),
);
