"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { REGULATORY } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative w-full bg-[var(--color-surface-canvas)] pt-6 pb-10 md:pt-10 md:pb-14 border-b border-[var(--color-border-subtle)]">
      <div className="container-page flex flex-col gap-6 md:gap-8">
        {/* Top Editorial Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            {/* Regulatory Credential */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[var(--color-border-strong)]">
                <ShieldCheck size={13} className="text-[var(--color-secondary)] shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                  FINREV SOLUTIONS
                </span>
                <span className="text-[11px] text-[var(--color-text-muted)]">·</span>
                <span className="text-[11px] font-semibold text-[var(--color-secondary)]">
                  {REGULATORY.arnNumber}
                </span>
              </div>
              <span className="hidden sm:inline text-xs text-[var(--color-text-muted)]">
                AMFI Registered Mutual Fund Distributor
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[var(--color-primary)] leading-[1.12] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your Financial Journey.{" "}
              <span className="text-[var(--color-secondary)]">
                One Trusted Platform.
              </span>
            </h1>

            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              Investment, wealth planning and protection solutions designed around your financial goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 shrink-0 pb-1 w-full sm:w-auto">
            <Link
              href="/investments"
              className="inline-flex items-center justify-center gap-2 px-6 min-h-[44px] bg-[var(--color-primary)] text-white text-sm font-bold rounded-full hover:bg-[var(--color-secondary)] transition-colors w-full sm:w-auto"
            >
              <span>Explore Solutions</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 min-h-[44px] border border-[var(--color-border-strong)] bg-white text-[var(--color-primary)] text-sm font-bold rounded-full hover:border-[var(--color-secondary)] transition-colors w-full sm:w-auto"
            >
              <Phone size={14} className="text-[var(--color-secondary)]" />
              <span>Speak with an Expert</span>
            </Link>
          </div>
        </div>

        {/* Authentic Panchanan Kumar Panoramic Artwork */}
        <div className="relative w-full rounded-lg overflow-hidden border border-[var(--color-border-strong)] bg-[var(--color-primary)]">
          <div className="finrev-gold-line w-full" aria-hidden="true" />
          <div className="hidden md:block relative w-full aspect-[1024/383] max-h-[440px] lg:max-h-[460px]">
            <Image
              src="/images/hero-panchanan-kumar-banner.png"
              alt="FINREV SOLUTIONS — Panchanan Kumar Financial Planner"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </div>
          <div className="block md:hidden relative w-full aspect-[540/383]">
            <Image
              src="/images/hero-banner-mobile.png"
              alt="FINREV SOLUTIONS — Panchanan Kumar Financial Planner"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 540px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
