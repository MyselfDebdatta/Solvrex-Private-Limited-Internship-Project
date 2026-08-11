/**
 * Organisation identity and navigation.
 *
 * Prototype identity only — replace `organisation` with the real NGO details
 * and every surface (nav, footer, metadata, donation flow) updates with it.
 */

export const organisation = {
  name: "Aaroha Foundation",
  shortName: "Aaroha",
  tagline: "Make Impact Visible.",
  mission:
    "We work with communities to turn opportunity into action, action into progress, and progress into lasting impact.",
  founded: 2014,
  email: "hello@aaroha.example",
  phone: "+91 80 4000 0000",
  office: "3rd Floor, Anand House, Indiranagar, Bengaluru 560038, Karnataka",
  social: [
    { label: "Instagram", handle: "@aarohafoundation", href: "#" },
    { label: "LinkedIn", handle: "/company/aaroha", href: "#" },
    { label: "YouTube", handle: "/@aaroha", href: "#" },
  ],
} as const;

export const PROTOTYPE_NOTE =
  "Impact figures shown in this prototype are illustrative and will be replaced with verified organisational data.";

export interface NavItem {
  label: string;
  to: string;
}

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Work", to: "/our-work" },
  { label: "Impact", to: "/impact" },
  { label: "Stories", to: "/stories" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Transparency", to: "/transparency" },
  { label: "Contact", to: "/contact" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Explore",
    items: [
      { label: "About", to: "/about" },
      { label: "Our Work", to: "/our-work" },
      { label: "Impact", to: "/impact" },
      { label: "Stories", to: "/stories" },
      { label: "Transparency", to: "/transparency" },
    ],
  },
  {
    heading: "Get Involved",
    items: [
      { label: "Donate", to: "/donate" },
      { label: "Volunteer", to: "/get-involved" },
      { label: "Partner", to: "/get-involved" },
      { label: "CSR", to: "/get-involved" },
      { label: "Fundraise", to: "/get-involved" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Annual Reports", to: "/transparency" },
      { label: "Impact Reports", to: "/transparency" },
      { label: "FAQs", to: "/contact" },
      { label: "Policies", to: "/transparency" },
    ],
  },
];
