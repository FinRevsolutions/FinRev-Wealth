"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Layers, Landmark, Briefcase, Sparkles, Building2, TrendingUp, Shield, Target } from "lucide-react";

interface UniverseNode {
  id: string;
  name: string;
  tag: string;
  category: "Foundational Asset" | "Predictable Income" | "Specialized Strategy" | "Private Market" | "Capital Defense" | "Milestone Roadmap";
  icon: typeof Layers;
  eligibility: string;
  desc: string;
  href: string;
  angle: number; // for radial positioning in map (degrees)
}

const UNIVERSE_NODES: UniverseNode[] = [
  {
    id: "mf",
    name: "Mutual Funds",
    tag: "Core Diversified Compounding",
    category: "Foundational Asset",
    icon: Layers,
    eligibility: "Retail & HNI · Min ₹500 SIP",
    desc: "Direct AMC folios across Large, Flexi, Mid-Cap, and Hybrid funds with individual client ownership.",
    href: "/investments/mutual-funds",
    angle: 0,
  },
  {
    id: "bonds",
    name: "Bonds & Fixed Income",
    tag: "Predictable Capital Shield",
    category: "Predictable Income",
    icon: Landmark,
    eligibility: "All Portfolios · Min ₹10,000",
    desc: "Sovereign Gold Bonds, government securities, and high-credit corporate debentures for predictable yield.",
    href: "/investments/bonds",
    angle: 45,
  },
  {
    id: "pms",
    name: "PMS (Portfolio Management)",
    tag: "Active High-Conviction Equity",
    category: "Specialized Strategy",
    icon: Briefcase,
    eligibility: "HNI Investors · Min ₹50 Lakhs (SEBI)",
    desc: "Direct demat equity holding managed by institutional fund managers with bespoke sector mandates.",
    href: "/investments/pms",
    angle: 90,
  },
  {
    id: "aif",
    name: "AIF (Alternative Funds)",
    tag: "Private Equity & Debt",
    category: "Specialized Strategy",
    icon: Sparkles,
    eligibility: "Accredited Investors · Min ₹1 Crore (SEBI)",
    desc: "SEBI-regulated Category II & III pooled funds investing in private equity, private debt, and structured real estate.",
    href: "/investments/aif",
    angle: 135,
  },
  {
    id: "unlisted",
    name: "Unlisted Shares",
    tag: "Late-Stage Enterprise Stakes",
    category: "Private Market",
    icon: Building2,
    eligibility: "Experienced Capital · Liquidity-Aware",
    desc: "Curated access to high-growth private enterprise equity prior to public stock exchange listing.",
    href: "/investments/unlisted-pre-ipo",
    angle: 180,
  },
  {
    id: "preipo",
    name: "Pre-IPO Opportunities",
    tag: "Pre-Listing Placements",
    category: "Private Market",
    icon: TrendingUp,
    eligibility: "HNI & Family Offices · Multi-Year Horizon",
    desc: "Structured pre-IPO allocations evaluated through rigorous fundamental and valuation benchmarking.",
    href: "/investments/unlisted-pre-ipo",
    angle: 225,
  },
  {
    id: "insurance",
    name: "Insurance (Term & Health)",
    tag: "Downside Capital Shield",
    category: "Capital Defense",
    icon: Shield,
    eligibility: "Mandatory Baseline Protection",
    desc: "Pure-risk term life protection and comprehensive healthcare buffers to insulate wealth from life shocks.",
    href: "/protection",
    angle: 270,
  },
  {
    id: "goal",
    name: "Goal Planning",
    tag: "Milestone-Driven Roadmaps",
    category: "Milestone Roadmap",
    icon: Target,
    eligibility: "All Life Horizons",
    desc: "Reverse-calculated capital allocation paths for retirement, children's education, and asset acquisition.",
    href: "/wealth-solutions/goal-based-investing",
    angle: 315,
  },
];

