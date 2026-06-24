"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const messages = [
  { name: "Giulia", city: "Milano", product: "Pro Styler 4 in 1" },
  { name: "Francesca", city: "Roma", product: "Siero Termo-Attivo" },
  { name: "Sara", city: "Torino", product: "Pro Styler 4 in 1" },
  { name: "Valentina", city: "Napoli", product: "Rituale Polvere" },
  { name: "Nezha", city: "Alessandria", product: "Pro Styler 4 in 1" },
  { name: "Laura", city: "Genova", product: "Pro Styler 4 in 1" },
  { name: "Elena", city: "Firenze", product: "Siero Termo-Attivo" },
];

export function NotificationToast() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let i = 0;
    const cycle = () => {
      setIndex(i % messages.length);
      setShow(true);
      i++;
      setTimeout(() => setShow(false), 4500);
    };
    const first = setTimeout(cycle, 6000);
    const interval = setInterval(cycle, 14000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  const m = messages[index];
  const mins = 2 + (index % 9);

  return (
    <div
      className={`fixed bottom-4 left-4 z-30 max-w-xs rounded-2xl border border-argento-200 bg-white p-4 shadow-card transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-0.5 shrink-0 text-success" size={20} />
        <div>
          <p className="text-sm font-semibold text-espresso-900">
            {m.name} da {m.city}
          </p>
          <p className="text-xs text-espresso-700/80">
            ha ordinato <span className="font-medium">{m.product}</span>
          </p>
          <p className="mt-0.5 text-[11px] text-espresso-700/50">{mins} minuti fa</p>
        </div>
      </div>
    </div>
  );
}
