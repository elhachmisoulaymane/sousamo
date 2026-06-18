import {
  Wind, Sparkles, ShieldCheck, Clock, Flame, Droplet, Feather,
  Leaf, HeartPulse, Coffee, CalendarCheck, type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Wind, Sparkles, ShieldCheck, Clock, Flame, Droplet, Feather,
  Leaf, HeartPulse, Coffee, CalendarCheck,
};

export function Icon({ name, ...props }: { name: string; size?: number; className?: string }) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp {...props} />;
}
