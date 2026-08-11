import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { PrototypeNotice } from "@/components/common/PrototypeTag";
import { ApproachSteps } from "@/components/impact/ApproachSteps";
import { ImpactAtlas } from "@/components/maps/ImpactAtlas";
import { FinalCta } from "@/components/impact/Participation";
import { leadership, organisationTimeline, values } from "@/data/impact";
import { partners } from "@/data/reports";
import { PROTOTYPE_NOTE, organisation } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aaroha Foundation" },
      {
        name: "description",
        content:
          "How Aaroha Foundation works: mission, vision, values, leadership, partners and a timeline of the organisation's journey since 2014.",
      },
      { property: "og:title", content: "About — Aaroha Foundation" },
      {
        property: "og:description",
        content: "Mission, values, leadership and partners behind a community-led impact platform.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We began with one question, asked in one district."
        description="Why do results improve on paper while futures stay narrow? Twelve years later, that question still sets our agenda."
        meta={<PrototypeNotice>{PROTOTYPE_NOTE}</PrototypeNotice>}
      />

      <section aria-labelledby="story" className="border-b border-border bg-background">
        <div className="shell grid gap-14 py-20 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 id="story" className="display-xl text-primary">
              Our story
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-6 text-base leading-relaxed text-foreground/85">
            <p>
              Aaroha Foundation started in {organisation.founded} in a single district of Odisha,
              after a board results review showed a district-record pass rate alongside a
              near-record drop in college enrolment. The two facts belonged to the same story, and
              nobody was holding both at once.
            </p>
            <p>
              What followed was less a plan than a discipline: listen in the habitation, design with
              a local committee, publish the indicator that matters, and refuse to scale anything
              that has not cleared two cycles of evidence.
            </p>
            <p>
              Today the prototype describes eighteen programmes across twelve states in six causes.
              The emphasis has shifted from expansion to depth — fewer new districts, stronger
              evidence in the ones we already work in.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="mission" className="border-b border-border bg-secondary/45">
        <div className="shell py-20 md:py-28">
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            <div className="bg-background p-9 md:p-12">
              <p className="eyebrow text-accent">Mission</p>
              <h2 id="mission" className="display-lg mt-4 text-primary">
                Turn opportunity into action, and action into measurable progress.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                We work alongside communities to build locally relevant programmes, and we make the
                results — including the disappointing ones — visible.
              </p>
            </div>
            <div className="bg-background p-9 md:p-12">
              <p className="eyebrow text-accent">Vision</p>
              <h2 className="display-lg mt-4 text-primary">
                A country where impact is verifiable by the people it is meant to serve.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Not impact asserted in a report, but impact a community can check against what it
                actually experienced.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading eyebrow="Values" title="Four commitments we can be held to." />
            <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <li key={value.title}>
                  <Reveal delay={index * 80} className="border-t border-border-strong pt-6">
                    <h3 className="display-md text-primary">{value.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ApproachSteps />

      <section aria-labelledby="timeline" className="border-b border-border bg-background">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            eyebrow="Our journey"
            title="Twelve years, in order."
            description="A prototype timeline. Dates and milestones are illustrative."
          />
          <ol className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
            {organisationTimeline.map((entry, index) => (
              <li key={entry.year}>
                <Reveal delay={index * 70} className="h-full bg-background p-8">
                  <p className="tabular font-[family-name:var(--font-display)] text-3xl text-accent">
                    {entry.year}
                  </p>
                  <h3 className="display-md mt-4 text-primary">{entry.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="leadership" className="border-b border-border bg-secondary/45">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            eyebrow="Leadership"
            title="Accountable, named and reachable."
            description="Demo profiles for the prototype. Governance documents are listed on the Transparency page."
          />
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person, index) => (
              <li key={person.name}>
                <Reveal delay={index * 60} className="border-t border-border-strong pt-6">
                  <h3 className="display-md text-primary">{person.name}</h3>
                  <p className="mt-2 text-sm font-medium text-foreground">{person.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{person.focus}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-20">
            <SectionHeading
              eyebrow="Partners"
              title="Nothing here was built alone."
              description="Government departments, CSR partners, technical institutions and civil society networks, with defined roles."
            />
            <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((partner, index) => (
                <li key={partner.name}>
                  <Reveal delay={index * 50} className="h-full bg-background p-7">
                    <p className="eyebrow text-muted-foreground">Since {partner.since}</p>
                    <h3 className="mt-4 font-medium text-primary">{partner.name}</h3>
                    <p className="mt-2 text-xs text-muted-foreground">{partner.type}</p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                      {partner.contribution}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ImpactAtlas heading="Where we work." />
      <FinalCta />
    </>
  );
}
