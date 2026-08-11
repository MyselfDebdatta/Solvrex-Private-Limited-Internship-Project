/**
 * Domain types for the Aaroha Foundation prototype.
 *
 * Every data module in `src/data` implements these interfaces, so each module
 * can later be swapped for an API response without touching the UI layer.
 */

export type CauseId =
  "education" | "healthcare" | "livelihood" | "women-youth" | "environment" | "emergency";

export interface Cause {
  id: CauseId;
  label: string;
  /** Icon name from lucide-react, resolved in `src/lib/icons.ts`. */
  icon: string;
  summary: string;
  detail: string;
  programmeCount: number;
}

export interface ProgrammeMetric {
  label: string;
  value: string;
}

export interface Programme {
  slug: string;
  name: string;
  cause: CauseId;
  categoryLabel: string;
  tagline: string;
  summary: string;
  problem: string;
  approach: string[];
  geography: string[];
  states: string[];
  beneficiaries: string;
  /** 0–100, share of the current programme cycle completed. */
  progress: number;
  headlineMetric: ProgrammeMetric;
  metrics: ProgrammeMetric[];
  image: string;
  imageAlt: string;
  startedYear: number;
  featured: boolean;
}

export interface Story {
  slug: string;
  title: string;
  person: string;
  location: string;
  cause: CauseId;
  categoryLabel: string;
  date: string;
  readingMinutes: number;
  excerpt: string;
  before: string;
  intervention: string;
  today: string;
  quote: string;
  quoteAttribution: string;
  body: string[];
  programmeSlug: string;
  image: string;
  imageAlt: string;
  featured: boolean;
}

export interface HeadlineStat {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  note?: string;
}

export interface MetricBreakdown {
  label: string;
  value: number;
  /** Percentage of the total, 0–100. */
  share: number;
}

export interface StateImpact {
  id: string;
  name: string;
  region: string;
  /** Position on the stylised atlas grid, in the 0–500 / 0–560 viewBox. */
  x: number;
  y: number;
  causes: CauseId[];
  programmes: number;
  communities: number;
  peopleReached: number;
  featuredProgrammeSlug: string;
  description: string;
}

export type ReportKind = "annual" | "financial" | "impact" | "governance" | "policy" | "compliance";

export interface ReportDocument {
  id: string;
  title: string;
  kind: ReportKind;
  kindLabel: string;
  year: string;
  description: string;
  pages: number;
  /** Prototype documents are not downloadable; the UI states this plainly. */
  available: false;
}

export interface Partner {
  name: string;
  type: string;
  since: number;
  contribution: string;
}

export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  actor: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface Pathway {
  id: string;
  title: string;
  kicker: string;
  description: string;
  bullets: string[];
  icon: string;
  ctaLabel: string;
  to: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}
