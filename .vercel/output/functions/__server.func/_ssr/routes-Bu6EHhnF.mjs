import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as ArrowUpRight, d as MapPin, k as ArrowRight } from "../_libs/lucide-react.mjs";
import { _ as featuredProgrammes, f as cn, h as stories, s as ActionLink } from "./router-DD5dsP7n.mjs";
import { t as Reveal } from "./Reveal-BDLJwfSO.mjs";
import { t as SectionHeading } from "./SectionHeading-Bxe7Ep5B.mjs";
import { n as PrototypeTag } from "./PrototypeTag-CD38QlPj.mjs";
import { a as headlineStats, d as resolveIcon, n as PathwayGrid, t as FinalCta } from "./Participation-HwWrAfyt.mjs";
import { t as ApproachSteps } from "./ApproachSteps-BCaIAolW.mjs";
import { r as causes } from "./causes-BywuGHaw.mjs";
import { t as ImpactAtlas } from "./ImpactAtlas-B6P0xaGj.mjs";
import { n as JourneyTimeline, r as StatCounter, t as ImpactDashboard } from "./JourneyTimeline-BWbxRmZa.mjs";
import { n as TransparencySection } from "./TransparencyGrid-DXMjP0q4.mjs";
import { t as StoryCard } from "./StoryCard-BpNt-B1W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bu6EHhnF.js
var import_jsx_runtime = require_jsx_runtime();
var hero_community_default = "/assets/hero-community-BRZ4eJ6z.jpg";
/** Section 1 — cinematic hero with a schematic India/data motif behind it. */
function HomeHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate flex min-h-[92svh] items-end overflow-hidden bg-primary pt-28 pb-14 md:min-h-[100svh] md:pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_community_default,
				alt: "Community members in a village courtyard reviewing a plan together",
				width: 1920,
				height: 1280,
				fetchPriority: "high",
				decoding: "async",
				className: "absolute inset-0 -z-20 size-full object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 z-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-primary)_88%,transparent)_0%,color-mix(in_oklab,var(--color-primary)_75%,transparent)_25%,color-mix(in_oklab,var(--color-primary)_90%,transparent)_100%)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell relative z-10 w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow animate-fade-in text-primary-foreground/70",
						children: "Aaroha Foundation · Make Impact Visible"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-hero mt-6 max-w-4xl animate-fade-in text-balance text-primary-foreground [animation-delay:120ms]",
						children: "Change becomes powerful when it becomes visible."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 max-w-2xl animate-fade-in text-lg leading-relaxed text-primary-foreground/80 [animation-delay:220ms] md:text-xl",
						children: "We work with communities to turn opportunity into action, action into progress, and progress into lasting impact."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex animate-fade-in flex-col gap-3 [animation-delay:320ms] sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionLink, {
							to: "/impact",
							variant: "solidInverse",
							size: "lg",
							children: ["Explore our impact", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								"aria-hidden": "true",
								className: "size-4"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
							to: "/get-involved",
							variant: "inverse",
							size: "lg",
							children: "Be part of the change"
						})]
					})
				]
			})
		]
	});
}
/** Impact snapshot strip, directly below the hero. */
function ImpactStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "impact-snapshot",
		className: "border-b border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-12 md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "impact-snapshot",
					className: "eyebrow font-sans text-muted-foreground",
					children: "Impact snapshot"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrototypeTag, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10",
				children: headlineStats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 90,
					className: "border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 lg:first:border-l-0 lg:first:pl-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, {
						stat,
						size: "lg"
					})
				}, stat.id))
			})]
		})
	});
}
/** Section 3 — the challenge. Six connected causes. */
function ChallengeGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "challenge",
		className: "border-b border-border bg-secondary/45",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "The challenge",
				title: "The challenges are connected.",
				description: "A child out of school and a household without stable income are rarely separate problems. We work across six causes because communities do not experience them one at a time."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
				children: causes.map((cause, index) => {
					const Icon = resolveIcon(cause.icon);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 70,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/our-work",
							search: { cause: cause.id },
							className: "group flex h-full flex-col bg-background p-7 transition-colors duration-500 hover:bg-primary md:p-9",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										"aria-hidden": "true",
										className: "size-6 text-primary transition-colors duration-500 group-hover:text-accent",
										strokeWidth: 1.25
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular text-xs text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/50",
										children: [cause.programmeCount, " programmes"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display-md mt-8 text-primary transition-colors duration-500 group-hover:text-primary-foreground",
									children: cause.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/75",
									children: cause.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-7 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-primary transition-colors duration-500 group-hover:text-accent",
									children: ["Explore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										"aria-hidden": "true",
										className: "size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									})]
								})
							]
						})
					}) }, cause.id);
				})
			})]
		})
	});
}
function ProgrammeCard({ programme, layout = "standard", delay = 0 }) {
	const isFeature = layout === "feature";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay,
		className: "h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: cn("group flex h-full flex-col overflow-hidden border border-border bg-card transition-colors duration-500 hover:border-border-strong", isFeature && "md:grid md:grid-cols-2 md:items-stretch"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("relative overflow-hidden", isFeature ? "md:order-2" : ""),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: programme.image,
					alt: programme.imageAlt,
					width: 1536,
					height: 1024,
					loading: "lazy",
					decoding: "async",
					className: cn("size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]", isFeature ? "aspect-[4/3] md:aspect-auto md:min-h-[26rem]" : "aspect-[16/10]")
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex flex-1 flex-col p-7 md:p-9", isFeature && "md:order-1 md:p-12"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-accent",
						children: programme.categoryLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: cn("mt-4 text-primary", isFeature ? "display-lg" : "display-md"),
						children: programme.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 flex-1 text-sm leading-relaxed text-muted-foreground",
						children: isFeature ? programme.summary : programme.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-7 grid grid-cols-2 gap-5 border-t border-border pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[0.6875rem] tracking-[0.1em] text-muted-foreground uppercase",
								children: programme.headlineMetric.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "tabular mt-2 font-[family-name:var(--font-display)] text-2xl text-primary",
								children: programme.headlineMetric.value
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[0.6875rem] tracking-[0.1em] text-muted-foreground uppercase",
								children: "Location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "mt-2 flex items-start gap-1.5 text-sm text-foreground/85",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									"aria-hidden": "true",
									className: "mt-0.5 size-3.5 shrink-0 text-sage"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: programme.geography.slice(0, 2).join(", ") })]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/programmes/$slug",
						params: { slug: programme.slug },
						className: "mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary link-underline",
						children: ["View programme", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							"aria-hidden": "true",
							className: "size-4 transition-transform duration-300 group-hover:translate-x-1"
						})]
					})
				]
			})]
		})
	});
}
function Home() {
	const [lead, ...rest] = featuredProgrammes;
	const homeStories = stories.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeHero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChallengeGrid, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApproachSteps, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactAtlas, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "programmes",
			className: "border-b border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-20 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Featured programmes",
					title: "Where we turn intention into action.",
					description: "Five flagship programmes, each with a named problem, a defined approach and a published indicator.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/our-work",
						variant: "outline",
						children: "All programmes"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 space-y-6",
					children: [lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammeCard, {
						programme: lead,
						layout: "feature"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: rest.map((programme, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammeCard, {
							programme,
							delay: index * 80
						}, programme.slug))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "stories",
			className: "border-b border-border bg-secondary/45",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-20 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Stories of change",
					title: "One story. One turning point.",
					description: "Demo stories written for this prototype. Composite accounts, no real individual is identified.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/stories",
						variant: "outline",
						children: "All stories"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 space-y-6",
					children: [homeStories[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
						story: homeStories[0],
						layout: "wide"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-2",
						children: homeStories.slice(1).map((story, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
							story,
							delay: index * 90
						}, story.slug))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyTimeline, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactDashboard, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransparencySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathwayGrid, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { Home as component };
