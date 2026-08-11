import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { causeFilters } from "@/data/causes";
import { programmes } from "@/data/programmes";
import { PROTOTYPE_NOTE } from "@/data/site";
import type { CauseId } from "@/types";
import { PageHero } from "@/components/common/PageHero";
import { PrototypeNotice } from "@/components/common/PrototypeTag";
import { Reveal } from "@/components/common/Reveal";
import { FinalCta } from "@/components/impact/Participation";

const searchSchema = z.object({
  cause: z.string().optional(),
});

export const Route = createFileRoute("/our-work")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Our Work — Programmes by cause | Aaroha Foundation" },
      {
        name: "description",
        content:
          "Explore Aaroha Foundation programmes across education, healthcare, livelihood, women and youth, environment and emergency response. Filter and search by cause.",
      },
      { property: "og:title", content: "Our Work — Programmes by cause" },
      {
        property: "og:description",
        content: "Filterable programme explorer with problem, approach, geography and progress.",
      },
      { property: "og:url", content: "/our-work" },
    ],
    links: [{ rel: "canonical", href: "/our-work" }],
  }),
  component: OurWorkPage,
});

function OurWorkPage() {
  const { cause } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState("");

  const active = (cause ?? "all") as CauseId | "all";

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    return programmes.filter((programme) => {
      const matchesCause = active === "all" || programme.cause === active;
      const matchesTerm =
        term.length === 0 ||
        [programme.name, programme.summary, programme.categoryLabel, ...programme.geography]
          .join(" ")
          .toLowerCase()
          .includes(term);
      return matchesCause && matchesTerm;
    });
  }, [active, query]);

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Eighteen programmes, six connected causes."
        description="Each programme states the problem it is responding to, how it works, where it runs and how far through its current cycle it is."
        meta={<PrototypeNotice>{PROTOTYPE_NOTE}</PrototypeNotice>}
      />

      <section aria-labelledby="programme-explorer" className="bg-background">
        <div className="shell py-14 md:py-20">
          <h2 id="programme-explorer" className="sr-only">
            Programme explorer
          </h2>

          <div className="flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="group"
              aria-label="Filter programmes by cause"
              className="flex flex-wrap gap-2"
            >
              {causeFilters.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={active === option.id}
                  onClick={() =>
                    navigate({
                      search: option.id === "all" ? {} : { cause: option.id },
                      resetScroll: false,
                    })
                  }
                  className={cn(
                    "min-h-11 border px-4 text-[0.8125rem] transition-colors",
                    active === option.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border-strong text-muted-foreground hover:border-primary hover:text-primary",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="relative lg:w-72">
              <label htmlFor="programme-search" className="sr-only">
                Search programmes
              </label>
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <input
                id="programme-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name or state"
                className="min-h-11 w-full border border-border bg-card pl-9 pr-9 text-sm placeholder:text-muted-foreground focus-visible:border-primary"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute top-1/2 right-2 grid size-7 -translate-y-1/2 place-items-center text-muted-foreground hover:text-foreground"
                >
                  <X aria-hidden="true" className="size-4" />
                </button>
              ) : null}
            </div>
          </div>

          <p role="status" className="mt-6 text-sm text-muted-foreground">
            {results.length} {results.length === 1 ? "programme" : "programmes"} shown
          </p>

          {results.length === 0 ? (
            <div className="mt-10 border border-dashed border-border-strong p-12 text-center">
              <p className="display-md text-primary">No programmes match those filters</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Try a different cause, or clear the search term.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  navigate({ search: {}, resetScroll: false });
                }}
                className="mt-6 min-h-11 border border-primary px-5 text-sm font-medium text-primary"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <ul className="mt-10 grid gap-px border border-border bg-border lg:grid-cols-2">
              {results.map((programme, index) => (
                <li key={programme.slug}>
                  <Reveal delay={index * 60} className="h-full">
                    <article className="flex h-full flex-col bg-background">
                      <img
                        src={programme.image}
                        alt={programme.imageAlt}
                        width={1536}
                        height={1024}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[16/9] w-full object-cover"
                      />
                      <div className="flex flex-1 flex-col p-8 md:p-10">
                        <p className="eyebrow text-accent">{programme.categoryLabel}</p>
                        <h3 className="display-lg mt-3 text-primary">{programme.name}</h3>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {programme.summary}
                        </p>

                        <dl className="mt-7 space-y-4 border-t border-border pt-6 text-sm">
                          <div>
                            <dt className="eyebrow text-muted-foreground">Problem</dt>
                            <dd className="mt-2 leading-relaxed text-foreground/85">
                              {programme.problem.split(". ")[0]}.
                            </dd>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <dt className="eyebrow text-muted-foreground">Geography</dt>
                              <dd className="mt-2 text-foreground/85">
                                {programme.geography.join(", ")}
                              </dd>
                            </div>
                            <div>
                              <dt className="eyebrow text-muted-foreground">Who it serves</dt>
                              <dd className="mt-2 text-foreground/85">{programme.beneficiaries}</dd>
                            </div>
                          </div>
                          <div>
                            <dt className="eyebrow text-muted-foreground">
                              {programme.headlineMetric.label}
                            </dt>
                            <dd className="tabular mt-2 font-[family-name:var(--font-display)] text-2xl text-primary">
                              {programme.headlineMetric.value}
                            </dd>
                          </div>
                        </dl>

                        <div className="mt-6 flex-1">
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Current cycle progress</span>
                            <span className="tabular">{programme.progress}%</span>
                          </div>
                          <div className="mt-2 h-1.5 w-full bg-muted">
                            <div
                              className="h-full bg-sage"
                              style={{ width: `${programme.progress}%` }}
                            />
                          </div>
                        </div>

                        <Link
                          to="/programmes/$slug"
                          params={{ slug: programme.slug }}
                          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
                        >
                          Explore {programme.name}
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
