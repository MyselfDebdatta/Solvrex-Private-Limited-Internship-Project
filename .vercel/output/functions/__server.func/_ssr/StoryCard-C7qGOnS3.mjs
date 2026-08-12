import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Clock, d as MapPin, k as ArrowRight } from "../_libs/lucide-react.mjs";
import { f as cn, m as formatStoryDate } from "./router-CiBZnEbp.mjs";
import { t as Reveal } from "./Reveal-YfJFdh_E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StoryCard-C7qGOnS3.js
var import_jsx_runtime = require_jsx_runtime();
function StoryCard({ story, layout = "standard", delay = 0 }) {
	const isWide = layout === "wide";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay,
		className: "h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: cn("group flex h-full flex-col overflow-hidden border border-border bg-card", isWide && "lg:grid lg:grid-cols-[1.15fr_1fr]"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: story.image,
				alt: story.imageAlt,
				width: 1280,
				height: 1024,
				loading: "lazy",
				decoding: "async",
				className: cn("w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]", isWide ? "aspect-[16/10] lg:h-full lg:aspect-auto" : "aspect-[16/10]")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex flex-1 flex-col p-7", isWide && "lg:p-10"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-accent",
								children: story.categoryLabel
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
										className: "size-3.5"
									}),
									story.readingMinutes,
									" min read"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: cn("mt-4 text-primary", isWide ? "display-lg" : "display-md"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/stories/$slug",
							params: { slug: story.slug },
							className: "link-underline",
							children: story.title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 flex-1 text-sm leading-relaxed text-muted-foreground",
						children: story.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium text-foreground",
								children: story.person
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 flex items-center gap-1.5 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									"aria-hidden": "true",
									className: "size-3.5 shrink-0 text-sage"
								}), story.location]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/stories/$slug",
							params: { slug: story.slug },
							className: "inline-flex items-center gap-2 text-sm font-medium text-primary link-underline",
							"aria-label": `Read the full story: ${story.title}`,
							children: ["Read", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								"aria-hidden": "true",
								className: "size-4"
							})]
						})]
					})
				]
			})]
		})
	});
}
//#endregion
export { StoryCard as t };
