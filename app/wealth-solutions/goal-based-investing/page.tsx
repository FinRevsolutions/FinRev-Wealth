import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, CheckCircle2, Calculator, Target, HelpCircle, TrendingUp, Layers, Check, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Goal-Based Investing — Aligning Portfolios to Life Milestones",
  "Structure mutual fund investments around exact life priorities: Home Down-Payment, Sabbaticals, and Family Milestones with FINREV SOLUTIONS (ARN-195797).",
  "/wealth-solutions/goal-based-investing"
);

const GOAL_PORTFOLIOS = [
  {
    goal: "Home Down-Payment Corpus",
    horizon: "4 Years Horizon",
    currentPos: "₹5,00,000 Saved",
    targetGoal: "₹30,00,000 Target",
    contribution: "₹41,500 / month SIP",
    progress: 17,
    strategy: "Dynamic Asset Allocation (Balanced Advantage) + Corporate Bond Funds. Transition to 100% Liquid fund 9 months before registration.",
  },
  {
    goal: "Child Higher Education Fund",
    horizon: "12 Years Horizon",
    currentPos: "₹3,50,000 Saved",
    targetGoal: "₹50,00,000 Target",
    contribution: "₹16,200 / month SIP",
    progress: 7,
    strategy: "75% Multi-Cap Equity + 25% High Grade Debt. Automated annual Step-Up SIP (+10%) to counter 10%+ educational inflation.",
  },
  {
    goal: "Sabbatical / Professional Transition",
    horizon: "5 Years Horizon",
    currentPos: "₹8,00,000 Saved",
    targetGoal: "₹25,00,000 Target",
    contribution: "₹19,800 / month SIP",
    progress: 32,
    strategy: "Multi-Asset Allocation (Equity + Fixed Income + Gold Hedge) to provide buffer against sudden market drawdowns before career pause.",
  },
  {
    goal: "Long-Term Financial Independence",
    horizon: "20 Years Horizon",
    currentPos: "₹15,00,000 Saved",
    targetGoal: "₹2,50,00,000 Target",
    contribution: "₹28,500 / month SIP",
    progress: 6,
    strategy: "Aggressive Equity Allocation (Large + Mid + Flexi Cap). Focus on continuous compounding across multiple market cycles.",
  },
];

const GLIDE_PATH_STAGES = [
  {
    stage: "Stage 01: Capital Acceleration",
    timeRemaining: "10+ Years to Goal",
    allocation: "80% Equity / 20% Debt",
    focus: "Maximize compounding potential. Interim bear markets are actively beneficial via monthly SIP rupee-cost averaging.",
  },
  {
    stage: "Stage 02: Milestone Consolidation",
    timeRemaining: "4 to 7 Years to Goal",
    allocation: "60% Equity / 40% Debt",
    focus: "Introduce Balanced Advantage and high-quality short duration debt to stabilize the accumulated corpus value.",
  },
  {
    stage: "Stage 03: Systematic De-Risking",
    timeRemaining: "2 to 3 Years to Goal",
    allocation: "30% Equity / 70% Debt",
    focus: "Initiate Systematic Transfer Plans (STP) from equity schemes to liquid debt funds to lock in accumulated profits.",
  },
  {
    stage: "Stage 04: Capital Preservation",
    timeRemaining: "Final 12 Months",
    allocation: "100% Liquid / Overnight Debt",
    focus: "Zero equity market exposure. Required milestone funds are insulated in capital-protecting cash equivalents ready for deployment.",
  },
];

const FAQS = [
  {
    q: "Why is goal-based investing superior to arbitrary return-chasing?",
    a: "Investing without a target goal leaves your portfolio vulnerable to emotional market timing and sudden liquidation at market bottoms. When linked to an exact milestone date and figure, you establish a disciplined risk budget and an automated de-risking glide path that protects your capital as the deadline approaches.",
  },
  {
    q: "How does the asset allocation glide-path function?",
    a: "A glide-path automatically adjusts the equity-to-debt ratio as your time horizon shrinks. When your goal is a decade away, volatility is your ally and equity is maximized. In the final two years, equity gains are methodically shifted into low-risk liquid debt to shield the corpus from unexpected market corrections.",
  },
  {
    q: "Can multiple life goals be managed under one ARN-195797 account?",
    a: "Yes. In accordance with AMFI and RTA architecture, mutual fund folios can be segregated and mapped to distinct life goals (e.g. Folio A for Home, Folio B for Child Education) allowing independent tracking, distinct risk profiles, and bespoke asset allocations.",
  },
];

