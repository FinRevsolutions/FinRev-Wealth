import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gem, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Scale, Lock, Clock, Layers, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Alternative Investment Funds (AIF) — Institutional Alternatives",
  "Institutional Alternative Investment Funds (AIF) for sophisticated investors. Private equity, structured credit, and long-short strategies facilitated via SEBI-registered AIF managers.",
  "/investments/aif"
);

const AIF_CATEGORIES = [
  {
    cat: "Category I AIF",
    theme: "Infrastructure & Early Stage Capital",
    focus: "Venture Capital Funds, SME Funds, Infrastructure Funds, Social Impact Funds",
    tenure: "Long-Term (Typically 5 to 7+ Years Close-Ended)",
    structure: "Funds investing in start-ups, early-stage enterprises, or critical infrastructure deemed economically vital by regulators, often benefiting from specific governmental policy incentives.",
  },
  {
    cat: "Category II AIF",
    theme: "Private Equity & Private Credit",
    focus: "Private Equity Funds, Real Estate Debt Funds, Structured Credit, Special Situations",
    tenure: "Close-Ended (Typically 3 to 6 Years)",
    structure: "Funds that do not employ external leverage other than for routine operational obligations. Primarily focuses on unlisted equity, mezzanine debt, structured high-yield corporate credit, and pre-IPO placements.",
  },
  {
    cat: "Category III AIF",
    theme: "Hedge & Absolute Return Strategies",
    focus: "Long-Short Equity, Systematic Quantitative Alpha, Commodity Arbitrage, Derivatives",
    tenure: "Open-Ended or Close-Ended (Typically 1 to 3 Years)",
    structure: "Funds that employ sophisticated trading strategies, including long-short equity hedging, listed derivatives, and regulated leverage, designed to produce non-correlated absolute returns across bull and bear markets.",
  },
];

const FAQS = [
  {
    q: "What defines an Alternative Investment Fund (AIF) under Indian regulations?",
    a: "Under SEBI (Alternative Investment Funds) Regulations, an AIF is an institutionally established pooled investment vehicle that collects funds from sophisticated domestic and global investors to invest in accordance with a defined investment policy for the benefit of its unit holders. AIFs are not covered under SEBI's Mutual Fund Regulations.",
  },
  {
    q: "How does the Capital Commitment and Drawdown structure work?",
    a: "In close-ended Category I and II AIFs, investors sign a Contribution Agreement committing a total capital outlay. The manager does not withdraw the entire capital upfront; instead, formal 'Capital Calls' or drawdowns are issued in tranches over an initial 2 to 3-year investment period as verified private transactions are executed.",
  },
  {
    q: "What are the liquidity constraints of an AIF?",
    a: "Unlike mutual funds which offer daily liquidity, most Category I and II AIFs are strictly illiquid with multi-year lock-in tenures ranging from 3 to 7+ years. Capital cannot be redeemed prematurely on demand; returns and principal are distributed as underlying private assets or debt holdings are liquidated or listed.",
  },
  {
    q: "How are AIF investment proceeds taxed?",
    a: "Category I and II AIFs are granted tax pass-through status under the Indian Income Tax Act. The fund itself is not taxed; income (business income, capital gains, or interest) is characterized and taxed directly in the hands of the investor as if they had invested directly. Category III AIFs are generally taxed at the fund level at the maximum marginal rate (MMR).",
  },
];

const LIFECYCLE_STAGES = [
  {
    stage: "Stage 01",
    title: "Capital Commitment",
    timing: "Day 1 (Legal Onboarding)",
    description: "The investor executes the Private Placement Memorandum (PPM) contribution agreement, legally committing their capital allocation into the fund trust.",
  },
  {
    stage: "Stage 02",
    title: "Staged Capital Drawdowns",
    timing: "Years 1 to 3 (Commitment Period)",
    description: "The AIF manager issues formal drawdown notices (typically 15% to 25% tranches) as private market transactions meet due-diligence criteria.",
  },
  {
    stage: "Stage 03",
    title: "Active Asset Portfolio",
    timing: "Years 3 to 5 (Value Creation)",
    description: "Portfolio assets are actively managed—private enterprise governance, structured debt servicing, or hedged long-short trading positions.",
  },
  {
    stage: "Stage 04",
    title: "Harvest & Realization",
    timing: "Years 5 to 7+ (Distributions)",
    description: "Capital is returned through IPO listings, strategic buyouts, or structured debt maturities, followed by hurdle-rate profit distributions.",
  },
];

