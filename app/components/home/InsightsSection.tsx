import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Clock } from "lucide-react";

const SUPPORTING_ARTICLES = [
  {
    category: "BEHAVIORAL FINANCE",
    title: "Why Pausing SIPs During Market Drawdowns Destroys Alpha",
    summary: "Empirical proof of why continuing rupee-cost averaging in corrective cycles delivers the highest 10-year compounding alpha.",
    readTime: "6 min read",
    href: "/insights/blog",
  },
  {
    category: "FIXED INCOME DISCIPLINE",
    title: "RBI Monetary Policy Cycles & Duration Risk Management",
    summary: "How sovereign yield curves and interest rate shifts impact corporate bond maturities, target maturity funds, and liquid buffers.",
    readTime: "7 min read",
    href: "/insights/blog",
  },
  {
    category: "REGULATORY COMPLIANCE",
    title: "Direct AMC Folio Structures vs. Brokerage Pool Accounts",
    summary: "Understanding the legal protection and operational transparency of holding mutual fund units directly with respective fund houses.",
    readTime: "5 min read",
    href: "/insights/faq",
  },
];

export function InsightsSection() {
  return (
    <section
      className="py-16 md:py-24 bg-white border-b border-[var(--color-border-subtle)]"
      aria-label="Editorial Financial Insights"
    >
      <div className="container-page">
        {/* Section Header — Financial Publication Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-[var(--color-border-strong)] gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                CURATED FINANCIAL INTELLIGENCE
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.14]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Independent Perspectives on Wealth & Capital.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
              Objective frameworks on asset allocation, behavioral discipline, market cycle resilience, and long-term capital compounding.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
          >
            <span>View All Insights & Research</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Editorial Publication Layout: 1 Dominant Feature (7 cols) + 3 Supporting Articles (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Featured Lead Research Article (7 cols) */}
          <div className="lg:col-span-7 bg-[var(--color-surface-canvas)] border border-[var(--color-border-strong)] p-6 sm:p-8 rounded-[4px] flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-[var(--color-primary)] text-white px-2.5 py-1 rounded-[2px]">
                  FEATURED RESEARCH
                </span>
                <span className="text-xs font-mono text-[var(--color-secondary)] font-semibold">
                  Mutual Fund Education
                </span>
                <span className="text-[var(--color-border-strong)]" aria-hidden="true">•</span>
                <span className="text-xs font-mono text-[var(--color-text-muted)] flex items-center gap-1">
                  <Clock size={12} />
                  <span>8 min read</span>
                </span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)] leading-tight mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The Mathematics of Compounding: How Expense Ratios and Volatility Drag Erode 20-Year Returns
              </h3>

              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6 font-normal">
                Investors often fixate on past 1-year returns while ignoring the compounding friction of fund turnover, excessive expense ratios, and behavioral churn. This empirical whitepaper models a 20-year portfolio to demonstrate how a 0.75% fee drag and erratic timing reduce final retirement corpus by up to 28%.
              </p>

              <div className="p-4 bg-white rounded-[3px] border border-[var(--color-border-subtle)] mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
                  Core Empirical Conclusion
                </span>
                <p className="text-xs text-[var(--color-primary)] font-medium leading-relaxed">
                  Consistent asset allocation combined with low-churn direct mutual fund distribution outperforms 85% of active tactical reallocation over rolling 15-year holding horizons.
                </p>
              </div>
            </div>

            <Link
              href="/insights/mutual-fund-guide"
              className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors group mt-2"
            >
              <span>Read Full Research Guide</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Supporting Articles Stack (5 cols) — Clean Hairline Rules, No Cards */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-[var(--color-border-subtle)]">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)] pb-4 block">
              Supporting Analysis & Guides
            </span>

            {SUPPORTING_ARTICLES.map((article, idx) => (
              <div key={idx} className="py-5 group">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-slate-300" aria-hidden="true">•</span>
                  <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                    {article.readTime}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors leading-snug mb-2">
                  <Link href={article.href}>
                    {article.title}
                  </Link>
                </h4>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed font-normal mb-3">
                  {article.summary}
                </p>

                <Link
                  href={article.href}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors group/link"
                >
                  <span>Read Analysis</span>
                  <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
