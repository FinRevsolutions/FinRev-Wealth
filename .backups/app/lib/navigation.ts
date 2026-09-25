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
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
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
        label: "SIP",
        href: "/investments/sip",
        description: "Systematic Investment Planning — disciplined monthly investing",
      },
      {
        label: "Lumpsum",
        href: "/investments/lumpsum",
        description: "Strategic one-time deployment via STP routes",
      },
      {
        label: "Bonds",
        href: "/investments/bonds",
        description: "Corporate bonds, G-Secs and Sovereign Gold Bonds",
      },
      {
        label: "PMS",
        href: "/investments/pms",
        description: "Portfolio Management Services for HNI investors",
      },
      {
        label: "AIF",
        href: "/investments/aif",
        description: "Alternative Investment Funds — Category II & III",
      },
      {
        label: "Unlisted & Pre-IPO",
        href: "/investments/unlisted-pre-ipo",
        description: "Access to private equity and pre-listing opportunities",
      },
    ],
  },
  {
    label: "Wealth Solutions",
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
        description: "Pre- and post-retirement cashflow strategies",
      },
      {
        label: "Child Education",
        href: "/wealth-solutions/child-education",
        description: "Education inflation planning over 10–18 year horizons",
      },
      {
        label: "Wealth Creation",
        href: "/wealth-solutions/wealth-creation",
        description: "Long-term multi-generational compounding strategies",
      },
      {
        label: "Portfolio Review",
        href: "/wealth-solutions/portfolio-review",
        description: "Diagnostic audit of existing schemes and allocations",
      },
    ],
  },
  {
    label: "Protection",
    href: "/protection",
    children: [
      {
        label: "Life Insurance",
        href: "/protection/life-insurance",
        description: "Comprehensive life cover for your family's security",
      },
      {
        label: "Term Insurance",
        href: "/protection/term-insurance",
        description: "Pure risk protection at an affordable premium",
      },
      {
        label: "Health Insurance",
        href: "/protection/health-insurance",
        description: "Family floater, super top-up and critical illness cover",
      },
      {
        label: "General Insurance",
        href: "/protection/general-insurance",
        description: "Motor, asset, travel and commercial insurance",
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
        description: "Project the future value of systematic investments",
      },
      {
        label: "Lumpsum Calculator",
        href: "/tools/lumpsum-calculator",
        description: "Estimate growth on one-time investments",
      },
      {
        label: "Goal Planner",
        href: "/tools/goal-planner",
        description: "Reverse-calculate SIPs required to reach any goal",
      },
      {
        label: "Retirement Calculator",
        href: "/tools/retirement-calculator",
        description: "Plan the corpus required for a stress-free retirement",
      },
      {
        label: "Step-Up SIP Calculator",
        href: "/tools/step-up-sip-calculator",
        description: "Model annual increments in your SIP contributions",
      },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      {
        label: "Blog",
        href: "/insights/blog",
        description: "Market commentary, guides and investment insights",
      },
      {
        label: "Mutual Fund Guide",
        href: "/insights/mutual-fund-guide",
        description: "Everything about funds, NAV, expense ratios and more",
      },
      {
        label: "FAQ",
        href: "/insights/faq",
        description: "Answers to common investor questions",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const FOOTER_LINKS = {
  investments: [
    { label: "Mutual Funds", href: "/investments/mutual-funds" },
    { label: "SIP", href: "/investments/sip" },
    { label: "Lumpsum", href: "/investments/lumpsum" },
    { label: "Bonds", href: "/investments/bonds" },
    { label: "PMS", href: "/investments/pms" },
    { label: "AIF", href: "/investments/aif" },
    { label: "Unlisted & Pre-IPO", href: "/investments/unlisted-pre-ipo" },
  ],
  wealthSolutions: [
    { label: "Goal-Based Investing", href: "/wealth-solutions/goal-based-investing" },
    { label: "Retirement Planning", href: "/wealth-solutions/retirement-planning" },
    { label: "Child Education", href: "/wealth-solutions/child-education" },
    { label: "Wealth Creation", href: "/wealth-solutions/wealth-creation" },
    { label: "Portfolio Review", href: "/wealth-solutions/portfolio-review" },
  ],
  protection: [
    { label: "Life Insurance", href: "/protection/life-insurance" },
    { label: "Term Insurance", href: "/protection/term-insurance" },
    { label: "Health Insurance", href: "/protection/health-insurance" },
    { label: "General Insurance", href: "/protection/general-insurance" },
  ],
  tools: [
    { label: "SIP Calculator", href: "/tools/sip-calculator" },
    { label: "Lumpsum Calculator", href: "/tools/lumpsum-calculator" },
    { label: "Goal Planner", href: "/tools/goal-planner" },
    { label: "Retirement Calculator", href: "/tools/retirement-calculator" },
    { label: "Step-Up SIP Calculator", href: "/tools/step-up-sip-calculator" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Regulatory Disclosures", href: "/legal/regulatory-disclosures" },
  ],
  company: [
    { label: "About FINREV", href: "/about" },
    { label: "Insights & Blog", href: "/insights" },
    { label: "Contact", href: "/contact" },
    { label: "Client Login", href: "/client/login" },
  ],
};
