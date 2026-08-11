import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Heart, ShieldAlert } from "lucide-react";
import { useMemo, useState } from "react";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { causes } from "@/data/causes";
import { programmes } from "@/data/programmes";
import { formatRupees } from "@/lib/format";
import { ActionButton, ActionLink } from "@/components/common/Action";
import { TextField, TextAreaField, isEmail, isPhone } from "@/components/forms/Fields";
import { Reveal } from "@/components/common/Reveal";

const searchSchema = z.object({
  cause: z.string().optional(),
});

export const Route = createFileRoute("/donate")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Donation Demo — Support a programme | Aaroha Foundation" },
      {
        name: "description",
        content:
          "A frontend donation demo for the Aaroha Foundation prototype. Choose a cause, an amount and review a demo confirmation. No payment gateway is connected.",
      },
      { property: "og:title", content: "Donation Demo — Support a programme" },
      {
        property: "og:description",
        content:
          "Prototype donation flow. No real payment information is collected or transmitted.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/donate" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: DonatePage,
});

const amounts = [500, 1000, 2500, 5000];

const steps = ["Cause", "Amount", "Your details", "Review", "Confirmation"] as const;

type DonorErrors = Partial<Record<"name" | "email" | "phone", string>>;

const impactLine = (amount: number, causeLabel: string) => {
  if (amount >= 5000)
    return `Funds a full learning cycle for a small group in ${causeLabel.toLowerCase()}.`;
  if (amount >= 2500) return `Covers a month of frontline delivery in ${causeLabel.toLowerCase()}.`;
  if (amount >= 1000) return `Supports materials and follow-up for several households.`;
  return `Contributes to running costs of a single community session.`;
};

