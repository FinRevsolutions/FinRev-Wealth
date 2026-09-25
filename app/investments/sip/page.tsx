import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Coins, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Calculator, TrendingUp, Calendar, Repeat, BarChart3, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Systematic Investment Plan (SIP) — Disciplined Wealth Compounding",
  "Start a Systematic Investment Plan (SIP) in mutual funds with FINREV SOLUTIONS (ARN-195797). Benefit from rupee cost averaging, automated bank mandates, and long-term compounding.",
  "/investments/sip"
);

const FAQS = [
  {
    q: "What is Rupee Cost Averaging in an SIP?",
    a: "When market prices fall, your fixed monthly SIP installment automatically acquires more mutual fund units at lower NAVs. When markets appreciate, your installment purchases fewer units at higher NAVs. Over market cycles, this lowers your weighted average purchase cost without requiring speculative market timing.",
  },
  {
    q: "Can I pause, stop, or step-up my monthly SIP?",
    a: "Yes. SIPs provide complete operational flexibility. You can pause installments for 1–6 months, cancel the mandate without financial penalty, or set an annual Step-Up (e.g. +10% annually) to match career salary increments.",
  },
  {
    q: "What occurs if my registered bank account has insufficient balance?",
    a: "The AMC does not levy a penalty; they simply skip unit allotment for that particular cycle. However, your commercial bank may levy standard ECS/NACH mandate dishonor fees. We recommend scheduling SIP debit dates 2–3 business days after monthly salary credit.",
  },
  {
    q: "Is there an optimal calendar date for SIP execution?",
    a: "Longitudinal analysis of Indian market indices across 25+ years demonstrates virtually zero statistical difference in long-term compounding returns across calendar days (1st, 5th, 10th, 20th). Regularity and tenure far outweigh calendar date selection.",
  },
];

const COMPOUNDING_MILESTONES = [
  {
    years: "Year 05",
    horizon: "Foundation Phase",
    invested: "₹6,00,000",
    projected: "₹8,24,864",
    growthRatio: "27% from compounding",
    description: "Capital base is being established. Capital contributions dominate portfolio value.",
  },
  {
    years: "Year 10",
    horizon: "Inflection Phase",
    invested: "₹12,00,000",
    projected: "₹23,23,391",
    growthRatio: "48% from compounding",
    description: "Compounded gains begin matching total principal contributions as exponential acceleration takes effect.",
  },
  {
    years: "Year 15",
    horizon: "Acceleration Phase",
    invested: "₹18,00,000",
    projected: "₹50,45,760",
    growthRatio: "64% from compounding",
    description: "Compounding returns now account for roughly two-thirds of the total accumulated wealth corpus.",
  },
  {
    years: "Year 20",
    horizon: "Maturity Phase",
    invested: "₹24,00,000",
    projected: "₹99,91,479",
    growthRatio: "76% from compounding",
    description: "Market compounding dwarfs contributions by over 3:1, turning modest monthly savings into generational corpus.",
  },
];

