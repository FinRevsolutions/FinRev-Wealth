// ============================================================
// FINREV SOLUTIONS — Master Financial Tools Registry
// Complete metadata and categorization for all 32 calculators
// ============================================================

export type ToolCategory =
  | "investment"
  | "goal-planning"
  | "personal-finance"
  | "protection"
  | "loans-tax";

export interface ToolCategoryInfo {
  id: ToolCategory;
  label: string;
  badge: string;
  description: string;
  count: number;
}

export interface FinancialTool {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: ToolCategory;
  categoryLabel: string;
  badge: string;
  description: string;
  iconName: string;
  featuredOnHome?: boolean;
  tags: string[];
}

export const TOOL_CATEGORIES: ToolCategoryInfo[] = [
  {
    id: "investment",
    label: "Investment",
    badge: "Compounding",
    description: "Systematic wealth building, lump sum growth, cash flow withdrawals, and return analytics.",
    count: 10,
  },
  {
    id: "goal-planning",
    label: "Goal Planning",
    badge: "Milestones",
    description: "Reverse-engineered targets for retirement, education, weddings, homes, and financial independence.",
    count: 7,
  },
  {
    id: "personal-finance",
    label: "Personal Finance",
    badge: "Health Check",
    description: "Emergency liquidity, net worth balance sheet, savings efficiency, and asset allocation.",
    count: 5,
  },
  {
    id: "protection",
    label: "Protection",
    badge: "Risk Cover",
    description: "Quantify family income replacement, human life value, and comprehensive health buffers.",
    count: 3,
  },
  {
    id: "loans-tax",
    label: "Loans & Tax",
    badge: "Optimization",
    description: "Loan amortization, prepayments, rent vs buy economics, NPS, PPF, and EPF growth.",
    count: 7,
  },
];

