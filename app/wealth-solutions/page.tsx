import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, GraduationCap, Home, Clock, Activity, Target, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Wealth Solutions & Milestone Planning — Goal-Based Portfolios",
  "Milestone-mapped financial planning from FINREV SOLUTIONS: Goal-Based Investing, Retirement Freedom, Child Higher Education, Wealth Creation, and Portfolio Diagnostic Reviews.",
  "/wealth-solutions"
);

const SOLUTIONS = [
  {
    icon: Compass,
    title: "Goal-Based Investing",
    horizon: "3 to 15 Years Horizon",
    tagline: "Milestone-Driven Asset Allocation",
    desc: "Connect every invested rupee to an exact life milestone—home purchase, sabbatical fund, marriage, or family security.",
    href: "/wealth-solutions/goal-based-investing",
  },
  {
    icon: Clock,
    title: "Retirement Planning & SWP",
    horizon: "15 to 30 Years Horizon",
    tagline: "Financial Independence Architecture",
    desc: "Build an inflation-hedged retirement corpus and implement tax-aware Systematic Withdrawal Plans (SWP) for lifetime monthly income.",
    href: "/wealth-solutions/retirement-planning",
  },
  {
    icon: GraduationCap,
    title: "Child Higher Education Planning",
    horizon: "10 to 18 Years Horizon",
    tagline: "Higher Education Inflation Defense",
    desc: "Targeted compounding strategies engineered to beat 10%+ annual higher education cost escalation for Indian and foreign universities.",
    href: "/wealth-solutions/child-education",
  },
  {
    icon: Target,
    title: "Long-Term Wealth Creation",
    horizon: "10+ Years Horizon",
    tagline: "Generational Multi-Cap Compounding",
    desc: "High-equity multi-cycle compounding strategies designed to capture the structural growth of India's formalizing economy.",
    href: "/wealth-solutions/wealth-creation",
  },
  {
    icon: Activity,
    title: "Portfolio Health Check & Review",
    horizon: "Immediate Diagnostic Audit",
    tagline: "Forensic Scheme Optimization",
    desc: "Audit existing mutual fund portfolios to identify scheme overlap, high expense ratios, and persistent benchmark lag.",
    href: "/wealth-solutions/portfolio-review",
  },
];

const LIFE_STAGES = [
  {
    stage: "Stage 01",
    phase: "Early Career & Foundation",
    age: "Age 22 to 32",
    tagline: "High Risk Tolerance • Multi-Decade Horizon",
    description: "Build a 6-month liquid emergency reserve. Deploy remaining surplus aggressively into diversified equity SIPs to harness maximum compound runway.",
    allocation: "80% Equity • 20% Liquid / Debt Buffer",
    href: "/wealth-solutions/wealth-creation",
  },
  {
    stage: "Stage 02",
    phase: "Wealth Accumulation & First Home",
    age: "Age 30 to 42",
    tagline: "Surplus Acceleration • Capital Expansion",
    description: "Scale up SIP contributions with annual appraisal step-ups. Partition savings into distinct buckets for home down-payment and long-term corpus.",
    allocation: "70% Equity • 25% Balanced/Hybrid • 5% Liquid",
    href: "/wealth-solutions/goal-based-investing",
  },
  {
    stage: "Stage 03",
    phase: "Family Milestones & Child Education",
    age: "Age 38 to 50",
    tagline: "Peak Commitments • High Inflation Defense",
    description: "Higher education inflation runs at 10%+ in India. Construct targeted equity portfolios that gradually shift into liquid debt 2 years before college.",
    allocation: "60% Equity • 30% Debt/Fixed Income • 10% Gold/Hybrid",
    href: "/wealth-solutions/child-education",
  },
  {
    stage: "Stage 04",
    phase: "Pre-Retirement Consolidation",
    age: "Age 48 to 58",
    tagline: "Capital Preservation • Glidepath De-Risking",
    description: "Systematically migrate equity gains into high-grade corporate bonds and target maturity debt to insulate the retirement corpus from market crashes.",
    allocation: "45% Equity • 45% Debt & Bonds • 10% Liquid",
    href: "/wealth-solutions/retirement-planning",
  },
  {
    stage: "Stage 05",
    phase: "Retirement Distribution & Cashflow",
    age: "Age 58+",
    tagline: "Inflation-Proof Drawdowns • Capital Longevity",
    description: "Implement 3-Bucket Systematic Withdrawal Plans (SWP) to generate predictable monthly cashflows that incur lower effective tax than bank fixed deposits.",
    allocation: "30% Large-Cap Equity (Inflation Hedge) • 60% Debt • 10% Liquid Cash",
    href: "/wealth-solutions/retirement-planning",
  },
  {
    stage: "Stage 06",
    phase: "Generational Legacy & Succession",
    age: "Multi-Decade",
    tagline: "Family Estate Continuity • Nomination Governance",
    description: "Ensure seamless transmission of family wealth through comprehensive mutual fund nomination audits, joint holding structures, and clear succession planning.",
    allocation: "Preserved Portfolio Core • Institutional Mandates",
    href: "/wealth-solutions/portfolio-review",
  },
];

