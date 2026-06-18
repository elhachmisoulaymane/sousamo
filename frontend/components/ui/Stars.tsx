import { Star } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface StarsProps {
  rating: number;
  size?: number;
  showValue?: boolean;
  count?: number;
  className?: string;
}

export function Stars({ rating, size = 16, showValue, count, className }: StarsProps) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={size}
            className={
              i <= Math.round(rating)
                ? "fill-oro-400 text-oro-400"
                : "fill-argento-200 text-argento-200"
            }
          />
        ))}
      </div>
      {showValue && (
        <span className="text-sm font-semibold text-espresso-800">{rating.toFixed(1)}</span>
      )}
      {typeof count === "number" && (
        <span className="text-sm text-espresso-700/70">({count.toLocaleString("it-IT")})</span>
      )}
    </div>
  );
}
