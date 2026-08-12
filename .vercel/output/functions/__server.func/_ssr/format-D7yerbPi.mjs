//#region node_modules/.nitro/vite/services/ssr/assets/format-D7yerbPi.js
var formatNumber = (value) => new Intl.NumberFormat("en-IN").format(value);
var formatRupees = (value) => new Intl.NumberFormat("en-IN", {
	style: "currency",
	currency: "INR",
	maximumFractionDigits: 0
}).format(value);
/** Renders a headline stat value: 1.2 stays 1.2, 25 stays 25. */
var formatStatValue = (value) => Number.isInteger(value) ? Math.round(value).toString() : value.toFixed(1);
//#endregion
export { formatRupees as n, formatStatValue as r, formatNumber as t };
