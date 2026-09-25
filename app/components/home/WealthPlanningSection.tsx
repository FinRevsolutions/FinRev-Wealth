import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Target, CalendarClock, GraduationCap, TrendingUp, Search } from "lucide-react";

const WEALTH_SOLUTIONS = [
  {
    icon: Target,
    title: "Goal-Based Investing",
    subtitle: "Reverse-Engineered Capital Roadmaps",
    desc: "Targeted portfolios constructed backward from concrete life milestones — real estate acquisition, emergency liquidity, and family goals.",
    href: "/wealth-solutions/goal-based-investing",
  },
  {
    icon: CalendarClock,
    title: "Retirement Planning",
    subtitle: "Inflation-Adjusted Corpus Architecture",
    desc: "Multi-decade compounding strategies designed to fund post-career lifestyle and healthcare longevity with zero capital depletion.",
    href: "/wealth-solutions/retirement-planning",
  },
  {
    icon: GraduationCap,
    title: "Child Education Planning",
    subtitle: "Horizon-Based Inflation Shield",
    desc: "Dedicated education funding mandates accounting for 8–10% domestic and global academic cost inflation.",
    href: "/wealth-solutions/child-education",
  },
  {
    icon: TrendingUp,
    title: "Wealth Creation",
    subtitle: "Generational Compounding",
    desc: "Strategic equity and specialized asset allocation structured to compound capital exponentially over 15+ year cycles.",
    href: "/wealth-solutions/wealth-creation",
  },
  {
    icon: Search,
    title: "Portfolio Diagnostic Review",
    subtitle: "Consolidated CAS Health Check",
    desc: "Objective audit of your existing mutual fund folios, scheme overlap, expense ratios, and asset allocation deviations.",
    href: "/wealth-solutions/portfolio-review",
  },
];

export function WealthPlanningSection() {
  return (
    <section
      className="py-16 md:py-24 lg:py-28 bg-[var(--color-surface-canvas)] border-b border-[var(--color-border-subtle)]"
      aria-label="Wealth Planning Architecture"
      id="wealth-planning"
    >
      <div className="container-page">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
              MILESTONE-DRIVEN ARCHITECTURE
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Align Capital with Life Milestones.
          </h2>

          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed font-normal">
            Every invested rupee must serve a defined purpose. We reverse-calculate your wealth requirements against realistic inflation and asset duration rather than chasing short-term market noise.
          </p>
        </div>

        {/* Editorial Split Layout: Left 5 cols (Visual & Life-Stage Timeline), Right 7 cols (5 Solutions List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Visual Plate & Life-Stage Progression (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] rounded-[4px] overflow-hidden border border-[var(--color-border-strong)] bg-slate-900 shadow-sm">
              <Image
                src="/images/hero-wealth-meeting.jpg"
                alt="Institutional wealth planning consultation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#071A2A] via-[#071A2A]/80 to-transparent p-4 pt-10 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-finrev-gold)] block">
                  Planning Standard
                </span>
                <span className="text-xs font-semibold block mt-0.5">
                  Reverse-Calculated Against 7%–10% Realistic Inflation
                </span>
              </div>
            </div>

            {/* Life-Stage Progression Rail */}
            <div className="bg-white border border-[var(--color-border-strong)] p-5 rounded-[4px]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)] block mb-3">
                Lifecycle Glidepath
              </span>

              <div className="flex items-center justify-between text-xs font-mono font-bold text-[var(--color-primary)] border-b border-[var(--color-border-subtle)] pb-3">
                <span>START</span>
                <span className="text-slate-300">→</span>
                <span>BUILD</span>
                <span className="text-slate-300">→</span>
                <span>PROTECT</span>
                <span className="text-slate-300">→</span>
                <span>RETIRE</span>
              </div>

              <p className="text-xs text-[var(--color-text-secondary)] mt-3 leading-relaxed">
                As horizons contract, we taper risk systematically from high-equity compounding into high-quality capital defense so market volatility never compromises targeted milestone cashouts.
              </p>
            </div>
          </div>

          {/* Right Column: 5 Wealth Planning Solutions (7 cols, Editorial Rows with Rules) */}
          <div className="lg:col-span-7 bg-white border border-[var(--color-border-strong)] rounded-[4px] p-6 sm:p-8 divide-y divide-[var(--color-border-subtle)]">
            {WEALTH_SOLUTIONS.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <div key={s.title} className={`py-4 sm:py-5 group ${idx === 0 ? "pt-0" : ""}`}>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-[3px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-secondary)] shrink-0">
                        <IconComp size={14} />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors leading-tight">
                          {s.title}
                        </h3>
                        <span className="text-[11px] font-mono text-[var(--color-text-muted)]">
                          {s.subtitle}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0 group/link mt-1"
                    >
                      <span className="hidden sm:inline">Explore</span>
                      <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed font-normal pl-10 mt-1">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