export const TOOLS_REGISTRY: FinancialTool[] = [
  // ------------------------------------------------------------
  // Category 1: Investment Calculators (10)
  // ------------------------------------------------------------
  {
    id: "sip-calculator",
    slug: "sip-calculator",
    title: "Systematic Investment Plan (SIP) Calculator",
    shortTitle: "SIP Calculator",
    category: "investment",
    categoryLabel: "Investment",
    badge: "Monthly Compounding",
    description: "Simulate disciplined monthly compounding in mutual funds across 5, 10, 20, and 30-year horizons.",
    iconName: "TrendingUp",
    featuredOnHome: true,
    tags: ["sip", "mutual fund", "compounding", "monthly", "wealth", "investing"],
  },
  {
    id: "step-up-sip-calculator",
    slug: "step-up-sip-calculator",
    title: "Step-Up SIP Calculator",
    shortTitle: "Step-Up SIP",
    category: "investment",
    categoryLabel: "Investment",
    badge: "Annual Escalation",
    description: "Model the exponential compounding advantage of increasing your monthly SIP in tandem with annual income increments.",
    iconName: "ArrowUpRight",
    tags: ["step up", "top up sip", "salary hike", "annual increment", "compounding"],
  },
  {
    id: "lumpsum-calculator",
    slug: "lumpsum-calculator",
    title: "Lumpsum Investment Calculator",
    shortTitle: "Lumpsum Calculator",
    category: "investment",
    categoryLabel: "Investment",
    badge: "One-Time Outlay",
    description: "Calculate the future value of a single one-time capital investment compounded over long horizons.",
    iconName: "Coins",
    featuredOnHome: true,
    tags: ["lumpsum", "one time", "capital growth", "wealth creation"],
  },
  {
    id: "stp-calculator",
    slug: "stp-calculator",
    title: "Systematic Transfer Plan (STP) Calculator",
    shortTitle: "STP Calculator",
    category: "investment",
    categoryLabel: "Investment",
    badge: "Asset Staggering",
    description: "Simulate phased transfers from liquid/debt funds into equity to average out market volatility smoothly.",
    iconName: "Repeat",
    tags: ["stp", "systematic transfer", "debt to equity", "volatility", "rupee cost averaging"],
  },
  {
    id: "swp-calculator",
    slug: "swp-calculator",
    title: "Systematic Withdrawal Plan (SWP) Calculator",
    shortTitle: "SWP Calculator",
    category: "investment",
    categoryLabel: "Investment",
    badge: "Monthly Cash Flow",
    description: "Model regular monthly cash flows from an accumulated mutual fund corpus while preserving capital longevity.",
    iconName: "Banknote",
    featuredOnHome: true,
    tags: ["swp", "systematic withdrawal", "pension", "cash flow", "passive income"],
  },
  {
    id: "sip-vs-lumpsum-calculator",
    slug: "sip-vs-lumpsum-calculator",
    title: "SIP vs Lumpsum Calculator",
    shortTitle: "SIP vs Lumpsum",
    category: "investment",
    categoryLabel: "Investment",
    badge: "Strategy Compare",
    description: "Compare deploying capital upfront as a lumpsum versus staggering contributions monthly via SIP.",
    iconName: "Scale",
    tags: ["sip vs lumpsum", "comparison", "timing", "market entry", "allocation"],
  },
  {
    id: "cagr-calculator",
    slug: "cagr-calculator",
    title: "Compound Annual Growth Rate (CAGR) Calculator",
    shortTitle: "CAGR Calculator",
    category: "investment",
    categoryLabel: "Investment",
    badge: "Annualized Yield",
    description: "Calculate the true smoothed annualized compound growth rate of any investment over any time horizon.",
    iconName: "Percent",
    tags: ["cagr", "annualized return", "yield", "growth rate", "performance"],
  },
  {
    id: "xirr-calculator",
    slug: "xirr-calculator",
    title: "Extended Internal Rate of Return (XIRR) Calculator",
    shortTitle: "XIRR Calculator",
    category: "investment",
    categoryLabel: "Investment",
    badge: "Cash Flow Analytics",
    description: "Compute the exact annualized return across irregular, multiple investment entries and redemptions.",
    iconName: "Activity",
    tags: ["xirr", "irr", "irregular cash flows", "portfolio return", "mutual fund return"],
  },
  {
    id: "investment-return-calculator",
    slug: "investment-return-calculator",
    title: "Investment Return Calculator",
    shortTitle: "Return Calculator",
    category: "investment",
    categoryLabel: "Investment",
    badge: "Inflation-Adjusted",
    description: "Determine absolute, annualized, and inflation-adjusted real purchasing power returns across any asset class.",
    iconName: "PieChart",
    tags: ["return", "absolute return", "real return", "inflation adjusted", "purchasing power"],
  },
  {
    id: "compound-interest-calculator",
    slug: "compound-interest-calculator",
    title: "Compound Interest Calculator",
    shortTitle: "Compounding Calculator",
    category: "investment",
    categoryLabel: "Investment",
    badge: "Albert Einstein Rule",
    description: "Explore the magic of compound interest with flexible monthly, quarterly, semi-annual, and annual frequencies.",
    iconName: "Sparkles",
    tags: ["compound interest", "compounding", "frequency", "quarterly", "rule of 72"],
  },

  // ------------------------------------------------------------
  // Category 2: Goal Planning (7)
  // ------------------------------------------------------------
  {
    id: "goal-planner",
    slug: "goal-planner",
    title: "Goal-Based Investment Planner",
    shortTitle: "Goal Planner",
    category: "goal-planning",
    categoryLabel: "Goal Planning",
    badge: "Target Corpus",
    description: "Reverse-engineer the precise monthly SIP required to achieve any milestone corpus on schedule.",
    iconName: "Target",
    featuredOnHome: true,
    tags: ["goal", "target corpus", "milestone", "reverse sip", "wealth target"],
  },
  {
    id: "retirement-calculator",
    slug: "retirement-calculator",
    title: "Retirement Corpus & Pension Calculator",
    shortTitle: "Retirement Calculator",
    category: "goal-planning",
    categoryLabel: "Goal Planning",
    badge: "Pillar of Wealth",
    description: "Estimate inflation-indexed monthly living expenses post-retirement and the total corpus required for lifelong security.",
    iconName: "Sunset",
    featuredOnHome: true,
    tags: ["retirement", "pension", "post retirement", "annuity", "senior citizen", "golden years"],
  },
  {
    id: "child-education-calculator",
    slug: "child-education-calculator",
    title: "Child Higher Education Goal Calculator",
    shortTitle: "Child Education",
    category: "goal-planning",
    categoryLabel: "Goal Planning",
    badge: "Education Inflation",
    description: "Factor 10% educational inflation to calculate the exact future cost of college and the monthly SIP to fund it.",
    iconName: "GraduationCap",
    tags: ["education", "college fund", "child goal", "higher education", "tuition inflation"],
  },
  {
    id: "marriage-goal-calculator",
    slug: "marriage-goal-calculator",
    title: "Marriage Goal Planning Calculator",
    shortTitle: "Marriage Goal",
    category: "goal-planning",
    categoryLabel: "Goal Planning",
    badge: "Milestone Celebration",
    description: "Plan and fund wedding expenses with inflation adjustment and strategic equity-debt allocation.",
    iconName: "HeartHandshake",
    tags: ["marriage", "wedding", "family goal", "milestone savings", "child wedding"],
  },
  {
    id: "dream-home-calculator",
    slug: "dream-home-calculator",
    title: "Dream Home Down Payment & Goal Calculator",
    shortTitle: "Dream Home",
    category: "goal-planning",
    categoryLabel: "Goal Planning",
    badge: "Real Estate Goal",
    description: "Determine the down payment, stamp duty, and monthly investment required to acquire your target property.",
    iconName: "Home",
    tags: ["home", "house", "down payment", "stamp duty", "property goal"],
  },
  {
    id: "fire-calculator",
    slug: "fire-calculator",
    title: "Financial Independence, Retire Early (FIRE) Calculator",
    shortTitle: "FIRE Calculator",
    category: "goal-planning",
    categoryLabel: "Goal Planning",
    badge: "Safe Withdrawal Rate",
    description: "Compute your Lean FIRE, Standard FIRE, and Fat FIRE targets based on safe withdrawal rate benchmarks.",
    iconName: "Flame",
    tags: ["fire", "financial independence", "retire early", "lean fire", "fat fire", "swr"],
  },
  {
    id: "inflation-calculator",
    slug: "inflation-calculator",
    title: "Inflation & Future Cost Calculator",
    shortTitle: "Inflation Calculator",
    category: "goal-planning",
    categoryLabel: "Goal Planning",
    badge: "Purchasing Power",
    description: "Visualize how general inflation erodes purchasing power over 10, 20, and 30 years and calculate future costs.",
    iconName: "FlameKindling",
    tags: ["inflation", "purchasing power", "cpi", "future value", "cost increase"],
  },

  // ------------------------------------------------------------
  // Category 3: Personal Finance (5)
  // ------------------------------------------------------------
  {
    id: "emergency-fund-calculator",
    slug: "emergency-fund-calculator",
    title: "Emergency Contingency Fund Calculator",
    shortTitle: "Emergency Fund",
    category: "personal-finance",
    categoryLabel: "Personal Finance",
    badge: "Liquidity Shield",
    description: "Ascertain how many months of non-negotiable living expenses you need in liquid assets to weather unexpected crises.",
    iconName: "ShieldAlert",
    tags: ["emergency fund", "liquidity", "crisis buffer", "liquid mutual funds", "job loss"],
  },
  {
    id: "net-worth-calculator",
    slug: "net-worth-calculator",
    title: "Comprehensive Net Worth Calculator",
    shortTitle: "Net Worth",
    category: "personal-finance",
    categoryLabel: "Personal Finance",
    badge: "Personal Balance Sheet",
    description: "Aggregate liquid, investment, and physical assets against outstanding debts to track true personal balance sheet net worth.",
    iconName: "Briefcase",
    tags: ["net worth", "balance sheet", "assets", "liabilities", "solvency"],
  },
  {
    id: "savings-rate-calculator",
    slug: "savings-rate-calculator",
    title: "Personal Savings Rate Calculator",
    shortTitle: "Savings Rate",
    category: "personal-finance",
    categoryLabel: "Personal Finance",
    badge: "Efficiency Metric",
    description: "Evaluate the percentage of take-home income preserved each month and its direct correlation to financial freedom.",
    iconName: "PiggyBank",
    tags: ["savings rate", "budgeting", "financial freedom", "savings ratio"],
  },
  {
    id: "dti-calculator",
    slug: "dti-calculator",
    title: "Debt-to-Income (DTI) Ratio Calculator",
    shortTitle: "DTI Ratio",
    category: "personal-finance",
    categoryLabel: "Personal Finance",
    badge: "Credit Health",
    description: "Measure the proportion of monthly income committed to servicing debt and assess borrowing limits safely.",
    iconName: "CreditCard",
    tags: ["dti", "debt to income", "emi capacity", "credit score", "borrowing safety"],
  },
  {
    id: "asset-allocation-calculator",
    slug: "asset-allocation-calculator",
    title: "Strategic Asset Allocation Calculator",
    shortTitle: "Asset Allocation",
    category: "personal-finance",
    categoryLabel: "Personal Finance",
    badge: "Portfolio Harmony",
    description: "Discover the mathematically recommended distribution across equity, debt, and gold tailored to your risk capacity.",
    iconName: "Layers",
    tags: ["asset allocation", "equity debt gold", "rebalancing", "risk profile", "diversification"],
  },

  // ------------------------------------------------------------
  // Category 4: Protection (3)
  // ------------------------------------------------------------
  {
    id: "life-insurance-need-calculator",
    slug: "life-insurance-need-calculator",
    title: "Life Insurance Need (Term Cover) Calculator",
    shortTitle: "Life Insurance Need",
    category: "protection",
    categoryLabel: "Protection",
    badge: "Expense Replacement",
    description: "Accurately quantify the pure term life insurance cover required to protect family expenses and settle outstanding debts.",
    iconName: "ShieldCheck",
    tags: ["term insurance", "life insurance", "sum assured", "family security", "income replacement"],
  },
  {
    id: "human-life-value-calculator",
    slug: "human-life-value-calculator",
    title: "Human Life Value (HLV) Calculator",
    shortTitle: "HLV Calculator",
    category: "protection",
    categoryLabel: "Protection",
    badge: "Economic Valuation",
    description: "Determine the present capitalized economic value of your future earning potential using actuarial HLV methodology.",
    iconName: "UserCheck",
    tags: ["hlv", "human life value", "actuarial", "earning potential", "economic value"],
  },
  {
    id: "health-insurance-calculator",
    slug: "health-insurance-calculator",
    title: "Health Insurance Requirement Calculator",
    shortTitle: "Health Insurance",
    category: "protection",
    categoryLabel: "Protection",
    badge: "Medical Buffer",
    description: "Benchmark the optimal base health insurance plus Super Top-Up cover for your family based on city tier and medical inflation.",
    iconName: "Stethoscope",
    tags: ["health insurance", "mediclaim", "super top up", "hospitalization", "medical inflation"],
  },

  // ------------------------------------------------------------
  // Category 5: Loans & Tax/Retirement (7)
  // ------------------------------------------------------------
  {
    id: "loan-emi-calculator",
    slug: "loan-emi-calculator",
    title: "Equated Monthly Installment (EMI) Calculator",
    shortTitle: "Loan EMI",
    category: "loans-tax",
    categoryLabel: "Loans & Tax",
    badge: "Amortization",
    description: "Calculate monthly EMI and generate complete principal vs interest breakdown for personal, car, or business loans.",
    iconName: "Calculator",
    tags: ["emi", "loan calculator", "amortization", "interest rate", "reducing balance"],
  },
  {
    id: "home-loan-calculator",
    slug: "home-loan-calculator",
    title: "Home Loan EMI & Tax Benefit Calculator",
    shortTitle: "Home Loan",
    category: "loans-tax",
    categoryLabel: "Loans & Tax",
    badge: "Property Finance",
    description: "Model home loan EMIs, interest vs principal amortization schedules, and evaluate Section 80C & 24(b) deductions.",
    iconName: "Building",
    tags: ["home loan", "housing loan", "mortgage", "tax benefit 24b", "section 80c"],
  },
  {
    id: "loan-prepayment-calculator",
    slug: "loan-prepayment-calculator",
    title: "Loan Prepayment & Interest Savings Calculator",
    shortTitle: "Loan Prepayment",
    category: "loans-tax",
    categoryLabel: "Loans & Tax",
    badge: "Debt Freedom",
    description: "Discover how extra monthly prepayments or periodic lump sums drastically reduce loan tenure and save lakhs in interest.",
    iconName: "FastForward",
    tags: ["loan prepayment", "part payment", "interest saving", "tenure reduction", "foreclosure"],
  },
  {
    id: "rent-vs-buy-calculator",
    slug: "rent-vs-buy-calculator",
    title: "Rent vs Buy Real Estate Calculator",
    shortTitle: "Rent vs Buy",
    category: "loans-tax",
    categoryLabel: "Loans & Tax",
    badge: "Financial Economics",
    description: "Rigorous financial comparison between purchasing a home via mortgage versus renting and investing the difference in equities.",
    iconName: "ArrowLeftRight",
    tags: ["rent vs buy", "real estate vs equity", "home buying", "rental yield", "opportunity cost"],
  },
  {
    id: "nps-calculator",
    slug: "nps-calculator",
    title: "National Pension System (NPS) Calculator",
    shortTitle: "NPS Calculator",
    category: "loans-tax",
    categoryLabel: "Loans & Tax",
    badge: "PFRDA Governed",
    description: "Project Tier-1 pension accumulation, 60% tax-free lump sum withdrawal, and 40% mandatory monthly annuity pension.",
    iconName: "Landmark",
    tags: ["nps", "national pension system", "tier 1", "annuity pension", "section 80ccd"],
  },
  {
    id: "ppf-calculator",
    slug: "ppf-calculator",
    title: "Public Provident Fund (PPF) Calculator",
    shortTitle: "PPF Calculator",
    category: "loans-tax",
    categoryLabel: "Loans & Tax",
    badge: "Sovereign EEE",
    description: "Model 15-year statutory compounding at sovereign 7.1% p.a. interest with completely tax-exempt maturity under EEE status.",
    iconName: "Award",
    tags: ["ppf", "public provident fund", "eee", "tax free interest", "sovereign guarantee"],
  },
  {
    id: "epf-calculator",
    slug: "epf-calculator",
    title: "Employees' Provident Fund (EPF) Calculator",
    shortTitle: "EPF Calculator",
    category: "loans-tax",
    categoryLabel: "Loans & Tax",
    badge: "Retirement Security",
    description: "Forecast salaried EPF accumulation incorporating employer 3.67% match, annual salary increments, and 8.25% interest rate.",
    iconName: "BriefcaseBusiness",
    tags: ["epf", "provident fund", "pf", "salary increment", "retirement corpus"],
  },
];

export function getAllTools(): FinancialTool[] {
  return TOOLS_REGISTRY;
}

export function getToolsByCategory(category: ToolCategory): FinancialTool[] {
  return TOOLS_REGISTRY.filter((t) => t.category === category);
}

export function getToolBySlug(slug: string): FinancialTool | undefined {
  return TOOLS_REGISTRY.find((t) => t.slug === slug);
}

export function getHomeFeaturedTools(): FinancialTool[] {
  return TOOLS_REGISTRY.filter((t) => t.featuredOnHome);
}
