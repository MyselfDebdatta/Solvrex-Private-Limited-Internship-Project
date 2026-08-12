import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowLeft, a as ShieldAlert, k as ArrowRight, v as Heart, w as Check } from "../_libs/lucide-react.mjs";
import { a as Route$8, f as cn, o as ActionButton, s as ActionLink, y as programmes } from "./router-CiBZnEbp.mjs";
import { t as Reveal } from "./Reveal-YfJFdh_E.mjs";
import { n as formatRupees } from "./format-D7yerbPi.mjs";
import { r as causes } from "./causes-BywuGHaw.mjs";
import { a as isPhone, i as isEmail, n as TextAreaField, r as TextField } from "./Fields-DjB7sA1R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donate-ntZ2DoXI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var amounts = [
	500,
	1e3,
	2500,
	5e3
];
var steps = [
	"Cause",
	"Amount",
	"Your details",
	"Review",
	"Confirmation"
];
var impactLine = (amount, causeLabel) => {
	if (amount >= 5e3) return `Funds a full learning cycle for a small group in ${causeLabel.toLowerCase()}.`;
	if (amount >= 2500) return `Covers a month of frontline delivery in ${causeLabel.toLowerCase()}.`;
	if (amount >= 1e3) return `Supports materials and follow-up for several households.`;
	return `Contributes to running costs of a single community session.`;
};
function DonatePage() {
	const { cause: causeParam } = Route$8.useSearch();
	const navigate = Route$8.useNavigate();
	const [step, setStep] = (0, import_react.useState)(0);
	const [cause, setCause] = (0, import_react.useState)(causes.some((item) => item.id === causeParam) ? causeParam : causes[0].id);
	const [amount, setAmount] = (0, import_react.useState)(1e3);
	const [custom, setCustom] = (0, import_react.useState)("");
	const [recurring, setRecurring] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const selectedCause = causes.find((item) => item.id === cause) ?? causes[0];
	const linkedProgramme = (0, import_react.useMemo)(() => programmes.find((programme) => programme.cause === selectedCause.id), [selectedCause.id]);
	const finalAmount = custom.trim().length > 0 ? Number(custom) || 0 : amount;
	const amountValid = finalAmount >= 100;
	const validateDonor = () => {
		const next = {};
		if (name.trim().length < 2) next.name = "Please enter your full name.";
		if (!isEmail(email)) next.email = "Please enter a valid email address.";
		if (phone.trim().length > 0 && !isPhone(phone)) next.phone = "Please enter a valid phone number, or leave this blank.";
		setErrors(next);
		return Object.keys(next).length === 0;
	};
	const goNext = () => {
		if (step === 2 && !validateDonor()) return;
		if (step === 1 && !amountValid) return;
		setStep((current) => Math.min(current + 1, steps.length - 1));
	};
	const reset = () => {
		setStep(0);
		setAmount(1e3);
		setCustom("");
		setRecurring(false);
		setName("");
		setEmail("");
		setPhone("");
		setNote("");
		setErrors({});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-secondary/45",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell-narrow pt-28 pb-20 md:pt-36 md:pb-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-2 border border-accent/40 bg-accent/8 px-3 py-1.5 text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
							"aria-hidden": "true",
							className: "size-3.5"
						}), "Donation demo"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-hero mt-6 text-balance text-primary",
						children: "Support a programme, not a general fund."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-5",
						children: "This is a visual demonstration of a donation experience. No payment gateway is connected, and no card, bank or payment information is collected or transmitted at any step."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					"aria-label": "Donation steps",
					className: "mt-12 flex flex-wrap gap-x-6 gap-y-3 border-y border-border py-4 text-xs tracking-[0.12em] uppercase",
					children: steps.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						"aria-current": index === step ? "step" : void 0,
						className: cn("flex items-center gap-2", index === step ? "text-primary" : index < step ? "text-sage" : "text-muted-foreground/70"),
						children: [index < step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							"aria-hidden": "true",
							className: "size-3.5"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular",
							children: String(index + 1).padStart(2, "0")
						}), label]
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 border border-border bg-background p-7 md:p-10",
					children: [
						step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "display-lg text-primary",
								children: "Choose a cause"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Your contribution is directed to programmes under the cause you select."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-px border border-border bg-border sm:grid-cols-2",
								children: causes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: cn("flex cursor-pointer flex-col bg-background p-6 transition-colors", cause === item.id ? "bg-secondary/70" : "hover:bg-secondary/40"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "radio",
											name: "cause",
											value: item.id,
											checked: cause === item.id,
											onChange: () => {
												setCause(item.id);
												navigate({
													search: { cause: item.id },
													resetScroll: false
												});
											},
											className: "size-4 accent-[var(--color-accent)]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-primary",
											children: item.label
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: item.summary
									})]
								}, item.id))
							})
						] }) : null,
						step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "display-lg text-primary",
								children: "Choose an amount"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: [
									"Supporting ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: selectedCause.label
									}),
									linkedProgramme ? ` · ${linkedProgramme.name}` : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4",
								children: amounts.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": custom.trim() === "" && amount === value,
									onClick: () => {
										setAmount(value);
										setCustom("");
									},
									className: cn("min-h-14 border text-sm tabular transition-colors", custom.trim() === "" && amount === value ? "border-primary bg-primary text-primary-foreground" : "border-border-strong text-foreground hover:border-primary"),
									children: formatRupees(value)
								}, value))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 max-w-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
									id: "custom-amount",
									label: "Custom amount (₹)",
									type: "number",
									value: custom,
									onChange: setCustom,
									hint: "Minimum ₹100",
									error: custom.trim().length > 0 && !amountValid ? "Please enter an amount of ₹100 or more." : void 0
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-8 flex items-start gap-3 border border-border bg-secondary/50 p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: recurring,
									onChange: (event) => setRecurring(event.target.checked),
									className: "mt-0.5 size-4 accent-[var(--color-accent)]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-foreground",
									children: "Make this monthly"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-muted-foreground",
									children: "Recurring support lets programmes plan a full cycle instead of a single quarter."
								})] })]
							}),
							amountValid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 flex items-start gap-3 border-l-2 border-accent pl-4 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
										"aria-hidden": "true",
										className: "mt-0.5 size-4 shrink-0 text-accent"
									}),
									impactLine(finalAmount, selectedCause.label),
									" Illustrative example, not a guaranteed allocation."
								]
							}) : null
						] }) : null,
						step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "display-lg text-primary",
								children: "Your details"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Used only to display your demo confirmation. Nothing is stored or transmitted."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid gap-6 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										id: "donor-name",
										label: "Full name",
										required: true,
										autoComplete: "name",
										value: name,
										onChange: setName,
										error: errors.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										id: "donor-email",
										label: "Email",
										type: "email",
										required: true,
										autoComplete: "email",
										value: email,
										onChange: setEmail,
										error: errors.email
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										id: "donor-phone",
										label: "Phone",
										type: "tel",
										hint: "Optional",
										autoComplete: "tel",
										value: phone,
										onChange: setPhone,
										error: errors.phone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "sm:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, {
											id: "donor-note",
											label: "Note to the team",
											hint: "Optional",
											rows: 4,
											value: note,
											onChange: setNote
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 border border-border bg-secondary/60 p-5 text-sm text-muted-foreground",
								children: "No payment step follows. This demo never asks for card, UPI or bank details."
							})
						] }) : null,
						step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-lg text-primary",
								children: "Review"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-8 divide-y divide-border border-y border-border text-sm",
								children: [
									{
										label: "Cause",
										value: selectedCause.label
									},
									{
										label: "Programme",
										value: linkedProgramme?.name ?? "Allocated by the team"
									},
									{
										label: "Amount",
										value: formatRupees(finalAmount)
									},
									{
										label: "Frequency",
										value: recurring ? "Monthly" : "One-time"
									},
									{
										label: "Name",
										value: name
									},
									{
										label: "Email",
										value: email
									},
									...phone.trim() ? [{
										label: "Phone",
										value: phone
									}] : [],
									...note.trim() ? [{
										label: "Note",
										value: note
									}] : []
								].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-x-6 gap-y-1 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "w-32 shrink-0 text-muted-foreground",
										children: row.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "flex-1 text-foreground",
										children: row.value
									})]
								}, row.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-muted-foreground",
								children: "Confirming completes the demo. No transaction takes place."
							})
						] }) : null,
						step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							role: "status",
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "mx-auto flex size-14 items-center justify-center rounded-full bg-accent/12 text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "display-xl mt-8 text-balance text-primary",
									children: [
										"Thank you, ",
										name.split(" ")[0] || "friend",
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "lede mx-auto mt-5 max-w-xl",
									children: [
										"In the production platform, ",
										formatRupees(finalAmount),
										" ",
										recurring ? "each month " : "",
										"would be directed to ",
										selectedCause.label.toLowerCase(),
										" programmes",
										linkedProgramme ? `, starting with ${linkedProgramme.name}` : "",
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-10 grid gap-px border border-border bg-border text-left sm:grid-cols-3",
									children: [
										{
											label: "Contribution",
											value: formatRupees(finalAmount)
										},
										{
											label: "Frequency",
											value: recurring ? "Monthly" : "One-time"
										},
										{
											label: "Directed to",
											value: selectedCause.label
										}
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "bg-background p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs tracking-[0.12em] uppercase text-muted-foreground",
											children: item.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "display-md tabular mt-2 text-primary",
											children: item.value
										})]
									}, item.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 text-sm text-muted-foreground",
									children: "What happens next in production: a receipt by email, a programme welcome note, and quarterly reporting on the outcomes your contribution supports."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap justify-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
											to: "/impact",
											variant: "primary",
											children: "Explore the impact atlas"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
											to: "/stories",
											variant: "outline",
											children: "Read stories of change"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
											variant: "quiet",
											onClick: reset,
											children: "Restart the demo"
										})
									]
								})
							]
						}) : null,
						step < 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionButton, {
								variant: "quiet",
								onClick: () => setStep((current) => Math.max(current - 1, 0)),
								disabled: step === 0,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
									"aria-hidden": "true",
									className: "size-4"
								}), "Back"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionButton, {
								variant: "primary",
								size: "lg",
								onClick: goNext,
								disabled: step === 1 && !amountValid,
								children: [step === 3 ? "Confirm demo donation" : "Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									"aria-hidden": "true",
									className: "size-4"
								})]
							})]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-xs leading-relaxed text-muted-foreground",
					children: "Donation demo · Aaroha Foundation is a prototype identity. This flow exists to demonstrate the experience only and does not accept contributions."
				})
			]
		})
	});
}
//#endregion
export { DonatePage as component };