export default function GoalBasedInvestingPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/wealth-solutions" className="hover:text-[var(--color-text-primary)] transition-colors">Wealth Solutions</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Goal-Based Investing</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <Compass size={13} className="text-[var(--color-secondary)]" />
            <span>Milestone-Driven Asset Allocation</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Goal-Based Investment Architecture
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Eliminate arbitrary investment guesswork. We map every rupee of surplus capital to an exact life milestone,
            time horizon, and automated risk-budgeting glide path.
          </p>
        </div>

        {/* GOAL PLANNING VISUALIZATION: Current Position, Goal, Horizon, Contribution, Progress */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Goal Mapping Workbench</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Four Representative Milestone Blueprints
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">Current Position → Horizon → Target</span>
          </div>

          <div className="space-y-6">
            {GOAL_PORTFOLIOS.map((item) => (
              <div key={item.goal} className="border border-[var(--color-border-subtle)] rounded-[4px] p-5 bg-[var(--color-surface-low)]">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-secondary)] font-semibold mb-1">
                      <Target size={14} />
                      <span>{item.horizon}</span>
                    </div>
                    <h3 className="text-base font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                      {item.goal}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="bg-white p-2.5 rounded-[2px] border border-[var(--color-border-subtle)]">
                      <span className="text-[10px] text-[var(--color-text-muted)] block">Current Position</span>
                      <span className="font-mono font-semibold text-[var(--color-text-primary)]">{item.currentPos}</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-[2px] border border-[var(--color-border-subtle)]">
                      <span className="text-[10px] text-[var(--color-text-muted)] block">Target Goal</span>
                      <span className="font-mono font-semibold text-[var(--color-primary)]">{item.targetGoal}</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-[2px] border border-[var(--color-border-subtle)] col-span-2 sm:col-span-1">
                      <span className="text-[10px] text-[var(--color-text-muted)] block">Required SIP</span>
                      <span className="font-mono font-bold text-[var(--color-secondary)]">{item.contribution}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5 mb-3">
                  <div className="flex justify-between text-[11px] font-mono text-[var(--color-text-muted)]">
                    <span>Progress to Target: {item.progress}%</span>
                    <span>Remaining Gap: {100 - item.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-[2px] overflow-hidden">
                    <div className="h-full bg-[var(--color-secondary)]" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pt-2 border-t border-[var(--color-border-subtle)]">
                  <strong className="text-[var(--color-text-primary)]">Asset Allocation Strategy:</strong> {item.strategy}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* THE GLIDE-PATH ARCHITECTURE */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Risk Budgeting</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The FINREV Milestone Glide-Path Strategy
            </h2>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Automated de-risking: Portfolios systematically transition from high-growth equity to capital preservation as the goal deadline approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {GLIDE_PATH_STAGES.map((s) => (
              <div key={s.stage} className="border border-[var(--color-border-subtle)] rounded-[4px] p-4 bg-[var(--color-surface-low)] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[var(--color-secondary)] block mb-1">
                    {s.timeRemaining}
                  </span>
                  <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2">
                    {s.stage}
                  </h3>
                  <div className="font-mono text-xs font-semibold text-[var(--color-primary)] bg-white p-2 rounded-[2px] border border-[var(--color-border-subtle)] mb-3">
                    {s.allocation}
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {s.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Goal-Based Investing
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
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Consultative Planning</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Map Your Next Financial Milestone
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Model required contributions and risk-calibrated glide paths with Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/tools/goal-planner"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[var(--color-border-subtle)] text-xs font-semibold text-[var(--color-text-primary)] rounded-[4px] hover:border-[var(--color-primary)] transition-colors"
            >
              <Calculator size={14} />
              <span>Launch Goal Planner</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Schedule Milestone Review</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing. Goal planning simulations are illustrative and do not guarantee the achievement of specific financial targets. FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
