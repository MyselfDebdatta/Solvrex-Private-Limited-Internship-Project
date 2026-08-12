import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, d as MapPin } from "../_libs/lucide-react.mjs";
import { c as PROTOTYPE_NOTE, h as stories, r as Route$2, s as ActionLink, y as programmes } from "./router-CiBZnEbp.mjs";
import { t as Reveal } from "./Reveal-YfJFdh_E.mjs";
import { t as SectionHeading } from "./SectionHeading-B9xyrqbv.mjs";
import { t as PrototypeNotice } from "./PrototypeTag-DQWf9w8G.mjs";
import { t as FinalCta } from "./Participation-CpQmnhQu.mjs";
import { n as causeMap } from "./causes-BywuGHaw.mjs";
import { t as StoryCard } from "./StoryCard-C7qGOnS3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programmes._slug-Cg4YhO--.js
var import_jsx_runtime = require_jsx_runtime();
function ProgrammeDetail() {
	const { programme } = Route$2.useLoaderData();
	const cause = causeMap[programme.cause];
	const related = stories.filter((story) => story.programmeSlug === programme.slug).slice(0, 3);
	const otherProgrammes = programmes.filter((item) => item.slug !== programme.slug && item.cause !== programme.cause).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border bg-secondary/60 pt-28 pb-14 md:pt-36 md:pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shell",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/our-work",
							className: "inline-flex items-center gap-2 text-sm text-muted-foreground link-underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								"aria-hidden": "true",
								className: "size-4"
							}), "All programmes"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mt-8 text-accent",
							children: programme.categoryLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-hero mt-5 max-w-4xl text-balance text-primary",
							children: programme.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede mt-6 max-w-2xl",
							children: programme.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									"aria-hidden": "true",
									className: "size-4 text-sage"
								}), programme.geography.join(" · ")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Running since ", programme.startedYear] })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: programme.image,
				alt: programme.imageAlt,
				width: 1280,
				height: 720,
				className: "aspect-[16/9] w-full object-cover md:aspect-[21/9]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-labelledby": "programme-metrics",
				className: "border-b border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shell py-14 md:py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "programme-metrics",
							className: "sr-only",
							children: "Programme metrics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
							children: [programme.headlineMetric, ...programme.metrics].slice(0, 4).map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-background p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "display-lg tabular text-primary",
									children: metric.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: metric.label
								})]
							}, metric.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 max-w-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Current programme cycle"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular font-medium text-primary",
									children: [programme.progress, "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								role: "progressbar",
								"aria-valuenow": programme.progress,
								"aria-valuemin": 0,
								"aria-valuemax": 100,
								"aria-label": `${programme.name} cycle progress`,
								className: "mt-3 h-1.5 w-full bg-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-accent",
									style: { width: `${programme.progress}%` }
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrototypeNotice, {
							className: "mt-10",
							children: PROTOTYPE_NOTE
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[11px] top-4 bottom-12 w-px bg-border md:left-[15px]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "relative pl-10 md:pl-14 pb-14 md:pb-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-0 top-1.5 size-6 rounded-full border border-primary bg-background grid place-items-center md:size-8 md:top-0 text-xs font-medium text-primary",
									children: "01"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "eyebrow text-muted-foreground",
									children: "The Challenge"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 display-md leading-relaxed text-primary",
									children: programme.problem
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 80,
							className: "relative pl-10 md:pl-14 pb-14 md:pb-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-0 top-1.5 size-6 rounded-full border border-border bg-background grid place-items-center md:size-8 md:top-0 text-xs font-medium text-muted-foreground",
									children: "02"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "eyebrow text-muted-foreground",
									children: "The Response"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 text-base leading-relaxed text-foreground/85",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: programme.tagline }),
										" — ",
										programme.approach[0]
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 120,
							className: "relative pl-10 md:pl-14 pb-14 md:pb-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-0 top-1.5 size-6 rounded-full border border-border bg-background grid place-items-center md:size-8 md:top-0 text-xs font-medium text-muted-foreground",
									children: "03"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "eyebrow text-muted-foreground",
									children: "The Work"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-4",
									children: programme.approach.slice(1).map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-1.5 rounded-full bg-accent mt-2 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm leading-relaxed text-foreground/85",
											children: step
										})]
									}, step))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 160,
							className: "relative pl-10 md:pl-14 pb-14 md:pb-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-0 top-1.5 size-6 rounded-full border border-border bg-background grid place-items-center md:size-8 md:top-0 text-xs font-medium text-muted-foreground",
									children: "04"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "eyebrow text-muted-foreground",
									children: "The Outcome"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 border border-border bg-secondary/45 p-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm leading-relaxed text-foreground/85",
										children: [
											"Currently serving ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-primary",
												children: programme.beneficiaries
											}),
											" across ",
											programme.geography.length,
											" regions. We are at ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
												className: "text-primary",
												children: [programme.progress, "%"]
											}),
											" of our intended goal for the current cycle."
										]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 200,
							className: "relative pl-10 md:pl-14",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-0 top-1.5 size-6 rounded-full border border-accent bg-background grid place-items-center md:size-8 md:top-0 text-xs font-medium text-accent",
									children: "05"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "eyebrow text-accent",
									children: "The Indicator"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-6 grid gap-px border border-border bg-border sm:grid-cols-2",
									children: programme.metrics.map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-background p-6 transition-colors hover:border-accent",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-sm text-muted-foreground",
											children: metric.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "display-md tabular mt-2 text-primary",
											children: metric.value
										})]
									}, metric.label))
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-8 lg:sticky lg:top-28 lg:self-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border bg-card p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-muted-foreground",
								children: "At a glance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-5 space-y-5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Cause"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-foreground",
										children: cause?.label ?? programme.categoryLabel
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Who it serves"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-foreground",
										children: programme.beneficiaries
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Where it runs"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-foreground",
										children: programme.geography.join(", ")
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: "Headline metric"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "mt-1 text-foreground",
										children: [
											programme.headlineMetric.value,
											" · ",
											programme.headlineMetric.label
										]
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-col gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
									to: "/donate",
									search: { cause: programme.cause },
									variant: "primary",
									children: "Support this programme"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
									to: "/get-involved",
									variant: "outline",
									children: "Volunteer or partner"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border bg-secondary/60 p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-muted-foreground",
							children: "Related causes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3 text-sm",
							children: otherProgrammes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/programmes/$slug",
								params: { slug: item.slug },
								className: "link-underline text-foreground",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted-foreground",
								children: item.categoryLabel
							})] }, item.slug))
						})]
					})]
				})]
			})
		] }),
		related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "programme-stories",
			className: "border-t border-border bg-secondary/45",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Stories",
					title: "From this programme",
					description: "Demo stories written for this prototype."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: related.map((story, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
						story,
						delay: index * 70
					}) }, story.slug))
				})]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { ProgrammeDetail as component };
