"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/store/cart";
import { useUI } from "@/lib/store/ui";

const nav = [
  { href: "/prodotti/nellia-pro-styler", label: "Pro Styler" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/contatti", label: "Contatti" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const count = useCart((s) => s.count());
  const openCart = useUI((s) => s.openCart);

  return (
    <header className="sticky top-0 z-40 border-b border-argento-200 bg-crema-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-espresso-800 transition-colors hover:text-veluxa-600"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={openCart}
          className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-cipria-100"
          aria-label="Carrello"
        >
          <ShoppingBag size={22} className="text-espresso-900" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-veluxa-600 text-[11px] font-bold text-white">
              {count}
            </span>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-argento-200 bg-crema-50 px-4 py-3 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-espresso-800"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
