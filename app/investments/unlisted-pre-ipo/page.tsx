import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldAlert, CheckCircle2, AlertTriangle, HelpCircle, FileSearch, ShieldCheck, Scale, Clock, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Unlisted Shares & Pre-IPO Equities — Risk Governance & Diligence",
  "Institutional analysis of unlisted shares and pre-IPO equity. Detailed evaluation of liquidity risk, valuation uncertainty, price discovery, and SEBI post-listing lock-in rules.",
  "/investments/unlisted-pre-ipo"
);

const RISK_PILLARS = [
  {
    title: "01. Extreme Liquidity Risk",
    subtitle: "No Regulated Public Order Book",
    description:
      "Unlisted shares do not trade on continuous secondary exchange order books (BSE/NSE). Liquidating positions requires finding a bilateral counterparty through specialized intermediaries, which may take weeks, months, or prove impossible during market downturns.",
    consequence: "Capital must be treated as completely illiquid with a multi-year horizon.",
  },
  {
    title: "02. Valuation Uncertainty",
    subtitle: "Absence of Continuous Mark-to-Market",
    description:
      "Unlike listed equities with real-time price discovery, unlisted company valuations rely on sporadic private funding rounds, internal DCF models, or unverified secondary broker quotations. Pricing is subjective and volatile.",
    consequence: "Past private round valuations do not guarantee public market IPO pricing.",
  },
  {
    title: "03. Limited Price Discovery & Spreads",
    subtitle: "Bilateral Broker Markups & Opaque Spreads",
    description:
      "Off-market unlisted transactions feature wide bid-ask spreads and distributor markups. Buyers often pay substantial premiums above fair intrinsic enterprise value without access to complete institutional diligence materials.",
    consequence: "Requires independent analysis of MCA statutory filings and audited balance sheets.",
  },
  {
    title: "04. Exit Uncertainty & Regulatory Lock-In",
    subtitle: "IPO Is Discretionary + Mandatory 6-Month Lock-In",
    description:
      "An unlisted enterprise has no legal obligation to conduct an Initial Public Offering (IPO). Filings can be rejected, delayed, or withdrawn by promoters. Furthermore, SEBI mandates a compulsory 6-month lock-in post-listing for pre-IPO shareholders.",
    consequence: "You cannot sell shares during initial IPO listing momentum.",
  },
];

const FAQS = [
  {
    q: "How are unlisted shares held and legally transferred?",
    a: "Unlisted shares are held in dematerialized form in your personal NSDL or CDSL demat account. Transfers are executed via off-market Delivery Instruction Slips (DIS) or depository electronic mechanisms. They do not trade on the floor of a recognized stock exchange.",
  },
  {
    q: "What is the SEBI mandatory lock-in period after listing?",
    a: "Under SEBI (Issue of Capital and Disclosure Requirements) Regulations, pre-issue equity capital held by non-promoters is subject to a statutory lock-in of 6 months from the date of IPO allotment. During this period, pre-IPO shares cannot be sold on stock exchanges.",
  },
  {
    q: "How is taxation calculated for unlisted equity in India?",
    a: "Under current Indian tax provisions (Finance Act 2024), unlisted equity shares held for more than 24 months are classified as Long-Term Capital Assets and taxed at 12.5% without indexation. If held for 24 months or less, gains are treated as Short-Term Capital Gains (STCG) and taxed at applicable income tax slab rates.",
  },
  {
    q: "Does FINREV SOLUTIONS guarantee that an unlisted company will launch an IPO?",
    a: "No. FINREV SOLUTIONS does not guarantee, predict, or assure Initial Public Offerings (IPOs), listing valuations, or liquidity timelines. IPO decisions reside entirely with the issuer's board of directors, merchant bankers, and regulatory authorities.",
  },
];

