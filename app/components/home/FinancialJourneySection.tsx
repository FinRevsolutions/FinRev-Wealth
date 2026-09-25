import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STAGES = [
  {
    step: "01",
    phase: "DISCOVERY & RISK MAPPING",
    title: "Understanding Your Financial Reality",
    desc: "We analyze your cash flow, risk capacity, investment horizon, and existing assets to construct an objective financial baseline before making any product recommendations.",
    deliverables: ["Current Cash-Flow Diagnostics", "Risk Tolerance & Capacity Assessment", "Emergency Buffer Adequacy"],
    href: "/wealth-solutions/portfolio-review",
    cta: "Request Portfolio Review",
  },
  {
    step: "02",
    phase: "CORE PORTFOLIO CONSTRUCTION",
    title: "Systematic Capital Deployment",
    desc: "Structuring core mutual fund folios, automated monthly SIP mandates, and fixed income allocations across reputable AMCs with direct investor ownership.",
    deliverables: ["Large, Flexi & Multi-Cap Mutual Funds", "Automated SIP Mandates", "High-Quality Corporate & Sovereign Bonds"],
    href: "/investments/mutual-funds",
    cta: "Explore Mutual Funds",
  },
  {
    step: "03",
    phase: "RISK DEFENSE & MILESTONE LOCK",
    title: "Insulating Life Milestones",
    desc: "Locking in dedicated funding paths for children's education and retirement, fortified with pure-risk term life insurance so market swings or health crises never derail long-term goals.",
    deliverables: ["Retirement Corpus Strategy", "Children's Higher Education Fund", "Pure Term & Comprehensive Health Cover"],
    href: "/protection",
    cta: "Explore Protection Architecture",
  },
  {
    step: "04",
    phase: "MULTI-DECADE COMPOUNDING",
    title: "Disciplined Review & Strategic Growth",
    desc: "Periodic portfolio rebalancing, tax-efficient harvesting, and selective access to Portfolio Management Services (PMS) and Alternative Investment Funds (AIF) as capital compounds.",
    deliverables: ["Annual Portfolio Rebalancing", "Tax-Efficient Capital Realization", "Curated PMS & AIF Access"],
    href: "/investments/pms",
    cta: "Explore Specialized Solutions",
  },
];

export function FinancialJourneySection() {
  return (
    <section className="relative w-full bg-[var(--color-primary)] text-white py-16 md:py-24 border-b border-slate-800" aria-label="Financial Journey">
      <div className="container-page">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-finrev-gold)]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-finrev-gold)]">
              Structured Methodology
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A Disciplined Blueprint for Your Financial Journey.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3.5 leading-relaxed max-w-2xl">
            Wealth accumulation is not an accident of market timing. It is the predictable outcome of an interconnected, stage-by-stage architecture executed consistently over time.
          </p>
        </div>

        {/* Editorial Timeline & Numbered Stages (Thin Separators) */}
        <div className="border-t border-white/15 divide-y divide-white/10">
          {STAGES.map((s) => (
            <div
              key={s.step}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-8 md:py-10 group"
            >
              {/* Step & Phase Identifier (3 cols) */}
              <div className="lg:col-span-3 flex lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-3">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white/30 group-hover:text-[var(--color-finrev-gold)] transition-colors">
                  {s.step}
                </span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-secondary-500)] block">
                    {s.phase}
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5 hidden lg:block">
                    Stage {s.step} of 04
                  </span>
                </div>
              </div>

              {/* Title & Narrative (5 cols) */}
              <div className="lg:col-span-5">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-4">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-finrev-gold-light)] hover:text-white transition-colors"
                  >
                    <span>{s.cta}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Deliverables / Scope (4 cols) */}
              <div className="lg:col-span-4 bg-white/[0.04] p-4 sm:p-5 rounded-[6px] border border-white/10">
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Key Milestones & Deliverables
                </p>
                <ul className="space-y-2">
                  {s.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-secondary-500)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Bottom Bar */}
        <div className="pt-6 mt-2 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <span>AMFI-Registered Mutual Fund Distributor · ARN-195797 · Regulated by SEBI Guidelines</span>
          <Link
            href="/tools"
            className="text-[var(--color-finrev-gold-light)] hover:text-white font-medium inline-flex items-center gap-1.5"
          >
            <span>Model Your Milestones in the Tools Hub</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
