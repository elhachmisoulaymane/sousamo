"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Check,
  Phone,
  Package,
  Truck,
  ShieldCheck,
  Sparkles,
  Heart,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatEuro } from "@/lib/utils/format";
import { isProductAvailable } from "@/lib/data/products";

interface StoredOrder {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  total: number;
  items: { slug: string; name: string; unitLabel: string; price: number }[];
}

export function GrazieClient() {
  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [orderRef, setOrderRef] = useState<string>("");

  useEffect(() => {
    setOrderRef("NL-" + Math.random().toString(36).slice(2, 8).toUpperCase());
    try {
      const raw = sessionStorage.getItem("nellia-last-order");
      if (raw) {
        const parsed = JSON.parse(raw) as StoredOrder;
        const allowedItems = parsed.items.filter((item) => isProductAvailable(item.slug));
        const sanitized = {
          ...parsed,
          items: allowedItems,
          total: allowedItems.reduce((sum, item) => sum + item.price, 0),
        };
        if (allowedItems.length === 0) return;
        setOrder(sanitized);
        const API = process.env.NEXT_PUBLIC_API_BASE_URL;
        if (API) {
          fetch(`${API}/api/orders`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sanitized),
            keepalive: true,
          }).catch(() => {});
        }
      }
    } catch {
      /* noop */
    }
  }, []);

  const firstName = order?.fullName?.trim().split(" ")[0];

  const steps = [
    { icon: Phone, title: "Conferma", text: "Ti chiamiamo per confermare l'ordine." },
    { icon: Package, title: "Preparazione", text: "Prepariamo il tuo pacco con cura." },
    { icon: Truck, title: "Consegna", text: "Ricevi e paghi a casa in 3-5 giorni." },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-cipria-100 via-crema-50 to-crema-50">
      {/* decorazioni soft */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cipria-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-veluxa-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-4 py-16 sm:py-20">
        {/* Badge conferma */}
        <div className="flex flex-col items-center text-center">
          <div className="relative animate-fade-up">
            <span className="absolute inset-0 -z-10 animate-pulse-soft rounded-full bg-success/20 blur-md" />
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-success text-white shadow-cta">
              <Check size={40} strokeWidth={3} />
            </span>
          </div>

          <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-veluxa-700 shadow-soft">
            <Sparkles size={13} /> Ordine ricevuto
          </span>

          <h1 className="mt-4 font-serif text-4xl text-espresso-900 sm:text-5xl">
            Grazie{firstName ? `, ${firstName}` : ""}!
          </h1>
          <p className="mt-3 max-w-md text-espresso-700/80">
            Il tuo ordine è stato registrato con successo. Il nostro team ti
            contatterà a breve per confermare la consegna. Benvenuta nel rituale Néllia. 💕
          </p>

          {orderRef && (
            <p className="mt-4 text-sm text-espresso-700/60">
              Numero ordine: <span className="font-semibold text-espresso-900">{orderRef}</span>
            </p>
          )}
        </div>

        {/* Timeline passi */}
        <div className="mt-12">
          <div className="relative grid grid-cols-3 gap-3">
            <div className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-0.5 bg-argento-300/70 sm:block" />
            {steps.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-cipria-200 bg-white text-veluxa-600 shadow-soft">
                  <s.icon size={22} />
                </span>
                <span className="mt-1 text-[11px] font-bold text-veluxa-600">{i + 1}</span>
                <p className="mt-1 text-sm font-semibold text-espresso-900">{s.title}</p>
                <p className="mt-0.5 text-xs leading-snug text-espresso-700/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Riepilogo ordine */}
        {order && (
          <div className="mt-10 overflow-hidden rounded-3xl border border-argento-200 bg-white shadow-card">
            <div className="flex items-center justify-between bg-espresso-900 px-6 py-4 text-white">
              <span className="font-serif text-lg">Riepilogo ordine</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                <CreditCard size={13} /> Pagamento alla consegna
              </span>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {order.items.map((it, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm text-espresso-800">
                      {it.name} <span className="text-espresso-700/60">· {it.unitLabel}</span>
                    </span>
                    <span className="font-medium text-espresso-900">{formatEuro(it.price)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-argento-200 pt-4">
                <span className="font-semibold text-espresso-900">Totale alla consegna</span>
                <span className="font-serif text-2xl font-semibold text-veluxa-600">
                  {formatEuro(order.total)}
                </span>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-cipria-100 p-4">
                <Truck size={18} className="mt-0.5 shrink-0 text-veluxa-600" />
                <div className="text-sm">
                  <p className="font-semibold text-espresso-900">Indirizzo di consegna</p>
                  <p className="text-espresso-700/80">
                    {order.fullName} · {order.phone}
                    <br />
                    {order.address}, {order.postalCode} {order.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rassicurazioni */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { icon: CreditCard, text: "Paghi solo alla consegna" },
            { icon: ShieldCheck, text: "Garanzia 24 mesi" },
            { icon: Heart, text: "Assistenza italiana" },
          ].map((b) => (
            <div
              key={b.text}
              className="flex items-center justify-center gap-2 rounded-2xl border border-argento-200 bg-white/70 px-4 py-3 text-sm text-espresso-800"
            >
              <b.icon size={16} className="text-veluxa-500" />
              {b.text}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <Link href="/collezione">
            <Button size="lg">Continua lo shopping</Button>
          </Link>
          <Link href="/" className="text-sm font-medium text-espresso-700/70 underline-offset-2 hover:underline">
            Torna alla home
          </Link>
        </div>

        <p className="mt-10 text-center text-xs text-espresso-700/50">
          Hai domande sul tuo ordine? Scrivici a{" "}
          <a href="mailto:info@sousamo.com" className="font-medium text-veluxa-600">
            info@sousamo.com
          </a>
        </p>
      </div>
    </div>
  );
}
