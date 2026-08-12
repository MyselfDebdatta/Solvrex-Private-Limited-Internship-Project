import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-BDLJwfSO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-CEN8S2jE.js
var import_jsx_runtime = require_jsx_runtime();
/** Consistent editorial masthead for every interior page. */
function PageHero({ eyebrow, title, description, meta, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-secondary/60 pt-28 pb-14 md:pt-36 md:pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-accent",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-hero mt-5 max-w-4xl text-balance text-primary",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-6 max-w-2xl",
						children: description
					})
				] }),
				actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					className: "mt-9 flex flex-wrap gap-3",
					children: actions
				}) : null,
				meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 160,
					className: "mt-10",
					children: meta
				}) : null
			]
		})
	});
}
//#endregion
export { PageHero as t };
