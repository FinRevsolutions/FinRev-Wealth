import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Activity, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, FileText, Search, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Free Portfolio Review & Diagnostic Health Check — FINREV SOLUTIONS",
  "Audit your existing mutual fund portfolio. Identify scheme overlap, expense ratio drags, and underperformers with AMFI distributor Panchanan Kumar (ARN-195797).",
  "/wealth-solutions/portfolio-review"
);

const AUDIT_STEPS = [
  {
    step: "01",
    title: "Generate CAMS / KFintech CAS",
    desc: "Download your free password-protected Consolidated Account Statement (CAS) covering all your mutual fund folios across all AMCs.",
  },
  {
    step: "02",
    title: "Deep Diagnostic Audit",
    desc: "We analyze underlying stock overlaps, category allocation balance, expense ratio drag, and 3/5-year risk-adjusted alpha metrics.",
  },
  {
    step: "03",
    title: "Rebalancing Blueprint",
    desc: "Receive an actionable, tax-efficient restructuring plan to consolidate redundant schemes and align allocations with your goals.",
  },
];

const FAQS = [
  {
    q: "Is there any cost or fee for the portfolio review?",
    a: "No. FINREV provides an initial comprehensive portfolio diagnostic audit on a complimentary basis to identify structural inefficiencies and help you understand your current portfolio health.",
  },
  {
    q: "What is Fund Overlap and why is it dangerous?",
    a: "When an investor buys 5 different large cap or flexi cap mutual funds, they often discover that all 5 schemes hold the exact same 25 bluechip stocks (e.g. Reliance, HDFC Bank, ICICI Bank, Infosys). You are paying multiple expense ratios for identical holdings without receiving any true diversification benefit.",
  },
  {
    q: "Will I have to sell all my existing funds?",
    a: "Not necessarily. Good, high-governance schemes that align with your goals and deliver consistent risk-adjusted alpha are retained. Restructuring is carried out gradually to minimize capital gains tax and avoid exit load penalties.",
  },
];

