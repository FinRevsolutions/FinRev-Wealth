"use client";

import React from "react";

// ------------------------------------------------------------
// Currency Input with Synchronized Range Slider
// ------------------------------------------------------------
interface CurrencyInputProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  sliderMin?: number;
  sliderMax?: number;
  sliderStep?: number;
  onChange: (val: number) => void;
  helperMin?: string;
  helperMid?: string;
  helperMax?: string;
}

export function CurrencyInput({
  id,
  label,
  value,
  min,
  max,
  step = 500,
  sliderMin,
  sliderMax,
  sliderStep,
  onChange,
  helperMin,
  helperMid,
  helperMax,
}: CurrencyInputProps) {
  const sMin = sliderMin ?? min;
  const sMax = sliderMax ?? max;
  const sStep = sliderStep ?? step;

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]"
        >
          {label}
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-[var(--color-text-muted)]">
            ₹
          </span>
          <input
            id={id}
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => {
              const parsed = Number(e.target.value);
              onChange(isNaN(parsed) ? min : Math.min(max, Math.max(min, parsed)));
            }}
            className="w-36 sm:w-44 pl-7 pr-3 min-h-[40px] text-right font-bold text-base text-[var(--color-secondary)] bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          />
        </div>
      </div>
      <input
        type="range"
        min={sMin}
        max={sMax}
        step={sStep}
        value={Math.min(sMax, Math.max(sMin, value))}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
      />
      {(helperMin || helperMid || helperMax) && (
        <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
          <span>{helperMin || `₹${sMin.toLocaleString("en-IN")}`}</span>
          {helperMid && <span>{helperMid}</span>}
          <span>{helperMax || `₹${sMax.toLocaleString("en-IN")}`}</span>
        </div>
      )}
    </div>
  );
}

// ------------------------------------------------------------
// Percentage Input with Synchronized Range Slider
// ------------------------------------------------------------
interface PercentageInputProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (val: number) => void;
  helperMin?: string;
  helperMid?: string;
  helperMax?: string;
}

export function PercentageInput({
  id,
  label,
  value,
  min,
  max,
  step = 0.5,
  onChange,
  helperMin,
  helperMid,
  helperMax,
}: PercentageInputProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]"
        >
          {label}
        </label>
        <div className="relative">
          <input
            id={id}
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => {
              const parsed = Number(e.target.value);
              onChange(isNaN(parsed) ? min : Math.min(max, Math.max(min, parsed)));
            }}
            className="w-24 px-3 min-h-[40px] text-right font-bold text-base text-[var(--color-text-primary)] bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--color-text-muted)]">
            %
          </span>
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
      />
      {(helperMin || helperMid || helperMax) && (
        <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
          <span>{helperMin || `${min}%`}</span>
          {helperMid && <span>{helperMid}</span>}
          <span>{helperMax || `${max}%`}</span>
        </div>
      )}
    </div>
  );
}

// ------------------------------------------------------------
// Duration / Horizon Input with Slider
// ------------------------------------------------------------
interface DurationInputProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (val: number) => void;
  helperMin?: string;
  helperMid?: string;
  helperMax?: string;
}

export function DurationInput({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  unit = "Yr",
  onChange,
  helperMin,
  helperMid,
  helperMax,
}: DurationInputProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]"
        >
          {label}
        </label>
        <div className="relative">
          <input
            id={id}
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => {
              const parsed = Number(e.target.value);
              onChange(isNaN(parsed) ? min : Math.min(max, Math.max(min, parsed)));
            }}
            className="w-24 px-3 min-h-[40px] text-right font-bold text-base text-[var(--color-text-primary)] bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--color-text-muted)]">
            {unit}
          </span>
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
      />
      {(helperMin || helperMid || helperMax) && (
        <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
          <span>{helperMin || `${min} ${unit}`}</span>
          {helperMid && <span>{helperMid}</span>}
          <span>{helperMax || `${max} ${unit}`}</span>
        </div>
      )}
    </div>
  );
}

// ------------------------------------------------------------
// Select Dropdown Input
// ------------------------------------------------------------
interface SelectInputProps {
  id: string;
  label: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (val: string) => void;
}

export function SelectInput({
  id,
  label,
  value,
  options,
  onChange,
}: SelectInputProps) {
  return (
    <div className="flex items-center justify-between">
      <label
        htmlFor={id}
        className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 min-h-[40px] text-xs font-bold text-[var(--color-text-primary)] bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)] cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
