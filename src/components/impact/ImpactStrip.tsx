import { headlineStats } from "@/data/impact";
import { Reveal } from "@/components/common/Reveal";
import { PrototypeTag } from "@/components/common/PrototypeTag";
import { StatCounter } from "@/components/impact/StatCounter";

/** Impact snapshot strip, directly below the hero. */
export function ImpactStrip() {
  return (
    <section aria-labelledby="impact-snapshot" className="border-b border-border bg-background">
      <div className="shell py-12 md:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 id="impact-snapshot" className="eyebrow font-sans text-muted-foreground">
            Impact snapshot
          </h2>
          <PrototypeTag />
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
          {headlineStats.map((stat, index) => (
            <Reveal
              key={stat.id}
              delay={index * 90}
              className="border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <StatCounter stat={stat} size="lg" />
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
