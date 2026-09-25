import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Calculator, TrendingUp, Calendar, Globe, Layers, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Child Education Planning — Beating Higher Education Inflation",
  "Build an inflation-hedged higher education corpus for your child's domestic and international degrees with FINREV SOLUTIONS (ARN-195797).",
  "/wealth-solutions/child-education"
);

const EDUCATION_TIMELINE = [
  {
    milestone: "Milestone 01: Early Foundation",
    childAge: "Child Age 0 to 8 Years",
    horizon: "10 to 18 Years to College",
    allocation: "85% Equity / 15% Debt",
    description: "Maximum compounding window. Small monthly SIPs compound over 15+ years. Market corrections are actively advantageous via rupee-cost averaging.",
    action: "Establish automated Step-Up SIP linked to career increments.",
  },
  {
    milestone: "Milestone 02: Mid-Stage Acceleration",
    childAge: "Child Age 9 to 14 Years",
    horizon: "4 to 9 Years to College",
    allocation: "70% Equity / 30% Debt",
    description: "Corpus growth accelerates. Introduce currency-hedged international feeder funds if target degrees are in the US, UK, Europe, or Singapore.",
    action: "Finalize domestic vs overseas education roadmap.",
  },
  {
    milestone: "Milestone 03: Systematic De-Risking",
    childAge: "Child Age 15 to 17 Years",
    horizon: "1 to 3 Years to College",
    allocation: "35% Equity / 65% Debt",
    description: "Begin Systematic Transfer Plans (STP) from equity funds to short-duration and banking debt funds to lock in accumulated profits.",
    action: "Insulate tuition corpus from short-term market crashes.",
  },
  {
    milestone: "Milestone 04: Enrollment Disbursement",
    childAge: "Child Age 18+ Years",
    horizon: "College Admission Year",
    allocation: "100% Liquid / Overnight Funds",
    description: "Complete capital protection in liquid cash equivalents. Tranches are disbursed per university semester fee schedules.",
    action: "Zero equity market timing risk on tuition due dates.",
  },
];

const COST_PROJECTIONS = [
  {
    course: "Premier Private Engineering (B.Tech)",
    institution: "BITS, VIT, Top Tech Institutions",
    costToday: "₹22,00,000",
    costIn7Yrs: "₹42,87,000",
    costIn12Yrs: "₹69,05,000",
    monthlySIP: "₹21,500 / mo",
  },
  {
    course: "Top-Tier Domestic MBA",
    institution: "IIMs, Top Tier-1 Business Schools",
    costToday: "₹30,00,000",
    costIn7Yrs: "₹58,46,000",
    costIn12Yrs: "₹94,15,000",
    monthlySIP: "₹29,300 / mo",
  },
  {
    course: "Overseas STEM Master's Degree",
    institution: "US / UK / Canada (Tuition + Living)",
    costToday: "₹65,00,000",
    costIn7Yrs: "₹1,26,00,000",
    costIn12Yrs: "₹2,04,00,000",
    monthlySIP: "₹63,500 / mo",
  },
  {
    course: "Overseas Undergraduate Degree",
    institution: "4-Year Bachelor's in US Private Univ",
    costToday: "₹1,50,00,000",
    costIn7Yrs: "₹2,92,00,000",
    costIn12Yrs: "₹4,70,00,000",
    monthlySIP: "₹1,46,000 / mo",
  },
];

const FAQS = [
  {
    q: "Why is traditional child insurance (endowment policies) typically inadequate?",
    a: "Traditional child endowment insurance policies typically generate annualized internal rates of return (IRR) between 4.5% and 5.5%, while higher education costs in India escalate at 10% to 12% annually. Relying solely on endowment plans results in a massive real shortfall at age 18. Pure term insurance for the parent paired with equity mutual fund SIPs offers higher growth potential with proper life cover.",
  },
  {
    q: "How does Rupee depreciation impact overseas education planning?",
    a: "Families planning for foreign universities face dual compounding inflation: foreign tuition inflation (~5%–7% in USD/GBP) plus historical Indian Rupee depreciation against the dollar (~3%–4% annually). Your financial model must account for a combined ~10% annual escalation.",
  },
  {
    q: "When should parents execute the de-risking glide path?",
    a: "De-risking should begin systematically 2 to 3 years prior to college enrollment (around child age 15–16). Accumulated equity gains are shifted via STP into low-volatility debt and liquid funds so an untimely market downturn does not jeopardize university fees.",
  },
];

