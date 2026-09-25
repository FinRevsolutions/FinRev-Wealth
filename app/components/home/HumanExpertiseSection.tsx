import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Phone, Mail } from "lucide-react";
import { REGULATORY, CONTACT } from "@/lib/constants";

export function HumanExpertiseSection() {
  return (
    <section
      className="py-16 md:py-24 bg-[var(--color-surface-canvas)] border-b border-[var(--color-border-subtle)]"
      aria-label="Human Expertise & Governance"
    >
      <div className="container-page">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
              HUMAN EXPERTISE & GOVERNANCE
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.14]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Financial decisions are personal. The platform supporting them should be clear.
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed font-normal">
            Technology can organize the numbers. Experience puts them into context. We believe in direct client relationships built on transparency, disciplined asset allocation, and multi-decade accountability.
          </p>
        </div>

        {/* Editorial Profile Card (No Generic Template / No Cards-Within-Cards) */}
        <div className="bg-white border border-[var(--color-border-strong)] rounded-[4px] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Authentic Photograph & Verified Regulatory Identification (4 cols) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-5 pb-6 sm:pb-0 lg:border-r border-[var(--color-border-subtle)] lg:pr-8">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-[4px] overflow-hidden border border-[var(--color-border-strong)] shrink-0 shadow-sm">
                <Image
                  src="/brand/founder-panchanan-kumar.jpg"
                  alt="PANCHANAN KUMAR — AMFI Registered Mutual Fund Distributor ARN-195797"
                  fill
                  className="object-cover object-top"
                  sizes="150px"
                />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[var(--color-primary)] tracking-tight">
                  PANCHANAN KUMAR
                </div>
                <div className="text-xs font-semibold text-[var(--color-secondary)] mt-0.5 uppercase tracking-wider">
                  AMFI Registered Mutual Fund Distributor
                </div>
                <div className="inline-flex items-center gap-1.5 mt-2.5 px-2.5 py-1 bg-[var(--color-surface-canvas)] border border-[var(--color-border-strong)] rounded-[3px] text-xs font-mono font-bold text-[var(--color-primary)]">
                  <ShieldCheck size={13} className="text-[var(--color-secondary)]" />
                  <span>ARN: {REGULATORY.arnNumber}</span>
                </div>
              </div>
            </div>

            {/* Ethos, Practice Standards & Action (8 cols) */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)] block mb-2">
                  Distribution Philosophy & Fiduciary Discipline
                </span>
                <blockquote className="text-base sm:text-lg text-[var(--color-primary)] font-medium leading-relaxed border-l-2 border-[var(--color-finrev-gold)] pl-4 mb-6 italic">
                  &ldquo;Sustainable wealth is not built through market speculation or chasing quarterly trends. It is forged through disciplined asset allocation, downside protection, and unbroken multi-decade compounding.&rdquo;
                </blockquote>

                {/* 3 Core Practice Standards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 mb-6 border-b border-[var(--color-border-subtle)]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-[var(--color-primary)] block">
                        Direct AMC Holding
                      </span>
                      <span className="text-[11px] text-[var(--color-text-secondary)] mt-0.5 block leading-snug">
                        100% of mutual fund units held directly in your name across respective AMCs.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-[var(--color-primary)] block">
                        AMFI Registered
                      </span>
                      <span className="text-[11px] text-[var(--color-text-secondary)] mt-0.5 block leading-snug">
                        Regulated under ARN-195797 in strict accordance with SEBI/AMFI guidelines.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-[var(--color-primary)] block">
                        Objective Alignment
                      </span>
                      <span className="text-[11px] text-[var(--color-text-secondary)] mt-0.5 block leading-snug">
                        Every allocation reverse-engineered strictly around verified personal milestones.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Access Row */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)]">
                  <a
                    href={CONTACT.phoneTel}
                    className="flex items-center gap-1.5 font-medium hover:text-[var(--color-secondary)] transition-colors"
                  >
                    <Phone size={13} className="text-[var(--color-secondary)]" />
                    <span className="font-mono">{CONTACT.phone}</span>
                  </a>
                  <a
                    href={CONTACT.emailHref}
                    className="flex items-center gap-1.5 font-medium hover:text-[var(--color-secondary)] transition-colors"
                  >
                    <Mail size={13} className="text-[var(--color-secondary)]" />
                    <span>{CONTACT.email}</span>
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-white text-xs font-semibold rounded-[3px] hover:bg-[var(--color-secondary)] transition-colors shadow-sm"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
