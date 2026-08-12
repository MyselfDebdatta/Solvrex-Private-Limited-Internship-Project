import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as ActionLink } from "./router-DD5dsP7n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stories._slug-Bhx59B5U.js
var import_jsx_runtime = require_jsx_runtime();
function StoryNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell py-40 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-xl text-primary",
				children: "Story not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: "This story may have been renamed or removed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
				to: "/stories",
				variant: "primary",
				className: "mt-8",
				children: "Browse all stories"
			})
		]
	});
}
//#endregion
export { StoryNotFound as notFoundComponent };
