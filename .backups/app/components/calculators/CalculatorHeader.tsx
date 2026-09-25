"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface CalculatorHeaderProps {
  category: string;
  categoryLabel: string;
  title: string;
  subtitle: string;
}

export function CalculatorHeader({
  categoryLabel,
  title,
  subtitle,
}: CalculatorHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-5">
        <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/tools" className="hover:text-[var(--color-text-primary)] transition-colors">
          Tools
        </Link>
        <span>/</span>
        <span className="text-[var(--color-secondary)]">{categoryLabel}</span>
        <span>/</span>
        <span className="text-[var(--color-text-primary)] truncate max-w-[200px]">{title}</span>
      </nav>

      <SectionLabel>{categoryLabel} Simulator</SectionLabel>
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h1>
      <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
