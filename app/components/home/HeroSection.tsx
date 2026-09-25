"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { REGULATORY } from "@/lib/constants";
import { FinancialArchitecture3D } from "@/components/home/FinancialArchitecture3D";

export function HeroSection() {
  return (
    <section className="relative w-full bg-[var(--color-surface-canvas)] border-b border-[var(--color-border-subtle)] overflow-hidden">
      {/* Immersive Editorial Split Composition: Left 45% Content, Right 55% 3D Financial Architecture */}
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        {/* LEFT COLUMN: Editorial Typography, Action & Domain Descriptor (45%) */}
        <div className="w-full lg:w-[45%] xl:w-[43%] flex flex-col justify-center py-10 sm:py-14 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+2rem))] lg:pr-8 xl:pr-12 shrink-0 z-10">
          {/* Subtle FINREV Gold Signature: 1.5px Precision Brand Accent Rule */}
          <div
            className="w-10 h-[1.5px] bg-[var(--color-finrev-gold)] mb-3.5 sm:mb-4"
            aria-hidden="true"
          />

          {/* 01. Small Eyebrow: AMFI Regulatory Credential */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
            <span className="font-bold text-[var(--color-primary)]">
              FINREV SOLUTIONS
            </span>
            <span
              className="text-[var(--color-finrev-gold)] select-none"
              aria-hidden="true"
            >
              •
            </span>
            <span className="text-[var(--color-text-muted)] text-[10.5px] sm:text-[11px]">
              AMFI REGISTERED MUTUAL FUND DISTRIBUTOR
            </span>
            <span
              className="text-[var(--color-finrev-gold)] select-none"
              aria-hidden="true"
            >
              •
            </span>
            <span className="font-mono font-bold text-[var(--color-secondary)]">
              {REGULATORY.arnNumber}
            </span>
          </div>

          {/* 02. Primary Headline: High Contrast Institutional Editorial Typography */}
          <h1
            className="mt-3.5 sm:mt-4 font-extrabold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block text-[var(--color-primary)]">
              Your Financial Journey.
            </span>
            <span className="block text-[var(--color-secondary)] mt-1 lg:mt-1.5 font-bold">
              One Trusted Platform.
            </span>
          </h1>

          {/* 03. Supporting Text: Measured Institutional Articulation */}
          <p className="mt-3.5 sm:mt-4 text-base sm:text-[17px] text-[var(--color-text-secondary)] leading-relaxed max-w-xl font-normal">
            Investment, wealth planning and protection solutions designed around your financial goals.
          </p>

          {/* 04. CTAs: Restrained, High-Contrast Action Pair */}
          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <Link
              href="/investments"
              className="inline-flex items-center justify-center gap-2.5 px-6 min-h-[46px] bg-[var(--color-primary)] text-white text-sm font-semibold rounded-[3px] hover:bg-[var(--color-primary-700)] transition-colors shadow-sm cursor-pointer group"
            >
              <span>Explore Solutions</span>
              <ArrowRight
                size={15}
                className="text-[var(--color-finrev-gold)] group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 min-h-[46px] border border-[var(--color-border-strong)] bg-white text-[var(--color-primary)] text-sm font-semibold rounded-[3px] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-colors shadow-sm cursor-pointer"
            >
              <Phone size={14} className="text-[var(--color-secondary)]" />
              <span>Speak with an Expert</span>
            </Link>
          </div>

          {/* 05. Factual Domain Descriptor: Clean Typographic Separator (Card-Free) */}
          <div className="pt-5 sm:pt-6 mt-6 sm:mt-7 border-t border-[var(--color-border-subtle)]">
            <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em]">
              <span className="text-[var(--color-primary)] font-bold">
                Investment
              </span>
              <span
                className="text-[var(--color-finrev-gold)] select-none text-[10px]"
                aria-hidden="true"
              >
                •
              </span>
              <span className="text-[var(--color-primary)] font-bold">
                Wealth
              </span>
              <span
                className="text-[var(--color-finrev-gold)] select-none text-[10px]"
                aria-hidden="true"
              >
                •
              </span>
              <span className="text-[var(--color-primary)] font-bold">
                Protection
              </span>
              <span
                className="text-[var(--color-finrev-gold)] select-none text-[10px]"
                aria-hidden="true"
              >
                •
              </span>
              <span className="text-[var(--color-primary)] font-bold">
                Alternative Assets
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive 3D Financial Architecture (55%) */}
        <div className="w-full lg:w-[55%] xl:w-[57%] relative bg-[#071A2A] lg:border-l border-[var(--color-border-subtle)] overflow-hidden shrink-0 flex items-stretch">
          <FinancialArchitecture3D />
        </div>
      </div>
    </section>
  );
}
