"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Home,
  GraduationCap,
  TrendingUp,
  Sunset,
  Crown,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface LifeStage {
  id: string;
  step: string;
  title: string;
  ageSpan: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  headline: string;
  description: string;
  corePriorities: string[];
  allocationGuidance: string;
  suggestedAction: string;
  actionHref: string;
}

const LIFE_STAGES: LifeStage[] = [
  {
    id: "early-career",
    step: "Stage 01",
    title: "Early Career",
    ageSpan: "Age 22 – 30",
    icon: Sparkles,
    headline: "Habit Formation & Compounding Run-Rate",
    description:
      "Establishing emergency liquidity reserves, automating monthly SIPs, and leveraging a multi-decade time horizon for aggressive equity compounding.",
    corePriorities: [
      "Automate monthly SIPs on salary day",
      "Build 6-month emergency reserve in Liquid Funds",
      "Secure baseline pure Term Life Insurance early",
    ],
    allocationGuidance: "High growth tilt: 75-85% Diversified Equity, 15-25% Debt/Liquid buffer.",
    suggestedAction: "Start Goal-Based Investing",
    actionHref: "/wealth-solutions/goal-based-investing",
  },
  {
    id: "family-home",
    step: "Stage 02",
    title: "Family & Home",
    ageSpan: "Age 30 – 38",
    icon: Home,
    headline: "Asset Acquisition & Family Protection",
    description:
      "Balancing real estate down payment targets with family lifestyle expansions without accumulating excessive uncollateralized debts.",
    corePriorities: [
      "Accumulate 25-30% home down payment + stamp duty",
      "Comprehensive Family Floater Health Cover + Top-Up",
      "Maintain strict Debt-to-Income (DTI) under 35%",
    ],
    allocationGuidance: "Balanced growth: 60-70% Equity, 30-40% Debt & Fixed Income.",
    suggestedAction: "Model Dream Home Goal",
    actionHref: "/tools/dream-home-calculator",
  },
  {
    id: "child-education",
    step: "Stage 03",
    title: "Child Education",
    ageSpan: "Age 35 – 48",
    icon: GraduationCap,
    headline: "Defeating Academic Inflation",
    description:
      "Tuition for premier domestic and global institutions compounds at ~10% p.a. A dedicated glide-path ensures funds mature on time without disturbing retirement capital.",
    corePriorities: [
      "Map distinct timeline to college admission age (18)",
      "Factor 10% educational inflation realistically",
      "Glide-path: Derisk to debt 3 years before college",
    ],
    allocationGuidance: "Goal-matched glidepath starting 80% Equity, tapering to 100% Debt near maturity.",
    suggestedAction: "Plan Child Education Fund",
    actionHref: "/wealth-solutions/child-education",
  },
  {
    id: "peak-earning",
    step: "Stage 04",
    title: "Peak Earning",
    ageSpan: "Age 45 – 55",
    icon: TrendingUp,
    headline: "Accelerated Wealth Multiplication",
    description:
      "Highest cash flow window. Maximize tax-efficient wealth accumulation, review underperforming portfolio holdings, and explore high-conviction alternative investments.",
    corePriorities: [
      "Step-up SIP contributions significantly with bonuses",
      "Consolidate multiple legacy folios into unified strategy",
      "Consider accredited PMS & Private Market allocations",
    ],
    allocationGuidance: "Strategic diversification: 55-65% Equity, 25-35% Fixed Income, 10% Gold/Alts.",
    suggestedAction: "Request Portfolio Health Diagnostic",
    actionHref: "/wealth-solutions/portfolio-review",
  },
  {
    id: "retirement",
    step: "Stage 05",
    title: "Retirement",
    ageSpan: "Age 58 – 70",
    icon: Sunset,
    headline: "Capital Longevity & Sustainable Cash Flow",
    description:
      "Transitioning from wealth accumulation to inflation-indexed distribution via Systematic Withdrawal Plans (SWP), preserving capital for a 25 to 35-year retirement span.",
    corePriorities: [
      "Construct 3-bucket retirement liquidity strategy",
      "Structure tax-smart monthly cash flows via SWP",
      "Protect against healthcare inflation with super top-ups",
    ],
    allocationGuidance: "Capital preservation: 30-40% Hybrid/Equity for inflation hedging, 60-70% High-Credit Debt.",
    suggestedAction: "Architect Retirement Plan",
    actionHref: "/wealth-solutions/retirement-planning",
  },
  {
    id: "legacy",
    step: "Stage 06",
    title: "Legacy & Autonomy",
    ageSpan: "Age 65+",
    icon: Crown,
    headline: "Inter-Generational Transmission",
    description:
      "Ensuring clean estate transmission, updating joint holdings and nominations, and funding philanthropic or multi-generational family endowments.",
    corePriorities: [
      "Audit all bank & mutual fund nominations and wills",
      "Consolidate holdings for seamless successor access",
      "Maintain perpetual financial independence without dependency",
    ],
    allocationGuidance: "Conservative wealth stewardship: Fixed income, sovereign debt, dividend-growth equities.",
    suggestedAction: "Explore Wealth Preservation",
    actionHref: "/wealth-solutions/wealth-creation",
  },
];

