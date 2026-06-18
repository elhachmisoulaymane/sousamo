"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ContattiPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="py-14">
      <div className="section">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-espresso-900 sm:text-5xl">Contattaci</h1>
          <p className="mx-auto mt-3 max-w-xl text-espresso-700/80">
            Il nostro team di assistenza italiana è qui per aiutarti. Ti rispondiamo
            entro 24 ore lavorative.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            {[
              { icon: Mail, label: "Email", value: "info@sousamo.com" },
              { icon: Phone, label: "Telefono", value: "+39 02 1234 5678" },
              { icon: Clock, label: "Orari", value: "Lun-Ven 9:00-18:00" },
              { icon: MapPin, label: "Sede", value: "Milano, Italia" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4 rounded-2xl border border-argento-200 bg-white p-5 shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cipria-100 text-veluxa-600">
                  <c.icon size={20} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-espresso-700/60">{c.label}</p>
                  <p className="font-medium text-espresso-900">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-argento-200 bg-white p-6 shadow-soft sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                <CheckCircle2 size={44} className="text-success" />
                <h2 className="font-serif text-2xl text-espresso-900">Messaggio inviato!</h2>
                <p className="text-espresso-700/80">Ti risponderemo al più presto. Grazie per averci scritto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input label="Nome e cognome" name="name" required placeholder="Il tuo nome" />
                <Input label="Email" name="email" type="email" required placeholder="La tua email" />
                <Input label="Oggetto" name="subject" placeholder="Come possiamo aiutarti?" />
                <Textarea label="Messaggio" name="message" required placeholder="Scrivi qui il tuo messaggio..." />
                <Button size="lg" fullWidth type="submit">Invia messaggio</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
