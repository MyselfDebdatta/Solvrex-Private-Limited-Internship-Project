import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/common/PageHero";
import { PrototypeNotice } from "@/components/common/PrototypeTag";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ActionLink } from "@/components/common/Action";
import { ImpactAtlas } from "@/components/maps/ImpactAtlas";
import { ImpactDashboard } from "@/components/impact/ImpactDashboard";
import { JourneyTimeline } from "@/components/impact/JourneyTimeline";
import { TransparencyGrid } from "@/components/transparency/TransparencyGrid";
import { StoryCard } from "@/components/stories/StoryCard";
import { FinalCta } from "@/components/impact/Participation";
import { stories } from "@/data/stories";
import { PROTOTYPE_NOTE } from "@/data/site";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Atlas, outcomes and reporting | Aaroha Foundation" },
      {
        name: "description",
        content:
          "Impact Atlas, reach by cause and geography, expenditure allocation and outcome reporting for Aaroha Foundation programmes.",
      },
      { property: "og:title", content: "Impact — Atlas, outcomes and reporting" },
      {
        property: "og:description",
        content: "An interactive Impact Atlas plus reach, allocation and outcome breakdowns.",
      },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Make impact visible, including what did not work."
        description="Reach, coverage, allocation and outcomes in one place, with the methodology stated alongside the numbers."
        meta={<PrototypeNotice>{PROTOTYPE_NOTE}</PrototypeNotice>}
      />

      <ImpactAtlas heading="Impact Atlas: change across India." />
      <ImpactDashboard showCta={false} />

      <section aria-labelledby="impact-stories" className="border-b border-border bg-secondary/45">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            eyebrow="Behind the numbers"
            title="Every indicator has a person attached to it."
            action={
              <ActionLink to="/stories" variant="outline">
                All stories
              </ActionLink>
            }
          />
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {stories.slice(0, 3).map((story, index) => (
              <li key={story.slug}>
                <StoryCard story={story} delay={index * 80} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JourneyTimeline />

      <section aria-labelledby="impact-reports" className="border-b border-border bg-background">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            eyebrow="Reporting"
            title="Impact reports and methodology."
            description="How reach, outcome and attribution are defined — and what our numbers deliberately do not claim."
            action={
              <ActionLink to="/transparency" variant="outline">
                Transparency hub
              </ActionLink>
            }
          />
          <div className="mt-14">
            <TransparencyGrid kinds={["impact", "annual"]} />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
