import { journeySteps } from "@/data/impact";
import { useInView } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/common/SectionHeading";

/** IMPACT JOURNEY — Responsive timeline of how a programme comes into being. */
export function JourneyTimeline() {
  const { ref, inView } = useInView<HTMLDivElement>("-10% 0px");

  return (
    <section aria-labelledby="journey" className="border-b border-border bg-background overflow-hidden">
      <div className="shell py-20 md:py-32">
        <SectionHeading
          eyebrow="Impact Journey"
          title="How change actually happens."
          description="Seven stages between a problem being named and a solution being scaled. Nothing skips a stage."
        />

        <div ref={ref} className="relative mt-20 lg:mt-32">
          {/* Main connecting line */}
          <div
            aria-hidden="true"
            className={cn(
              "absolute bg-primary/20 transition-all duration-[2000ms] ease-out",
              // Mobile vertical line
              "left-[15px] top-0 bottom-0 w-px origin-top md:hidden",
              inView ? "scale-y-100" : "scale-y-0",
              // Desktop horizontal line
              "hidden md:block top-[23px] left-0 right-0 h-px origin-left",
              inView ? "scale-x-100" : "scale-x-0",
            )}
          />
          {/* Active connecting line overlay */}
          <div
            aria-hidden="true"
            className={cn(
              "absolute bg-accent transition-all duration-[3000ms] ease-out",
              // Mobile vertical line
              "left-[15px] top-0 bottom-0 w-px origin-top md:hidden",
              inView ? "scale-y-100" : "scale-y-0",
              // Desktop horizontal line
              "hidden md:block top-[23px] left-0 right-0 h-px origin-left",
              inView ? "scale-x-100" : "scale-x-0",
            )}
          />

          <ol className="relative z-10 flex flex-col gap-10 md:flex-row md:gap-8 lg:gap-12">
            {journeySteps.map((step, index) => (
              <li 
                key={step.id} 
                className="relative pl-12 md:pl-0 md:flex-1 md:flex md:flex-col group"
              >
                {/* Node */}
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute top-0 left-0 md:relative md:top-auto md:left-auto flex size-8 shrink-0 items-center justify-center rounded-full bg-background border transition-all duration-700 md:size-12 md:mb-8",
                    inView
                      ? "scale-100 border-accent"
                      : "scale-75 border-border",
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <span 
                     className={cn(
                       "tabular text-xs font-medium transition-colors duration-500",
                       inView ? "text-primary" : "text-muted-foreground"
                     )}
                     style={{ transitionDelay: `${index * 150 + 200}ms` }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                
                {/* Content */}
                <div 
                   className={cn(
                      "transition-all duration-700",
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                   )}
                   style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >
                  <p className="eyebrow text-accent">{step.actor}</p>
                  <h3 className="display-md mt-2 text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:mt-4">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
