import { journeySteps } from "@/data/impact";
import { useInView } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/common/SectionHeading";

/** IMPACT JOURNEY — vertical timeline of how a programme comes into being. */
export function JourneyTimeline() {
  const { ref, inView } = useInView<HTMLOListElement>("-20% 0px");

  return (
    <section aria-labelledby="journey" className="border-b border-border bg-secondary/45">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Impact Journey"
          title="How change actually happens."
          description="Seven stages between a problem being named and a solution being scaled. Nothing skips a stage."
        />

        <ol ref={ref} className="relative mt-14 max-w-3xl">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[15px] w-px bg-border md:left-[19px]"
          />
          <span
            aria-hidden="true"
            className={cn(
              "absolute top-2 left-[15px] w-px origin-top bg-accent transition-transform duration-[2000ms] ease-out md:left-[19px]",
              inView ? "scale-y-100" : "scale-y-0",
            )}
            style={{ bottom: "0.5rem" }}
          />

          {journeySteps.map((step, index) => (
            <li key={step.id} className="relative pb-10 pl-12 last:pb-0 md:pl-16">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-0 left-0 grid size-8 place-items-center rounded-full border bg-background transition-all duration-700 md:size-10",
                  inView
                    ? "scale-100 border-accent opacity-100"
                    : "scale-75 border-border opacity-40",
                )}
                style={{ transitionDelay: `${index * 180}ms` }}
              >
                <span className="tabular text-xs font-medium text-primary">{index + 1}</span>
              </span>
              <p className="eyebrow text-muted-foreground">{step.actor}</p>
              <h3 className="display-md mt-2 text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
