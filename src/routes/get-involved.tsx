import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, HandHeart, Handshake, Megaphone, Users } from "lucide-react";
import { useState } from "react";

import { organisation } from "@/data/site";
import { ActionLink, ActionButton } from "@/components/common/Action";
import { SelectField, TextAreaField, TextField, isEmail } from "@/components/forms/Fields";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PathwayGrid } from "@/components/impact/Participation";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Give, volunteer, partner | Aaroha Foundation" },
      {
        name: "description",
        content:
          "Six ways to take part in Aaroha Foundation's work: donate, volunteer, partner, CSR programmes, community fundraising and corporate engagement.",
      },
      { property: "og:title", content: "Get Involved — Give, volunteer, partner" },
      {
        property: "og:description",
        content:
          "Social impact is participatory. Choose the pathway that fits your time, skills or organisation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/get-involved" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolvedPage,
});

const detailedPathways = [
  {
    id: "donate",
    icon: HandHeart,
    title: "Donate",
    summary:
      "Fund a specific programme and receive that programme's reporting, not a generic thank-you note.",
    points: [
      "One-time or monthly contributions",
      "Choose the cause your contribution supports",
      "Quarterly programme reporting on outcomes",
    ],
    commitment: "From ₹500",
  },
  {
    id: "volunteer",
    icon: Users,
    title: "Volunteer",
    summary:
      "Field cohorts and remote skilled roles with defined scope, supervision and a real time commitment.",
    points: [
      "Field cohort: 4 weeks on site, twice a year",
      "Remote skilled roles: 4–6 hours a week",
      "Emergency response roster: on call, seasonal",
    ],
    commitment: "4 hours a week and up",
  },
  {
    id: "partner",
    icon: Handshake,
    title: "Partner",
    summary:
      "Co-design a programme with shared measurement, defined roles and a published partnership scope.",
    points: [
      "Government and district administration linkage",
      "Technical partnerships on measurement and delivery",
      "Civil society co-delivery in new geographies",
    ],
    commitment: "12 months and up",
  },
  {
    id: "csr",
    icon: Building2,
    title: "CSR",
    summary:
      "Structured corporate social responsibility engagements with programme-level utilisation reporting.",
    points: [
      "Programme-linked CSR allocation",
      "Utilisation and outcome reporting each quarter",
      "Site visits and independent verification welcome",
    ],
    commitment: "Annual commitment",
  },
  {
    id: "fundraise",
    icon: Megaphone,
    title: "Fundraise",
    summary:
      "Run a campaign inside your community, campus or workplace using our story and data toolkits.",
    points: [
      "Campaign toolkits with verified copy and assets",
      "Campus and workplace chapters",
      "Birthday, marathon and milestone campaigns",
    ],
    commitment: "One campaign",
  },
  {
    id: "corporate",
    icon: Handshake,
    title: "Corporate engagement",
    summary:
      "Employee engagement designed around real programme needs rather than one-day photo opportunities.",
    points: [
      "Skills-based employee volunteering",
      "Payroll giving with matching",
      "Leadership immersion in field districts",
    ],
    commitment: "Team or company-wide",
  },
];

const volunteerRoles = [
  { role: "Learning facilitator", location: "Odisha · Bihar", mode: "On site", time: "4 weeks" },
  {
    role: "Data and measurement analyst",
    location: "Remote",
    mode: "Remote",
    time: "6 hrs / week",
  },
  { role: "Health camp coordinator", location: "Madhya Pradesh", mode: "On site", time: "2 weeks" },
  { role: "Content and translation", location: "Remote", mode: "Remote", time: "4 hrs / week" },
  {
    role: "Emergency response volunteer",
    location: "Assam · Odisha",
    mode: "On call",
    time: "Seasonal",
  },
  {
    role: "Livelihood market mentor",
    location: "Maharashtra",
    mode: "Hybrid",
    time: "5 hrs / week",
  },
];