export function WealthPlanningSection() {
  const [activeStageId, setActiveStageId] = useState("family-home");
  const activeStage = LIFE_STAGES.find((s) => s.id === activeStageId) || LIFE_STAGES[1];
  const ActiveIcon = activeStage.icon;

  return (
    <section className="py-20 md:py-28 bg-[var(--color-surface-canvas)] border-t border-[var(--color-border-subtle)]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Milestone Architecture</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Life-Stage Wealth Framework
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] mt-2.5 leading-relaxed">
              We structure your asset allocation not around unpredictable market speculation, but around the
              exact life stages when you will require capital.
            </p>
          </div>
          <Link
            href="/wealth-solutions"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-secondary-700)] transition-colors"
          >
            <span>Explore All Wealth Solutions</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Life-Stage Horizontal Progression Track */}
        <div className="mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-[var(--color-border-subtle)]">
            {LIFE_STAGES.map((stage) => {
              const IconComponent = stage.icon;
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-[var(--color-primary)] text-white shadow-md scale-[1.02]"
                      : "bg-white text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-low)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-subtle)]"
                  }`}
                >
                  <IconComponent size={15} className={isActive ? "text-emerald-400" : "text-[var(--color-secondary)]"} />
                  <span>{stage.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-[var(--color-surface-canvas)] text-[var(--color-text-muted)]"}`}>
                    {stage.ageSpan}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Life-Stage Showcase Card */}
        <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card-hover)] p-7 md:p-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] border border-[var(--color-border-strong)] flex items-center justify-center">
                  <ActiveIcon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                      {activeStage.step}
                    </span>
                    <span className="text-xs font-bold text-[var(--color-text-muted)]">
                      • {activeStage.ageSpan}
                    </span>
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-extrabold text-[var(--color-text-primary)] mt-0.5"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {activeStage.headline}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {activeStage.description}
              </p>

              {/* Priority Action Checklist */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] block">
                  Core Strategic Priorities for this Life Stage:
                </span>
                {activeStage.corePriorities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--color-text-secondary)] font-medium">
                    <CheckCircle2 size={15} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Asset Allocation Guidance & CTA (5 Cols) */}
            <div className="lg:col-span-5 bg-[var(--color-surface-canvas)] p-6 rounded-2xl border border-[var(--color-border-subtle)] flex flex-col justify-between gap-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] block mb-1">
                  Illustrative Asset Allocation Concept
                </span>
                <p className="text-xs text-[var(--color-text-primary)] font-semibold leading-relaxed p-3 rounded-xl bg-white border border-[var(--color-border-subtle)] mb-4">
                  {activeStage.allocationGuidance}
                </p>
                <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed">
                  * Illustrative asset-allocation concept. Individual asset weightings depend on personalized cash-flow stability, existing liabilities, and validated risk capacity.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col gap-2">
                <Link
                  href={activeStage.actionHref}
                  className="w-full py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>{activeStage.suggestedAction}</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/wealth-solutions/portfolio-review"
                  className="w-full py-2.5 bg-white border border-[var(--color-border-strong)] text-[var(--color-text-primary)] text-xs font-bold rounded-xl text-center hover:bg-[var(--color-surface-low)] transition-colors"
                >
                  Schedule Life-Stage Advisory Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
