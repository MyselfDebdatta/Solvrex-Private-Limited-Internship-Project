import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { o as Search, t as X } from "../_libs/lucide-react.mjs";
import { f as cn, g as storyFilters, h as stories, p as featuredStory } from "./router-CiBZnEbp.mjs";
import { t as PageHero } from "./PageHero-DbLg5ZOa.mjs";
import { t as SectionHeading } from "./SectionHeading-B9xyrqbv.mjs";
import { t as FinalCta } from "./Participation-CpQmnhQu.mjs";
import { t as StoryCard } from "./StoryCard-C7qGOnS3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stories.index-DOpHGC_8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StoriesPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => {
		const term = query.trim().toLowerCase();
		return stories.filter((story) => {
			const matchesFilter = filter === "all" || story.cause === filter;
			const matchesTerm = term.length === 0 || [
				story.title,
				story.excerpt,
				story.person,
				story.location
			].join(" ").toLowerCase().includes(term);
			return matchesFilter && matchesTerm;
		});
	}, [filter, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Stories",
			title: "One story. One turning point.",
			description: "Demo stories written for this prototype. Composite accounts based on programme patterns; no real individual is identified."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "featured-story",
			className: "border-b border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-16 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "featured-story",
					className: "eyebrow text-accent",
					children: "Featured story"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
						story: featuredStory,
						layout: "wide"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "story-archive",
			className: "bg-secondary/45",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Archive",
						title: "All stories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "group",
							"aria-label": "Filter stories by category",
							className: "flex flex-wrap gap-2",
							children: storyFilters.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": filter === option.id,
								onClick: () => setFilter(option.id),
								className: cn("min-h-11 border px-4 text-[0.8125rem] transition-colors", filter === option.id ? "border-primary bg-primary text-primary-foreground" : "border-border-strong text-muted-foreground hover:border-primary hover:text-primary"),
								children: option.label
							}, option.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative lg:w-72",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "story-search",
									className: "sr-only",
									children: "Search stories"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									"aria-hidden": "true",
									className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "story-search",
									type: "search",
									value: query,
									onChange: (event) => setQuery(event.target.value),
									placeholder: "Search stories",
									className: "min-h-11 w-full border border-border bg-card pl-9 pr-9 text-sm placeholder:text-muted-foreground focus-visible:border-primary"
								}),
								query ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setQuery(""),
									"aria-label": "Clear search",
									className: "absolute top-1/2 right-2 grid size-7 -translate-y-1/2 place-items-center text-muted-foreground hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
										"aria-hidden": "true",
										className: "size-4"
									})
								}) : null
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						role: "status",
						className: "mt-6 text-sm text-muted-foreground",
						children: [
							results.length,
							" ",
							results.length === 1 ? "story" : "stories",
							" shown"
						]
					}),
					results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 border border-dashed border-border-strong p-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "display-md text-primary",
								children: "Nothing matches that search"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Try a different category or clear the search term."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setQuery("");
									setFilter("all");
								},
								className: "mt-6 min-h-11 border border-primary px-5 text-sm font-medium text-primary",
								children: "Reset filters"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: results.map((story, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {
							story,
							delay: index * 60
						}) }, story.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { StoriesPage as component };
