import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Programme } from "@/types";
import { Reveal } from "@/components/common/Reveal";

interface ProgrammeCardProps {
  programme: Programme;
  /** `feature` is a wide editorial card; `standard` is a column card. */
  layout?: "feature" | "standard";
  delay?: number;
}

export function ProgrammeCard({ programme, layout = "standard", delay = 0 }: ProgrammeCardProps) {
  const isFeature = layout === "feature";

  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={cn(
          "group flex h-full flex-col overflow-hidden border border-border bg-card transition-colors duration-500 hover:border-border-strong",
          isFeature && "md:grid md:grid-cols-2 md:items-stretch",
        )}
      >
        <div className={cn("relative overflow-hidden", isFeature ? "md:order-2" : "")}>
          <img
            src={programme.image}
            alt={programme.imageAlt}
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            className={cn(
              "size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]",
              isFeature ? "aspect-[4/3] md:aspect-auto md:min-h-[26rem]" : "aspect-[16/10]",
            )}
          />
        </div>

        <div className={cn("flex flex-1 flex-col p-7 md:p-9", isFeature && "md:order-1 md:p-12")}>
          <p className="eyebrow text-accent">{programme.categoryLabel}</p>
          <h3 className={cn("mt-4 text-primary", isFeature ? "display-lg" : "display-md")}>
            {programme.name}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
            {isFeature ? programme.summary : programme.tagline}
          </p>

          <dl className="mt-7 grid grid-cols-2 gap-5 border-t border-border pt-6">
            <div className="min-w-0">
              <dt className="text-[0.6875rem] tracking-[0.1em] text-muted-foreground uppercase">
                {programme.headlineMetric.label}
              </dt>
              <dd className="tabular mt-2 font-[family-name:var(--font-display)] text-2xl text-primary">
                {programme.headlineMetric.value}
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-[0.6875rem] tracking-[0.1em] text-muted-foreground uppercase">
                Location
              </dt>
              <dd className="mt-2 flex items-start gap-1.5 text-sm text-foreground/85">
                <MapPin aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-sage" />
                <span>{programme.geography.slice(0, 2).join(", ")}</span>
              </dd>
            </div>
          </dl>

          <Link
            to="/programmes/$slug"
            params={{ slug: programme.slug }}
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary link-underline"
          >
            View programme
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
