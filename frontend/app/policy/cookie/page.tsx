import type { Metadata } from "next";
import { PolicyShell } from "@/components/layout/PolicyShell";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function Page() {
  return (
    <PolicyShell title="Cookie Policy" updated="Giugno 2026">
      <p>
        Questo sito utilizza cookie e tecnologie simili per migliorare
        l&apos;esperienza di navigazione e per finalità di marketing.
      </p>
      <h2>1. Cookie tecnici</h2>
      <p>Necessari al funzionamento del sito (es. carrello). Non richiedono consenso.</p>
      <h2>2. Cookie di marketing</h2>
      <p>
        Utilizziamo pixel di Meta (Facebook), TikTok e Snapchat per misurare
        l&apos;efficacia delle campagne. Questi cookie vengono attivati solo dopo il
        tuo consenso.
      </p>
      <h2>3. Gestione del consenso</h2>
      <p>
        Puoi accettare o rifiutare i cookie di marketing tramite il banner che
        appare alla prima visita. Puoi modificare la scelta cancellando i cookie del
        browser.
      </p>
    </PolicyShell>
  );
}
