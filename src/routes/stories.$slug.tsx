import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, MapPin } from "lucide-react";

import { formatStoryDate, storyBySlug, stories } from "@/data/stories";
import { programmeBySlug } from "@/data/programmes";
import type { Story } from "@/types";
import { ActionLink } from "@/components/common/Action";
import { Reveal } from "@/components/common/Reveal";
import { StoryCard } from "@/components/stories/StoryCard";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }): { story: Story } => {
    const story = storyBySlug(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Story not found — Aaroha Foundation" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { story } = loaderData;
    return {
      meta: [
        { title: `${story.title} — Aaroha Foundation` },
        { name: "description", content: story.excerpt },
        { property: "og:title", content: story.title },
        { property: "og:description", content: story.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/stories/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/stories/${params.slug}` }],
    };
  },
  notFoundComponent: StoryNotFound,
  component: StoryDetail,
});

function StoryNotFound() {
  return (
    <div className="shell py-40 text-center">
      <h1 className="display-xl text-primary">Story not found</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        This story may have been renamed or removed.
      </p>
      <ActionLink to="/stories" variant="primary" className="mt-8">
        Browse all stories
      </ActionLink>
    </div>
  );
}

function StoryDetail() {
  const { story }: { story: Story } = Route.useLoaderData();
  const programme = programmeBySlug(story.programmeSlug);
  const related = stories.filter((item) => item.slug !== story.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="border-b border-border bg-secondary/60 pt-28 pb-14 md:pt-36 md:pb-20">
          <div className="shell-narrow">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground link-underline"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              All stories
            </Link>
            <p className="eyebrow mt-8 text-accent">{story.categoryLabel}</p>
            <h1 className="display-hero mt-5 text-balance text-primary">{story.title}</h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{story.person}</span>
              <span className="flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="size-4 text-sage" />
                {story.location}
              </span>
              <time dateTime={story.date}>{formatStoryDate(story.date)}</time>
              <span className="flex items-center gap-1.5">
                <Clock aria-hidden="true" className="size-4" />
                {story.readingMinutes} min read
              </span>
            </div>
          </div>
        </header>

        <img
          src={story.image}
          alt={story.imageAlt}
          width={1280}
          height={1024}
          className="aspect-[16/9] w-full object-cover"
        />

        <div className="shell-narrow py-16 md:py-24">
          <ol className="grid gap-px border border-border bg-border sm:grid-cols-3">
            {[
              { label: "Before", value: story.before },
              { label: "Intervention", value: story.intervention },
              { label: "Today", value: story.today },
            ].map((phase, index) => (
              <li key={phase.label} className="bg-background p-6">
                <p className="eyebrow text-accent">
                  {String(index + 1).padStart(2, "0")} · {phase.label}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">{phase.value}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-foreground/85">
            {story.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-12 border-l-2 border-accent pl-6">
            <p className="display-lg text-primary">“{story.quote}”</p>
            <footer className="mt-4 text-sm text-muted-foreground">{story.quoteAttribution}</footer>
          </blockquote>

          {programme ? (
            <div className="mt-14 border border-border bg-card p-8">
              <p className="eyebrow text-muted-foreground">Programme behind this story</p>
              <h2 className="display-md mt-3 text-primary">{programme.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {programme.tagline}
              </p>
              <ActionLink
                to="/programmes/$slug"
                params={{ slug: programme.slug }}
                variant="outline"
                className="mt-6"
              >
                View programme
              </ActionLink>
            </div>
          ) : null}

          <p className="mt-12 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            This is a demo story written for a prototype. Names, quotes and details are fictional
            composites and do not describe an identifiable individual.
          </p>
        </div>
      </article>

      <section aria-labelledby="related" className="border-t border-border bg-secondary/45">
        <div className="shell py-20">
          <Reveal>
            <h2 id="related" className="display-lg text-primary">
              More stories
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((item, index) => (
              <li key={item.slug}>
                <StoryCard story={item} delay={index * 70} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
