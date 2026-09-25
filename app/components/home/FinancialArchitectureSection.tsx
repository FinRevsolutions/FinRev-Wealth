"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { FinancialArchitecture, PillarId, PILLARS } from "@/components/3d/FinancialArchitecture";

export function FinancialArchitectureSection() {
  const [hoveredPillar, setHoveredPillar] = useState<PillarId | null>(null);

  return (
    <section
      className="py-16 md:py-24 lg:py-28 bg-[#071A2A] text-white border-b border-slate-800 overflow-hidden"
      aria-label="FINREV Financial Architecture"
    >
      <div className="container-page">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-finrev-gold)]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-finrev-gold)]">
              FINREV FINANCIAL ARCHITECTURE
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            An Interconnected System for Multi-Decade Wealth.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal max-w-2xl">
            Financial planning is not a collection of isolated products. It is a unified architecture where capital foundation, life milestones, downside defense, and compounding strategies orbit a single coordinated core.
          </p>
        </div>

        {/* 3D Visual Architecture Stage: FINREV Central Monolith + 4 Orbital Pillars */}
        <div className="relative w-full rounded-[4px] border border-white/10 bg-[#040E17]/60 overflow-hidden shadow-2xl">
          {/* Subtle Ambient Grid Background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px] items-stretch">
            {/* Left Column: 4 Pillars Interactive List (4 cols) */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 z-10 bg-[#071A2A]/40 backdrop-blur-xs">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-4">
                  Orbital Pillars
                </span>

                <div className="divide-y divide-white/10">
                  {PILLARS.map((p) => {
                    const isHovered = hoveredPillar === p.id;
                    return (
                      <div
                        key={p.id}
                        onMouseEnter={() => setHoveredPillar(p.id)}
                        onMouseLeave={() => setHoveredPillar(null)}
                        className={`py-3.5 sm:py-4 transition-all cursor-pointer ${
                          isHovered ? "pl-2 bg-white/5" : ""
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className={`text-xs font-mono font-bold tracking-wider uppercase ${
                              isHovered ? "text-[var(--color-finrev-gold)]" : "text-white"
                            }`}
                          >
                            {p.label}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Orbit 0{PILLARS.indexOf(p) + 1}
                          </span>
                        </div>
                        <div className="text-xs text-slate-300 font-medium leading-snug">
                          {p.tagline}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Regulatory Notice */}
              <div className="pt-6 mt-6 border-t border-white/10 text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck size={14} className="text-[var(--color-finrev-gold)] shrink-0" />
                <span>AMFI ARN-195797 · Direct AMC Execution</span>
              </div>
            </div>

            {/* Right Column: Signature 3D Financial Architecture (8 cols) */}
            <div className="lg:col-span-8 relative min-h-[460px] sm:min-h-[520px] lg:min-h-[640px] flex items-center justify-center">
              <FinancialArchitecture
                onHoverPillar={setHoveredPillar}
                selectedPillar={hoveredPillar}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
