import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { BRAND, CONTACT, REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Regulatory Disclosures — AMFI ARN-195797 Compliance",
  "Statutory regulatory disclosures of FINREV SOLUTIONS: AMFI Registration ARN-195797, founder Panchanan Kumar, and SEBI compliance information.",
  "/legal/regulatory-disclosures"
);

export default function RegulatoryDisclosuresPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Regulatory Disclosures</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] text-xs font-bold rounded border border-[var(--color-border-strong)] mb-3">
            <ShieldCheck size={14} />
            <span>Statutory Compliance Declaration</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Regulatory Disclosures & Credentials
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            In compliance with Securities and Exchange Board of India (SEBI) regulations and the Association of
            Mutual Funds in India (AMFI) Code of Conduct, the following mandatory disclosures are published.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] max-w-4xl flex flex-col gap-8 mb-16">
          {/* Table of Facts */}
          <div>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Registration & Operational Particulars
            </h2>
            <div className="divide-y divide-[var(--color-border-subtle)] border border-[var(--color-border-subtle)] rounded-xl overflow-hidden text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-[var(--color-surface-canvas)]">
                <span className="font-bold text-[var(--color-text-muted)]">Entity Name</span>
                <span className="sm:col-span-2 font-bold text-[var(--color-text-primary)]">{BRAND.name}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-white">
                <span className="font-bold text-[var(--color-text-muted)]">Founder / Key Person</span>
                <span className="sm:col-span-2 font-bold text-[var(--color-text-primary)]">{REGULATORY.founderName}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-[var(--color-surface-canvas)]">
                <span className="font-bold text-[var(--color-text-muted)]">AMFI Registration Number</span>
                <span className="sm:col-span-2 font-bold text-[var(--color-secondary)]" style={{ fontFamily: "var(--font-mono)" }}>
                  {REGULATORY.arnNumber} (Mutual Fund Distributor)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-white">
                <span className="font-bold text-[var(--color-text-muted)]">Regulatory Body</span>
                <span className="sm:col-span-2 text-[var(--color-text-secondary)]">{REGULATORY.registrationBody}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-[var(--color-surface-canvas)]">
                <span className="font-bold text-[var(--color-text-muted)]">Primary Business Activity</span>
                <span className="sm:col-span-2 text-[var(--color-text-secondary)]">Distribution of Mutual Fund Schemes & Financial Products</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 bg-white">
                <span className="font-bold text-[var(--color-text-muted)]">Official Contact</span>
                <span className="sm:col-span-2 text-[var(--color-text-secondary)]">{CONTACT.phone} • {CONTACT.email}</span>
              </div>
            </div>
          </div>

          {/* Compliance Declarations */}
          <div className="flex flex-col gap-4 text-xs text-[var(--color-text-secondary)] leading-relaxed">
            <h3 className="text-base font-bold text-[var(--color-text-primary)]">Nature of Service & Compliance Declarations</h3>
            <p>
              1. <strong>Distributor Status:</strong> FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
              We distribute Regular plans of mutual funds offered by AMFI-registered Asset Management Companies. We receive distribution
              commissions directly from the AMCs as disclosed in the respective scheme Information Documents.
            </p>
            <p>
              2. <strong>No SEBI RIA Standing:</strong> FINREV SOLUTIONS does not claim or hold a license as a SEBI Registered Investment Advisor (RIA).
              We do not charge direct advisory fees to retail clients for mutual fund distribution.
            </p>
            <p>
              3. <strong>Zero Custody of Investor Funds:</strong> All investments are executed directly between the investor's verified bank account
              and the respective Mutual Fund house via regulated exchange infrastructure (BSE StAR MF / NSE NMF II). FINREV does not accept cash or hold client money.
            </p>
            <p>
              4. <strong>No Guaranteed Returns:</strong> Mutual fund investments are subject to market risks. Past performance of any scheme or index
              does not guarantee future performance. FINREV does not provide any assured or guaranteed return schemes.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
