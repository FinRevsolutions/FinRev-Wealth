import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Layers, Banknote, Scale, Activity, Percent } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Bonds & Fixed Income Solutions — Corporate Bonds & G-Secs",
  "Explore institutional fixed income instruments: Corporate Bonds, Government Securities (G-Secs), and Sovereign Gold Bonds (SGBs) through FINREV SOLUTIONS (ARN-195797).",
  "/investments/bonds"
);

const BOND_TYPES = [
  {
    name: "Corporate Bonds",
    issuer: "Rated Private & PSU Corporates",
    tenure: "2 to 10 Years",
    yieldType: "Fixed / Floating Semi-Annual Coupon",
    summary:
      "Debt securities issued by Indian corporations with AAA, AA+, or AA credit ratings. Structured to generate regular coupon cash flow, pricing a credit spread over the sovereign curve.",
    suitability: "HNIs and treasury accounts seeking predictable regular income with managed credit spreads.",
  },
  {
    name: "Government Securities (G-Secs)",
    issuer: "Reserve Bank of India (Sovereign)",
    tenure: "5 to 40 Years",
    yieldType: "Half-Yearly Sovereign Coupon",
    summary:
      "Issued on behalf of the Government of India. Carries sovereign credit backing (zero credit default risk), though secondary market prices oscillate with RBI benchmark repo rate cycles.",
    suitability: "Ultra-long-term capital allocation, pension matching, and zero-credit-risk asset allocation.",
  },
  {
    name: "Sovereign Gold Bonds (SGBs)",
    issuer: "Government of India / RBI",
    tenure: "8 Years (Secondary liquidity on exchanges)",
    yieldType: "2.50% Annual Coupon + Gold Appreciation",
    summary:
      "Government-issued securities paying a semi-annual 2.50% interest coupon in addition to capital gains linked to domestic 999 purity gold prices, exempt from capital gains tax upon maturity.",
    suitability: "Investors seeking gold portfolio allocation without storage costs or making charges.",
  },
  {
    name: "Target Maturity Debt Passives",
    issuer: "AMCs investing in G-Sec / SDL / PSU",
    tenure: "Defined Maturity Calendar Year",
    yieldType: "Pass-through Yield to Maturity (YTM)",
    summary:
      "Open-ended passively managed debt index funds that lock in prevailing yields by holding high-grade sovereign and PSU papers until a defined calendar maturity date.",
    suitability: "Investors matching specific future cashflow obligations with predictable duration risk.",
  },
];

const FAQS = [
  {
    q: "Are bonds completely risk-free or guaranteed?",
    a: "No. Even Government Securities (G-Secs) — which carry zero sovereign default risk — remain exposed to interest rate risk, meaning their secondary market price falls when market interest rates rise. Corporate bonds carry credit risk (issuer downgrade or repayment default) and secondary liquidity risk.",
  },
  {
    q: "What is the relationship between bond yields and bond prices?",
    a: "Bond prices move inversely to benchmark interest rates. When the RBI hikes policy rates, newly issued bonds offer higher coupons, causing existing lower-coupon bonds to trade at a market discount. Longer duration securities experience higher price volatility during rate shifts.",
  },
  {
    q: "How are bond returns taxed under current Indian tax law?",
    a: "Under the Finance Act 2023, capital gains and interest income from specified mutual debt investments made on or after April 1, 2023 are added to the investor's taxable income and taxed at their applicable slab rates, irrespective of holding period.",
  },
  {
    q: "What does Credit Rating signify in Corporate Bonds?",
    a: "SEBI-regulated credit rating agencies (CRISIL, ICRA, CARE) evaluate an issuer's financial capacity to service debt obligations. Ratings range from AAA (highest safety) to D (default). FINREV strictly prioritizes investment-grade, high-governance issuers.",
  },
];

