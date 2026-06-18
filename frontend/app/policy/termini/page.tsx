import type { Metadata } from "next";
import { PolicyShell } from "@/components/layout/PolicyShell";

export const metadata: Metadata = { title: "Termini e condizioni" };

export default function Page() {
  return (
    <PolicyShell title="Termini e condizioni" updated="Giugno 2026">
      <p>
        Benvenuta su Néllia (sousamo). Utilizzando il sito sousamo.com accetti
        i presenti Termini e Condizioni. Ti invitiamo a leggerli con attenzione.
      </p>
      <h2>1. Ordini e pagamento</h2>
      <p>
        Tutti gli ordini sono soggetti a conferma. Il metodo di pagamento previsto
        è il pagamento alla consegna (contrassegno): pagherai il corriere al momento
        della ricezione del pacco.
      </p>
      <h2>2. Prezzi</h2>
      <p>
        I prezzi indicati sono in Euro e comprensivi di IVA. Ci riserviamo il diritto
        di modificare i prezzi in qualsiasi momento, ma gli ordini già confermati
        manterranno il prezzo applicato al momento dell&apos;acquisto.
      </p>
      <h2>3. Consegna</h2>
      <p>
        Le consegne avvengono in 3-5 giorni lavorativi su tutto il territorio
        italiano. I tempi possono variare in caso di festività o cause di forza
        maggiore.
      </p>
      <h2>4. Diritto di recesso</h2>
      <p>
        Hai diritto di recedere dall&apos;acquisto entro 14 giorni dalla consegna,
        secondo quanto previsto dal Codice del Consumo. Consulta la pagina Resi e
        rimborsi per i dettagli.
      </p>
      <h2>5. Contatti</h2>
      <p>Per qualsiasi domanda scrivi a info@sousamo.com.</p>
    </PolicyShell>
  );
}
