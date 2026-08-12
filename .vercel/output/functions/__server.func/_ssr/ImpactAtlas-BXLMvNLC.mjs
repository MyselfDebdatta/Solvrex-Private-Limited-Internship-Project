import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as ArrowRight, t as X } from "../_libs/lucide-react.mjs";
import { f as cn, v as programmeBySlug } from "./router-CiBZnEbp.mjs";
import { t as SectionHeading } from "./SectionHeading-B9xyrqbv.mjs";
import { n as PrototypeTag } from "./PrototypeTag-DQWf9w8G.mjs";
import { t as formatNumber } from "./format-D7yerbPi.mjs";
import { n as causeMap, t as causeFilters } from "./causes-BywuGHaw.mjs";
import { n as Geographies, r as Geography$1, t as ComposableMap } from "../_libs/react-simple-maps+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ImpactAtlas-BXLMvNLC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Stylised atlas geometry. `x` / `y` position each state marker inside the
* 0–500 × 0–560 viewBox used by the Impact Atlas map, and are intentionally
* schematic rather than cartographically precise.
*/
var stateImpacts = [
	{
		id: "rajasthan",
		name: "Rajasthan",
		region: "North West",
		x: 152,
		y: 186,
		causes: ["healthcare", "livelihood"],
		programmes: 3,
		communities: 4,
		peopleReached: 96e3,
		featuredProgrammeSlug: "project-arogya",
		description: "Screening rounds and referral navigation across arid habitations, alongside artisan collectives in two districts."
	},
	{
		id: "gujarat",
		name: "Gujarat",
		region: "West",
		x: 118,
		y: 254,
		causes: ["livelihood"],
		programmes: 2,
		communities: 2,
		peopleReached: 54e3,
		featuredProgrammeSlug: "project-jeevika",
		description: "Producer collectives in Kutch working through formal buyer agreements and shared working capital."
	},
	{
		id: "uttar-pradesh",
		name: "Uttar Pradesh",
		region: "North",
		x: 233,
		y: 182,
		causes: ["education", "women-youth"],
		programmes: 4,
		communities: 5,
		peopleReached: 168e3,
		featuredProgrammeSlug: "project-udaan",
		description: "The largest learning centre cluster in the network, with youth councils seated on district programme reviews."
	},
	{
		id: "bihar",
		name: "Bihar",
		region: "East",
		x: 294,
		y: 206,
		causes: [
			"education",
			"women-youth",
			"emergency"
		],
		programmes: 4,
		communities: 4,
		peopleReached: 174e3,
		featuredProgrammeSlug: "project-saksham",
		description: "Youth councils hold a formal decision role here, including the authority to reallocate a programme cycle."
	},
	{
		id: "jharkhand",
		name: "Jharkhand",
		region: "East",
		x: 292,
		y: 244,
		causes: ["education"],
		programmes: 2,
		communities: 2,
		peopleReached: 62e3,
		featuredProgrammeSlug: "project-udaan",
		description: "Learning centres focused on the class 10 to 12 transition, with scholarship accompaniment."
	},
	{
		id: "west-bengal",
		name: "West Bengal",
		region: "East",
		x: 330,
		y: 240,
		causes: ["livelihood", "emergency"],
		programmes: 3,
		communities: 3,
		peopleReached: 88e3,
		featuredProgrammeSlug: "project-jeevika",
		description: "Collectives linked to institutional buyers, plus cyclone-season relief pre-positioning in coastal blocks."
	},
	{
		id: "assam",
		name: "Assam",
		region: "North East",
		x: 390,
		y: 196,
		causes: ["healthcare", "emergency"],
		programmes: 3,
		communities: 3,
		peopleReached: 71e3,
		featuredProgrammeSlug: "project-sahaay",
		description: "Flood response with joint damage assessment, and a nine-month recovery caseload after the emergency phase."
	},
	{
		id: "madhya-pradesh",
		name: "Madhya Pradesh",
		region: "Central",
		x: 206,
		y: 248,
		causes: ["healthcare", "environment"],
		programmes: 3,
		communities: 4,
		peopleReached: 142e3,
		featuredProgrammeSlug: "project-arogya",
		description: "Health worker network covering habitations more than 10 km from a health centre, with watershed work alongside."
	},
	{
		id: "odisha",
		name: "Odisha",
		region: "East",
		x: 290,
		y: 292,
		causes: [
			"education",
			"women-youth",
			"emergency"
		],
		programmes: 5,
		communities: 6,
		peopleReached: 196e3,
		featuredProgrammeSlug: "project-udaan",
		description: "Where Aaroha began. Deepest programme mix in the network and the longest measurement series."
	},
	{
		id: "maharashtra",
		name: "Maharashtra",
		region: "West",
		x: 172,
		y: 312,
		causes: ["healthcare", "environment"],
		programmes: 3,
		communities: 3,
		peopleReached: 118e3,
		featuredProgrammeSlug: "project-dharti",
		description: "Participatory watershed restoration with village commons committees monitoring sapling survival themselves."
	},
	{
		id: "karnataka",
		name: "Karnataka",
		region: "South",
		x: 188,
		y: 392,
		causes: ["livelihood", "environment"],
		programmes: 2,
		communities: 3,
		peopleReached: 74e3,
		featuredProgrammeSlug: "project-dharti",
		description: "Climate-resilient cropping demonstrations on farmer-owned plots, with collectives aggregating produce."
	},
	{
		id: "tamil-nadu",
		name: "Tamil Nadu",
		region: "South",
		x: 222,
		y: 452,
		causes: ["women-youth"],
		programmes: 2,
		communities: 2,
		peopleReached: 58e3,
		featuredProgrammeSlug: "project-saksham",
		description: "Leadership fellowships with a focus on placing fellows into local governance and school management roles."
	}
];
var geoUrl = "/data/india-states.geojson";
/**
* IMPACT ATLAS — the signature surface. A stylised, filterable India map with a
* detail panel. Fully keyboard operable: every marker is a real button.
*/
function ImpactAtlas({ heading = "Change is happening across India." }) {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [selectedId, setSelectedId] = (0, import_react.useState)("odisha");
	const [hoveredState, setHoveredState] = (0, import_react.useState)(null);
	const visible = (0, import_react.useMemo)(() => stateImpacts.filter((state) => filter === "all" || state.causes.includes(filter)), [filter]);
	const selected = visible.find((state) => state.id === selectedId) ?? null;
	const featured = selected ? programmeBySlug(selected.featuredProgrammeSlug) : void 0;
	const totals = visible.reduce((acc, state) => ({
		people: acc.people + state.peopleReached,
		programmes: acc.programmes + state.programmes
	}), {
		people: 0,
		programmes: 0
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "impact-atlas",
		className: "border-b border-border bg-primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Impact Atlas",
					tone: "inverse",
					title: heading,
					description: "Filter by cause, then select a state to see what is running there. Built as an impact intelligence surface with geographically accurate boundaries.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrototypeTag, { tone: "inverse" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "group",
					"aria-label": "Filter the atlas by cause",
					className: "mt-12 flex flex-wrap gap-2",
					children: causeFilters.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": filter === option.id,
						onClick: () => setFilter(option.id),
						className: cn("min-h-11 border px-4 text-[0.8125rem] transition-colors", filter === option.id ? "border-accent bg-accent text-accent-foreground" : "border-primary-foreground/25 text-primary-foreground/75 hover:border-primary-foreground/60 hover:text-primary-foreground"),
						children: option.label
					}, option.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14 relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative bg-primary-deep/20 rounded-md p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComposableMap, {
								projection: "geoMercator",
								projectionConfig: {
									scale: 1150,
									center: [82.5, 22.5]
								},
								width: 600,
								height: 650,
								className: "w-[90%] mx-auto focus:outline-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Geographies, {
									geography: geoUrl,
									children: ({ geographies }) => geographies.map((geo) => {
										const stateName = geo.properties.NAME_1;
										const stateImpact = stateImpacts.find((s) => s.name.toLowerCase() === stateName?.toLowerCase());
										const isVisible = stateImpact ? visible.some((item) => item.id === stateImpact.id) : false;
										const isActive = stateImpact ? selected?.id === stateImpact.id : false;
										stateImpact && stateImpact.id;
										let fill = "color-mix(in oklab, var(--color-primary-foreground) 6%, transparent)";
										if (isVisible) fill = "color-mix(in oklab, var(--color-primary-foreground) 30%, transparent)";
										if (isActive) fill = "var(--color-accent)";
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Geography$1, {
											geography: geo,
											tabIndex: isVisible ? 0 : -1,
											role: "button",
											"aria-label": stateImpact ? `${stateImpact.name}: ${stateImpact.programmes} programmes, ${formatNumber(stateImpact.peopleReached)} people reached` : stateName,
											"aria-pressed": isActive,
											onClick: () => {
												if (isVisible && stateImpact) setSelectedId(stateImpact.id);
											},
											onKeyDown: (event) => {
												if (event.key === "Enter" || event.key === " ") {
													event.preventDefault();
													if (isVisible && stateImpact) setSelectedId(stateImpact.id);
												}
											},
											onMouseEnter: () => {
												if (stateImpact) setHoveredState(stateImpact.id);
											},
											onMouseLeave: () => {
												setHoveredState(null);
											},
											style: {
												default: {
													fill,
													stroke: "color-mix(in oklab, var(--color-primary-foreground) 20%, transparent)",
													strokeWidth: .5,
													outline: "none",
													transition: "fill 250ms"
												},
												hover: {
													fill: isActive ? "var(--color-accent)" : isVisible ? "color-mix(in oklab, var(--color-primary-foreground) 45%, transparent)" : "color-mix(in oklab, var(--color-primary-foreground) 10%, transparent)",
													stroke: "color-mix(in oklab, var(--color-primary-foreground) 40%, transparent)",
													strokeWidth: .5,
													outline: "none",
													cursor: isVisible ? "pointer" : "default"
												},
												pressed: {
													fill: "var(--color-accent)",
													outline: "none"
												}
											}
										}, geo.rsmKey);
									})
								})
							}),
							hoveredState && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute bottom-4 left-4 right-4 text-center md:top-4 md:bottom-auto z-10 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-background/95 text-foreground px-4 py-2 rounded-sm shadow-md text-sm border border-border inline-block",
									children: [stateImpacts.find((s) => s.id === hoveredState)?.name, visible.some((s) => s.id === hoveredState) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-xs text-muted-foreground mt-0.5",
										children: [stateImpacts.find((s) => s.id === hoveredState)?.programmes, " Programmes"]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-center text-[0.625rem] tracking-wider uppercase text-primary-foreground/50",
								children: "PROTOTYPE IMPACT DATA - NOT REAL STATISTICS"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-px border border-primary-foreground/15 bg-primary-foreground/15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-primary p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "tabular font-[family-name:var(--font-display)] text-3xl text-primary-foreground",
									children: formatNumber(totals.people)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-primary-foreground/60",
									children: "People reached in this filter"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-primary p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "tabular font-[family-name:var(--font-display)] text-3xl text-primary-foreground",
									children: totals.programmes
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-primary-foreground/60",
									children: [
										"Programme deployments · ",
										visible.length,
										" states"
									]
								})]
							})]
						}), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "mt-6 flex-1 border border-primary-foreground/15 bg-primary-deep p-6 md:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow text-accent",
											children: selected.region
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "display-lg mt-2 text-primary-foreground",
											children: selected.name
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSelectedId(null),
										"aria-label": `Clear ${selected.name} selection`,
										className: "grid min-h-11 min-w-11 shrink-0 place-items-center border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
											"aria-hidden": "true",
											className: "size-4"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-7 grid grid-cols-3 gap-4 border-y border-primary-foreground/15 py-5",
									children: [
										{
											label: "Programmes",
											value: String(selected.programmes)
										},
										{
											label: "Communities",
											value: String(selected.communities)
										},
										{
											label: "People reached",
											value: formatNumber(selected.peopleReached)
										}
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-[0.6875rem] tracking-[0.1em] text-primary-foreground/50 uppercase",
											children: item.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "tabular mt-2 font-[family-name:var(--font-display)] text-xl text-primary-foreground",
											children: item.value
										})]
									}, item.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm leading-relaxed text-primary-foreground/75",
									children: selected.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 flex flex-wrap gap-2",
									children: selected.causes.map((cause) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "border border-primary-foreground/20 px-3 py-1 text-xs text-primary-foreground/70",
										children: causeMap[cause].label
									}, cause))
								}),
								featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 border-t border-primary-foreground/15 pt-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow text-primary-foreground/50",
											children: "Featured programme"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "display-md mt-2 text-primary-foreground",
											children: featured.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-primary-foreground/70",
											children: featured.tagline
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/programmes/$slug",
											params: { slug: featured.slug },
											className: "mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent link-underline",
											children: ["Explore impact", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												"aria-hidden": "true",
												className: "size-4"
											})]
										})
									]
								}) : null
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-1 items-center justify-center border border-dashed border-primary-foreground/20 p-10 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xs text-sm text-primary-foreground/60",
								children: "Select a state on the map to see its programmes, coverage and featured work."
							})
						})]
					})]
				})
			]
		})
	});
}
//#endregion
export { ImpactAtlas as t };
