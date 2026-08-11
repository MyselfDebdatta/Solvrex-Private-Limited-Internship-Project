/** Display helpers shared across impact surfaces. */

export const formatCompact = (value: number) =>
  new Intl.NumberFormat("en-IN", { notation: "compact", maximumFractionDigits: 1 }).format(value);

export const formatNumber = (value: number) => new Intl.NumberFormat("en-IN").format(value);

export const formatRupees = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

/** Renders a headline stat value: 1.2 stays 1.2, 25 stays 25. */
export const formatStatValue = (value: number) =>
  Number.isInteger(value) ? Math.round(value).toString() : value.toFixed(1);
