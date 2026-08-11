import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

import { footerNav, organisation } from "@/data/site";
import { ActionButton } from "@/components/common/Action";
import { Logo } from "@/components/navigation/Logo";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  const onSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("done");
    setEmail("");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div className="max-w-sm">
            <Logo tone="inverse" />
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70">
              A prototype identity for a national-scale social impact platform. Programme names,
              statistics and documents shown across this site are illustrative.
            </p>

            <form onSubmit={onSubscribe} className="mt-8" noValidate>
              <label
                htmlFor="newsletter-email"
                className="eyebrow block text-primary-foreground/55"
              >
                Impact briefing, monthly
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  placeholder="you@example.com"
                  aria-invalid={status === "error"}
                  aria-describedby="newsletter-status"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setStatus("idle");
                  }}
                  className="min-h-11 w-full border border-primary-foreground/25 bg-transparent px-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:border-primary-foreground/60"
                />
                <ActionButton type="submit" variant="solidInverse" aria-label="Subscribe">
                  <ArrowRight aria-hidden="true" className="size-4" />
                </ActionButton>
              </div>
              <p
                id="newsletter-status"
                role="status"
                className="mt-2 min-h-5 text-xs text-primary-foreground/65"
              >
                {status === "error"
                  ? "Enter a valid email address."
                  : status === "done"
                    ? "Noted — this prototype does not send email."
                    : "No real subscription is created in this prototype."}
              </p>
            </form>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {footerNav.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <h2 className="eyebrow font-sans text-primary-foreground/55">{group.heading}</h2>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={`${group.heading}-${item.label}`}>
                      <Link
                        to={item.to}
                        className="link-underline text-sm text-primary-foreground/80 hover:text-primary-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h2 className="eyebrow font-sans text-primary-foreground/55">Connect</h2>
              <ul className="mt-5 space-y-3">
                {organisation.social.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      className="link-underline text-sm text-primary-foreground/80 hover:text-primary-foreground"
                    >
                      {channel.label}
                    </a>
                  </li>
                ))}
              </ul>
              <address className="mt-6 space-y-2 text-sm not-italic text-primary-foreground/70">
                <a href={`mailto:${organisation.email}`} className="link-underline block">
                  {organisation.email}
                </a>
                <a
                  href={`tel:${organisation.phone.replace(/\s/g, "")}`}
                  className="link-underline block"
                >
                  {organisation.phone}
                </a>
                <span className="block leading-relaxed">{organisation.office}</span>
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/12">
        <div className="shell flex flex-col gap-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <Check aria-hidden="true" className="size-3.5" />
            Prototype concept · {organisation.name} · Not a live organisation
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/transparency" className="link-underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/transparency" className="link-underline">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/transparency" className="link-underline">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
