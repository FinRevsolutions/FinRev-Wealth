import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, HeartPulse, ShieldAlert, Car, CheckCircle2, Lock, Shield, Layers, Scale } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Protection & Insurance Solutions — Protect the Wealth You Build",
  "Comprehensive insurance protection: Pure Risk Term Life, Family Health with Super Top-Up, Life Cover, and General Insurance solutions with FINREV SOLUTIONS (ARN-195797).",
  "/protection"
);

const PROTECTION_SOLUTIONS = [
  {
    icon: ShieldCheck,
    title: "Pure Risk Term Insurance",
    category: "Income Replacement Shield",
    headline: "High Sum-Assured Human Life Value Protection",
    desc: "A pure protection instrument engineered to replace the economic value of the primary breadwinner. Guarantees that family lifestyles, debts, and children's milestones remain fully funded.",
    href: "/protection/term-insurance",
  },
  {
    icon: HeartPulse,
    title: "Comprehensive Health Insurance",
    category: "Medical Inflation Defense",
    headline: "Base Family Floater + Super Top-Up Architecture",
    desc: "Structured two-tier hospitalization cover shielding compounding mutual fund portfolios from double-digit medical inflation and high-cost catastrophic treatments.",
    href: "/protection/health-insurance",
  },
  {
    icon: ShieldAlert,
    title: "Life Insurance & Estate Defense",
    category: "Family Legacy Shield",
    headline: "MWPA Statutory Trust Protection & Liability Cancellation",
    desc: "Comprehensive life protection structured under Section 6 of the Married Women's Property Act to ensure claim proceeds pass uncontested to family beneficiaries.",
    href: "/protection/life-insurance",
  },
  {
    icon: Car,
    title: "General & Asset Insurance",
    category: "Tangible Asset Security",
    headline: "Motor, Property, Commercial & Travel Insurance",
    desc: "Insuring private and commercial motor vehicles, residential real estate, manufacturing plants, and overseas business travel against physical loss and liabilities.",
    href: "/protection/general-insurance",
  },
];

const FIVE_LAYER_INSULATION = [
  {
    layer: "Layer 01: Emergency Liquidity",
    tenure: "0 to 1 Year Expenses",
    mechanism: "High-grade Liquid & Overnight Funds maintaining 6 to 12 months of non-discretionary living costs for unexpected job or health interruptions.",
  },
  {
    layer: "Layer 02: Comprehensive Health Shield",
    tenure: "First-Dollar Hospitalization",
    mechanism: "Zero room-rent sub-limit family floater base policy paired with high-deductible Super Top-Up to absorb up to ₹1 Crore in catastrophic medical bills.",
  },
  {
    layer: "Layer 03: Pure Risk Term Cover",
    tenure: "Human Life Value (HLV)",
    mechanism: "High sum-assured pure term insurance registered under MWPA Section 6, fully replacing future human capital earnings without investment baggage.",
  },
  {
    layer: "Layer 04: Tangible Asset Defense",
    tenure: "Property & Motor Insurance",
    mechanism: "Comprehensive bumper-to-bumper vehicle insurance and home structure/contents insurance to prevent capital depletion after physical damage.",
  },
  {
    layer: "Layer 05: Compounding Wealth Core",
    tenure: "Multi-Decade Equity Portfolios",
    mechanism: "Mutual funds, SIPs, and milestone portfolios that compound uninterrupted because Layers 01 through 04 absorb all real-world emergencies.",
  },
];

export default function ProtectionHubPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Protection</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <ShieldCheck size={13} className="text-[var(--color-secondary)]" />
            <span>Institutional Protection Architecture</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Protect the Wealth You Build
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            An aggressive wealth accumulation strategy without a solid insurance foundation is fragile.
            We treat insurance strictly as a risk transfer mechanism—safeguarding your family and assets so unexpected
            crises never disrupt your long-term compounding investments.
          </p>
        </div>

        {/* Institutional Principle Banner */}
        <div className="bg-[var(--color-surface-container-highest)] border border-[var(--color-border-subtle)] rounded-[4px] p-5 mb-12 flex items-start gap-3 text-xs text-[var(--color-text-secondary)]">
          <Shield size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-[var(--color-text-primary)] block mb-0.5">Zero-Mixed-Product Philosophy:</strong>
            We strictly advocate decoupling insurance from investment. Insurance exists to provide maximum catastrophic financial replacement at minimum premium. Wealth growth belongs in compounding mutual fund assets. We reject high-cost, low-yield traditional endowment and money-back policies.
          </div>
        </div>

        {/* 4 CORE PROTECTION PRACTICES: Structured Rows */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Insulation Categories</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Core Protection Solutions
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">4 Specialized Practice Areas</span>
          </div>

          <div className="space-y-6 divide-y divide-[var(--color-border-subtle)]">
            {PROTECTION_SOLUTIONS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className={idx > 0 ? "pt-6" : ""}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-secondary)] font-semibold mb-1">
                        <IconComp size={14} />
                        <span>{item.category}</span>
                      </div>
                      <h3 className="text-base font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                        {item.title}
                      </h3>
                      <span className="text-xs text-[var(--color-text-muted)]">{item.headline}</span>
                    </div>
                    <div className="md:w-2/3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
                        {item.desc}
                      </p>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] shrink-0"
                      >
                        <span>Explore Protection</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5-LAYER RISK INSULATION FRAMEWORK */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Risk Architecture</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The 5-Layer Risk Defense Architecture
            </h2>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              How layered protection insulates your core compounding mutual funds from real-world shocks.
            </p>
          </div>

          <div className="space-y-4">
            {FIVE_LAYER_INSULATION.map((l) => (
              <div key={l.layer} className="border border-[var(--color-border-subtle)] rounded-[4px] p-4 bg-[var(--color-surface-low)]">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--color-secondary)] font-semibold mb-1">
                  <span>{l.layer}</span>
                  <span className="text-[var(--color-text-muted)]">{l.tenure}</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {l.mechanism}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-[var(--color-surface-container-highest)] border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Protection Advisory Desk</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Conduct an Objective Risk & Protection Audit
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Evaluate policy clauses, deductibles, and human life value requirements with Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Schedule Policy Audit</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Insurance is the subject matter of solicitation. Policy terms, exclusions, and claims settlement procedures are governed strictly by respective insurance company policy contracts approved by IRDAI. FINREV SOLUTIONS facilitates insurance advisory and distribution.
          </p>
        </div>
      </Container>
    </div>
  );
}
