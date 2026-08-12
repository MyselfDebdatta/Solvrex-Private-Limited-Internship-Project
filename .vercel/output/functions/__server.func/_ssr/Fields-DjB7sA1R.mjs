import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Fields-DjB7sA1R.js
var import_jsx_runtime = require_jsx_runtime();
function Shell({ id, label, error, hint, required, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			htmlFor: id,
			className: "text-sm font-medium text-foreground",
			children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-accent",
				children: " *"
			}) : null]
		}),
		hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted-foreground",
			children: hint
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2",
			children
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: `${id}-error`,
			role: "alert",
			className: "mt-2 text-sm text-destructive",
			children: error
		}) : null
	] });
}
var inputClass = "min-h-11 w-full border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none aria-[invalid=true]:border-destructive";
function TextField({ type = "text", placeholder, autoComplete, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: props.id,
			type,
			value: props.value,
			placeholder: placeholder ?? "",
			autoComplete: autoComplete ?? "on",
			onChange: (event) => props.onChange(event.target.value),
			"aria-invalid": Boolean(props.error),
			"aria-describedby": props.error ? `${props.id}-error` : void 0,
			className: inputClass
		})
	});
}
function TextAreaField({ rows = 5, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			id: props.id,
			rows,
			value: props.value,
			onChange: (event) => props.onChange(event.target.value),
			"aria-invalid": Boolean(props.error),
			"aria-describedby": props.error ? `${props.id}-error` : void 0,
			className: "w-full border border-border bg-card p-3 text-sm text-foreground focus-visible:border-primary focus-visible:outline-none aria-[invalid=true]:border-destructive"
		})
	});
}
function SelectField({ options, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			id: props.id,
			value: props.value,
			onChange: (event) => props.onChange(event.target.value),
			"aria-invalid": Boolean(props.error),
			"aria-describedby": props.error ? `${props.id}-error` : void 0,
			className: inputClass,
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: option.value,
				children: option.label
			}, option.value))
		})
	});
}
var isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
var isPhone = (value) => /^[0-9+\-\s()]{7,18}$/.test(value.trim());
//#endregion
export { isPhone as a, isEmail as i, TextAreaField as n, TextField as r, SelectField as t };
