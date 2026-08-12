import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { T as ChartColumn, g as Landmark, i as ShieldCheck, s as Scale } from "../_libs/lucide-react.mjs";
import { c as PROTOTYPE_NOTE, f as cn, l as organisation } from "./router-CiBZnEbp.mjs";
import { t as Reveal } from "./Reveal-YfJFdh_E.mjs";
import { t as PageHero } from "./PageHero-DbLg5ZOa.mjs";
import { t as SectionHeading } from "./SectionHeading-B9xyrqbv.mjs";
import { t as PrototypeNotice } from "./PrototypeTag-DQWf9w8G.mjs";
import { f as spendAllocation, t as FinalCta } from "./Participation-CpQmnhQu.mjs";
import { n as reportFilters, t as partners } from "./reports-CrUJoGKN.mjs";
import { t as TransparencyGrid } from "./TransparencyGrid-CEMVBX1h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/transparency-YYOwgsnh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var governancePillars = [
	{
		icon: Landmark,
		title: "Board and oversight",
		description: "A seven-member board with an independent majority, meeting quarterly. Audit and ethics sub-committees report to it directly."
	},
	{
		icon: ChartColumn,
		title: "Independent measurement",
		description: "The measurement unit reports to the board, not to programme leadership, so results are published whether or not they flatter us."
	},
	{
		icon: Scale,
		title: "Conflict of interest",
		description: "Annual declarations from board, leadership and vendors. Related-party transactions are disclosed in the annual report."
	},
	{
		icon: ShieldCheck,
		title: "Safeguarding",
		description: "Child protection, POSH and community grievance policies with a named officer and an external escalation route."
	}
];
var policies = [
	"Child protection and safeguarding policy",
	"Prevention of sexual harassment (POSH) policy",
	"Whistleblower and grievance redressal policy",
	"Data protection and consent policy",
	"Photography and dignity in storytelling policy",
	"Procurement and vendor selection policy"
];
var measurementSteps = [
	{
		title: "Baseline",
		description: "Every programme site is measured before delivery begins, against indicators fixed in advance."
	},
	{
		title: "Midline",
		description: "A mid-cycle round tests whether the approach is working while there is still time to change it."
	},
	{
		title: "Endline",
		description: "Outcomes are compared to the baseline and to comparison habitations wherever one is available."
	},
	{
		title: "Publication",
		description: "Results are published in the impact report, including programmes that did not meet their target."
	}
];
function TransparencyPage() {
	const [kind, setKind] = (0, import_react.useState)("all");
	const activeKinds = (0, import_react.useMemo)(() => kind === "all" ? void 0 : [kind], [kind]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Transparency",
			title: "Your trust deserves evidence.",
			description: "What we spend, how we measure, who governs us and which policies bind us. Published in one place rather than on request.",
			meta: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrototypeNotice, { children: PROTOTYPE_NOTE })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "financial",
			className: "border-b border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-16 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Financial transparency",
					title: "Where every hundred rupees goes.",
					description: "Illustrative allocation for this prototype. In production these figures come from the audited statement for the financial year."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-7",
						children: spendAllocation.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: index * 70,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-foreground",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular display-md text-primary",
									children: [item.value, "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								role: "progressbar",
								"aria-valuenow": item.value,
								"aria-valuemin": 0,
								"aria-valuemax": 100,
								"aria-label": `${item.label}: ${item.value} percent of spend`,
								className: "mt-3 h-1.5 w-full bg-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("h-full", index === 0 ? "bg-accent" : "bg-sage"),
									style: { width: `${item.share}%` }
								})
							})]
						}) }, item.label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 120,
						className: "border border-border bg-secondary/60 p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display-md text-primary",
							children: "How we account for it"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Programme delivery includes field staff, community facilitators, materials and travel — the costs that reach a habitation." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Measurement is funded as its own line so evaluation is never the first budget cut in a difficult year." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Restricted grants are tracked separately from unrestricted giving, with utilisation reported per grant." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Statutory registration and tax-exemption details are deliberately omitted from this prototype and will be published only once verified." })
							]
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "measurement",
			className: "border-b border-border bg-secondary/45",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-16 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Impact measurement",
					title: "How a number earns the right to be published.",
					description: "Four rounds, fixed indicators, and an independent unit that reports to the board."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4",
					children: measurementSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 70,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full bg-background p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "tabular text-sm text-accent",
									children: String(index + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display-md mt-5 text-primary",
									children: step.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: step.description
								})
							]
						})
					}) }, step.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "documents",
			className: "border-b border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Document library",
						title: "Reports, policies and disclosures.",
						description: "Every document below is a clearly marked placeholder in this prototype. No file is served."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "group",
						"aria-label": "Filter documents by type",
						className: "mt-10 flex flex-wrap gap-2 border-b border-border pb-8",
						children: reportFilters.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": kind === option.id,
							onClick: () => setKind(option.id),
							className: cn("min-h-11 border px-4 text-[0.8125rem] transition-colors", kind === option.id ? "border-primary bg-primary text-primary-foreground" : "border-border-strong text-muted-foreground hover:border-primary hover:text-primary"),
							children: option.label
						}, option.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransparencyGrid, { ...activeKinds ? { kinds: activeKinds } : {} })
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "governance",
			className: "border-b border-border bg-secondary/45",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-16 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Governance",
					title: "Who holds the organisation to account.",
					description: "Demo governance structure for this prototype, written to show what a production hub would disclose."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-14 grid gap-px border border-border bg-border sm:grid-cols-2",
					children: governancePillars.map((pillar, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 70,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "h-full bg-background p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(pillar.icon, {
									"aria-hidden": "true",
									className: "size-6 text-accent",
									strokeWidth: 1.25
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display-md mt-6 text-primary",
									children: pillar.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: pillar.description
								})
							]
						})
					}) }, pillar.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "policies",
			className: "border-b border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-accent",
						children: "Policies & compliance"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "policies",
						className: "display-xl mt-4 text-balance text-primary",
						children: "The rules we operate under."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-5",
						children: "Policies are summarised here and available in full on request. Compliance filings are excluded from this prototype rather than invented."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-sm text-muted-foreground",
					children: ["Questions about governance or compliance: ", organisation.email]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border border-y border-border",
					children: policies.map((policy, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 50,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								"aria-hidden": "true",
								className: "mt-0.5 size-4 shrink-0 text-sage",
								strokeWidth: 1.5
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-foreground",
								children: policy
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Sample placeholder · full text not published in this prototype"
							})] })]
						})
					}) }, policy))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "partners",
			className: "border-b border-border bg-secondary/45",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-16 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Partnerships",
					title: "Who we work with, and on what.",
					description: "Demo partner list. Partnership scope is published so contribution and influence stay visible."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 overflow-x-auto border border-border bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[40rem] text-left text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
								className: "sr-only",
								children: "Partner organisations, type, year and contribution"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border text-xs tracking-[0.12em] uppercase text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										className: "px-5 py-4 font-medium",
										children: "Partner"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										className: "px-5 py-4 font-medium",
										children: "Type"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										className: "px-5 py-4 font-medium",
										children: "Since"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										className: "px-5 py-4 font-medium",
										children: "Contribution"
									})
								]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: partners.map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border last:border-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "row",
										className: "px-5 py-4 font-medium text-primary",
										children: partner.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4 text-muted-foreground",
										children: partner.type
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "tabular px-5 py-4 text-muted-foreground",
										children: partner.since
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4 text-muted-foreground",
										children: partner.contribution
									})
								]
							}, partner.name)) })
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { TransparencyPage as component };