const FOUR_FACTOR_FRAMEWORK = [
  {
    factor: "01. Yield (Coupon vs YTM)",
    metric: "Gross Cashflow vs Holding Return",
    description: "Yield to Maturity (YTM) measures total expected return if held to maturity including all coupon reinvestments. A higher coupon does not equal higher real return if purchased at a premium.",
    riskSignal: "High yields always signal higher credit risk or longer duration exposure.",
  },
  {
    factor: "02. Credit Quality",
    metric: "Default & Downgrade Risk",
    description: "Evaluates the balance sheet strength and operational cash flow of the borrowing entity. Sovereign G-Secs have zero credit risk; Corporate AAA/AA carry credit spreads compensating for potential business stress.",
    riskSignal: "Never sacrifice credit quality for an incremental 50-75 bps in yield.",
  },
  {
    factor: "03. Modified Duration",
    metric: "Price Sensitivity to Interest Rates",
    description: "Measures the percentage change in a bond's price for every 100 bps (1.00%) shift in interest rates. A 6-year duration bond experiences approximately a 6% price drop if benchmark rates rise 1%.",
    riskSignal: "Long-duration debt should only be held when aligning with long-term liabilities or when rate cuts are anticipated.",
  },
  {
    factor: "04. Liquidity & Spread",
    metric: "Secondary Market Bid-Ask Depth",
    description: "Assesses how efficiently a security can be liquidated before maturity without incurring punitive pricing concessions. Institutional G-Secs have deep liquidity; corporate debentures can have illiquidity penalties.",
    riskSignal: "Illiquidity in unlisted or lower-tier bonds can trap capital during distressed periods.",
  },
];

