import type { ReactNode } from "react";

import { Reveal } from "@/components/common/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  meta?: ReactNode;
  actions?: ReactNode;
}

/** Consistent editorial masthead for every interior page. */
export function PageHero({ eyebrow, title, description, meta, actions }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-secondary/60 pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h1 className="display-hero mt-5 max-w-4xl text-balance text-primary">{title}</h1>
          <p className="lede mt-6 max-w-2xl">{description}</p>
        </Reveal>
        {actions ? (
          <Reveal delay={100} className="mt-9 flex flex-wrap gap-3">
            {actions}
          </Reveal>
        ) : null}
        {meta ? (
          <Reveal delay={160} className="mt-10">
            {meta}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
