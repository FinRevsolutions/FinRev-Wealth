import Link from "next/link";
import { ArrowRight, ArrowUpRight, Umbrella, HeartPulse, ShieldAlert, Car, Lock } from "lucide-react";

const PROTECTION_PILLARS = [
  {
    icon: Umbrella,
    title: "Pure Term Insurance",
    category: "Income Replacement Moat",
    desc: "15x–20x annual earnings replacement cover at cost-efficient premiums, ensuring family commitments remain uninterrupted.",
    highlight: "MWPA Section 6 Protection Available",
    href: "/protection/term-insurance",
  },
  {
    icon: HeartPulse,
    title: "Comprehensive Health Buffers",
    category: "Medical Expense Defense",
    desc: "Family floater and super top-up hospitalization covers preventing clinical emergencies from depleting compounding portfolios.",
    highlight: "Zero Liquidation of Equity Assets",
    href: "/protection/health-insurance",
  },
  {
    icon: Lock,
    title: "Life Insurance Solutions",
    category: "Dependent Asset Insulation",
    desc: "Structured coverage for dependent security, liabilities ring-fencing, and business partner succession insurance.",
    highlight: "Guaranteed Financial Security",
    href: "/protection/life-insurance",
  },
  {
    icon: Car,
    title: "General & Asset Insurance",
    category: "Physical Asset Defense",
    desc: "Motor, commercial property, and liability protection mitigating catastrophic legal or asset loss risks.",
    highlight: "Commercial & Asset Ring-Fencing",
    href: "/protection/general-insurance",
  },
];

export function ProtectionSection() {
  return (
    <section
      className="py-16 md:py-24 lg:py-28 bg-white border-b border-[var(--color-border-subtle)]"
      aria-label="Capital Protection Architecture"
      id="protection"
    >
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-[var(--color-border-strong)] gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                RISK DEFENSE ARCHITECTURE
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.12]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Protect the Balance Sheet Before Compounding Risk.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed font-normal">
              A compounding strategy without a defensive moat is fragile. We construct pure-risk insulation so unplanned life emergencies never force premature liquidation of high-growth investments.
            </p>
          </div>

          <Link
            href="/protection"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
          >
            <span>Explore All Protection Solutions</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Central Protection Visual with Structured Connections */}
        <div className="bg-[var(--color-surface-canvas)] border border-[var(--color-border-strong)] p-6 sm:p-10 rounded-[4px] mb-8">
          {/* Central Moat Statement Banner */}
          <div className="max-w-xl mx-auto text-center pb-8 mb-8 border-b border-[var(--color-border-subtle)]">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)] block mb-1">
              STRUCTURAL MOAT PRINCIPLE
            </span>
            <div className="text-lg sm:text-xl font-bold text-[var(--color-primary)]">
              Capital Insulation Layer
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1.5 leading-relaxed">
              Insurance is not an investment product — it is an essential capital defense mechanism designed strictly to absorb catastrophic downside shocks.
            </p>
          </div>

          {/* 4 Connected Protection Pillars (2x2 Grid with Precision Connectors) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROTECTION_PILLARS.map((p) => {
              const IconComp = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-border-strong)] p-6 rounded-[3px] flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-[3px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-primary)]">
                        <IconComp size={16} />
                      </div>
                      <span className="text-[10px] font-mono text-[var(--color-secondary)] font-semibold uppercase tracking-wider">
                        {p.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 font-normal">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[var(--color-text-muted)] font-medium">
                      {p.highlight}
                    </span>
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors group"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
