import { cn } from "@/lib/utils";
import { useCountUp, useInView } from "@/lib/motion";
import { formatStatValue } from "@/lib/format";
import type { HeadlineStat } from "@/types";

interface StatCounterProps {
  stat: HeadlineStat;
  tone?: "default" | "inverse";
  size?: "md" | "lg";
  className?: string;
}

/** Animated headline number. Values come from the data layer, never hardcoded. */
export function StatCounter({ stat, tone = "default", size = "md", className }: StatCounterProps) {
  const { ref, inView } = useInView<HTMLDivElement>("-4% 0px");
  const animated = useCountUp(stat.value, inView);

  return (
    <div ref={ref} className={cn("min-w-0", className)}>
      <p
        className={cn(
          "tabular font-[family-name:var(--font-display)] leading-none",
          size === "lg" ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl",
          tone === "inverse" ? "text-primary-foreground" : "text-primary",
        )}
      >
        {stat.prefix}
        {formatStatValue(Number.isInteger(stat.value) ? Math.round(animated) : animated)}
        <span className={tone === "inverse" ? "text-accent" : "text-accent"}>{stat.suffix}</span>
      </p>
      <p
        className={cn(
          "mt-3 text-sm",
          tone === "inverse" ? "text-primary-foreground/70" : "text-muted-foreground",
        )}
      >
        {stat.label}
      </p>
      {stat.note ? (
        <p
          className={cn(
            "mt-1 text-xs",
            tone === "inverse" ? "text-primary-foreground/50" : "text-muted-foreground/80",
          )}
        >
          {stat.note}
        </p>
      ) : null}
    </div>
  );
}