export default function SIPPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/investments" className="hover:text-[var(--color-text-primary)] transition-colors">Investments</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Systematic Investment Plan</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <Coins size={13} className="text-[var(--color-secondary)]" />
            <span>Disciplined Wealth Compounding</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Systematic Investment Planning (SIP)
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Eliminate the behavioral hazards of market timing. A Systematic Investment Plan converts market volatility
            into an operational advantage by automating disciplined monthly capital accumulation through SEBI-regulated mutual funds.
          </p>
        </div>

        {/* SIP Core Mechanics: Timeline & Principles (Not a generic 3-card grid) */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Architectural Framework</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                The Three Operational Engines of SIP
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">Automated Execution Protocol</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border-subtle)]">
            <div className="py-4 md:py-0 md:pr-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                <Repeat size={14} className="text-[var(--color-secondary)]" />
                <span>01. Rupee-Cost Averaging</span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                By investing a fixed rupee allocation each month, you buy more mutual fund units when markets correct and fewer when valuations expand, structurally lowering your average cost per unit over market cycles.
              </p>
            </div>

            <div className="py-4 md:py-0 md:px-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                <Clock size={14} className="text-[var(--color-secondary)]" />
                <span>02. Behavioral Discipline</span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Automated OTM/eNACH bank debits institutionalize the fundamental savings principle: <span className="italic font-medium">Income – Investment = Expenditure</span>, protecting capital from discretionary lifestyle inflation.
              </p>
            </div>

            <div className="py-4 md:py-0 md:pl-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                <TrendingUp size={14} className="text-[var(--color-secondary)]" />
                <span>03. Non-Linear Compounding</span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Returns generate subsequent returns. In equity mutual funds, reinvested dividends and capital gains expand exponentially, shifting the bulk of wealth creation into years 10 through 20 of consistent participation.
              </p>
            </div>
          </div>
        </div>

        {/* VISUALIZATION: Rupee Cost Averaging Mechanism Table */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Empirical Mechanism</span>
              <span className="text-[11px] font-mono text-[var(--color-text-muted)]">Illustrative Demonstration</span>
            </div>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              How Rupee-Cost Averaging Functions During Market Volatility
            </h2>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Example scenario: A 5-month cycle showing fixed ₹10,000 monthly investments during market corrections and subsequent recovery.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3">Installment Period</th>
                  <th className="py-3 px-3">Allocated Amount</th>
                  <th className="py-3 px-3">Scheme NAV</th>
                  <th className="py-3 px-3">Units Acquired</th>
                  <th className="py-3 px-3 text-right">Cumulative Portfolio Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Month 1 (Market Baseline)</td>
                  <td className="py-3 px-3">₹10,000</td>
                  <td className="py-3 px-3 font-mono">₹50.00</td>
                  <td className="py-3 px-3 font-mono">200.00 units</td>
                  <td className="py-3 px-3 font-mono text-right">₹10,000</td>
                </tr>
                <tr className="bg-amber-50/40">
                  <td className="py-3 px-3 font-semibold text-amber-900">Month 2 (Market Correction -20%)</td>
                  <td className="py-3 px-3">₹10,000</td>
                  <td className="py-3 px-3 font-mono text-amber-900 font-semibold">₹40.00</td>
                  <td className="py-3 px-3 font-mono text-amber-900 font-semibold">250.00 units (+25% units)</td>
                  <td className="py-3 px-3 font-mono text-right">₹18,000</td>
                </tr>
                <tr className="bg-amber-50/70">
                  <td className="py-3 px-3 font-semibold text-amber-950">Month 3 (Market Bottom -33%)</td>
                  <td className="py-3 px-3">₹10,000</td>
                  <td className="py-3 px-3 font-mono text-amber-950 font-semibold">₹33.33</td>
                  <td className="py-3 px-3 font-mono text-amber-950 font-semibold">300.03 units (+50% units)</td>
                  <td className="py-3 px-3 font-mono text-right">₹25,000</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Month 4 (Recovery Phase)</td>
                  <td className="py-3 px-3">₹10,000</td>
                  <td className="py-3 px-3 font-mono">₹45.00</td>
                  <td className="py-3 px-3 font-mono">222.22 units</td>
                  <td className="py-3 px-3 font-mono text-right">₹43,751</td>
                </tr>
                <tr className="bg-emerald-50/40">
                  <td className="py-3 px-3 font-semibold text-emerald-900">Month 5 (New High +10%)</td>
                  <td className="py-3 px-3">₹10,000</td>
                  <td className="py-3 px-3 font-mono font-semibold text-emerald-900">₹55.00</td>
                  <td className="py-3 px-3 font-mono">181.82 units</td>
                  <td className="py-3 px-3 font-mono text-right font-bold text-emerald-900">₹63,474</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-[var(--color-surface-low)] p-4 rounded-[4px]">
            <div className="text-xs text-[var(--color-text-secondary)]">
              <span className="font-semibold text-[var(--color-text-primary)] block">Weighted Average Acquisition Cost: ₹43.32 / unit</span>
              <span className="text-[11px] text-[var(--color-text-muted)]">Even though start NAV was ₹50 and end NAV was ₹55, the average purchase cost was ₹43.32 due to down-market unit accumulation.</span>
            </div>
            <div className="text-right shrink-0">
              <span className="text-xs font-mono font-bold text-[var(--color-secondary)] block">Total Investment: ₹50,000</span>
              <span className="text-xs font-mono font-bold text-[var(--color-primary)]">Portfolio Value: ₹63,474 (+26.9%)</span>
            </div>
          </div>
        </div>

        {/* TIMELINE / COMPOUNDING HORIZON (Linear Contribution vs Compounding Alpha) */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Longitudinal Compounding</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Compounding Progression Across 20 Years
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">Model: ₹10,000/mo @ 12% CAGR</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {COMPOUNDING_MILESTONES.map((m) => (
              <div key={m.years} className="border border-[var(--color-border-subtle)] rounded-[4px] p-4 bg-[var(--color-surface-low)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] mb-1">
                    <span>{m.years}</span>
                    <span className="text-[var(--color-secondary)] font-semibold">{m.horizon}</span>
                  </div>
                  <div className="text-xl font-bold text-[var(--color-text-primary)] font-mono my-1">
                    {m.projected}
                  </div>
                  <div className="text-[11px] text-[var(--color-text-muted)] mb-3">
                    Invested: <span className="font-mono text-[var(--color-text-primary)]">{m.invested}</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-secondary)] mb-1">
                    {m.growthRatio}
                  </div>
                  <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border-subtle)] pt-2">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-amber-50/60 border border-amber-200 rounded-[4px] text-[11px] text-amber-900 leading-relaxed">
            <strong>Regulatory Disclaimer:</strong> The above multi-year projections are purely illustrative mathematical simulations based on an assumed 12% CAGR and do not represent guaranteed or assured returns. Mutual funds are subject to market risks, and actual portfolio returns will fluctuate based on economic cycles, market conditions, and scheme asset allocations.
          </div>
        </div>

        {/* Technical Guidance & SIP vs Step-Up Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Fixed SIP vs Step-Up SIP Mandates
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              A standard SIP maintains a static monthly debit throughout the investment tenure. A Step-Up SIP automatically increases your contribution by a predetermined percentage (typically 10%) or fixed rupee amount annually.
            </p>
            <div className="space-y-2 text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-text-secondary)]">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Absorbs annual salary and professional income increments smoothly.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Compresses the time required to achieve long-term milestone goals by up to 35%.</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--color-border-subtle)]">
              <Link
                href="/tools/step-up-sip-calculator"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)]"
              >
                <span>Launch Step-Up SIP Simulator</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Direct AMC Custody & Bank Mandates
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              All SIP investments through FINREV SOLUTIONS operate under SEBI's direct settlement framework:
            </p>
            <div className="space-y-2 text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-text-secondary)]">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Monthly debits transfer directly from your bank to the clearing corporation (BSE StAR MF / NSE NMF II).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Mutual fund folios are registered directly in your name with respective AMCs and RTAs (CAMS / KFintech).</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--color-border-subtle)]">
              <Link
                href="/tools/sip-calculator"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)]"
              >
                <span>Launch Interactive SIP Calculator</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Systematic Investment Plans
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
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Client Onboarding</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Establish an Automated SIP Portfolio
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Connect with Panchanan Kumar (ARN-195797) to map your monthly surpluses to target risk profiles and fund categories.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/tools/sip-calculator"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[var(--color-border-subtle)] text-xs font-semibold text-[var(--color-text-primary)] rounded-[4px] hover:border-[var(--color-primary)] transition-colors"
            >
              <Calculator size={14} />
              <span>Simulate SIP</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Consult on Mandate</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>AMFI / SEBI Statutory Disclosure:</strong> Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing. Past performance is not indicative of future returns. Systematic Investment Plan (SIP) does not guarantee profits or protect against market losses during market downturns. FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
