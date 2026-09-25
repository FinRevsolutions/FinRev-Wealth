// ============================================================
// FINREV SOLUTIONS — Navigation Architecture
// Centralized nav items powering Header, Footer, and Sitemaps.
// ============================================================

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const PRIMARY_NAV: NavGroup[] = [
  {
    label: "Solutions",
    href: "/investments",
    children: [
      {
        label: "Core Investments",
        href: "/investments",
        description: "Mutual funds, systematic compounding mandates, and fixed income",
      },
      {
        label: "Wealth Solutions",
        href: "/wealth-solutions",
        description: "Milestone-driven roadmaps for retirement, education, and longevity",
      },
      {
        label: "Capital Protection",
        href: "/protection",
        description: "Pure-risk term life and comprehensive healthcare shields",
      },
      {
        label: "Specialized Assets",
        href: "/investments/pms",
        description: "Curated PMS, AIF, and pre-IPO allocations for qualified portfolios",
      },
    ],
  },
  {
    label: "Investments",
    href: "/investments",
    children: [
      {
        label: "Mutual Funds",
        href: "/investments/mutual-funds",
        description: "Equity, debt, hybrid and index funds across 40+ AMCs",
      },
      {
        label: "SIP Compounding",
        href: "/investments/sip",
        description: "Systematic Investment Planning — disciplined monthly investing",
      },
      {
        label: "Lumpsum & STP",
        href: "/investments/lumpsum",
        description: "Strategic one-time deployment via STP routes",
      },
      {
        label: "Bonds & Fixed Income",
        href: "/investments/bonds",
        description: "Corporate bonds, G-Secs and Sovereign Gold Bonds",
      },
      {
        label: "Portfolio Management (PMS)",
        href: "/investments/pms",
        description: "Active high-conviction portfolios for eligible HNI investors",
      },
      {
        label: "Alternative Funds (AIF)",
        href: "/investments/aif",
        description: "SEBI Category II & III pooled private capital vehicles",
      },
      {
        label: "Unlisted & Pre-IPO",
        href: "/investments/unlisted-pre-ipo",
        description: "Direct access to late-stage private enterprise stakes",
      },
    ],
  },
  {
    label: "Wealth Planning",
    href: "/wealth-solutions",
    children: [
      {
        label: "Goal-Based Investing",
        href: "/wealth-solutions/goal-based-investing",
        description: "Portfolios mapped to your specific life milestones",
      },
      {
        label: "Retirement Planning",
        href: "/wealth-solutions/retirement-planning",
        description: "Pre- and post-retirement inflation-adjusted cashflow",
      },
      {
        label: "Child Education Planning",
        href: "/wealth-solutions/child-education",
        description: "Education inflation planning over 10–18 year horizons",
      },
      {
        label: "Wealth Creation",
        href: "/wealth-solutions/wealth-creation",
        description: "Long-term multi-generational compounding strategies",
      },
      {
        label: "Portfolio Diagnostic Review",
        href: "/wealth-solutions/portfolio-review",
        description: "Diagnostic audit of existing schemes, overlaps and fees",
      },
    ],
  },
  {
    label: "Protection",
    href: "/protection",
    children: [
      {
        label: "Term Insurance",
        href: "/protection/term-insurance",
        description: "Pure risk protection at an affordable premium",
      },
      {
        label: "Health Insurance",
        href: "/protection/health-insurance",
        description: "Family floater, super top-up and critical care cover",
      },
      {
        label: "Life Insurance",
        href: "/protection/life-insurance",
        description: "Comprehensive financial insulation for your family",
      },
      {
        label: "General Insurance",
        href: "/protection/general-insurance",
        description: "Asset, motor, and commercial liability protection",
      },
    ],
  },
  {
    label: "Tools",
    href: "/tools",
    children: [
      {
        label: "SIP Calculator",
        href: "/tools/sip-calculator",
        description: "Project systematic monthly compounding growth",
      },
      {
        label: "Lumpsum Calculator",
        href: "/tools/lumpsum-calculator",
        description: "Estimate returns on one-time surplus capital",
      },
      {
        label: "Step-Up SIP Calculator",
        href: "/tools/step-up-sip-calculator",
        description: "Model annual contribution escalations",
      },
      {
        label: "Goal Planner",
        href: "/tools/goal-planner",
        description: "Reverse-calculate required monthly investments",
      },
      {
        label: "Retirement Calculator",
        href: "/tools/retirement-calculator",
        description: "Determine inflation-adjusted corpus requirements",
      },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      {
        label: "Articles & Perspectives",
        href: "/insights/blog",
        description: "Objective market analysis and investing frameworks",
      },
      {
        label: "Mutual Fund Guide",
        href: "/insights/mutual-fund-guide",
        description: "Foundational education on categories, NAV and risk",
      },
      {
        label: "Frequently Asked Questions",
        href: "/insights/faq",
        description: "Common questions on distribution, fees, and safety",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
