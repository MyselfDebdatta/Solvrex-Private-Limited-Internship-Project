import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowLeft, C as Clock, d as MapPin } from "../_libs/lucide-react.mjs";
import { h as stories, m as formatStoryDate, n as Route, s as ActionLink, v as programmeBySlug } from "./router-DD5dsP7n.mjs";
import { t as Reveal } from "./Reveal-BDLJwfSO.mjs";
import { t as StoryCard } from "./StoryCard-BpNt-B1W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stories._slug-ujf18BFT.js
var import_jsx_runtime = require_jsx_runtime();
function StoryDetail() {
	const { story } = Route.useLoaderData();
	const programme = programmeBySlug(story.programmeSlug);
	const related = stories.filter((item) => item.slug !== story.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border bg-secondary/60 pt-28 pb-14 md:pt-36 md:pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell-narrow",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/stories",
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground link-underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							"aria-hidden": "true",
							className: "size-4"
						}), "All stories"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-8 text-accent",
						children: story.categoryLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-hero mt-5 text-balance text-primary",
						children: story.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: story.person
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									"aria-hidden": "true",
									className: "size-4 text-sage"
								}), story.location]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
								dateTime: story.date,
								children: formatStoryDate(story.date)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
										"aria-hidden": "true",
										className: "size-4"
									}),
									story.readingMinutes,
									" min read"
								]
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: story.image,
			alt: story.imageAlt,
			width: 1280,
			height: 1024,
			className: "aspect-[16/9] w-full object-cover"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell-narrow py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-16",
					children: [
						{
							label: "Context",
							value: story.body[0]
						},
						{
							label: "The Challenge",
							value: story.body[1]
						},
						{
							label: "The Turning Point",
							value: story.body[2]
						},
						{
							label: "The Change",
							value: story.body[3]
						}
					].map((section, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: index * 100,
						className: "relative md:grid md:grid-cols-[10rem_1fr] md:gap-12 lg:grid-cols-[14rem_1fr]",
						children: [
							index < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute left-[1.1875rem] top-12 bottom-[-4rem] w-px bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 md:items-start md:gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-10 rounded-full border border-primary text-primary flex items-center justify-center text-sm font-medium bg-background relative z-10 shrink-0",
									children: String(index + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "eyebrow text-accent md:mt-2.5",
									children: section.label
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 md:mt-1.5 border-l-2 border-border pl-6 md:border-none md:pl-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[1.125rem] leading-relaxed text-primary/90",
									children: section.value
								})
							})
						]
					}, section.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mt-20 border-l-4 border-accent bg-secondary/45 p-8 md:p-12 relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-4 -left-4 text-9xl text-border/50 font-serif leading-none",
							"aria-hidden": "true",
							children: "“"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "display-lg text-primary relative z-10",
							children: [
								"“",
								story.quote,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "mt-8 text-sm text-muted-foreground font-medium relative z-10",
							children: ["— ", story.quoteAttribution]
						})
					]
				}),
				programme ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 border border-border bg-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-muted-foreground",
							children: "Programme behind this story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-md mt-3 text-primary",
							children: programme.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: programme.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
							to: "/programmes/$slug",
							params: { slug: programme.slug },
							variant: "outline",
							className: "mt-6",
							children: "View programme"
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground",
					children: "This is a demo story written for a prototype. Names, quotes and details are fictional composites and do not describe an identifiable individual."
				})
			]
		})
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "related",
		className: "border-t border-border bg-secondary/45",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "related",
				className: "display-lg text-primary",
				children: "More stories"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-6 md:grid-cols-3",
				children: related.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
					story: item,
					delay: index * 70
				}) }, item.slug))
			})]
		})
	})] });
}
//#endregion
export { StoryDetail as component };
