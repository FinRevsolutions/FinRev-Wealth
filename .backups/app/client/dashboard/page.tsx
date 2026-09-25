import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, ExternalLink, FileText, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { CONTACT, REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Client Dashboard — Portfolio Overview & RTA Reporting",
  "View your investment dashboard, portfolio allocations, and RTA statement access via FINREV SOLUTIONS.",
  "/client/dashboard"
);

export default function ClientDashboardPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/client/login" className="hover:text-[var(--color-text-primary)] transition-colors">Client Gateway</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Investor Dashboard</span>
        </nav>

        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] text-xs font-bold rounded border border-[var(--color-border-strong)] mb-3">
            <ShieldCheck size={13} />
            <span>Direct AMC Folio Architecture</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Consolidated Investor Desk
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            In compliance with SEBI and AMFI regulatory guidelines, investor folios mapped to ARN-195797
            are held directly with respective fund houses. Use our secure gateway to access statements or connect
            with our servicing desk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Official Statement Access */}
          <div className="bg-white p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-secondary)] block mb-2">
                Self-Service Statements
              </span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Download Consolidated Account Statement (CAS)
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Access your real-time holding statement across all mutual funds through MF Central or your depository
                (CDSL / NSDL). All folios mapped to distributor ARN-195797 are automatically compiled into your monthly CAS.
              </p>
            </div>
            <Link
              href="/client/login"
              className="py-3 px-4 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Go to Client Portal Gateway</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 2: Personalized Portfolio Review */}
          <div className="bg-white p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] block mb-2">
                Portfolio Review & Alignment
              </span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Request Founder Portfolio Audit
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Schedule a one-on-one portfolio review with founder Panchanan Kumar to evaluate scheme overlap,
                benchmark tracking errors, tax-loss harvesting, and goal-glidepath adjustments.
              </p>
            </div>
            <Link
              href="/wealth-solutions/portfolio-review"
              className="py-3 px-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)] text-white text-xs font-bold rounded-xl text-center transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Schedule Portfolio Review</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Regulatory Disclosure:</strong> FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
            Mutual fund investments are subject to market risks. Read all scheme related documents carefully.
          </p>
        </div>
      </Container>
    </div>
  );
}
