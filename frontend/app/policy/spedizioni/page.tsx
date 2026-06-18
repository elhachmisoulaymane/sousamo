import type { Metadata } from "next";
import { PolicyShell } from "@/components/layout/PolicyShell";

export const metadata: Metadata = { title: "Spedizioni" };

export default function Page() {
  return (
    <PolicyShell title="Spedizioni" updated="Giugno 2026">
      <p>Spediamo in tutta Italia con corrieri tracciati e pagamento alla consegna.</p>
      <h2>1. Tempi di consegna</h2>
      <p>La consegna avviene in 3-5 giorni lavorativi dalla conferma dell&apos;ordine.</p>
      <h2>2. Costi di spedizione</h2>
      <p>
        I costi di spedizione, se previsti, sono indicati chiaramente prima della
        conferma dell&apos;ordine.
      </p>
      <h2>3. Pagamento alla consegna</h2>
      <p>
        Paghi comodamente in contanti al corriere al momento della ricezione del
        pacco, senza alcun anticipo.
      </p>
      <h2>4. Tracciamento</h2>
      <p>Ti invieremo gli aggiornamenti sulla spedizione tramite SMS o telefonata.</p>
    </PolicyShell>
  );
}
