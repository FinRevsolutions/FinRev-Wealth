"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { REGULATORY } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative w-full bg-[var(--color-surface-canvas)] border-b border-[var(--color-border-subtle)] overflow-hidden">
      {/* Editorial Split Composition: Left 43-45% Content, Right 55-57% Visual reaching viewport edge */}
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        {/* LEFT COLUMN: Editorial Typography, Action & Domain Descriptor */}
        <div className="w-full lg:w-[45%] xl:w-[43%] flex flex-col justify-center py-8 sm:py-10 lg:py-14 xl:py-16 px-4 sm:px-6 md:px-8 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+2rem))] lg:pr-8 xl:pr-12 shrink-0">
          {/* Subtle FINREV Gold Signature: 1px Brand Accent Rule */}
          <div
            className="w-8 h-[1.5px] bg-[var(--color-finrev-gold)] mb-3 sm:mb-3.5"
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

          {/* 02. Primary Headline: High Editorial Contrast (Deep Navy + Corporate Alpine Teal) */}
          <h1
            className="mt-3 sm:mt-3.5 font-extrabold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block text-[var(--color-primary)]">
              Your Financial Journey.
            </span>
            <span className="block text-[var(--color-secondary)] mt-1 lg:mt-1.5 font-bold">
              One Trusted Platform.
            </span>
          </h1>

          {/* 03. Supporting Copy: Measured Institutional Articulation */}
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

        {/* RIGHT COLUMN: Authentic Panchanan Kumar Visual Anchor Bleeding to Viewport Edge */}
        <div className="w-full lg:w-[55%] xl:w-[57%] relative bg-[#071A2A] lg:border-l border-[var(--color-border-subtle)] overflow-hidden shrink-0">
          {/* Desktop & Tablet Panoramic Visual Plate */}
          <div className="hidden sm:block relative w-full h-[320px] md:h-[380px] lg:h-full lg:min-h-[500px] xl:min-h-[540px]">
            <Image
              src="/images/hero-panchanan-kumar-banner.png"
              alt="FINREV SOLUTIONS — Panchanan Kumar, AMFI Registered Mutual Fund Distributor ARN-195797"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[78%_center] lg:object-[80%_center]"
            />
          </div>

          {/* Mobile Viewports: Authentic Framing Preserving Founder Integrity */}
          <div className="block sm:hidden relative w-full h-[220px]">
            <Image
              src="/images/hero-banner-mobile.png"
              alt="FINREV SOLUTIONS — Panchanan Kumar, AMFI Registered Mutual Fund Distributor ARN-195797"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[72%_center]"
            />
          </div>

          {/* Factual Founder Identification — Restrained Institutional Tag */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 bg-[#071A2A] border-l-2 border-[var(--color-finrev-gold)] pl-3.5 pr-4 py-2 shadow-md">
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-white font-mono leading-tight">
              PANCHANAN KUMAR
            </div>
            <div className="text-[10px] text-[#9FB3C8] tracking-wider uppercase font-medium leading-tight mt-1">
              Mutual Fund Distributor
            </div>
            <div className="text-[10px] font-mono text-[var(--color-finrev-gold)] font-bold tracking-wider leading-tight mt-0.5">
              {REGULATORY.arnNumber}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
