import type {
  ApproachStep,
  HeadlineStat,
  JourneyStep,
  MetricBreakdown,
  Pathway,
  TimelineEntry,
} from "@/types";

/** Prototype values. Replace with verified organisational data. */
export const headlineStats: HeadlineStat[] = [
  { id: "communities", value: 25, suffix: "+", label: "Communities reached" },
  { id: "programmes", value: 18, label: "Active programmes" },
  { id: "states", value: 12, label: "States" },
  { id: "lives", value: 1.2, suffix: "M+", label: "Lives reached" },
];

export const dashboardStats: HeadlineStat[] = [
  { id: "lives", value: 1.2, suffix: "M+", label: "Lives reached", note: "Cumulative since 2014" },
  {
    id: "communities",
    value: 25,
    suffix: "+",
    label: "Communities",
    note: "Village and ward clusters",
  },
  { id: "programmes", value: 18, label: "Programmes", note: "Across six causes" },
  { id: "states", value: 12, label: "States", note: "And 2 union territories" },
  {
    id: "volunteer-hours",
    value: 96,
    suffix: "K",
    label: "Volunteer hours",
    note: "Logged in the last 12 months",
  },
  {
    id: "partners",
    value: 42,
    label: "Partner organisations",
    note: "Government, CSR and civil society",
  },
];

export const impactByCause: MetricBreakdown[] = [
  { label: "Education", value: 412000, share: 34 },
  { label: "Healthcare", value: 336000, share: 28 },
  { label: "Livelihood", value: 192000, share: 16 },
  { label: "Women & Youth", value: 132000, share: 11 },
  { label: "Environment", value: 84000, share: 7 },
  { label: "Emergency Response", value: 48000, share: 4 },
];

export const impactByGeography: MetricBreakdown[] = [
  { label: "Odisha", value: 196000, share: 100 },
  { label: "Bihar", value: 174000, share: 89 },
  { label: "Uttar Pradesh", value: 168000, share: 86 },
  { label: "Madhya Pradesh", value: 142000, share: 72 },
  { label: "Maharashtra", value: 118000, share: 60 },
  { label: "Rajasthan", value: 96000, share: 49 },
  { label: "West Bengal", value: 88000, share: 45 },
  { label: "Karnataka", value: 74000, share: 38 },
];

export const spendAllocation: MetricBreakdown[] = [
  { label: "Programme delivery", value: 82, share: 82 },
  { label: "Monitoring & evaluation", value: 7, share: 7 },
  { label: "Fundraising & communication", value: 6, share: 6 },
  { label: "Administration", value: 5, share: 5 },
];

export const approachSteps: ApproachStep[] = [
  {
    number: "01",
    title: "Listen",
    description: "Understand communities and their real needs.",
    detail:
      "Every engagement begins with structured listening rounds in the habitation, not a proposal written elsewhere.",
  },
  {
    number: "02",
    title: "Design",
    description: "Build locally relevant solutions.",
    detail:
      "Programme design is done with a local committee, and the constraints they name become design constraints.",
  },
  {
    number: "03",
    title: "Act",
    description: "Work alongside communities and partners.",
    detail:
      "Delivery is led by people from the community, supported by district partners and the public system.",
  },
  {
    number: "04",
    title: "Measure",
    description: "Track outcomes and learn from evidence.",
    detail:
      "We publish the indicator that matters, including when it moves in the wrong direction.",
  },
  {
    number: "05",
    title: "Scale",
    description: "Expand approaches that demonstrate meaningful results.",
    detail: "Only approaches with two consecutive cycles of evidence are taken to a new district.",
  },
];

export const journeySteps: JourneyStep[] = [
  {
    id: "identify",
    title: "A challenge is identified",
    description: "Field teams and partners flag a pattern that data or households keep repeating.",
    actor: "Field team",
  },
  {
    id: "voices",
    title: "Community voices are heard",
    description:
      "Listening rounds test whether the pattern matches what people actually prioritise.",
    actor: "Community",
  },
  {
    id: "design",
    title: "A programme is designed",
    description:
      "A local committee co-designs the response, its indicators and its exit condition.",
    actor: "Community + programme team",
  },
  {
    id: "partners",
    title: "Partners join",
    description:
      "Government departments, CSR funders and civil society partners commit to defined roles.",
    actor: "Partners",
  },
  {
    id: "action",
    title: "Action happens on ground",
    description: "Delivery is led by people from the community, with monthly operational review.",
    actor: "Local delivery team",
  },
  {
    id: "measure",
    title: "Results are measured",
    description: "Baseline, midline and endline against the indicator the community agreed to.",
    actor: "Measurement unit",
  },
  {
    id: "scale",
    title: "What works gets scaled",
    description:
      "Two cycles of evidence before a model moves to a new district. Otherwise it is redesigned.",
    actor: "Programme leadership",
  },
];