export function FinancialUniverseSection() {
  const [selectedNode, setSelectedNode] = useState<UniverseNode>(UNIVERSE_NODES[0]);

  return (
    <section
      className="py-16 md:py-24 bg-[var(--color-surface-canvas)] border-b border-[var(--color-border-subtle)]"
      aria-label="Financial Universe Relationship Map"
    >
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-[var(--color-border-strong)] gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                FINANCIAL UNIVERSE MAP
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.14]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FINREV at the Center. An Interconnected Solution Universe.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
              We connect your wealth to the complete institutional asset architecture — eight distinct dimensions coordinated from one single platform view.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <span className="text-[11px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider block">
              Platform Architecture
            </span>
            <span className="text-xs font-semibold text-[var(--color-primary)]">
              AMFI ARN-195797 · Institutional Sourcing
            </span>
          </div>
        </div>

        {/* Visual Relationship Map: FINREV Central Hub + 8 Solution Nodes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Left: Constellation Map Grid (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[var(--color-border-strong)] p-6 sm:p-8 rounded-[4px] relative">
            {/* Central Platform Monolith */}
            <div className="max-w-sm mx-auto mb-6 p-4 bg-[var(--color-primary)] text-white text-center rounded-[3px] border-2 border-[var(--color-finrev-gold)] shadow-md">
              <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-[var(--color-finrev-gold)] block">
                CENTRAL PLATFORM CORE
              </span>
              <div className="text-base sm:text-lg font-mono font-extrabold tracking-wider mt-0.5">
                FINREV SOLUTIONS
              </div>
              <span className="text-[11px] text-slate-300 block mt-1">
                AMFI Registered Distributor · ARN-195797
              </span>
            </div>

            {/* 8 Satellite Nodes (Interactive Grid with Hairline Lines) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {UNIVERSE_NODES.map((node) => {
                const isSelected = node.id === selectedNode.id;
                const IconComp = node.icon;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-3 rounded-[3px] text-left border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[var(--color-primary)] text-white border-[var(--color-finrev-gold)] shadow-sm"
                        : "bg-[var(--color-surface-canvas)] text-[var(--color-primary)] border-[var(--color-border-subtle)] hover:border-[var(--color-secondary)] hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={`w-6 h-6 rounded-[2px] flex items-center justify-center ${
                          isSelected
                            ? "bg-[var(--color-secondary)] text-white"
                            : "bg-white text-[var(--color-secondary)] border border-[var(--color-border-subtle)]"
                        }`}
                      >
                        <IconComp size={12} />
                      </div>
                      <span
                        className={`text-[8px] font-mono uppercase ${
                          isSelected ? "text-[var(--color-finrev-gold)]" : "text-[var(--color-text-muted)]"
                        }`}
                      >
                        0{UNIVERSE_NODES.indexOf(node) + 1}
                      </span>
                    </div>
                    <div
                      className={`text-xs font-bold leading-tight line-clamp-1 ${
                        isSelected ? "text-white" : "text-[var(--color-primary)]"
                      }`}
                    >
                      {node.name}
                    </div>
                    <div
                      className={`text-[9px] truncate mt-1 ${
                        isSelected ? "text-slate-300" : "text-[var(--color-text-muted)]"
                      }`}
                    >
                      {node.tag}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Node Detail & Regulatory Clarity (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[var(--color-border-strong)] p-6 rounded-[4px] h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--color-border-subtle)]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                  {selectedNode.category}
                </span>
                <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                  Pillar Vector
                </span>
              </div>

              <h3
                className="text-2xl font-bold text-[var(--color-primary)] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {selectedNode.name}
              </h3>

              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 font-normal">
                {selectedNode.desc}
              </p>

              <div className="p-3.5 bg-[var(--color-surface-canvas)] rounded-[3px] border border-[var(--color-border-subtle)] mb-5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
                  Access & Regulatory Qualification
                </span>
                <span className="text-xs font-semibold text-[var(--color-primary)] font-mono">
                  {selectedNode.eligibility}
                </span>
              </div>
            </div>

            <Link
              href={selectedNode.href}
              className="inline-flex items-center justify-between w-full p-3.5 bg-[var(--color-primary)] text-white text-xs font-semibold rounded-[3px] hover:bg-[var(--color-secondary)] transition-colors group cursor-pointer"
            >
              <span>Explore {selectedNode.name}</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Regulatory Governance Statement */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[3px] flex items-start gap-3 text-xs text-[var(--color-text-muted)] leading-relaxed">
          <ShieldCheck size={16} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[var(--color-primary)] font-semibold">Institutional Sourcing & Regulatory Compliance:</strong> Mutual fund distribution is executed under AMFI registration ARN-195797. Specialized PMS, AIF, and Unlisted opportunities are curated exclusively for eligible accredited and HNI investors via licensed institutional counterparties and SEBI-registered fund managers. Direct demat / AMC holdings remain in the individual client’s legal name.
          </p>
        </div>
      </div>
    </section>
  );
}
