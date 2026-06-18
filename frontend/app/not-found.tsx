import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center">
      <p className="font-serif text-7xl font-semibold text-veluxa-600">404</p>
      <h1 className="mt-4 font-serif text-3xl text-espresso-900">Pagina non trovata</h1>
      <p className="mt-3 text-espresso-700/80">
        La pagina che cerchi non esiste o è stata spostata.
      </p>
      <Link href="/" className="mt-6">
        <Button size="lg">Torna alla home</Button>
      </Link>
    </div>
  );
}
