import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { causes } from "@/data/causes";
import { resolveIcon } from "@/lib/icons";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

/** Section 3 — the challenge. Six connected causes. */
export function ChallengeGrid() {
  return (
    <section aria-labelledby="challenge" className="border-b border-border bg-secondary/45">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="The challenge"
          title="The challenges are connected."
          description="A child out of school and a household without stable income are rarely separate problems. We work across six causes because communities do not experience them one at a time."
        />

        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause, index) => {
            const Icon = resolveIcon(cause.icon);
            return (
              <li key={cause.id}>
                <Reveal delay={index * 70} className="h-full">
                  <Link
                    to="/our-work"
                    search={{ cause: cause.id }}
                    className="group flex h-full flex-col bg-background p-7 transition-colors duration-500 hover:bg-primary md:p-9"
                  >
                    <span className="flex items-center justify-between">
                      <Icon
                        aria-hidden="true"
                        className="size-6 text-primary transition-colors duration-500 group-hover:text-accent"
                        strokeWidth={1.25}
                      />
                      <span className="tabular text-xs text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/50">
                        {cause.programmeCount} programmes
                      </span>
                    </span>

                    <h3 className="display-md mt-8 text-primary transition-colors duration-500 group-hover:text-primary-foreground">
                      {cause.label}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/75">
                      {cause.summary}
                    </p>

                    <span className="mt-7 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-primary transition-colors duration-500 group-hover:text-accent">
                      Explore
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
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
