export interface CoreService {
  icon: string;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  slug?: string;
}

export const coreServices: CoreService[] = [
  {
    icon: "calculator",
    title: "Monthly Bookkeeping",
    description:
      "Accurate, timely financial records tailored to dental practice workflows. We handle accounts payable/receivable, bank reconciliation, and expense categorization.",
    features: [
      "Daily transaction recording",
      "Bank & credit card reconciliation",
      "Accounts payable management",
      "Monthly financial statements",
    ],
    pricing: "Starting at $499/mo",
    slug: "monthly-bookkeeping",
  },
  {
    icon: "file-invoice-dollar",
    title: "Tax Planning & Prep",
    description:
      "Proactive tax strategies that minimize liabilities while ensuring full compliance. We specialize in dental-specific deductions and CRA regulations.",
    features: [
      "Annual tax return filing",
      "Quarterly tax estimates",
      "Dental-specific deductions",
      "CRA audit support",
    ],
    pricing: "Starting at $1,200/year",
    slug: "tax",
  },
  {
    icon: "chart-pie",
    title: "P&L & Financial Reports",
    description:
      "Crystal-clear insights into your practice's financial health. Custom reports that show exactly where your money goes and where opportunities lie.",
    features: [
      "Monthly P&L statements",
      "Balance sheet analysis",
      "Cash flow projections",
      "Custom KPI dashboards",
    ],
    pricing: "Included in packages",
    slug: "financial-analysis",
  },
  {
    icon: "users-cog",
    title: "Payroll Services",
    description:
      "Stress-free payroll for dentists, hygienists, and staff. We handle calculations, remittances, T4s, and compliance—so you don't have to.",
    features: [
      "Bi-weekly/monthly processing",
      "CRA remittance handling",
      "T4 & ROE preparation",
      "Benefits administration",
    ],
    pricing: "Starting at $50/employee",
    slug: "payroll-services",
  },
  {
    icon: "target",
    title: "Strategic Advisory",
    description:
      "Go beyond numbers with strategic financial guidance. We help you make data-driven decisions about expansion, equipment, and associate hires.",
    features: [
      "Quarterly strategy sessions",
      "Expansion feasibility analysis",
      "Associate compensation planning",
      "Equipment ROI calculations",
    ],
    pricing: "Starting at $2,500/quarter",
    slug: "advisory",
  },
  {
    icon: "hand-coins",
    title: "Cash Flow Optimization",
    description:
      "Unlock hidden profit and improve liquidity. We identify inefficiencies, negotiate with suppliers, and create actionable savings plans.",
    features: [
      "Expense analysis & reduction",
      "Supplier negotiation support",
      "Insurance billing optimization",
      "Working capital management",
    ],
    pricing: "Performance-based pricing",
    slug: "cash-flow-optimization",
  },
];
