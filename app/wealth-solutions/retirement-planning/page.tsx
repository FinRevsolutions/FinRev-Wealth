import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, CheckCircle2, Calculator, TrendingUp, HelpCircle, Layers, ArrowRightLeft, DollarSign, Wallet } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Retirement Planning & Systematic Withdrawal Plans (SWP)",
  "Plan your inflation-hedged retirement corpus and implement cash-flow architectures via Systematic Withdrawal Plans (SWP) with FINREV SOLUTIONS (ARN-195797).",
  "/wealth-solutions/retirement-planning"
);

const RETIREMENT_PHASES = [
  {
    phase: "Phase 01",
    name: "The Accumulation Phase",
    timeframe: "Career Earning Span (Ages 25 to 55)",
    focus: "Exponential Capital Compounding",
    description:
      "Capital is systematically accumulated through disciplined monthly SIPs in diversified equity mutual funds. Surplus career income and annual appraisal step-ups are harnessed to outpace inflation and build a resilient core corpus.",
    strategy: "High equity allocation (75%–85%), automated reinvestment, zero premature withdrawals.",
  },
  {
    phase: "Phase 02",
    name: "The Transition Phase",
    timeframe: "Pre-Retirement Window (3 to 5 Years Prior)",
    focus: "Systematic De-Risking & Capital Stabilization",
    description:
      "A systematic transfer protocol moves a defined portion of accumulated gains from volatile equities into high-grade debt and target maturity funds. This insulates the upcoming retirement milestone from sudden cyclical bear markets.",
    strategy: "Shift toward balanced asset allocation (50% Equity / 50% Debt), establishing cash reserves.",
  },
  {
    phase: "Phase 03",
    name: "The Distribution Phase",
    timeframe: "Post-Retirement Horizon (Ages 60+)",
    focus: "Tax-Aware Cash-Flow Generation & Longevity Defense",
    description:
      "Execution of a 3-Bucket cash-flow architecture. Regular monthly income is disbursed via Systematic Withdrawal Plans (SWP) from liquid buffers, while the remaining corpus stays invested to counter healthcare inflation and longevity risks.",
    strategy: "Structured SWP drawdowns, annual cash-flow rebalancing, preservation of principal longevity.",
  },
];

const THREE_BUCKET_ARCHITECTURE = [
  {
    bucket: "Bucket 01: Immediate Liquidity",
    duration: "Years 1 to 2 Cashflow",
    allocation: "Liquid & Overnight Funds",
    role: "Provides uninterrupted monthly SWP credits directly to the investor's bank account regardless of market fluctuations.",
    risk: "Zero equity market exposure • High capital safety",
  },
  {
    bucket: "Bucket 02: Medium-Term Stability",
    duration: "Years 3 to 5 Cashflow",
    allocation: "Short Duration Debt & Conservative Hybrid",
    role: "Generates steady coupon yields and acts as the feeder replenishment source for Bucket 01 during market drawdowns.",
    risk: "Low duration risk • Stable accrual yield",
  },
  {
    bucket: "Bucket 03: Long-Term Growth",
    duration: "Years 6+ Longevity Defense",
    allocation: "Diversified Flexi Cap & Multi-Asset Funds",
    role: "Grows the underlying capital faster than post-retirement medical and lifestyle inflation (historically 8%–10%+).",
    risk: "Managed equity volatility • Prevents outliving corpus",
  },
];

const FAQS = [
  {
    q: "How does a Systematic Withdrawal Plan (SWP) work in the Distribution Phase?",
    a: "An SWP instructs the mutual fund AMC to redeem a fixed rupee amount (e.g. ₹60,000/month) from your accumulated scheme and credit it directly to your registered bank account on a chosen date. The remaining balance continues compounding in the market, providing ongoing inflation defense.",
  },
  {
    q: "How does SWP taxation compare to traditional fixed deposit interest?",
    a: "Unlike fixed deposits where 100% of interest earned is taxed annually at your applicable slab rate regardless of withdrawal, each mutual fund SWP installment comprises partly capital return and partly capital gains. Only the capital gains proportion is subject to tax under applicable capital gains rules, depending on the scheme type and holding period. Tax outcomes depend on individual income brackets and prevailing statutes.",
  },
  {
    q: "What is Longevity Risk in post-retirement planning?",
    a: "Longevity risk is the danger of an investor outliving their retirement savings due to rising life expectancies and compounding medical inflation. Parking 100% of retirement capital in low-yielding fixed deposits often results in negative real (inflation-adjusted) returns, causing corpus depletion within 15–20 years.",
  },
  {
    q: "What is the recommended Sustainable Withdrawal Rate (SWR)?",
    a: "Empirical planning typically models an initial annual withdrawal rate between 4% and 6% of the starting retirement corpus, dynamically calibrated to asset allocation, expected longevity, and supplementary pension cash flows.",
  },
];

