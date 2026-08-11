import type { StateImpact } from "@/types";

/**
 * Stylised atlas geometry. `x` / `y` position each state marker inside the
 * 0–500 × 0–560 viewBox used by the Impact Atlas map, and are intentionally
 * schematic rather than cartographically precise.
 */
export const stateImpacts: StateImpact[] = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    region: "North West",
    x: 152,
    y: 186,
    causes: ["healthcare", "livelihood"],
    programmes: 3,
    communities: 4,
    peopleReached: 96000,
    featuredProgrammeSlug: "project-arogya",
    description:
      "Screening rounds and referral navigation across arid habitations, alongside artisan collectives in two districts.",
  },
  {
    id: "gujarat",
    name: "Gujarat",
    region: "West",
    x: 118,
    y: 254,
    causes: ["livelihood"],
    programmes: 2,
    communities: 2,
    peopleReached: 54000,
    featuredProgrammeSlug: "project-jeevika",
    description:
      "Producer collectives in Kutch working through formal buyer agreements and shared working capital.",
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    region: "North",
    x: 233,
    y: 182,
    causes: ["education", "women-youth"],
    programmes: 4,
    communities: 5,
    peopleReached: 168000,
    featuredProgrammeSlug: "project-udaan",
    description:
      "The largest learning centre cluster in the network, with youth councils seated on district programme reviews.",
  },
  {
    id: "bihar",
    name: "Bihar",
    region: "East",
    x: 294,
    y: 206,
    causes: ["education", "women-youth", "emergency"],
    programmes: 4,
    communities: 4,
    peopleReached: 174000,
    featuredProgrammeSlug: "project-saksham",
    description:
      "Youth councils hold a formal decision role here, including the authority to reallocate a programme cycle.",
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    region: "East",
    x: 292,
    y: 244,
    causes: ["education"],
    programmes: 2,
    communities: 2,
    peopleReached: 62000,
    featuredProgrammeSlug: "project-udaan",
    description:
      "Learning centres focused on the class 10 to 12 transition, with scholarship accompaniment.",
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    region: "East",
    x: 330,
    y: 240,
    causes: ["livelihood", "emergency"],
    programmes: 3,
    communities: 3,
    peopleReached: 88000,
    featuredProgrammeSlug: "project-jeevika",
    description:
      "Collectives linked to institutional buyers, plus cyclone-season relief pre-positioning in coastal blocks.",
  },
  {
    id: "assam",
    name: "Assam",
    region: "North East",
    x: 390,
    y: 196,
    causes: ["healthcare", "emergency"],
    programmes: 3,
    communities: 3,
    peopleReached: 71000,
    featuredProgrammeSlug: "project-sahaay",
    description:
      "Flood response with joint damage assessment, and a nine-month recovery caseload after the emergency phase.",
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    region: "Central",
    x: 206,
    y: 248,
    causes: ["healthcare", "environment"],
    programmes: 3,
    communities: 4,
    peopleReached: 142000,
    featuredProgrammeSlug: "project-arogya",
    description:
      "Health worker network covering habitations more than 10 km from a health centre, with watershed work alongside.",
  },
  {
    id: "odisha",
    name: "Odisha",
    region: "East",
    x: 290,
    y: 292,
    causes: ["education", "women-youth", "emergency"],
    programmes: 5,
    communities: 6,
    peopleReached: 196000,
    featuredProgrammeSlug: "project-udaan",
    description:
      "Where Aaroha began. Deepest programme mix in the network and the longest measurement series.",
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    region: "West",
    x: 172,
    y: 312,
    causes: ["healthcare", "environment"],
    programmes: 3,
    communities: 3,
    peopleReached: 118000,
    featuredProgrammeSlug: "project-dharti",
    description:
      "Participatory watershed restoration with village commons committees monitoring sapling survival themselves.",
  },
  {
    id: "karnataka",
    name: "Karnataka",
    region: "South",
    x: 188,
    y: 392,
    causes: ["livelihood", "environment"],
    programmes: 2,
    communities: 3,
    peopleReached: 74000,
    featuredProgrammeSlug: "project-dharti",
    description:
      "Climate-resilient cropping demonstrations on farmer-owned plots, with collectives aggregating produce.",
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    region: "South",
    x: 222,
    y: 452,
    causes: ["women-youth"],
    programmes: 2,
    communities: 2,
    peopleReached: 58000,
    featuredProgrammeSlug: "project-saksham",
    description:
      "Leadership fellowships with a focus on placing fellows into local governance and school management roles.",
  },
];

/** Schematic India silhouette used as the atlas base shape. */
export const indiaOutlinePath =
  "M150 54 C158 40 176 28 190 32 C204 36 208 52 220 60 C234 68 250 58 262 66 C272 73 272 86 282 92 C296 100 312 96 326 86 C338 78 352 68 366 74 C382 81 388 100 404 108 C420 116 440 124 446 138 C450 148 438 160 424 166 C412 171 400 164 390 170 C380 176 376 190 382 202 C388 214 384 226 372 234 C360 242 348 236 340 240 C332 244 336 256 330 266 C324 276 310 274 302 282 C294 290 296 302 290 316 C282 336 274 356 266 380 C256 410 248 440 240 468 C234 490 230 508 226 518 C222 528 214 526 210 514 C204 496 202 470 196 448 C190 424 180 402 168 380 C154 354 138 332 124 306 C110 280 98 254 92 228 C86 204 90 186 100 172 C108 160 100 148 96 136 C92 122 100 110 112 104 C122 99 122 88 124 78 C127 64 140 62 150 54 Z";
