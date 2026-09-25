"use client";

import React from "react";
import { formatExactINR, formatINR } from "@/lib/calculators/formatters";

// ------------------------------------------------------------
// Primary Highlight Result Card
// ------------------------------------------------------------
interface PrimaryResultProps {
  label: string;
  value: number;
  subValueLabel?: string;
  isCurrency?: boolean;
  valuePrefix?: string;
  valueSuffix?: string;
  variant?: "emerald" | "navy" | "amber";
}

export function PrimaryResultCard({
  label,
  value,
  subValueLabel,
  isCurrency = true,
  valuePrefix = "",
  valueSuffix = "",
  variant = "emerald",
}: PrimaryResultProps) {
  const textColor =
    variant === "emerald"
      ? "text-[var(--color-secondary)]"
      : variant === "amber"
      ? "text-[#b8860b]"
      : "text-[var(--color-primary)]";

  const displayVal = isCurrency
    ? formatExactINR(value)
    : `${valuePrefix}${value.toLocaleString("en-IN")}${valueSuffix}`;

  return (
    <div className="pb-4 border-b border-[var(--color-border-subtle)]">
      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-secondary)] block">
        {label}
      </span>
      <p
        className={`text-3xl sm:text-4xl font-extrabold ${textColor} mt-1`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {displayVal}
      </p>
      {subValueLabel && (
        <p className="text-xs text-[var(--color-text-muted)] mt-1">
          {subValueLabel}
        </p>
      )}
      {isCurrency && (
        <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5 font-medium">
          Approx. {formatINR(value)}
        </p>
      )}
    </div>
  );
}

// ------------------------------------------------------------
// Metric Card
// ------------------------------------------------------------
interface MetricCardProps {
  label: string;
  value: number | string;
  subtext?: string;
  isCurrency?: boolean;
  variant?: "canvas" | "emerald" | "amber" | "navy";
}

export function MetricCard({
  label,
  value,
  subtext,
  isCurrency = true,
  variant = "canvas",
}: MetricCardProps) {
  const bgClass =
    variant === "emerald"
      ? "bg-[var(--color-emerald-subtle)] border-[var(--color-border-strong)]"
      : variant === "amber"
      ? "bg-[var(--color-amber-subtle)] border-[#fde68a]"
      : variant === "navy"
      ? "bg-[var(--color-primary)]/5 border-[var(--color-border-subtle)]"
      : "bg-[var(--color-surface-canvas)] border-[var(--color-border-subtle)]";

  const textValColor =
    variant === "emerald"
      ? "text-[var(--color-secondary-500)]"
      : variant === "amber"
      ? "text-[var(--color-tertiary)]"
      : variant === "navy"
      ? "text-[var(--color-primary)]"
      : "text-[var(--color-text-primary)]";

  const display = typeof value === "number" ? (isCurrency ? formatExactINR(value) : value.toLocaleString("en-IN")) : value;

  return (
    <div className={`p-3.5 rounded-xl border ${bgClass} transition-colors`}>
      <span className="text-[11px] text-[var(--color-text-muted)] font-medium block">
        {label}
      </span>
      <span
        className={`text-base sm:text-lg font-bold ${textValColor} block mt-0.5 truncate`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {display}
      </span>
      {subtext && (
        <span className="text-[10px] text-[var(--color-text-muted)] block mt-0.5">
          {subtext}
        </span>
      )}
    </div>
  );
}

// ------------------------------------------------------------
// Split Ratio Bar
// ------------------------------------------------------------
interface SplitRatioBarProps {
  leftLabel: string;
  leftPercent: number;
  rightLabel: string;
  rightPercent: number;
  leftColor?: string;
  rightColor?: string;
}

export function SplitRatioBar({
  leftLabel,
  leftPercent,
  rightLabel,
  rightPercent,
  leftColor = "bg-[var(--color-primary)]",
  rightColor = "bg-[var(--color-secondary)]",
}: SplitRatioBarProps) {
  const safeLeft = Math.max(0, Math.min(100, Math.round(leftPercent)));
  const safeRight = Math.max(0, Math.min(100, 100 - safeLeft));

  return (
    <div className="flex flex-col gap-1.5 my-4">
      <div className="flex justify-between text-xs font-semibold text-[var(--color-text-muted)]">
        <span>
          {leftLabel} ({safeLeft}%)
        </span>
        <span>
          {rightLabel} ({safeRight}%)
        </span>
      </div>
      <div className="w-full h-3 rounded-full overflow-hidden flex bg-[var(--color-surface-low)]">
        <div
          className={`${leftColor} h-full transition-all duration-300`}
          style={{ width: `${safeLeft}%` }}
        />
        <div
          className={`${rightColor} h-full transition-all duration-300`}
          style={{ width: `${safeRight}%` }}
        />
      </div>
    </div>
  );
}
