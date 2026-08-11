import { ArrowRight } from "lucide-react";

import ctaImage from "@/assets/cta-community.jpg";
import { pathways } from "@/data/impact";
import { resolveIcon } from "@/lib/icons";
import { ActionLink } from "@/components/common/Action";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

/** Section 11 — four participation pathways, donation is one of four. */
export function PathwayGrid() {
  return (
    <section aria-labelledby="pathways" className="border-b border-border bg-secondary/45">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Get involved"
          title="Four ways to take part."
          description="Giving is one pathway. Time, collaboration and reach change outcomes just as directly."
        />

        <ul className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
          {pathways.map((pathway, index) => {
            const Icon = resolveIcon(pathway.icon);
            return (
              <li key={pathway.id}>
                <Reveal delay={index * 80} className="h-full">
                  <article className="flex h-full flex-col bg-background p-8 md:p-11">
                    <Icon aria-hidden="true" className="size-7 text-accent" strokeWidth={1.25} />
                    <h3 className="display-lg mt-8 text-primary">{pathway.title}</h3>
                    <p className="eyebrow mt-3 text-muted-foreground">{pathway.kicker}</p>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      {pathway.description}
                    </p>
                    <ul className="mt-6 flex-1 space-y-2 text-sm text-foreground/85">
                      {pathway.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-sage" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <ActionLink to={pathway.to} variant="outline" className="mt-8 self-start">
                      {pathway.ctaLabel}
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </ActionLink>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** Section 12 — final CTA. */
export function FinalCta() {
  return (
    <section aria-labelledby="final-cta" className="relative isolate overflow-hidden bg-primary">
      <img
        src={ctaImage}
        alt="Community members and volunteers walking together along a rural road at sunrise"
        width={1920}
        height={1024}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--color-primary)_94%,transparent)_0%,color-mix(in_oklab,var(--color-primary)_72%,transparent)_100%)]"
      />
      <div className="shell py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <h2 id="final-cta" className="display-xl text-balance text-primary-foreground">
            You don't have to change everything.
          </h2>
          <p className="display-xl mt-2 text-balance text-accent">
            You just have to start somewhere.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ActionLink to="/our-work" variant="solidInverse" size="lg">
              Find your cause
            </ActionLink>
            <ActionLink to="/donate" variant="inverse" size="lg">
              Support our work
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
