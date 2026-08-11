import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ShieldCheck, Scale, BarChart3, Landmark } from "lucide-react";

import { cn } from "@/lib/utils";
import { partners, reportFilters } from "@/data/reports";
import { spendAllocation } from "@/data/impact";
import { PROTOTYPE_NOTE, organisation } from "@/data/site";
import type { ReportKind } from "@/types";
import { PageHero } from "@/components/common/PageHero";
import { PrototypeNotice } from "@/components/common/PrototypeTag";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TransparencyGrid } from "@/components/transparency/TransparencyGrid";
import { FinalCta } from "@/components/impact/Participation";

export const Route = createFileRoute("/transparency")({
  head: () => ({
    meta: [
      { title: "Transparency — Financials, governance and evidence | Aaroha Foundation" },
      {
        name: "description",
        content:
          "How Aaroha Foundation spends, measures, governs and reports. Financial allocation, measurement methodology, governance, policies and partnerships in one place.",
      },
      { property: "og:title", content: "Transparency — Financials, governance and evidence" },
      {
        property: "og:description",
        content:
          "Trust cannot be asserted. Financials, methodology and governance published in one hub.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/transparency" },
    ],
    links: [{ rel: "canonical", href: "/transparency" }],
  }),
  component: TransparencyPage,
});

const governancePillars = [
  {
    icon: Landmark,
    title: "Board and oversight",
    description:
      "A seven-member board with an independent majority, meeting quarterly. Audit and ethics sub-committees report to it directly.",
  },
  {
    icon: BarChart3,
    title: "Independent measurement",
    description:
      "The measurement unit reports to the board, not to programme leadership, so results are published whether or not they flatter us.",
  },
  {
    icon: Scale,
    title: "Conflict of interest",
    description:
      "Annual declarations from board, leadership and vendors. Related-party transactions are disclosed in the annual report.",
  },
  {
    icon: ShieldCheck,
    title: "Safeguarding",
    description:
      "Child protection, POSH and community grievance policies with a named officer and an external escalation route.",
  },
];

const policies = [
  "Child protection and safeguarding policy",
  "Prevention of sexual harassment (POSH) policy",
  "Whistleblower and grievance redressal policy",
  "Data protection and consent policy",
  "Photography and dignity in storytelling policy",
  "Procurement and vendor selection policy",
];

const measurementSteps = [
  {
    title: "Baseline",
    description:
      "Every programme site is measured before delivery begins, against indicators fixed in advance.",
  },
  {
    title: "Midline",
    description:
      "A mid-cycle round tests whether the approach is working while there is still time to change it.",
  },
  {
    title: "Endline",
    description:
      "Outcomes are compared to the baseline and to comparison habitations wherever one is available.",
  },
  {
    title: "Publication",
    description:
      "Results are published in the impact report, including programmes that did not meet their target.",
  },
];

