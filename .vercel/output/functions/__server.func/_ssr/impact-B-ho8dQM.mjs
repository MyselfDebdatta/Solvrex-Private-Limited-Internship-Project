import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as PROTOTYPE_NOTE, f as cn, h as stories, s as ActionLink } from "./router-DD5dsP7n.mjs";
import { t as Reveal } from "./Reveal-BDLJwfSO.mjs";
import { t as PageHero } from "./PageHero-CEN8S2jE.mjs";
import { t as SectionHeading } from "./SectionHeading-Bxe7Ep5B.mjs";
import { t as PrototypeNotice } from "./PrototypeTag-CD38QlPj.mjs";
import { t as FinalCta } from "./Participation-HwWrAfyt.mjs";
import { t as ImpactAtlas } from "./ImpactAtlas-B6P0xaGj.mjs";
import { n as JourneyTimeline, t as ImpactDashboard } from "./JourneyTimeline-BWbxRmZa.mjs";
import { t as TransparencyGrid } from "./TransparencyGrid-DXMjP0q4.mjs";
import { t as StoryCard } from "./StoryCard-BpNt-B1W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/impact-B-ho8dQM.js
var import_jsx_runtime = require_jsx_runtime();
function CauseActionOutcome({ cause, need, response, outcome, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("max-w-3xl mx-auto py-12 md:py-20", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col items-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-10 bottom-10 w-px bg-border -z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "w-full bg-background border border-border p-8 transition-colors duration-500 hover:border-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: "Cause"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "display-md text-primary mt-3",
						children: cause
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 md:h-14" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 80,
					className: "w-full bg-background border border-border p-8 transition-colors duration-500 hover:border-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: "Community Need"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base text-foreground/85 leading-relaxed mt-3",
						children: need
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 md:h-14" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 160,
					className: "w-full bg-background border border-border p-8 transition-colors duration-500 hover:border-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: "Programme Response"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base text-foreground/85 leading-relaxed mt-3",
						children: response
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-10 md:h-14 w-px bg-accent overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary animate-pulse" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 240,
					className: "w-full bg-secondary/45 border border-accent p-8 md:p-12 shadow-sm transition-transform duration-500 hover:-translate-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-accent",
						children: "Measurable Outcome"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display-lg text-primary mt-4",
						children: outcome
					})]
				})
			]
		})
	});
}
/** Demo wrapper for the impact/our-work pages */
function CauseActionOutcomeDemo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "cause-action-outcome",
		className: "border-b border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Theory of Change",
				title: "From root cause to measurable outcome.",
				description: "A structural look at how our programmes are designed to respond directly to community realities."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CauseActionOutcome, {
				cause: "Healthcare",
				need: "Remote communities face a 4-hour journey to the nearest tertiary care center, resulting in high maternal mortality and delayed diagnoses.",
				response: "Deploying mobile medical units with diagnostic capabilities and training local Asha workers to serve as the first point of care.",
				outcome: "45% reduction in delayed critical diagnoses across 12 target districts.",
				className: "mt-14"
			})]
		})
	});
}
function ImpactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Impact",
			title: "Make impact visible, including what did not work.",
			description: "Reach, coverage, allocation and outcomes in one place, with the methodology stated alongside the numbers.",
			meta: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrototypeNotice, { children: PROTOTYPE_NOTE })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactAtlas, { heading: "Impact Atlas: change across India." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactDashboard, { showCta: false }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "impact-stories",
			className: "border-b border-border bg-secondary/45",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-20 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Behind the numbers",
					title: "Every indicator has a person attached to it.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/stories",
						variant: "outline",
						children: "All stories"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: stories.slice(0, 3).map((story, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
						story,
						delay: index * 80
					}) }, story.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CauseActionOutcomeDemo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyTimeline, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "impact-reports",
			className: "border-b border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-20 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Reporting",
					title: "Impact reports and methodology.",
					description: "How reach, outcome and attribution are defined — and what our numbers deliberately do not claim.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/transparency",
						variant: "outline",
						children: "Transparency hub"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransparencyGrid, { kinds: ["impact", "annual"] })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { ImpactPage as component };
