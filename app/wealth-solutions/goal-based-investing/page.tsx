import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, CheckCircle2, Calculator, Target, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Goal-Based Investing — Aligning Portfolios to Life Milestones",
  "Structure mutual fund investments around exact life priorities: Home Down-Payment, Sabbaticals, and Family Milestones with FINREV SOLUTIONS.",
  "/wealth-solutions/goal-based-investing"
);

const GOAL_EXAMPLES = [
  {
    goal: "Home Down-Payment Fund",
    horizon: "3 to 5 Years",
    strategy: "Balanced Advantage & Conservative Hybrid funds to preserve principal while generating modest equity alpha.",
  },
  {
    goal: "Emergency Liquidity Shield",
    horizon: "Immediate (0 to 1 Year)",
    strategy: "High-grade Liquid & Overnight Funds maintaining 6 to 12 months of household expenses with T+1 redemption.",
  },
  {
    goal: "Sabbatical / Career Pivot",
    horizon: "5 to 7 Years",
    strategy: "Multi-Asset Allocation balancing large cap equity with gold hedging to secure replacement cash flows.",
  },
  {
    goal: "Generational Legacy Corpus",
    horizon: "15+ Years",
    strategy: "Pure high-conviction Flexi Cap and Mid Cap equity allocations for uncompromised multi-decade compounding.",
  },
];

const FAQS = [
  {
    q: "Why is goal-based investing superior to return-chasing?",
    a: "When you invest for a specific goal, you have a defined exit date and target sum. This prevents emotional panic during market dips because you know you do not need the money today. It also ensures you automatically de-risk (shift from equity to debt) as the goal date approaches.",
  },
  {
    q: "What is a glide-path strategy in goal planning?",
    a: "A glide path is an automated asset allocation shift over time. If your goal is 10 years away, the portfolio starts at 80% equity. By year 7, it tapers to 50%, and by year 9, it shifts into liquid debt funds, locking in gains and eliminating last-minute market crash risk.",
  },
];

export default function GoalBasedInvestingPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/wealth-solutions" className="hover:text-[var(--color-text-primary)] transition-colors">Wealth Solutions</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Goal-Based Investing</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] text-xs font-bold rounded border border-[var(--color-border-strong)] mb-3">
            <Compass size={14} />
            <span>Milestone Architecture</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Goal-Based Investment Architecture
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Stop making arbitrary, unmapped investments. We link every single rupee to a distinct life milestone,
            time horizon, and tailored risk-budgeting glide-path.
          </p>
        </div>

        {/* VISUAL 1: The Goal-Based Asset Glidepath */}
        <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="max-w-2xl mb-6">
            <SectionLabel>Dynamic De-Risking</SectionLabel>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The FINREV Asset Allocation Glide-Path
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              As your milestone draws closer, your portfolio automatically shifts from high-growth equity into capital-preserving liquid debt.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                timeframe: "10+ Years from Milestone",
                phase: "Capital Acceleration Phase",
                equity: 85,
                debt: 15,
                focus: "Pure multi-cap equity compounding; temporary market corrections are leveraged via SIP averaging.",
                badge: "High Growth",
                badgeColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
              },
              {
                timeframe: "5 to 7 Years from Milestone",
                phase: "Milestone Consolidation Phase",
                equity: 65,
                debt: 35,
                focus: "Introduce balanced advantage and corporate bond funds to cushion accumulated gains.",
                badge: "Balanced Growth",
                badgeColor: "text-blue-800 bg-blue-50 border-blue-200",
              },
              {
                timeframe: "2 to 3 Years from Milestone",
                phase: "De-Risking & Capital Shield Phase",
                equity: 30,
                debt: 70,
                focus: "Systematic Transfer Plans (STP) harvest equity profits into high-grade short-duration debt.",
                badge: "Capital Defense",
                badgeColor: "text-amber-800 bg-amber-50 border-amber-200",
              },
              {
                timeframe: "Final 12 Months to Target",
                phase: "Zero-Volatility Liquidity Phase",
                equity: 5,
                debt: 95,
                focus: "100% capital insulated in liquid and overnight funds. Your required corpus is fully protected and ready for withdrawal.",
                badge: "100% Preserved",
                badgeColor: "text-purple-800 bg-purple-50 border-purple-200",
              },
            ].map((step) => (
              <div key={step.timeframe} className="p-5 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[var(--color-secondary)] uppercase tracking-wider block">
                      {step.timeframe}
                    </span>
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)]">{step.phase}</h4>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded border self-start sm:self-center ${step.badgeColor}`}>
                    {step.badge}
                  </span>
                </div>

                <div className="w-full h-3 rounded-full overflow-hidden flex bg-slate-200 mb-2">
                  <div className="bg-[var(--color-secondary)] h-full transition-all" style={{ width: `${step.equity}%` }} title={`Equity: ${step.equity}%`} />
                  <div className="bg-[var(--color-primary)] h-full transition-all" style={{ width: `${step.debt}%` }} title={`Debt: ${step.debt}%`} />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[var(--color-text-muted)] gap-1">
                  <p className="text-[11px] text-[var(--color-text-secondary)]">{step.focus}</p>
                  <div className="flex items-center gap-3 shrink-0 font-mono text-[10px]">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />Equity: {step.equity}%</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />Debt: {step.debt}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Goal Archetypes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {GOAL_EXAMPLES.map((item) => (
            <div key={item.goal} className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-border-strong)]">
                    {item.horizon}
                  </span>
                  <Target size={16} className="text-[var(--color-text-muted)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.goal}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {item.strategy}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Goal Planner Tool Callout */}
        <div className="p-8 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] block mb-1">
              Reverse Engineer Your Target
            </span>
            <h4 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Calculate the Monthly SIP Needed For Your Next Goal
            </h4>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Enter target corpus and years to receive an exact monthly SIP calculation.
            </p>
          </div>
          <Link
            href="/tools/goal-planner"
            className="px-6 py-3 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl shrink-0 transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <Calculator size={14} />
            <span>Open Goal Planner</span>
          </Link>
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
              Milestone Consultation
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Structure Your Milestones With Panchanan Kumar
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Connect to map your family's upcoming financial priorities to appropriate fund categories.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Consult on Goals</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks.
            Read all scheme related documents carefully before investing. FINREV SOLUTIONS is an AMFI-registered
            Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
