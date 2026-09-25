"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Layers, Landmark, Briefcase, TrendingUp, Sparkles, Building2 } from "lucide-react";

interface UniverseNode {
  id: string;
  name: string;
  tag: string;
  icon: typeof Layers;
  category: "Core Asset" | "Predictable Income" | "Specialized Growth" | "Private Market";
  eligibility: string;
  desc: string;
  href: string;
}

const UNIVERSE_NODES: UniverseNode[] = [
  {
    id: "mf",
    name: "Mutual Funds",
    tag: "Core Diversification",
    icon: Layers,
    category: "Core Asset",
    eligibility: "Retail & HNI · Min ₹500 SIP",
    desc: "Direct folios across Large, Flexi, Mid, and Hybrid funds with individual client ownership at respective AMCs.",
    href: "/investments/mutual-funds",
  },
  {
    id: "bonds",
    name: "Bonds & Fixed Income",
    tag: "Capital Preservation",
    icon: Landmark,
    category: "Predictable Income",
    eligibility: "All Portfolios · Min ₹10,000",
    desc: "Sovereign Gold Bonds, government securities, and high-credit corporate debentures for predictable yield.",
    href: "/investments/bonds",
  },
  {
    id: "pms",
    name: "Portfolio Management (PMS)",
    tag: "Active Stock Selection",
    icon: Briefcase,
    category: "Specialized Growth",
    eligibility: "HNI Investors · Min ₹50 Lakhs (SEBI)",
    desc: "Direct demat equity holding managed by institutional fund managers with bespoke sector mandates.",
    href: "/investments/pms",
  },
  {
    id: "aif",
    name: "Alternative Investment Funds (AIF)",
    tag: "Private Capital Strategies",
    icon: Sparkles,
    category: "Specialized Growth",
    eligibility: "Accredited Investors · Min ₹1 Crore (SEBI)",
    desc: "SEBI-regulated Category II & III pooled funds investing in private equity, private debt, and structured real estate.",
    href: "/investments/aif",
  },
  {
    id: "unlisted",
    name: "Unlisted Shares",
    tag: "Pre-Listing Equities",
    icon: Building2,
    category: "Private Market",
    eligibility: "Experienced Capital · Liquidity-Aware",
    desc: "Curated access to high-growth private enterprise equity prior to public stock exchange listing.",
    href: "/investments/unlisted-pre-ipo",
  },
  {
    id: "preipo",
    name: "Pre-IPO Opportunities",
    tag: "Late-Stage Placements",
    icon: TrendingUp,
    category: "Private Market",
    eligibility: "HNI & Family Offices · Multi-Year Lock",
    desc: "Structured pre-IPO allocations evaluated through rigorous fundamental and valuation benchmarking.",
    href: "/investments/unlisted-pre-ipo",
  },
];

export function InvestmentUniverseSection() {
  const [selectedNode, setSelectedNode] = useState<UniverseNode>(UNIVERSE_NODES[0]);

  return (
    <section
      className="py-16 md:py-24 bg-white border-b border-[var(--color-border-subtle)]"
      aria-label="Investment Universe Map"
    >
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-[var(--color-border-strong)] gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                INVESTMENT UNIVERSE
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.14]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FINREV at the Center. An Expanding Solution Universe.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
              We connect your wealth to the complete institutional asset architecture — from foundational mutual funds to specialized private market allocations, all coordinated from one central client view.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <span className="text-[11px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider block">
              Regulatory Scope
            </span>
            <span className="text-xs font-semibold text-[var(--color-primary)]">
              AMFI ARN-195797 · Institutional Sourcing
            </span>
          </div>
        </div>

        {/* Visual Relationship Map: Central FINREV Core with 6 Radial Satellites */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          {/* Central Hub & Satellite Diagram (7 cols) */}
          <div className="lg:col-span-7 bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] p-6 sm:p-8 rounded-[4px] relative">
            {/* Central Platform Monolith */}
            <div className="max-w-xs mx-auto mb-6 p-4 bg-[var(--color-primary)] text-white text-center rounded-[4px] border-2 border-[var(--color-finrev-gold)] shadow-md">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[var(--color-finrev-gold)] block">
                CENTRAL PLATFORM
              </span>
              <div className="text-lg font-mono font-extrabold tracking-wider mt-0.5">
                FINREV SOLUTIONS
              </div>
              <span className="text-[11px] text-slate-300 block mt-1">
                AMFI Registered Distributor · ARN-195797
              </span>
            </div>

            {/* Connecting Hub Map (2x3 Grid of Satellites) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {UNIVERSE_NODES.map((node) => {
                const isSelected = node.id === selectedNode.id;
                const IconComponent = node.icon;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-3.5 rounded-[4px] text-left border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white border-[var(--color-secondary)] shadow-sm ring-1 ring-[var(--color-secondary)]"
                        : "bg-white/80 border-[var(--color-border-subtle)] hover:border-[var(--color-border-strong)] hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={`w-7 h-7 rounded-[3px] flex items-center justify-center ${
                          isSelected
                            ? "bg-[var(--color-secondary)] text-white"
                            : "bg-slate-100 text-[var(--color-primary)]"
                        }`}
                      >
                        <IconComponent size={14} />
                      </div>
                      <span className="text-[9px] font-mono text-[var(--color-text-muted)] uppercase">
                        {node.category}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[var(--color-primary)] leading-snug">
                      {node.name}
                    </div>
                    <div className="text-[10px] text-[var(--color-text-muted)] mt-1 truncate">
                      {node.tag}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Sector Deep-Dive & Regulatory Clarity (5 cols) */}
          <div className="lg:col-span-5 p-6 bg-white border border-[var(--color-border-strong)] rounded-[4px]">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--color-border-subtle)]">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                {selectedNode.category}
              </span>
              <span className="text-xs font-mono text-[var(--color-text-muted)]">
                {selectedNode.tag}
              </span>
            </div>

            <h3
              className="text-2xl font-bold text-[var(--color-primary)] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {selectedNode.name}
            </h3>

            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {selectedNode.desc}
            </p>

            <div className="p-3 bg-[var(--color-surface-canvas)] rounded-[3px] border border-[var(--color-border-subtle)] mb-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
                Regulatory Eligibility Baseline
              </span>
              <span className="text-xs font-semibold text-[var(--color-primary)] font-mono">
                {selectedNode.eligibility}
              </span>
            </div>

            <Link
              href={selectedNode.href}
              className="inline-flex items-center justify-between w-full p-3 bg-[var(--color-primary)] text-white text-xs font-semibold rounded-[3px] hover:bg-[var(--color-secondary)] transition-colors group"
            >
              <span>Explore {selectedNode.name}</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Essential Compliance Footnote */}
        <div className="p-4 bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)] leading-relaxed">
          <ShieldCheck size={16} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[var(--color-primary)] font-semibold">Institutional Sourcing & Regulatory Compliance:</strong> Mutual fund distribution is executed under AMFI registration ARN-195797. Specialized PMS, AIF, and Unlisted opportunities are curated exclusively for eligible accredited and HNI investors via licensed institutional counterparties and SEBI-registered fund managers. Direct demat / AMC holdings remain in the individual client’s legal name.
          </p>
        </div>
      </div>
    </section>
  );
}
