import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/hero-community.jpg";
import { ActionLink } from "@/components/common/Action";

/** Section 1 — cinematic hero with a schematic India/data motif behind it. */
export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-primary pt-28 pb-14 md:min-h-[100svh] md:pb-20">
      <img
        src={heroImage}
        alt="Community members in a village courtyard reviewing a plan together"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-primary)_88%,transparent)_0%,color-mix(in_oklab,var(--color-primary)_75%,transparent)_25%,color-mix(in_oklab,var(--color-primary)_90%,transparent)_100%)]"
      />

      <div className="shell relative z-10 w-full">
        <p className="eyebrow animate-fade-in text-primary-foreground/70">
          Aaroha Foundation · Make Impact Visible
        </p>
        <h1 className="display-hero mt-6 max-w-4xl animate-fade-in text-balance text-primary-foreground [animation-delay:120ms]">
          Change becomes powerful when it becomes visible.
        </h1>
        <p className="mt-7 max-w-2xl animate-fade-in text-lg leading-relaxed text-primary-foreground/80 [animation-delay:220ms] md:text-xl">
          We work with communities to turn opportunity into action, action into progress, and
          progress into lasting impact.
        </p>
        <div className="mt-10 flex animate-fade-in flex-col gap-3 [animation-delay:320ms] sm:flex-row">
          <ActionLink to="/impact" variant="solidInverse" size="lg">
            Explore our impact
            <ArrowRight aria-hidden="true" className="size-4" />
          </ActionLink>
          <ActionLink to="/get-involved" variant="inverse" size="lg">
            Be part of the change
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