export default function BondsPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/investments" className="hover:text-[var(--color-text-primary)] transition-colors">Investments</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Bonds & Fixed Income</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <Landmark size={13} className="text-[var(--color-secondary)]" />
            <span>Institutional Fixed Income Architecture</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bonds & Fixed Income Securities
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Construct structured yield streams and manage portfolio duration across Sovereign Securities,
            high-grade Corporate Bonds, and Target Maturity Debt Funds without succumbing to yield-chasing credit hazards.
          </p>
        </div>

        {/* PROFESSIONAL FINANCIAL VISUALIZATION: The 4-Factor Debt Framework */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Institutional Risk Framework</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                The Four Interdependent Dynamics of Fixed Income
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">Yield • Credit • Duration • Liquidity</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FOUR_FACTOR_FRAMEWORK.map((item) => (
              <div key={item.factor} className="border border-[var(--color-border-subtle)] rounded-[4px] p-4 bg-[var(--color-surface-low)] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[var(--color-secondary)] block mb-1">
                    {item.factor}
                  </span>
                  <div className="text-xs font-semibold text-[var(--color-text-primary)] mb-2">
                    {item.metric}
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="text-[11px] text-amber-900 bg-amber-50/70 border border-amber-200 p-2 rounded-[2px] leading-snug">
                  <strong>Risk Factor:</strong> {item.riskSignal}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DURATION & INTEREST RATE SENSITIVITY VISUALIZATION */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Interest-Rate Sensitivity Matrix</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Duration Sensitivity: The Inverse Yield-Price Relationship
            </h2>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Illustrative impact of a ±100 bps (1.00%) change in RBI benchmark interest rates on portfolio capital values across different duration profiles.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3">Fixed Income Category</th>
                  <th className="py-3 px-3">Average Modified Duration</th>
                  <th className="py-3 px-3">Impact of +100 bps Rate Hike</th>
                  <th className="py-3 px-3">Impact of -100 bps Rate Cut</th>
                  <th className="py-3 px-3">Primary Risk Exposure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Liquid & Overnight Funds</td>
                  <td className="py-3 px-3 font-mono">0.05 to 0.25 Years</td>
                  <td className="py-3 px-3 font-mono text-emerald-800 font-semibold">Near 0% (Yields reset up)</td>
                  <td className="py-3 px-3 font-mono text-slate-600">Near 0% (Yields reset down)</td>
                  <td className="py-3 px-3 text-[11px] text-[var(--color-text-muted)]">Reinvestment Rate Risk</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Short Duration Debt Funds</td>
                  <td className="py-3 px-3 font-mono">1.0 to 3.0 Years</td>
                  <td className="py-3 px-3 font-mono text-amber-800">-1.5% to -2.5% price impact</td>
                  <td className="py-3 px-3 font-mono text-emerald-800 font-semibold">+1.5% to +2.5% capital gain</td>
                  <td className="py-3 px-3 text-[11px] text-[var(--color-text-muted)]">Mild Duration & Credit Spread</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Corporate Bond Funds (AAA)</td>
                  <td className="py-3 px-3 font-mono">3.0 to 5.0 Years</td>
                  <td className="py-3 px-3 font-mono text-rose-800">-3.5% to -5.0% price impact</td>
                  <td className="py-3 px-3 font-mono text-emerald-800 font-semibold">+3.5% to +5.0% capital gain</td>
                  <td className="py-3 px-3 text-[11px] text-[var(--color-text-muted)]">Moderate Duration & Spread Risk</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Long G-Secs / Gilt Funds</td>
                  <td className="py-3 px-3 font-mono">7.0 to 12.0+ Years</td>
                  <td className="py-3 px-3 font-mono text-rose-900 font-bold">-7.0% to -12.0% capital loss</td>
                  <td className="py-3 px-3 font-mono text-emerald-900 font-bold">+7.0% to +12.0% capital gain</td>
                  <td className="py-3 px-3 text-[11px] text-[var(--color-text-muted)]">High Interest-Rate Volatility</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] rounded-[4px] text-[11px] text-[var(--color-text-muted)] leading-relaxed">
            <strong>Duration Rule:</strong> Price change ≈ - (Modified Duration × Change in Yield). When holding debt to maturity in target maturity or fixed tenure bonds, interim price fluctuations converge to face value upon maturity, eliminating capital volatility for investors with matched time horizons.
          </div>
        </div>

        {/* CREDIT QUALITY HIERARCHY TABLE */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Rating Hierarchy</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Credit Quality & Default Spread Architecture
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3">Rating Tier</th>
                  <th className="py-3 px-3">Representative Issuers</th>
                  <th className="py-3 px-3">Credit Risk Profile</th>
                  <th className="py-3 px-3">Spread over Sovereign</th>
                  <th className="py-3 px-3">FINREV Allocation Guideline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                <tr>
                  <td className="py-3 px-3 font-mono font-bold text-emerald-800">SOVEREIGN</td>
                  <td className="py-3 px-3">Govt of India, RBI Treasury Bills</td>
                  <td className="py-3 px-3">Zero Credit Default Risk</td>
                  <td className="py-3 px-3 font-mono">0 bps (Benchmark Base)</td>
                  <td className="py-3 px-3 font-semibold text-[var(--color-primary)]">Core foundation for capital preservation</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-mono font-bold text-blue-800">AAA / A1+</td>
                  <td className="py-3 px-3">PFC, REC, NABARD, HDFC, L&T, Tata Sons</td>
                  <td className="py-3 px-3">Highest Safety Tier (Near-zero default)</td>
                  <td className="py-3 px-3 font-mono">+35 to +75 bps</td>
                  <td className="py-3 px-3 font-semibold text-[var(--color-primary)]">Primary institutional allocation target</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-mono font-bold text-amber-800">AA+ / AA</td>
                  <td className="py-3 px-3">High-grade corporate borrowers & NBFCs</td>
                  <td className="py-3 px-3">High Investment Grade</td>
                  <td className="py-3 px-3 font-mono">+90 to +160 bps</td>
                  <td className="py-3 px-3 text-[var(--color-text-secondary)]">Monitored allocation with strict governance filters</td>
                </tr>
                <tr className="bg-rose-50/30">
                  <td className="py-3 px-3 font-mono font-bold text-rose-800">A & BELOW</td>
                  <td className="py-3 px-3">Mid-corporates, subordinated structures</td>
                  <td className="py-3 px-3 text-rose-800 font-semibold">Elevated Default & Downgrade Hazard</td>
                  <td className="py-3 px-3 font-mono text-rose-800">+250 to +500+ bps</td>
                  <td className="py-3 px-3 text-rose-900 font-semibold">Excluded from conservative mandates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Instruments Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {BOND_TYPES.map((b) => (
            <div key={b.name} className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] mb-2">
                  <span>{b.issuer}</span>
                  <span className="text-[var(--color-secondary)] font-semibold">{b.tenure}</span>
                </div>
                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {b.name}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {b.summary}
                </p>
              </div>
              <div className="border-t border-[var(--color-border-subtle)] pt-3 text-[11px] text-[var(--color-text-muted)]">
                <span className="font-semibold text-[var(--color-text-primary)]">Suitability:</span> {b.suitability}
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Bonds & Debt
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
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Fixed Income Desk</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Inquire on Yield Curve Alignment & Debt Passives
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Discuss target maturity mapping, cash flow scheduling, and credit filters with Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Consult on Fixed Income</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclaimer:</strong> Debt securities and bond funds are subject to credit risk, interest rate risk, and secondary market liquidity risk. Yield to Maturity (YTM) does not guarantee realized returns. FINREV SOLUTIONS does not promise or assure capital safety or fixed returns. FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
