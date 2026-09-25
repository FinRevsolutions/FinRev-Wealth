import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartPulse, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Activity, Stethoscope } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Comprehensive Health Insurance & Super Top-Up Solutions",
  "Shield your compounding mutual fund portfolio from medical inflation with comprehensive family floater and super top-up health insurance through FINREV SOLUTIONS.",
  "/protection/health-insurance"
);

const FAQS = [
  {
    q: "Why is an employer corporate health policy insufficient?",
    a: "Corporate health covers typically offer modest limits (₹3 to ₹5 Lakhs), can be altered or cancelled by your employer at any time, and terminate immediately if you switch jobs, start a venture, or retire — precisely the age when private health insurance becomes expensive or difficult to acquire due to pre-existing conditions.",
  },
  {
    q: "What is a Super Top-Up Health Policy?",
    a: "A Super Top-Up policy acts as a high-value umbrella cover (e.g. ₹50 Lakhs to ₹1 Crore) that activates after total hospitalization claims in a policy year cross a defined deductible threshold (e.g. ₹5 or ₹10 Lakhs). Because of the deductible, it provides massive hospitalization coverage at a fraction of the cost of a base policy.",
  },
  {
    q: "What is the waiting period for pre-existing diseases (PED)?",
    a: "Under current IRDAI regulations, standard waiting periods for pre-existing medical conditions typically range from 1 to 3 years depending on the insurer and plan variant. Disclosing all medical history accurately upfront during proposal submission is critical for smooth claim settlement.",
  },
  {
    q: "What are Room Rent Sub-limits and why should they be avoided?",
    a: "Room rent limits cap daily hospital room charges to a fixed amount (e.g. 1% of sum assured). Exceeding this limit triggers proportionate deductions on all medical procedures and doctor fees across the entire hospital bill. We strictly recommend policies with zero room-rent capping.",
  },
];

export default function HealthInsurancePage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/protection" className="hover:text-[var(--color-text-primary)] transition-colors">Protection</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Health Insurance</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] text-xs font-bold rounded border border-[var(--color-border-strong)] mb-3">
            <HeartPulse size={14} />
            <span>Medical Inflation Defense</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Comprehensive Family Health Insurance
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Healthcare inflation in India exceeds 14% annually. A single serious medical episode or hospitalization
            should never force you to liquidate your compounding mutual funds or break your child's education corpus.
          </p>
        </div>

        {/* VISUAL 1: Base Cover + Super Top-Up Equation */}
        <div className="bg-white rounded-2xl p-7 md:p-10 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="max-w-2xl mb-8">
            <SectionLabel>Cost-Efficient Architecture</SectionLabel>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The Two-Tier Health Shield: Base Cover + Super Top-Up
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">
              How smart structuring unlocks ₹1 Crore of comprehensive family hospitalization protection at a fraction of standard premium costs.
            </p>
          </div>

          {/* Equation Graphic Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center mb-8">
            {/* Box 1: Base Floater */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)]">
              <span className="font-mono text-[10px] font-bold text-[var(--color-secondary)] uppercase tracking-wider block mb-1">
                Tier 01 • Primary
              </span>
              <h4 className="text-base font-bold text-[var(--color-text-primary)] mb-1">Base Family Floater</h4>
              <span className="text-2xl font-extrabold text-[var(--color-primary)] font-mono block mb-3">₹10 Lakhs</span>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3">
                Absorbs everyday hospitalizations, minor surgeries, daycare procedures, and standard seasonal illnesses with zero room-rent capping.
              </p>
              <span className="text-[11px] font-bold text-[var(--color-secondary)] block">First-Rupee Protection</span>
            </div>

            {/* Plus Sign */}
            <div className="lg:col-span-1 text-center font-extrabold text-2xl text-[var(--color-text-muted)]">
              +
            </div>

            {/* Box 2: Super Top-Up */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)]">
              <span className="font-mono text-[10px] font-bold text-[var(--color-tertiary)] uppercase tracking-wider block mb-1">
                Tier 02 • High Umbrella
              </span>
              <h4 className="text-base font-bold text-[var(--color-text-primary)] mb-1">Super Top-Up Cover</h4>
              <span className="text-2xl font-extrabold text-[var(--color-tertiary)] font-mono block mb-3">₹90 Lakhs</span>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3">
                Activates after cumulative annual claims cross the ₹10 Lakh deductible. Extremely cost-effective due to high threshold underwriting.
              </p>
              <span className="text-[11px] font-bold text-[var(--color-tertiary)] block">₹10 Lakh Deductible Threshold</span>
            </div>

            {/* Equals Sign */}
            <div className="lg:col-span-1 text-center font-extrabold text-2xl text-[var(--color-text-muted)]">
              =
            </div>

            {/* Box 3: Total Shield */}
            <div className="lg:col-span-2 p-6 rounded-2xl bg-[var(--color-emerald-subtle)] border border-[var(--color-border-strong)] text-center flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-secondary)] block mb-1">
                Total Shield
              </span>
              <span className="text-2xl font-extrabold text-[var(--color-secondary)] font-mono block mb-1">
                ₹1.00 Cr
              </span>
              <span className="text-[11px] font-semibold text-[var(--color-text-primary)] block">
                Total Combined Coverage
              </span>
              <span className="text-[10px] text-[var(--color-secondary)] mt-2 font-bold block">
                ~40% Lower Premium vs. Single ₹1 Cr Policy
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)] leading-relaxed">
            <strong>How the Deductible Operates:</strong> Unlike standard top-ups that evaluate each hospital admission in isolation, a <em>Super Top-Up</em> counts all hospitalizations across all family members cumulatively throughout the entire 365-day policy year. Once total claims exceed ₹10 Lakhs, the Super Top-Up settles all subsequent bills up to ₹90 Lakhs.
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Frequently Asked Questions on Health Coverage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="p-5 bg-white rounded-xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-2 mb-2">
                  <HelpCircle size={16} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
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
              Health Shield Audit
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Ensure Your Health Cover Matches Healthcare Costs
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Review room rent conditions, super top-up deductible alignments, and network cashless availability.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Audit Health Policy</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Insurance is the subject matter of solicitation.
            Health insurance claims and coverage terms are governed by the policy contract of the respective insurance company.
          </p>
        </div>
      </Container>
    </div>
  );
}