function TransparencyPage() {
  const [kind, setKind] = useState<ReportKind | "all">("all");

  const activeKinds = useMemo<ReportKind[] | undefined>(
    () => (kind === "all" ? undefined : [kind]),
    [kind],
  );

  return (
    <>
      <PageHero
        eyebrow="Transparency"
        title="Your trust deserves evidence."
        description="What we spend, how we measure, who governs us and which policies bind us. Published in one place rather than on request."
        meta={<PrototypeNotice>{PROTOTYPE_NOTE}</PrototypeNotice>}
      />

      <section aria-labelledby="financial" className="border-b border-border bg-background">
        <div className="shell py-16 md:py-24">
          <SectionHeading
            eyebrow="Financial transparency"
            title="Where every hundred rupees goes."
            description="Illustrative allocation for this prototype. In production these figures come from the audited statement for the financial year."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
            <ul className="space-y-7">
              {spendAllocation.map((item, index) => (
                <li key={item.label}>
                  <Reveal delay={index * 70}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-foreground">{item.label}</span>
                      <span className="tabular display-md text-primary">{item.value}%</span>
                    </div>
                    <div
                      role="progressbar"
                      aria-valuenow={item.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${item.label}: ${item.value} percent of spend`}
                      className="mt-3 h-1.5 w-full bg-border"
                    >
                      <div
                        className={cn("h-full", index === 0 ? "bg-accent" : "bg-sage")}
                        style={{ width: `${item.share}%` }}
                      />
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={120} className="border border-border bg-secondary/60 p-8">
              <h3 className="display-md text-primary">How we account for it</h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li>
                  Programme delivery includes field staff, community facilitators, materials and
                  travel — the costs that reach a habitation.
                </li>
                <li>
                  Measurement is funded as its own line so evaluation is never the first budget cut
                  in a difficult year.
                </li>
                <li>
                  Restricted grants are tracked separately from unrestricted giving, with
                  utilisation reported per grant.
                </li>
                <li>
                  Statutory registration and tax-exemption details are deliberately omitted from
                  this prototype and will be published only once verified.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="measurement" className="border-b border-border bg-secondary/45">
        <div className="shell py-16 md:py-24">
          <SectionHeading
            eyebrow="Impact measurement"
            title="How a number earns the right to be published."
            description="Four rounds, fixed indicators, and an independent unit that reports to the board."
          />
          <ol className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {measurementSteps.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={index * 70} className="h-full">
                  <div className="h-full bg-background p-8">
                    <p className="tabular text-sm text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="display-md mt-5 text-primary">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="documents" className="border-b border-border bg-background">
        <div className="shell py-16 md:py-24">
          <SectionHeading
            eyebrow="Document library"
            title="Reports, policies and disclosures."
            description="Every document below is a clearly marked placeholder in this prototype. No file is served."
          />

          <div
            role="group"
            aria-label="Filter documents by type"
            className="mt-10 flex flex-wrap gap-2 border-b border-border pb-8"
          >
            {reportFilters.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={kind === option.id}
                onClick={() => setKind(option.id as ReportKind | "all")}
                className={cn(
                  "min-h-11 border px-4 text-[0.8125rem] transition-colors",
                  kind === option.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border-strong text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <TransparencyGrid {...(activeKinds ? { kinds: activeKinds } : {})} />
          </div>
        </div>
      </section>

      <section aria-labelledby="governance" className="border-b border-border bg-secondary/45">
        <div className="shell py-16 md:py-24">
          <SectionHeading
            eyebrow="Governance"
            title="Who holds the organisation to account."
            description="Demo governance structure for this prototype, written to show what a production hub would disclose."
          />
          <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
            {governancePillars.map((pillar, index) => (
              <li key={pillar.title}>
                <Reveal delay={index * 70} className="h-full">
                  <article className="h-full bg-background p-8">
                    <pillar.icon
                      aria-hidden="true"
                      className="size-6 text-accent"
                      strokeWidth={1.25}
                    />
                    <h3 className="display-md mt-6 text-primary">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="policies" className="border-b border-border bg-background">
        <div className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-accent">Policies & compliance</p>
              <h2 id="policies" className="display-xl mt-4 text-balance text-primary">
                The rules we operate under.
              </h2>
              <p className="lede mt-5">
                Policies are summarised here and available in full on request. Compliance filings
                are excluded from this prototype rather than invented.
              </p>
            </Reveal>
            <p className="mt-8 text-sm text-muted-foreground">
              Questions about governance or compliance: {organisation.email}
            </p>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {policies.map((policy, index) => (
              <li key={policy}>
                <Reveal delay={index * 50}>
                  <div className="flex items-start gap-4 py-5">
                    <ShieldCheck
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-sage"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-sm text-foreground">{policy}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Sample placeholder · full text not published in this prototype
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="partners" className="border-b border-border bg-secondary/45">
        <div className="shell py-16 md:py-24">
          <SectionHeading
            eyebrow="Partnerships"
            title="Who we work with, and on what."
            description="Demo partner list. Partnership scope is published so contribution and influence stay visible."
          />
          <div className="mt-12 overflow-x-auto border border-border bg-background">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <caption className="sr-only">
                Partner organisations, type, year and contribution
              </caption>
              <thead>
                <tr className="border-b border-border text-xs tracking-[0.12em] uppercase text-muted-foreground">
                  <th scope="col" className="px-5 py-4 font-medium">
                    Partner
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium">
                    Type
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium">
                    Since
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium">
                    Contribution
                  </th>
                </tr>
              </thead>
              <tbody>
                {partners.map((partner) => (
                  <tr key={partner.name} className="border-b border-border last:border-0">
                    <th scope="row" className="px-5 py-4 font-medium text-primary">
                      {partner.name}
                    </th>
                    <td className="px-5 py-4 text-muted-foreground">{partner.type}</td>
                    <td className="tabular px-5 py-4 text-muted-foreground">{partner.since}</td>
                    <td className="px-5 py-4 text-muted-foreground">{partner.contribution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
