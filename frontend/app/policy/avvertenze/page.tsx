import type { Metadata } from "next";
import { PolicyShell } from "@/components/layout/PolicyShell";

export const metadata: Metadata = { title: "Avvertenze" };

export default function Page() {
  return (
    <PolicyShell title="Avvertenze e modalità d'uso" updated="Giugno 2026">
      <p>
        Ti invitiamo a leggere le seguenti avvertenze per un utilizzo sicuro dei
        prodotti Néllia.
      </p>
      <h2>Dispositivi per lo styling</h2>
      <p>
        Non lasciare il dispositivo incustodito quando è acceso. Tienilo lontano
        dalla portata dei bambini. Non utilizzare vicino all&apos;acqua. Lascia
        raffreddare prima di riporlo.
      </p>
      <h2>Prodotti cosmetici</h2>
      <p>
        Solo per uso esterno. Evita il contatto con gli occhi. In caso di
        irritazione, sospendi l&apos;uso. Conserva in luogo fresco e asciutto.
      </p>
      <h2>Integratori alimentari</h2>
      <p>
        Gli integratori non vanno intesi come sostituti di una dieta varia ed
        equilibrata e di uno stile di vita sano. Non superare la dose giornaliera
        consigliata. Tenere fuori dalla portata dei bambini al di sotto dei 3 anni.
        Prodotto notificato al Ministero della Salute.
      </p>
    </PolicyShell>
  );
}
