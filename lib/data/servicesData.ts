import {
  BarChart3,
  Briefcase,
  Calculator,
  FileCheck,
  FileText,
  Lightbulb,
  LucideIcon,
  RefreshCw,
  Shield,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  number: string;
  features?: string[];
}

export const services: Service[] = [
  {
    title: "Assurance",
    description:
      "Team up with advisors who look beyond the audit itself to create value for your business and stakeholders.",
    icon: Shield,
    slug: "assurance",
    number: "01",
    features: [
      "Financial Statement Audits",
      "Review Engagements",
      "Compliance Assurance",
      "Internal Control Reviews",
    ],
  },
  {
    title: "Tax",
    description:
      "Let us provide you with the insightful and strategic advice needed to navigate the rapidly changing tax landscape.",
    icon: FileText,
    slug: "tax",
    number: "02",
    features: [
      "Tax Planning & Strategy",
      "Tax Return Preparation",
      "CRA Audit Support",
      "Tax Compliance",
    ],
  },
  {
    title: "Advisory",
    description:
      "A differentiated approach relevant to the unique opportunities and challenges you are faced with today.",
    icon: Lightbulb,
    slug: "advisory",
    number: "03",
    features: [
      "Business Strategy",
      "Financial Planning",
      "Succession Planning",
      "M&A Advisory",
    ],
  },
  {
    title: "Bookkeeping",
    description:
      "Comprehensive bookkeeping services to keep your financial records accurate, organized, and up-to-date.",
    icon: Calculator,
    slug: "monthly-bookkeeping",
    number: "04",
    features: [
      "Monthly Bookkeeping",
      "Accounts Payable/Receivable",
      "Bank Reconciliation",
      "Financial Reporting",
    ],
  },
  {
    title: "Payroll Services",
    description:
      "Streamlined payroll processing to ensure your team is paid accurately and on time, every time.",
    icon: Briefcase,
    slug: "payroll-services",
    number: "05",
    features: [
      "Payroll Processing",
      "Tax Deductions",
      "ROE Management",
      "Compliance Reporting",
    ],
  },
  {
    title: "Financial Analysis",
    description:
      "Deep insights into your financial performance to help you make informed business decisions.",
    icon: BarChart3,
    slug: "financial-analysis",
    number: "06",
    features: [
      "P&L Analysis",
      "Cash Flow Analysis",
      "Budgeting & Forecasting",
      "Performance Metrics",
    ],
  },
  {
    title: "Bookkeeping Cleanup",
    description:
      "Get your books in order with our comprehensive cleanup services. We'll organize your financial records, reconcile accounts, and ensure everything is accurate and up-to-date.",
    icon: RefreshCw,
    slug: "bookkeeping-cleanup",
    number: "07",
    features: [
      "Historical Data Cleanup",
      "Account Reconciliation",
      "Error Correction",
      "Financial Record Organization",
    ],
  },
  {
    title: "CRA Audit Support",
    description:
      "Expert guidance and representation during CRA audits. We'll help you navigate the audit process, prepare documentation, and ensure compliance.",
    icon: FileCheck,
    slug: "cra-audit-support",
    number: "08",
    features: [
      "Audit Preparation",
      "Documentation Support",
      "CRA Communication",
      "Compliance Verification",
    ],
  },
];

export interface AdditionalService {
  title: string;
  description: string;
  slug: string;
}

export const additionalServices: AdditionalService[] = [
  {
    title: "Bookkeeping Cleanup",
    description:
      "Get your books in order with our comprehensive cleanup services.",
    slug: "bookkeeping-cleanup",
  },
  {
    title: "CRA Audit Support",
    description: "Expert guidance and representation during CRA audits.",
    slug: "cra-audit-support",
  },
];
