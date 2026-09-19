import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Car, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Building2, Plane } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "General Insurance Solutions — Motor, Property & Commercial Coverage",
  "Protect tangible assets, commercial infrastructure, vehicles, and overseas travel with comprehensive general insurance solutions from FINREV SOLUTIONS.",
  "/protection/general-insurance"
);

const GENERAL_CATEGORIES = [
  {
    icon: Car,
    title: "Comprehensive Motor Insurance",
    summary: "Complete bumper-to-bumper zero-depreciation coverage for private four-wheelers and commercial fleet vehicles against collisions, natural calamities, and third-party liabilities.",
  },
  {
    icon: Building2,
    title: "Property & Commercial Asset Insurance",
    summary: "Insure residential real estate, commercial buildings, machinery, inventory stocks, and electronic equipment from fire, earthquake, flood, and burglary perils.",
  },
  {
    icon: Plane,
    title: "Overseas Travel Insurance",
    summary: "Medical emergency coverage, medical evacuation, trip interruption, and baggage loss protection for corporate business travelers and international leisure trips.",
  },
];

const FAQS = [
  {
    q: "Why is Zero Depreciation Cover essential in Motor Insurance?",
    a: "Standard motor policies deduct depreciation (up to 50% on plastic, rubber, and glass parts) during claim settlement. A Zero Depreciation (Nil Dep) add-on ensures the insurer reimburses the full replacement cost of parts without depreciation deductions.",
  },
  {
    q: "What does Home Property Insurance cover?",
    a: "Home insurance covers both the physical building structure (against fire, storms, earthquakes) and contents inside (appliances, furniture, jewelry, and electronics against burglary, accidental breakdown, or storm damage).",
  },
];

export default function GeneralInsurancePage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/protection" className="hover:text-[var(--color-text-primary)] transition-colors">Protection</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">General Insurance</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-gold-subtle)] text-[var(--color-tertiary)] text-xs font-bold rounded border border-[#fde68a] mb-3">
            <Car size={14} />
            <span>Tangible Asset Defense</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            General & Commercial Asset Insurance
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Shield your tangible assets — vehicles, residential homes, manufacturing setups, and business liabilities —
            from natural catastrophes, accidents, and property loss.
          </p>
        </div>

        {/* 3 Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {GENERAL_CATEGORIES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-tertiary)] text-white flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="p-5 bg-white rounded-xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-2 mb-2">
                  <HelpCircle size={16} className="text-[var(--color-tertiary)] shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] leading-snug">{faq.q}</h4>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary-fixed)] block mb-1">
              Asset Security
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Insure Your Real Estate and Motor Assets
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Connect with Panchanan Kumar for policy quotes across leading general insurance providers.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Consult on General Insurance</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Insurance is the subject matter of solicitation.
            Coverage terms, deductibles, exclusions, and claim settlements are subject to respective insurance policy contracts.
          </p>
        </div>
      </Container>
    </div>
  );
}
