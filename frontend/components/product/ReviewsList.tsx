import { Stars } from "@/components/ui/Stars";
import { BadgeCheck } from "lucide-react";
import type { Review } from "@/lib/types";

export function ReviewsList({ reviews, rating, total }: { reviews: Review[]; rating: number; total: number }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-6 rounded-3xl bg-cipria-100 p-6">
        <div className="text-center">
          <p className="font-serif text-5xl font-semibold text-espresso-900">{rating.toFixed(1)}</p>
          <Stars rating={rating} className="mt-2 justify-center" />
          <p className="mt-1 text-sm text-espresso-700/70">{total.toLocaleString("it-IT")} recensioni</p>
        </div>
        <div className="flex-1 space-y-1">
          {[5, 4, 3, 2, 1].map((star) => {
            const pct = star === 5 ? 82 : star === 4 ? 13 : star === 3 ? 3 : 1;
            return (
              <div key={star} className="flex items-center gap-3 text-sm">
                <span className="w-3 text-espresso-700/70">{star}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-white">
                  <div className="h-full rounded-full bg-oro-400" style={{ width: `${pct}%` }} />
                </div>
                <span className="w-8 text-right text-espresso-700/60">{pct}%</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {reviews.map((r) => (
          <div key={r.id} className="border-b border-argento-200 pb-6 last:border-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-espresso-900">{r.author}</span>
                {r.verified && (
                  <span className="inline-flex items-center gap-1 text-xs text-success">
                    <BadgeCheck size={14} /> Acquisto verificato
                  </span>
                )}
              </div>
              <span className="text-xs text-espresso-700/50">{r.city}</span>
            </div>
            <Stars rating={r.rating} size={14} className="mt-2" />
            <h4 className="mt-2 font-semibold text-espresso-900">{r.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-espresso-800">{r.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
