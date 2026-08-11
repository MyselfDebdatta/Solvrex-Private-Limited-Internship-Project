import type { Story } from "@/types";

import asha from "@/assets/story-asha.jpg";
import ramesh from "@/assets/story-ramesh.jpg";
import collective from "@/assets/story-collective.jpg";

/**
 * Demo stories. Names and details are fictional composites written for this
 * prototype; no real individual is depicted or described.
 */
export const stories: Story[] = [
  {
    slug: "asha-odisha",
    title: "The year Asha decided she was not finished with school",
    person: "Asha, 19",
    location: "Kalahandi district, Odisha",
    cause: "education",
    categoryLabel: "Education",
    date: "2026-06-14",
    readingMinutes: 4,
    excerpt:
      "She had passed class 10 with no clear next step and a family budget that assumed she would stop there.",
    before: "Limited access to learning opportunities beyond class 10.",
    intervention: "Community learning and skills programme, with college transition support.",
    today: "Building skills and planning for higher education in commerce.",
    quote:
      "Nobody in my family had filled a college form before. Once I understood the steps, it stopped feeling impossible.",
    quoteAttribution: "Asha, learner, Project Udaan",
    body: [
      "Asha passed class 10 in a year when her district recorded its highest board results in a decade. The number told an incomplete story. There was no science stream within reach, the nearest college was a two-hour bus journey, and the household budget had already been drawn on the assumption that she would stop studying.",
      "The learning centre in her panchayat opened in the evenings, after field work. It grouped learners by what they could actually do rather than by which class they were in, which meant Asha spent her first three months on mathematics she had been quietly guessing at for years.",
      "The part that changed the outcome was less visible than the teaching. A facilitator sat with her family twice, showed them her assessment record, and walked through the scholarship paperwork line by line. The form was submitted eleven days before the deadline.",
      "Asha is now in the second year of a commerce degree and facilitates a weekend session at the same centre. She is candid that the plan is not finished: she wants a job that lets her stay in the district, and that market is thin.",
    ],
    programmeSlug: "project-udaan",
    image: asha,
    imageAlt: "A young woman holding notebooks stands outside a village learning centre",
    featured: true,
  },
  {
    slug: "ramesh-madhya-pradesh",
    title: "A health worker's notebook changed how a village counts risk",
    person: "Ramesh, 34",
    location: "Betul district, Madhya Pradesh",
    cause: "healthcare",
    categoryLabel: "Healthcare",
    date: "2026-05-02",
    readingMinutes: 5,
    excerpt:
      "Screening was never the hard part. Making sure someone came back for the second visit was.",
    before: "Diagnoses happened far away, and follow-up visits rarely did.",
    intervention:
      "Community health worker training, monthly screening rounds and referral navigation.",
    today: "Every high-risk household in his cluster has a tracked follow-up date.",
    quote:
      "A screening without a follow-up is just information. The second visit is where treatment actually starts.",
    quoteAttribution: "Ramesh, community health worker, Project Arogya",
    body: [
      "Ramesh's cluster covers nine habitations, the farthest one 14 kilometres from the nearest health centre along a road that dissolves during the monsoon. When he started, screening camps came through roughly twice a year and left behind a stack of referral slips.",
      "What he added was ordinary and decisive: a register, then a tablet, with a named follow-up date for every high-risk result. Hypertension and anaemia cases got a monthly check. Pregnancies got a schedule that ran from registration to six weeks after delivery.",
      "Follow-up completion in his cluster moved from roughly a third of referrals to more than eight in ten over two years. He is quick to point out what the number hides: transport is still the single largest reason a visit is missed.",
      "The programme now treats the follow-up rate, not the screening count, as its primary indicator. That change came from field workers, not from headquarters.",
    ],
    programmeSlug: "project-arogya",
    image: ramesh,
    imageAlt: "A community health volunteer standing on a village path at sunrise",
    featured: false,
  },
  {
    slug: "sujata-collective-gujarat",
    title: "Twenty-eight women, one ledger, and a price they set themselves",
    person: "Sujata and the Meghdoot collective",
    location: "Kutch district, Gujarat",
    cause: "livelihood",
    categoryLabel: "Livelihood",
    date: "2026-04-11",
    readingMinutes: 6,
    excerpt:
      "The collective's first real negotiation was not with a buyer. It was about what their own work was worth.",
    before: "Individual artisans sold at distress prices to whoever arrived first.",
    intervention:
      "Producer collective formation, costing and pricing capability, formal buyer linkage.",
    today: "The collective operates independently with two long-term supply agreements.",
    quote:
      "Once we costed one shawl honestly, we could not go back to the old price. That was the turning point.",
    quoteAttribution: "Sujata, secretary, Meghdoot producer collective",
    body: [
      "The Meghdoot collective began with 28 members, a borrowed room and a disagreement. Half the group wanted a guaranteed monthly payout. The other half wanted to hold stock and wait for a better price. Both positions were reasonable, and neither could be settled without knowing what a single piece actually cost to make.",
      "Costing took six weeks: thread, dye, transport, breakage, and the hours that had never appeared in any calculation. The number that emerged was 34 percent above what members had been accepting.",
      "The first buyer conversation failed. The second, with an institutional buyer who needed consistent volume and documented quality, produced a 14-month agreement. Payment terms of 30 days made working capital the next problem, which the collective solved with a rotating internal fund.",
      "Median member income is up meaningfully, and the collective now runs its own monthly review. Aaroha's role has narrowed to an advisory seat, which is the outcome the programme was designed for.",
    ],
    programmeSlug: "project-jeevika",
    image: collective,
    imageAlt: "A women's self-help group seated in a circle with a ledger and calculator",
    featured: false,
  },
  {
    slug: "kondh-watershed-maharashtra",
    title: "The village that planned its water before it planted a tree",
    person: "Ambewadi village commons committee",
    location: "Beed district, Maharashtra",
    cause: "environment",
    categoryLabel: "Environment",
    date: "2026-03-19",
    readingMinutes: 5,
    excerpt:
      "Three earlier plantation drives had failed here. The committee wanted to know why before agreeing to a fourth.",
    before: "Repeated plantation drives with low survival and no catchment plan.",
    intervention: "Participatory watershed mapping, recharge structures, then species selection.",
    today: "A three-year commons plan with tracked sapling survival and two recharge structures.",
    quote: "We stopped asking how many trees. We started asking where the water goes.",
    quoteAttribution: "Member, Ambewadi commons committee",
    body: [
      "Ambewadi had been the site of three plantation drives in eight years. Photographs existed for all of them. Surviving trees did not.",
      "The committee's condition for a fourth attempt was a catchment map. Making one took a season of walking the slope after rain and marking where water actually moved, which turned out to be nothing like the earlier assumption.",
      "Two recharge structures went in before any sapling. Species selection followed the water, not the nursery catalogue. Survival at the end of year three sits near four in five, which the committee monitors itself with a quarterly count.",
      "The plan is public and posted at the panchayat office, including the sections that have slipped behind schedule.",
    ],
    programmeSlug: "project-dharti",
    image: collective,
    imageAlt: "A village committee meeting seated together with records and documents",
    featured: false,
  },
  {
    slug: "youth-council-bihar",
    title: "A youth council rejected the programme we proposed",
    person: "Sitamarhi youth council",
    location: "Sitamarhi district, Bihar",
    cause: "women-youth",
    categoryLabel: "Community",
    date: "2026-02-08",
    readingMinutes: 4,
    excerpt:
      "The design was solid, the budget was ready, and the council said no. They were right.",
    before: "Programme priorities were set at district level with limited local input.",
    intervention: "Youth council with a formal decision role in programme selection.",
    today: "A locally designed transport and safety initiative, now in its second cycle.",
    quote: "We were not being difficult. We were the ones taking the bus at 6 am.",
    quoteAttribution: "Member, Sitamarhi youth council",
    body: [
      "The proposal was a digital skills lab. Reasonable on paper, well funded, and modelled on something that had worked two districts away.",
      "The council's objection was practical. Attendance for any evening programme in that block was governed by one thing: whether young women could travel safely at the hours the sessions required. Without solving that, a lab would serve the same small group already being served.",
      "The council reallocated the cycle to a shared transport and escort arrangement with the school and the panchayat, and set its own attendance target. Participation by young women in existing programmes rose sharply, and the skills lab opened a year later with a very different attendance profile.",
      "We publish council decisions, including the ones that overrule us, because the alternative is a participation process that only ratifies.",
    ],
    programmeSlug: "project-saksham",
    image: asha,
    imageAlt: "Young people gathered for a community council session",
    featured: false,
  },
  {
    slug: "flood-response-assam",
    title: "Week one is logistics. Month six is the real test.",
    person: "Response team, Barpeta",
    location: "Barpeta district, Assam",
    cause: "emergency",
    categoryLabel: "Field Stories",
    date: "2026-01-22",
    readingMinutes: 6,
    excerpt:
      "Relief reached the district in 22 hours. The households that were hardest to reach then were still uncounted in month three.",
    before: "Relief arrived late and unevenly, and stopped before recovery began.",
    intervention: "Pre-positioned kits, trained volunteer cohort, joint damage assessment.",
    today:
      "A recovery caseload tracked for nine months, with documents and school re-entry included.",
    quote: "Everyone counts the kits. Almost nobody counts who never got one.",
    quoteAttribution: "Field coordinator, Project Sahaay",
    body: [
      "Kits were pre-positioned before the season, so the first distribution happened 22 hours after the alert. That number is the one that usually gets reported.",
      "The number the team watches instead is the gap between the initial assessment list and the list three weeks later. In Barpeta it was 11 percent — households in the most cut-off chars that no first-pass survey reached.",
      "Recovery work ran for nine months: replacing lost identity documents, restoring livelihood assets, and getting children back into school before the term made re-entry harder.",
      "The response plan for the next season was revised on the basis of that gap, not the mobilisation time.",
    ],
    programmeSlug: "project-sahaay",
    image: ramesh,
    imageAlt: "A field coordinator standing on a rural road at dawn",
    featured: false,
  },
];

export const storyBySlug = (slug: string) => stories.find((story) => story.slug === slug);

export const featuredStory: Story = stories.find((story) => story.featured) ?? stories[0]!;

export const storyFilters = [
  { id: "all", label: "All" },
  { id: "education", label: "Education" },
  { id: "healthcare", label: "Healthcare" },
  { id: "livelihood", label: "Livelihood" },
  { id: "environment", label: "Environment" },
  { id: "women-youth", label: "Community" },
  { id: "emergency", label: "Field Stories" },
] as const;

export const formatStoryDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
