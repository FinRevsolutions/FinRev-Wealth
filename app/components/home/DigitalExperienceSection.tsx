import Link from "next/link";
import { ArrowRight, Smartphone, ShieldCheck, CheckCircle2, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const DIGITAL_BENEFITS = [
  "Consolidated valuation across all Asset Management Companies",
  "Direct investor folios held with respective AMCs (Zero pool accounts)",
  "Automated monthly bank auto-debit tracking & receipts",
  "Capital gains statements & tax-ready reports for income tax filing",
  "One-click portfolio review requests and rebalancing recommendations",
];

export function DigitalExperienceSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[var(--color-border-subtle)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <SectionLabel>Institutional Oversight</SectionLabel>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Digital Investor Experience
              </h2>
            </div>

            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
              Managing investments across multiple fund houses should not mean juggling disconnected portals.
              FINREV provides a centralized, transparent digital overview of your entire family investment
              portfolio with institutional security.
            </p>

            <div className="flex flex-col gap-3 py-2">
              {DIGITAL_BENEFITS.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs text-[var(--color-text-secondary)]">
                  <CheckCircle2 size={16} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href="/client/login"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white text-xs font-bold rounded-lg hover:bg-[var(--color-inverse-surface)] transition-colors"
              >
                <span>Access Client Portal</span>
                <ArrowRight size={14} />
              </Link>
              <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1.5">
                <Lock size={13} className="text-[var(--color-secondary)]" />
                Bank-Grade 256-Bit SSL
              </span>
            </div>
          </div>

          {/* Right Column: Clean Institutional Portal Mockup (Without fake client data or invented returns) */}
          <div className="lg:col-span-6">
            <div className="bg-[var(--color-surface-canvas)] rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card-hover)] overflow-hidden">
              {/* Portal Header */}
              <div className="bg-[var(--color-primary)] px-5 py-3.5 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Smartphone size={16} className="text-[var(--color-secondary-fixed)]" />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    FINREV Consolidated Investor Desk
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-white/70 bg-white/10 px-2 py-0.5 rounded">
                  Live Unified View
                </span>
              </div>

              {/* Portal Content Demonstration */}
              <div className="p-6 flex flex-col gap-5">
                {/* 3 Metric Demonstrations */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-xl border border-[var(--color-border-subtle)]">
                    <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase block">
                      Multi-AMC View
                    </span>
                    <span className="text-sm font-bold text-[var(--color-text-primary)] block mt-0.5">
                      All Folios
                    </span>
                    <span className="text-[10px] text-[var(--color-secondary)] font-medium">Consolidated</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[var(--color-border-subtle)]">
                    <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase block">
                      Auto-Mandates
                    </span>
                    <span className="text-sm font-bold text-[var(--color-text-primary)] block mt-0.5">
                      Active SIPs
                    </span>
                    <span className="text-[10px] text-[var(--color-text-muted)]">Automated Bank Debit</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[var(--color-border-subtle)]">
                    <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase block">
                      Direct Statements
                    </span>
                    <span className="text-sm font-bold text-[var(--color-text-primary)] block mt-0.5">
                      Tax Ready
                    </span>
                    <span className="text-[10px] text-[var(--color-secondary)] font-medium">ITR Formatted</span>
                  </div>
                </div>

                {/* Sample Portfolio Asset Mix Preview */}
                <div className="p-4 bg-white rounded-xl border border-[var(--color-border-subtle)] flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[var(--color-text-primary)]">
                    <span>Illustrative Strategic Asset Partitioning</span>
                    <span className="text-[10px] text-[var(--color-secondary)] font-semibold">Risk Aligned</span>
                  </div>
                  <div className="w-full h-3 rounded-full overflow-hidden flex bg-[var(--color-surface-low)]">
                    <div className="bg-[var(--color-secondary)] h-full" style={{ width: "60%" }} title="Diversified Equity: 60%" />
                    <div className="bg-[var(--color-primary)] h-full" style={{ width: "25%" }} title="Balanced & Hybrid: 25%" />
                    <div className="bg-[var(--color-border-strong)] h-full" style={{ width: "15%" }} title="Fixed Income & Liquid: 15%" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[var(--color-text-muted)] font-medium pt-1">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />Diversified Equity</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />Hybrid Strategies</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[var(--color-border-strong)]" />Debt / Liquid</span>
                  </div>
                </div>

                {/* Sample Folio Transparency Note */}
                <div className="p-3.5 bg-[var(--color-emerald-subtle)] rounded-xl border border-[var(--color-border-strong)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[var(--color-secondary)] shrink-0" />
                    <span className="text-xs text-[var(--color-text-primary)] font-medium">
                      Direct investor folios mapped to ARN-195797
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[var(--color-secondary)] uppercase">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
