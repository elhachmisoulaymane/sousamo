"use client";

import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils/cn";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const list = images.length ? images : [""];

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-cipria-100">
        <SmartImage
          src={list[active]}
          alt={`${name} — immagine ${active + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
          priority
        />
      </div>
      {list.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {list.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "relative aspect-square overflow-hidden rounded-xl border-2 bg-cipria-100",
                i === active ? "border-veluxa-600" : "border-transparent",
              )}
            >
              <SmartImage
                src={img}
                alt={`${name} miniatura ${i + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
