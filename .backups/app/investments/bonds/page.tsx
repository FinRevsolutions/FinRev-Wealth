import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Layers, Banknote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

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
      "Debt instruments issued by established corporations with AAA, AA+, or AA credit ratings. Structured to provide regular coupon cash flow with higher yields than standard bank deposits.",
    suitability: "HNIs and treasury accounts seeking predictable regular income with managed credit spreads.",
  },
  {
    name: "Government Securities (G-Secs)",
    issuer: "Reserve Bank of India (Sovereign)",
    tenure: "5 to 40 Years",
    yieldType: "Half-Yearly Sovereign Coupon",
    summary:
      "Backed by the full faith and credit of the Government of India. Zero credit risk (sovereign guarantee), although market prices fluctuate with RBI benchmark repo rate cycles.",
    suitability: "Ultra-long-term capital preservation, pension matching, and zero-credit-risk asset allocation.",
  },
  {
    name: "Sovereign Gold Bonds (SGBs)",
    issuer: "Government of India",
    tenure: "8 Years (Exit option from 5th year)",
    yieldType: "2.50% Annual Coupon + Gold Appreciation",
    summary:
      "Government-issued gold bonds that pay a semi-annual 2.50% interest coupon in addition to capital gains linked to domestic 999 purity gold prices, exempt from capital gains tax upon maturity.",
    suitability: "Investors seeking gold portfolio allocation without storage costs or making charges.",
  },
  {
    name: "Target Maturity Debt Funds",
    issuer: "AMCs investing in G-Sec / SDL / PSU",
    tenure: "Fixed Defined Maturity Date",
    yieldType: "Pass-through Yield to Maturity (YTM)",
    summary:
      "Open-ended passively managed debt index funds that lock in prevailing yields by holding high-grade sovereign and PSU bonds until a defined maturity calendar year.",
    suitability: "Investors matching specific milestone dates (e.g. child college year) with predictable duration risk.",
  },
];

const FAQS = [
  {
    q: "Are bonds completely risk-free?",
    a: "No. While Government Securities carry zero sovereign credit default risk, they are still exposed to interest rate risk — bond market prices fall when interest rates rise. Corporate bonds additionally carry credit risk (potential rating downgrades or issuer distress) and liquidity risk.",
  },
  {
    q: "What is the relationship between bond yields and bond prices?",
    a: "Bond prices move inversely to market interest rates. When the RBI raises interest rates, newly issued bonds offer higher coupons, causing existing lower-coupon bonds to fall in market price. Longer-duration bonds exhibit higher price sensitivity.",
  },
  {
    q: "How are bond returns taxed in India?",
    a: "Coupon and interest payments are added to your total income and taxed at your applicable slab rate. Capital gains on mutual fund debt investments made after April 1, 2023 are also taxed at applicable slab rates without indexation benefits.",
  },
  {
    q: "What is Credit Rating in Corporate Bonds?",
    a: "Credit rating agencies (such as CRISIL, ICRA, CARE) evaluate an issuer's financial strength. AAA represents highest safety, followed by AA+, AA, and A. FINREV prioritizes high-governance, investment-grade papers to minimize default vulnerabilities.",
  },
];

