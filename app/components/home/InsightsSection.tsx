import Link from "next/link";
import { ArrowRight, HelpCircle, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const FEATURED_ARTICLES = [
  {
    category: "Mutual Fund Education",
    title: "Demystifying NAV, Expense Ratios & Total Return Index",
    summary:
      "Why a lower NAV does not mean a fund is 'cheap', and how expense ratio compression impacts 20-year compounding outcomes.",
    readTime: "5 min read",
    href: "/insights/mutual-fund-guide",
  },
  {
    category: "Behavioral Finance",
    title: "Why Pausing SIPs in Market Corrections Destroys Alpha",
    summary:
      "Empirical analysis proving why continuous rupee cost averaging during bear regimes delivers the highest long-term portfolio returns.",
    readTime: "6 min read",
    href: "/insights/blog",
  },
  {
    category: "Fixed Income",
    title: "RBI Rate Cycles & Duration Risk in Debt Funds",
    summary:
      "How central bank policy shifts impact target maturity funds, corporate bond funds, and liquid treasury buckets in India.",
    readTime: "7 min read",
    href: "/insights/blog",
  },
];

const FAQS = [
  {
    q: "Is FINREV an Investment Advisor or a Mutual Fund Distributor?",
    a: "FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797). We provide mutual fund distribution, portfolio review, and financial solution implementation under SEBI (Mutual Funds) Regulations, 1996.",
  },
  {
    q: "Are my mutual fund investments held by FINREV?",
    a: "No. Your mutual fund investments are held directly with the respective Asset Management Companies (AMCs) in your name. FINREV does not operate pool accounts or hold investor money.",
  },
  {
    q: "What is the fee or cost to open an account with FINREV?",
    a: "FINREV does not charge investors an upfront account opening fee for mutual fund distribution. Distributors earn commissions paid by AMCs, fully disclosed in scheme SID/KIM documents.",
  },
];

export function InsightsSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-surface-canvas)] border-t border-[var(--color-border-subtle)]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Investor Knowledge</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Financial Intelligence & Insights
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] mt-2.5 leading-relaxed">
              Master the principles of asset allocation, behavioral discipline, and tax optimization.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-secondary-700)]"
          >
            <span>Visit Insights & Knowledge Hub</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 2-Column Split: Articles on Left (7 cols), FAQs on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Magazine Editorial (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
              Featured Research & Education
            </span>

            {/* Lead Flagship Article */}
            <Link
              href={FEATURED_ARTICLES[0].href}
              className="p-7 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-secondary)] transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-emerald-subtle)]/40 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-[10px] font-bold text-white bg-[var(--color-secondary)] px-2.5 py-0.5 rounded tracking-wide">
                    FLAGSHIP GUIDE
                  </span>
                  <span className="text-[11px] font-medium text-[var(--color-text-muted)]">
                    {FEATURED_ARTICLES[0].readTime} • FINREV Research Desk
                  </span>
                </div>

                <h3
                  className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary)] transition-colors mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {FEATURED_ARTICLES[0].title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {FEATURED_ARTICLES[0].summary}
                </p>

                {/* Key Takeaways Box */}
                <div className="p-3.5 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1.5">
                    Key Investor Takeaways
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--color-text-primary)]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" />
                      NAV is not a share price
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" />
                      TER compounding friction
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" />
                      Total Return Index (TRI) benchmark
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" />
                      Long-horizon alpha tracking
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--color-secondary)] inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  <span>Read Full Educational Primer</span>
                  <ArrowRight size={14} />
                </span>
                <span className="text-[11px] text-[var(--color-text-muted)] font-mono">SEBI & AMFI Investor Education</span>
              </div>
            </Link>

            {/* Secondary Articles List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURED_ARTICLES.slice(1).map((art) => (
                <Link
                  key={art.title}
                  href={art.href}
                  className="p-5 rounded-xl bg-white border border-[var(--color-border-subtle)] shadow-xs hover:shadow-md hover:border-[var(--color-secondary)] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2 py-0.5 rounded border border-[var(--color-border-strong)]">
                        {art.category}
                      </span>
                      <span className="text-[11px] text-[var(--color-text-muted)]">{art.readTime}</span>
                    </div>
                    <h4
                      className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary)] transition-colors mb-2 leading-snug line-clamp-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {art.title}
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
                      {art.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-secondary)] mt-4 group-hover:translate-x-1 transition-transform">
                    Read Analysis
                    <ChevronRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
              Frequently Asked Questions
            </span>
            <div className="flex flex-col gap-3">
              {FAQS.map((faq) => (
                <div
                  key={faq.q}
                  className="p-5 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-start gap-2.5 mb-2">
                    <HelpCircle size={17} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)] leading-snug">
                      {faq.q}
                    </h4>
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/insights/faq"
              className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] text-center text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-colors flex items-center justify-center gap-2"
            >
              <span>View All 20+ Investor Questions</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
