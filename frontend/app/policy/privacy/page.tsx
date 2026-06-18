import type { Metadata } from "next";
import { PolicyShell } from "@/components/layout/PolicyShell";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <PolicyShell title="Privacy Policy" updated="Giugno 2026">
      <p>
        La tua privacy è importante per noi. Questa informativa descrive come
        Néllia (sousamo) raccoglie e tratta i tuoi dati personali, in conformità
        al Regolamento UE 2016/679 (GDPR).
      </p>
      <h2>1. Titolare del trattamento</h2>
      <p>Il titolare del trattamento è sousamo, contattabile a info@sousamo.com.</p>
      <h2>2. Dati raccolti</h2>
      <p>
        Raccogliamo i dati necessari a evadere il tuo ordine: nome, numero di
        telefono e indirizzo di consegna. Raccogliamo inoltre dati di navigazione
        a fini statistici e di marketing, previo consenso.
      </p>
      <h2>3. Finalità</h2>
      <p>
        I dati sono utilizzati per la gestione e la spedizione degli ordini,
        l&apos;assistenza clienti e, previo consenso, attività di marketing.
      </p>
      <h2>4. Diritti dell&apos;interessato</h2>
      <p>
        Puoi richiedere in qualsiasi momento accesso, rettifica o cancellazione dei
        tuoi dati scrivendo a info@sousamo.com.
      </p>
    </PolicyShell>
  );
}
