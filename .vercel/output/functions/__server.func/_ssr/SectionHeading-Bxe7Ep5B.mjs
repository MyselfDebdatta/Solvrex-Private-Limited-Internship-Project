import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as cn } from "./router-DD5dsP7n.mjs";
import { t as Reveal } from "./Reveal-BDLJwfSO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-Bxe7Ep5B.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, description, align = "left", tone = "default", className, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", align === "center" && "md:flex-col md:items-center md:text-center", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: cn("max-w-2xl", align === "center" && "text-center"),
			children: [
				eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("eyebrow mb-4", tone === "inverse" ? "text-primary-foreground/65" : "text-accent"),
					children: eyebrow
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: cn("display-xl text-balance", tone === "inverse" ? "text-primary-foreground" : "text-primary"),
					children: title
				}),
				description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("lede mt-5", tone === "inverse" && "text-primary-foreground/75"),
					children: description
				}) : null
			]
		}), action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 120,
			children: action
		}) : null]
	});
}
//#endregion
export { SectionHeading as t };
