import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { k as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as useInView, f as cn, s as ActionLink, u as useCountUp } from "./router-CiBZnEbp.mjs";
import { t as Reveal } from "./Reveal-YfJFdh_E.mjs";
import { t as SectionHeading } from "./SectionHeading-B9xyrqbv.mjs";
import { n as PrototypeTag } from "./PrototypeTag-DQWf9w8G.mjs";
import { c as journeySteps, f as spendAllocation, i as dashboardStats, o as impactByCause, s as impactByGeography } from "./Participation-CpQmnhQu.mjs";
import { r as formatStatValue, t as formatNumber } from "./format-D7yerbPi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/JourneyTimeline-CCwVmffq.js
var import_jsx_runtime = require_jsx_runtime();
/** Animated headline number. Values come from the data layer, never hardcoded. */
function StatCounter({ stat, tone = "default", size = "md", className }) {
	const { ref, inView } = useInView("-4% 0px");
	const animated = useCountUp(stat.value, inView);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: cn("min-w-0 relative pl-5", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute left-0 top-1 bottom-1 w-[2px] bg-accent origin-top transition-transform duration-1000 ease-out", inView ? "scale-y-100" : "scale-y-0") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: cn("tabular font-[family-name:var(--font-display)] leading-none", size === "lg" ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl", tone === "inverse" ? "text-primary-foreground" : "text-primary"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent mr-1",
						children: stat.prefix
					}),
					formatStatValue(Number.isInteger(stat.value) ? Math.round(animated) : animated),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent ml-1",
						children: stat.suffix
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-4 text-sm font-medium", tone === "inverse" ? "text-primary-foreground" : "text-primary"),
				children: stat.label
			}),
			stat.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-2 text-xs leading-relaxed", tone === "inverse" ? "text-primary-foreground/70" : "text-muted-foreground"),
				children: stat.note
			}) : null
		]
	});
}
function BreakdownBars({ title, items, unit = "people reached" }) {
	const { ref, inView } = useInView("-10% 0px");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "eyebrow font-sans text-muted-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-5",
				children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate text-foreground",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular shrink-0 text-muted-foreground",
						children: unit === "percent" ? `${item.value}%` : formatNumber(item.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 h-1.5 w-full bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("h-full origin-left bg-primary transition-transform duration-1000 ease-out", index % 3 === 1 && "bg-sage", index % 3 === 2 && "bg-accent"),
						style: {
							width: `${item.share}%`,
							transform: inView ? "scaleX(1)" : "scaleX(0)",
							transitionDelay: `${index * 90}ms`
						}
					})
				})] }, item.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sr-only",
				children: unit === "percent" ? "Values shown as percentages." : "Values shown as people reached."
			})
		]
	});
}
/** Section 9 — editorial impact dashboard. */
function ImpactDashboard({ showCta = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "dashboard",
		className: "border-b border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Impact dashboard",
					title: "Numbers tell part of the story.",
					description: "Reach, coverage and allocation in one view. Outcome indicators live inside each programme, because reach alone is not impact.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrototypeTag, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-y border-border py-10 md:grid-cols-3 lg:grid-cols-6",
					children: dashboardStats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, { stat })
					}, stat.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-12 lg:grid-cols-3 lg:gap-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreakdownBars, {
							title: "Impact by cause",
							items: impactByCause
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreakdownBars, {
								title: "Impact by geography",
								items: impactByGeography
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreakdownBars, {
								title: "Expenditure allocation",
								items: spendAllocation,
								unit: "percent"
							})
						})
					]
				}),
				showCta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					className: "mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionLink, {
						to: "/impact",
						variant: "outline",
						size: "lg",
						children: ["View full impact", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							"aria-hidden": "true",
							className: "size-4"
						})]
					})
				}) : null
			]
		})
	});
}
/** IMPACT JOURNEY — vertical timeline of how a programme comes into being. */
function JourneyTimeline() {
	const { ref, inView } = useInView("-20% 0px");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "journey",
		className: "border-b border-border bg-secondary/45",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Impact Journey",
				title: "How change actually happens.",
				description: "Seven stages between a problem being named and a solution being scaled. Nothing skips a stage."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				ref,
				className: "relative mt-14 max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "absolute top-2 bottom-2 left-[15px] w-px bg-border md:left-[19px]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: cn("absolute top-2 left-[15px] w-px origin-top bg-accent transition-transform duration-[2000ms] ease-out md:left-[19px]", inView ? "scale-y-100" : "scale-y-0"),
						style: { bottom: "0.5rem" }
					}),
					journeySteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative pb-10 pl-12 last:pb-0 md:pl-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: cn("absolute top-0 left-0 grid size-8 place-items-center rounded-full border bg-background transition-all duration-700 md:size-10", inView ? "scale-100 border-accent opacity-100" : "scale-75 border-border opacity-40"),
								style: { transitionDelay: `${index * 180}ms` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular text-xs font-medium text-primary",
									children: index + 1
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-muted-foreground",
								children: step.actor
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display-md mt-2 text-primary",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: step.description
							})
						]
					}, step.id))
				]
			})]
		})
	});
}
//#endregion
export { JourneyTimeline as n, StatCounter as r, ImpactDashboard as t };
