import { Link } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import { cn } from "@/lib/utils";
import { formatNumber } from "@/lib/format";
import { causeFilters, causeMap } from "@/data/causes";
import { programmeBySlug } from "@/data/programmes";
import { stateImpacts } from "@/data/states";
import type { CauseId } from "@/types";
import { PrototypeTag } from "@/components/common/PrototypeTag";
import { SectionHeading } from "@/components/common/SectionHeading";

const geoUrl = "/data/india-states.geojson";

/**
 * IMPACT ATLAS — the signature surface. A stylised, filterable India map with a
 * detail panel. Fully keyboard operable: every marker is a real button.
 */
export function ImpactAtlas({
  heading = "Change is happening across India.",
}: {
  heading?: string;
}) {
  const [filter, setFilter] = useState<CauseId | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>("odisha");
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      stateImpacts.filter((state) => filter === "all" || state.causes.includes(filter as CauseId)),
    [filter],
  );

  const selected = visible.find((state) => state.id === selectedId) ?? null;
  const featured = selected ? programmeBySlug(selected.featuredProgrammeSlug) : undefined;

  const totals = visible.reduce(
    (acc, state) => ({
      people: acc.people + state.peopleReached,
      programmes: acc.programmes + state.programmes,
    }),
    { people: 0, programmes: 0 },
  );

  return (
    <section aria-labelledby="impact-atlas" className="border-b border-border bg-primary">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Impact Atlas"
          tone="inverse"
          title={heading}
          description="Filter by cause, then select a state to see what is running there. Built as an impact intelligence surface with geographically accurate boundaries."
          action={<PrototypeTag tone="inverse" />}
        />

        {/* Filters */}
        <div
          role="group"
          aria-label="Filter the atlas by cause"
          className="mt-12 flex flex-wrap gap-2"
        >
          {causeFilters.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={filter === option.id}
              onClick={() => setFilter(option.id)}
              className={cn(
                "min-h-11 border px-4 text-[0.8125rem] transition-colors",
                filter === option.id
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-primary-foreground/25 text-primary-foreground/75 hover:border-primary-foreground/60 hover:text-primary-foreground",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14 relative">
          {/* Map */}
          <div className="relative bg-primary-deep/20 rounded-md p-4">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 1150,
                center: [82.5, 22.5],
              }}
              width={600}
              height={650}
              className="w-[90%] mx-auto focus:outline-none"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateName = geo.properties.NAME_1;
                    const stateImpact = stateImpacts.find(
                      (s) => s.name.toLowerCase() === stateName?.toLowerCase(),
                    );
                    const isVisible = stateImpact
                      ? visible.some((item) => item.id === stateImpact.id)
                      : false;
                    const isActive = stateImpact ? selected?.id === stateImpact.id : false;
                    const isHovered = stateImpact && hoveredState === stateImpact.id;

                    let fill =
                      "color-mix(in oklab, var(--color-primary-foreground) 6%, transparent)";
                    if (isVisible) {
                      fill =
                        "color-mix(in oklab, var(--color-primary-foreground) 30%, transparent)";
                    }
                    if (isActive) {
                      fill = "var(--color-accent)";
                    }

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        tabIndex={isVisible ? 0 : -1}
                        role="button"
                        aria-label={
                          stateImpact
                            ? `${stateImpact.name}: ${stateImpact.programmes} programmes, ${formatNumber(stateImpact.peopleReached)} people reached`
                            : stateName
                        }
                        aria-pressed={isActive}
                        onClick={() => {
                          if (isVisible && stateImpact) setSelectedId(stateImpact.id);
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            if (isVisible && stateImpact) setSelectedId(stateImpact.id);
                          }
                        }}
                        onMouseEnter={() => {
                          if (stateImpact) setHoveredState(stateImpact.id);
                        }}
                        onMouseLeave={() => {
                          setHoveredState(null);
                        }}
                        style={{
                          default: {
                            fill: fill,
                            stroke:
                              "color-mix(in oklab, var(--color-primary-foreground) 20%, transparent)",
                            strokeWidth: 0.5,
                            outline: "none",
                            transition: "fill 250ms",
                          },
                          hover: {
                            fill: isActive
                              ? "var(--color-accent)"
                              : isVisible
                                ? "color-mix(in oklab, var(--color-primary-foreground) 45%, transparent)"
                                : "color-mix(in oklab, var(--color-primary-foreground) 10%, transparent)",
                            stroke:
                              "color-mix(in oklab, var(--color-primary-foreground) 40%, transparent)",
                            strokeWidth: 0.5,
                            outline: "none",
                            cursor: isVisible ? "pointer" : "default",
                          },
                          pressed: {
                            fill: "var(--color-accent)",
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>

            {/* Hover Tooltip (Absolute overlay) */}
            {hoveredState && (
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 text-center md:top-4 md:bottom-auto z-10 flex justify-center">
                <div className="bg-background/95 text-foreground px-4 py-2 rounded-sm shadow-md text-sm border border-border inline-block">
                  {stateImpacts.find((s) => s.id === hoveredState)?.name}
                  {visible.some((s) => s.id === hoveredState) && (
                    <span className="block text-xs text-muted-foreground mt-0.5">
                      {stateImpacts.find((s) => s.id === hoveredState)?.programmes} Programmes
                    </span>
                  )}
                </div>
              </div>
            )}

            <p className="mt-4 text-center text-[0.625rem] tracking-wider uppercase text-primary-foreground/50">
              PROTOTYPE IMPACT DATA - NOT REAL STATISTICS
            </p>
          </div>

          {/* Panel */}
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-px border border-primary-foreground/15 bg-primary-foreground/15">
              <div className="bg-primary p-5">
                <p className="tabular font-[family-name:var(--font-display)] text-3xl text-primary-foreground">
                  {formatNumber(totals.people)}
                </p>
                <p className="mt-1 text-xs text-primary-foreground/60">
                  People reached in this filter
                </p>
              </div>
              <div className="bg-primary p-5">
                <p className="tabular font-[family-name:var(--font-display)] text-3xl text-primary-foreground">
                  {totals.programmes}
                </p>
                <p className="mt-1 text-xs text-primary-foreground/60">
                  Programme deployments · {visible.length} states
                </p>
              </div>
            </div>

            {selected ? (
              <article className="mt-6 flex-1 border border-primary-foreground/15 bg-primary-deep p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="eyebrow text-accent">{selected.region}</p>
                    <h3 className="display-lg mt-2 text-primary-foreground">{selected.name}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedId(null)}
                    aria-label={`Clear ${selected.name} selection`}
                    className="grid min-h-11 min-w-11 shrink-0 place-items-center border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10"
                  >
                    <X aria-hidden="true" className="size-4" />
                  </button>
                </div>

                <dl className="mt-7 grid grid-cols-3 gap-4 border-y border-primary-foreground/15 py-5">
                  {[
                    { label: "Programmes", value: String(selected.programmes) },
                    { label: "Communities", value: String(selected.communities) },
                    { label: "People reached", value: formatNumber(selected.peopleReached) },
                  ].map((item) => (
                    <div key={item.label} className="min-w-0">
                      <dt className="text-[0.6875rem] tracking-[0.1em] text-primary-foreground/50 uppercase">
                        {item.label}
                      </dt>
                      <dd className="tabular mt-2 font-[family-name:var(--font-display)] text-xl text-primary-foreground">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
                  {selected.description}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {selected.causes.map((cause) => (
                    <li
                      key={cause}
                      className="border border-primary-foreground/20 px-3 py-1 text-xs text-primary-foreground/70"
                    >
                      {causeMap[cause].label}
                    </li>
                  ))}
                </ul>

                {featured ? (
                  <div className="mt-7 border-t border-primary-foreground/15 pt-6">
                    <p className="eyebrow text-primary-foreground/50">Featured programme</p>
                    <p className="display-md mt-2 text-primary-foreground">{featured.name}</p>
                    <p className="mt-2 text-sm text-primary-foreground/70">{featured.tagline}</p>
                    <Link
                      to="/programmes/$slug"
                      params={{ slug: featured.slug }}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent link-underline"
                    >
                      Explore impact
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </Link>
                  </div>
                ) : null}
              </article>
            ) : (
              <div className="mt-6 flex flex-1 items-center justify-center border border-dashed border-primary-foreground/20 p-10 text-center">
                <p className="max-w-xs text-sm text-primary-foreground/60">
                  Select a state on the map to see its programmes, coverage and featured work.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
