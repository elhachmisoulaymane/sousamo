import type { Metadata } from "next";
import { GrazieClient } from "./GrazieClient";

export const metadata: Metadata = {
  title: "Grazie per il tuo ordine",
  robots: { index: false },
};

export default function GraziePage() {
  return <GrazieClient />;
}