export default function PortfolioReviewPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/wealth-solutions" className="hover:text-[var(--color-text-primary)] transition-colors">Wealth Solutions</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Portfolio Review</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] text-xs font-bold rounded border border-[var(--color-border-strong)] mb-3">
            <Activity size={14} />
            <span>Complimentary Diagnostic Audit</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Portfolio Health Check & Review
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Over years of random fund accumulation, most portfolios develop severe scheme overlap, high expense ratios,
            and unmanaged risk drags. We perform an empirical audit of your holdings and provide an actionable realignment plan.
          </p>
        </div>

        {/* 3 Step Review Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {AUDIT_STEPS.map((s) => (
            <div key={s.step} className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-border-strong)] inline-block mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                  Step {s.step}
                </span>
                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.title}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Diagnostic Comparison Matrix */}
        <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] p-6 md:p-8 mb-16 overflow-hidden">
          <SectionLabel>Empirical Health Check</SectionLabel>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mt-1 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Unmanaged Folio Traps vs. The FINREV Optimized Portfolio
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse min-w-[580px]">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-subtle)]">
                  <th className="py-3 px-4 font-bold text-[var(--color-text-primary)] uppercase tracking-wider text-[11px] w-1/4">Diagnostic Vector</th>
                  <th className="py-3 px-4 font-bold text-red-600 uppercase tracking-wider text-[11px] w-3/8">Typical Unmanaged Folio</th>
                  <th className="py-3 px-4 font-bold text-[var(--color-secondary)] uppercase tracking-wider text-[11px] w-3/8">FINREV Optimized Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                <tr className="hover:bg-[var(--color-surface-subtle)]/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[var(--color-text-primary)]">Number of Schemes</td>
                  <td className="py-3.5 px-4 text-[var(--color-text-secondary)]">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-red-50 text-red-700 font-semibold mb-1">18 to 35+ Mutual Funds</span>
                    <p className="text-[11px] text-[var(--color-text-muted)]">Accumulated over years of haphazard tips; tracking nightmare.</p>
                  </td>
                  <td className="py-3.5 px-4 text-[var(--color-text-primary)]">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold mb-1">5 to 8 High-Conviction Schemes</span>
                    <p className="text-[11px] text-[var(--color-text-muted)]">Purpose-built core-and-satellite structure with zero clutter.</p>
                  </td>
                </tr>
                <tr className="hover:bg-[var(--color-surface-subtle)]/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[var(--color-text-primary)]">Stock Overlap Drag</td>
                  <td className="py-3.5 px-4 text-[var(--color-text-secondary)]">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-red-50 text-red-700 font-semibold mb-1">60%–75% Portfolio Redundancy</span>
                    <p className="text-[11px] text-[var(--color-text-muted)]">Holding identical mega-caps across 6 different flexi/large caps.</p>
                  </td>
                  <td className="py-3.5 px-4 text-[var(--color-text-primary)]">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold mb-1">Under 25% Factor Overlap</span>
                    <p className="text-[11px] text-[var(--color-text-muted)]">Complementary investment styles (Growth, Quality, Value/Contrarian).</p>
                  </td>
                </tr>
                <tr className="hover:bg-[var(--color-surface-subtle)]/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[var(--color-text-primary)]">Expense Ratio Drag</td>
                  <td className="py-3.5 px-4 text-[var(--color-text-secondary)]">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-red-50 text-red-700 font-semibold mb-1">Heavy Drag from Laggard Funds</span>
                    <p className="text-[11px] text-[var(--color-text-muted)]">Paying full fees for persistent bottom-quartile category performers.</p>
                  </td>
                  <td className="py-3.5 px-4 text-[var(--color-text-primary)]">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold mb-1">Rigorous Alpha Justification</span>
                    <p className="text-[11px] text-[var(--color-text-muted)]">Only AMCs delivering consistent risk-adjusted alpha retain allocation.</p>
                  </td>
                </tr>
                <tr className="hover:bg-[var(--color-surface-subtle)]/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[var(--color-text-primary)]">Market Timing & Panic</td>
                  <td className="py-3.5 px-4 text-[var(--color-text-secondary)]">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-red-50 text-red-700 font-semibold mb-1">Stopping SIPs in Corrections</span>
                    <p className="text-[11px] text-[var(--color-text-muted)]">Selling low out of fear; buying speculative themes at peak valuations.</p>
                  </td>
                  <td className="py-3.5 px-4 text-[var(--color-text-primary)]">
                    <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold mb-1">Goal-Linked Glide-Path Discipline</span>
                    <p className="text-[11px] text-[var(--color-text-muted)]">Automated rebalancing, buying dips systematically, de-risking near goals.</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* What We Check During an Audit */}
        <div className="bg-white rounded-2xl p-8 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <SectionLabel>Audit Scope</SectionLabel>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-1 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            What Our Diagnostic Report Uncovers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Underlying Stock Overlap", desc: "Identifies identical company holdings across multiple fund schemes." },
              { title: "Expense Ratio Leakage", desc: "Calculates total annual expense ratio drag against category benchmarks." },
              { title: "Category Misalignment", desc: "Detects hidden sector risks and excessive small cap or thematic exposure." },
              { title: "Consistent Underperformers", desc: "Flags funds lagging their respective TRI benchmark over 3 and 5 years." },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
                <CheckCircle2 size={16} className="text-[var(--color-secondary)] mb-2" />
                <h4 className="text-xs font-bold text-[var(--color-text-primary)] mb-1">{item.title}</h4>
                <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
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

        {/* CTA */}
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary-fixed)] block mb-1">
              Complimentary Review
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Submit Your CAS for a Free Portfolio Health Check
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Email your statement to {CONTACT.email} or schedule a confidential call with Panchanan Kumar.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Request Portfolio Review</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks.
            Read all scheme related documents carefully before investing. A portfolio review does not guarantee future returns.
            FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
