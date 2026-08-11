import { FileText, Download, Lock, ArrowRight } from "lucide-react";

import { reports } from "@/data/reports";
import type { ReportKind } from "@/types";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

/** TRUST & TRANSPARENCY HUB — grouped evidence library. */
export function TransparencyGrid({
  kinds,
  compact = false,
}: {
  kinds?: ReportKind[];
  compact?: boolean;
}) {
  const visible = kinds ? reports.filter((report) => kinds.includes(report.kind)) : reports;
  const shown = compact ? visible.slice(0, 6) : visible;

  // Group by kindLabel
  const grouped = shown.reduce((acc, report) => {
    if (!acc[report.kindLabel]) acc[report.kindLabel] = [];
    acc[report.kindLabel].push(report);
    return acc;
  }, {} as Record<string, typeof reports>);

  return (
    <div className="space-y-16">
      {Object.entries(grouped).map(([category, items], categoryIndex) => (
        <Reveal key={category} delay={categoryIndex * 80}>
          <div className="border-t border-border pt-10 md:grid md:grid-cols-[16rem_1fr] md:gap-16">
            <h3 className="eyebrow text-accent mb-6 md:mb-0">{category}</h3>
            
            <ul className="flex flex-col gap-px border border-border bg-border">
              {items.map((report, index) => (
                <li key={report.id} className="group flex flex-col bg-background p-6 transition-colors duration-500 hover:bg-secondary/45 md:flex-row md:items-center md:justify-between md:px-8">
                  <div className="flex items-start gap-4 md:items-center">
                    <FileText aria-hidden="true" className="size-5 text-muted-foreground transition-colors group-hover:text-primary mt-1 md:mt-0" strokeWidth={1.5} />
                    <div>
                      <p className="font-[family-name:var(--font-display)] text-lg text-primary transition-colors group-hover:text-primary-deep">{report.title}</p>
                      <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="tabular font-medium">{report.year}</span>
                        <span className="h-3 w-px bg-border" />
                        <span>{report.pages} pages</span>
                        <span className="h-3 w-px bg-border" />
                        <span>{report.description}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4 md:mt-0 md:border-t-0 md:pt-0">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground md:hidden">
                       <Lock className="size-3" />
                       <span>Placeholder</span>
                    </div>
                    
                    <button type="button" className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent" disabled>
                      View report
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function TransparencySection() {
  return (
    <section aria-labelledby="transparency" className="border-b border-border bg-background">
      <div className="shell py-20 md:py-32">
        <SectionHeading
          eyebrow="Trust & transparency"
          title="Your trust deserves evidence."
          description="Financials, methodology, governance and policies published in one place. Registration and statutory details will be added only once verified."
        />
        <div className="mt-20">
          <TransparencyGrid compact />
        </div>
      </div>
    </section>
  );
}
