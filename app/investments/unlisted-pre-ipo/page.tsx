import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldAlert, CheckCircle2, AlertTriangle, HelpCircle, FileSearch, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Unlisted Shares & Pre-IPO Investments — Private Market Equity",
  "Access unlisted equity and pre-IPO allocations in mature late-stage private companies. High-risk, long-horizon opportunities through FINREV SOLUTIONS.",
  "/investments/unlisted-pre-ipo"
);

const PRE_IPO_CONSIDERATIONS = [
  {
    title: "Pre-Listing Valuation Entry",
    summary:
      "Opportunity to acquire equity stakes in high-growth companies before they launch public Initial Public Offerings (IPOs) on NSE/BSE.",
  },
  {
    title: "Direct Demat Transfer",
    summary:
      "Unlisted shares are credited directly into your NSDL or CDSL demat account via off-market Corporate Action (DIS/electronic transfer).",
  },
  {
    title: "Mandatory Post-IPO Lock-in",
    summary:
      "Per current SEBI guidelines, all pre-IPO equity shares held by non-promoters are subject to a mandatory 6-month lock-in post listing date.",
  },
  {
    title: "In-Depth Financial Scrutiny",
    summary:
      "Requires examination of MCA filings, audited balance sheets, cap tables, founder governance, and path-to-profitability metrics.",
  },
];

const FAQS = [
  {
    q: "How are unlisted shares held and traded?",
    a: "Unlisted shares are held in dematerialized form in your personal demat account (NSDL/CDSL). They are transferred through off-market depository mechanisms. They do not trade on live stock exchange order books.",
  },
  {
    q: "What is the SEBI lock-in period after a company goes public?",
    a: "SEBI mandates a 6-month lock-in period from the date of IPO allotment for pre-listing shareholders. During this 6-month window, you cannot sell the shares on the open market.",
  },
  {
    q: "How are capital gains taxed on unlisted shares in India?",
    a: "Unlisted equity shares held for more than 24 months qualify for Long-Term Capital Gains (LTCG) tax at 12.5% without indexation (Budget 2024 revised rules). If held for 24 months or less, gains are treated as Short-Term Capital Gains (STCG) and taxed at your applicable slab rate.",
  },
  {
    q: "Does FINREV guarantee that an unlisted company will launch an IPO?",
    a: "Absolutely not. IPO timelines are subject to board decisions, regulatory approvals, market liquidity, and broader economic conditions. Many unlisted companies may postpone, alter, or cancel IPO plans.",
  },
];

export default function UnlistedPreIPOPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/investments" className="hover:text-[var(--color-text-primary)] transition-colors">Investments</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Unlisted & Pre-IPO</span>
        </nav>

        {/* Hero */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-gold-subtle)] text-[var(--color-tertiary)] text-xs font-bold rounded border border-[#fde68a] mb-3">
            <Sparkles size={14} />
            <span>Private Equity Allocations • High Risk / Long Horizon</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Unlisted Equities & Pre-IPO Opportunities
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Access private market equity in late-stage, mature enterprises prior to public stock exchange listing.
            Requires thorough financial diligence, capital patience, and high risk tolerance.
          </p>
        </div>

        {/* Key Realities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PRE_IPO_CONSIDERATIONS.map((item) => (
            <div key={item.title} className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--color-tertiary)] text-white flex items-center justify-center mb-4">
                  <FileSearch size={18} />
                </div>
                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* VISUAL 1: The 5-Step Pre-IPO Allocation Process */}
        <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="max-w-2xl mb-6">
            <SectionLabel>Institutional Pipeline</SectionLabel>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The Pre-IPO Off-Market Execution Framework
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Compliant depository transfer directly into your personal CDSL or NSDL demat account.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              {
                step: "01",
                title: "Financial Screening",
                desc: "Review audited balance sheets, MCA filings, EBITDA margins, and DRHP draft prospectus timeline.",
              },
              {
                step: "02",
                title: "Price & Lot Confirmation",
                desc: "Bilateral price negotiation and allocation commitment based on prevailing unlisted market inventory.",
              },
              {
                step: "03",
                title: "Demat Transfer (DIS)",
                desc: "Off-market delivery instruction slip (DIS) execution with direct credit to your client Demat ID.",
              },
              {
                step: "04",
                title: "Pre-Listing Horizon",
                desc: "Holding tenure while company completes SEBI DRHP filing, anchor book bidding, and IPO launch.",
              },
              {
                step: "05",
                title: "SEBI 6-Mo Lock-In",
                desc: "Statutory 6-month holding requirement post listing, after which shares transition to open-market liquidity.",
              },
            ].map((st) => (
              <div key={st.step} className="p-4 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold text-[var(--color-tertiary)] bg-[var(--color-gold-subtle)] px-2 py-0.5 rounded border border-[#fde68a] inline-block mb-2.5">
                    STEP {st.step}
                  </span>
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-1 leading-snug">{st.title}</h4>
                  <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Truths: High Risk and Valuation Uncertainty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h4 className="text-sm font-bold text-[var(--color-text-primary)] flex items-center gap-2 mb-4">
              <CheckCircle2 size={16} className="text-[var(--color-secondary)]" />
              Who May Consider Unlisted Equities
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[var(--color-text-secondary)] leading-relaxed">
              <li>• Sophisticated HNIs with substantial existing liquid portfolios in public mutual funds.</li>
              <li>• Investors seeking non-linear valuation expansion over 3 to 5-year patient holding horizons.</li>
              <li>• Investors comfortable evaluating financial statements, revenue models, and governance.</li>
              <li>• Allocators who can afford complete capital illiquidity during market downturns.</li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h4 className="text-sm font-bold text-[var(--color-text-primary)] flex items-center gap-2 mb-4">
              <AlertTriangle size={16} className="text-[var(--color-tertiary)]" />
              Rigorous Risk Disclosures
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[var(--color-text-muted)] leading-relaxed">
              <li>• <strong>Illiquidity:</strong> You cannot sell unlisted shares on a public exchange on demand.</li>
              <li>• <strong>IPO Cancellation Risk:</strong> Filing an IPO is never guaranteed and timelines often stretch.</li>
              <li>• <strong>Valuation Opacity:</strong> Prices are negotiated bilaterally rather than discovered on an exchange.</li>
              <li>• <strong>Post-Listing Lock-in:</strong> SEBI imposes a mandatory 6-month lock-in post listing for pre-IPO investors.</li>
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
              Private Equity Inquiries
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Discuss Verified Private Market Companies
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Connect directly with Panchanan Kumar for audited data packs and demat execution processes.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Inquire on Unlisted Shares</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Investments in unlisted equity securities are illiquid and carry substantial risk.
            There is no guarantee of listing on any stock exchange or assurance of returns. Consult your professional legal and tax
            counsel before acquiring private equity shares.
          </p>
        </div>
      </Container>
    </div>
  );
}
