"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-argento-200 rounded-3xl border border-argento-200 bg-white">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 p-5 text-left"
          >
            <span className="font-semibold text-espresso-900">{item.q}</span>
            <ChevronDown
              size={20}
              className={cn("shrink-0 text-veluxa-600 transition-transform", open === i && "rotate-180")}
            />
          </button>
          {open === i && (
            <p className="px-5 pb-5 text-sm leading-relaxed text-espresso-800">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
