import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Info } from "../_libs/lucide-react.mjs";
import { f as cn } from "./router-CiBZnEbp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PrototypeTag-DQWf9w8G.js
var import_jsx_runtime = require_jsx_runtime();
/** Small, honest label used wherever prototype data is displayed. */
function PrototypeTag({ label = "Prototype impact data", tone = "default", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 border px-3 py-1.5 text-[0.6875rem] font-medium tracking-[0.12em] uppercase", tone === "inverse" ? "border-primary-foreground/25 text-primary-foreground/70" : "border-border-strong text-muted-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: cn("size-1.5 rounded-full", tone === "inverse" ? "bg-primary-foreground/60" : "bg-accent")
		}), label]
	});
}
/** Full-width disclosure banner for data-heavy pages. */
function PrototypeNotice({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: cn("flex items-start gap-3 border border-border bg-secondary/70 px-5 py-4 text-sm leading-relaxed text-muted-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
			"aria-hidden": "true",
			className: "mt-0.5 size-4 shrink-0 text-accent"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })]
	});
}
//#endregion
export { PrototypeTag as n, PrototypeNotice as t };