function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Impact is participatory, not transactional."
        description="Giving matters. So does time, expertise, reach and collaboration. Choose the pathway that matches what you actually have to offer."
        actions={
          <>
            <ActionLink to="/donate" variant="primary" size="lg">
              Open donation demo
            </ActionLink>
            <ActionLink to="/contact" variant="outline" size="lg">
              Talk to the team
            </ActionLink>
          </>
        }
      />

      <section aria-labelledby="pathway-detail" className="bg-background">
        <div className="shell py-16 md:py-24">
          <SectionHeading
            eyebrow="Pathways"
            title="Six ways to take part."
            description="Each pathway states what it involves and the commitment it asks for, so you can decide before you enquire."
          />
          <ul className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {detailedPathways.map((pathway, index) => (
              <li key={pathway.id}>
                <Reveal delay={index * 60} className="h-full">
                  <article className="flex h-full flex-col bg-background p-8">
                    <pathway.icon
                      aria-hidden="true"
                      className="size-6 text-accent"
                      strokeWidth={1.25}
                    />
                    <h3 className="display-md mt-7 text-primary">{pathway.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pathway.summary}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2 text-sm text-foreground/85">
                      {pathway.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-sage" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 border-t border-border pt-5 text-xs tracking-[0.12em] uppercase text-muted-foreground">
                      {pathway.commitment}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="volunteer-roles" className="border-y border-border bg-secondary/45">
        <div className="shell py-16 md:py-24">
          <SectionHeading
            eyebrow="Open roles"
            title="Current volunteer openings."
            description="Demo listings for this prototype. In production these come from the volunteering system."
          />
          <div className="mt-12 overflow-x-auto border border-border bg-background">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <caption className="sr-only">
                Volunteer roles, locations, mode and time commitment
              </caption>
              <thead>
                <tr className="border-b border-border text-xs tracking-[0.12em] uppercase text-muted-foreground">
                  <th scope="col" className="px-5 py-4 font-medium">
                    Role
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium">
                    Location
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium">
                    Mode
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium">
                    Commitment
                  </th>
                </tr>
              </thead>
              <tbody>
                {volunteerRoles.map((role) => (
                  <tr key={role.role} className="border-b border-border last:border-0">
                    <th scope="row" className="px-5 py-4 font-medium text-primary">
                      {role.role}
                    </th>
                    <td className="px-5 py-4 text-muted-foreground">{role.location}</td>
                    <td className="px-5 py-4 text-muted-foreground">{role.mode}</td>
                    <td className="px-5 py-4 text-muted-foreground">{role.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Applications are handled by the team over email in this prototype — write to{" "}
            {organisation.email}.
          </p>
        </div>
      </section>

      <InterestForm />

      <PathwayGrid />
    </>
  );
}

const interests = ["Volunteer", "Partner", "CSR", "Fundraise", "Corporate engagement"];

type InterestErrors = Partial<Record<"name" | "email" | "message", string>>;

function InterestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(interests[0]!);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<InterestErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: InterestErrors = {};
    if (name.trim().length < 2) next.name = "Please enter your full name.";
    if (!isEmail(email)) next.email = "Please enter a valid email address.";
    if (message.trim().length < 10)
      next.message = "Tell us a little more — at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  return (
    <section aria-labelledby="interest-form" className="bg-background">
      <div className="shell-narrow py-16 md:py-24">
        <Reveal>
          <p className="eyebrow text-accent">Register interest</p>
          <h2 id="interest-form" className="display-xl mt-4 text-balance text-primary">
            Tell us how you would like to take part.
          </h2>
          <p className="lede mt-5">
            This prototype form validates in the browser and does not send data anywhere.
          </p>
        </Reveal>

        {submitted ? (
          <div role="status" className="mt-10 border border-border bg-secondary/60 p-8">
            <h3 className="display-md text-primary">Thank you, {name.split(" ")[0]}.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              In the production platform your interest in <strong>{interest.toLowerCase()}</strong>{" "}
              would reach the engagement team within one working day. Nothing was submitted in this
              demo.
            </p>
            <ActionButton
              variant="outline"
              className="mt-7"
              onClick={() => {
                setSubmitted(false);
                setName("");
                setEmail("");
                setMessage("");
                setErrors({});
              }}
            >
              Submit another response
            </ActionButton>
          </div>
        ) : (
          <form
            noValidate
            className="mt-10 grid gap-6 sm:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault();
              if (validate()) setSubmitted(true);
            }}
          >
            <TextField
              id="interest-name"
              label="Full name"
              required
              value={name}
              onChange={setName}
              error={errors.name}
            />
            <TextField
              id="interest-email"
              label="Email"
              type="email"
              required
              value={email}
              onChange={setEmail}
              error={errors.email}
            />
            <div className="sm:col-span-2">
              <SelectField
                id="interest-type"
                label="I am interested in"
                value={interest}
                onChange={setInterest}
                options={interests.map((option) => ({ value: option, label: option }))}
              />
            </div>
            <div className="sm:col-span-2">
              <TextAreaField
                id="interest-message"
                label="What would you like to do?"
                required
                value={message}
                onChange={setMessage}
                error={errors.message}
              />
            </div>
            <div className="sm:col-span-2">
              <ActionButton type="submit" variant="primary" size="lg">
                Register interest
                <ArrowRight aria-hidden="true" className="size-4" />
              </ActionButton>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
