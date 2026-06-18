import type { Metadata } from "next";
import { PolicyShell } from "@/components/layout/PolicyShell";

export const metadata: Metadata = { title: "Resi e rimborsi" };

export default function Page() {
  return (
    <PolicyShell title="Resi e rimborsi" updated="Giugno 2026">
      <p>
        La tua soddisfazione è la nostra priorità. Se non sei soddisfatta del tuo
        acquisto, puoi richiedere un reso entro 14 giorni dalla consegna.
      </p>
      <h2>1. Come richiedere un reso</h2>
      <p>
        Scrivi a info@sousamo.com indicando il numero d&apos;ordine e il motivo del
        reso. Ti forniremo le istruzioni per la restituzione.
      </p>
      <h2>2. Condizioni</h2>
      <p>
        Il prodotto deve essere restituito integro, nella confezione originale e non
        utilizzato (salvo difetti di fabbricazione).
      </p>
      <h2>3. Rimborsi</h2>
      <p>
        Una volta ricevuto e verificato il reso, procederemo al rimborso entro 14
        giorni con le modalità concordate.
      </p>
    </PolicyShell>
  );
}
