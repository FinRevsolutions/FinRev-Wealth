import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, UserCheck, Target, CheckCircle2, Award, Building2, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { BRAND, CONTACT, REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "About FINREV SOLUTIONS — Founder Panchanan Kumar (ARN-195797)",
  "Learn about FINREV SOLUTIONS, an AMFI-registered Mutual Fund Distributor (ARN-195797) founded by Panchanan Kumar. Ethical, milestone-based wealth solutions.",
  "/about"
);

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">About FINREV</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary-500)] text-xs font-bold rounded-lg border border-[var(--color-border-strong)] mb-3">
            <ShieldCheck size={14} />
            <span>AMFI Registered MFD • ARN-195797</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About FINREV SOLUTIONS
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Founded with a commitment to bring institutional-grade discipline, transparency, and personal accountability
            to individual and family wealth planning.
          </p>
        </div>

        {/* Founder Profile & Credentials */}
        <div className="bg-white rounded-xl border border-[var(--color-border-strong)] shadow-[var(--shadow-card)] p-7 md:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col p-6 bg-[var(--color-surface-canvas)] rounded-xl border border-[var(--color-border-strong)] shadow-2xs">
              {/* Authentic Founder Photo & Header */}
              <div className="border-b border-[var(--color-border-strong)] pb-5 mb-5">
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--color-secondary)] shadow-xs shrink-0 bg-[var(--color-primary)]">
                    <Image
                      src="/brand/founder-panchanan-kumar.jpg"
                      alt={REGULATORY.founderName}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-secondary)] block mb-0.5">
                      Principal & Founder
                    </span>
                    <h2
                      className="text-xl sm:text-2xl font-extrabold text-[var(--color-primary)] tracking-tight leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {REGULATORY.founderName}
                    </h2>
                    <span className="text-xs font-semibold text-[var(--color-text-secondary)] mt-0.5 block">
                      {REGULATORY.founderTitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Regulatory Credentials */}
              <div className="flex flex-col gap-3 text-xs">
                <div className="p-3.5 bg-white rounded-xl border border-[var(--color-border-subtle)] shadow-2xs">
                  <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider block">
                    AMFI Registration
                  </span>
                  <span className="font-mono font-bold text-sm text-[var(--color-primary)] mt-0.5 block">
                    {REGULATORY.arnNumber}
                  </span>
                  <span className="text-[10px] text-[var(--color-secondary-500)] font-semibold mt-0.5 block">
                    Registered Mutual Fund Distributor
                  </span>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[var(--color-border-subtle)] shadow-2xs">
                  <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider block">
                    Regulatory Framework
                  </span>
                  <span className="font-bold text-[var(--color-text-primary)] mt-0.5 block">
                    {REGULATORY.registrationBody}
                  </span>
                  <span className="text-[10px] text-[var(--color-text-muted)] mt-0.5 block">
                    {REGULATORY.sebiRegulation}
                  </span>
                </div>

                <div className="p-3.5 bg-[var(--color-emerald-subtle)] rounded-xl border border-[var(--color-border-strong)] flex items-center gap-2 text-[var(--color-secondary-500)]">
                  <ShieldCheck size={16} className="shrink-0" />
                  <span className="text-[11px] font-bold">100% Direct AMC Folio Custody</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-4">
              <SectionLabel>Founder's Perspective</SectionLabel>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                "Secure Today. Stronger Tomorrow."
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                FINREV SOLUTIONS was established by <strong>{REGULATORY.founderName}</strong> to provide investors with
                a structured, honest alternative to aggressive product pushing and market speculation.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                We believe individual investors deserve the same mathematical rigor, risk budgeting, and horizon alignment
                that institutional treasuries demand. We never offer speculative stock tips or guaranteed return schemes.
                Every rupee invested through FINREV is mapped to a tangible life milestone and backed by regulated, high-governance
                mutual fund houses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Direct client access to the founder",
                  "Strict compliance with SEBI & AMFI norms",
                  "Zero pool account risk (direct AMC folios)",
                  "Transparent portfolio reporting & statements",
                ].map((pt) => (
                  <div key={pt} className="flex items-center gap-2 text-xs text-[var(--color-text-primary)] font-medium">
                    <CheckCircle2 size={15} className="text-[var(--color-secondary)] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="mb-16">
          <SectionLabel>Our Principles</SectionLabel>
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mt-1 mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            What Sets FINREV Apart
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Client-Centric Alignment",
                desc: "We prioritize your financial goals and time horizons over fund house transaction targets.",
              },
              {
                title: "Complete Transparency",
                desc: "All portfolio statements, NAV prices, and scheme fact sheets are openly accessible and verified.",
              },
              {
                title: "Multi-Asset Ecosystem",
                desc: "From mutual funds and bonds to health protection and private PMS — a single trusted desk.",
              },
              {
                title: "Long-Term Compounding",
                desc: "We focus on 10 to 20-year wealth creation curves rather than quarterly market distractions.",
              },
            ].map((v) => (
              <div key={v.title} className="p-6 bg-white rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
                <h4 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {v.title}
                </h4>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="p-8 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-[var(--color-text-primary)]">Connect Directly with FINREV SOLUTIONS</h4>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Registered Office Desk • Mon – Sat: 9:30 AM – 6:30 PM IST
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-[var(--color-text-secondary)] font-medium">
              <span className="flex items-center gap-1.5"><Phone size={13} className="text-[var(--color-secondary)]" />{CONTACT.phone}</span>
              <span className="flex items-center gap-1.5"><Mail size={13} className="text-[var(--color-secondary)]" />{CONTACT.email}</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl shrink-0 transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <span>Book Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Disclaimer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Regulatory Disclosure:</strong> FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
            Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing.
          </p>
        </div>
      </Container>
    </div>
  );
}
