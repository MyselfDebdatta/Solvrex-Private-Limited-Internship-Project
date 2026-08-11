import { FileText, Lock } from "lucide-react";

import { reports } from "@/data/reports";
import type { ReportKind } from "@/types";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

/** TRUST & TRANSPARENCY HUB — document cards, honest about being placeholders. */
export function TransparencyGrid({
  kinds,
  compact = false,
}: {
  kinds?: ReportKind[];
  compact?: boolean;
}) {
  const visible = kinds ? reports.filter((report) => kinds.includes(report.kind)) : reports;
  const shown = compact ? visible.slice(0, 6) : visible;

  return (
    <ul className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {shown.map((report, index) => (
        <li key={report.id}>
          <Reveal delay={index * 60} className="h-full">
            <article className="flex h-full flex-col bg-background p-7">
              <div className="flex items-center justify-between">
                <FileText aria-hidden="true" className="size-5 text-primary" strokeWidth={1.25} />
                <span className="tabular text-xs text-muted-foreground">{report.year}</span>
              </div>
              <p className="eyebrow mt-6 text-accent">{report.kindLabel}</p>
              <h3 className="display-md mt-2 text-primary">{report.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {report.description}
              </p>
              <p className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
                <Lock aria-hidden="true" className="size-3.5 shrink-0" />
                Sample placeholder · {report.pages} pages · not available in this prototype
              </p>
            </article>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function TransparencySection() {
  return (
    <section aria-labelledby="transparency" className="border-b border-border bg-background">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Trust & transparency"
          title="Your trust deserves evidence."
          description="Financials, methodology, governance and policies published in one place. Registration and statutory details will be added only once verified."
        />
        <div className="mt-14">
          <TransparencyGrid compact />
        </div>
      </div>
    </section>
  );
}