export default function UnlistedPreIPOPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/investments" className="hover:text-[var(--color-text-primary)] transition-colors">Investments</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Unlisted Shares & Pre-IPO</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-900 mb-2">
            <ShieldAlert size={13} className="text-amber-700" />
            <span>High Risk • Illiquid Capital Allocation</span>
            <span>•</span>
            <span className="font-mono text-[var(--color-text-muted)]">ARN-195797</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Unlisted Equities & Pre-IPO Allocations
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Direct private equity participation in late-stage unlisted enterprises requires sober risk governance.
            Investors must evaluate illiquidity constraints, opaque price discovery, and mandatory regulatory holding lock-ins.
          </p>
        </div>

        {/* Sobering Advisory Warning Box */}
        <div className="bg-amber-50/70 border border-amber-300 rounded-[4px] p-5 mb-12 flex items-start gap-3 text-xs text-amber-950 leading-relaxed">
          <AlertTriangle size={18} className="text-amber-800 shrink-0 mt-0.5" />
          <div>
            <strong className="block mb-1 text-sm font-bold text-amber-900">Institutional Diligence Warning:</strong>
            Unlisted equities carry higher risk characteristics than listed securities. They are completely illiquid, lack continuous market pricing, and depend on uncertain future corporate events. Investors should only allocate patient, discretionary capital that they can afford to lock away for 5+ years or lose entirely in adverse business scenarios.
          </div>
        </div>

        {/* 4 Critical Risk Dimensions: Structured Rows */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Risk Architecture</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Four Structural Realities of Unlisted Equity
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">SEBI ICDR Regulations</span>
          </div>

          <div className="space-y-6 divide-y divide-[var(--color-border-subtle)]">
            {RISK_PILLARS.map((item, idx) => (
              <div key={item.title} className={idx > 0 ? "pt-6" : ""}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="md:w-1/3">
                    <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:w-2/3 space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    <p>{item.description}</p>
                    <div className="p-2.5 bg-amber-50/50 border border-amber-200 rounded-[2px] text-[11px] text-amber-950 font-medium">
                      <strong>Prudential Impact:</strong> {item.consequence}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON TABLE: Listed vs Unlisted Equity */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Market Governance</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Comparative Analysis: Listed Equities vs. Unlisted Equities
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3 w-1/4">Evaluation Factor</th>
                  <th className="py-3 px-3 w-3/8">Public Listed Equities (NSE/BSE)</th>
                  <th className="py-3 px-3 w-3/8">Unlisted / Pre-IPO Equities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Secondary Market Liquidity</td>
                  <td className="py-3 px-3 text-emerald-900">Instantaneous electronic trade settlement (T+1)</td>
                  <td className="py-3 px-3 text-rose-900 font-semibold">Severe illiquidity; bilateral off-market transfers only</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Price Transparency</td>
                  <td className="py-3 px-3">Live continuous order matching on exchanges</td>
                  <td className="py-3 px-3 font-semibold text-[var(--color-primary)]">Opaque; negotiated quotes via brokers/dealers</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Mandatory Disclosures</td>
                  <td className="py-3 px-3">Quarterly audited results, LODR governance filings</td>
                  <td className="py-3 px-3">Annual MCA filings; limited interim disclosures</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Post-IPO Regulatory Lock-in</td>
                  <td className="py-3 px-3">Zero lock-in for regular public retail shares</td>
                  <td className="py-3 px-3 font-semibold text-amber-900">Mandatory 6-month non-promoter lock-in post listing</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">Capital Loss Risk Profile</td>
                  <td className="py-3 px-3">Market cyclical volatility</td>
                  <td className="py-3 px-3 text-rose-900 font-semibold">High risk of prolonged or total capital lock-up</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Unlisted Equities
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
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Diligence Consultation</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Inquire on Financial Scrutiny & Off-Market Transfers
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Conduct objective balance sheet reviews and cap-table diligence with Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Consult on Unlisted Allocations</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Unlisted equity shares are not traded on recognized stock exchanges and are subject to high liquidity risk, valuation opacity, and uncertain exit horizons. There is no assurance of public listing or capital appreciation. FINREV SOLUTIONS does not guarantee IPO timelines or investment returns. Facilitated strictly on an execution and referral basis.
          </p>
        </div>
      </Container>
    </div>
  );
}
