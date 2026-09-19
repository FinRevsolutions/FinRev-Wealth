import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Layers, Scale } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Portfolio Management Services (PMS) — Institutional Discretionary Equity",
  "Institutional Portfolio Management Services (PMS) for HNI investors. Minimum investment ₹50 Lakhs as mandated by SEBI. Tailored alpha generation strategies.",
  "/investments/pms"
);

const PMS_ATTRIBUTES = [
  {
    title: "Direct Stock Ownership",
    desc: "Unlike mutual funds where you hold units, in PMS the actual underlying shares are credited directly into your individual demat account opened in your name.",
  },
  {
    title: "Focused Portfolio Strategies",
    desc: "PMS fund managers maintain research-driven portfolios of 15 to 25 stocks, unconstrained by the single-stock exposure limits governing mutual funds.",
  },
  {
    title: "Direct Fund Manager Interaction",
    desc: "Access quarterly manager commentary, transparent portfolio transaction disclosures, and tailored strategy debriefs directly from investment directors.",
  },
  {
    title: "Customized Cash Mandates",
    desc: "Option to request specific negative screening (e.g. ESG filters, sector exclusions) based on personal or corporate governance mandates.",
  },
];

const FAQS = [
  {
    q: "What is the minimum regulatory ticket size for PMS in India?",
    a: "Per SEBI regulations, the statutory minimum investment ticket for Portfolio Management Services is ₹50 Lakhs per client. This can be deployed in cash or by transferring an existing equity portfolio of equivalent valuation.",
  },
  {
    q: "How does PMS differ from a Mutual Fund?",
    a: "In a mutual fund, investors own units of a collective pooled vehicle. In PMS, you own the individual stocks held directly in your unique demat account. PMS portfolios are significantly more concentrated (15–25 holdings vs 50–100 in mutual funds) and have distinct fee structures.",
  },
  {
    q: "How are PMS fees structured?",
    a: "PMS structures typically involve a combination of: (1) Fixed Annual Management Fee (e.g., 1.5%–2.5%), and/or (2) Performance Fee with a Hurdle Rate (e.g., 15%–20% profit share above an 8%–10% hurdle with a high-water mark provision).",
  },
  {
    q: "Is FINREV SOLUTIONS a registered PMS provider?",
    a: "FINREV SOLUTIONS facilitates and distributes Portfolio Management Services offered by leading SEBI-registered Portfolio Managers. We assist clients in evaluating manager track records, strategy suitability, and onboarding execution.",
  },
];

export default function PMSPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/investments" className="hover:text-[var(--color-text-primary)] transition-colors">Investments</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">PMS</span>
        </nav>

        {/* Hero */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] text-xs font-bold rounded border border-[var(--color-border-strong)] mb-3">
            <Scale size={14} />
            <span>SEBI Mandated Minimum: ₹50 Lakhs</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Portfolio Management Services (PMS)
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Professional Portfolio Management Framework for High-Net-Worth Individuals (HNIs) and family offices seeking focused equity mandates and individual demat ownership.
          </p>
        </div>

        {/* Four Distinct Attributes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PMS_ATTRIBUTES.map((item) => (
            <div key={item.title} className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center mb-4">
                  <Briefcase size={18} />
                </div>
                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PMS vs Mutual Funds Comparison Table */}
        <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="max-w-2xl mb-6">
            <SectionLabel>Structural Distinctions</SectionLabel>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Comparing Portfolio Management Services vs. Mutual Funds
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-bold">
                  <th className="py-3">Feature</th>
                  <th className="py-3">Mutual Funds</th>
                  <th className="py-3">Portfolio Management Services (PMS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                <tr>
                  <td className="py-3.5 font-bold text-[var(--color-text-primary)]">Minimum Outlay</td>
                  <td className="py-3.5">₹500 / month (SIP)</td>
                  <td className="py-3.5 font-bold text-[var(--color-secondary)]">₹50 Lakhs (SEBI Statutory Minimum)</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-[var(--color-text-primary)]">Asset Holding</td>
                  <td className="py-3.5">Pooled units representing undivided interest</td>
                  <td className="py-3.5 font-bold text-[var(--color-secondary)]">Direct shares in your personal Demat</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-[var(--color-text-primary)]">Portfolio Breadth</td>
                  <td className="py-3.5">40 to 80 diversified holdings</td>
                  <td className="py-3.5 font-bold text-[var(--color-secondary)]">15 to 25 focused equity holdings</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-[var(--color-text-primary)]">Taxation Event</td>
                  <td className="py-3.5">Taxed only upon unit redemption by investor</td>
                  <td className="py-3.5">Each portfolio trade triggers direct capital gains tax</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-[var(--color-text-primary)]">Fee Structure</td>
                  <td className="py-3.5">Total Expense Ratio capped by SEBI (up to 2.25%)</td>
                  <td className="py-3.5">Fixed Management + Performance Profit Sharing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Suitability & Risks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h4 className="text-sm font-bold text-[var(--color-text-primary)] flex items-center gap-2 mb-4">
              <CheckCircle2 size={16} className="text-[var(--color-secondary)]" />
              Who PMS Is Suitable For
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[var(--color-text-secondary)] leading-relaxed">
              <li>• HNI investors with surplus investable equity capital above ₹50 Lakhs.</li>
              <li>• Investors seeking focused exposure to thematic or multi-cap strategies.</li>
              <li>• Family offices requiring segregated demat custody and customized stock allocations.</li>
              <li>• Investors comfortable with market volatility in exchange for specialized portfolio management.</li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h4 className="text-sm font-bold text-[var(--color-text-primary)] flex items-center gap-2 mb-4">
              <AlertTriangle size={16} className="text-[var(--color-tertiary)]" />
              Important Risks & Considerations
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[var(--color-text-muted)] leading-relaxed">
              <li>• <strong>Concentration Risk:</strong> Focused portfolios can underperform during sector-specific drawdowns.</li>
              <li>• <strong>Tax Friction:</strong> Every buy/sell executed by the manager triggers capital gains tax on your PAN.</li>
              <li>• <strong>Performance Fee Hurdle:</strong> Performance fees apply on returns exceeding the high-water mark hurdle.</li>
              <li>• <strong>Liquidity Terms:</strong> While stocks are in your demat, exiting mid-tenure can disrupt execution strategies.</li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Frequently Asked Questions on PMS
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
              Private Wealth Desk
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Explore Professional Portfolio Management
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Connect with Panchanan Kumar to evaluate manager strategies, track records, and mandate onboarding.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Inquire About PMS</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> PMS investments are subject to market risks. There are no assurances
            or guarantees that the investment objectives will be achieved. Past performance is not indicative of future
            results. FINREV SOLUTIONS distributes third-party SEBI-registered PMS products.
          </p>
        </div>
      </Container>
    </div>
  );
}
