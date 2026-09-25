import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const AMC_LIST = [
  { name: "SBI Mutual Fund", established: "Est. 1987" },
  { name: "HDFC Mutual Fund", established: "Est. 1999" },
  { name: "ICICI Prudential MF", established: "Est. 1993" },
  { name: "Kotak Mutual Fund", established: "Est. 1998" },
  { name: "Axis Mutual Fund", established: "Est. 2009" },
  { name: "Nippon India MF", established: "Est. 1995" },
  { name: "DSP Mutual Fund", established: "Est. 1996" },
  { name: "Aditya Birla Sun Life", established: "Est. 1994" },
  { name: "Canara Robeco MF", established: "Est. 1993" },
  { name: "Mirae Asset MF", established: "Est. 2008" },
  { name: "Tata Mutual Fund", established: "Est. 1994" },
  { name: "UTI Mutual Fund", established: "Est. 1964" },
  { name: "Bandhan Mutual Fund", established: "Est. 2000" },
  { name: "Motilal Oswal AMC", established: "Est. 2008" },
  { name: "Franklin Templeton MF", established: "Est. 1996" },
  { name: "Invesco Mutual Fund", established: "Est. 2006" },
  { name: "Sundaram Mutual Fund", established: "Est. 1996" },
  { name: "Edelweiss Mutual Fund", established: "Est. 2009" },
];

export function AMCPartnersSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[var(--color-border-subtle)]" aria-label="AMC Partners">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-4 border-b border-[var(--color-border-strong)] gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                Institutional Access
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.15]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              AMC Partners We Work With.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
              Access to mutual fund solutions across multiple Asset Management Companies. All folios are held directly with respective fund houses with zero pooled account structures.
            </p>
          </div>
          <Link
            href="/investments/mutual-funds"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
          >
            <span>Explore Mutual Fund Solutions</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Clean Logo / Fund House Plate (Hairline Rules, Consistent Grid, No Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-l border-[var(--color-border-strong)] bg-white">
          {AMC_LIST.map((amc) => (
            <div
              key={amc.name}
              className="border-b border-r border-[var(--color-border-subtle)] p-4 sm:p-5 flex flex-col items-center justify-center min-h-[96px] text-center hover:bg-[var(--color-surface-canvas)] transition-colors"
            >
              <span className="text-xs sm:text-sm font-bold text-[var(--color-primary)] leading-tight tracking-tight">
                {amc.name}
              </span>
              <span className="text-[10px] font-mono text-[var(--color-text-muted)] mt-1">
                {amc.established}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Compliance & Disclosure Notice */}
        <div className="pt-6 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0" />
            <span>Direct Investor Holding · Non-Custodial Distribution · Regulated by SEBI & AMFI</span>
          </div>
          <span className="text-[11px]">
            Brand names belong to respective Asset Management Companies. Listing does not imply exclusive commercial endorsement.
          </span>
        </div>
      </Container>
    </section>
  );
}
