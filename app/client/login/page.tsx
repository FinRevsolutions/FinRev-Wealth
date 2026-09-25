import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, ExternalLink, FileText, Phone, Mail, CheckCircle2, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { BRAND, CONTACT, REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Client Gateway — Institutional Portfolio & Folio Access",
  "Institutional investor gateway for FINREV clients. Access mutual fund folios, Consolidated Account Statements (CAS), and official RTA portals.",
  "/client/login"
);

const OFFICIAL_EXTERNAL_PORTALS = [
  {
    name: "MF Central",
    operator: "Joint initiative of CAMS & KFintech (SEBI Mandated)",
    description: "Official single-window platform for portfolio tracking, electronic CAS downloads, and service requests across all Indian AMCs.",
    url: "https://www.mfcentral.com",
    badge: "SEBI Mandated Platform",
  },
  {
    name: "myCAMS",
    operator: "Computer Age Management Services (CAMS)",
    description: "Direct folio access for schemes serviced by CAMS (HDFC, ICICI Prudential, SBI, Aditya Birla Sun Life, DSP, etc.).",
    url: "https://www.camsonline.com",
    badge: "Official RTA Gateway",
  },
  {
    name: "KFintech KPRISM",
    operator: "KFin Technologies Limited",
    description: "Direct investor access for schemes serviced by KFintech (Nippon India, Axis, UTI, Mirae Asset, Quant, etc.).",
    url: "https://mfs.kfintech.com",
    badge: "Official RTA Gateway",
  },
];

export default function ClientLoginPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Client Gateway</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <Lock size={13} className="text-[var(--color-secondary)]" />
            <span>FINREV Client Gateway</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Investor Portfolio & Statement Gateway
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            In compliance with SEBI regulatory architecture, all mutual fund folios distributed under ARN-195797
            are held directly in the individual investor's name with respective Asset Management Companies.
          </p>
        </div>

        {/* Direct Custody & Settlement Architecture */}
        <div className="bg-white rounded-[6px] border border-[var(--color-border-subtle)] p-6 sm:p-8 md:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Custody Security */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <SectionLabel>Direct Custody Framework</SectionLabel>
              <h2
                className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Individual Folio Ownership. Zero Pool Account Intermediation.
              </h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                FINREV SOLUTIONS operates under a strict non-custodial distributor mandate. Your investment capital
                moves directly from your verified bank account to the respective Asset Management Company through
                authorized national exchange settlement clearing systems (BSE StAR MF / NSE NMF II).
              </p>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                As a FINREV client, you retain 24/7 sovereign access to your holdings: independent verification
                via SEBI-mandated RTA platforms, alongside personalized portfolio reviews through our principal desk.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Direct investor name on individual AMC folios",
                  "Direct bank redemption proceeds payout",
                  "Consolidated CAS statements via NSDL & CDSL",
                  "Direct ARN-195797 distributor stewardship",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-[var(--color-text-primary)] font-medium">
                    <CheckCircle2 size={14} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Investor Statement Desk */}
            <div className="lg:col-span-5 bg-[var(--color-surface-canvas)] p-6 rounded-[4px] border border-[var(--color-border-subtle)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-[4px] bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0">
                    <FileText size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                      Consolidated Portfolio Statement (CAS)
                    </h3>
                    <span className="text-[11px] text-[var(--color-text-muted)] font-mono">
                      Investor Servicing Desk
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Request an updated Consolidated Account Statement (CAS), capital gains tax statement for ITR filing,
                  or nomination change verification directly through founder Panchanan Kumar.
                </p>

                <div className="flex flex-col gap-2 text-xs text-[var(--color-text-secondary)] mb-5">
                  <span className="flex items-center gap-2">
                    <Phone size={12} className="text-[var(--color-secondary)]" />
                    <span className="font-semibold">{CONTACT.phone}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail size={12} className="text-[var(--color-secondary)]" />
                    <span className="font-semibold">{CONTACT.email}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Building2 size={12} className="text-[var(--color-secondary)]" />
                    <span>AMFI ARN-195797</span>
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full py-3 px-4 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white text-xs font-semibold uppercase tracking-wider rounded-[4px] text-center transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Contact Investor Desk</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Official External RTA Portals */}
        <div className="mb-10">
          <div className="max-w-2xl mb-6">
            <SectionLabel>Direct Registrar Verification</SectionLabel>
            <h2
              className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mt-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              SEBI-Regulated Registrar Portals
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1 leading-relaxed">
              Investors may independently authenticate and download portfolio statements or execute transactions directly on official registrar platforms using their registered PAN and OTP credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {OFFICIAL_EXTERNAL_PORTALS.map((portal) => (
              <div
                key={portal.name}
                className="bg-white rounded-[4px] p-6 border border-[var(--color-border-subtle)] hover:border-[var(--color-secondary)] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-secondary)]">
                      {portal.badge}
                    </span>
                    <span className="text-[10px] text-[var(--color-text-muted)] flex items-center gap-1 font-mono">
                      External <ExternalLink size={10} />
                    </span>
                  </div>

                  <h3
                    className="text-base font-bold text-[var(--color-text-primary)] mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {portal.name}
                  </h3>
                  <span className="text-xs text-[var(--color-text-muted)] block mb-3 font-medium">
                    {portal.operator}
                  </span>

                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {portal.description}
                  </p>
                </div>

                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-3 border-t border-[var(--color-border-subtle)] inline-flex items-center justify-between text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors min-h-[40px]"
                >
                  <span>Open {portal.name}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Governance Disclosure */}
        <div className="p-4 sm:p-5 rounded-[4px] bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[var(--color-text-primary)]">Regulatory Disclosure:</strong> FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
            External portal links provided redirect to independent SEBI-regulated Registrar and Transfer Agent (RTA) platforms.
            FINREV does not host or store investor login credentials. Always confirm secure SSL certificates (https://) before entering your PAN or banking credentials on any third-party portal.
          </p>
        </div>
      </Container>
    </div>
  );
}
