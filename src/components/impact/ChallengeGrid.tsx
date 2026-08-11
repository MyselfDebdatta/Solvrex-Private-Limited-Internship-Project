import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { causes } from "@/data/causes";
import { resolveIcon } from "@/lib/icons";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useInView } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Section 3 — The challenge. Connected visual and cause cards. */
export function ChallengeGrid() {
  const { ref, inView } = useInView<HTMLDivElement>("-10% 0px");

  return (
    <section aria-labelledby="challenge" className="border-b border-border bg-background overflow-hidden">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="The challenge"
          title="The challenges are connected."
          description="A child out of school and a household without stable income are rarely separate problems. Education → Health → Livelihood → Community → Long-term resilience."
        />

        {/* 1. CONNECTED IMPACT VISUAL */}
        <div ref={ref} className="relative mt-20 mb-28 md:mt-28 md:mb-36 max-w-5xl mx-auto">
          {/* Central connecting line */}
          <div 
             className={cn(
               "absolute bg-primary/20 transition-all duration-[2000ms] ease-out",
               // Mobile vertical spine
               "left-8 top-0 bottom-0 w-px origin-top md:hidden",
               inView ? "scale-y-100" : "scale-y-0",
               // Desktop horizontal spine
               "hidden md:block top-1/2 left-0 right-0 h-px -translate-y-1/2 origin-left",
               inView ? "scale-x-100" : "scale-x-0"
             )}
          />

          <ul className="relative z-10 flex flex-col gap-12 md:flex-row md:justify-between md:gap-0">
            {causes.map((cause, index) => {
              const Icon = resolveIcon(cause.icon);
              return (
                <li key={cause.id} className="relative flex items-center md:flex-col md:w-32">
                  {/* The node */}
                  <div 
                    className={cn(
                       "relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full bg-background border border-primary transition-colors duration-700 md:mx-auto md:size-20",
                       inView ? "border-accent text-primary" : "border-border text-muted-foreground"
                    )}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                     <Icon aria-hidden="true" className="size-6 md:size-7" strokeWidth={1} />
                     {/* The terracotta accent dot */}
                     <span className={cn(
                        "absolute -right-1.5 top-1/2 -translate-y-1/2 size-3 rounded-full bg-accent transition-transform duration-700 md:-bottom-1.5 md:right-auto md:top-auto md:translate-y-0",
                        inView ? "scale-100" : "scale-0"
                     )} style={{ transitionDelay: `${index * 150 + 300}ms` }} />
                  </div>
                  
                  {/* The label */}
                  <Reveal delay={index * 150 + 200} className="ml-6 md:ml-0 md:mt-6 md:text-center">
                    <p className="font-[family-name:var(--font-display)] text-lg text-primary leading-tight">{cause.label}</p>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 2. IMPACT BY CAUSE CARDS */}
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause, index) => {
            const Icon = resolveIcon(cause.icon);
            return (
              <li key={cause.id}>
                <Reveal delay={index * 70} className="h-full">
                  <Link
                    to="/our-work"
                    search={{ cause: cause.id }}
                    className="group flex h-full flex-col bg-card p-8 border border-border/60 transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="tabular text-xs font-medium text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon
                        aria-hidden="true"
                        className="size-5 text-primary transition-colors duration-500 group-hover:text-accent"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="display-md mt-8 text-primary">
                      {cause.label}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {cause.summary}
                    </p>

                    <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                      <span className="tabular text-xs text-muted-foreground">
                        {cause.programmeCount} programmes
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors duration-500 group-hover:text-accent">
                        Explore impact
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
