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
    <div ref={ref} className={cn("min-w-0 relative pl-5", className)}>
      {/* Subtle terracotta divider */}
      <div 
         className={cn(
           "absolute left-0 top-1 bottom-1 w-[2px] bg-accent origin-top transition-transform duration-1000 ease-out",
           inView ? "scale-y-100" : "scale-y-0"
         )} 
      />

      <p
        className={cn(
          "tabular font-[family-name:var(--font-display)] leading-none",
          size === "lg" ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl",
          tone === "inverse" ? "text-primary-foreground" : "text-primary",
        )}
      >
        <span className="text-accent mr-1">{stat.prefix}</span>
        {formatStatValue(Number.isInteger(stat.value) ? Math.round(animated) : animated)}
        <span className="text-accent ml-1">{stat.suffix}</span>
      </p>
      
      <p
        className={cn(
          "mt-4 text-sm font-medium",
          tone === "inverse" ? "text-primary-foreground" : "text-primary",
        )}
      >
        {stat.label}
      </p>
      
      {stat.note ? (
        <p
          className={cn(
            "mt-2 text-xs leading-relaxed",
            tone === "inverse" ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {stat.note}
        </p>
      ) : null}
    </div>
  );
}
