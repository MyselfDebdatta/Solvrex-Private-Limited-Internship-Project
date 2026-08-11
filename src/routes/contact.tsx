import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

import { organisation } from "@/data/site";
import { ActionButton, ActionLink } from "@/components/common/Action";
import { SelectField, TextAreaField, TextField, isEmail, isPhone } from "@/components/forms/Fields";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Talk to the Aaroha Foundation team" },
      {
        name: "description",
        content:
          "Reach the Aaroha Foundation team about programmes, partnerships, volunteering, media or grievances. Office address, email, phone and frequently asked questions.",
      },
      { property: "og:title", content: "Contact — Talk to the Aaroha Foundation team" },
      {
        property: "og:description",
        content: "Office details, contact form and answers to the questions we are asked most.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const reasons = [
  "Programme enquiry",
  "Partnership or CSR",
  "Volunteering",
  "Media and press",
  "Donation support",
  "Grievance or safeguarding",
];

const faqs = [
  {
    question: "Is this a live website?",
    answer:
      "No. This is a frontend prototype built to demonstrate a product vision. Every figure, story and document is illustrative and clearly labelled as such.",
  },
  {
    question: "Can I donate through this site?",
    answer:
      "The donation flow is a visual demo only. No payment gateway is connected and no payment information is collected or transmitted.",
  },
  {
    question: "How is impact measured?",
    answer:
      "Programmes are measured on fixed indicators at baseline, midline and endline by a measurement unit that reports to the board rather than to programme leadership.",
  },
  {
    question: "Where do you work?",
    answer:
      "The prototype data set covers 12 states. The Impact Atlas on the home and impact pages shows programmes, communities and people reached in each.",
  },
  {
    question: "How quickly do you respond?",
    answer:
      "In production, general enquiries are answered within two working days and safeguarding reports are escalated the same day.",
  },
];

type ContactErrors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        description="Whether you want to fund a programme, join a cohort, ask about our methodology or raise a concern — there is a person on the other side of this form."
        actions={
          <>
            <ActionLink to="/get-involved" variant="outline" size="lg">
              See ways to take part
            </ActionLink>
            <ActionLink to="/transparency" variant="ghost" size="lg">
              Read our disclosures
            </ActionLink>
          </>
        }
      />

      <section aria-labelledby="contact-form" className="border-b border-border bg-background">
        <div className="shell grid gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <h2 id="contact-form" className="display-xl text-balance text-primary">
              Send us a message.
            </h2>
            <p className="lede mt-5">
              This prototype form validates in the browser. Nothing is stored or transmitted.
            </p>
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <div className="border border-border bg-secondary/60 p-8">
              <h3 className="display-md text-primary">Head office</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sage" />
                  <span className="text-foreground/85">{organisation.office}</span>
                </li>
                <li className="flex gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sage" />
                  <a
                    href={`mailto:${organisation.email}`}
                    className="link-underline text-foreground"
                  >
                    {organisation.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sage" />
                  <a
                    href={`tel:${organisation.phone.replace(/\s/g, "")}`}
                    className="link-underline text-foreground"
                  >
                    {organisation.phone}
                  </a>
                </li>
              </ul>
              <p className="mt-6 border-t border-border pt-5 text-xs text-muted-foreground">
                Demo contact details for this prototype.
              </p>
            </div>

            <div className="border border-border bg-card p-8">
              <h3 className="display-md text-primary">Follow the work</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {organisation.social.map((channel) => (
                  <li key={channel.label} className="flex items-baseline justify-between gap-4">
                    <span className="text-foreground">{channel.label}</span>
                    <span className="text-muted-foreground">{channel.handle}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Social handles are placeholders in this prototype.
              </p>
            </div>

            <div
              role="img"
              aria-label="Map placeholder showing the approximate location of the Bengaluru office"
              className="relative flex h-56 items-center justify-center overflow-hidden border border-border bg-secondary"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:28px_28px]"
              />
              <div className="relative text-center">
                <span
                  aria-hidden="true"
                  className="mx-auto block size-2.5 rounded-full bg-accent"
                />
                <p className="mt-3 text-sm text-foreground">Indiranagar, Bengaluru</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Interactive map is not embedded in this prototype
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="faqs" className="bg-secondary/45">
        <div className="shell py-16 md:py-24">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we are asked most."
            action={
              <ActionLink to="/transparency" variant="outline">
                Transparency hub
                <ArrowRight aria-hidden="true" className="size-4" />
              </ActionLink>
            }
          />
          <dl className="mt-12 divide-y divide-border border-y border-border">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="py-7">
                <Reveal delay={index * 50}>
                  <dt className="display-md text-primary">{faq.question}</dt>
                  <dd className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </dd>
                </Reveal>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState(reasons[0]!);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next: ContactErrors = {};
    if (name.trim().length < 2) next.name = "Please enter your full name.";
    if (!isEmail(email)) next.email = "Please enter a valid email address.";
    if (phone.trim().length > 0 && !isPhone(phone))
      next.phone = "Please enter a valid phone number, or leave this blank.";
    if (message.trim().length < 20)
      next.message = "Please give us at least 20 characters of context.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  if (sent) {
    return (
      <div role="status" className="mt-10 border border-border bg-secondary/60 p-8">
        <h3 className="display-md text-primary">Message received — in the demo.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thank you, {name.split(" ")[0]}. A message about <strong>{reason.toLowerCase()}</strong>{" "}
          would reach the right desk within two working days in the production platform. Nothing was
          sent from this prototype.
        </p>
        <ActionButton
          variant="outline"
          className="mt-7"
          onClick={() => {
            setSent(false);
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setErrors({});
          }}
        >
          Write another message
        </ActionButton>
      </div>
    );
  }

  return (
    <form
      noValidate
      className="mt-10 grid gap-6 sm:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        if (validate()) setSent(true);
      }}
    >
      <TextField
        id="contact-name"
        label="Full name"
        required
        autoComplete="name"
        value={name}
        onChange={setName}
        error={errors.name}
      />
      <TextField
        id="contact-email"
        label="Email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={setEmail}
        error={errors.email}
      />
      <TextField
        id="contact-phone"
        label="Phone"
        type="tel"
        autoComplete="tel"
        hint="Optional"
        value={phone}
        onChange={setPhone}
        error={errors.phone}
      />
      <SelectField
        id="contact-reason"
        label="Reason for contacting"
        value={reason}
        onChange={setReason}
        options={reasons.map((option) => ({ value: option, label: option }))}
      />
      <div className="sm:col-span-2">
        <TextAreaField
          id="contact-message"
          label="Message"
          required
          rows={6}
          value={message}
          onChange={setMessage}
          error={errors.message}
        />
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <ActionButton type="submit" variant="primary" size="lg">
          Send message
          <ArrowRight aria-hidden="true" className="size-4" />
        </ActionButton>
        <p className="text-xs text-muted-foreground">Demo form · no data leaves your browser</p>
      </div>
    </form>
  );
}
