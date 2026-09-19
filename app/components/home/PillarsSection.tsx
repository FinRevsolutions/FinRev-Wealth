import Link from "next/link";
import { ArrowRight, TrendingUp, Target, Shield, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PillarsSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[var(--color-border-subtle)]">
      <Container>
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel>Structured Financial Framework</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Organize Every Stage of Your Wealth.
          </h2>
          <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-2xl">
            We connect wealth creation, real-life milestone planning, and risk defense into one coherent financial approach.
          </p>
        </div>

        {/* Asymmetric Layout: INVEST (7 cols) + PLAN / PROTECT / GROW (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* INVEST — dominant feature */}
          <div className="lg:col-span-7 bg-[var(--color-surface-canvas)] rounded-lg p-7 md:p-9 border border-[var(--color-border-strong)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <TrendingUp size={20} className="text-[var(--color-secondary)] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)]">
                    INVEST — Build Your Wealth
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Disciplined mutual fund allocations, automated SIP mandates, and fixed income instruments aligned to inflation and market cycles. All investments are held directly with respective fund houses in individual folios.
              </p>

              {/* Service list — clean text links, no sub-cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-[var(--color-border-subtle)]">
                {[
                  { label: "Mutual Funds", href: "/investments/mutual-funds" },
                  { label: "Systematic Investment Plans (SIP)", href: "/investments/sip" },
                  { label: "Lumpsum Deployment & STP", href: "/investments/lumpsum" },
                  { label: "Bonds & Fixed Income", href: "/investments/bonds" },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="flex items-center justify-between py-3 pr-2 border-b border-[var(--color-border-subtle)] text-sm text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors group"
                  >
                    <span>{s.label}</span>
                    <ArrowRight size={13} className="opacity-30 group-hover:opacity-100 shrink-0 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
              <span className="text-xs text-[var(--color-text-muted)]">Direct AMC folio holding</span>
              <Link
                href="/investments"
                className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] inline-flex items-center gap-1.5"
              >
                <span>Explore Investment Solutions</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right Column: PLAN / PROTECT / GROW */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* PLAN */}
            <div className="bg-white rounded-lg p-6 border border-[var(--color-border-strong)] flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <Target size={17} className="text-[var(--color-secondary)] shrink-0" />
                  <h4 className="text-base font-bold text-[var(--color-primary)]">
                    PLAN — Plan Around Your Goals
                  </h4>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Map every rupee to concrete life milestones — dream home, children's higher education, and retirement independence.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-[var(--color-border-subtle)]">
                <span className="text-[11px] text-[var(--color-text-muted)]">Goal-based roadmaps</span>
                <Link href="/wealth-solutions" className="text-xs font-bold text-[var(--color-secondary)] inline-flex items-center gap-1">
                  <span>Explore Planning</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* PROTECT */}
            <div className="bg-white rounded-lg p-6 border border-[var(--color-border-strong)] flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <Shield size={17} className="text-[var(--color-secondary)] shrink-0" />
                  <h4 className="text-base font-bold text-[var(--color-primary)]">
                    PROTECT — Protect What Matters
                  </h4>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Comprehensive pure-risk term life cover and health buffers to ensure life emergencies never force liquidation of your investments.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-[var(--color-border-subtle)]">
                <span className="text-[11px] text-[var(--color-text-muted)]">Pure risk & health buffers</span>
                <Link href="/protection" className="text-xs font-bold text-[var(--color-secondary)] inline-flex items-center gap-1">
                  <span>Explore Protection</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* GROW */}
            <div className="bg-white rounded-lg p-6 border border-[var(--color-border-strong)] flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <Sparkles size={17} className="text-[var(--color-finrev-gold)] shrink-0" />
                  <h4 className="text-base font-bold text-[var(--color-primary)]">
                    GROW — Build for the Long Term
                  </h4>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Sophisticated portfolio management and alternative investment frameworks for eligible portfolios seeking specialized allocation.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-[var(--color-border-subtle)]">
                <span className="text-[11px] text-[var(--color-text-muted)]">Portfolio Management</span>
                <Link href="/wealth-solutions/wealth-creation" className="text-xs font-bold text-[var(--color-secondary)] inline-flex items-center gap-1">
                  <span>Explore Wealth Creation</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
