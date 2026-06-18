"use client";

import { Check } from "lucide-react";
import type { PackTier } from "@/lib/types";
import { formatEuro } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";

export function PackSelector({
  packs,
  selected,
  onSelect,
}: {
  packs: PackTier[];
  selected: number;
  onSelect: (qty: number) => void;
}) {
  return (
    <div className="space-y-3">
      {packs.map((pack) => {
        const active = pack.qty === selected;
        return (
          <button
            key={pack.qty}
            onClick={() => onSelect(pack.qty)}
            className={cn(
              "relative flex w-full items-center justify-between rounded-2xl border-2 p-4 text-left transition-all",
              active
                ? "border-veluxa-600 bg-cipria-100"
                : "border-argento-200 bg-white hover:border-veluxa-400",
            )}
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-full border-2",
                  active ? "border-veluxa-600 bg-veluxa-600" : "border-argento-300",
                )}
              >
                {active && <Check size={14} className="text-white" />}
              </span>
              <div>
                <p className="font-semibold text-espresso-900">{pack.label}</p>
                <p className="text-xs text-espresso-700/70">
                  {formatEuro(pack.pricePerUnit)} / pezzo
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {pack.badge && (
                <span className="rounded-full bg-veluxa-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  {pack.badge}
                </span>
              )}
              <span className="font-serif text-xl font-semibold text-espresso-900">
                {formatEuro(pack.price)}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
