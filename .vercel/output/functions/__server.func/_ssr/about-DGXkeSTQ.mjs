import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as PROTOTYPE_NOTE, l as organisation } from "./router-DD5dsP7n.mjs";
import { t as Reveal } from "./Reveal-BDLJwfSO.mjs";
import { t as PageHero } from "./PageHero-CEN8S2jE.mjs";
import { t as SectionHeading } from "./SectionHeading-Bxe7Ep5B.mjs";
import { t as PrototypeNotice } from "./PrototypeTag-CD38QlPj.mjs";
import { l as leadership, p as values, t as FinalCta, u as organisationTimeline } from "./Participation-HwWrAfyt.mjs";
import { t as ApproachSteps } from "./ApproachSteps-BCaIAolW.mjs";
import { t as ImpactAtlas } from "./ImpactAtlas-B6P0xaGj.mjs";
import { t as partners } from "./reports-CrUJoGKN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DGXkeSTQ.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About",
			title: "We began with one question, asked in one district.",
			description: "Why do results improve on paper while futures stay narrow? Twelve years later, that question still sets our agenda.",
			meta: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrototypeNotice, { children: PROTOTYPE_NOTE })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "story",
			className: "border-b border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-14 py-20 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "story",
					className: "display-xl text-primary",
					children: "Our story"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					className: "space-y-6 text-base leading-relaxed text-foreground/85",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Aaroha Foundation started in ",
							organisation.founded,
							" in a single district of Odisha, after a board results review showed a district-record pass rate alongside a near-record drop in college enrolment. The two facts belonged to the same story, and nobody was holding both at once."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "What followed was less a plan than a discipline: listen in the habitation, design with a local committee, publish the indicator that matters, and refuse to scale anything that has not cleared two cycles of evidence." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today the prototype describes eighteen programmes across twelve states in six causes. The emphasis has shifted from expansion to depth — fewer new districts, stronger evidence in the ones we already work in." })
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "mission",
			className: "border-b border-border bg-secondary/45",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-20 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-px border border-border bg-border md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-9 md:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-accent",
								children: "Mission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "mission",
								className: "display-lg mt-4 text-primary",
								children: "Turn opportunity into action, and action into measurable progress."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground",
								children: "We work alongside communities to build locally relevant programmes, and we make the results — including the disappointing ones — visible."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-9 md:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-accent",
								children: "Vision"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-lg mt-4 text-primary",
								children: "A country where impact is verifiable by the people it is meant to serve."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground",
								children: "Not impact asserted in a report, but impact a community can check against what it actually experienced."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Values",
						title: "Four commitments we can be held to."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4",
						children: values.map((value, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: index * 80,
							className: "border-t border-border-strong pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display-md text-primary",
								children: value.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: value.description
							})]
						}) }, value.title))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApproachSteps, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "timeline",
			className: "border-b border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-20 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our journey",
					title: "Twelve years, in order.",
					description: "A prototype timeline. Dates and milestones are illustrative."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-14 grid gap-px border border-border bg-border md:grid-cols-3",
					children: organisationTimeline.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: index * 70,
						className: "h-full bg-background p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "tabular font-[family-name:var(--font-display)] text-3xl text-accent",
								children: entry.year
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display-md mt-4 text-primary",
								children: entry.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: entry.description
							})
						]
					}) }, entry.year))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "leadership",
			className: "border-b border-border bg-secondary/45",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-20 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Leadership",
						title: "Accountable, named and reachable.",
						description: "Demo profiles for the prototype. Governance documents are listed on the Transparency page."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: leadership.map((person, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: index * 60,
							className: "border-t border-border-strong pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display-md text-primary",
									children: person.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm font-medium text-foreground",
									children: person.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: person.focus
								})
							]
						}) }, person.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Partners",
							title: "Nothing here was built alone.",
							description: "Government departments, CSR partners, technical institutions and civil society networks, with defined roles."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
							children: partners.map((partner, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: index * 50,
								className: "h-full bg-background p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "eyebrow text-muted-foreground",
										children: ["Since ", partner.since]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-medium text-primary",
										children: partner.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-muted-foreground",
										children: partner.type
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-foreground/80",
										children: partner.contribution
									})
								]
							}) }, partner.name))
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactAtlas, { heading: "Where we work." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { AboutPage as component };
