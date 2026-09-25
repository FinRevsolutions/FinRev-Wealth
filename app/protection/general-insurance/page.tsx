import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Car, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Building2, Plane, Shield, Layers, Scale } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "General Insurance Solutions — Motor, Property & Commercial Coverage",
  "Protect tangible assets, commercial infrastructure, vehicles, and overseas travel with comprehensive general insurance solutions from FINREV SOLUTIONS.",
  "/protection/general-insurance"
);

const GENERAL_CATEGORIES = [
  {
    icon: Car,
    title: "Comprehensive Motor Insurance",
    subtitle: "Private & Commercial Fleets",
    description: "Full bumper-to-bumper zero-depreciation coverage for four-wheelers and commercial fleet vehicles against accidental collisions, theft, natural disasters, and mandatory third-party liabilities.",
    keyFeature: "Includes Engine Protector, Return to Invoice (RTI), and 24x7 Roadside Assistance.",
  },
  {
    icon: Building2,
    title: "Property & Commercial Asset Insurance",
    subtitle: "Real Estate, Plant & Machinery",
    description: "Protects physical structures, residential real estate, industrial factories, warehouse inventories, and office infrastructure against fire, earthquake, storm, flood, and burglary perils.",
    keyFeature: "Reinstatement value basis settlement and business interruption coverage.",
  },
  {
    icon: Plane,
    title: "Overseas Corporate & Personal Travel",
    subtitle: "Global Mobility Defense",
    description: "Comprehensive medical evacuation, emergency foreign hospitalization, flight delay, and baggage loss protection for corporate executives and family international travel.",
    keyFeature: "Direct cashless settlement in foreign currency across global hospital networks.",
  },
];

const FAQS = [
  {
    q: "Why is Zero Depreciation Cover essential in Motor Insurance?",
    a: "Standard comprehensive motor insurance policies deduct standard depreciation (up to 50% on plastic, rubber, and glass parts) during accidental claim repairs. A Zero Depreciation (Nil Dep) add-on ensures the insurance company reimburses the full replacement cost of parts without depreciation deductions, drastically lowering out-of-pocket costs.",
  },
  {
    q: "What does Home and Commercial Property Insurance cover?",
    a: "Property insurance covers both the physical building structure (against fire, earthquakes, lightning, flooding) and the internal contents (machinery, electronic equipment, appliances, stocks, and furniture against burglary, accidental electrical breakdown, or water ingress damage).",
  },
  {
    q: "How does Overseas Travel Insurance protect against currency fluctuations?",
    a: "Foreign hospitalization costs in the US, UK, or Europe can run into tens of thousands of dollars for simple procedures. Overseas travel insurance policy limits are denominated in USD or Euros (e.g. $250,000 to $500,000), protecting your domestic liquid savings from extreme forex outflow in a medical emergency.",
  },
];

export default function GeneralInsurancePage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/protection" className="hover:text-[var(--color-text-primary)] transition-colors">Protection</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">General Insurance</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <Car size={13} className="text-[var(--color-secondary)]" />
            <span>Tangible Asset & Liability Defense</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            General & Commercial Asset Insurance
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Insure your tangible physical assets—vehicles, residential real estate, commercial infrastructure, and business liabilities—against
            unforeseen perils, accidents, and third-party liabilities.
          </p>
        </div>

        {/* 3 CORE PRACTICE AREAS: Structured Rows */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Asset Categories</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Core General Insurance Solutions
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">IRDAI General Insurance Solicitations</span>
          </div>

          <div className="space-y-6 divide-y divide-[var(--color-border-subtle)]">
            {GENERAL_CATEGORIES.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className={idx > 0 ? "pt-6" : ""}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-secondary)] font-semibold mb-1">
                        <IconComp size={14} />
                        <span>{item.subtitle}</span>
                      </div>
                      <h3 className="text-base font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                        {item.title}
                      </h3>
                    </div>
                    <div className="md:w-2/3 space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      <p>{item.description}</p>
                      <div className="p-2.5 bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] rounded-[2px] text-[11px] font-mono text-[var(--color-primary)]">
                        <strong>Key Provision:</strong> {item.keyFeature}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on General Insurance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-[var(--color-border-subtle)] pb-4">
                <div className="flex items-start gap-2 mb-1.5">
                  <HelpCircle size={14} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <h3 className="text-xs font-bold text-[var(--color-text-primary)] leading-snug">{faq.q}</h3>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-[var(--color-surface-container-highest)] border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Asset Risk Desk</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Inquire on Motor, Property, or Commercial Asset Cover
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Evaluate coverage clauses and deductibles with Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Consult on General Cover</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Insurance is the subject matter of solicitation. Policy terms, exclusions, and claims settlement procedures are governed strictly by the respective general insurance company policy contracts approved by IRDAI. FINREV SOLUTIONS facilitates insurance advisory and distribution.
          </p>
        </div>
      </Container>
    </div>
  );
}
