import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Layers, Scale, FileText, Landmark, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Portfolio Management Services (PMS) — Institutional Discretionary Equity",
  "Institutional Portfolio Management Services (PMS) for HNI investors. Minimum investment ₹50 Lakhs as mandated by SEBI. Facilitated via leading SEBI-registered Portfolio Managers.",
  "/investments/pms"
);

const PMS_PILLARS = [
  {
    title: "01. Defined Portfolio Mandates",
    subtitle: "Discretionary & Non-Discretionary Mandates",
    description:
      "Clients enter into an investment management agreement governed by defined strategic mandates (Multi-Cap, Small/Mid-Cap, Thematic, or Factor-based). In discretionary PMS, portfolio managers execute transactions according to the mandate without requiring trade-by-trade signoffs.",
    detail: "Focused portfolios typically comprising 15 to 25 high-conviction securities unconstrained by mutual fund stock-cap rules.",
  },
  {
    title: "02. Institutional Custody Architecture",
    subtitle: "Direct Demat Ownership with Segregated Custodian",
    description:
      "Unlike pooled mutual fund structures, securities in a PMS are held in an individual demat account registered directly in the client's name. Assets are held with SEBI-registered institutional custodians (such as HDFC Bank, ICICI Bank, Orbis, or Kotak Mahindra).",
    detail: "Direct corporate action pass-through: Dividends, bonus shares, and buyback proceeds flow directly to your designated bank/demat.",
  },
  {
    title: "03. Institutional Reporting & Audit",
    subtitle: "Audited Tax Packs & Performance Measurement",
    description:
      "Investors receive monthly performance reports, holding disclosures, and comprehensive chartered-accountant audited annual tax packs detailing short-term and long-term capital gains, dividend withholdings, and STT computations for tax filing.",
    detail: "Performance fees are calculated on an audited High Water Mark (HWM) basis, ensuring fees are charged only on net new alpha.",
  },
  {
    title: "04. Professional Research & Execution",
    subtitle: "Dedicated Fund Management & Proprietary Models",
    description:
      "Portfolios are steered by institutional fund managers and internal research teams executing forensic accounting checks, channel checks, management meetings, and institutional algorithmic execution to minimize market impact costs.",
    detail: "Direct portfolio manager briefings, regular CIO webinars, and detailed quarterly investment review memorandums.",
  },
];

const FAQS = [
  {
    q: "Is FINREV SOLUTIONS itself a SEBI-registered PMS entity?",
    a: "No. FINREV SOLUTIONS and Panchanan Kumar operate strictly as an AMFI-registered Mutual Fund Distributor (ARN-195797) and business facilitator. We assist eligible HNI investors in evaluating, comparing, and onboarding onto strategies managed by independent, SEBI-registered Portfolio Management entities. FINREV does not provide direct discretionary portfolio management.",
  },
  {
    q: "What is the statutory minimum investment for PMS in India?",
    a: "Under SEBI (Portfolio Managers) Regulations, the statutory minimum investment ticket size is ₹50 Lakhs per client. This capital commitment can be deployed via bank wire or through the in-specie transfer of an existing eligible equity portfolio evaluated at current market prices.",
  },
  {
    q: "How does PMS taxation differ from Mutual Funds?",
    a: "In a mutual fund, buying and selling of underlying stocks by the fund manager within the scheme does not create a tax liability for unit holders; tax is deferred until the investor redeems their units. In a PMS, because stocks are held in your individual demat, each trade executed by the manager triggers capital gains tax on your personal PAN for that financial year.",
  },
  {
    q: "What is the High Water Mark (HWM) principle in PMS performance fees?",
    a: "Under SEBI guidelines, performance fees can only be charged if the portfolio's net asset value exceeds the highest previous peak value achieved ('High Water Mark'). If the portfolio declines in value, the manager must first recover all losses beyond the previous peak (and any applicable hurdle rate) before charging subsequent performance fees.",
  },
];

