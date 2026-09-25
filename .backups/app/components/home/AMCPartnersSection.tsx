import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const AMC_PARTNERS = [
  { name: "SBI Mutual Fund" },
  { name: "HDFC Mutual Fund" },
  { name: "ICICI Prudential MF" },
  { name: "Kotak Mutual Fund" },
  { name: "Axis Mutual Fund" },
  { name: "Nippon India MF" },
  { name: "DSP Mutual Fund" },
  { name: "Aditya Birla Sun Life" },
  { name: "Canara Robeco MF" },
  { name: "Mirae Asset MF" },
  { name: "Tata Mutual Fund" },
  { name: "UTI Mutual Fund" },
];

export function AMCPartnersSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-[var(--color-border-subtle)]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Ecosystem & Access</SectionLabel>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] tracking-tight mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              AMC Partners We Work With.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mt-2 leading-relaxed">
              Access to mutual fund solutions across multiple Asset Management Companies. All folios held directly in your name with respective AMCs.
            </p>
          </div>
          <Link
            href="/investments/mutual-funds"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
          >
            <span>View Mutual Fund Solutions</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Clean Logo Rail — no per-card hover shadows, just names on a ruled grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-l border-[var(--color-border-subtle)]">
          {AMC_PARTNERS.map((amc) => (
            <div
              key={amc.name}
              className="border-b border-r border-[var(--color-border-subtle)] px-4 py-5 flex items-center justify-center"
            >
              <p className="text-xs font-semibold text-[var(--color-primary)] text-center leading-snug">
                {amc.name}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0" />
            <span>Direct Investor Ownership · Zero Pool Accounts · Regulated by SEBI & AMFI</span>
          </div>
          <span className="text-[11px]">
            Logos & trademarks belong to respective Asset Management Companies
          </span>
        </div>
      </Container>
    </section>
  );
}
