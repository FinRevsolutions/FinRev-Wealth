import Link from "next/link";
import { ArrowRight, TrendingUp, Target, ShieldCheck, Gem, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ECOSYSTEM_PILLARS = [
  {
    id: "invest",
    icon: TrendingUp,
    badge: "Pillar 01",
    name: "INVEST",
    tagline: "Core Wealth Compounding",
    headline: "Systematic Capital Growth Across Regulated Assets",
    description:
      "Disciplined mutual fund allocations, automated SIPs, strategic lumpsum deployment, and fixed income instruments calibrated to inflation and market cycles.",
    services: [
      { label: "Mutual Funds", href: "/investments/mutual-funds" },
      { label: "Systematic Investment Plans (SIP)", href: "/investments/sip" },
      { label: "Lumpsum Deployment & STP", href: "/investments/lumpsum" },
      { label: "Bonds & Government Securities", href: "/investments/bonds" },
    ],
    accentBorder: "border-l-4 border-l-[var(--color-primary)]",
    iconBg: "bg-[var(--color-primary)]",
    href: "/investments",
  },
  {
    id: "plan",
    icon: Target,
    badge: "Pillar 02",
    name: "PLAN",
    tagline: "Milestone-Driven Architecture",
    headline: "Aligning Every Rupee to Exact Life Horizons",
    description:
      "Mathematical modeling for real-life financial priorities — from acquiring your dream residence to inflation-proof child education and retirement independence.",
    services: [
      { label: "Goal-Based Investing", href: "/wealth-solutions/goal-based-investing" },
      { label: "Retirement & SWP Planning", href: "/wealth-solutions/retirement-planning" },
      { label: "Child Higher Education Fund", href: "/wealth-solutions/child-education" },
      { label: "Portfolio Health Check & Review", href: "/wealth-solutions/portfolio-review" },
    ],
    accentBorder: "border-l-4 border-l-[var(--color-secondary)]",
    iconBg: "bg-[var(--color-secondary)]",
    href: "/wealth-solutions",
  },
  {
    id: "protect",
    icon: ShieldCheck,
    badge: "Pillar 03",
    name: "PROTECT",
    tagline: "Capital & Life Defense",
    headline: "Shielding Your Built Wealth Against Uncertainties",
    description:
      "Comprehensive pure-risk term life cover, family health insurance shields against healthcare inflation, and general asset protection.",
    services: [
      { label: "Life Insurance Protection", href: "/protection/life-insurance" },
      { label: "Pure Risk Term Insurance", href: "/protection/term-insurance" },
      { label: "Health & Super Top-up Plans", href: "/protection/health-insurance" },
      { label: "General & Asset Insurance", href: "/protection/general-insurance" },
    ],
    accentBorder: "border-l-4 border-l-[var(--color-primary-600)]",
    iconBg: "bg-[var(--color-primary-600)]",
    href: "/protection",
  },
  {
    id: "explore",
    icon: Gem,
    badge: "Pillar 04",
    name: "EXPLORE",
    tagline: "Institutional & Alternative Strategies",
    headline: "Sophisticated Market Access for Qualified Portfolios",
    description:
      "Exclusive access to specialized Portfolio Management Services (PMS), Alternative Investment Funds (AIF), and Pre-IPO unlisted opportunities.",
    services: [
      { label: "Portfolio Management (PMS)", href: "/investments/pms" },
      { label: "Alternative Investment Funds (AIF)", href: "/investments/aif" },
      { label: "Unlisted & Pre-IPO Equity", href: "/investments/unlisted-pre-ipo" },
      { label: "Capital Advisory Services", href: "/wealth-solutions" },
    ],
    accentBorder: "border-l-4 border-l-[var(--color-finrev-gold)]",
    iconBg: "bg-[var(--color-primary)]",
    href: "/investments/pms",
  },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-20 md:py-28 bg-[var(--color-surface-canvas)]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Complete Institutional Spectrum</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The FINREV Financial Ecosystem
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
              We move far beyond standard mutual fund distribution. FINREV integrates wealth creation,
              risk mitigation, and private market opportunities into a single unified architecture.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[var(--color-border-subtle)] text-xs font-semibold text-[var(--color-text-primary)] shadow-sm">
            <Layers size={16} className="text-[var(--color-secondary)]" />
            <span>4 Pillars • 18+ Dedicated Solutions</span>
          </div>
        </div>

        {/* 4 Pillars Grid with Editorial Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ECOSYSTEM_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={[
                  "bg-white rounded-xl p-7 md:p-8 border border-[var(--color-border-strong)]",
                  "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all",
                  "flex flex-col justify-between",
                  pillar.accentBorder,
                ].join(" ")}
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${pillar.iconBg} text-white flex items-center justify-center`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] block">
                          {pillar.badge}
                        </span>
                        <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                          {pillar.name}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[var(--color-surface-canvas)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)]">
                      {pillar.tagline}
                    </span>
                  </div>

                  {/* Headline & Description */}
                  <h4
                    className="text-base font-bold text-[var(--color-text-primary)] mb-2.5 leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {pillar.headline}
                  </h4>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Service Links List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {pillar.services.map((srv) => (
                      <Link
                        key={srv.label}
                        href={srv.href}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--color-surface-canvas)] hover:bg-[var(--color-surface-low)] text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors group"
                      >
                        <span className="truncate">{srv.label}</span>
                        <ArrowRight size={12} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                  <span className="text-xs text-[var(--color-text-muted)] font-medium">
                    Explore complete {pillar.name.toLowerCase()} suite
                  </span>
                  <Link
                    href={pillar.href}
                    className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-secondary-700)] inline-flex items-center gap-1"
                  >
                    Learn More
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
