import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const LEDGER_PILLARS = [
  {
    num: "01",
    tag: "INVEST",
    title: "Capital Allocation & Systematic Compounding",
    summary:
      "Disciplined mutual fund portfolios, automated monthly SIP mandates, lumpsum deployments, and fixed income securities aligned strictly to your risk capacity and time horizon.",
    allocations: [
      { name: "Mutual Funds", href: "/investments/mutual-funds" },
      { name: "Systematic Investment Plans (SIP)", href: "/investments/sip" },
      { name: "Lumpsum & STP Staging", href: "/investments/lumpsum" },
      { name: "Bonds & Fixed Income", href: "/investments/bonds" },
    ],
    primaryLink: { text: "Explore Investment Solutions", href: "/investments" },
    holdingNote: "Direct AMC folios with individual investor ownership",
  },
  {
    num: "02",
    tag: "PLAN",
    title: "Milestone-Driven Wealth Roadmaps",
    summary:
      "Map every invested rupee to concrete personal milestones — children's higher education, residential asset acquisition, and post-retirement independence. Modeled against long-term inflation and realistic returns.",
    allocations: [
      { name: "Retirement Corpus Modeling", href: "/wealth-solutions/retirement-planning" },
      { name: "Children's Higher Education", href: "/wealth-solutions/child-education" },
      { name: "Goal-Based Investing", href: "/wealth-solutions/goal-based-investing" },
      { name: "Portfolio Diagnostic Review", href: "/wealth-solutions/portfolio-review" },
    ],
    primaryLink: { text: "Explore Wealth Planning", href: "/wealth-solutions" },
    holdingNote: "Goal-aligned timelines and asset allocation targets",
  },
  {
    num: "03",
    tag: "PROTECT",
    title: "Risk Defense & Capital Insulation",
    summary:
      "Comprehensive pure-risk term life protection and health insurance buffers designed to insulate your family and ensure unplanned life emergencies never force premature liquidation of compounding assets.",
    allocations: [
      { name: "Pure Term Life Cover", href: "/protection/term-insurance" },
      { name: "Comprehensive Health Buffers", href: "/protection/health-insurance" },
      { name: "Life Insurance Solutions", href: "/protection/life-insurance" },
      { name: "Emergency Liquidity Strategy", href: "/protection" },
    ],
    primaryLink: { text: "Explore Protection Solutions", href: "/protection" },
    holdingNote: "Capital protection buffer prior to taking equity risk",
  },
  {
    num: "04",
    tag: "GROW",
    title: "Specialized Portfolio Allocation",
    summary:
      "Curated access to professional Portfolio Management Services (PMS), regulated Alternative Investment Funds (AIF), and pre-IPO unlisted opportunities for qualified investors seeking institutional-grade management.",
    allocations: [
      { name: "Portfolio Management (PMS)", href: "/investments/pms" },
      { name: "Alternative Investment Funds (AIF)", href: "/investments/aif" },
      { name: "Unlisted Equities & Pre-IPO", href: "/investments/unlisted-pre-ipo" },
      { name: "Strategic Wealth Creation", href: "/wealth-solutions/wealth-creation" },
    ],
    primaryLink: { text: "Explore Specialized Solutions", href: "/investments/pms" },
    holdingNote: "For eligible portfolios seeking specialized strategies",
  },
];

export function PillarsSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[var(--color-border-subtle)]" aria-label="Core Financial Pillars">
      <Container>
        {/* Section Header — Editorial & Authoritative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-4 border-b border-[var(--color-border-strong)] gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                Financial Architecture
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.15]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Organize Every Dimension of Your Wealth.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
              We structure your family balance sheet through an interconnected four-part ledger — building savings, planning for milestones, defending downside risks, and compounding capital over generations.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <span className="text-[11px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider block">
              Execution Model
            </span>
            <span className="text-xs font-semibold text-[var(--color-primary)]">
              Direct AMFI Distribution · ARN-195797
            </span>
          </div>
        </div>

        {/* Editorial Financial Ledger (No Cards — Pure Structured Rows) */}
        <div className="divide-y divide-[var(--color-border-subtle)]">
          {LEDGER_PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group"
            >
              {/* Column 1: Moniker & Index (3 cols) */}
              <div className="lg:col-span-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[var(--color-secondary)]">
                    {pillar.num}
                  </span>
                  <span
                    className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--color-primary)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {pillar.tag}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mt-2 font-medium">
                  {pillar.holdingNote}
                </p>
              </div>

              {/* Column 2: Strategic Narrative (5 cols) */}
              <div className="lg:col-span-5">
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-primary)] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {pillar.summary}
                </p>
                <div className="mt-4">
                  <Link
                    href={pillar.primaryLink.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <span>{pillar.primaryLink.text}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Column 3: Allocation Scope (4 cols) */}
              <div className="lg:col-span-4 bg-[var(--color-surface-canvas)] p-4 sm:p-5 rounded-[6px] border border-[var(--color-border-subtle)]">
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-2.5">
                  Allocation Coverage
                </p>
                <ul className="space-y-2">
                  {pillar.allocations.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between text-xs font-medium text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors group/link"
                      >
                        <span>{item.name}</span>
                        <ArrowRight size={12} className="text-[var(--color-text-muted)] group-hover/link:text-[var(--color-secondary)] group-hover/link:translate-x-0.5 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Ledger Bottom Summary Bar */}
        <div className="pt-6 mt-2 border-t border-[var(--color-border-strong)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
          <span>Objective Asset Allocation · Risk-Mapped Execution · Regular Folio Review</span>
          <Link
            href="/about"
            className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-semibold inline-flex items-center gap-1"
          >
            <span>Learn About the FINREV Advisory Practice</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