export default function ChildEducationPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/wealth-solutions" className="hover:text-[var(--color-text-primary)] transition-colors">Wealth Solutions</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Child Education</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <GraduationCap size={13} className="text-[var(--color-secondary)]" />
            <span>Higher Education Inflation Defense</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Child Higher Education Planning
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Higher education costs in India and abroad escalate at 10%+ annually. We design multi-year equity
            accumulation portfolios with automated milestone glide paths to ensure college funds are secured when admission letters arrive.
          </p>
        </div>

        {/* INFLATION-AWARE MILESTONE TIMELINE: Birth to College Admission */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Milestone Timeline</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                The 4-Stage Education Milestone Timeline
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">Age 0 to 18+ Progression</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {EDUCATION_TIMELINE.map((item) => (
              <div key={item.milestone} className="border border-[var(--color-border-subtle)] rounded-[4px] p-4 bg-[var(--color-surface-low)] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[var(--color-secondary)] mb-1">
                    {item.childAge}
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-1">
                    {item.milestone}
                  </h3>
                  <div className="text-[11px] font-mono text-[var(--color-primary)] font-semibold mb-3 bg-white p-2 rounded-[2px] border border-[var(--color-border-subtle)]">
                    {item.allocation}
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="text-[11px] font-mono text-[var(--color-text-muted)] border-t border-[var(--color-border-subtle)] pt-2">
                  <strong className="text-[var(--color-text-primary)]">Key Action:</strong> {item.action}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INFLATION-AWARE COST PROJECTIONS TABLE */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Empirical Cost Escalation</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The Compounded Future Cost of Higher Education (10% Annual Inflation)
            </h2>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Comparing current tuition benchmarks with projected milestone costs and illustrative 12-year monthly SIP requirements.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3">Academic Program / Degree</th>
                  <th className="py-3 px-3">Cost Today (2026)</th>
                  <th className="py-3 px-3">In 7 Years (Age 18)</th>
                  <th className="py-3 px-3">In 12 Years (Age 18)</th>
                  <th className="py-3 px-3 font-semibold text-[var(--color-secondary)]">12-Yr Required SIP*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                {COST_PROJECTIONS.map((c) => (
                  <tr key={c.course}>
                    <td className="py-3 px-3">
                      <div className="font-semibold text-[var(--color-text-primary)]">{c.course}</div>
                      <div className="text-[11px] text-[var(--color-text-muted)]">{c.institution}</div>
                    </td>
                    <td className="py-3 px-3 font-mono">{c.costToday}</td>
                    <td className="py-3 px-3 font-mono">{c.costIn7Yrs}</td>
                    <td className="py-3 px-3 font-mono font-bold text-[var(--color-text-primary)]">{c.costIn12Yrs}</td>
                    <td className="py-3 px-3 font-mono font-bold text-[var(--color-secondary)]">{c.monthlySIP}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] rounded-[4px] text-[11px] text-[var(--color-text-muted)] leading-relaxed">
            *Illustrative SIP modeling assumes a disciplined monthly contribution compounded at an assumed 12% CAGR over 12 years. Actual mutual fund returns are subject to market volatility.
          </div>
        </div>

        {/* Global Currency Risk & Parent Life Protection Realities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Currency Depreciation Defense
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              For children aspiring to study in the US, UK, or Europe, funding costs are magnified by foreign exchange fluctuations:
            </p>
            <div className="space-y-2 text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-text-secondary)]">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Incorporating global international feeder funds hedges against long-term INR depreciation.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Prevents last-minute currency shocks when converting rupees into USD/GBP tuition drafts.</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Protecting the Education Dream: Term Life Cover
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              An education plan is only as secure as the primary breadwinner's life protection:
            </p>
            <div className="space-y-2 text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-text-secondary)]">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Pure term life insurance ensures the full targeted college corpus is immediately funded in case of premature death.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Decouples investment growth from high-cost insurance surrender penalties.</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Education Planning
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
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Education Planning Desk</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Model Your Child's Future Education Corpus
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Map enrollment timelines, project inflation rates, and structure automated SIPs with Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/tools/child-education-calculator"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[var(--color-border-subtle)] text-xs font-semibold text-[var(--color-text-primary)] rounded-[4px] hover:border-[var(--color-primary)] transition-colors"
            >
              <Calculator size={14} />
              <span>Education Calculator</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Consult on Education</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing. Historical education inflation rates and investment projections are illustrative and do not guarantee future performance. FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
