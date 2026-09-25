"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, HeartPulse, Shield, CheckCircle2, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ProtectionSection() {
  const shieldElements = [
    { label: "Family", desc: "Income replacement for dependents" },
    { label: "Income", desc: "Capitalizing lifetime Human Life Value" },
    { label: "Health", desc: "Insulating portfolios from medical inflation" },
    { label: "Assets", desc: "Hedging physical property & vehicles" },
    { label: "Investments", desc: "Preventing panic distress liquidations" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[var(--color-border-subtle)]">
      <Container>
        {/* Section Header with Sequence Flow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Defense Architecture</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Protect the Wealth You Build.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] mt-2.5 leading-relaxed">
              An aggressive investment strategy without an airtight risk defense is fragile.
              We ensure unexpected health crises or life contingencies never force you to liquidate
              your long-term compounding investments.
            </p>
          </div>

          {/* Strategic Flow Banner: PROTECT -> PRESERVE -> INVEST -> GROW */}
          <div className="bg-[var(--color-surface-canvas)] px-4 py-2.5 rounded-xl border border-[var(--color-border-subtle)] flex items-center gap-2 text-xs font-bold text-[var(--color-text-primary)]">
            <span className="text-[var(--color-secondary)]">PROTECT</span>
            <span className="text-[var(--color-text-muted)]">→</span>
            <span>PRESERVE</span>
            <span className="text-[var(--color-text-muted)]">→</span>
            <span>INVEST</span>
            <span className="text-[var(--color-text-muted)]">→</span>
            <span className="text-[var(--color-secondary)]">GROW</span>
          </div>
        </div>

        {/* Asymmetric Layout: Shield Concept (Left 5 Cols) vs Core Protection Pillars (Right 7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Financial Protection Shield Visual (5 Cols) */}
          <div className="lg:col-span-5 bg-[var(--color-primary)] text-white rounded-2xl p-7 md:p-8 flex flex-col justify-between shadow-[var(--shadow-card)]">
            <div>
              <div className="flex items-center gap-2.5 pb-4 border-b border-white/15 mb-6">
                <Shield className="text-emerald-400" size={22} />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                    Institutional Defense Model
                  </span>
                  <h3 className="text-base font-bold text-white">
                    The 5-Layer Protection Shield
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                We construct an impenetrable risk shield around what matters most, ensuring zero spillover into your wealth creation engine:
              </p>

              {/* 5 Shield Layers */}
              <div className="space-y-2.5">
                {shieldElements.map((elem, idx) => (
                  <div
                    key={elem.label}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          {elem.label}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {elem.desc}
                        </span>
                      </div>
                    </div>
                    <Lock size={13} className="text-emerald-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Negotiable Fiduciary Caveat */}
            <div className="mt-8 pt-4 border-t border-white/15 text-xs text-slate-300">
              <span className="font-bold text-emerald-400 block mb-1">
                Fiduciary Principle:
              </span>
              Insurance is strictly for pure financial protection; investments are for compounding. We never sell low-yield endowment policies or confusing ULIPs.
            </div>
          </div>

          {/* Right: Core Editorial Protection Pillars (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Pillar 1: Pure Term Life Insurance (Income Replacement) */}
            <div className="bg-[var(--color-surface-canvas)] rounded-2xl p-7 border border-[var(--color-border-subtle)] hover:bg-white hover:border-[var(--color-secondary)] shadow-sm transition-all flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)] text-white flex items-center justify-center">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-secondary)] block">
                        Pillar 01 — Income Replacement
                      </span>
                      <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                        Pure Term Life Insurance
                      </h4>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-1 rounded-full border border-[var(--color-border-strong)]">
                    Zero Gimmicks
                  </span>
                </div>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  High sum-assured pure term policies designed to replace your economic earning potential. In the event of an untimely demise, insurance proceeds clear all debts and generate a dependable monthly family pension.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                  {[
                    "15x – 20x annual expense coverage",
                    "Full outstanding debt retirement",
                    "Critical illness rider options",
                    "Direct insurer claim settlement",
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                      <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/tools/life-insurance-need-calculator"
                  className="text-xs font-bold text-[var(--color-secondary)] hover:underline flex items-center gap-1"
                >
                  <span>Calculate Term Cover Need</span>
                  <ArrowRight size={12} />
                </Link>
                <Link
                  href="/protection/term-insurance"
                  className="px-4 py-2 bg-white border border-[var(--color-border-strong)] text-xs font-bold text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-surface-low)] transition-colors"
                >
                  Explore Term Insurance
                </Link>
              </div>
            </div>

            {/* Pillar 2: Comprehensive Health Insurance & Super Top-Up */}
            <div className="bg-[var(--color-surface-canvas)] rounded-2xl p-7 border border-[var(--color-border-subtle)] hover:bg-white hover:border-[var(--color-tertiary)] shadow-sm transition-all flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-tertiary)] text-white flex items-center justify-center">
                      <HeartPulse size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-tertiary)] block">
                        Pillar 02 — Medical Insulation
                      </span>
                      <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                        Comprehensive Health & Super Top-Up
                      </h4>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[var(--color-tertiary)] bg-[var(--color-amber-subtle)] px-2.5 py-1 rounded-full border border-[#fde68a]">
                    Zero Room Rent Limits
                  </span>
                </div>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  With healthcare inflation exceeding 14% p.a., relying purely on corporate group policies leaves you exposed. We structure combined ₹35L+ Base + Super Top-Up shields to guarantee cashless tertiary care.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                  {[
                    "Zero room-rent proportionate deductions",
                    "Cost-effective Super Top-Up buffer",
                    "Cashless admission across 10,000+ hospitals",
                    "Restoration of sum insured benefits",
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                      <CheckCircle2 size={13} className="text-[var(--color-tertiary)] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/tools/health-insurance-calculator"
                  className="text-xs font-bold text-[var(--color-tertiary)] hover:underline flex items-center gap-1"
                >
                  <span>Benchmark Health Requirement</span>
                  <ArrowRight size={12} />
                </Link>
                <Link
                  href="/protection/health-insurance"
                  className="px-4 py-2 bg-white border border-[var(--color-border-strong)] text-xs font-bold text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-surface-low)] transition-colors"
                >
                  Explore Health Shield
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
