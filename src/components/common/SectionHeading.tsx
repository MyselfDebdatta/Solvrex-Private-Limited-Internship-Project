import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/common/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
  action?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <Reveal className={cn("max-w-2xl", align === "center" && "text-center")}>
        {eyebrow ? (
          <p
            className={cn(
              "eyebrow mb-4",
              tone === "inverse" ? "text-primary-foreground/65" : "text-accent",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "display-xl text-balance",
            tone === "inverse" ? "text-primary-foreground" : "text-primary",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p className={cn("lede mt-5", tone === "inverse" && "text-primary-foreground/75")}>
            {description}
          </p>
        ) : null}
      </Reveal>
      {action ? <Reveal delay={120}>{action}</Reveal> : null}
    </div>
  );
}
