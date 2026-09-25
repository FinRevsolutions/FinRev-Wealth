import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const SOLUTIONS = [
  {
    category: "CORE INVESTMENTS",
    service: "Mutual Funds",
    description: "Professionally managed portfolios across Equity, Debt, and Hybrid categories from India's leading Asset Management Companies.",
    href: "/investments/mutual-funds",
    action: "View Mutual Funds",
  },
  {
    category: "CORE INVESTMENTS",
    service: "Systematic Investment Plans (SIP)",
    description: "Automated monthly investing harnessing the mathematical power of rupee-cost averaging and long-term compounding.",
    href: "/investments/sip",
    action: "Explore SIP Plans",
  },
  {
    category: "CORE INVESTMENTS",
    service: "Lumpsum & Systematic Transfer (STP)",
    description: "Strategic staggered capital deployment to manage market entry valuations and optimize cash returns.",
    href: "/investments/lumpsum",
    action: "View Lumpsum & STP",
  },
  {
    category: "FIXED INCOME",
    service: "Bonds & Fixed Income",
    description: "Sovereign Gold Bonds, government securities, and high-credit corporate bonds providing predictable income and portfolio stability.",
    href: "/investments/bonds",
    action: "View Fixed Income",
  },
  {
    category: "SPECIALIZED ASSETS",
    service: "Portfolio Management Services (PMS)",
    description: "Professional portfolio management with direct demat account holding, active stock selection, and institutional research.",
    href: "/investments/pms",
    action: "Explore PMS Options",
  },
  {
    category: "SPECIALIZED ASSETS",
    service: "Alternative Investment Funds (AIF)",
    description: "SEBI-regulated Category II & III pooled vehicles covering private equity, private debt, and long-short strategies for eligible investors.",
    href: "/investments/aif",
    action: "Explore AIF Offerings",
  },
  {
    category: "SPECIALIZED ASSETS",
    service: "Unlisted Shares & Pre-IPO",
    description: "Access to equity stakes in high-growth unlisted enterprises prior to official public stock exchange listing.",
    href: "/investments/unlisted-pre-ipo",
    action: "View Pre-IPO Solutions",
  },
  {
    category: "CAPITAL DEFENSE",
    service: "Insurance (Term & Health)",
    description: "Pure-risk term life protection and comprehensive health coverage to insulate family balance sheets against life shocks.",
    href: "/protection",
    action: "Explore Protection",
  },
  {
    category: "WEALTH PLANNING",
    service: "Goal-Based Planning",
    description: "Milestone-specific investment roadmaps reverse-calculated to fund children's higher education, asset acquisition, and family milestones.",
    href: "/wealth-solutions/goal-based-investing",
    action: "Plan Your Goals",
  },
  {
    category: "WEALTH PLANNING",
    service: "Retirement Planning",
    description: "Inflation-adjusted post-retirement corpus modeling designed to sustain cash flow throughout thirty or more years of retirement.",
    href: "/wealth-solutions/retirement-planning",
    action: "Model Retirement",
  },
];

export function SolutionsMatrix() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface-canvas)] border-b border-[var(--color-border-subtle)]" aria-label="Solutions Matrix">
      <Container>
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-4 border-b border-[var(--color-border-strong)] gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                Solutions Directory
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.15]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Comprehensive Wealth & Protection Solutions.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
              Every instrument and strategy offered by FINREV is delivered with transparent folios held directly in your name with regulated institutions.
            </p>
          </div>
          <Link
            href="/investments"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
          >
            <span>View All Investment Categories</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Structured Table/Row Matrix (No Cards) */}
        <div className="divide-y divide-[var(--color-border-subtle)] bg-white rounded-[6px] border border-[var(--color-border-strong)] overflow-hidden shadow-sm">
          {SOLUTIONS.map((item, index) => (
            <Link
              key={item.service}
              href={item.href}
              className="group block p-4 sm:p-6 hover:bg-[var(--color-surface-canvas)] transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center">
                {/* Column 1: Index & Category (3 cols) */}
                <div className="md:col-span-3 flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[var(--color-text-muted)] w-6 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)] bg-[var(--color-surface-canvas)] group-hover:bg-white px-2 py-0.5 rounded-[3px] border border-[var(--color-border-subtle)] truncate">
                    {item.category}
                  </span>
                </div>

                {/* Column 2: Service Name & Description (7 cols) */}
                <div className="md:col-span-7">
                  <h3 className="text-base font-bold text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                    {item.service}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Column 3: Action Link & Directional Arrow (2 cols) */}
                <div className="md:col-span-2 flex items-center md:justify-end gap-1.5 text-xs font-bold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] pt-1 md:pt-0">
                  <span className="hidden sm:inline">{item.action}</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Matrix Regulatory Footnote */}
        <div className="pt-6 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
          <span>Mutual Fund Distributor ARN-195797 · Subject to Market Risks · Direct Folio Holding</span>
          <Link
            href="/contact"
            className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-semibold inline-flex items-center gap-1"
          >
            <span>Need Guidance on Portfolio Selection? Speak with an Expert</span>
            <ArrowRight size={12} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