export default function RetirementPlanningPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/wealth-solutions" className="hover:text-[var(--color-text-primary)] transition-colors">Wealth Solutions</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Retirement Planning</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <Clock size={13} className="text-[var(--color-secondary)]" />
            <span>Retirement Cash-Flow Architecture</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Retirement Planning & SWP Solutions
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Retirement is not an arbitrary age—it is a calibrated financial number. We architect your progression
            across the Accumulation, Transition, and Distribution phases to protect your lifestyle against longevity risk.
          </p>
        </div>

        {/* THE 3 CORE PHASES: Accumulation, Transition, Distribution */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Lifecycle Framework</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                The Three Phases of Retirement Wealth Management
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">Accumulate • Transition • Distribute</span>
          </div>

          <div className="space-y-6 divide-y divide-[var(--color-border-subtle)]">
            {RETIREMENT_PHASES.map((phase, idx) => (
              <div key={phase.phase} className={idx > 0 ? "pt-6" : ""}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="md:w-1/3">
                    <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider block mb-1">
                      {phase.phase} • {phase.timeframe}
                    </span>
                    <h3 className="text-base font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                      {phase.name}
                    </h3>
                    <span className="inline-block mt-2 text-[11px] font-semibold text-[var(--color-primary)] bg-[var(--color-surface-low)] px-2.5 py-1 rounded-[2px] border border-[var(--color-border-subtle)]">
                      {phase.focus}
                    </span>
                  </div>
                  <div className="md:w-2/3 space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    <p>{phase.description}</p>
                    <div className="p-2.5 bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] rounded-[2px] text-[11px] font-mono text-[var(--color-text-primary)]">
                      <strong>Asset Allocation Mandate:</strong> {phase.strategy}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CASH-FLOW VISUALIZATION: The 3-Bucket SWP Architecture */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Distribution Phase Dynamics</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                The 3-Bucket Cash-Flow Framework (SWP)
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">Monthly Cashflow Flowchart</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {THREE_BUCKET_ARCHITECTURE.map((b) => (
              <div key={b.bucket} className="border border-[var(--color-border-subtle)] rounded-[4px] p-5 bg-[var(--color-surface-low)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] mb-2">
                    <span className="text-[var(--color-secondary)] font-bold">{b.duration}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-1">
                    {b.bucket}
                  </h3>
                  <div className="text-xs font-semibold text-[var(--color-primary)] font-mono mb-3 bg-white p-2 rounded-[2px] border border-[var(--color-border-subtle)]">
                    {b.allocation}
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {b.role}
                  </p>
                </div>
                <div className="text-[11px] text-[var(--color-text-muted)] border-t border-[var(--color-border-subtle)] pt-2 font-mono">
                  {b.risk}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[var(--color-surface-container-highest)] border border-[var(--color-border-subtle)] rounded-[4px] text-xs text-[var(--color-text-secondary)] leading-relaxed flex items-start gap-3">
            <ArrowRightLeft size={16} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[var(--color-text-primary)] block mb-0.5">Dynamic Bucket Replenishment Protocol:</strong>
              When equity markets outperform, profits from Bucket 03 are rebalanced down into Bucket 02 and Bucket 01. During severe market drawdowns, monthly SWP withdrawals are fulfilled solely from Bucket 01, leaving Bucket 03 undisturbed to fully participate in market recovery.
            </div>
          </div>
        </div>

        {/* TAXATION & SUSTAINABLE WITHDRAWAL REALITIES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Tax Efficiency Considerations in SWP
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Unlike traditional fixed deposit interest where 100% of the interest payout is taxed at your full slab rate in the year of accrual:
            </p>
            <div className="space-y-2 text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-text-secondary)]">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>SWP redemptions are treated as part capital return and part capital gains.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Only the capital gain portion is taxable under applicable capital gains tax provisions.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Exact tax impact depends on the investor's tax slab, holding period, and applicable statutory provisions.</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Managing Healthcare & Longevity Inflation
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Healthcare inflation in India regularly exceeds 12%–14% annually. A retirement strategy that relies solely on fixed income guarantees loss of real purchasing power:
            </p>
            <div className="space-y-2 text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-text-secondary)]">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Bucket 03 equity allocation ensures the purchasing power of your withdrawals grows with inflation.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Annual reviews calibrate the SWP withdrawal amount against actual portfolio returns.</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Retirement Planning
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-[var(--color-border-subtle)] pb-4">
                <div className="flex items-start gap-2 mb-1.5">
                  <HelpCircle size={14} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <h3 className="text-xs font-bold text-[var(--color-text-primary)] leading-snug">{faq.q}</h3>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-[var(--color-surface-container-highest)] border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Retirement Desk</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Calculate Your Retirement Corpus & SWP Feasibility
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Model required accumulations and monthly cash-flow structures with Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/tools/retirement-calculator"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[var(--color-border-subtle)] text-xs font-semibold text-[var(--color-text-primary)] rounded-[4px] hover:border-[var(--color-primary)] transition-colors"
            >
              <Calculator size={14} />
              <span>Retirement Calculator</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Consult on Retirement</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing. Systematic Withdrawal Plans (SWP) do not guarantee fixed monthly returns or principal protection. Tax implications depend on individual investor circumstances and prevailing tax laws. FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
