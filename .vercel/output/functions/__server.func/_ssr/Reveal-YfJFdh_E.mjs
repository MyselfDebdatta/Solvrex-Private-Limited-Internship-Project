import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as useInView, f as cn } from "./router-CiBZnEbp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-YfJFdh_E.js
var import_jsx_runtime = require_jsx_runtime();
/** Fades and lifts content into view once. Respects reduced-motion via CSS. */
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("reveal", inView && "reveal-in", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
//#endregion
export { Reveal as t };
