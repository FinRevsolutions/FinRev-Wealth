import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, HeartPulse, ShieldAlert, Car, CheckCircle2, Lock, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Protection & Insurance Solutions — Protect the Wealth You Build",
  "Comprehensive insurance protection: Term Life, Family Health, Life Cover, and General Insurance solutions with FINREV SOLUTIONS.",
  "/protection"
);

const PROTECTION_SOLUTIONS = [
  {
    icon: ShieldCheck,
    title: "Pure Risk Term Insurance",
    badge: "Income Replacement",
    headline: "High Sum-Assured Protection at Minimal Premium",
    desc: "A pure protection shield designed to replace the economic value of the breadwinner. Guarantees your family can maintain their lifestyle and achieve milestones even in your absence.",
    href: "/protection/term-insurance",
  },
  {
    icon: HeartPulse,
    title: "Comprehensive Health Insurance",
    badge: "Medical Inflation Defense",
    headline: "Protect Your Investments from Hospitalization Costs",
    desc: "Family floater plans, super top-up policies, and critical illness riders. Prevents sudden healthcare events from depleting your compounding mutual fund portfolios.",
    href: "/protection/health-insurance",
  },
  {
    icon: ShieldAlert,
    title: "Life Insurance Solutions",
    badge: "Family Legacy Shield",
    headline: "Estate Protection & Long-Term Security",
    desc: "Comprehensive life protection structured to cover outstanding home loan liabilities, educational guarantees, and family legacy continuity.",
    href: "/protection/life-insurance",
  },
  {
    icon: Car,
    title: "General & Asset Insurance",
    badge: "Tangible Asset Security",
    headline: "Motor, Property, Commercial & Travel Insurance",
    desc: "Insuring your vehicles, real estate properties, commercial establishments, and travel contingencies against physical damage, natural disasters, and third-party liabilities.",
    href: "/protection/general-insurance",
  },
];

export default function ProtectionHubPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Protection</span>
        </nav>

        {/* Hero */}
        <div className="max-w-4xl mb-14">
          <SectionLabel>Pillar 03: Protect</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Protect the Wealth You Build.
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            An aggressive wealth accumulation strategy without a solid insurance foundation is fragile.
            We treat insurance strictly as a risk transfer mechanism — safeguarding your family and assets so unexpected
            crises never disrupt your long-term compounding investments.
          </p>
        </div>

        {/* Principle Banner */}
        <div className="p-6 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-gold-subtle)] text-[var(--color-tertiary)] flex items-center justify-center shrink-0 border border-[#fde68a]">
              <Shield size={22} />
            </div>
            <div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                Our Core Insurance Philosophy: Zero Mixed Products
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed max-w-2xl">
                We advocate keeping investment and insurance completely separated. Insurance exists to provide maximum
                financial risk replacement at minimum premium. Wealth growth belongs in compounding investment assets.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-[var(--color-tertiary)] px-3 py-1.5 bg-[var(--color-gold-subtle)] rounded-lg border border-[#fde68a] shrink-0">
            Pure Risk Defense
          </span>
        </div>

        {/* VISUAL 1: The 5-Layer Protection Architecture */}
        <div className="bg-white rounded-2xl p-7 md:p-10 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="max-w-2xl mb-8">
            <SectionLabel>Risk Insulation Framework</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mt-1.5" style={{ fontFamily: "var(--font-heading)" }}>
              The 5-Layer Financial Defense Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">
              Insurance is not an investment; it is a fortress that protects your investments from being liquidated during crises.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                layer: "01",
                name: "FAMILY DEFENSE (LIFE PROTECTION)",
                headline: "Surviving Dependents & Generational Continuity",
                description:
                  "Ensures that in the event of premature demise, family living standards, home loan liabilities, and future educational milestones remain 100% funded.",
                instrument: "Pure Term Life Cover • 15x–20x Annual Income",
                badge: "Foundational Shield",
                href: "/protection/life-insurance",
              },
              {
                layer: "02",
                name: "INCOME REPLACEMENT (PURE TERM COVER)",
                headline: "Actuarial Human Life Value (HLV) Protection",
                description:
                  "Directly replaces the economic value of your peak earning years. High sum-assured cover with zero investment mix, delivering maximum protection per rupee of premium.",
                instrument: "Pure Risk Term Cover with Critical Illness Rider",
                badge: "Income Shield",
                href: "/protection/term-insurance",
              },
              {
                layer: "03",
                name: "HEALTH & MEDICAL INFLATION BUFFER",
                headline: "Insulating Wealth Against Hospitalization Costs",
                description:
                  "Healthcare inflation in India exceeds 14% annually. A two-tier health shield (Base Cover + High Sum-Assured Super Top-Up) absorbs massive medical bills without depleting mutual funds.",
                instrument: "Base Floater (₹10L) + Super Top-Up (₹50L–₹1 Cr)",
                badge: "Medical Shield",
                href: "/protection/health-insurance",
              },
              {
                layer: "04",
                name: "ASSET & LIABILITY PRESERVATION",
                headline: "Safeguarding Physical Property & Motor Assets",
                description:
                  "Protects residential properties, motor vehicles, and commercial assets against third-party liability, fire, floods, and natural catastrophes.",
                instrument: "Comprehensive Home, Motor & Commercial Property Cover",
                badge: "Asset Shield",
                href: "/protection/general-insurance",
              },
              {
                layer: "05",
                name: "INVESTMENT PORTFOLIO INSULATION",
                headline: "Allowing Compounding to Run Uninterrupted",
                description:
                  "The ultimate objective of the 4 outer defense layers: your long-term equity SIPs and mutual funds never have to be sold during market drawdowns to fund sudden family emergencies.",
                instrument: "Untouched Multi-Decade Wealth Engine",
                badge: "Compounding Shield",
                href: "/investments",
              },
            ].map((shield) => (
              <div
                key={shield.layer}
                className="p-5 sm:p-6 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] hover:border-[var(--color-tertiary)] transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="lg:max-w-xl">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="font-mono text-xs font-bold text-[var(--color-tertiary)] bg-[var(--color-gold-subtle)] px-2.5 py-0.5 rounded border border-[#fde68a]">
                      LAYER {shield.layer}
                    </span>
                    <span className="text-[11px] font-bold text-[var(--color-text-primary)] tracking-wide">{shield.name}</span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {shield.headline}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3">
                    {shield.description}
                  </p>
                  <span className="text-xs font-medium text-[var(--color-text-secondary)] block">
                    <strong>Recommended Structure:</strong> {shield.instrument}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-[var(--color-border-subtle)]">
                  <span className="text-[11px] font-semibold text-[var(--color-tertiary)]">
                    {shield.badge}
                  </span>
                  <Link
                    href={shield.href}
                    className="py-2.5 px-4 rounded-xl bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-tertiary)] text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-tertiary)] inline-flex items-center gap-2 transition-colors shadow-xs"
                  >
                    <span>View Architecture</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary-fixed)] block mb-1">
              Insurance Review
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Audit Your Family's Insurance Coverage
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Verify if your existing term insurance sum-assured and health floater limits are sufficient for
              modern cost of living and healthcare inflation.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Request Coverage Audit</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Insurance is the subject matter of solicitation.
            Policy terms, conditions, and coverage details are governed by respective insurance company policy contracts.
            FINREV SOLUTIONS facilitates insurance solutions without mixing protection with investment claims.
          </p>
        </div>
      </Container>
    </div>
  );
}
