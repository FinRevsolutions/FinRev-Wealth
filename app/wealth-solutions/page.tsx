import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, GraduationCap, Home, Clock, Activity, Target, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Wealth Solutions & Milestone Planning — Goal-Based Portfolios",
  "Milestone-mapped financial planning from FINREV SOLUTIONS: Goal-Based Investing, Retirement Freedom, Child Higher Education, Wealth Creation, and Portfolio Diagnostic Reviews.",
  "/wealth-solutions"
);

const SOLUTIONS = [
  {
    icon: Compass,
    title: "Goal-Based Investing",
    horizon: "3 to 15 Years",
    tagline: "Milestone-Driven Asset Allocation",
    desc: "Connect every invested rupee to an exact life objective — home down-payment, sabbatical fund, marriage, or family security.",
    href: "/wealth-solutions/goal-based-investing",
  },
  {
    icon: Clock,
    title: "Retirement Planning & SWP",
    horizon: "15 to 30 Years",
    tagline: "Financial Independence Architecture",
    desc: "Build an inflation-hedged retirement corpus and implement tax-efficient Systematic Withdrawal Plans (SWP) for lifetime monthly income.",
    href: "/wealth-solutions/retirement-planning",
  },
  {
    icon: GraduationCap,
    title: "Child Higher Education Planning",
    horizon: "10 to 18 Years",
    tagline: "Higher Education Inflation Defense",
    desc: "Targeted compounding strategies engineered to beat 10%+ annual higher education cost increases for Indian and foreign universities.",
    href: "/wealth-solutions/child-education",
  },
  {
    icon: Target,
    title: "Long-Term Wealth Creation",
    horizon: "10+ Years",
    tagline: "Generational Multi-Cap Compounding",
    desc: "High-equity multi-cycle compounding strategies designed to capture the structural growth of India's formalizing economy.",
    href: "/wealth-solutions/wealth-creation",
  },
  {
    icon: Activity,
    title: "Portfolio Health Check & Review",
    horizon: "Immediate Audit",
    tagline: "Diagnostic Scheme Optimization",
    desc: "Audit existing mutual fund portfolios to identify scheme overlap, high expense ratios, and historical benchmark lag.",
    href: "/wealth-solutions/portfolio-review",
  },
];

