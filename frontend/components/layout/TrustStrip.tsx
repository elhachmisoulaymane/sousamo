import { Truck, BadgeCheck, CreditCard, RotateCcw } from "lucide-react";

const items = [
  { icon: Truck, text: "Spedizione 3-5 giorni in tutta Italia" },
  { icon: CreditCard, text: "Pagamento alla consegna" },
  { icon: BadgeCheck, text: "Garanzia 24 mesi" },
  { icon: RotateCcw, text: "Reso facile entro 14 giorni" },
];

export function TrustStrip({ dark }: { dark?: boolean }) {
  return (
    <div className={dark ? "bg-espresso-900 text-white/80" : "bg-cipria-100 text-espresso-800"}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-3 text-xs font-medium sm:text-sm">
        {items.map(({ icon: Icon, text }) => (
          <span key={text} className="inline-flex items-center gap-2">
            <Icon size={16} className="text-veluxa-500" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
