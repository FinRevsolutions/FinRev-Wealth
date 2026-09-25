import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Activity, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, FileText, Search, RefreshCw, Layers, SlidersHorizontal, BarChart2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { CONTACT, REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Portfolio Review & Diagnostic Health Check — FINREV SOLUTIONS",
  "Audit your existing mutual fund portfolio. Identify stock overlap, expense ratio drag, and persistent underperformers with AMFI distributor Panchanan Kumar (ARN-195797).",
  "/wealth-solutions/portfolio-review"
);

const AUDIT_STEPS = [
  {
    step: "01",
    title: "Consolidated Statement Intake",
    subtitle: "CAMS / KFintech CAS Download",
    description: "Download your official Consolidated Account Statement (CAS) covering all mutual fund folios across all AMCs registered to your PAN.",
    detail: "Zero paper requirement; password-protected PDF intake directly from official RTAs.",
  },
  {
    step: "02",
    title: "Forensic Factor & Overlap Audit",
    subtitle: "Stock & Sector Duplication Analysis",
    description: "We deconstruct underlying portfolio holdings across all your schemes to measure cross-fund stock overlap, market-cap tilt, and sector concentration.",
    detail: "Uncovers identical mega-cap holdings hiding inside multiple flexi-cap and large-cap funds.",
  },
  {
    step: "03",
    title: "Expense & Performance Drag Check",
    subtitle: "Benchmark Alpha vs Total Expense Ratio (TER)",
    description: "Evaluation of 3-year and 5-year rolling alpha against respective Total Return Benchmarks (TRI) to flag chronic quartile-4 underperformers.",
    detail: "Quantifies cumulative fee leakage from high-cost schemes that consistently trail indices.",
  },
  {
    step: "04",
    title: "Phased Realignment Blueprint",
    subtitle: "Tax-Aware Restructuring Plan",
    description: "Creation of a phased rebalancing schedule to consolidate fragmented holdings into 4–6 high-conviction funds without incurring unnecessary exit loads or taxes.",
    detail: "Prioritizes grandfathered holdings and staggered redemption schedules.",
  },
];

const COMPARISON_VECTORS = [
  {
    vector: "Portfolio Breadth & Complexity",
    unmanaged: "15 to 30+ scattered funds accumulated through random tips and sporadic NFO investments.",
    optimized: "4 to 6 focused, high-conviction schemes structured with clean Core and Satellite mandates.",
  },
  {
    vector: "Underlying Stock Redundancy",
    unmanaged: "60%–75% common stock overlap; holding the same top 20 bluechips across multiple funds.",
    optimized: "Under 25% factor overlap; schemes with complementary investment styles (Growth, Value, Blend).",
  },
  {
    vector: "Fee Drag & Expense Leakage",
    unmanaged: "Paying full management fees for chronic bottom-quartile schemes dragging overall performance.",
    optimized: "Every allocated basis point is justified by persistent risk-adjusted category outperformance.",
  },
  {
    vector: "Asset Allocation Governance",
    unmanaged: "Ad-hoc, unmapped allocations without rebalancing; equity exposure swings with market emotions.",
    optimized: "Strict milestone glide path with annual rebalancing bands and systematic de-risking.",
  },
  {
    vector: "Exit & Tax Coordination",
    unmanaged: "Random redemptions triggering short-term capital gains tax and premature exit load penalties.",
    optimized: "Calculated harvest schedules respecting STCG/LTCG holding windows and annual tax exemptions.",
  },
];

const FAQS = [
  {
    q: "Is there any commercial fee for the portfolio diagnostic review?",
    a: "FINREV SOLUTIONS provides an initial portfolio health check on a complimentary basis for prospective clients to identify structural redundancies and establish baseline asset allocation health.",
  },
  {
    q: "What is Fund Overlap and why is it detrimental to compounding?",
    a: "When an investor buys multiple mutual funds in the same broad category (e.g. 3 Flexi Cap funds and 2 Large & Mid Cap funds), they typically find that all 5 schemes hold the exact same 25 bluechip stocks (Reliance, HDFC Bank, ICICI Bank, Infosys, TCS). The investor pays multiple management fees for duplicate portfolios without receiving genuine diversification.",
  },
  {
    q: "Will an audit require selling all my existing mutual fund holdings?",
    a: "No. Quality mutual fund schemes that demonstrate consistent category alpha and align with your target risk profile are retained. Restructuring recommendations are executed in phased tranches to avoid premature exit loads and minimize capital gains tax friction.",
  },
];

export default function PortfolioReviewPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/wealth-solutions" className="hover:text-[var(--color-text-primary)] transition-colors">Wealth Solutions</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Portfolio Review</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <Activity size={13} className="text-[var(--color-secondary)]" />
            <span>Diagnostic Folio Audit</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Portfolio Health Check & Diagnostic Review
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Over years of sporadic investing, most portfolios accumulate duplicate holdings, excessive fee drag,
            and unmanaged sector risks. We conduct an objective forensic audit of your mutual fund folios.
          </p>
        </div>

        {/* 4-STEP DIAGNOSTIC PROTOCOL: Structured Rows */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Audit Methodology</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                The 4-Stage Diagnostic Framework
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">Forensic Folio Analysis</span>
          </div>

          <div className="space-y-6 divide-y divide-[var(--color-border-subtle)]">
            {AUDIT_STEPS.map((s, idx) => (
              <div key={s.step} className={idx > 0 ? "pt-6" : ""}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="md:w-1/3">
                    <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider block mb-1">
                      Stage {s.step} • {s.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                      {s.title}
                    </h3>
                  </div>
                  <div className="md:w-2/3 space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    <p>{s.description}</p>
                    <div className="p-2.5 bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] rounded-[2px] text-[11px] font-mono text-[var(--color-primary)]">
                      <strong>Audit Focus:</strong> {s.detail}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARATIVE ANALYSIS TABLE: Unmanaged vs Optimized */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Portfolio Architecture</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Comparative Assessment: Unmanaged Fragmented Folios vs. FINREV Architecture
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3 w-1/4">Diagnostic Vector</th>
                  <th className="py-3 px-3 w-3/8 text-amber-900">Unmanaged Fragmented Folio</th>
                  <th className="py-3 px-3 w-3/8 text-[var(--color-primary)]">FINREV Optimized Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                {COMPARISON_VECTORS.map((row) => (
                  <tr key={row.vector}>
                    <td className="py-3.5 px-3 font-semibold text-[var(--color-text-primary)]">{row.vector}</td>
                    <td className="py-3.5 px-3 text-xs leading-relaxed text-amber-950 bg-amber-50/20">{row.unmanaged}</td>
                    <td className="py-3.5 px-3 text-xs leading-relaxed font-semibold text-[var(--color-primary)] bg-emerald-50/10">{row.optimized}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Portfolio Reviews
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
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Diagnostic Review Desk</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Request a Comprehensive Portfolio Diagnostic
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Share your CAMS / KFintech Consolidated Account Statement securely with Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Submit CAS for Review</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing. A portfolio health check is an analytical diagnostic tool and does not assure or guarantee future investment returns. FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
