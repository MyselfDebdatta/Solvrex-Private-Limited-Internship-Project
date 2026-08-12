import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as FileText, p as Lock } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-BDLJwfSO.mjs";
import { t as SectionHeading } from "./SectionHeading-Bxe7Ep5B.mjs";
import { r as reports } from "./reports-CrUJoGKN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TransparencyGrid-DXMjP0q4.js
var import_jsx_runtime = require_jsx_runtime();
/** TRUST & TRANSPARENCY HUB — document cards, honest about being placeholders. */
function TransparencyGrid({ kinds, compact = false }) {
	const visible = kinds ? reports.filter((report) => kinds.includes(report.kind)) : reports;
	const shown = compact ? visible.slice(0, 6) : visible;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
		children: shown.map((report, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: index * 60,
			className: "h-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "flex h-full flex-col bg-background p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							"aria-hidden": "true",
							className: "size-5 text-primary",
							strokeWidth: 1.25
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular text-xs text-muted-foreground",
							children: report.year
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-6 text-accent",
						children: report.kindLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "display-md mt-2 text-primary",
						children: report.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
						children: report.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
								"aria-hidden": "true",
								className: "size-3.5 shrink-0"
							}),
							"Sample placeholder · ",
							report.pages,
							" pages · not available in this prototype"
						]
					})
				]
			})
		}) }, report.id))
	});
}
function TransparencySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "transparency",
		className: "border-b border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Trust & transparency",
				title: "Your trust deserves evidence.",
				description: "Financials, methodology, governance and policies published in one place. Registration and statutory details will be added only once verified."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransparencyGrid, { compact: true })
			})]
		})
	});
}
//#endregion
export { TransparencySection as n, TransparencyGrid as t };