export default function WealthSolutionsHubPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Wealth Solutions</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <SectionLabel>Pillar 02: Plan</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Milestone-Driven Wealth Solutions
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            True financial success is not about chasing the highest return last month. It is about having the exact
            required capital available on the exact date your life milestones arrive.
          </p>
        </div>

        {/* Life-Stage Wealth Architecture Timeline */}
        <div className="bg-white rounded-2xl p-7 md:p-10 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="max-w-2xl mb-8">
            <SectionLabel>Milestone Lifecycle</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mt-1.5" style={{ fontFamily: "var(--font-heading)" }}>
              The FINREV Life-Stage Wealth Framework
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">
              Your investment asset allocation should evolve dynamically as your family responsibilities and horizons advance.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                stage: "01",
                phase: "EARLY CAREER & FOUNDATION",
                age: "Age 22 – 32",
                tagline: "High Risk Tolerance • Multi-Decade Horizon",
                description:
                  "Build a 6-month liquid emergency reserve. Deploy remaining investable surplus aggressively into diversified equity SIPs to harness maximum compound runway.",
                allocation: "80% Equity • 20% Liquid / Debt Buffer",
                recommended: "Automated Monthly SIP • ELSS Tax Saving",
                href: "/wealth-solutions/wealth-creation",
              },
              {
                stage: "02",
                phase: "WEALTH ACCUMULATION & FIRST HOME",
                age: "Age 30 – 42",
                tagline: "Surplus Acceleration • Capital Expansion",
                description:
                  "Scale up SIP contributions with annual appraisal step-ups. Partition savings into distinct buckets for home down-payment, vehicle acquisition, and long-term corpus.",
                allocation: "70% Equity • 25% Balanced/Hybrid • 5% Liquid",
                recommended: "Step-Up SIP • Goal-Based Portfolios",
                href: "/wealth-solutions/goal-based-investing",
              },
              {
                stage: "03",
                phase: "FAMILY RESPONSIBILITIES & CHILD EDUCATION",
                age: "Age 38 – 50",
                tagline: "Peak Commitments • High Inflation Defense",
                description:
                  "Higher education inflation runs at 10%–12% per annum in India. Construct targeted equity portfolios that gradually shift into liquid debt 2 years before university matriculation.",
                allocation: "60% Equity • 30% Debt/Fixed Income • 10% Gold/Hybrid",
                recommended: "Child Higher Education Fund • Target Maturity Funds",
                href: "/wealth-solutions/child-education",
              },
              {
                stage: "04",
                phase: "PRE-RETIREMENT CONSOLIDATION",
                age: "Age 48 – 58",
                tagline: "Capital Preservation • Glidepath De-Risking",
                description:
                  "Systematically migrate high-beta equity gains into high-grade corporate bonds and target maturity debt to insulate the built retirement nest egg from untimely market crashes.",
                allocation: "45% Equity • 45% Debt & Bonds • 10% Liquid",
                recommended: "Systematic Transfer Plans (STP) • Debt Funds",
                href: "/wealth-solutions/retirement-planning",
              },
              {
                stage: "05",
                phase: "RETIREMENT FREEDOM & MONTHLY CASHFLOW",
                age: "Age 58+",
                tagline: "Inflation-Proof Drawdowns • Capital Longevity",
                description:
                  "Implement Systematic Withdrawal Plans (SWP) in hybrid and debt schemes to generate predictable monthly cashflows that incur lower effective tax than traditional fixed deposits.",
                allocation: "30% Large-Cap Equity (Inflation Hedge) • 60% Debt • 10% Liquid Cash",
                recommended: "Systematic Withdrawal Plan (SWP) • Corporate Bonds",
                href: "/wealth-solutions/retirement-planning",
              },
              {
                stage: "06",
                phase: "GENERATIONAL LEGACY & WEALTH TRANSFER",
                age: "Multi-Decade",
                tagline: "Family Estate Continuity • Nomination Governance",
                description:
                  "Ensure seamless transition of family wealth through comprehensive mutual fund nomination audits, joint holding structures, and clear wealth transmission architecture.",
                allocation: "Preserved Portfolio Core • Institutional Mandates",
                recommended: "Portfolio Health Audit • HNI Custody Mandates",
                href: "/wealth-solutions/portfolio-review",
              },
            ].map((item) => (
              <div
                key={item.stage}
                className="p-6 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] hover:border-[var(--color-primary)] transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="lg:max-w-xl">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="font-mono text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-border-strong)]">
                      STAGE {item.stage}
                    </span>
                    <span className="text-xs font-bold text-[var(--color-text-muted)] font-mono">{item.age}</span>
                    <span className="text-[11px] font-semibold text-[var(--color-secondary)] hidden sm:inline">• {item.tagline}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.phase}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--color-text-secondary)]">
                    <span className="font-medium"><strong>Asset Mix:</strong> {item.allocation}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-[var(--color-border-subtle)]">
                  <span className="text-[11px] text-[var(--color-text-muted)] font-medium">
                    {item.recommended}
                  </span>
                  <Link
                    href={item.href}
                    className="py-2.5 px-4 rounded-xl bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-primary)] text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] inline-flex items-center gap-2 transition-colors shadow-xs"
                  >
                    <span>Explore Strategy</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary-fixed)] block mb-1">
              Complimentary Audit
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Request a Free Portfolio Review
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Upload or share your Consolidated Account Statement (CAS) for an unbiased diagnostic analysis
              conducted directly by Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <Link
            href="/wealth-solutions/portfolio-review"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Start Portfolio Review</span>
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
