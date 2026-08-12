import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { N as notFound, _ as createLink, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as require_react_dom, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { k as ArrowRight, l as Menu, t as X, w as Check } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programmes-DrAyQNSb.js
var programme_udaan_default = "/assets/programme-udaan-C6XaWdVY.jpg";
/** Prototype programme data. Values are illustrative. */
var programmes = [
	{
		slug: "project-udaan",
		name: "Project Udaan",
		cause: "education",
		categoryLabel: "Education & Youth",
		tagline: "Learning that continues after the school bell.",
		summary: "Community learning centres and transition support for students in the years where drop-out risk is highest.",
		problem: "Enrolment in the districts we work in is close to universal, but a large share of students in classes 8 to 12 fall behind grade-level reading and mathematics. When results slip, families withdraw support first from girls, and the drop between class 10 and college is where most futures narrow.",
		approach: [
			"Run evening learning centres staffed by trained local facilitators, sited within walking distance of the households they serve.",
			"Assess every learner twice a year on grade-level reading and numeracy, and group teaching by level rather than by age.",
			"Accompany class 12 students through college applications, scholarship paperwork and hostel decisions.",
			"Hold a monthly parents' circle so families see progress data for their own child."
		],
		geography: [
			"Odisha",
			"Bihar",
			"Uttar Pradesh",
			"Jharkhand"
		],
		states: [
			"odisha",
			"bihar",
			"uttar-pradesh",
			"jharkhand"
		],
		beneficiaries: "Students aged 11–19 and their families",
		progress: 72,
		headlineMetric: {
			label: "Learners enrolled",
			value: "38,400"
		},
		metrics: [
			{
				label: "Learning centres",
				value: "246"
			},
			{
				label: "Local facilitators",
				value: "512"
			},
			{
				label: "Reached grade level in 2 years",
				value: "68%"
			},
			{
				label: "Transitioned to college or skilling",
				value: "4,100"
			}
		],
		image: programme_udaan_default,
		imageAlt: "Two young women studying together with notebooks at a community learning centre",
		startedYear: 2016,
		featured: true
	},
	{
		slug: "project-arogya",
		name: "Project Arogya",
		cause: "healthcare",
		categoryLabel: "Community Healthcare",
		tagline: "Care that reaches the last kilometre.",
		summary: "A frontline health worker network for screening, maternal follow-up and referral navigation in remote habitations.",
		problem: "Primary health infrastructure exists on paper but the last kilometre is missing. Households travel 20 to 40 kilometres for a diagnosis, and the follow-up visit that would make treatment effective rarely happens.",
		approach: [
			"Train and equip community health workers selected by the habitations they serve.",
			"Run monthly screening rounds for anaemia, hypertension, diabetes and child growth.",
			"Track every high-risk pregnancy from registration through six weeks post-delivery.",
			"Navigate referrals end to end, including transport, appointment and paperwork."
		],
		geography: [
			"Madhya Pradesh",
			"Rajasthan",
			"Assam",
			"Maharashtra"
		],
		states: [
			"madhya-pradesh",
			"rajasthan",
			"assam",
			"maharashtra"
		],
		beneficiaries: "Households in habitations more than 10 km from a health centre",
		progress: 64,
		headlineMetric: {
			label: "Screenings completed",
			value: "182,000"
		},
		metrics: [
			{
				label: "Health workers active",
				value: "740"
			},
			{
				label: "High-risk pregnancies tracked",
				value: "9,800"
			},
			{
				label: "Referrals completed",
				value: "21,300"
			},
			{
				label: "Habitations covered",
				value: "1,120"
			}
		],
		image: "/assets/programme-arogya-CfgKTHt0.jpg",
		imageAlt: "A community health worker attending to a mother and infant in a field clinic",
		startedYear: 2015,
		featured: true
	},
	{
		slug: "project-jeevika",
		name: "Project Jeevika",
		cause: "livelihood",
		categoryLabel: "Livelihood & Economic Opportunity",
		tagline: "From daily wage to dependable income.",
		summary: "Producer collectives, working capital literacy and formal market linkage for women-led rural enterprise.",
		problem: "Skills training alone does not change income. Without aggregation, working capital and a buyer who pays on time, a trained artisan still sells at distress prices to whoever arrives first.",
		approach: [
			"Organise producers into collectives of 20 to 40 members with elected office bearers.",
			"Build costing, pricing and digital payment capability inside the collective.",
			"Negotiate supply agreements with formal buyers and institutional procurement.",
			"Mentor each collective for 24 months, then step back to an advisory role."
		],
		geography: [
			"Gujarat",
			"Rajasthan",
			"West Bengal",
			"Karnataka"
		],
		states: [
			"gujarat",
			"rajasthan",
			"west-bengal",
			"karnataka"
		],
		beneficiaries: "Women producers, artisans and smallholder farmers",
		progress: 58,
		headlineMetric: {
			label: "Median income increase",
			value: "+41%"
		},
		metrics: [
			{
				label: "Collectives active",
				value: "184"
			},
			{
				label: "Members",
				value: "6,240"
			},
			{
				label: "Buyer agreements",
				value: "37"
			},
			{
				label: "Collectives operating independently",
				value: "58"
			}
		],
		image: "/assets/programme-jeevika-l9FaqVjL.jpg",
		imageAlt: "Two women artisans at work in a textile workshop lit by a window",
		startedYear: 2017,
		featured: true
	},
	{
		slug: "project-dharti",
		name: "Project Dharti",
		cause: "environment",
		categoryLabel: "Environment & Sustainability",
		tagline: "Restoring the commons that hold a village together.",
		summary: "Watershed restoration, native plantation and climate-resilient farming practice, planned village by village.",
		problem: "Water tables in our catchment districts have dropped faster than cropping patterns have adapted. Degraded commons remove the fallback that the poorest households depend on during a bad season.",
		approach: [
			"Map every catchment with the village committee before any structure is built.",
			"Restore check dams, farm ponds and recharge trenches using local labour.",
			"Plant native species with a three-year survival commitment, not a one-day drive.",
			"Demonstrate low-water cropping on farmer-owned plots rather than model farms."
		],
		geography: [
			"Maharashtra",
			"Karnataka",
			"Madhya Pradesh"
		],
		states: [
			"maharashtra",
			"karnataka",
			"madhya-pradesh"
		],
		beneficiaries: "Farming households and village commons committees",
		progress: 46,
		headlineMetric: {
			label: "Hectares under restoration",
			value: "3,850"
		},
		metrics: [
			{
				label: "Water structures built",
				value: "412"
			},
			{
				label: "Native saplings surviving year 3",
				value: "79%"
			},
			{
				label: "Villages with a commons plan",
				value: "96"
			},
			{
				label: "Farmers on low-water cropping",
				value: "2,700"
			}
		],
		image: "/assets/programme-dharti-CX8s9Lod.jpg",
		imageAlt: "Villagers planting saplings on a restored green hillside",
		startedYear: 2019,
		featured: true
	},
	{
		slug: "project-sahaay",
		name: "Project Sahaay",
		cause: "emergency",
		categoryLabel: "Emergency Response",
		tagline: "Ready before the alert, present after the cameras leave.",
		summary: "Pre-positioned relief capacity, trained volunteer cohorts and recovery accompaniment after the emergency phase.",
		problem: "Relief usually arrives, but late and unevenly, and it stops long before recovery is finished. The households hardest to reach in week one are the same ones still uncounted in month six.",
		approach: [
			"Pre-position family relief kits in flood- and cyclone-prone districts before the season.",
			"Maintain trained volunteer cohorts who can mobilise within 24 hours.",
			"Run rapid damage assessment with the local administration, not in parallel to it.",
			"Stay through the recovery phase: documents, livelihoods, school re-entry."
		],
		geography: [
			"Odisha",
			"Assam",
			"Bihar",
			"West Bengal"
		],
		states: [
			"odisha",
			"assam",
			"bihar",
			"west-bengal"
		],
		beneficiaries: "Households affected by flood, cyclone and heat emergencies",
		progress: 38,
		headlineMetric: {
			label: "Median mobilisation time",
			value: "22 hrs"
		},
		metrics: [
			{
				label: "Relief kits pre-positioned",
				value: "14,000"
			},
			{
				label: "Trained volunteers on call",
				value: "1,900"
			},
			{
				label: "Districts with a response plan",
				value: "23"
			},
			{
				label: "Households in recovery support",
				value: "8,600"
			}
		],
		image: "/assets/programme-sahaay-Dm2aqNl2.jpg",
		imageAlt: "Volunteers in high-visibility vests organising relief supply kits from a truck",
		startedYear: 2020,
		featured: true
	},
	{
		slug: "project-saksham",
		name: "Project Saksham",
		cause: "women-youth",
		categoryLabel: "Women & Youth Leadership",
		tagline: "The people closest to a problem, leading the response.",
		summary: "Leadership fellowships, women's collectives and youth councils that shape programme decisions locally.",
		problem: "Programmes designed elsewhere fail quietly. Where women and young people hold no formal role in planning, priorities drift away from what the community actually raised.",
		approach: [
			"Run a 12-month fellowship for young leaders nominated by their own communities.",
			"Seat a women's collective representative on every district programme review.",
			"Fund small community-designed projects with a decision made locally.",
			"Publish what each council decided, including what was rejected."
		],
		geography: [
			"Bihar",
			"Uttar Pradesh",
			"Tamil Nadu",
			"Odisha"
		],
		states: [
			"bihar",
			"uttar-pradesh",
			"tamil-nadu",
			"odisha"
		],
		beneficiaries: "Women's collectives and young people aged 18–28",
		progress: 51,
		headlineMetric: {
			label: "Fellows in the network",
			value: "620"
		},
		metrics: [
			{
				label: "Youth councils active",
				value: "148"
			},
			{
				label: "Women's collectives linked",
				value: "210"
			},
			{
				label: "Community-designed projects funded",
				value: "96"
			},
			{
				label: "Fellows now in local government roles",
				value: "44"
			}
		],
		image: programme_udaan_default,
		imageAlt: "Young women in a community learning space taking part in a session",
		startedYear: 2018,
		featured: false
	}
];
var programmeBySlug = (slug) => programmes.find((programme) => programme.slug === slug);
var featuredProgrammes = programmes.filter((programme) => programme.featured);
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/stories-CODrYI14.js
var story_asha_default = "/assets/story-asha-B2NKaoF2.jpg";
var story_ramesh_default = "/assets/story-ramesh-76Iw7Wwx.jpg";
var story_collective_default = "/assets/story-collective-bA6X-ojO.jpg";
/**
* Demo stories. Names and details are fictional composites written for this
* prototype; no real individual is depicted or described.
*/
var stories = [
	{
		slug: "asha-odisha",
		title: "The year Asha decided she was not finished with school",
		person: "Asha, 19",
		location: "Kalahandi district, Odisha",
		cause: "education",
		categoryLabel: "Education",
		date: "2026-06-14",
		readingMinutes: 4,
		excerpt: "She had passed class 10 with no clear next step and a family budget that assumed she would stop there.",
		before: "Limited access to learning opportunities beyond class 10.",
		intervention: "Community learning and skills programme, with college transition support.",
		today: "Building skills and planning for higher education in commerce.",
		quote: "Nobody in my family had filled a college form before. Once I understood the steps, it stopped feeling impossible.",
		quoteAttribution: "Asha, learner, Project Udaan",
		body: [
			"Asha passed class 10 in a year when her district recorded its highest board results in a decade. The number told an incomplete story. There was no science stream within reach, the nearest college was a two-hour bus journey, and the household budget had already been drawn on the assumption that she would stop studying.",
			"The learning centre in her panchayat opened in the evenings, after field work. It grouped learners by what they could actually do rather than by which class they were in, which meant Asha spent her first three months on mathematics she had been quietly guessing at for years.",
			"The part that changed the outcome was less visible than the teaching. A facilitator sat with her family twice, showed them her assessment record, and walked through the scholarship paperwork line by line. The form was submitted eleven days before the deadline.",
			"Asha is now in the second year of a commerce degree and facilitates a weekend session at the same centre. She is candid that the plan is not finished: she wants a job that lets her stay in the district, and that market is thin."
		],
		programmeSlug: "project-udaan",
		image: story_asha_default,
		imageAlt: "A young woman holding notebooks stands outside a village learning centre",
		featured: true
	},
	{
		slug: "ramesh-madhya-pradesh",
		title: "A health worker's notebook changed how a village counts risk",
		person: "Ramesh, 34",
		location: "Betul district, Madhya Pradesh",
		cause: "healthcare",
		categoryLabel: "Healthcare",
		date: "2026-05-02",
		readingMinutes: 5,
		excerpt: "Screening was never the hard part. Making sure someone came back for the second visit was.",
		before: "Diagnoses happened far away, and follow-up visits rarely did.",
		intervention: "Community health worker training, monthly screening rounds and referral navigation.",
		today: "Every high-risk household in his cluster has a tracked follow-up date.",
		quote: "A screening without a follow-up is just information. The second visit is where treatment actually starts.",
		quoteAttribution: "Ramesh, community health worker, Project Arogya",
		body: [
			"Ramesh's cluster covers nine habitations, the farthest one 14 kilometres from the nearest health centre along a road that dissolves during the monsoon. When he started, screening camps came through roughly twice a year and left behind a stack of referral slips.",
			"What he added was ordinary and decisive: a register, then a tablet, with a named follow-up date for every high-risk result. Hypertension and anaemia cases got a monthly check. Pregnancies got a schedule that ran from registration to six weeks after delivery.",
			"Follow-up completion in his cluster moved from roughly a third of referrals to more than eight in ten over two years. He is quick to point out what the number hides: transport is still the single largest reason a visit is missed.",
			"The programme now treats the follow-up rate, not the screening count, as its primary indicator. That change came from field workers, not from headquarters."
		],
		programmeSlug: "project-arogya",
		image: story_ramesh_default,
		imageAlt: "A community health volunteer standing on a village path at sunrise",
		featured: false
	},
	{
		slug: "sujata-collective-gujarat",
		title: "Twenty-eight women, one ledger, and a price they set themselves",
		person: "Sujata and the Meghdoot collective",
		location: "Kutch district, Gujarat",
		cause: "livelihood",
		categoryLabel: "Livelihood",
		date: "2026-04-11",
		readingMinutes: 6,
		excerpt: "The collective's first real negotiation was not with a buyer. It was about what their own work was worth.",
		before: "Individual artisans sold at distress prices to whoever arrived first.",
		intervention: "Producer collective formation, costing and pricing capability, formal buyer linkage.",
		today: "The collective operates independently with two long-term supply agreements.",
		quote: "Once we costed one shawl honestly, we could not go back to the old price. That was the turning point.",
		quoteAttribution: "Sujata, secretary, Meghdoot producer collective",
		body: [
			"The Meghdoot collective began with 28 members, a borrowed room and a disagreement. Half the group wanted a guaranteed monthly payout. The other half wanted to hold stock and wait for a better price. Both positions were reasonable, and neither could be settled without knowing what a single piece actually cost to make.",
			"Costing took six weeks: thread, dye, transport, breakage, and the hours that had never appeared in any calculation. The number that emerged was 34 percent above what members had been accepting.",
			"The first buyer conversation failed. The second, with an institutional buyer who needed consistent volume and documented quality, produced a 14-month agreement. Payment terms of 30 days made working capital the next problem, which the collective solved with a rotating internal fund.",
			"Median member income is up meaningfully, and the collective now runs its own monthly review. Aaroha's role has narrowed to an advisory seat, which is the outcome the programme was designed for."
		],
		programmeSlug: "project-jeevika",
		image: story_collective_default,
		imageAlt: "A women's self-help group seated in a circle with a ledger and calculator",
		featured: false
	},
	{
		slug: "kondh-watershed-maharashtra",
		title: "The village that planned its water before it planted a tree",
		person: "Ambewadi village commons committee",
		location: "Beed district, Maharashtra",
		cause: "environment",
		categoryLabel: "Environment",
		date: "2026-03-19",
		readingMinutes: 5,
		excerpt: "Three earlier plantation drives had failed here. The committee wanted to know why before agreeing to a fourth.",
		before: "Repeated plantation drives with low survival and no catchment plan.",
		intervention: "Participatory watershed mapping, recharge structures, then species selection.",
		today: "A three-year commons plan with tracked sapling survival and two recharge structures.",
		quote: "We stopped asking how many trees. We started asking where the water goes.",
		quoteAttribution: "Member, Ambewadi commons committee",
		body: [
			"Ambewadi had been the site of three plantation drives in eight years. Photographs existed for all of them. Surviving trees did not.",
			"The committee's condition for a fourth attempt was a catchment map. Making one took a season of walking the slope after rain and marking where water actually moved, which turned out to be nothing like the earlier assumption.",
			"Two recharge structures went in before any sapling. Species selection followed the water, not the nursery catalogue. Survival at the end of year three sits near four in five, which the committee monitors itself with a quarterly count.",
			"The plan is public and posted at the panchayat office, including the sections that have slipped behind schedule."
		],
		programmeSlug: "project-dharti",
		image: story_collective_default,
		imageAlt: "A village committee meeting seated together with records and documents",
		featured: false
	},
	{
		slug: "youth-council-bihar",
		title: "A youth council rejected the programme we proposed",
		person: "Sitamarhi youth council",
		location: "Sitamarhi district, Bihar",
		cause: "women-youth",
		categoryLabel: "Community",
		date: "2026-02-08",
		readingMinutes: 4,
		excerpt: "The design was solid, the budget was ready, and the council said no. They were right.",
		before: "Programme priorities were set at district level with limited local input.",
		intervention: "Youth council with a formal decision role in programme selection.",
		today: "A locally designed transport and safety initiative, now in its second cycle.",
		quote: "We were not being difficult. We were the ones taking the bus at 6 am.",
		quoteAttribution: "Member, Sitamarhi youth council",
		body: [
			"The proposal was a digital skills lab. Reasonable on paper, well funded, and modelled on something that had worked two districts away.",
			"The council's objection was practical. Attendance for any evening programme in that block was governed by one thing: whether young women could travel safely at the hours the sessions required. Without solving that, a lab would serve the same small group already being served.",
			"The council reallocated the cycle to a shared transport and escort arrangement with the school and the panchayat, and set its own attendance target. Participation by young women in existing programmes rose sharply, and the skills lab opened a year later with a very different attendance profile.",
			"We publish council decisions, including the ones that overrule us, because the alternative is a participation process that only ratifies."
		],
		programmeSlug: "project-saksham",
		image: story_asha_default,
		imageAlt: "Young people gathered for a community council session",
		featured: false
	},
	{
		slug: "flood-response-assam",
		title: "Week one is logistics. Month six is the real test.",
		person: "Response team, Barpeta",
		location: "Barpeta district, Assam",
		cause: "emergency",
		categoryLabel: "Field Stories",
		date: "2026-01-22",
		readingMinutes: 6,
		excerpt: "Relief reached the district in 22 hours. The households that were hardest to reach then were still uncounted in month three.",
		before: "Relief arrived late and unevenly, and stopped before recovery began.",
		intervention: "Pre-positioned kits, trained volunteer cohort, joint damage assessment.",
		today: "A recovery caseload tracked for nine months, with documents and school re-entry included.",
		quote: "Everyone counts the kits. Almost nobody counts who never got one.",
		quoteAttribution: "Field coordinator, Project Sahaay",
		body: [
			"Kits were pre-positioned before the season, so the first distribution happened 22 hours after the alert. That number is the one that usually gets reported.",
			"The number the team watches instead is the gap between the initial assessment list and the list three weeks later. In Barpeta it was 11 percent — households in the most cut-off chars that no first-pass survey reached.",
			"Recovery work ran for nine months: replacing lost identity documents, restoring livelihood assets, and getting children back into school before the term made re-entry harder.",
			"The response plan for the next season was revised on the basis of that gap, not the mobilisation time."
		],
		programmeSlug: "project-sahaay",
		image: story_ramesh_default,
		imageAlt: "A field coordinator standing on a rural road at dawn",
		featured: false
	}
];
var storyBySlug = (slug) => stories.find((story) => story.slug === slug);
var featuredStory = stories.find((story) => story.featured) ?? stories[0];
var storyFilters = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "education",
		label: "Education"
	},
	{
		id: "healthcare",
		label: "Healthcare"
	},
	{
		id: "livelihood",
		label: "Livelihood"
	},
	{
		id: "environment",
		label: "Environment"
	},
	{
		id: "women-youth",
		label: "Community"
	},
	{
		id: "emergency",
		label: "Field Stories"
	}
];
var formatStoryDate = (iso) => new Date(iso).toLocaleDateString("en-IN", {
	day: "numeric",
	month: "short",
	year: "numeric"
});
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CiBZnEbp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-CGGHhysV.css";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** True once the element has entered the viewport (fires once). */
function useInView(rootMargin = "-12% 0px") {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (typeof IntersectionObserver === "undefined") {
			setInView(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				setInView(true);
				observer.disconnect();
			}
		}, {
			rootMargin,
			threshold: .05
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, [rootMargin]);
	return {
		ref,
		inView
	};
}
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const query = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(query.matches);
		const onChange = () => setReduced(query.matches);
		query.addEventListener("change", onChange);
		return () => query.removeEventListener("change", onChange);
	}, []);
	return reduced;
}
/** Eases a number from 0 to `target` once `active` becomes true. */
function useCountUp(target, active, durationMs = 1400) {
	const reduced = usePrefersReducedMotion();
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		if (reduced) {
			setValue(target);
			return;
		}
		let frame = 0;
		const start = performance.now();
		const tick = (now) => {
			const progress = Math.min((now - start) / durationMs, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setValue(target * eased);
			if (progress < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [
		active,
		target,
		durationMs,
		reduced
	]);
	return value;
}
/** Tracks window scroll offset past a threshold. */
function useScrolled(threshold = 24) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > threshold);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [threshold]);
	return scrolled;
}
/**
* Organisation identity and navigation.
*
* Prototype identity only — replace `organisation` with the real NGO details
* and every surface (nav, footer, metadata, donation flow) updates with it.
*/
var organisation = {
	name: "Aaroha Foundation",
	shortName: "Aaroha",
	tagline: "Make Impact Visible.",
	mission: "We work with communities to turn opportunity into action, action into progress, and progress into lasting impact.",
	founded: 2014,
	email: "hello@aaroha.example",
	phone: "+91 80 4000 0000",
	office: "3rd Floor, Anand House, Indiranagar, Bengaluru 560038, Karnataka",
	social: [
		{
			label: "Instagram",
			handle: "@aarohafoundation",
			href: "#"
		},
		{
			label: "LinkedIn",
			handle: "/company/aaroha",
			href: "#"
		},
		{
			label: "YouTube",
			handle: "/@aaroha",
			href: "#"
		}
	]
};
var PROTOTYPE_NOTE = "Impact figures shown in this prototype are illustrative and will be replaced with verified organisational data.";
var primaryNav = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Our Work",
		to: "/our-work"
	},
	{
		label: "Impact",
		to: "/impact"
	},
	{
		label: "Stories",
		to: "/stories"
	},
	{
		label: "Get Involved",
		to: "/get-involved"
	},
	{
		label: "Transparency",
		to: "/transparency"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var footerNav = [
	{
		heading: "Explore",
		items: [
			{
				label: "About",
				to: "/about"
			},
			{
				label: "Our Work",
				to: "/our-work"
			},
			{
				label: "Impact",
				to: "/impact"
			},
			{
				label: "Stories",
				to: "/stories"
			},
			{
				label: "Transparency",
				to: "/transparency"
			}
		]
	},
	{
		heading: "Get Involved",
		items: [
			{
				label: "Donate",
				to: "/donate"
			},
			{
				label: "Volunteer",
				to: "/get-involved"
			},
			{
				label: "Partner",
				to: "/get-involved"
			},
			{
				label: "CSR",
				to: "/get-involved"
			},
			{
				label: "Fundraise",
				to: "/get-involved"
			}
		]
	},
	{
		heading: "Resources",
		items: [
			{
				label: "Annual Reports",
				to: "/transparency"
			},
			{
				label: "Impact Reports",
				to: "/transparency"
			},
			{
				label: "FAQs",
				to: "/contact"
			},
			{
				label: "Policies",
				to: "/transparency"
			}
		]
	}
];
/**
* Single source of truth for action styling. Buttons and links share it so a
* navigation action and a form action never drift apart visually.
*/
var actionVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 rounded-sm", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-foreground hover:bg-primary-deep shadow-none",
			accent: "bg-accent text-accent-foreground hover:bg-accent-deep",
			outline: "border border-primary/30 text-primary hover:border-primary hover:bg-primary/5",
			inverse: "border border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/12",
			solidInverse: "bg-primary-foreground text-primary hover:bg-secondary",
			ghost: "text-primary hover:bg-primary/6",
			quiet: "text-muted-foreground hover:text-foreground"
		},
		size: {
			sm: "h-10 px-4 text-[0.8125rem]",
			md: "min-h-11 px-5 text-sm",
			lg: "min-h-13 px-7 text-[0.9375rem]"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var StyledAnchor = (0, import_react.forwardRef)(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
	ref,
	className: cn(actionVariants({
		variant,
		size
	}), className),
	...props
}));
StyledAnchor.displayName = "StyledAnchor";
/** Type-safe router link that carries the shared action styling. */
var ActionLink = createLink(StyledAnchor);
function ActionButton({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(actionVariants({
			variant,
			size
		}), className),
		...props
	});
}
/** Wordmark plus a rising-arc mark; swap the mark for the real logo later. */
function Logo({ tone = "default", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		"aria-label": `${organisation.name} — home`,
		className: cn("group flex items-center gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 40 40",
			"aria-hidden": "true",
			className: cn("size-9 shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5", tone === "inverse" ? "text-primary-foreground" : "text-primary"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "20",
					cy: "20",
					r: "19",
					fill: "none",
					stroke: "currentColor",
					strokeOpacity: "0.25"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M9 27C13 15 18 9 24 9",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "square"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M15 27C19 19 24 15 31 15",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "square",
					strokeOpacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "31",
					cy: "15",
					r: "2.5",
					className: "fill-accent"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-[family-name:var(--font-display)] text-[1.0625rem] tracking-tight", tone === "inverse" ? "text-primary-foreground" : "text-primary"),
				children: organisation.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-1 text-[0.625rem] tracking-[0.16em] uppercase", tone === "inverse" ? "text-primary-foreground/60" : "text-muted-foreground"),
				children: organisation.tagline
			})]
		})]
	});
}
function SiteHeader() {
	const scrolled = useScrolled(16);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const panelRef = (0, import_react.useRef)(null);
	const triggerRef = (0, import_react.useRef)(null);
	const isTransparent = pathname === "/" && !scrolled;
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		panelRef.current?.querySelector("a, button")?.focus();
		const onKeyDown = (event) => {
			if (event.key === "Escape") {
				setOpen(false);
				triggerRef.current?.focus();
				return;
			}
			if (event.key !== "Tab" || !panelRef.current) return;
			const focusables = panelRef.current.querySelectorAll("a[href], button:not([disabled])");
			if (focusables.length === 0) return;
			const first = focusables[0];
			const last = focusables[focusables.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		};
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", isTransparent ? "border-b border-transparent bg-background/0" : "border-b border-border bg-background/92 backdrop-blur-md"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-all duration-500", scrolled ? "h-16 lg:h-18" : "h-20 lg:h-24"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
					className: "min-w-0",
					tone: isTransparent ? "inverse" : "default"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Primary",
					className: "hidden items-center gap-1 lg:flex",
					children: [primaryNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						activeProps: { "data-active": "true" },
						className: cn("relative px-3 py-2 text-[0.8125rem] font-medium transition-colors", isTransparent ? "text-primary-foreground/90 hover:text-primary-foreground data-[active=true]:text-primary-foreground" : "text-foreground/72 hover:text-primary data-[active=true]:text-primary", "after:absolute after:bottom-1 after:left-3 after:h-px after:w-[calc(100%-1.5rem)] after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300", "data-[active=true]:after:scale-x-100"),
						children: item.label
					}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/donate",
						variant: "primary",
						size: "sm",
						className: "ml-3 tracking-[0.08em] uppercase",
						children: "Donate"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
						to: "/donate",
						variant: "primary",
						size: "sm",
						className: "tracking-[0.08em] uppercase",
						children: "Donate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						ref: triggerRef,
						type: "button",
						onClick: () => setOpen(true),
						"aria-expanded": open,
						"aria-controls": "mobile-navigation",
						"aria-label": "Open navigation menu",
						className: cn("grid min-h-11 min-w-11 place-items-center border transition-colors", isTransparent ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" : "border-border text-primary hover:bg-secondary"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							"aria-hidden": "true",
							className: "size-5"
						})
					})]
				})
			]
		})
	}), open && typeof document !== "undefined" && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "mobile-navigation",
		ref: panelRef,
		className: "fixed inset-0 z-[100] flex flex-col bg-primary text-primary-foreground lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex h-20 items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { tone: "inverse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					setOpen(false);
					triggerRef.current?.focus();
				},
				"aria-label": "Close navigation menu",
				className: "grid min-h-11 min-w-11 place-items-center border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					"aria-hidden": "true",
					className: "size-5"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Mobile primary",
			className: "shell flex-1 overflow-y-auto py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: primaryNav.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-primary-foreground/12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						activeProps: { "data-active": "true" },
						onClick: () => setOpen(false),
						className: "group flex items-baseline justify-between py-5 data-[active=true]:text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "display-md",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-3 text-[0.6875rem] tracking-[0.16em] text-primary-foreground/45 uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "hidden size-1.5 rounded-full bg-accent group-data-[active=true]:block"
							}), String(index + 1).padStart(2, "0")]
						})]
					})
				}, item.to))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-3 pb-10 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
					to: "/donate",
					variant: "solidInverse",
					size: "lg",
					onClick: () => setOpen(false),
					className: "tracking-[0.08em] uppercase",
					children: "Donate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
					to: "/get-involved",
					variant: "inverse",
					size: "lg",
					onClick: () => setOpen(false),
					children: "Get involved"
				})]
			})]
		})]
	}), document.body)] });
}
function SiteFooter() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const onSubscribe = (event) => {
		event.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
			setStatus("error");
			return;
		}
		setStatus("done");
		setEmail("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shell py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.1fr_2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { tone: "inverse" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-primary-foreground/70",
							children: "A prototype identity for a national-scale social impact platform. Programme names, statistics and documents shown across this site are illustrative."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: onSubscribe,
							className: "mt-8",
							noValidate: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "newsletter-email",
									className: "eyebrow block text-primary-foreground/55",
									children: "Impact briefing, monthly"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "newsletter-email",
										type: "email",
										autoComplete: "email",
										value: email,
										placeholder: "you@example.com",
										"aria-invalid": status === "error",
										"aria-describedby": "newsletter-status",
										onChange: (event) => {
											setEmail(event.target.value);
											setStatus("idle");
										},
										className: "min-h-11 w-full border border-primary-foreground/25 bg-transparent px-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:border-primary-foreground/60"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
										type: "submit",
										variant: "solidInverse",
										"aria-label": "Subscribe",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											"aria-hidden": "true",
											className: "size-4"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "newsletter-status",
									role: "status",
									className: "mt-2 min-h-5 text-xs text-primary-foreground/65",
									children: status === "error" ? "Enter a valid email address." : status === "done" ? "Noted — this prototype does not send email." : "No real subscription is created in this prototype."
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-4",
					children: [footerNav.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": group.heading,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "eyebrow font-sans text-primary-foreground/55",
							children: group.heading
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "link-underline text-sm text-primary-foreground/80 hover:text-primary-foreground",
								children: item.label
							}) }, `${group.heading}-${item.label}`))
						})]
					}, group.heading)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "eyebrow font-sans text-primary-foreground/55",
							children: "Connect"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: organisation.social.map((channel) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: channel.href,
								className: "link-underline text-sm text-primary-foreground/80 hover:text-primary-foreground",
								children: channel.label
							}) }, channel.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "mt-6 space-y-2 text-sm not-italic text-primary-foreground/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${organisation.email}`,
									className: "link-underline block",
									children: organisation.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${organisation.phone.replace(/\s/g, "")}`,
									className: "link-underline block",
									children: organisation.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block leading-relaxed",
									children: organisation.office
								})
							]
						})
					] })]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-primary-foreground/12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell flex flex-col gap-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							"aria-hidden": "true",
							className: "size-3.5"
						}),
						"Prototype concept · ",
						organisation.name,
						" · Not a live organisation"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "flex flex-wrap gap-x-6 gap-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/transparency",
							className: "link-underline",
							children: "Privacy Policy"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/transparency",
							className: "link-underline",
							children: "Terms"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/transparency",
							className: "link-underline",
							children: "Accessibility"
						}) })
					]
				})]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70svh] items-center justify-center bg-background px-4 pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-accent",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-xl mt-4 text-primary",
					children: "This page doesn't exist"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "The page you're looking for may have moved. Start from the homepage or explore our work."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex min-h-11 items-center rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground",
						children: "Go home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/our-work",
						className: "inline-flex min-h-11 items-center rounded-sm border border-primary/30 px-5 text-sm font-medium text-primary",
						children: "Our work"
					})]
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[70svh] items-center justify-center bg-background px-4 pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-lg text-primary",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try again, or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex min-h-11 items-center rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex min-h-11 items-center rounded-sm border border-primary/30 px-5 text-sm font-medium text-primary",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${organisation.name} — Make Impact Visible.` },
			{
				name: "description",
				content: "Aaroha Foundation is a prototype concept for a national-scale social impact platform: programmes, measured outcomes and an interactive Impact Atlas."
			},
			{
				property: "og:site_name",
				content: organisation.name
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "NGO",
				name: organisation.name,
				slogan: organisation.tagline,
				description: organisation.mission,
				email: organisation.email,
				telephone: organisation.phone
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var $$splitComponentImporter$11 = () => import("./routes-Bvfdx48E.mjs");
var Route$11 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Aaroha Foundation — Make Impact Visible." },
			{
				name: "description",
				content: "A social impact platform concept: community-led programmes across 12 states, measured outcomes, and an interactive Impact Atlas of change across India."
			},
			{
				property: "og:title",
				content: "Aaroha Foundation — Make Impact Visible."
			},
			{
				property: "og:description",
				content: "Community-led programmes, measured outcomes and an interactive Impact Atlas of change across India."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./about-YGreWf0K.mjs");
var Route$10 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Aaroha Foundation" },
			{
				name: "description",
				content: "How Aaroha Foundation works: mission, vision, values, leadership, partners and a timeline of the organisation's journey since 2014."
			},
			{
				property: "og:title",
				content: "About — Aaroha Foundation"
			},
			{
				property: "og:description",
				content: "Mission, values, leadership and partners behind a community-led impact platform."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./contact-CvW847C6.mjs");
var Route$9 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Talk to the Aaroha Foundation team" },
			{
				name: "description",
				content: "Reach the Aaroha Foundation team about programmes, partnerships, volunteering, media or grievances. Office address, email, phone and frequently asked questions."
			},
			{
				property: "og:title",
				content: "Contact — Talk to the Aaroha Foundation team"
			},
			{
				property: "og:description",
				content: "Office details, contact form and answers to the questions we are asked most."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./donate-ntZ2DoXI.mjs");
var searchSchema$1 = objectType({ cause: stringType().optional() });
var Route$8 = createFileRoute("/donate")({
	validateSearch: searchSchema$1,
	head: () => ({
		meta: [
			{ title: "Donation Demo — Support a programme | Aaroha Foundation" },
			{
				name: "description",
				content: "A frontend donation demo for the Aaroha Foundation prototype. Choose a cause, an amount and review a demo confirmation. No payment gateway is connected."
			},
			{
				property: "og:title",
				content: "Donation Demo — Support a programme"
			},
			{
				property: "og:description",
				content: "Prototype donation flow. No real payment information is collected or transmitted."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/donate"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/donate"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./get-involved-B3VZTX1K.mjs");
var Route$7 = createFileRoute("/get-involved")({
	head: () => ({
		meta: [
			{ title: "Get Involved — Give, volunteer, partner | Aaroha Foundation" },
			{
				name: "description",
				content: "Six ways to take part in Aaroha Foundation's work: donate, volunteer, partner, CSR programmes, community fundraising and corporate engagement."
			},
			{
				property: "og:title",
				content: "Get Involved — Give, volunteer, partner"
			},
			{
				property: "og:description",
				content: "Social impact is participatory. Choose the pathway that fits your time, skills or organisation."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/get-involved"
			}
		],
		links: [{
			rel: "canonical",
			href: "/get-involved"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./impact-ChvCEZE5.mjs");
var Route$6 = createFileRoute("/impact")({
	head: () => ({
		meta: [
			{ title: "Impact — Atlas, outcomes and reporting | Aaroha Foundation" },
			{
				name: "description",
				content: "Impact Atlas, reach by cause and geography, expenditure allocation and outcome reporting for Aaroha Foundation programmes."
			},
			{
				property: "og:title",
				content: "Impact — Atlas, outcomes and reporting"
			},
			{
				property: "og:description",
				content: "An interactive Impact Atlas plus reach, allocation and outcome breakdowns."
			},
			{
				property: "og:url",
				content: "/impact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/impact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./our-work-DZTdCxQC.mjs");
var searchSchema = objectType({ cause: stringType().optional() });
var Route$5 = createFileRoute("/our-work")({
	validateSearch: searchSchema,
	head: () => ({
		meta: [
			{ title: "Our Work — Programmes by cause | Aaroha Foundation" },
			{
				name: "description",
				content: "Explore Aaroha Foundation programmes across education, healthcare, livelihood, women and youth, environment and emergency response. Filter and search by cause."
			},
			{
				property: "og:title",
				content: "Our Work — Programmes by cause"
			},
			{
				property: "og:description",
				content: "Filterable programme explorer with problem, approach, geography and progress."
			},
			{
				property: "og:url",
				content: "/our-work"
			}
		],
		links: [{
			rel: "canonical",
			href: "/our-work"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./stories-C-sXcP7G.mjs");
var Route$4 = createFileRoute("/stories")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./transparency-YYOwgsnh.mjs");
var Route$3 = createFileRoute("/transparency")({
	head: () => ({
		meta: [
			{ title: "Transparency — Financials, governance and evidence | Aaroha Foundation" },
			{
				name: "description",
				content: "How Aaroha Foundation spends, measures, governs and reports. Financial allocation, measurement methodology, governance, policies and partnerships in one place."
			},
			{
				property: "og:title",
				content: "Transparency — Financials, governance and evidence"
			},
			{
				property: "og:description",
				content: "Trust cannot be asserted. Financials, methodology and governance published in one hub."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/transparency"
			}
		],
		links: [{
			rel: "canonical",
			href: "/transparency"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./programmes._slug-Cg4YhO--.mjs");
var $$splitNotFoundComponentImporter$1 = () => import("./programmes._slug-0tUQTyvV.mjs");
var Route$2 = createFileRoute("/programmes/$slug")({
	loader: ({ params }) => {
		const programme = programmeBySlug(params.slug);
		if (!programme) throw notFound();
		return { programme };
	},
	head: ({ loaderData, params }) => {
		if (!loaderData) return { meta: [{ title: "Programme not found — Aaroha Foundation" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { programme } = loaderData;
		return {
			meta: [
				{ title: `${programme.name} — ${programme.categoryLabel} | Aaroha Foundation` },
				{
					name: "description",
					content: programme.summary
				},
				{
					property: "og:title",
					content: `${programme.name} — ${programme.categoryLabel}`
				},
				{
					property: "og:description",
					content: programme.summary
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: `/programmes/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/programmes/${params.slug}`
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./stories.index-DOpHGC_8.mjs");
var Route$1 = createFileRoute("/stories/")({
	head: () => ({
		meta: [
			{ title: "Stories of Change — Aaroha Foundation" },
			{
				name: "description",
				content: "An editorial archive of field stories from Aaroha Foundation programmes: education, healthcare, livelihood, environment and community leadership."
			},
			{
				property: "og:title",
				content: "Stories of Change — Aaroha Foundation"
			},
			{
				property: "og:description",
				content: "Field stories with a clear before, intervention and today."
			},
			{
				property: "og:url",
				content: "/stories"
			}
		],
		links: [{
			rel: "canonical",
			href: "/stories"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./stories._slug-DIX0jiPk.mjs");
var $$splitNotFoundComponentImporter = () => import("./stories._slug-AdSSlWbm.mjs");
var Route = createFileRoute("/stories/$slug")({
	loader: ({ params }) => {
		const story = storyBySlug(params.slug);
		if (!story) throw notFound();
		return { story };
	},
	head: ({ loaderData, params }) => {
		if (!loaderData) return { meta: [{ title: "Story not found — Aaroha Foundation" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { story } = loaderData;
		return {
			meta: [
				{ title: `${story.title} — Aaroha Foundation` },
				{
					name: "description",
					content: story.excerpt
				},
				{
					property: "og:title",
					content: story.title
				},
				{
					property: "og:description",
					content: story.excerpt
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: `/stories/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/stories/${params.slug}`
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$9.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var DonateRoute = Route$8.update({
	id: "/donate",
	path: "/donate",
	getParentRoute: () => Route$12
});
var GetInvolvedRoute = Route$7.update({
	id: "/get-involved",
	path: "/get-involved",
	getParentRoute: () => Route$12
});
var ImpactRoute = Route$6.update({
	id: "/impact",
	path: "/impact",
	getParentRoute: () => Route$12
});
var OurWorkRoute = Route$5.update({
	id: "/our-work",
	path: "/our-work",
	getParentRoute: () => Route$12
});
var StoriesRoute = Route$4.update({
	id: "/stories",
	path: "/stories",
	getParentRoute: () => Route$12
});
var TransparencyRoute = Route$3.update({
	id: "/transparency",
	path: "/transparency",
	getParentRoute: () => Route$12
});
var ProgrammesSlugRoute = Route$2.update({
	id: "/programmes/$slug",
	path: "/programmes/$slug",
	getParentRoute: () => Route$12
});
var StoriesIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => StoriesRoute
});
var StoriesRouteChildren = {
	StoriesSlugRoute: Route.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => StoriesRoute
	}),
	StoriesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	DonateRoute,
	GetInvolvedRoute,
	ImpactRoute,
	OurWorkRoute,
	StoriesRoute: StoriesRoute._addFileChildren(StoriesRouteChildren),
	TransparencyRoute,
	ProgrammesSlugRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { featuredProgrammes as _, Route$8 as a, PROTOTYPE_NOTE as c, useInView as d, cn as f, storyFilters as g, stories as h, Route$5 as i, organisation as l, formatStoryDate as m, Route as n, ActionButton as o, featuredStory as p, Route$2 as r, ActionLink as s, router_exports as t, useCountUp as u, programmeBySlug as v, programmes as y };
