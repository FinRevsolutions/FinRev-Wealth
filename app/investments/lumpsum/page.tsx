import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Banknote, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Calculator, Shuffle, ArrowDown, Layers, ArrowRightLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Lumpsum Investment & Systematic Transfer Plans (STP)",
  "Deploy one-time surplus capital and business liquidity prudently using Systematic Transfer Plans (STP) with FINREV SOLUTIONS (ARN-195797).",
  "/investments/lumpsum"
);

const FAQS = [
  {
    q: "How does a Systematic Transfer Plan (STP) mitigate equity market timing risk?",
    a: "Instead of committing 100% of large capital into volatile equities on a single trading day, capital is initially parked in a low-risk Liquid or Overnight fund. A pre-set mandate systematically shifts small, fixed tranches (weekly or monthly) into target equity funds over 6 to 12 months, smoothing out market entry prices while the idle balance continues earning liquid fund returns.",
  },
  {
    q: "When is direct lumpsum equity allocation justifiable?",
    a: "Direct lumpsum deployment is typically evaluated when broader equity market valuations (Price-to-Earnings, Market Cap to GDP) are trading at steep cyclical discounts following severe corrections, or when your investment time horizon exceeds 10–15 years, where entry-point valuation variance diminishes over time.",
  },
  {
    q: "What are the tax implications of an STP execution?",
    a: "Under Indian Income Tax rules, each transfer from the source scheme (Liquid/Debt) to the destination scheme (Equity) constitutes a redemption from the source fund. Any capital appreciation accrued while parked in the liquid fund is subject to applicable capital gains tax rates based on the holding period of that specific tranche.",
  },
  {
    q: "Can an STP transfer capital between funds managed by different AMCs?",
    a: "No. Under SEBI regulations, a Systematic Transfer Plan can only operate between mutual fund schemes belonging to the same Asset Management Company (for example, within ICICI Prudential or within HDFC AMC). Cross-AMC transfers require manual redemption and subsequent re-investment.",
  },
];

const COMPARISON_ROWS = [
  {
    parameter: "Market Timing Vulnerability",
    lumpsum: "High. Entering at market cyclical peaks exposes full capital to immediate drawdown.",
    stp: "Low to Moderate. Staged tranches average the acquisition cost across market swings.",
  },
  {
    parameter: "Unallocated Capital Yield",
    lumpsum: "Zero prior to deployment (if held in standard bank savings accounts).",
    stp: "Accumulates returns in Liquid/Ultra Short Duration funds until transferred.",
  },
  {
    parameter: "Deployment Horizon",
    lumpsum: "Immediate (T or T+1 business day execution).",
    stp: "Staggered across 3, 6, 9, or 12 months depending on volatility regime.",
  },
  {
    parameter: "Behavioral Regret Risk",
    lumpsum: "Significant psychological distress if markets correct right after allocation.",
    stp: "Neutralized. Market corrections are welcomed as opportunities to accumulate more units.",
  },
  {
    parameter: "Ideal Market Environment",
    lumpsum: "Deep cyclical bear markets or low valuation percentiles.",
    stp: "Elevated market valuations, all-time market highs, or heightened macro uncertainty.",
  },
];

