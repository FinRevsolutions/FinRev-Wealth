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
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
          {label}
        </span>
        <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">
          Illustrative Projection
        </span>
      </div>
      <p
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold ${textColor} mt-1`}
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
      ? "bg-white border-[var(--color-border-strong)]"
      : variant === "amber"
      ? "bg-white border-[#fde68a]"
      : variant === "navy"
      ? "bg-[var(--color-primary)]/5 border-[var(--color-border-subtle)]"
      : "bg-white border-[var(--color-border-subtle)]";

  const textValColor =
    variant === "emerald"
      ? "text-[var(--color-secondary)]"
      : variant === "amber"
      ? "text-[var(--color-tertiary)]"
      : variant === "navy"
      ? "text-[var(--color-primary)]"
      : "text-[var(--color-text-primary)]";

  const display = typeof value === "number" ? (isCurrency ? formatExactINR(value) : value.toLocaleString("en-IN")) : value;

  return (
    <div className={`p-3.5 rounded-[4px] border ${bgClass} transition-colors`}>
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
    <div className="flex flex-col gap-1.5 my-3">
      <div className="flex justify-between text-xs font-semibold text-[var(--color-text-muted)]">
        <span>
          {leftLabel}: <strong className="text-[var(--color-text-primary)]">{safeLeft}%</strong>
        </span>
        <span>
          {rightLabel}: <strong className="text-[var(--color-text-primary)]">{safeRight}%</strong>
        </span>
      </div>
      <div className="w-full h-2 rounded-[2px] overflow-hidden flex bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
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
