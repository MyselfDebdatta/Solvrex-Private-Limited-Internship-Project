import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as Phone, d as MapPin, f as Mail, k as ArrowRight } from "../_libs/lucide-react.mjs";
import { l as organisation, o as ActionButton, s as ActionLink } from "./router-CiBZnEbp.mjs";
import { t as Reveal } from "./Reveal-YfJFdh_E.mjs";
import { t as PageHero } from "./PageHero-DbLg5ZOa.mjs";
import { t as SectionHeading } from "./SectionHeading-B9xyrqbv.mjs";
import { a as isPhone, i as isEmail, n as TextAreaField, r as TextField, t as SelectField } from "./Fields-DjB7sA1R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CvW847C6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var reasons = [
	"Programme enquiry",
	"Partnership or CSR",
	"Volunteering",
	"Media and press",
	"Donation support",
	"Grievance or safeguarding"
];
var faqs = [
	{
		question: "Is this a live website?",
		answer: "No. This is a frontend prototype built to demonstrate a product vision. Every figure, story and document is illustrative and clearly labelled as such."
	},
	{
		question: "Can I donate through this site?",
		answer: "The donation flow is a visual demo only. No payment gateway is connected and no payment information is collected or transmitted."
	},
	{
		question: "How is impact measured?",
		answer: "Programmes are measured on fixed indicators at baseline, midline and endline by a measurement unit that reports to the board rather than to programme leadership."
	},
	{
		question: "Where do you work?",
		answer: "The prototype data set covers 12 states. The Impact Atlas on the home and impact pages shows programmes, communities and people reached in each."
	},
	{
		question: "How quickly do you respond?",
		answer: "In production, general enquiries are answered within two working days and safeguarding reports are escalated the same day."
	}
];
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Start a conversation.",
			description: "Whether you want to fund a programme, join a cohort, ask about our methodology or raise a concern — there is a person on the other side of this form.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
				to: "/get-involved",
				variant: "outline",
				size: "lg",
				children: "See ways to take part"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
				to: "/transparency",
				variant: "ghost",
				size: "lg",
				children: "Read our disclosures"
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "contact-form",
			className: "border-b border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "contact-form",
						className: "display-xl text-balance text-primary",
						children: "Send us a message."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-5",
						children: "This prototype form validates in the browser. Nothing is stored or transmitted."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-border bg-secondary/60 p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display-md text-primary",
									children: "Head office"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-6 space-y-5 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
												"aria-hidden": "true",
												className: "mt-0.5 size-4 shrink-0 text-sage"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground/85",
												children: organisation.office
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
												"aria-hidden": "true",
												className: "mt-0.5 size-4 shrink-0 text-sage"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `mailto:${organisation.email}`,
												className: "link-underline text-foreground",
												children: organisation.email
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
												"aria-hidden": "true",
												className: "mt-0.5 size-4 shrink-0 text-sage"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `tel:${organisation.phone.replace(/\s/g, "")}`,
												className: "link-underline text-foreground",
												children: organisation.phone
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 border-t border-border pt-5 text-xs text-muted-foreground",
									children: "Demo contact details for this prototype."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-border bg-card p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display-md text-primary",
									children: "Follow the work"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-3 text-sm",
									children: organisation.social.map((channel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-baseline justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: channel.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: channel.handle
										})]
									}, channel.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-xs text-muted-foreground",
									children: "Social handles are placeholders in this prototype."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							role: "img",
							"aria-label": "Map placeholder showing the approximate location of the Bengaluru office",
							className: "relative flex h-56 items-center justify-center overflow-hidden border border-border bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "absolute inset-0 opacity-60 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:28px_28px]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "mx-auto block size-2.5 rounded-full bg-accent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-foreground",
										children: "Indiranagar, Bengaluru"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Interactive map is not embedded in this prototype"
									})
								]
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "faqs",
			className: "bg-secondary/45",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-16 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "FAQ",
					title: "Questions we are asked most.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionLink, {
						to: "/transparency",
						variant: "outline",
						children: ["Transparency hub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							"aria-hidden": "true",
							className: "size-4"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-12 divide-y divide-border border-y border-border",
					children: faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: index * 50,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "display-md text-primary",
								children: faq.question
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground",
								children: faq.answer
							})]
						})
					}, faq.question))
				})]
			})
		})
	] });
}
function ContactForm() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [reason, setReason] = (0, import_react.useState)(reasons[0]);
	const [message, setMessage] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const validate = () => {
		const next = {};
		if (name.trim().length < 2) next.name = "Please enter your full name.";
		if (!isEmail(email)) next.email = "Please enter a valid email address.";
		if (phone.trim().length > 0 && !isPhone(phone)) next.phone = "Please enter a valid phone number, or leave this blank.";
		if (message.trim().length < 20) next.message = "Please give us at least 20 characters of context.";
		setErrors(next);
		return Object.keys(next).length === 0;
	};
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		className: "mt-10 border border-border bg-secondary/60 p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "display-md text-primary",
				children: "Message received — in the demo."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground",
				children: [
					"Thank you, ",
					name.split(" ")[0],
					". A message about ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: reason.toLowerCase() }),
					" ",
					"would reach the right desk within two working days in the production platform. Nothing was sent from this prototype."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
				variant: "outline",
				className: "mt-7",
				onClick: () => {
					setSent(false);
					setName("");
					setEmail("");
					setPhone("");
					setMessage("");
					setErrors({});
				},
				children: "Write another message"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		noValidate: true,
		className: "mt-10 grid gap-6 sm:grid-cols-2",
		onSubmit: (event) => {
			event.preventDefault();
			if (validate()) setSent(true);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				id: "contact-name",
				label: "Full name",
				required: true,
				autoComplete: "name",
				value: name,
				onChange: setName,
				error: errors.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				id: "contact-email",
				label: "Email",
				type: "email",
				required: true,
				autoComplete: "email",
				value: email,
				onChange: setEmail,
				error: errors.email
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
				id: "contact-phone",
				label: "Phone",
				type: "tel",
				autoComplete: "tel",
				hint: "Optional",
				value: phone,
				onChange: setPhone,
				error: errors.phone
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
				id: "contact-reason",
				label: "Reason for contacting",
				value: reason,
				onChange: setReason,
				options: reasons.map((option) => ({
					value: option,
					label: option
				}))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, {
					id: "contact-message",
					label: "Message",
					required: true,
					rows: 6,
					value: message,
					onChange: setMessage,
					error: errors.message
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2 flex flex-wrap items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionButton, {
					type: "submit",
					variant: "primary",
					size: "lg",
					children: ["Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						"aria-hidden": "true",
						className: "size-4"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Demo form · no data leaves your browser"
				})]
			})
		]
	});
}
//#endregion
export { ContactPage as component };