export default function LumpsumPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/investments" className="hover:text-[var(--color-text-primary)] transition-colors">Investments</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Lumpsum & STP</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <Banknote size={13} className="text-[var(--color-secondary)]" />
            <span>Strategic Capital Deployment</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lumpsum & Systematic Transfer Plans (STP)
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Deploying substantial one-time capital — whether from real estate divestments, annual bonuses, inheritance, or corporate treasury surpluses — requires institutional discipline to prevent entering at cyclical market peaks.
          </p>
        </div>

        {/* ARCHITECTURAL FLOW DIAGRAM: STP Mechanics (Instead of multiple generic cards) */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Process Flow Architecture</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                The Systematic Transfer Plan (STP) Deployment Pipeline
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">SEBI Regulated Intra-AMC Transfer</span>
          </div>

          {/* Staged Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {/* Step 1: Capital Inflow & Liquid Parking */}
            <div className="border border-[var(--color-border-subtle)] rounded-[4px] p-5 bg-[var(--color-surface-low)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] mb-2">
                  <span>STAGE 01</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-800 font-semibold text-[10px] rounded-[2px] border border-blue-200">Source Repository</span>
                </div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2">
                  Lumpsum Surplus in Liquid Fund
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  100% of surplus capital is parked in an ultra-low-risk Liquid or Overnight mutual fund scheme, preserving principal while earning modest market-linked yield.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[var(--color-secondary)] border-t border-[var(--color-border-subtle)] pt-2 font-semibold">
                • Capital Protected from Equities<br />
                • Daily Liquidity Maintained
              </div>
            </div>

            {/* Step 2: Automated Staged Tranches */}
            <div className="border border-[var(--color-secondary)] rounded-[4px] p-5 bg-white flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[var(--color-secondary)] mb-2">
                  <span>STAGE 02</span>
                  <span className="px-2 py-0.5 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] font-semibold text-[10px] rounded-[2px] border border-[var(--color-border-strong)]">Automated Mandate</span>
                </div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2">
                  Scheduled Tranche Transfers
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  A pre-configured electronic mandate automatically transfers a predetermined sum (e.g. ₹50,000/week or month) from the Liquid Fund to targeted Equity funds.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[var(--color-primary)] border-t border-[var(--color-border-subtle)] pt-2 font-semibold">
                • 6 to 12 Month Horizon<br />
                • Zero Market Timing Anxiety
              </div>
            </div>

            {/* Step 3: Compounding Long-Term Target */}
            <div className="border border-[var(--color-border-subtle)] rounded-[4px] p-5 bg-[var(--color-surface-low)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] mb-2">
                  <span>STAGE 03</span>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 font-semibold text-[10px] rounded-[2px] border border-emerald-200">Destination Growth</span>
                </div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2">
                  Target Equity Fund Portfolio
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Units in Flexi Cap, Large Cap, or Multi-Asset schemes are acquired at diverse valuation points over time, establishing an averaged equity foundation for long-term compounding.
                </p>
              </div>
              <div className="text-[11px] font-mono text-emerald-800 border-t border-[var(--color-border-subtle)] pt-2 font-semibold">
                • Multi-Year Compounding<br />
                • Smoothed Acquisition Cost
              </div>
            </div>
          </div>
        </div>

        {/* COMPARATIVE ANALYSIS: Lumpsum vs STP */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Decision Matrix</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Comparative Assessment: Direct Lumpsum vs Staged STP
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3 w-1/4">Evaluation Dimension</th>
                  <th className="py-3 px-3 w-3/8">Direct Lumpsum Allocation</th>
                  <th className="py-3 px-3 w-3/8">Systematic Transfer Plan (STP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.parameter}>
                    <td className="py-3.5 px-3 font-semibold text-[var(--color-text-primary)]">{row.parameter}</td>
                    <td className="py-3.5 px-3 text-xs leading-relaxed">{row.lumpsum}</td>
                    <td className="py-3.5 px-3 text-xs leading-relaxed font-semibold text-[var(--color-primary)]">{row.stp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Market Timing Considerations & Tactical Valuation Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Market Timing Considerations
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Academic research and real-world market histories indicate that missing just the 10 best trading days in a decade can halve overall compounding returns. However, entering fully at an all-time valuation peak can cause multi-year portfolio stagnation.
            </p>
            <div className="space-y-2 text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-text-secondary)]">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>STP solves the psychological deadlock: you remain invested while staggering risk.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>If markets rally, your deployed capital participates; if markets fall, your next tranches buy cheaper.</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Direct Lumpsum in Fixed Income vs Equity
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              While equity allocation benefits strongly from staged STP, fixed income deployments (Target Maturity Funds, Corporate Bond Funds, Sovereign Gold Bonds) are generally well-suited for direct lumpsum execution when prevailing yields are attractive.
            </p>
            <div className="space-y-2 text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-text-secondary)]">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Locks in current coupon yields across defined maturity horizons without equity volatility.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Ideal for corporate treasury surplus and conservative institutional reserves.</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Lumpsum & STP
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
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Advisory Desk</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Structure Your Lumpsum or STP Deployment
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Consult with Panchanan Kumar (ARN-195797) to calibrate deployment tranches against current valuation indicators and liquidity constraints.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/tools/lumpsum-calculator"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[var(--color-border-subtle)] text-xs font-semibold text-[var(--color-text-primary)] rounded-[4px] hover:border-[var(--color-primary)] transition-colors"
            >
              <Calculator size={14} />
              <span>Lumpsum Calculator</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Schedule Review</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>AMFI / SEBI Statutory Disclosure:</strong> Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing. Direct lumpsum deployment in equity can expose capital to short-term volatility. STP deployment does not assure gains or protect against negative market movements. FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
