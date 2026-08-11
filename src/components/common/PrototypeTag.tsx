import { Info } from "lucide-react";

import { cn } from "@/lib/utils";

/** Small, honest label used wherever prototype data is displayed. */
export function PrototypeTag({
  label = "Prototype impact data",
  tone = "default",
  className,
}: {
  label?: string;
  tone?: "default" | "inverse";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-3 py-1.5 text-[0.6875rem] font-medium tracking-[0.12em] uppercase",
        tone === "inverse"
          ? "border-primary-foreground/25 text-primary-foreground/70"
          : "border-border-strong text-muted-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          tone === "inverse" ? "bg-primary-foreground/60" : "bg-accent",
        )}
      />
      {label}
    </span>
  );
}

/** Full-width disclosure banner for data-heavy pages. */
export function PrototypeNotice({ children, className }: { children: string; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-start gap-3 border border-border bg-secondary/70 px-5 py-4 text-sm leading-relaxed text-muted-foreground",
        className,
      )}
    >
      <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
      <span>{children}</span>
    </p>
  );
}