export default function WealthSolutionsHubPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Wealth Solutions</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <Compass size={13} className="text-[var(--color-secondary)]" />
            <span>Consultative Planning Experience</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Milestone-Driven Wealth Solutions
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            True financial clarity is not about chasing speculative returns. It is having the exact required capital
            available on the exact date your family milestones arrive.
          </p>
        </div>

        {/* SOLUTIONS OVERVIEW: Structured Rows (Not repetitive cards) */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Milestone Matrix</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Core Advisory Planning Disciplines
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">5 Specialized Practice Areas</span>
          </div>

          <div className="space-y-6 divide-y divide-[var(--color-border-subtle)]">
            {SOLUTIONS.map((sol, idx) => {
              const IconComp = sol.icon;
              return (
                <div key={sol.title} className={idx > 0 ? "pt-6" : ""}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-secondary)] font-semibold mb-1">
                        <IconComp size={14} />
                        <span>{sol.horizon}</span>
                      </div>
                      <h3 className="text-base font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                        {sol.title}
                      </h3>
                      <span className="text-xs text-[var(--color-text-muted)]">{sol.tagline}</span>
                    </div>
                    <div className="md:w-2/3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
                        {sol.desc}
                      </p>
                      <Link
                        href={sol.href}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] shrink-0"
                      >
                        <span>Explore Solution</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* LIFE-STAGE WEALTH ARCHITECTURE TIMELINE */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Lifecycle Evolution</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The FINREV Life-Stage Wealth Framework
            </h2>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Your investment asset allocation should evolve dynamically as family responsibilities and horizons advance.
            </p>
          </div>

          <div className="space-y-4">
            {LIFE_STAGES.map((item) => (
              <div
                key={item.stage}
                className="border border-[var(--color-border-subtle)] rounded-[4px] p-4 bg-[var(--color-surface-low)] flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="lg:max-w-xl">
                  <div className="flex items-center gap-2 text-xs font-mono mb-1">
                    <span className="font-bold text-[var(--color-secondary)]">{item.stage}</span>
                    <span className="text-[var(--color-text-muted)]">• {item.age}</span>
                    <span className="text-[11px] text-[var(--color-primary)] font-semibold hidden sm:inline">• {item.tagline}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-1">
                    {item.phase}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <div className="text-[11px] font-mono text-[var(--color-primary)] font-medium">
                    Asset Mix: {item.allocation}
                  </div>
                </div>

                <div className="shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[var(--color-border-subtle)]">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-white border border-[var(--color-border-subtle)] rounded-[4px] text-[var(--color-text-primary)] hover:border-[var(--color-primary)] transition-colors"
                  >
                    <span>View Strategy</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-[var(--color-surface-container-highest)] border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Milestone Consultation</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Align Your Capital to Your Life Milestones
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Connect with Panchanan Kumar (ARN-195797) to structure your personalized milestone roadmap.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/wealth-solutions/portfolio-review"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[var(--color-border-subtle)] text-xs font-semibold text-[var(--color-text-primary)] rounded-[4px] hover:border-[var(--color-primary)] transition-colors"
            >
              <span>Request Folio Review</span>
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
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing. Milestone planning frameworks are illustrative and do not guarantee future returns. FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
