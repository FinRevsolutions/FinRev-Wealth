import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PieChart, ShieldCheck, CheckCircle2, AlertTriangle, Layers, Percent, TrendingUp, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { CONTACT, REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Mutual Funds Distribution — Equity, Debt, Hybrid & ELSS",
  "Access 40+ leading Asset Management Companies across Equity, Debt, Hybrid, Index, and ELSS funds through AMFI-registered distributor Panchanan Kumar (ARN-195797).",
  "/investments/mutual-funds"
);

const FUND_CATEGORIES = [
  {
    name: "Equity Mutual Funds",
    tenure: "5+ Years Horizon",
    risk: "Moderate to Very High",
    summary:
      "Invest in diversified baskets of publicly listed Indian and global equities. Covers Large Cap, Mid Cap, Small Cap, Flexi Cap, and Thematic funds aimed at long-term capital appreciation.",
    types: ["Large Cap (Top 100)", "Flexi Cap (Dynamic Multi-Cap)", "Mid & Small Cap (High Growth)", "ELSS (Section 80C Tax Saving)"],
  },
  {
    name: "Debt & Fixed Income Funds",
    tenure: "1 Day to 5 Years",
    risk: "Low to Moderate",
    summary:
      "Deploy capital into government treasury bills, corporate bonds, commercial paper, and certificates of deposit. Engineered for capital preservation and liquidity management.",
    types: ["Overnight & Liquid Funds", "Short Duration Funds", "Corporate Bond Funds", "Target Maturity G-Sec Funds"],
  },
  {
    name: "Hybrid & Multi-Asset Funds",
    tenure: "3 to 5 Years",
    risk: "Moderate",
    summary:
      "Dynamically balance equity growth with debt stability and gold hedging. Designed for investors seeking downside cushion during equity corrections.",
    types: ["Balanced Advantage / Dynamic Asset Allocation", "Aggressive Hybrid", "Multi-Asset Allocation", "Equity Savings"],
  },
  {
    name: "Passive & Index Funds",
    tenure: "5+ Years",
    risk: "Market Risk (Beta)",
    summary:
      "Low-cost, rule-based replication of major benchmark indices such as Nifty 50, Nifty Next 50, and BSE Sensex with minimal fund manager bias.",
    types: ["Nifty 50 Index Funds", "Nifty Next 50", "Target Maturity Index Funds", "International Passives"],
  },
];

const FAQS = [
  {
    q: "How does investing through an AMFI-registered distributor work?",
    a: "FINREV SOLUTIONS (ARN-195797) acts as your distribution partner. Your investments are held directly with the respective Asset Management Company (AMC) in your name. We help you select suitable schemes, manage KYC, execute paperless transactions, and periodically review portfolio performance.",
  },
  {
    q: "Does FINREV hold my investment funds?",
    a: "No. All investments are transacted directly between your bank account and the respective AMC via regulated payment rails (BSE StAR MF, NSE NMF II, or AMC portals). FINREV does not operate pool accounts or hold client capital.",
  },
  {
    q: "What is the difference between Regular and Direct plans?",
    a: "Direct plans are bought directly from AMCs without distributor assistance. Regular plans include distributor facilitation, ongoing servicing, annual review, rebalancing guidance, and operational assistance. FINREV distributes regular plans under ARN-195797.",
  },
  {
    q: "What is ELSS and what is its lock-in period?",
    a: "Equity Linked Savings Scheme (ELSS) is a diversified equity fund eligible for tax deduction under Section 80C of the Income Tax Act (up to ₹1.5 Lakhs). It has a statutory mandatory lock-in period of 3 years, the shortest among all 80C options.",
  },
];