export const pathways: Pathway[] = [
  {
    id: "give",
    title: "Give",
    kicker: "Support a programme",
    description:
      "Direct your contribution to a specific programme and see how that programme reports its results.",
    bullets: ["Choose a cause", "One-time or monthly", "Programme-level reporting"],
    icon: "HandHeart",
    ctaLabel: "Open donation demo",
    to: "/donate",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    kicker: "Give your time and skills",
    description:
      "Field cohorts, remote skilled support and emergency response rosters, with defined time commitments.",
    bullets: ["Field and remote roles", "Skills-based matching", "Emergency response roster"],
    icon: "Users",
    ctaLabel: "See volunteer roles",
    to: "/get-involved",
  },
  {
    id: "partner",
    title: "Partner",
    kicker: "Collaborate with us",
    description:
      "Co-design programmes with defined roles, shared measurement and a published partnership scope.",
    bullets: ["CSR programmes", "Government collaboration", "Technical partnerships"],
    icon: "Handshake",
    ctaLabel: "Explore partnership",
    to: "/get-involved",
  },
  {
    id: "amplify",
    title: "Amplify",
    kicker: "Share stories and causes",
    description:
      "Carry a story to an audience that has not heard it, or fundraise within your own community.",
    bullets: ["Community fundraising", "Story toolkits", "Campus and workplace chapters"],
    icon: "Megaphone",
    ctaLabel: "Start amplifying",
    to: "/get-involved",
  },
];

export const organisationTimeline: TimelineEntry[] = [
  {
    year: "2014",
    title: "Aaroha begins in one district",
    description:
      "Founded around a single question asked in Kalahandi: why do results improve while futures do not?",
  },
  {
    year: "2016",
    title: "Project Udaan formalises the learning model",
    description:
      "Evening learning centres move from three villages to 40, grouped by learning level.",
  },
  {
    year: "2018",
    title: "Measurement unit established",
    description:
      "An independent internal unit takes ownership of baselines, midlines and published results.",
  },
  {
    year: "2020",
    title: "Emergency response capability built",
    description:
      "Pre-positioned relief and trained volunteer cohorts formalised as Project Sahaay.",
  },
  {
    year: "2023",
    title: "Impact Atlas prototype",
    description:
      "Programme data consolidated into a single geographic view for internal decision-making.",
  },
  {
    year: "2026",
    title: "Twelve states, eighteen programmes",
    description:
      "Focus shifts from expansion to depth: fewer new districts, deeper evidence in existing ones.",
  },
];

export const values = [
  {
    title: "Dignity first",
    description:
      "We do not use hardship as a fundraising device. People appear in our work as participants, not subjects.",
  },
  {
    title: "Evidence over anecdote",
    description:
      "A story explains a number. It does not replace one. Both get published, including inconvenient results.",
  },
  {
    title: "Local leadership",
    description:
      "Programmes are delivered by people from the communities they serve, with real decision authority.",
  },
  {
    title: "Transparency by default",
    description:
      "Financials, methodology and governance are published because trust cannot be asserted.",
  },
];

export const leadership = [
  {
    name: "Meera Krishnan",
    role: "Executive Director",
    focus: "Programme strategy and partnerships",
  },
  {
    name: "Arun Bhattacharya",
    role: "Director, Programmes",
    focus: "Education and livelihood portfolios",
  },
  { name: "Dr. Nafisa Qureshi", role: "Director, Health", focus: "Community health systems" },
  {
    name: "Vikram Rao",
    role: "Head of Measurement",
    focus: "Evaluation design and data governance",
  },
  {
    name: "Lalita Munda",
    role: "Head of Community Practice",
    focus: "Participation and local governance",
  },
  { name: "Sandeep Iyer", role: "Head of Finance", focus: "Financial controls and compliance" },
];
