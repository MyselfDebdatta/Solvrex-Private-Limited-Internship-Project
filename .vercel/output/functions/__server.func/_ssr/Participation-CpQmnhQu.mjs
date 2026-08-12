import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { D as BookOpen, S as FileText, T as ChartColumn, b as Handshake, g as Landmark, h as Leaf, i as ShieldCheck, k as ArrowRight, m as LifeBuoy, n as Users, r as Sprout, s as Scale, u as Megaphone, x as HandHeart, y as HeartPulse } from "../_libs/lucide-react.mjs";
import { s as ActionLink } from "./router-CiBZnEbp.mjs";
import { t as Reveal } from "./Reveal-YfJFdh_E.mjs";
import { t as SectionHeading } from "./SectionHeading-B9xyrqbv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Participation-CpQmnhQu.js
var import_jsx_runtime = require_jsx_runtime();
/** Prototype values. Replace with verified organisational data. */
var headlineStats = [
	{
		id: "communities",
		value: 25,
		suffix: "+",
		label: "Communities reached"
	},
	{
		id: "programmes",
		value: 18,
		label: "Active programmes"
	},
	{
		id: "states",
		value: 12,
		label: "States"
	},
	{
		id: "lives",
		value: 1.2,
		suffix: "M+",
		label: "Lives reached"
	}
];
var dashboardStats = [
	{
		id: "lives",
		value: 1.2,
		suffix: "M+",
		label: "Lives reached",
		note: "Cumulative since 2014"
	},
	{
		id: "communities",
		value: 25,
		suffix: "+",
		label: "Communities",
		note: "Village and ward clusters"
	},
	{
		id: "programmes",
		value: 18,
		label: "Programmes",
		note: "Across six causes"
	},
	{
		id: "states",
		value: 12,
		label: "States",
		note: "And 2 union territories"
	},
	{
		id: "volunteer-hours",
		value: 96,
		suffix: "K",
		label: "Volunteer hours",
		note: "Logged in the last 12 months"
	},
	{
		id: "partners",
		value: 42,
		label: "Partner organisations",
		note: "Government, CSR and civil society"
	}
];
var impactByCause = [
	{
		label: "Education",
		value: 412e3,
		share: 34
	},
	{
		label: "Healthcare",
		value: 336e3,
		share: 28
	},
	{
		label: "Livelihood",
		value: 192e3,
		share: 16
	},
	{
		label: "Women & Youth",
		value: 132e3,
		share: 11
	},
	{
		label: "Environment",
		value: 84e3,
		share: 7
	},
	{
		label: "Emergency Response",
		value: 48e3,
		share: 4
	}
];
var impactByGeography = [
	{
		label: "Odisha",
		value: 196e3,
		share: 100
	},
	{
		label: "Bihar",
		value: 174e3,
		share: 89
	},
	{
		label: "Uttar Pradesh",
		value: 168e3,
		share: 86
	},
	{
		label: "Madhya Pradesh",
		value: 142e3,
		share: 72
	},
	{
		label: "Maharashtra",
		value: 118e3,
		share: 60
	},
	{
		label: "Rajasthan",
		value: 96e3,
		share: 49
	},
	{
		label: "West Bengal",
		value: 88e3,
		share: 45
	},
	{
		label: "Karnataka",
		value: 74e3,
		share: 38
	}
];
var spendAllocation = [
	{
		label: "Programme delivery",
		value: 82,
		share: 82
	},
	{
		label: "Monitoring & evaluation",
		value: 7,
		share: 7
	},
	{
		label: "Fundraising & communication",
		value: 6,
		share: 6
	},
	{
		label: "Administration",
		value: 5,
		share: 5
	}
];
var approachSteps = [
	{
		number: "01",
		title: "Listen",
		description: "Understand communities and their real needs.",
		detail: "Every engagement begins with structured listening rounds in the habitation, not a proposal written elsewhere."
	},
	{
		number: "02",
		title: "Design",
		description: "Build locally relevant solutions.",
		detail: "Programme design is done with a local committee, and the constraints they name become design constraints."
	},
	{
		number: "03",
		title: "Act",
		description: "Work alongside communities and partners.",
		detail: "Delivery is led by people from the community, supported by district partners and the public system."
	},
	{
		number: "04",
		title: "Measure",
		description: "Track outcomes and learn from evidence.",
		detail: "We publish the indicator that matters, including when it moves in the wrong direction."
	},
	{
		number: "05",
		title: "Scale",
		description: "Expand approaches that demonstrate meaningful results.",
		detail: "Only approaches with two consecutive cycles of evidence are taken to a new district."
	}
];
var journeySteps = [
	{
		id: "identify",
		title: "A challenge is identified",
		description: "Field teams and partners flag a pattern that data or households keep repeating.",
		actor: "Field team"
	},
	{
		id: "voices",
		title: "Community voices are heard",
		description: "Listening rounds test whether the pattern matches what people actually prioritise.",
		actor: "Community"
	},
	{
		id: "design",
		title: "A programme is designed",
		description: "A local committee co-designs the response, its indicators and its exit condition.",
		actor: "Community + programme team"
	},
	{
		id: "partners",
		title: "Partners join",
		description: "Government departments, CSR funders and civil society partners commit to defined roles.",
		actor: "Partners"
	},
	{
		id: "action",
		title: "Action happens on ground",
		description: "Delivery is led by people from the community, with monthly operational review.",
		actor: "Local delivery team"
	},
	{
		id: "measure",
		title: "Results are measured",
		description: "Baseline, midline and endline against the indicator the community agreed to.",
		actor: "Measurement unit"
	},
	{
		id: "scale",
		title: "What works gets scaled",
		description: "Two cycles of evidence before a model moves to a new district. Otherwise it is redesigned.",
		actor: "Programme leadership"
	}
];
var pathways = [
	{
		id: "give",
		title: "Give",
		kicker: "Support a programme",
		description: "Direct your contribution to a specific programme and see how that programme reports its results.",
		bullets: [
			"Choose a cause",
			"One-time or monthly",
			"Programme-level reporting"
		],
		icon: "HandHeart",
		ctaLabel: "Open donation demo",
		to: "/donate"
	},
	{
		id: "volunteer",
		title: "Volunteer",
		kicker: "Give your time and skills",
		description: "Field cohorts, remote skilled support and emergency response rosters, with defined time commitments.",
		bullets: [
			"Field and remote roles",
			"Skills-based matching",
			"Emergency response roster"
		],
		icon: "Users",
		ctaLabel: "See volunteer roles",
		to: "/get-involved"
	},
	{
		id: "partner",
		title: "Partner",
		kicker: "Collaborate with us",
		description: "Co-design programmes with defined roles, shared measurement and a published partnership scope.",
		bullets: [
			"CSR programmes",
			"Government collaboration",
			"Technical partnerships"
		],
		icon: "Handshake",
		ctaLabel: "Explore partnership",
		to: "/get-involved"
	},
	{
		id: "amplify",
		title: "Amplify",
		kicker: "Share stories and causes",
		description: "Carry a story to an audience that has not heard it, or fundraise within your own community.",
		bullets: [
			"Community fundraising",
			"Story toolkits",
			"Campus and workplace chapters"
		],
		icon: "Megaphone",
		ctaLabel: "Start amplifying",
		to: "/get-involved"
	}
];
var organisationTimeline = [
	{
		year: "2014",
		title: "Aaroha begins in one district",
		description: "Founded around a single question asked in Kalahandi: why do results improve while futures do not?"
	},
	{
		year: "2016",
		title: "Project Udaan formalises the learning model",
		description: "Evening learning centres move from three villages to 40, grouped by learning level."
	},
	{
		year: "2018",
		title: "Measurement unit established",
		description: "An independent internal unit takes ownership of baselines, midlines and published results."
	},
	{
		year: "2020",
		title: "Emergency response capability built",
		description: "Pre-positioned relief and trained volunteer cohorts formalised as Project Sahaay."
	},
	{
		year: "2023",
		title: "Impact Atlas prototype",
		description: "Programme data consolidated into a single geographic view for internal decision-making."
	},
	{
		year: "2026",
		title: "Twelve states, eighteen programmes",
		description: "Focus shifts from expansion to depth: fewer new districts, deeper evidence in existing ones."
	}
];
var values = [
	{
		title: "Dignity first",
		description: "We do not use hardship as a fundraising device. People appear in our work as participants, not subjects."
	},
	{
		title: "Evidence over anecdote",
		description: "A story explains a number. It does not replace one. Both get published, including inconvenient results."
	},
	{
		title: "Local leadership",
		description: "Programmes are delivered by people from the communities they serve, with real decision authority."
	},
	{
		title: "Transparency by default",
		description: "Financials, methodology and governance are published because trust cannot be asserted."
	}
];
var leadership = [
	{
		name: "Meera Krishnan",
		role: "Executive Director",
		focus: "Programme strategy and partnerships"
	},
	{
		name: "Arun Bhattacharya",
		role: "Director, Programmes",
		focus: "Education and livelihood portfolios"
	},
	{
		name: "Dr. Nafisa Qureshi",
		role: "Director, Health",
		focus: "Community health systems"
	},
	{
		name: "Vikram Rao",
		role: "Head of Measurement",
		focus: "Evaluation design and data governance"
	},
	{
		name: "Lalita Munda",
		role: "Head of Community Practice",
		focus: "Participation and local governance"
	},
	{
		name: "Sandeep Iyer",
		role: "Head of Finance",
		focus: "Financial controls and compliance"
	}
];
var cta_community_default = "/assets/cta-community-CP60mMV6.jpg";
/** Maps data-layer icon names to components so data modules stay serialisable. */
var iconRegistry = {
	BookOpen,
	HeartPulse,
	Sprout,
	Users,
	Leaf,
	LifeBuoy,
	HandHeart,
	Handshake,
	Megaphone,
	FileText,
	BarChart3: ChartColumn,
	ShieldCheck,
	Scale,
	Landmark
};
var resolveIcon = (name) => iconRegistry[name] ?? FileText;
/** Section 11 — four participation pathways, donation is one of four. */
function PathwayGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "pathways",
		className: "border-b border-border bg-secondary/45",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Get involved",
				title: "Four ways to take part.",
				description: "Giving is one pathway. Time, collaboration and reach change outcomes just as directly."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-14 grid gap-px border border-border bg-border md:grid-cols-2",
				children: pathways.map((pathway, index) => {
					const Icon = resolveIcon(pathway.icon);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 80,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex h-full flex-col bg-background p-8 md:p-11",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									"aria-hidden": "true",
									className: "size-7 text-accent",
									strokeWidth: 1.25
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display-lg mt-8 text-primary",
									children: pathway.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mt-3 text-muted-foreground",
									children: pathway.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm leading-relaxed text-muted-foreground",
									children: pathway.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex-1 space-y-2 text-sm text-foreground/85",
									children: pathway.bullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											className: "mt-2 size-1 shrink-0 bg-sage"
										}), bullet]
									}, bullet))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionLink, {
									to: pathway.to,
									variant: "outline",
									className: "mt-8 self-start",
									children: [pathway.ctaLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										"aria-hidden": "true",
										className: "size-4"
									})]
								})
							]
						})
					}) }, pathway.id);
				})
			})]
		})
	});
}
/** Section 12 — final CTA. */
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "final-cta",
		className: "relative isolate overflow-hidden bg-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: cta_community_default,
				alt: "Community members and volunteers walking together along a rural road at sunrise",
				width: 1920,
				height: 1024,
				loading: "lazy",
				decoding: "async",
				className: "absolute inset-0 -z-20 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 -z-10 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--color-primary)_94%,transparent)_0%,color-mix(in_oklab,var(--color-primary)_72%,transparent)_100%)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "final-cta",
							className: "display-xl text-balance text-primary-foreground",
							children: "You don't have to change everything."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display-xl mt-2 text-balance text-accent",
							children: "You just have to start somewhere."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
								to: "/our-work",
								variant: "solidInverse",
								size: "lg",
								children: "Find your cause"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
								to: "/donate",
								variant: "inverse",
								size: "lg",
								children: "Support our work"
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { headlineStats as a, journeySteps as c, resolveIcon as d, spendAllocation as f, dashboardStats as i, leadership as l, PathwayGrid as n, impactByCause as o, values as p, approachSteps as r, impactByGeography as s, FinalCta as t, organisationTimeline as u };
