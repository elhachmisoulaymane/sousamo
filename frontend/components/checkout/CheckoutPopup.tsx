"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Lock, ShieldCheck, Clock } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/store/cart";
import { useUI } from "@/lib/store/ui";
import { isProductAvailable } from "@/lib/data/products";
import { formatEuro } from "@/lib/utils/format";
import { Pixels } from "@/lib/pixels/events";
import type { OrderForm } from "@/lib/types";

const empty: OrderForm = {
  fullName: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
  notes: "",
};

export function CheckoutPopup() {
  const router = useRouter();
  const { checkoutOpen, closeCheckout } = useUI();
  const { items, total, clear } = useCart();
  const [form, setForm] = useState<OrderForm>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof OrderForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  if (!checkoutOpen) return null;

  function update(field: keyof OrderForm, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof OrderForm, string>> = {};
    if (form.fullName.trim().length < 3) next.fullName = "Inserisci nome e cognome";
    if (!/^(\+39)?\s?3\d{8,9}$/.test(form.phone.replace(/\s/g, "")))
      next.phone = "Inserisci un numero di cellulare valido";
    if (form.address.trim().length < 5) next.address = "Inserisci l'indirizzo completo";
    if (form.city.trim().length < 2) next.city = "Inserisci la città";
    if (!/^\d{5}$/.test(form.postalCode)) next.postalCode = "CAP non valido (5 cifre)";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleConfirm() {
    const allowedItems = items.filter((item) => isProductAvailable(item.slug));
    if (allowedItems.length === 0) return;
    if (!validate()) return;
    setSubmitting(true);
    const orderValue = allowedItems.reduce((sum, item) => sum + item.price, 0);
    Pixels.purchase({
      value: orderValue,
      currency: "EUR",
      num_items: allowedItems.length,
      content_ids: allowedItems.map((i) => i.slug),
    });

    const order = {
      ...form,
      phone: form.phone.replace(/\s/g, ""),
      items: allowedItems,
      total: orderValue,
      createdAt: new Date().toISOString(),
    };
    try {
      sessionStorage.setItem("nellia-last-order", JSON.stringify(order));
    } catch {
      /* noop */
    }

    clear();
    closeCheckout();
    setForm(empty);
    setSubmitting(false);
    router.push("/grazie");
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-espresso-900/50 p-0 sm:items-center sm:p-4">
      <div className="flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-crema-50 sm:rounded-3xl">
        <div className="flex items-center justify-between border-b border-argento-200 p-5">
          <div className="flex items-center gap-2">
            <Lock size={18} className="text-success" />
            <span className="font-serif text-xl text-espresso-900">Ordine sicuro</span>
          </div>
          <button onClick={closeCheckout} aria-label="Chiudi"><X size={24} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          <div className="space-y-5">
            <div className="rounded-2xl border border-argento-200 bg-white p-4">
              <p className="mb-3 text-sm font-semibold text-espresso-900">Riepilogo ordine</p>
              <div className="space-y-2">
                {items.map((i) => (
                  <div key={`${i.slug}-${i.isUpsell ? "u" : "n"}`} className="flex justify-between text-sm">
                    <span className="text-espresso-800">{i.name} · {i.unitLabel}</span>
                    <span className="font-medium">{formatEuro(i.price)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-between border-t border-argento-200 pt-3">
                <span className="font-semibold text-espresso-900">Totale (alla consegna)</span>
                <span className="font-serif text-lg font-semibold text-espresso-900">{formatEuro(total())}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-cipria-100 px-3 py-2 text-xs text-veluxa-700">
              <Clock size={14} /> Ultimi pezzi disponibili oggi · oltre 1.200 clienti soddisfatte
            </div>

            <div className="space-y-3">
              <Input label="Nome e cognome" name="fullName" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} error={errors.fullName} placeholder="Es. Giulia Rossi" />
              <Input label="Telefono (cellulare)" name="phone" inputMode="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} error={errors.phone} placeholder="Es. 333 1234567" />
              <Input label="Indirizzo (via e numero)" name="address" value={form.address} onChange={(e) => update("address", e.target.value)} error={errors.address} placeholder="Es. Via Roma 12" />
              <div className="grid grid-cols-[1fr_120px] gap-3">
                <Input label="Città" name="city" value={form.city} onChange={(e) => update("city", e.target.value)} error={errors.city} placeholder="Es. Milano" />
                <Input label="CAP" name="postalCode" inputMode="numeric" value={form.postalCode} onChange={(e) => update("postalCode", e.target.value)} error={errors.postalCode} placeholder="20100" />
              </div>
            </div>

            <Button size="lg" fullWidth onClick={handleConfirm} disabled={submitting}>
              {submitting ? "Invio in corso…" : `Conferma ordine — ${formatEuro(total())}`}
            </Button>

            <div className="flex items-center justify-center gap-4 text-xs text-espresso-700/60">
              <span className="inline-flex items-center gap-1"><ShieldCheck size={14} className="text-success" /> Dati protetti</span>
              <span className="inline-flex items-center gap-1"><Lock size={14} className="text-success" /> Nessun pagamento anticipato</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
