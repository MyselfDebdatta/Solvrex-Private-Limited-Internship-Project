import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Search, t as X } from "../_libs/lucide-react.mjs";
import { c as PROTOTYPE_NOTE, f as cn, i as Route$5, y as programmes } from "./router-DD5dsP7n.mjs";
import { t as Reveal } from "./Reveal-BDLJwfSO.mjs";
import { t as PageHero } from "./PageHero-CEN8S2jE.mjs";
import { t as PrototypeNotice } from "./PrototypeTag-CD38QlPj.mjs";
import { t as FinalCta } from "./Participation-HwWrAfyt.mjs";
import { t as causeFilters } from "./causes-BywuGHaw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-work-TZNdWN5x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OurWorkPage() {
	const { cause } = Route$5.useSearch();
	const navigate = Route$5.useNavigate();
	const [query, setQuery] = (0, import_react.useState)("");
	const active = cause ?? "all";
	const results = (0, import_react.useMemo)(() => {
		const term = query.trim().toLowerCase();
		return programmes.filter((programme) => {
			const matchesCause = active === "all" || programme.cause === active;
			const matchesTerm = term.length === 0 || [
				programme.name,
				programme.summary,
				programme.categoryLabel,
				...programme.geography
			].join(" ").toLowerCase().includes(term);
			return matchesCause && matchesTerm;
		});
	}, [active, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our work",
			title: "Eighteen programmes, six connected causes.",
			description: "Each programme states the problem it is responding to, how it works, where it runs and how far through its current cycle it is.",
			meta: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrototypeNotice, { children: PROTOTYPE_NOTE })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "programme-explorer",
			className: "bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-14 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "programme-explorer",
						className: "sr-only",
						children: "Programme explorer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "group",
							"aria-label": "Filter programmes by cause",
							className: "flex flex-wrap gap-2",
							children: causeFilters.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": active === option.id,
								onClick: () => navigate({
									search: option.id === "all" ? {} : { cause: option.id },
									resetScroll: false
								}),
								className: cn("min-h-11 border px-4 text-[0.8125rem] transition-colors", active === option.id ? "border-primary bg-primary text-primary-foreground" : "border-border-strong text-muted-foreground hover:border-primary hover:text-primary"),
								children: option.label
							}, option.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative lg:w-72",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "programme-search",
									className: "sr-only",
									children: "Search programmes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									"aria-hidden": "true",
									className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "programme-search",
									type: "search",
									value: query,
									onChange: (event) => setQuery(event.target.value),
									placeholder: "Search by name or state",
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
							results.length === 1 ? "programme" : "programmes",
							" shown"
						]
					}),
					results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 border border-dashed border-border-strong p-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "display-md text-primary",
								children: "No programmes match those filters"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Try a different cause, or clear the search term."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setQuery("");
									navigate({
										search: {},
										resetScroll: false
									});
								},
								className: "mt-6 min-h-11 border border-primary px-5 text-sm font-medium text-primary",
								children: "Reset filters"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid gap-px border border-border bg-border lg:grid-cols-2",
						children: results.map((programme, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: index * 60,
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex h-full flex-col bg-background",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: programme.image,
									alt: programme.imageAlt,
									width: 1536,
									height: 1024,
									loading: "lazy",
									decoding: "async",
									className: "aspect-[16/9] w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col p-8 md:p-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow text-accent",
											children: programme.categoryLabel
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "display-lg mt-3 text-primary",
											children: programme.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm leading-relaxed text-muted-foreground",
											children: programme.summary
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
											className: "mt-7 space-y-4 border-t border-border pt-6 text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "eyebrow text-muted-foreground",
													children: "Problem"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
													className: "mt-2 leading-relaxed text-foreground/85",
													children: [programme.problem.split(". ")[0], "."]
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid grid-cols-2 gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
														className: "eyebrow text-muted-foreground",
														children: "Geography"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "mt-2 text-foreground/85",
														children: programme.geography.join(", ")
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
														className: "eyebrow text-muted-foreground",
														children: "Who it serves"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: "mt-2 text-foreground/85",
														children: programme.beneficiaries
													})] })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "eyebrow text-muted-foreground",
													children: programme.headlineMetric.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
													className: "tabular mt-2 font-[family-name:var(--font-display)] text-2xl text-primary",
													children: programme.headlineMetric.value
												})] })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between text-xs text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Current cycle progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "tabular",
													children: [programme.progress, "%"]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-2 h-1.5 w-full bg-muted",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full bg-sage",
													style: { width: `${programme.progress}%` }
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/programmes/$slug",
											params: { slug: programme.slug },
											className: "mt-8 inline-flex min-h-11 items-center justify-center rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep",
											children: ["Explore ", programme.name]
										})
									]
								})]
							})
						}) }, programme.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { OurWorkPage as component };
