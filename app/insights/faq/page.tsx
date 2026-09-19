import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, ShieldCheck, CheckCircle2, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { CONTACT, REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Investor FAQ — Frequently Asked Questions about FINREV & Investing",
  "Find answers to common questions about mutual fund distribution, ARN-195797 compliance, SIP mechanics, portfolio review, and safety protocols with FINREV SOLUTIONS.",
  "/insights/faq"
);

const FAQ_SECTIONS = [
  {
    category: "Regulatory & Distributor Standing",
    faqs: [
      {
        q: "What is FINREV SOLUTIONS' official regulatory status?",
        a: "FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor holding ARN-195797, founded by Panchanan Kumar. We operate in compliance with SEBI (Mutual Funds) Regulations, 1996 and AMFI Code of Conduct.",
      },
      {
        q: "How does a Mutual Fund Distributor differ from a SEBI Registered Investment Advisor (RIA)?",
        a: "A Mutual Fund Distributor executes transactions in regular plans and earns distribution commissions paid directly by Asset Management Companies (AMCs). An RIA charges direct consultation fees to clients and advises on direct plans. Distributors provide implementation, ongoing operational support, and scheme distribution under AMFI guidelines.",
      },
      {
        q: "Are client mutual fund investments held by FINREV?",
        a: "Never. All investor funds are transferred directly through regulated exchange clearing rails (BSE StAR MF / NSE NMF II) to the respective Asset Management Companies. Your mutual fund units are registered in your name under your unique folio numbers and PAN. FINREV has zero access to your money.",
      },
    ],
  },
  {
    category: "Systematic Investment Plans (SIP) & Execution",
    faqs: [
      {
        q: "How do I start an SIP through FINREV?",
        a: "Onboarding is 100% paperless. You provide your PAN, Aadhaar, and bank account details. Once digital KYC is completed, you sign an electronic mandate (e-NACH / OTM) authorizing your bank to debit your chosen SIP amount on your preferred monthly date.",
      },
      {
        q: "Can I stop or pause my SIP at any time?",
        a: "Yes. SIPs have zero lock-ins or cancellation penalties (except for ELSS tax saving funds which have a statutory 3-year holding period). You can pause your SIP for up to 6 months or terminate it at any time with 10 days notice before the next debit date.",
      },
      {
        q: "What is a Step-Up SIP?",
        a: "A Step-Up SIP is an automated mandate where your monthly investment amount increases by a specified percentage (e.g. 10%) or fixed amount (e.g. ₹1,000) every year, keeping your savings aligned with your annual salary increments.",
      },
    ],
  },
  {
    category: "Safety, Security & Account Access",
    faqs: [
      {
        q: "What happens if FINREV ceases operations in the future?",
        a: "Your investments remain 100% secure and untouched. Because all units are held directly with the respective AMCs (ICICI, HDFC, SBI, Nippon, etc.) under your PAN, you can continue managing, viewing, or redeeming your investments directly through AMC websites or RTAs (CAMS / KFintech) without interruption.",
      },
      {
        q: "How do I track all my investments in one place?",
        a: "You can download your free monthly Consolidated Account Statement (CAS) from CAMS or KFintech, or view your unified portfolio valuation across all AMCs through our digital investor portal.",
      },
      {
        q: "Is nomination mandatory for mutual fund folios?",
        a: "Yes. Per SEBI regulations, nominating up to 3 beneficiaries with percentage allocation is mandatory for all mutual fund folios to ensure hassle-free transmission of assets to your family members.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/insights" className="hover:text-[var(--color-text-primary)] transition-colors">Insights</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">FAQ</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] text-xs font-bold rounded border border-[var(--color-border-strong)] mb-3">
            <HelpCircle size={14} />
            <span>Investor Knowledge Repository</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Clear, transparent answers regarding our AMFI distributor credentials, investment safety,
            SIP mechanics, and digital account management.
          </p>
        </div>

        {/* Categorized FAQs */}
        <div className="flex flex-col gap-12 mb-16 max-w-4xl">
          {FAQ_SECTIONS.map((sec) => (
            <div key={sec.category}>
              <SectionLabel>{sec.category}</SectionLabel>
              <div className="flex flex-col gap-4 mt-4">
                {sec.faqs.map((f) => (
                  <div key={f.q} className="p-6 bg-white rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
                    <h3 className="text-base font-bold text-[var(--color-text-primary)] flex items-start gap-2.5 mb-2 leading-snug">
                      <HelpCircle size={17} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                      <span>{f.q}</span>
                    </h3>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-7">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary-fixed)] block mb-1">
              Have More Questions?
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Speak Directly with Panchanan Kumar
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              We are happy to answer any questions regarding fund selection, regulatory guidelines, or onboarding.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Contact Investor Desk</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks.
            Read all scheme related documents carefully before investing. FINREV SOLUTIONS is an AMFI-registered
            Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
