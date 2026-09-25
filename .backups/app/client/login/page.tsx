import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, ExternalLink, FileText, Phone, Mail, CheckCircle2, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { BRAND, CONTACT, REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Client Portal Gateway — Secure Investor Portfolio Access",
  "Access your mutual fund folios, consolidated account statements (CAS), and valuation reports securely through FINREV SOLUTIONS and official RTA portals.",
  "/client/login"
);

const OFFICIAL_EXTERNAL_PORTALS = [
  {
    name: "MF Central",
    operator: "Joint initiative of CAMS & KFintech",
    description: "Official single-window platform for portfolio tracking, CAS downloads, and service requests across all Indian AMCs.",
    url: "https://www.mfcentral.com",
    badge: "SEBI Mandated Platform",
  },
  {
    name: "myCAMS",
    operator: "Computer Age Management Services (CAMS)",
    description: "Access folios serviced by CAMS (HDFC, ICICI Prudential, SBI, Aditya Birla Sun Life, etc.).",
    url: "https://www.camsonline.com",
    badge: "Official RTA",
  },
  {
    name: "KFintech KPRISM",
    operator: "KFin Technologies Limited",
    description: "Access folios serviced by KFintech (Nippon India, Axis, UTI, Mirae Asset, etc.).",
    url: "https://mfs.kfintech.com",
    badge: "Official RTA",
  },
];

export default function ClientLoginPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Client Portal Gateway</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] text-xs font-bold rounded border border-[var(--color-border-strong)] mb-3">
            <Lock size={13} />
            <span>Secure Investor Gateway</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            FINREV Client Portal Gateway
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Access your investment portfolios, consolidated statements, and transaction records securely.
            In compliance with SEBI regulations, all mutual fund folios distributed under ARN-195797 are held
            directly with the respective Asset Management Companies.
          </p>
        </div>

        {/* Institutional Architecture Notice */}
        <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] p-8 md:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: How Your Data & Holdings Are Secured */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <SectionLabel>Direct Custody Architecture</SectionLabel>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Direct Folios. Zero Pool Account Risk.
              </h2>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                FINREV SOLUTIONS does not hold your investment money in pool accounts. Every rupee transacted
                moves directly from your verified bank account into your chosen Asset Management Company (AMC) via
                authorized settlement clearing houses (BSE StAR MF / NSE NMF II).
              </p>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                As a FINREV investor, you have dual access: 24/7 self-service through official RTA platforms,
                plus personalized portfolio review and scheme assistance through our dedicated investor desk.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Direct investor name on AMC folios",
                  "Direct bank account redemption payout",
                  "Consolidated CAS via NSDL & CDSL",
                  "ARN-195797 distributor mapping",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-[var(--color-text-primary)] font-medium">
                    <CheckCircle2 size={15} className="text-[var(--color-secondary)] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Desk Support & CAS Request */}
            <div className="lg:col-span-5 bg-[var(--color-surface-canvas)] p-7 rounded-2xl border border-[var(--color-border-subtle)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                      Request Portfolio Statement (CAS)
                    </h3>
                    <span className="text-[11px] text-[var(--color-text-muted)]">
                      FINREV Investor Servicing Desk
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Need an updated Consolidated Account Statement (CAS), capital gains tax statement for ITR filing,
                  or nomination change form? Reach out directly to founder Panchanan Kumar.
                </p>

                <div className="flex flex-col gap-2.5 text-xs text-[var(--color-text-secondary)] mb-6">
                  <span className="flex items-center gap-2">
                    <Phone size={13} className="text-[var(--color-secondary)]" />
                    <span className="font-semibold">{CONTACT.phone}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail size={13} className="text-[var(--color-secondary)]" />
                    <span className="font-semibold">{CONTACT.email}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Building2 size={13} className="text-[var(--color-secondary)]" />
                    <span>AMFI ARN-195797</span>
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full py-3 px-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)] text-white text-xs font-bold rounded-xl text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>Contact Investor Desk</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Official External RTA Portals (Explicitly Identified as External Services) */}
        <div className="mb-14">
          <div className="max-w-2xl mb-8">
            <SectionLabel>Official Registrars</SectionLabel>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mt-1.5" style={{ fontFamily: "var(--font-heading)" }}>
              Official External Investor Platforms
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1 leading-relaxed">
              You can independently log in to SEBI-regulated registrar portals at any time to verify holdings,
              initiate transactions, or download statements using your registered PAN.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICIAL_EXTERNAL_PORTALS.map((portal) => (
              <div
                key={portal.name}
                className="bg-white rounded-2xl p-7 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-border-strong)]">
                      {portal.badge}
                    </span>
                    <span className="text-[10px] text-[var(--color-text-muted)] flex items-center gap-1 font-mono">
                      External <ExternalLink size={10} />
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {portal.name}
                  </h3>
                  <span className="text-xs font-semibold text-[var(--color-text-muted)] block mb-3">
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
                  className="pt-4 border-t border-[var(--color-border-subtle)] inline-flex items-center justify-between text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                >
                  <span>Open {portal.name}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Important Regulatory Note:</strong> FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
            The external portal links provided above redirect to independent SEBI-regulated Registrar and Transfer Agent (RTA) services.
            FINREV does not operate or control third-party authentication infrastructure. Always verify URL security before entering credentials.
          </p>
        </div>
      </Container>
    </div>
  );
}