export default function BondsPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/investments" className="hover:text-[var(--color-text-primary)] transition-colors">Investments</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Bonds & Fixed Income</span>
        </nav>

        {/* Hero */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-navy-subtle)] text-[var(--color-primary)] text-xs font-bold rounded border border-[var(--color-border-subtle)] mb-3">
            <Landmark size={14} />
            <span>Fixed Income & Capital Preservation</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bonds & Institutional Fixed Income
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Engineer predictable yield streams and balance your equity exposure with high-credit corporate bonds,
            sovereign securities, and target maturity debt solutions.
          </p>
        </div>

        {/* Core Pillars of Fixed Income */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {BOND_TYPES.map((item) => (
            <div key={item.name} className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[var(--color-primary)] bg-[var(--color-surface-canvas)] px-2.5 py-1 rounded border border-[var(--color-border-subtle)] block mb-3">
                  {item.issuer}
                </span>
                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.name}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-4">
                  {item.summary}
                </p>

                <div className="p-3 bg-[var(--color-surface-low)] rounded-xl border border-[var(--color-border-subtle)] text-[11px] text-[var(--color-text-secondary)] flex flex-col gap-1 mb-4">
                  <span><strong>Tenure:</strong> {item.tenure}</span>
                  <span><strong>Payout:</strong> {item.yieldType}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--color-border-subtle)]">
                <p className="text-[11px] text-[var(--color-text-muted)] italic">
                  <strong>Suitability:</strong> {item.suitability}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* VISUAL 1: Yield vs Credit Quality Matrix */}
        <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="max-w-2xl mb-6">
            <SectionLabel>Credit Risk Hierarchy</SectionLabel>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Yield vs. Credit Quality Spread Matrix
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Higher credit spreads compensate for credit risk. FINREV restricts allocations to high-governance papers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                rating: "SOVEREIGN",
                title: "G-Secs & T-Bills",
                issuer: "Government of India",
                defaultRisk: "Sovereign Backed",
                yieldProfile: "Sovereign Benchmark Yield",
                spreadBadge: "Base Benchmark",
                badgeColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
              },
              {
                rating: "CRISIL / ICRA AAA",
                title: "PSU & Quasi-Sovereign",
                issuer: "PFC, REC, NABARD, Indian Oil",
                defaultRisk: "Highest Safety Tier",
                yieldProfile: "Benchmark + 40 to 75 bps",
                spreadBadge: "+50 bps Spread",
                badgeColor: "text-blue-800 bg-blue-50 border-blue-200",
              },
              {
                rating: "CRISIL AA+ / AA",
                title: "Tier-1 Corporate Bonds",
                issuer: "Tata, L&T, HDFC, Mahindra",
                defaultRisk: "High Investment Grade",
                yieldProfile: "Benchmark + 90 to 140 bps",
                spreadBadge: "+120 bps Spread",
                badgeColor: "text-indigo-800 bg-indigo-50 border-indigo-200",
              },
              {
                rating: "CRISIL AA- / A+",
                title: "High-Yield Structured Debt",
                issuer: "Selective Mid-Corp & NBFCs",
                defaultRisk: "Monitored Credit Spread",
                yieldProfile: "Benchmark + 180 to 260 bps",
                spreadBadge: "+220 bps Spread",
                badgeColor: "text-amber-800 bg-amber-50 border-amber-200",
              },
            ].map((card) => (
              <div key={card.rating} className="p-5 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-[var(--color-primary)]">{card.rating}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${card.badgeColor}`}>
                      {card.spreadBadge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-1 leading-snug">{card.title}</h4>
                  <span className="text-[11px] text-[var(--color-text-muted)] block mb-3">{card.issuer}</span>
                  <div className="space-y-1 text-xs text-[var(--color-text-secondary)] mb-4">
                    <div className="flex justify-between"><span>Credit Risk:</span><strong>{card.defaultRisk}</strong></div>
                    <div className="flex justify-between"><span>Yield:</span><strong>{card.yieldProfile}</strong></div>
                  </div>
                </div>
                <div className="pt-2 border-t border-[var(--color-border-subtle)] text-[10px] text-[var(--color-text-muted)] italic">
                  Subject to rating surveillance & market liquidity
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VISUAL 2: Duration & Interest Rate Sensitivity Concept */}
        <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col gap-3">
              <SectionLabel>Macro Mechanics</SectionLabel>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                The Seesaw: Interest Rate vs. Bond Price Sensitivity (Duration)
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Bond prices move inversely to benchmark interest rate cycles set by the Reserve Bank of India.
                When the RBI eases interest rates, existing higher-coupon bonds trade at a premium, creating capital gains.
                Conversely, during rate hike cycles, bond prices decline.
              </p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                <strong>Modified Duration</strong> measures this sensitivity: a bond fund with a duration of 5 years
                will gain approximately 5% in capital value if interest rates fall by 1%, and vice versa.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[var(--color-surface-canvas)] p-5 rounded-xl border border-[var(--color-border-subtle)]">
              <span className="text-[11px] font-bold text-[var(--color-text-primary)] block mb-3">
                Rate Cycle Dynamic (Modified Duration Effect)
              </span>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-emerald-50/70 rounded-lg border border-emerald-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-emerald-900 block">Scenario A: RBI Cuts Repo Rates (-1.00%)</span>
                    <span className="text-[11px] text-emerald-700">Market yields decline • Newly issued debt carries lower coupons</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-800 text-sm shrink-0 ml-3">+5.0% Capital Gain</span>
                </div>

                <div className="p-3 bg-rose-50/70 rounded-lg border border-rose-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-rose-900 block">Scenario B: RBI Hikes Repo Rates (+1.00%)</span>
                    <span className="text-[11px] text-rose-700">Market yields climb • Existing lower coupon bonds discount</span>
                  </div>
                  <span className="font-mono font-bold text-rose-800 text-sm shrink-0 ml-3">-5.0% Capital Loss</span>
                </div>
              </div>
              <span className="text-[10px] text-[var(--color-text-muted)] block text-center mt-3 font-semibold">
                FINREV Strategy: Match duration strictly to your target cashflow date to eliminate interim rate volatility.
              </span>
            </div>
          </div>
        </div>

        {/* Critical Evaluation Grid: Yield vs Risk */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] flex items-center gap-2 mb-4">
              <CheckCircle2 size={18} className="text-[var(--color-secondary)]" />
              Strategic Role of Fixed Income
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-[var(--color-text-secondary)] leading-relaxed">
              <li>• <strong>Portfolio Stabilization:</strong> Reduces overall drawdown volatility during severe equity market corrections.</li>
              <li>• <strong>Cashflow Planning:</strong> Creates structured predictable periodic cash payouts for retirement or liquidity needs.</li>
              <li>• <strong>Definite Horizon Matching:</strong> Match bond maturities directly to expected expenditure dates.</li>
              <li>• <strong>Rebalancing Dry Powder:</strong> Provides liquid capital to redeploy into equities when valuations are attractive.</li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] flex items-center gap-2 mb-4">
              <AlertTriangle size={18} className="text-[var(--color-tertiary)]" />
              Bonds Are NOT Risk-Free: 4 Key Risks
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-[var(--color-text-muted)] leading-relaxed">
              <li>• <strong>Interest Rate Risk:</strong> As RBI rates climb, bond prices decline in secondary trading markets.</li>
              <li>• <strong>Credit Default Risk:</strong> Corporate issuers may experience credit downgrades or operational default.</li>
              <li>• <strong>Liquidity Risk:</strong> Certain illiquid corporate bonds cannot be quickly liquidated before maturity without price discounts.</li>
              <li>• <strong>Inflation Drag:</strong> Fixed coupon payouts lose purchasing power if inflation outpaces the yield.</li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Frequently Asked Questions on Bonds & Debt
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="p-5 bg-white rounded-xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-2 mb-2">
                  <HelpCircle size={16} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] leading-snug">{faq.q}</h4>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary-fixed)] block mb-1">
              Fixed Income Consultation
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Inquire About High-Credit Fixed Income Allocations
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Discuss duration alignment, coupon schedules, and credit quality filters with Panchanan Kumar.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Consult on Fixed Income</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Debt securities are subject to credit risk, interest rate risk, and market liquidity risk.
            Yields are subject to market conditions and changes in tax laws. FINREV SOLUTIONS does not guarantee bond yields or capital safety.
          </p>
        </div>
      </Container>
    </div>
  );
}