export default function AIFPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/investments" className="hover:text-[var(--color-text-primary)] transition-colors">Investments</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Alternative Investment Funds</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <Gem size={13} className="text-[var(--color-secondary)]" />
            <span>Institutional Alternative Assets</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">SEBI Regulated AIFs</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Alternative Investment Funds (AIF)
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Institutional investment frameworks designed for accredited and sophisticated market participants seeking
            non-correlated private equity, structured credit, and absolute return strategies unconstrained by public market indices.
          </p>
        </div>

        {/* Regulatory Disclosure Banner */}
        <div className="bg-[var(--color-surface-container-highest)] border border-[var(--color-border-subtle)] rounded-[4px] p-5 mb-12 flex items-start gap-3 text-xs text-[var(--color-text-secondary)]">
          <ShieldCheck size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-[var(--color-text-primary)] block mb-0.5">Regulatory Facilitation Role:</strong>
            FINREV SOLUTIONS (ARN-195797) acts as a distributor and client facilitator connecting qualifying investors with SEBI-registered Alternative Investment Fund managers. AIF offerings are governed strictly by the Private Placement Memorandum (PPM) of respective investment managers. FINREV does not manage proprietary AIF pools.
          </div>
        </div>

        {/* The 3 Regulated Categories of AIF */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">SEBI Regulatory Framework</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Classification of Alternative Investment Funds
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">SEBI (AIF) Regulations, 2012</span>
          </div>

          <div className="space-y-6 divide-y divide-[var(--color-border-subtle)]">
            {AIF_CATEGORIES.map((cat, idx) => (
              <div key={cat.cat} className={idx > 0 ? "pt-6" : ""}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="md:w-1/3">
                    <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider block mb-1">
                      {cat.theme}
                    </span>
                    <h3 className="text-base font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                      {cat.cat}
                    </h3>
                    <span className="inline-block mt-2 text-[11px] font-mono text-[var(--color-text-muted)] bg-[var(--color-surface-low)] px-2.5 py-1 rounded-[2px] border border-[var(--color-border-subtle)]">
                      {cat.tenure}
                    </span>
                  </div>
                  <div className="md:w-2/3 space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    <p>{cat.structure}</p>
                    <div className="text-[11px] text-[var(--color-text-muted)] pt-1">
                      <strong className="text-[var(--color-text-primary)]">Typical Mandate Focus:</strong> {cat.focus}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ARCHITECTURAL LIFECYCLE: Capital Commitment & Drawdown Model */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Institutional Mechanism</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                The 4-Stage AIF Capital Commitment Lifecycle
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">Staged Drawdown Protocol</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {LIFECYCLE_STAGES.map((step) => (
              <div key={step.stage} className="border border-[var(--color-border-subtle)] rounded-[4px] p-4 bg-[var(--color-surface-low)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)] mb-2">
                    <span className="text-[var(--color-secondary)] font-bold">{step.stage}</span>
                    <span className="text-[10px]">{step.timing}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>
                <div className="w-full h-1 bg-slate-200 rounded-[2px] overflow-hidden">
                  <div className="h-full bg-[var(--color-secondary)]" style={{ width: "100%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investor Suitability vs Risk Governance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Accredited Investor Suitability
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              AIF strategies are structured strictly for institutional investors, sovereign funds, family offices, and verified accredited investors who meet statutory regulatory criteria:
            </p>
            <div className="space-y-2 text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-text-secondary)]">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Substantial investable net worth capable of fulfilling statutory minimum commitments.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Zero need for liquidity on committed capital throughout the 3 to 7-year fund tenure.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Ability to evaluate detailed private placement memorandums and audited financial statements.</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Structural Risk & Liquidity Considerations
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Alternative investments carry significant operational, market, and liquidity risks:
            </p>
            <div className="space-y-2 text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-text-muted)]">
              <div className="flex items-start gap-2">
                <AlertTriangle size={13} className="text-amber-700 shrink-0 mt-0.5" />
                <span><strong>Illiquidity & Lock-In:</strong> Units cannot be easily redeemed prior to the formal winding up of the scheme.</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle size={13} className="text-amber-700 shrink-0 mt-0.5" />
                <span><strong>Capital Call Obligations:</strong> Failure to meet scheduled capital calls may invoke contractual default penalties.</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle size={13} className="text-amber-700 shrink-0 mt-0.5" />
                <span><strong>J-Curve Effect:</strong> Initial fund years often show muted or negative returns due to organizational setup costs and deal gestation.</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Alternative Investment Funds
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
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Institutional Desk</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Request Private Placement Memorandums (PPM)
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Inquire about current Category II and Category III fund availability with Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Inquire About AIF Strategies</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Alternative Investment Funds (AIFs) are high-risk pooled vehicles intended strictly for sophisticated and accredited investors capable of evaluating private placement memorandums (PPM). There is no assurance of capital protection or targeted return achievement. FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797) facilitating third-party SEBI-registered AIF products.
          </p>
        </div>
      </Container>
    </div>
  );
}
