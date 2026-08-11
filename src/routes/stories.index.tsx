import { createFileRoute } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { featuredStory, stories, storyFilters } from "@/data/stories";
import { PageHero } from "@/components/common/PageHero";
import { StoryCard } from "@/components/stories/StoryCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FinalCta } from "@/components/impact/Participation";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Stories of Change — Aaroha Foundation" },
      {
        name: "description",
        content:
          "An editorial archive of field stories from Aaroha Foundation programmes: education, healthcare, livelihood, environment and community leadership.",
      },
      { property: "og:title", content: "Stories of Change — Aaroha Foundation" },
      {
        property: "og:description",
        content: "Field stories with a clear before, intervention and today.",
      },
      { property: "og:url", content: "/stories" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  const [filter, setFilter] = useState<string>("all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    return stories.filter((story) => {
      const matchesFilter = filter === "all" || story.cause === filter;
      const matchesTerm =
        term.length === 0 ||
        [story.title, story.excerpt, story.person, story.location]
          .join(" ")
          .toLowerCase()
          .includes(term);
      return matchesFilter && matchesTerm;
    });
  }, [filter, query]);

  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="One story. One turning point."
        description="Demo stories written for this prototype. Composite accounts based on programme patterns; no real individual is identified."
      />

      <section aria-labelledby="featured-story" className="border-b border-border bg-background">
        <div className="shell py-16 md:py-20">
          <h2 id="featured-story" className="eyebrow text-accent">
            Featured story
          </h2>
          <div className="mt-8">
            <StoryCard story={featuredStory} layout="wide" />
          </div>
        </div>
      </section>

      <section aria-labelledby="story-archive" className="bg-secondary/45">
        <div className="shell py-16 md:py-24">
          <SectionHeading eyebrow="Archive" title="All stories" />

          <div className="mt-10 flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="group"
              aria-label="Filter stories by category"
              className="flex flex-wrap gap-2"
            >
              {storyFilters.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={filter === option.id}
                  onClick={() => setFilter(option.id)}
                  className={cn(
                    "min-h-11 border px-4 text-[0.8125rem] transition-colors",
                    filter === option.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border-strong text-muted-foreground hover:border-primary hover:text-primary",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="relative lg:w-72">
              <label htmlFor="story-search" className="sr-only">
                Search stories
              </label>
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <input
                id="story-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search stories"
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
            {results.length} {results.length === 1 ? "story" : "stories"} shown
          </p>

          {results.length === 0 ? (
            <div className="mt-10 border border-dashed border-border-strong p-12 text-center">
              <p className="display-md text-primary">Nothing matches that search</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Try a different category or clear the search term.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFilter("all");
                }}
                className="mt-6 min-h-11 border border-primary px-5 text-sm font-medium text-primary"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {results.map((story, index) => (
                <li key={story.slug}>
                  <StoryCard story={story} delay={index * 60} />
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
