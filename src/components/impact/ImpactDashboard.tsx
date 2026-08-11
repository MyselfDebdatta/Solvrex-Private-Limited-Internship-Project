import { ArrowRight } from "lucide-react";

import { dashboardStats, impactByCause, impactByGeography, spendAllocation } from "@/data/impact";
import { formatNumber } from "@/lib/format";
import { useInView } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ActionLink } from "@/components/common/Action";
import { PrototypeTag } from "@/components/common/PrototypeTag";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StatCounter } from "@/components/impact/StatCounter";
import type { MetricBreakdown } from "@/types";

function BreakdownBars({
  title,
  items,
  unit = "people reached",
}: {
  title: string;
  items: MetricBreakdown[];
  unit?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>("-10% 0px");

  return (
    <div ref={ref}>
      <h3 className="eyebrow font-sans text-muted-foreground">{title}</h3>
      <ul className="mt-6 space-y-5">
        {items.map((item, index) => (
          <li key={item.label}>
            <div className="flex items-baseline justify-between gap-4 text-sm">
              <span className="min-w-0 truncate text-foreground">{item.label}</span>
              <span className="tabular shrink-0 text-muted-foreground">
                {unit === "percent" ? `${item.value}%` : formatNumber(item.value)}
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full bg-muted">
              <div
                className={cn(
                  "h-full origin-left bg-primary transition-transform duration-1000 ease-out",
                  index % 3 === 1 && "bg-sage",
                  index % 3 === 2 && "bg-accent",
                )}
                style={{
                  width: `${item.share}%`,
                  transform: inView ? "scaleX(1)" : "scaleX(0)",
                  transitionDelay: `${index * 90}ms`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="sr-only">
        {unit === "percent" ? "Values shown as percentages." : "Values shown as people reached."}
      </p>
    </div>
  );
}

/** Section 9 — editorial impact dashboard. */
export function ImpactDashboard({ showCta = true }: { showCta?: boolean }) {
  return (
    <section aria-labelledby="dashboard" className="border-b border-border bg-background">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Impact dashboard"
          title="Numbers tell part of the story."
          description="Reach, coverage and allocation in one view. Outcome indicators live inside each programme, because reach alone is not impact."
          action={<PrototypeTag />}
        />

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-y border-border py-10 md:grid-cols-3 lg:grid-cols-6">
          {dashboardStats.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 70}>
              <StatCounter stat={stat} />
            </Reveal>
          ))}
        </dl>

        <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <BreakdownBars title="Impact by cause" items={impactByCause} />
          </Reveal>
          <Reveal delay={100}>
            <BreakdownBars title="Impact by geography" items={impactByGeography} />
          </Reveal>
          <Reveal delay={200}>
            <BreakdownBars title="Expenditure allocation" items={spendAllocation} unit="percent" />
          </Reveal>
        </div>

        {showCta ? (
          <Reveal delay={120} className="mt-14">
            <ActionLink to="/impact" variant="outline" size="lg">
              View full impact
              <ArrowRight aria-hidden="true" className="size-4" />
            </ActionLink>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
