import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { formatStoryDate } from "@/data/stories";
import type { Story } from "@/types";
import { Reveal } from "@/components/common/Reveal";

export function StoryCard({
  story,
  layout = "standard",
  delay = 0,
}: {
  story: Story;
  layout?: "standard" | "wide";
  delay?: number;
}) {
  const isWide = layout === "wide";

  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={cn(
          "group flex h-full flex-col overflow-hidden border border-border bg-card",
          isWide && "lg:grid lg:grid-cols-[1.15fr_1fr]",
        )}
      >
        <img
          src={story.image}
          alt={story.imageAlt}
          width={1280}
          height={1024}
          loading="lazy"
          decoding="async"
          className={cn(
            "w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]",
            isWide ? "aspect-[16/10] lg:h-full lg:aspect-auto" : "aspect-[16/10]",
          )}
        />
        <div className={cn("flex flex-1 flex-col p-7", isWide && "lg:p-10")}>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="eyebrow text-accent">{story.categoryLabel}</span>
            <time dateTime={story.date}>{formatStoryDate(story.date)}</time>
            <span className="flex items-center gap-1.5">
              <Clock aria-hidden="true" className="size-3.5" />
              {story.readingMinutes} min read
            </span>
          </div>

          <h3 className={cn("mt-4 text-primary", isWide ? "display-lg" : "display-md")}>
            <Link to="/stories/$slug" params={{ slug: story.slug }} className="link-underline">
              {story.title}
            </Link>
          </h3>

          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
            {story.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 text-sm">
            <span className="min-w-0">
              <span className="block font-medium text-foreground">{story.person}</span>
              <span className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin aria-hidden="true" className="size-3.5 shrink-0 text-sage" />
                {story.location}
              </span>
            </span>
            <Link
              to="/stories/$slug"
              params={{ slug: story.slug }}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary link-underline"
              aria-label={`Read the full story: ${story.title}`}
            >
              Read
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
