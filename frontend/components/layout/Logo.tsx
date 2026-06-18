import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border font-serif text-xl font-semibold",
          dark
            ? "border-white/40 text-white"
            : "border-veluxa-600 bg-veluxa-600 text-white",
        )}
      >
        N
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-2xl font-semibold tracking-wide",
            dark ? "text-white" : "text-espresso-900",
          )}
        >
          Néllia
        </span>
        <span
          className={cn(
            "text-[10px] uppercase tracking-[0.35em]",
            dark ? "text-white/60" : "text-espresso-700/60",
          )}
        >
          sousamo
        </span>
      </span>
    </Link>
  );
}
