import { cn } from "@/lib/utils/cn";

type Tone = "rose" | "gold" | "success" | "dark" | "neutral";

const tones: Record<Tone, string> = {
  rose: "bg-cipria-100 text-veluxa-700",
  gold: "bg-oro-400/15 text-oro-500",
  success: "bg-success/10 text-success",
  dark: "bg-espresso-900 text-white",
  neutral: "bg-argento-200 text-espresso-800",
};

export function Badge({
  children,
  tone = "rose",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