function DonatePage() {
  const { cause: causeParam } = Route.useSearch();
  const navigate = Route.useNavigate();

  const [step, setStep] = useState(0);
  const [cause, setCause] = useState<string>(
    causes.some((item) => item.id === causeParam) ? (causeParam as string) : causes[0]!.id,
  );
  const [amount, setAmount] = useState<number>(1000);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<DonorErrors>({});

  const selectedCause = causes.find((item) => item.id === cause) ?? causes[0]!;
  const linkedProgramme = useMemo(
    () => programmes.find((programme) => programme.cause === selectedCause.id),
    [selectedCause.id],
  );

  const finalAmount = custom.trim().length > 0 ? Number(custom) || 0 : amount;
  const amountValid = finalAmount >= 100;

  const validateDonor = () => {
    const next: DonorErrors = {};
    if (name.trim().length < 2) next.name = "Please enter your full name.";
    if (!isEmail(email)) next.email = "Please enter a valid email address.";
    if (phone.trim().length > 0 && !isPhone(phone))
      next.phone = "Please enter a valid phone number, or leave this blank.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (step === 2 && !validateDonor()) return;
    if (step === 1 && !amountValid) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const reset = () => {
    setStep(0);
    setAmount(1000);
    setCustom("");
    setRecurring(false);
    setName("");
    setEmail("");
    setPhone("");
    setNote("");
    setErrors({});
  };

  return (
    <div className="bg-secondary/45">
      <div className="shell-narrow pt-28 pb-20 md:pt-36 md:pb-28">
        <Reveal>
          <p className="inline-flex items-center gap-2 border border-accent/40 bg-accent/8 px-3 py-1.5 text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-accent">
            <ShieldAlert aria-hidden="true" className="size-3.5" />
            Donation demo
          </p>
          <h1 className="display-hero mt-6 text-balance text-primary">
            Support a programme, not a general fund.
          </h1>
          <p className="lede mt-5">
            This is a visual demonstration of a donation experience. No payment gateway is
            connected, and no card, bank or payment information is collected or transmitted at any
            step.
          </p>
        </Reveal>

        <ol
          aria-label="Donation steps"
          className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-y border-border py-4 text-xs tracking-[0.12em] uppercase"
        >
          {steps.map((label, index) => (
            <li
              key={label}
              aria-current={index === step ? "step" : undefined}
              className={cn(
                "flex items-center gap-2",
                index === step
                  ? "text-primary"
                  : index < step
                    ? "text-sage"
                    : "text-muted-foreground/70",
              )}
            >
              {index < step ? (
                <Check aria-hidden="true" className="size-3.5" />
              ) : (
                <span className="tabular">{String(index + 1).padStart(2, "0")}</span>
              )}
              {label}
            </li>
          ))}
        </ol>

        <div className="mt-10 border border-border bg-background p-7 md:p-10">
          {step === 0 ? (
            <fieldset>
              <legend className="display-lg text-primary">Choose a cause</legend>
              <p className="mt-3 text-sm text-muted-foreground">
                Your contribution is directed to programmes under the cause you select.
              </p>
              <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
                {causes.map((item) => (
                  <label
                    key={item.id}
                    className={cn(
                      "flex cursor-pointer flex-col bg-background p-6 transition-colors",
                      cause === item.id ? "bg-secondary/70" : "hover:bg-secondary/40",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="cause"
                        value={item.id}
                        checked={cause === item.id}
                        onChange={() => {
                          setCause(item.id);
                          void navigate({ search: { cause: item.id }, resetScroll: false });
                        }}
                        className="size-4 accent-[var(--color-accent)]"
                      />
                      <span className="font-medium text-primary">{item.label}</span>
                    </span>
                    <span className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          ) : null}

          {step === 1 ? (
            <fieldset>
              <legend className="display-lg text-primary">Choose an amount</legend>
              <p className="mt-3 text-sm text-muted-foreground">
                Supporting <span className="text-foreground">{selectedCause.label}</span>
                {linkedProgramme ? ` · ${linkedProgramme.name}` : ""}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {amounts.map((value) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={custom.trim() === "" && amount === value}
                    onClick={() => {
                      setAmount(value);
                      setCustom("");
                    }}
                    className={cn(
                      "min-h-14 border text-sm tabular transition-colors",
                      custom.trim() === "" && amount === value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border-strong text-foreground hover:border-primary",
                    )}
                  >
                    {formatRupees(value)}
                  </button>
                ))}
              </div>

              <div className="mt-6 max-w-xs">
                <TextField
                  id="custom-amount"
                  label="Custom amount (₹)"
                  type="number"
                  value={custom}
                  onChange={setCustom}
                  hint="Minimum ₹100"
                  error={
                    custom.trim().length > 0 && !amountValid
                      ? "Please enter an amount of ₹100 or more."
                      : undefined
                  }
                />
              </div>

              <label className="mt-8 flex items-start gap-3 border border-border bg-secondary/50 p-5">
                <input
                  type="checkbox"
                  checked={recurring}
                  onChange={(event) => setRecurring(event.target.checked)}
                  className="mt-0.5 size-4 accent-[var(--color-accent)]"
                />
                <span>
                  <span className="text-sm font-medium text-foreground">Make this monthly</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    Recurring support lets programmes plan a full cycle instead of a single quarter.
                  </span>
                </span>
              </label>

              {amountValid ? (
                <p className="mt-6 flex items-start gap-3 border-l-2 border-accent pl-4 text-sm text-muted-foreground">
                  <Heart aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                  {impactLine(finalAmount, selectedCause.label)} Illustrative example, not a
                  guaranteed allocation.
                </p>
              ) : null}
            </fieldset>
          ) : null}

          {step === 2 ? (
            <fieldset>
              <legend className="display-lg text-primary">Your details</legend>
              <p className="mt-3 text-sm text-muted-foreground">
                Used only to display your demo confirmation. Nothing is stored or transmitted.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <TextField
                  id="donor-name"
                  label="Full name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={setName}
                  error={errors.name}
                />
                <TextField
                  id="donor-email"
                  label="Email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={setEmail}
                  error={errors.email}
                />
                <TextField
                  id="donor-phone"
                  label="Phone"
                  type="tel"
                  hint="Optional"
                  autoComplete="tel"
                  value={phone}
                  onChange={setPhone}
                  error={errors.phone}
                />
                <div className="sm:col-span-2">
                  <TextAreaField
                    id="donor-note"
                    label="Note to the team"
                    hint="Optional"
                    rows={4}
                    value={note}
                    onChange={setNote}
                  />
                </div>
              </div>
              <p className="mt-6 border border-border bg-secondary/60 p-5 text-sm text-muted-foreground">
                No payment step follows. This demo never asks for card, UPI or bank details.
              </p>
            </fieldset>
          ) : null}

          {step === 3 ? (
            <div>
              <h2 className="display-lg text-primary">Review</h2>
              <dl className="mt-8 divide-y divide-border border-y border-border text-sm">
                {[
                  { label: "Cause", value: selectedCause.label },
                  { label: "Programme", value: linkedProgramme?.name ?? "Allocated by the team" },
                  { label: "Amount", value: formatRupees(finalAmount) },
                  { label: "Frequency", value: recurring ? "Monthly" : "One-time" },
                  { label: "Name", value: name },
                  { label: "Email", value: email },
                  ...(phone.trim() ? [{ label: "Phone", value: phone }] : []),
                  ...(note.trim() ? [{ label: "Note", value: note }] : []),
                ].map((row) => (
                  <div key={row.label} className="flex flex-wrap gap-x-6 gap-y-1 py-4">
                    <dt className="w-32 shrink-0 text-muted-foreground">{row.label}</dt>
                    <dd className="flex-1 text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm text-muted-foreground">
                Confirming completes the demo. No transaction takes place.
              </p>
            </div>
          ) : null}

          {step === 4 ? (
            <div role="status" className="text-center">
              <span
                aria-hidden="true"
                className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/12 text-accent"
              >
                <Check className="size-6" />
              </span>
              <h2 className="display-xl mt-8 text-balance text-primary">
                Thank you, {name.split(" ")[0] || "friend"}.
              </h2>
              <p className="lede mx-auto mt-5 max-w-xl">
                In the production platform, {formatRupees(finalAmount)}{" "}
                {recurring ? "each month " : ""}
                would be directed to {selectedCause.label.toLowerCase()} programmes
                {linkedProgramme ? `, starting with ${linkedProgramme.name}` : ""}.
              </p>

              <ul className="mt-10 grid gap-px border border-border bg-border text-left sm:grid-cols-3">
                {[
                  { label: "Contribution", value: formatRupees(finalAmount) },
                  { label: "Frequency", value: recurring ? "Monthly" : "One-time" },
                  { label: "Directed to", value: selectedCause.label },
                ].map((item) => (
                  <li key={item.label} className="bg-background p-6">
                    <p className="text-xs tracking-[0.12em] uppercase text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="display-md tabular mt-2 text-primary">{item.value}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm text-muted-foreground">
                What happens next in production: a receipt by email, a programme welcome note, and
                quarterly reporting on the outcomes your contribution supports.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <ActionLink to="/impact" variant="primary">
                  Explore the impact atlas
                </ActionLink>
                <ActionLink to="/stories" variant="outline">
                  Read stories of change
                </ActionLink>
                <ActionButton variant="quiet" onClick={reset}>
                  Restart the demo
                </ActionButton>
              </div>
            </div>
          ) : null}

          {step < 4 ? (
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-7">
              <ActionButton
                variant="quiet"
                onClick={() => setStep((current) => Math.max(current - 1, 0))}
                disabled={step === 0}
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                Back
              </ActionButton>
              <ActionButton
                variant="primary"
                size="lg"
                onClick={goNext}
                disabled={step === 1 && !amountValid}
              >
                {step === 3 ? "Confirm demo donation" : "Continue"}
                <ArrowRight aria-hidden="true" className="size-4" />
              </ActionButton>
            </div>
          ) : null}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Donation demo · Aaroha Foundation is a prototype identity. This flow exists to demonstrate
          the experience only and does not accept contributions.
        </p>
      </div>
    </div>
  );
}
