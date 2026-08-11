import { createFileRoute } from "@tanstack/react-router";

import { HomeHero } from "@/components/hero/HomeHero";
import { ImpactStrip } from "@/components/impact/ImpactStrip";
import { ChallengeGrid } from "@/components/impact/ChallengeGrid";
import { ApproachSteps } from "@/components/impact/ApproachSteps";
import { ImpactAtlas } from "@/components/maps/ImpactAtlas";
import { ImpactDashboard } from "@/components/impact/ImpactDashboard";
import { JourneyTimeline } from "@/components/impact/JourneyTimeline";
import { TransparencySection } from "@/components/transparency/TransparencyGrid";
import { FinalCta, PathwayGrid } from "@/components/impact/Participation";
import { ProgrammeCard } from "@/components/programmes/ProgrammeCard";
import { StoryCard } from "@/components/stories/StoryCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ActionLink } from "@/components/common/Action";
import { featuredProgrammes } from "@/data/programmes";
import { stories } from "@/data/stories";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aaroha Foundation — Make Impact Visible." },
      {
        name: "description",
        content:
          "A social impact platform concept: community-led programmes across 12 states, measured outcomes, and an interactive Impact Atlas of change across India.",
      },
      { property: "og:title", content: "Aaroha Foundation — Make Impact Visible." },
      {
        property: "og:description",
        content:
          "Community-led programmes, measured outcomes and an interactive Impact Atlas of change across India.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const [lead, ...rest] = featuredProgrammes;
  const homeStories = stories.slice(0, 3);

  return (
    <>
      <HomeHero />
      <ImpactStrip />
      <ChallengeGrid />
      <ApproachSteps />
      <ImpactAtlas />

      <section aria-labelledby="programmes" className="border-b border-border bg-background">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            eyebrow="Featured programmes"
            title="Where we turn intention into action."
            description="Five flagship programmes, each with a named problem, a defined approach and a published indicator."
            action={
              <ActionLink to="/our-work" variant="outline">
                All programmes
              </ActionLink>
            }
          />
          <div className="mt-14 space-y-6">
            {lead ? <ProgrammeCard programme={lead} layout="feature" /> : null}
            <div className="grid gap-6 md:grid-cols-2">
              {rest.map((programme, index) => (
                <ProgrammeCard key={programme.slug} programme={programme} delay={index * 80} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="stories" className="border-b border-border bg-secondary/45">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            eyebrow="Stories of change"
            title="One story. One turning point."
            description="Demo stories written for this prototype. Composite accounts, no real individual is identified."
            action={
              <ActionLink to="/stories" variant="outline">
                All stories
              </ActionLink>
            }
          />
          <div className="mt-14 space-y-6">
            {homeStories[0] ? <StoryCard story={homeStories[0]} layout="wide" /> : null}
            <div className="grid gap-6 md:grid-cols-2">
              {homeStories.slice(1).map((story, index) => (
                <StoryCard key={story.slug} story={story} delay={index * 90} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <JourneyTimeline />
      <ImpactDashboard />
      <TransparencySection />
      <PathwayGrid />
      <FinalCta />
    </>
  );
}
