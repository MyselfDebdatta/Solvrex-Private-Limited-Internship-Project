import type { Cause, CauseId } from "@/types";

export const causes: Cause[] = [
  {
    id: "education",
    label: "Education",
    icon: "BookOpen",
    summary:
      "Children stay enrolled but learning outcomes stall when schools lack support beyond the classroom.",
    detail:
      "Community learning centres, remedial support and transition help for students moving from school into college or skilling.",
    programmeCount: 5,
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: "HeartPulse",
    summary:
      "Distance, cost and missing follow-up turn treatable conditions into long-term crises.",
    detail:
      "Frontline health workers, screening camps, maternal and child health follow-up, and referral navigation.",
    programmeCount: 4,
  },
  {
    id: "livelihood",
    label: "Livelihood",
    icon: "Sprout",
    summary:
      "Skills without market access, and market access without capital, both stop short of stable income.",
    detail:
      "Producer collectives, enterprise mentoring, digital payments literacy and links to formal buyers.",
    programmeCount: 3,
  },
  {
    id: "women-youth",
    label: "Women & Youth",
    icon: "Users",
    summary: "Decisions about a community are often made without the people who carry its future.",
    detail:
      "Women's collectives, youth councils, leadership fellowships and safe spaces for participation.",
    programmeCount: 3,
  },
  {
    id: "environment",
    label: "Environment",
    icon: "Leaf",
    summary:
      "Water stress and degraded commons hit the same households that have the least room to absorb it.",
    detail:
      "Watershed restoration, native plantation, waste systems and climate-resilient farming practice.",
    programmeCount: 2,
  },
  {
    id: "emergency",
    label: "Emergency Response",
    icon: "LifeBuoy",
    summary:
      "The gap between a disaster and coordinated relief is where the most damage compounds.",
    detail:
      "Pre-positioned relief kits, volunteer mobilisation, damage assessment and recovery accompaniment.",
    programmeCount: 1,
  },
];

export const causeMap: Record<CauseId, Cause> = causes.reduce(
  (acc, cause) => ({ ...acc, [cause.id]: cause }),
  {} as Record<CauseId, Cause>,
);

export const causeFilters: { id: CauseId | "all"; label: string }[] = [
  { id: "all", label: "All" },
  ...causes.map((cause) => ({ id: cause.id, label: cause.label })),
];
