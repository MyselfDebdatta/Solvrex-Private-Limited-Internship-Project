import type { Partner, ReportDocument } from "@/types";

/**
 * Prototype documents. These are placeholders: no real report file exists and
 * the UI states this rather than offering a broken download.
 */
export const reports: ReportDocument[] = [
  {
    id: "annual-2025",
    title: "Annual Report 2025–26",
    kind: "annual",
    kindLabel: "Annual Report",
    year: "2025–26",
    description:
      "Programme review, geography-wise coverage, measurement summary and governance disclosures for the year.",
    pages: 84,
    available: false,
  },
  {
    id: "annual-2024",
    title: "Annual Report 2024–25",
    kind: "annual",
    kindLabel: "Annual Report",
    year: "2024–25",
    description: "Full-year programme narrative with district-level coverage tables.",
    pages: 78,
    available: false,
  },
  {
    id: "financial-2025",
    title: "Audited Financial Statements 2025–26",
    kind: "financial",
    kindLabel: "Financial Report",
    year: "2025–26",
    description:
      "Balance sheet, income and expenditure, and programme-wise expense allocation with auditor notes.",
    pages: 42,
    available: false,
  },
  {
    id: "financial-2024",
    title: "Audited Financial Statements 2024–25",
    kind: "financial",
    kindLabel: "Financial Report",
    year: "2024–25",
    description: "Prior-year statements with comparative programme allocation.",
    pages: 40,
    available: false,
  },
  {
    id: "impact-2025",
    title: "Impact & Outcomes Report 2025–26",
    kind: "impact",
    kindLabel: "Impact Report",
    year: "2025–26",
    description:
      "Indicator-by-indicator results including two programmes that did not meet their targets.",
    pages: 56,
    available: false,
  },
  {
    id: "impact-methodology",
    title: "Measurement Methodology Note",
    kind: "impact",
    kindLabel: "Impact Report",
    year: "2026",
    description:
      "How reach, outcome and attribution are defined, and what our numbers deliberately do not claim.",
    pages: 18,
    available: false,
  },
  {
    id: "governance-board",
    title: "Board Composition & Meeting Summaries",
    kind: "governance",
    kindLabel: "Governance",
    year: "2026",
    description: "Board members, committee structure, meeting frequency and attendance record.",
    pages: 12,
    available: false,
  },
  {
    id: "governance-conflict",
    title: "Conflict of Interest Register",
    kind: "governance",
    kindLabel: "Governance",
    year: "2026",
    description: "Declared interests of board members and senior staff, updated annually.",
    pages: 8,
    available: false,
  },
  {
    id: "policy-safeguarding",
    title: "Child Protection & Safeguarding Policy",
    kind: "policy",
    kindLabel: "Policy",
    year: "2025",
    description:
      "Safeguarding standards, reporting channels and response protocol for all field programmes.",
    pages: 22,
    available: false,
  },
  {
    id: "policy-data",
    title: "Data Protection & Consent Policy",
    kind: "policy",
    kindLabel: "Policy",
    year: "2025",
    description:
      "How participant data is collected, stored, anonymised and consented to before publication.",
    pages: 16,
    available: false,
  },
  {
    id: "policy-whistleblower",
    title: "Whistleblower & Grievance Policy",
    kind: "policy",
    kindLabel: "Policy",
    year: "2025",
    description:
      "Confidential reporting routes for staff, volunteers, partners and community members.",
    pages: 10,
    available: false,
  },
  {
    id: "compliance-statutory",
    title: "Statutory Compliance Summary",
    kind: "compliance",
    kindLabel: "Compliance",
    year: "2025–26",
    description:
      "Structure of statutory filings and audit schedule. Registration details will be published here once verified.",
    pages: 9,
    available: false,
  },
];

export const reportFilters = [
  { id: "all", label: "All documents" },
  { id: "annual", label: "Annual" },
  { id: "financial", label: "Financial" },
  { id: "impact", label: "Impact" },
  { id: "governance", label: "Governance" },
  { id: "policy", label: "Policies" },
  { id: "compliance", label: "Compliance" },
] as const;

export const partners: Partner[] = [
  {
    name: "Kalinga Trust",
    type: "Philanthropic foundation",
    since: 2015,
    contribution: "Education portfolio funding",
  },
  {
    name: "Sahyog Health Collective",
    type: "Civil society network",
    since: 2016,
    contribution: "Health worker training",
  },
  {
    name: "District Administration, Kalahandi",
    type: "Government partner",
    since: 2016,
    contribution: "School and health system linkage",
  },
  {
    name: "Northwind Technologies",
    type: "CSR partner",
    since: 2019,
    contribution: "Measurement platform and data engineering",
  },
  {
    name: "Bharat Rural Bank",
    type: "Financial institution",
    since: 2020,
    contribution: "Working capital access for collectives",
  },
  {
    name: "Setu Livelihood Alliance",
    type: "Market access network",
    since: 2021,
    contribution: "Institutional buyer agreements",
  },
  {
    name: "Prithvi Water Institute",
    type: "Technical partner",
    since: 2021,
    contribution: "Watershed mapping methodology",
  },
  {
    name: "Aashray Relief Network",
    type: "Emergency response network",
    since: 2020,
    contribution: "Volunteer mobilisation",
  },
];
