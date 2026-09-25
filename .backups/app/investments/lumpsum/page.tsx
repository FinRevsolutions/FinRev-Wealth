import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Banknote, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Calculator, Shuffle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Lumpsum Investment & Systematic Transfer Plans (STP)",
  "Deploy one-time surplus capital and business liquidity prudently using Systematic Transfer Plans (STP) with FINREV SOLUTIONS (ARN-195797).",
  "/investments/lumpsum"
);

const FAQS = [
  {
    q: "How does a Systematic Transfer Plan (STP) protect lumpsum capital?",
    a: "Instead of deploying a large sum into volatile equity markets all on a single day, you park the total amount in an ultra-low-risk Liquid Fund or Overnight Fund. An automated mandate then transfers a fixed amount (e.g. ₹50,000/week) into your chosen Equity fund over 6 to 12 months, effectively averaging your equity entry price.",
  },
  {
    q: "When is direct lumpsum equity deployment appropriate?",
    a: "Direct lumpsum deployment into equity funds is generally considered when broad market valuations are attractively discounted following major market corrections, or when your investment horizon is ultra-long (10+ years), which naturally diminishes the impact of entry point timing.",
  },
  {
    q: "What are the tax implications of an STP?",
    a: "Each transfer from the source fund (Liquid/Debt) to the destination fund (Equity) is treated by tax laws as a redemption from the source fund and is subject to applicable Short-Term or Long-Term Capital Gains tax on any gains generated while parked in the source fund.",
  },
  {
    q: "Can I do an STP between funds of different AMCs?",
    a: "No. A Systematic Transfer Plan can only operate between schemes belonging to the same Asset Management Company (for example, from ICICI Liquid Fund to ICICI Flexi Cap Fund).",
  },
];

export default function LumpsumPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/investments" className="hover:text-[var(--color-text-primary)] transition-colors">Investments</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Lumpsum & STP</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-navy-subtle)] text-[var(--color-primary)] text-xs font-bold rounded border border-[var(--color-border-subtle)] mb-3">
            <Banknote size={14} />
            <span>Strategic Capital Deployment</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lumpsum Investment & Systematic Transfer (STP)
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Whether deploying annual performance bonuses, asset sale windfalls, or corporate treasury surpluses,
            we structure calculated capital deployment to eliminate the anxiety of market timing.
          </p>
        </div>

        {/* Lumpsum vs STP Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center mb-4">
              <Banknote size={20} />
            </div>
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Direct Lumpsum Allocation
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-4">
              Best suited for conservative asset classes (Debt funds, Corporate Bonds, Sovereign Gold Bonds) or when equity
              markets are experiencing significant corrections and trading at historically discounted valuations.
            </p>
            <ul className="flex flex-col gap-2 text-xs text-[var(--color-text-secondary)] font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[var(--color-secondary)]" />Immediate capital compounding</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[var(--color-secondary)]" />Ideal for fixed income yield locking</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[var(--color-secondary)]" />Single-step paperless execution</li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)] text-white flex items-center justify-center mb-4">
              <Shuffle size={20} />
            </div>
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              The STP Staggered Route
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-4">
              Park the lumpsum capital in a Liquid or Arbitrage Fund to earn modest short-term returns, and systematically
              stagger transfers into high-growth equity funds over a 6 to 12-month horizon.
            </p>
            <ul className="flex flex-col gap-2 text-xs text-[var(--color-text-secondary)] font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[var(--color-secondary)]" />Averages equity market entry prices</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[var(--color-secondary)]" />Eliminates regret of entering at market peaks</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[var(--color-secondary)]" />Earns liquid yield on unallocated balances</li>
            </ul>
          </div>
        </div>

        {/* Lumpsum Calculator Callout */}
        <div className="p-8 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] block mb-1">
              Estimate Compounded Value
            </span>
            <h4 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Calculate Future Value of Your Lumpsum Capital
            </h4>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Simulate investment growth across different holding durations and return expectations.
            </p>
          </div>
          <Link
            href="/tools/lumpsum-calculator"
            className="px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-inverse-surface)] text-white text-xs font-bold rounded-xl shrink-0 transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <Calculator size={14} />
            <span>Open Lumpsum Calculator</span>
          </Link>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Frequently Asked Questions on Lumpsum & STP
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
              Consultation Desk
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Deploy Surplus Capital Strategically
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Review current market valuation indicators and structure your STP deployment with Panchanan Kumar.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Consult on Lumpsum</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks.
            Read all scheme related documents carefully before investing. Direct lumpsum deployment in equity can expose capital
            to short-term volatility. FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
