import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin } from "lucide-react";

import { programmeBySlug, programmes } from "@/data/programmes";
import { stories } from "@/data/stories";
import { causeMap } from "@/data/causes";
import type { Programme } from "@/types";
import { PROTOTYPE_NOTE } from "@/data/site";
import { ActionLink } from "@/components/common/Action";
import { Reveal } from "@/components/common/Reveal";
import { PrototypeNotice } from "@/components/common/PrototypeTag";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StoryCard } from "@/components/stories/StoryCard";
import { FinalCta } from "@/components/impact/Participation";

export const Route = createFileRoute("/programmes/$slug")({
  loader: ({ params }): { programme: Programme } => {
    const programme = programmeBySlug(params.slug);
    if (!programme) throw notFound();
    return { programme };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Programme not found — Aaroha Foundation" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { programme } = loaderData;
    return {
      meta: [
        { title: `${programme.name} — ${programme.categoryLabel} | Aaroha Foundation` },
        { name: "description", content: programme.summary },
        { property: "og:title", content: `${programme.name} — ${programme.categoryLabel}` },
        { property: "og:description", content: programme.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/programmes/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/programmes/${params.slug}` }],
    };
  },
  notFoundComponent: ProgrammeNotFound,
  component: ProgrammeDetail,
});

function ProgrammeNotFound() {
  return (
    <div className="shell py-40 text-center">
      <h1 className="display-xl text-primary">Programme not found</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        This programme may have been renamed or is not part of the prototype data set.
      </p>
      <ActionLink to="/our-work" variant="primary" className="mt-8">
        Browse all programmes
      </ActionLink>
    </div>
  );
}

function ProgrammeDetail() {
  const { programme }: { programme: Programme } = Route.useLoaderData();
  const cause = causeMap[programme.cause];
  const related = stories.filter((story) => story.programmeSlug === programme.slug).slice(0, 3);
  const otherProgrammes = programmes
    .filter((item) => item.slug !== programme.slug && item.cause !== programme.cause)
    .slice(0, 3);

  return (
    <>
      <article>
        <header className="border-b border-border bg-secondary/60 pt-28 pb-14 md:pt-36 md:pb-20">
          <div className="shell">
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground link-underline"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              All programmes
            </Link>
            <p className="eyebrow mt-8 text-accent">{programme.categoryLabel}</p>
            <h1 className="display-hero mt-5 max-w-4xl text-balance text-primary">
              {programme.name}
            </h1>
            <p className="lede mt-6 max-w-2xl">{programme.tagline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="size-4 text-sage" />
                {programme.geography.join(" · ")}
              </span>
              <span>Running since {programme.startedYear}</span>
            </div>
          </div>
        </header>

        <img
          src={programme.image}
          alt={programme.imageAlt}
          width={1280}
          height={720}
          className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
        />

        <section
          aria-labelledby="programme-metrics"
          className="border-b border-border bg-background"
        >
          <div className="shell py-14 md:py-16">
            <h2 id="programme-metrics" className="sr-only">
              Programme metrics
            </h2>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {[programme.headlineMetric, ...programme.metrics].slice(0, 4).map((metric) => (
                <div key={metric.label} className="bg-background p-7">
                  <p className="display-lg tabular text-primary">{metric.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-xl">
              <div className="flex items-baseline justify-between text-sm">
                <span className="text-muted-foreground">Current programme cycle</span>
                <span className="tabular font-medium text-primary">{programme.progress}%</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={programme.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${programme.name} cycle progress`}
                className="mt-3 h-1.5 w-full bg-border"
              >
                <div className="h-full bg-accent" style={{ width: `${programme.progress}%` }} />
              </div>
            </div>

            <PrototypeNotice className="mt-10">{PROTOTYPE_NOTE}</PrototypeNotice>
          </div>
        </section>

        <div className="shell grid gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
          <div className="max-w-2xl relative">
            <div className="absolute left-[11px] top-4 bottom-12 w-px bg-border md:left-[15px]" />
            
            {/* 1. THE CHALLENGE */}
            <Reveal className="relative pl-10 md:pl-14 pb-14 md:pb-20">
              <span className="absolute left-0 top-1.5 size-6 rounded-full border border-primary bg-background grid place-items-center md:size-8 md:top-0 text-xs font-medium text-primary">01</span>
              <h2 className="eyebrow text-muted-foreground">The Challenge</h2>
              <p className="mt-5 display-md leading-relaxed text-primary">
                {programme.problem}
              </p>
            </Reveal>

            {/* 2. THE RESPONSE */}
            <Reveal delay={80} className="relative pl-10 md:pl-14 pb-14 md:pb-20">
              <span className="absolute left-0 top-1.5 size-6 rounded-full border border-border bg-background grid place-items-center md:size-8 md:top-0 text-xs font-medium text-muted-foreground">02</span>
              <h2 className="eyebrow text-muted-foreground">The Response</h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/85">
                <strong>{programme.tagline}</strong> — {programme.approach[0]}
              </p>
            </Reveal>

            {/* 3. THE WORK */}
            <Reveal delay={120} className="relative pl-10 md:pl-14 pb-14 md:pb-20">
              <span className="absolute left-0 top-1.5 size-6 rounded-full border border-border bg-background grid place-items-center md:size-8 md:top-0 text-xs font-medium text-muted-foreground">03</span>
              <h2 className="eyebrow text-muted-foreground">The Work</h2>
              <ul className="mt-5 space-y-4">
                {programme.approach.slice(1).map((step) => (
                  <li key={step} className="flex gap-4">
                    <div className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <p className="text-sm leading-relaxed text-foreground/85">{step}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* 4. THE OUTCOME */}
            <Reveal delay={160} className="relative pl-10 md:pl-14 pb-14 md:pb-20">
              <span className="absolute left-0 top-1.5 size-6 rounded-full border border-border bg-background grid place-items-center md:size-8 md:top-0 text-xs font-medium text-muted-foreground">04</span>
              <h2 className="eyebrow text-muted-foreground">The Outcome</h2>
              <div className="mt-5 border border-border bg-secondary/45 p-6">
                <p className="text-sm leading-relaxed text-foreground/85">
                  Currently serving <strong className="text-primary">{programme.beneficiaries}</strong> across {programme.geography.length} regions. We are at <strong className="text-primary">{programme.progress}%</strong> of our intended goal for the current cycle.
                </p>
              </div>
            </Reveal>

            {/* 5. THE INDICATOR */}
            <Reveal delay={200} className="relative pl-10 md:pl-14">
              <span className="absolute left-0 top-1.5 size-6 rounded-full border border-accent bg-background grid place-items-center md:size-8 md:top-0 text-xs font-medium text-accent">05</span>
              <h2 className="eyebrow text-accent">The Indicator</h2>
              <dl className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2">
                {programme.metrics.map((metric) => (
                  <div key={metric.label} className="bg-background p-6 transition-colors hover:border-accent">
                    <dt className="text-sm text-muted-foreground">{metric.label}</dt>
                    <dd className="display-md tabular mt-2 text-primary">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="border border-border bg-card p-7">
              <p className="eyebrow text-muted-foreground">At a glance</p>
              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="text-muted-foreground">Cause</dt>
                  <dd className="mt-1 text-foreground">
                    {cause?.label ?? programme.categoryLabel}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Who it serves</dt>
                  <dd className="mt-1 text-foreground">{programme.beneficiaries}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Where it runs</dt>
                  <dd className="mt-1 text-foreground">{programme.geography.join(", ")}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Headline metric</dt>
                  <dd className="mt-1 text-foreground">
                    {programme.headlineMetric.value} · {programme.headlineMetric.label}
                  </dd>
                </div>
              </dl>
              <div className="mt-7 flex flex-col gap-3">
                <ActionLink to="/donate" search={{ cause: programme.cause }} variant="primary">
                  Support this programme
                </ActionLink>
                <ActionLink to="/get-involved" variant="outline">
                  Volunteer or partner
                </ActionLink>
              </div>
            </div>

            <div className="border border-border bg-secondary/60 p-7">
              <p className="eyebrow text-muted-foreground">Related causes</p>
              <ul className="mt-4 space-y-3 text-sm">
                {otherProgrammes.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to="/programmes/$slug"
                      params={{ slug: item.slug }}
                      className="link-underline text-foreground"
                    >
                      {item.name}
                    </Link>
                    <span className="block text-xs text-muted-foreground">
                      {item.categoryLabel}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 ? (
        <section
          aria-labelledby="programme-stories"
          className="border-t border-border bg-secondary/45"
        >
          <div className="shell py-20">
            <SectionHeading
              eyebrow="Stories"
              title="From this programme"
              description="Demo stories written for this prototype."
            />
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((story, index) => (
                <li key={story.slug}>
                  <StoryCard story={story} delay={index * 70} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <FinalCta />
    </>
  );
}
