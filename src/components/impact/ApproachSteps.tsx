import { approachSteps } from "@/data/impact";
import { useInView } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/common/SectionHeading";

/** Section 4 — five-step approach with a progress rail that draws on scroll. */
export function ApproachSteps() {
  const { ref, inView } = useInView<HTMLOListElement>("-15% 0px");

  return (
    <section aria-labelledby="approach" className="border-b border-border bg-background">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Our approach"
          title="From listening to lasting change."
          description="Five stages, in order, with an explicit condition for moving from one to the next. Programmes that cannot clear a stage are redesigned rather than expanded."
        />

        <ol ref={ref} className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute top-3 left-0 hidden h-px w-full bg-border md:block"
          />
          <span
            aria-hidden="true"
            className={cn(
              "absolute top-3 left-0 hidden h-px origin-left bg-accent transition-transform duration-[1600ms] ease-out md:block md:w-full",
              inView ? "scale-x-100" : "scale-x-0",
            )}
          />

          {approachSteps.map((step, index) => (
            <li key={step.number} className="relative md:pt-12">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-1.5 left-0 hidden size-3 rounded-full border-2 border-background bg-primary transition-all duration-700 md:block",
                  inView ? "scale-100 opacity-100" : "scale-0 opacity-0",
                )}
                style={{ transitionDelay: `${300 + index * 220}ms` }}
              />
              <p className="tabular font-[family-name:var(--font-display)] text-2xl text-accent">
                {step.number}
              </p>
              <h3 className="display-md mt-3 text-primary">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{step.description}</p>
              <p className="mt-3 border-t border-border pt-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
