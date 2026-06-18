"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

const FALLBACK = "https://placehold.co/800x800/FBEAEE/C8366A?text=N%C3%A9llia";

type SmartImageProps = Omit<ImageProps, "src"> & {
  src: string;
  fallback?: string;
};

export function SmartImage({ src, fallback = FALLBACK, alt, ...props }: SmartImageProps) {
  const [current, setCurrent] = useState(src);
  return (
    <Image
      {...props}
      src={current}
      alt={alt}
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
      unoptimized={current.startsWith("http")}
    />
  );
}
