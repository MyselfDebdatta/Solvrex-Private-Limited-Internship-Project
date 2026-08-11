import type { Programme } from "@/types";

import udaan from "@/assets/programme-udaan.jpg";
import arogya from "@/assets/programme-arogya.jpg";
import jeevika from "@/assets/programme-jeevika.jpg";
import dharti from "@/assets/programme-dharti.jpg";
import sahaay from "@/assets/programme-sahaay.jpg";

/** Prototype programme data. Values are illustrative. */
export const programmes: Programme[] = [
  {
    slug: "project-udaan",
    name: "Project Udaan",
    cause: "education",
    categoryLabel: "Education & Youth",
    tagline: "Learning that continues after the school bell.",
    summary:
      "Community learning centres and transition support for students in the years where drop-out risk is highest.",
    problem:
      "Enrolment in the districts we work in is close to universal, but a large share of students in classes 8 to 12 fall behind grade-level reading and mathematics. When results slip, families withdraw support first from girls, and the drop between class 10 and college is where most futures narrow.",
    approach: [
      "Run evening learning centres staffed by trained local facilitators, sited within walking distance of the households they serve.",
      "Assess every learner twice a year on grade-level reading and numeracy, and group teaching by level rather than by age.",
      "Accompany class 12 students through college applications, scholarship paperwork and hostel decisions.",
      "Hold a monthly parents' circle so families see progress data for their own child.",
    ],
    geography: ["Odisha", "Bihar", "Uttar Pradesh", "Jharkhand"],
    states: ["odisha", "bihar", "uttar-pradesh", "jharkhand"],
    beneficiaries: "Students aged 11–19 and their families",
    progress: 72,
    headlineMetric: { label: "Learners enrolled", value: "38,400" },
    metrics: [
      { label: "Learning centres", value: "246" },
      { label: "Local facilitators", value: "512" },
      { label: "Reached grade level in 2 years", value: "68%" },
      { label: "Transitioned to college or skilling", value: "4,100" },
    ],
    image: udaan,
    imageAlt: "Two young women studying together with notebooks at a community learning centre",
    startedYear: 2016,
    featured: true,
  },
  {
    slug: "project-arogya",
    name: "Project Arogya",
    cause: "healthcare",
    categoryLabel: "Community Healthcare",
    tagline: "Care that reaches the last kilometre.",
    summary:
      "A frontline health worker network for screening, maternal follow-up and referral navigation in remote habitations.",
    problem:
      "Primary health infrastructure exists on paper but the last kilometre is missing. Households travel 20 to 40 kilometres for a diagnosis, and the follow-up visit that would make treatment effective rarely happens.",
    approach: [
      "Train and equip community health workers selected by the habitations they serve.",
      "Run monthly screening rounds for anaemia, hypertension, diabetes and child growth.",
      "Track every high-risk pregnancy from registration through six weeks post-delivery.",
      "Navigate referrals end to end, including transport, appointment and paperwork.",
    ],
    geography: ["Madhya Pradesh", "Rajasthan", "Assam", "Maharashtra"],
    states: ["madhya-pradesh", "rajasthan", "assam", "maharashtra"],
    beneficiaries: "Households in habitations more than 10 km from a health centre",
    progress: 64,
    headlineMetric: { label: "Screenings completed", value: "182,000" },
    metrics: [
      { label: "Health workers active", value: "740" },
      { label: "High-risk pregnancies tracked", value: "9,800" },
      { label: "Referrals completed", value: "21,300" },
      { label: "Habitations covered", value: "1,120" },
    ],
    image: arogya,
    imageAlt: "A community health worker attending to a mother and infant in a field clinic",
    startedYear: 2015,
    featured: true,
  },
  {
    slug: "project-jeevika",
    name: "Project Jeevika",
    cause: "livelihood",
    categoryLabel: "Livelihood & Economic Opportunity",
    tagline: "From daily wage to dependable income.",
    summary:
      "Producer collectives, working capital literacy and formal market linkage for women-led rural enterprise.",
    problem:
      "Skills training alone does not change income. Without aggregation, working capital and a buyer who pays on time, a trained artisan still sells at distress prices to whoever arrives first.",
    approach: [
      "Organise producers into collectives of 20 to 40 members with elected office bearers.",
      "Build costing, pricing and digital payment capability inside the collective.",
      "Negotiate supply agreements with formal buyers and institutional procurement.",
      "Mentor each collective for 24 months, then step back to an advisory role.",
    ],
    geography: ["Gujarat", "Rajasthan", "West Bengal", "Karnataka"],
    states: ["gujarat", "rajasthan", "west-bengal", "karnataka"],
    beneficiaries: "Women producers, artisans and smallholder farmers",
    progress: 58,
    headlineMetric: { label: "Median income increase", value: "+41%" },
    metrics: [
      { label: "Collectives active", value: "184" },
      { label: "Members", value: "6,240" },
      { label: "Buyer agreements", value: "37" },
      { label: "Collectives operating independently", value: "58" },
    ],
    image: jeevika,
    imageAlt: "Two women artisans at work in a textile workshop lit by a window",
    startedYear: 2017,
    featured: true,
  },
  {
    slug: "project-dharti",
    name: "Project Dharti",
    cause: "environment",
    categoryLabel: "Environment & Sustainability",
    tagline: "Restoring the commons that hold a village together.",
    summary:
      "Watershed restoration, native plantation and climate-resilient farming practice, planned village by village.",
    problem:
      "Water tables in our catchment districts have dropped faster than cropping patterns have adapted. Degraded commons remove the fallback that the poorest households depend on during a bad season.",
    approach: [
      "Map every catchment with the village committee before any structure is built.",
      "Restore check dams, farm ponds and recharge trenches using local labour.",
      "Plant native species with a three-year survival commitment, not a one-day drive.",
      "Demonstrate low-water cropping on farmer-owned plots rather than model farms.",
    ],
    geography: ["Maharashtra", "Karnataka", "Madhya Pradesh"],
    states: ["maharashtra", "karnataka", "madhya-pradesh"],
    beneficiaries: "Farming households and village commons committees",
    progress: 46,
    headlineMetric: { label: "Hectares under restoration", value: "3,850" },
    metrics: [
      { label: "Water structures built", value: "412" },
      { label: "Native saplings surviving year 3", value: "79%" },
      { label: "Villages with a commons plan", value: "96" },
      { label: "Farmers on low-water cropping", value: "2,700" },
    ],
    image: dharti,
    imageAlt: "Villagers planting saplings on a restored green hillside",
    startedYear: 2019,
    featured: true,
  },
  {
    slug: "project-sahaay",
    name: "Project Sahaay",
    cause: "emergency",
    categoryLabel: "Emergency Response",
    tagline: "Ready before the alert, present after the cameras leave.",
    summary:
      "Pre-positioned relief capacity, trained volunteer cohorts and recovery accompaniment after the emergency phase.",
    problem:
      "Relief usually arrives, but late and unevenly, and it stops long before recovery is finished. The households hardest to reach in week one are the same ones still uncounted in month six.",
    approach: [
      "Pre-position family relief kits in flood- and cyclone-prone districts before the season.",
      "Maintain trained volunteer cohorts who can mobilise within 24 hours.",
      "Run rapid damage assessment with the local administration, not in parallel to it.",
      "Stay through the recovery phase: documents, livelihoods, school re-entry.",
    ],
    geography: ["Odisha", "Assam", "Bihar", "West Bengal"],
    states: ["odisha", "assam", "bihar", "west-bengal"],
    beneficiaries: "Households affected by flood, cyclone and heat emergencies",
    progress: 38,
    headlineMetric: { label: "Median mobilisation time", value: "22 hrs" },
    metrics: [
      { label: "Relief kits pre-positioned", value: "14,000" },
      { label: "Trained volunteers on call", value: "1,900" },
      { label: "Districts with a response plan", value: "23" },
      { label: "Households in recovery support", value: "8,600" },
    ],
    image: sahaay,
    imageAlt: "Volunteers in high-visibility vests organising relief supply kits from a truck",
    startedYear: 2020,
    featured: true,
  },
  {
    slug: "project-saksham",
    name: "Project Saksham",
    cause: "women-youth",
    categoryLabel: "Women & Youth Leadership",
    tagline: "The people closest to a problem, leading the response.",
    summary:
      "Leadership fellowships, women's collectives and youth councils that shape programme decisions locally.",
    problem:
      "Programmes designed elsewhere fail quietly. Where women and young people hold no formal role in planning, priorities drift away from what the community actually raised.",
    approach: [
      "Run a 12-month fellowship for young leaders nominated by their own communities.",
      "Seat a women's collective representative on every district programme review.",
      "Fund small community-designed projects with a decision made locally.",
      "Publish what each council decided, including what was rejected.",
    ],
    geography: ["Bihar", "Uttar Pradesh", "Tamil Nadu", "Odisha"],
    states: ["bihar", "uttar-pradesh", "tamil-nadu", "odisha"],
    beneficiaries: "Women's collectives and young people aged 18–28",
    progress: 51,
    headlineMetric: { label: "Fellows in the network", value: "620" },
    metrics: [
      { label: "Youth councils active", value: "148" },
      { label: "Women's collectives linked", value: "210" },
      { label: "Community-designed projects funded", value: "96" },
      { label: "Fellows now in local government roles", value: "44" },
    ],
    image: udaan,
    imageAlt: "Young women in a community learning space taking part in a session",
    startedYear: 2018,
    featured: false,
  },
];

export const programmeBySlug = (slug: string) =>
  programmes.find((programme) => programme.slug === slug);

export const featuredProgrammes = programmes.filter((programme) => programme.featured);
