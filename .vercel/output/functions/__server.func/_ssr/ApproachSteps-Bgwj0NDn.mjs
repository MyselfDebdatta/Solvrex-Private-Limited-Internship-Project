import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as useInView, f as cn } from "./router-CiBZnEbp.mjs";
import { t as SectionHeading } from "./SectionHeading-B9xyrqbv.mjs";
import { r as approachSteps } from "./Participation-CpQmnhQu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ApproachSteps-Bgwj0NDn.js
var import_jsx_runtime = require_jsx_runtime();
/** Section 4 — five-step approach with a progress rail that draws on scroll. */
function ApproachSteps() {
	const { ref, inView } = useInView("-15% 0px");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "approach",
		className: "border-b border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our approach",
				title: "From listening to lasting change.",
				description: "Five stages, in order, with an explicit condition for moving from one to the next. Programmes that cannot clear a stage are redesigned rather than expanded."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				ref,
				className: "relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "absolute top-3 left-0 hidden h-px w-full bg-border md:block"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: cn("absolute top-3 left-0 hidden h-px origin-left bg-accent transition-transform duration-[1600ms] ease-out md:block md:w-full", inView ? "scale-x-100" : "scale-x-0")
					}),
					approachSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative md:pt-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: cn("absolute top-1.5 left-0 hidden size-3 rounded-full border-2 border-background bg-primary transition-all duration-700 md:block", inView ? "scale-100 opacity-100" : "scale-0 opacity-0"),
								style: { transitionDelay: `${300 + index * 220}ms` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "tabular font-[family-name:var(--font-display)] text-2xl text-accent",
								children: step.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display-md mt-3 text-primary",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-foreground/80",
								children: step.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 border-t border-border pt-3 text-[0.8125rem] leading-relaxed text-muted-foreground",
								children: step.detail
							})
						]
					}, step.number))
				]
			})]
		})
	});
}
//#endregion
export { ApproachSteps as t };
