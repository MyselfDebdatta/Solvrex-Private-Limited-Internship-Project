import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { E as Building2, b as Handshake, k as ArrowRight, n as Users, u as Megaphone, x as HandHeart } from "../_libs/lucide-react.mjs";
import { l as organisation, o as ActionButton, s as ActionLink } from "./router-CiBZnEbp.mjs";
import { t as Reveal } from "./Reveal-YfJFdh_E.mjs";
import { t as PageHero } from "./PageHero-DbLg5ZOa.mjs";
import { t as SectionHeading } from "./SectionHeading-B9xyrqbv.mjs";
import { n as PathwayGrid } from "./Participation-CpQmnhQu.mjs";
import { i as isEmail, n as TextAreaField, r as TextField, t as SelectField } from "./Fields-DjB7sA1R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/get-involved-B3VZTX1K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var detailedPathways = [
	{
		id: "donate",
		icon: HandHeart,
		title: "Donate",
		summary: "Fund a specific programme and receive that programme's reporting, not a generic thank-you note.",
		points: [
			"One-time or monthly contributions",
			"Choose the cause your contribution supports",
			"Quarterly programme reporting on outcomes"
		],
		commitment: "From ₹500"
	},
	{
		id: "volunteer",
		icon: Users,
		title: "Volunteer",
		summary: "Field cohorts and remote skilled roles with defined scope, supervision and a real time commitment.",
		points: [
			"Field cohort: 4 weeks on site, twice a year",
			"Remote skilled roles: 4–6 hours a week",
			"Emergency response roster: on call, seasonal"
		],
		commitment: "4 hours a week and up"
	},
	{
		id: "partner",
		icon: Handshake,
		title: "Partner",
		summary: "Co-design a programme with shared measurement, defined roles and a published partnership scope.",
		points: [
			"Government and district administration linkage",
			"Technical partnerships on measurement and delivery",
			"Civil society co-delivery in new geographies"
		],
		commitment: "12 months and up"
	},
	{
		id: "csr",
		icon: Building2,
		title: "CSR",
		summary: "Structured corporate social responsibility engagements with programme-level utilisation reporting.",
		points: [
			"Programme-linked CSR allocation",
			"Utilisation and outcome reporting each quarter",
			"Site visits and independent verification welcome"
		],
		commitment: "Annual commitment"
	},
	{
		id: "fundraise",
		icon: Megaphone,
		title: "Fundraise",
		summary: "Run a campaign inside your community, campus or workplace using our story and data toolkits.",
		points: [
			"Campaign toolkits with verified copy and assets",
			"Campus and workplace chapters",
			"Birthday, marathon and milestone campaigns"
		],
		commitment: "One campaign"
	},
	{
		id: "corporate",
		icon: Handshake,
		title: "Corporate engagement",
		summary: "Employee engagement designed around real programme needs rather than one-day photo opportunities.",
		points: [
			"Skills-based employee volunteering",
			"Payroll giving with matching",
			"Leadership immersion in field districts"
		],
		commitment: "Team or company-wide"
	}
];
var volunteerRoles = [
	{
		role: "Learning facilitator",
		location: "Odisha · Bihar",
		mode: "On site",
		time: "4 weeks"
	},
	{
		role: "Data and measurement analyst",
		location: "Remote",
		mode: "Remote",
		time: "6 hrs / week"
	},
	{
		role: "Health camp coordinator",
		location: "Madhya Pradesh",
		mode: "On site",
		time: "2 weeks"
	},
	{
		role: "Content and translation",
		location: "Remote",
		mode: "Remote",
		time: "4 hrs / week"
	},
	{
		role: "Emergency response volunteer",
		location: "Assam · Odisha",
		mode: "On call",
		time: "Seasonal"
	},
	{
		role: "Livelihood market mentor",
		location: "Maharashtra",
		mode: "Hybrid",
		time: "5 hrs / week"
	}
];
function GetInvolvedPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Get involved",
			title: "Impact is participatory, not transactional.",
			description: "Giving matters. So does time, expertise, reach and collaboration. Choose the pathway that matches what you actually have to offer.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
				to: "/donate",
				variant: "primary",
				size: "lg",
				children: "Open donation demo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
				to: "/contact",
				variant: "outline",
				size: "lg",
				children: "Talk to the team"
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "pathway-detail",
			className: "bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-16 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Pathways",
					title: "Six ways to take part.",
					description: "Each pathway states what it involves and the commitment it asks for, so you can decide before you enquire."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3",
					children: detailedPathways.map((pathway, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 60,
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex h-full flex-col bg-background p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(pathway.icon, {
									"aria-hidden": "true",
									className: "size-6 text-accent",
									strokeWidth: 1.25
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display-md mt-7 text-primary",
									children: pathway.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: pathway.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 flex-1 space-y-2 text-sm text-foreground/85",
									children: pathway.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											className: "mt-2 size-1 shrink-0 bg-sage"
										}), point]
									}, point))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 border-t border-border pt-5 text-xs tracking-[0.12em] uppercase text-muted-foreground",
									children: pathway.commitment
								})
							]
						})
					}) }, pathway.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-labelledby": "volunteer-roles",
			className: "border-y border-border bg-secondary/45",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell py-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Open roles",
						title: "Current volunteer openings.",
						description: "Demo listings for this prototype. In production these come from the volunteering system."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 overflow-x-auto border border-border bg-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[36rem] text-left text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
									className: "sr-only",
									children: "Volunteer roles, locations, mode and time commitment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border text-xs tracking-[0.12em] uppercase text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											className: "px-5 py-4 font-medium",
											children: "Role"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											className: "px-5 py-4 font-medium",
											children: "Location"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											className: "px-5 py-4 font-medium",
											children: "Mode"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											className: "px-5 py-4 font-medium",
											children: "Commitment"
										})
									]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: volunteerRoles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border last:border-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "row",
											className: "px-5 py-4 font-medium text-primary",
											children: role.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4 text-muted-foreground",
											children: role.location
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4 text-muted-foreground",
											children: role.mode
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4 text-muted-foreground",
											children: role.time
										})
									]
								}, role.role)) })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-xs text-muted-foreground",
						children: [
							"Applications are handled by the team over email in this prototype — write to",
							" ",
							organisation.email,
							"."
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InterestForm, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathwayGrid, {})
	] });
}
var interests = [
	"Volunteer",
	"Partner",
	"CSR",
	"Fundraise",
	"Corporate engagement"
];
function InterestForm() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [interest, setInterest] = (0, import_react.useState)(interests[0]);
	const [message, setMessage] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const validate = () => {
		const next = {};
		if (name.trim().length < 2) next.name = "Please enter your full name.";
		if (!isEmail(email)) next.email = "Please enter a valid email address.";
		if (message.trim().length < 10) next.message = "Tell us a little more — at least 10 characters.";
		setErrors(next);
		return Object.keys(next).length === 0;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "interest-form",
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell-narrow py-16 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-accent",
					children: "Register interest"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "interest-form",
					className: "display-xl mt-4 text-balance text-primary",
					children: "Tell us how you would like to take part."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lede mt-5",
					children: "This prototype form validates in the browser and does not send data anywhere."
				})
			] }), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "status",
				className: "mt-10 border border-border bg-secondary/60 p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "display-md text-primary",
						children: [
							"Thank you, ",
							name.split(" ")[0],
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: [
							"In the production platform your interest in ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: interest.toLowerCase() }),
							" ",
							"would reach the engagement team within one working day. Nothing was submitted in this demo."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
						variant: "outline",
						className: "mt-7",
						onClick: () => {
							setSubmitted(false);
							setName("");
							setEmail("");
							setMessage("");
							setErrors({});
						},
						children: "Submit another response"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				noValidate: true,
				className: "mt-10 grid gap-6 sm:grid-cols-2",
				onSubmit: (event) => {
					event.preventDefault();
					if (validate()) setSubmitted(true);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: "interest-name",
						label: "Full name",
						required: true,
						value: name,
						onChange: setName,
						error: errors.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: "interest-email",
						label: "Email",
						type: "email",
						required: true,
						value: email,
						onChange: setEmail,
						error: errors.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							id: "interest-type",
							label: "I am interested in",
							value: interest,
							onChange: setInterest,
							options: interests.map((option) => ({
								value: option,
								label: option
							}))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, {
							id: "interest-message",
							label: "What would you like to do?",
							required: true,
							value: message,
							onChange: setMessage,
							error: errors.message
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActionButton, {
							type: "submit",
							variant: "primary",
							size: "lg",
							children: ["Register interest", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								"aria-hidden": "true",
								className: "size-4"
							})]
						})
					})
				]
			})]
		})
	});
}
//#endregion
export { GetInvolvedPage as component };