export default function MutualFundsPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/investments" className="hover:text-[var(--color-text-primary)] transition-colors">Investments</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Mutual Funds</span>
        </nav>

        {/* Hero */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] text-xs font-bold rounded border border-[var(--color-border-strong)] mb-3">
            <ShieldCheck size={14} />
            <span>AMFI Regulated Distribution • ARN-195797</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Mutual Fund Solutions Across 40+ AMCs
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            We structure transparent, diversified mutual fund portfolios mapped strictly to your financial horizon,
            risk capacity, and long-term capital compounding goals.
          </p>
        </div>

        {/* Key Attributes Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Partner AMCs", value: "40+ Fund Houses", icon: Layers },
            { label: "Direct Ownership", value: "Individual Folios", icon: ShieldCheck },
            { label: "Distribution License", value: REGULATORY.arnNumber, icon: Percent },
            { label: "Execution Model", value: "100% Paperless", icon: TrendingUp },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="p-4 bg-white rounded-xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-low)] text-[var(--color-secondary)] flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-[var(--color-text-muted)] font-bold uppercase block">{item.label}</span>
                  <span className="text-xs font-bold text-[var(--color-text-primary)]">{item.value}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <SectionLabel>Asset Classification</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mt-1.5" style={{ fontFamily: "var(--font-heading)" }}>
              The Four Core Mutual Fund Quadrants
            </h2>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">
              Every scheme category fulfills a distinct function in portfolio architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FUND_CATEGORIES.map((cat) => (
              <div key={cat.name} className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-border-strong)]">
                      {cat.tenure}
                    </span>
                    <span className="text-[11px] text-[var(--color-text-muted)] font-medium">Risk: {cat.risk}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-5">
                    {cat.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[var(--color-border-subtle)] mb-5">
                    {cat.types.map((t) => (
                      <div key={t} className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] font-medium">
                        <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0" />
                        <span className="truncate">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-secondary-700)]"
                >
                  <span>Inquire About {cat.name}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* VISUAL 1: Risk-Return Matrix Across Fund Categories */}
        <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="max-w-2xl mb-6">
            <SectionLabel>Portfolio Calibration</SectionLabel>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The Mutual Fund Risk-Return Spectrum
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Higher potential capital compounding involves correspondingly higher interim volatility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              {
                tier: "01",
                label: "Overnight & Liquid",
                risk: "Low Risk",
                riskColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
                horizon: "1 Day – 3 Months",
                primaryUse: "Cash management & emergency reserve",
                benchmark: "TREPS / 91-Day T-Bill",
              },
              {
                tier: "02",
                label: "Corporate & Debt",
                risk: "Low to Moderate",
                riskColor: "text-blue-700 bg-blue-50 border-blue-200",
                horizon: "1 – 3 Years",
                primaryUse: "Capital preservation & regular yield",
                benchmark: "NIFTY Short Duration Debt",
              },
              {
                tier: "03",
                label: "Hybrid / Multi-Asset",
                risk: "Moderate Risk",
                riskColor: "text-amber-700 bg-amber-50 border-amber-200",
                horizon: "3 – 5 Years",
                primaryUse: "Dynamic asset allocation with downside hedge",
                benchmark: "NIFTY 50 Hybrid Composite",
              },
              {
                tier: "04",
                label: "Large & Flexi Cap",
                risk: "Moderately High",
                riskColor: "text-orange-700 bg-orange-50 border-orange-200",
                horizon: "5+ Years",
                primaryUse: "Long-term GDP growth & wealth creation",
                benchmark: "NIFTY 50 / NIFTY 500 TRI",
              },
              {
                tier: "05",
                label: "Mid & Small Cap",
                risk: "High / Very High",
                riskColor: "text-rose-700 bg-rose-50 border-rose-200",
                horizon: "7 – 10+ Years",
                primaryUse: "Aggressive multi-decade alpha compounding",
                benchmark: "NIFTY Midcap 150 / Smallcap 250",
              },
            ].map((step) => (
              <div key={step.tier} className="p-4 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-[var(--color-text-muted)]">STEP {step.tier}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${step.riskColor}`}>
                      {step.risk}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-1 leading-snug">{step.label}</h4>
                  <span className="text-[11px] font-semibold text-[var(--color-secondary)] block mb-2">{step.horizon}</span>
                  <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed mb-3">
                    {step.primaryUse}
                  </p>
                </div>
                <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] text-[var(--color-text-secondary)] font-mono">
                  {step.benchmark}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <SectionLabel>Asset Classification</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mt-1.5" style={{ fontFamily: "var(--font-heading)" }}>
              The Four Core Mutual Fund Quadrants
            </h2>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">
              Every scheme category fulfills a distinct function in portfolio architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FUND_CATEGORIES.map((cat) => (
              <div key={cat.name} className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-border-strong)]">
                      {cat.tenure}
                    </span>
                    <span className="text-[11px] text-[var(--color-text-muted)] font-medium">Risk: {cat.risk}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-5">
                    {cat.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[var(--color-border-subtle)] mb-5">
                    {cat.types.map((t) => (
                      <div key={t} className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] font-medium">
                        <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0" />
                        <span className="truncate">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-secondary-700)]"
                >
                  <span>Inquire About {cat.name}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* VISUAL 2: Mathematical Proof: NAV vs Compounding */}
        <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col gap-3">
              <SectionLabel>Investor Education</SectionLabel>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Demystifying NAV: Why a ₹10 NAV is Not "Cheaper" than a ₹500 NAV
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                A common retail misconception is treating a Mutual Fund NAV like a company stock price. In reality,
                NAV simply represents Total Assets under Management divided by Total Units. What creates returns is
                the percentage growth of underlying portfolio securities, not the starting NAV value.
              </p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                As demonstrated in the comparison table, whether you purchase 10,000 units at ₹10 or 200 units at ₹500,
                a 15% underlying portfolio gain produces the exact same ₹15,000 profit.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[var(--color-surface-canvas)] p-5 rounded-xl border border-[var(--color-border-subtle)]">
              <span className="text-[11px] font-bold text-[var(--color-text-primary)] block mb-3">
                Side-by-Side Mathematical Illustration (₹1,00,000 Invested)
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-lg border border-[var(--color-border-subtle)]">
                  <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase block">Fund A (New / Low NAV)</span>
                  <div className="mt-2 space-y-1 font-mono text-[11px]">
                    <div className="flex justify-between"><span>Starting NAV:</span><strong>₹10.00</strong></div>
                    <div className="flex justify-between"><span>Units Allotted:</span><strong>10,000</strong></div>
                    <div className="flex justify-between text-[var(--color-secondary)]"><span>Growth (+15%):</span><strong>₹11.50</strong></div>
                    <div className="pt-2 border-t border-[var(--color-border-subtle)] flex justify-between font-bold text-[var(--color-text-primary)]">
                      <span>End Value:</span><span>₹1,15,000</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-[var(--color-border-subtle)]">
                  <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase block">Fund B (Established / High NAV)</span>
                  <div className="mt-2 space-y-1 font-mono text-[11px]">
                    <div className="flex justify-between"><span>Starting NAV:</span><strong>₹500.00</strong></div>
                    <div className="flex justify-between"><span>Units Allotted:</span><strong>200</strong></div>
                    <div className="flex justify-between text-[var(--color-secondary)]"><span>Growth (+15%):</span><strong>₹575.00</strong></div>
                    <div className="pt-2 border-t border-[var(--color-border-subtle)] flex justify-between font-bold text-[var(--color-text-primary)]">
                      <span>End Value:</span><span>₹1,15,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-[10px] text-[var(--color-text-muted)] block text-center mt-3 font-semibold">
                Net Result: Total wealth generated is mathematically identical.
              </span>
            </div>
          </div>
        </div>

        {/* VISUAL 3: The 4-Stage Investment Journey */}
        <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="max-w-2xl mb-6">
            <SectionLabel>Institutional Process</SectionLabel>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The FINREV 4-Stage Investment Journey
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Disciplined scheme onboarding backed by SEBI-compliant distribution protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Financial Goal Mapping",
                desc: "Identify your time horizon, target corpus, surplus monthly cashflow, and psychological drawdown tolerance.",
              },
              {
                step: "02",
                title: "Asset Allocation Modeling",
                desc: "Determine appropriate equity-debt split and filter schemes across top-tier AMCs with consistent rolling alpha.",
              },
              {
                step: "03",
                title: "100% Paperless Execution",
                desc: "Aadhaar/PAN digital KYC completion and automated bank NACH mandate setup with direct AMC folio generation.",
              },
              {
                step: "04",
                title: "Annual Audit & Rebalancing",
                desc: "Periodic portfolio health reviews, tax-loss harvesting, and gradual de-risking as milestones approach.",
              },
            ].map((st) => (
              <div key={st.step} className="p-5 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)]">
                <span className="font-mono text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-border-strong)] inline-block mb-3">
                  STAGE {st.step}
                </span>
                <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>
                  {st.title}
                </h4>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk & Suitability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h4 className="text-sm font-bold text-[var(--color-text-primary)] flex items-center gap-2 mb-3">
              <CheckCircle2 size={16} className="text-[var(--color-secondary)]" />
              Who Mutual Funds Are Suitable For
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[var(--color-text-secondary)]">
              <li>• Investors with horizons of 3 to 15+ years looking to counter inflation.</li>
              <li>• Salaried professionals seeking automated monthly wealth accumulation via SIP.</li>
              <li>• High-net-worth investors seeking disciplined multi-cap diversification.</li>
              <li>• Taxpayers aiming to claim 80C deductions through 3-year ELSS equity funds.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h4 className="text-sm font-bold text-[var(--color-text-primary)] flex items-center gap-2 mb-3">
              <AlertTriangle size={16} className="text-[var(--color-tertiary)]" />
              Key Risks & Considerations
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[var(--color-text-muted)]">
              <li>• <strong>Market Volatility:</strong> Equity funds fluctuate with macroeconomic conditions.</li>
              <li>• <strong>Interest Rate & Credit Risk:</strong> Debt funds are exposed to bond yields and rating migrations.</li>
              <li>• <strong>No Guaranteed Returns:</strong> Mutual funds do not provide assured capital or interest payments.</li>
              <li>• <strong>Exit Loads & Capital Gains Tax:</strong> Redemptions are subject to applicable STCG and LTCG tax.</li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="p-5 bg-white rounded-xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-2 mb-2">
                  <HelpCircle size={16} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] leading-snug">{faq.q}</h4>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary-fixed)] block mb-1">
              Distribution Desk
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Construct a Disciplined Mutual Fund Portfolio
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Contact founder Panchanan Kumar (ARN-195797) to structure your scheme selection across top-tier AMCs.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Speak with an Expert</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Statutory Disclaimer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclaimer:</strong> Mutual fund investments are subject to market risks.
            Read all scheme related documents carefully before investing. FINREV SOLUTIONS is an AMFI-registered
            Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