export default function PMSPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/investments" className="hover:text-[var(--color-text-primary)] transition-colors">Investments</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Portfolio Management Services</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <Scale size={13} className="text-[var(--color-secondary)]" />
            <span>HNI & Private Wealth Services</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">SEBI Minimum: ₹50 Lakhs</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Portfolio Management Services (PMS)
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Institutional equity strategies tailored for High-Net-Worth Individuals, corporate treasuries, and family offices seeking focused equity mandates, direct demat asset ownership, and institutional custody.
          </p>
        </div>

        {/* Regulatory Facilitation Disclosure Banner */}
        <div className="bg-[var(--color-surface-container-highest)] border border-[var(--color-border-subtle)] rounded-[4px] p-5 mb-12 flex items-start gap-3 text-xs text-[var(--color-text-secondary)]">
          <ShieldCheck size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-[var(--color-text-primary)] block mb-0.5">Regulatory Role & Disclosure:</strong>
            FINREV SOLUTIONS (ARN-195797) acts as a distributor and facilitator connecting eligible clients with leading third-party SEBI-registered Portfolio Management Services providers. FINREV SOLUTIONS does not manage discretionary funds directly nor issue proprietary PMS investment contracts.
          </div>
        </div>

        {/* Core Pillars: Structured Rows (Not repetitive cards) */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Institutional Operating Model</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Four Architectural Cornerstones of PMS
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">SEBI PMS Regulations</span>
          </div>

          <div className="space-y-6 divide-y divide-[var(--color-border-subtle)]">
            {PMS_PILLARS.map((p, idx) => (
              <div key={p.title} className={idx > 0 ? "pt-6" : ""}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="md:w-1/3">
                    <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider block mb-1">
                      {p.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                      {p.title}
                    </h3>
                  </div>
                  <div className="md:w-2/3 space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    <p>{p.description}</p>
                    <p className="font-mono text-[11px] text-[var(--color-primary)] font-medium bg-[var(--color-surface-low)] p-2.5 rounded-[2px] border border-[var(--color-border-subtle)]">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table: PMS vs Mutual Funds */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Structural Comparison</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Comparative Governance: Mutual Funds vs. Portfolio Management Services
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3 w-1/4">Structural Parameter</th>
                  <th className="py-3 px-3 w-3/8">Mutual Funds (Pooled Vehicle)</th>
                  <th className="py-3 px-3 w-3/8">Portfolio Management Services (PMS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Statutory Minimum Outlay</td>
                  <td className="py-3 px-3">₹500 for SIP / ₹1,000 for Lumpsum</td>
                  <td className="py-3 px-3 font-semibold text-[var(--color-primary)] font-mono">₹50 Lakhs (SEBI Regulatory Mandate)</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Legal Custody & Ownership</td>
                  <td className="py-3 px-3">Units in mutual fund scheme trust</td>
                  <td className="py-3 px-3 font-semibold text-[var(--color-primary)]">Direct underlying shares in client's individual Demat</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Portfolio Concentration</td>
                  <td className="py-3 px-3">Diversified (40 to 80+ stocks; strict 10% stock cap)</td>
                  <td className="py-3 px-3 font-semibold text-[var(--color-primary)]">Focused high-conviction (15 to 25 stocks)</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Tax Timing Realization</td>
                  <td className="py-3 px-3">Taxed only upon investor redemption of units</td>
                  <td className="py-3 px-3">Each internal trade triggers capital gains on investor's PAN</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Fee Structure</td>
                  <td className="py-3 px-3">Total Expense Ratio capped by SEBI (up to 2.25%)</td>
                  <td className="py-3 px-3">Fixed management fee ± Performance fee above Hurdle / HWM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Suitability & Risk Assessment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Investor Suitability Criteria
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              PMS is designed for qualified institutional and HNI market participants who possess:
            </p>
            <div className="space-y-2 text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-text-secondary)]">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Investable equity surplus exceeding ₹50 Lakhs without immediate liquidity demands.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Time horizon of 5 to 7+ years to navigate focused equity cycles.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>High risk tolerance capable of enduring concentration-induced drawdown volatility.</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Risk Governance & Considerations
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Key operational and financial risk factors that require careful evaluation:
            </p>
            <div className="space-y-2 text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-text-muted)]">
              <div className="flex items-start gap-2">
                <AlertTriangle size={13} className="text-amber-700 shrink-0 mt-0.5" />
                <span><strong>Concentration Risk:</strong> Unconstrained 15-stock portfolios experience higher volatility than mutual funds.</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle size={13} className="text-amber-700 shrink-0 mt-0.5" />
                <span><strong>Tax Friction:</strong> Frequent portfolio rebalancing triggers periodic short-term capital gains tax.</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle size={13} className="text-amber-700 shrink-0 mt-0.5" />
                <span><strong>Manager Discretion:</strong> Strategy execution depends on the continuing discipline of the fund manager.</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Portfolio Management Services
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
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Private Wealth Consultation</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Evaluate SEBI-Registered PMS Strategies
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Connect with Panchanan Kumar to review manager track records, philosophy fit, and onboarding paperwork.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Schedule HNI Consultation</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Investments in Portfolio Management Services are subject to market risks. Investment returns are not guaranteed. Past performance of any PMS strategy or manager is not an indicator of future returns. FINREV SOLUTIONS (ARN-195797) acts solely as a distributor and facilitator for third-party SEBI-registered Portfolio Managers and does not provide discretionary investment management services.
          </p>
        </div>
      </Container>
    </div>
  );
}
