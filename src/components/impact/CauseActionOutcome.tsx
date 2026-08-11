import { cn } from "@/lib/utils";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

interface CauseActionOutcomeProps {
  cause: string;
  need: string;
  response: string;
  outcome: string;
  className?: string;
}

export function CauseActionOutcome({
  cause,
  need,
  response,
  outcome,
  className,
}: CauseActionOutcomeProps) {
  return (
    <div className={cn("max-w-3xl mx-auto py-12 md:py-20", className)}>
      <div className="relative flex flex-col items-center text-center">
        
        {/* Continuous background line for visual flow */}
        <div className="absolute top-10 bottom-10 w-px bg-border -z-10" />

        {/* 1. CAUSE */}
        <Reveal className="w-full bg-background border border-border p-8 transition-colors duration-500 hover:border-primary">
          <p className="eyebrow text-muted-foreground">Cause</p>
          <h3 className="display-md text-primary mt-3">{cause}</h3>
        </Reveal>

        <div className="h-10 md:h-14" />

        {/* 2. COMMUNITY NEED */}
        <Reveal delay={80} className="w-full bg-background border border-border p-8 transition-colors duration-500 hover:border-primary">
          <p className="eyebrow text-muted-foreground">Community Need</p>
          <p className="text-base text-foreground/85 leading-relaxed mt-3">{need}</p>
        </Reveal>

        <div className="h-10 md:h-14" />

        {/* 3. PROGRAMME RESPONSE */}
        <Reveal delay={160} className="w-full bg-background border border-border p-8 transition-colors duration-500 hover:border-primary">
          <p className="eyebrow text-muted-foreground">Programme Response</p>
          <p className="text-base text-foreground/85 leading-relaxed mt-3">{response}</p>
        </Reveal>

        {/* Active connection line to outcome */}
        <div className="relative h-10 md:h-14 w-px bg-accent overflow-hidden">
           <div className="absolute inset-0 bg-primary animate-pulse" />
        </div>

        {/* 4. MEASURABLE OUTCOME */}
        <Reveal delay={240} className="w-full bg-secondary/45 border border-accent p-8 md:p-12 shadow-sm transition-transform duration-500 hover:-translate-y-1">
          <p className="eyebrow text-accent">Measurable Outcome</p>
          <p className="display-lg text-primary mt-4">{outcome}</p>
        </Reveal>

      </div>
    </div>
  );
}

/** Demo wrapper for the impact/our-work pages */
export function CauseActionOutcomeDemo() {
  return (
    <section aria-labelledby="cause-action-outcome" className="border-b border-border bg-background">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Theory of Change"
          title="From root cause to measurable outcome."
          description="A structural look at how our programmes are designed to respond directly to community realities."
        />
        <CauseActionOutcome
          cause="Healthcare"
          need="Remote communities face a 4-hour journey to the nearest tertiary care center, resulting in high maternal mortality and delayed diagnoses."
          response="Deploying mobile medical units with diagnostic capabilities and training local Asha workers to serve as the first point of care."
          outcome="45% reduction in delayed critical diagnoses across 12 target districts."
          className="mt-14"
        />
      </div>
    </section>
  );
}
