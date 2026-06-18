"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { loadPixels } from "@/lib/pixels/loader";

const KEY = "nellia-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(KEY);
    if (consent === "accepted") {
      setTimeout(loadPixels, 1500);
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(KEY, "accepted");
    setVisible(false);
    setTimeout(loadPixels, 1500);
  }

  function decline() {
    localStorage.setItem(KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border border-argento-200 bg-white p-5 shadow-card sm:p-6">
      <p className="text-sm text-espresso-800">
        Usiamo i cookie per migliorare la tua esperienza e per finalità di
        marketing. Continuando accetti la nostra{" "}
        <a href="/policy/cookie" className="font-semibold text-veluxa-600 underline">
          Cookie Policy
        </a>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <Button size="sm" onClick={accept}>
          Accetta
        </Button>
        <Button size="sm" variant="secondary" onClick={decline}>
          Rifiuta
        </Button>
      </div>
    </div>
  );
}
