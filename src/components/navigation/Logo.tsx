import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import { organisation } from "@/data/site";

/** Wordmark plus a rising-arc mark; swap the mark for the real logo later. */
export function Logo({
  tone = "default",
  className,
}: {
  tone?: "default" | "inverse";
  className?: string;
}) {
  return (
    <Link
      to="/"
      aria-label={`${organisation.name} — home`}
      className={cn("group flex items-center gap-3", className)}
    >
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className={cn(
          "size-9 shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5",
          tone === "inverse" ? "text-primary-foreground" : "text-primary",
        )}
      >
        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeOpacity="0.25" />
        <path
          d="M9 27C13 15 18 9 24 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M15 27C19 19 24 15 31 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeOpacity="0.55"
        />
        <circle cx="31" cy="15" r="2.5" className="fill-accent" />
      </svg>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-[family-name:var(--font-display)] text-[1.0625rem] tracking-tight",
            tone === "inverse" ? "text-primary-foreground" : "text-primary",
          )}
        >
          {organisation.name}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.625rem] tracking-[0.16em] uppercase",
            tone === "inverse" ? "text-primary-foreground/60" : "text-muted-foreground",
          )}
        >
          {organisation.tagline}
        </span>
      </span>
    </Link>
  );
}
