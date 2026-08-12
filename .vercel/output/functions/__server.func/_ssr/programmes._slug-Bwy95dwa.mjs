import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as ActionLink } from "./router-DD5dsP7n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programmes._slug-Bwy95dwa.js
var import_jsx_runtime = require_jsx_runtime();
function ProgrammeNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell py-40 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-xl text-primary",
				children: "Programme not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: "This programme may have been renamed or is not part of the prototype data set."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
				to: "/our-work",
				variant: "primary",
				className: "mt-8",
				children: "Browse all programmes"
			})
		]
	});
}
//#endregion
export { ProgrammeNotFound as notFoundComponent };
