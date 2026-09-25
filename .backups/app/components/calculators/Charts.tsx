"use client";

import React from "react";
import { formatINR } from "@/lib/calculators/formatters";

// ------------------------------------------------------------
// Pure SVG Growth Trajectory Area/Line Chart
// ------------------------------------------------------------
interface GrowthPoint {
  year: number;
  invested?: number;
  value: number;
}

interface GrowthChartSVGProps {
  data: GrowthPoint[];
  title?: string;
  subtitle?: string;
}

export function GrowthChartSVG({
  data,
  title = "Wealth Accumulation Trajectory",
  subtitle = "Projected corpus growth over your chosen investment horizon",
}: GrowthChartSVGProps) {
  if (!data || data.length === 0) return null;

  const width = 600;
  const height = 240;
  const padding = { top: 20, right: 25, bottom: 35, left: 65 };

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxValue = Math.max(...data.map((d) => Math.max(d.value, d.invested || 0)), 1000);
  const minYear = data[0].year;
  const maxYear = data[data.length - 1].year;
  const yearSpan = Math.max(1, maxYear - minYear);

  const getX = (year: number) => padding.left + ((year - minYear) / yearSpan) * chartWidth;
  const getY = (val: number) => padding.top + chartHeight - (val / maxValue) * chartHeight;

  // Generate SVG path for portfolio value
  const valuePoints = data.map((d) => `${getX(d.year)},${getY(d.value)}`);
  const valueLinePath = `M ${valuePoints.join(" L ")}`;
  const valueAreaPath = `M ${getX(data[0].year)},${padding.top + chartHeight} L ${valuePoints.join(" L ")} L ${getX(data[data.length - 1].year)},${padding.top + chartHeight} Z`;

  // Generate SVG path for invested capital if available
  const hasInvested = data.some((d) => d.invested !== undefined);
  const investedPoints = hasInvested ? data.map((d) => `${getX(d.year)},${getY(d.invested || 0)}`) : [];
  const investedLinePath = hasInvested ? `M ${investedPoints.join(" L ")}` : "";

  // Y-axis ticks
  const yTicks = [0, 0.33, 0.66, 1].map((pct) => ({
    val: Math.round(maxValue * pct),
    y: padding.top + chartHeight - pct * chartHeight,
  }));

  // X-axis ticks (select 4-5 evenly spaced points)
  const xTicks = data.filter(
    (_, idx) =>
      idx === 0 ||
      idx === data.length - 1 ||
      idx === Math.floor(data.length / 2) ||
      idx === Math.floor(data.length / 4) ||
      idx === Math.floor((3 * data.length) / 4)
  );

  return (
    <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] p-6 md:p-8 shadow-[var(--shadow-card)] mb-10">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--color-border-subtle)]">
        <div>
          <h3 className="text-base font-bold text-[var(--color-text-primary)]">
            {title}
          </h3>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
            {subtitle}
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[var(--color-secondary)]" />
            <span className="text-[var(--color-text-secondary)]">Total Value</span>
          </div>
          {hasInvested && (
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
              <span className="text-[var(--color-text-secondary)]">Capital Invested</span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="growthAreaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#006C4A" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#006C4A" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {yTicks.map((t, idx) => (
            <g key={idx}>
              <line
                x1={padding.left}
                y1={t.y}
                x2={width - padding.right}
                y2={t.y}
                stroke="#E5E7EB"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
              <text
                x={padding.left - 8}
                y={t.y + 3}
                textAnchor="end"
                fontSize="10"
                fill="#6B7280"
                fontFamily="var(--font-mono)"
              >
                {formatINR(t.val)}
              </text>
            </g>
          ))}

          {/* Area fill */}
          <path d={valueAreaPath} fill="url(#growthAreaGradient)" />

          {/* Invested line */}
          {hasInvested && (
            <path
              d={investedLinePath}
              fill="none"
              stroke="#0A192F"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          )}

          {/* Total Value line */}
          <path
            d={valueLinePath}
            fill="none"
            stroke="#006C4A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points at key years */}
          {xTicks.map((d, idx) => (
            <g key={idx}>
              <circle
                cx={getX(d.year)}
                cy={getY(d.value)}
                r="4"
                fill="#FFFFFF"
                stroke="#006C4A"
                strokeWidth="2.5"
              />
              <text
                x={getX(d.year)}
                y={height - 10}
                textAnchor="middle"
                fontSize="10"
                fill="#6B7280"
                fontWeight="600"
              >
                Yr {d.year}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

// ------------------------------------------------------------
// Pure SVG Donut Chart for Slices / Allocations
// ------------------------------------------------------------
interface Slice {
  label: string;
  value: number;
  color: string;
  formattedText?: string;
}

interface DonutChartSVGProps {
  slices: Slice[];
  centerLabel?: string;
  centerValue?: string;
}

export function DonutChartSVG({
  slices,
  centerLabel = "Total",
  centerValue = "100%",
}: DonutChartSVGProps) {
  const size = 200;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const total = slices.reduce((acc, s) => acc + s.value, 0) || 1;

  const slicesWithOffset = slices.map((slice, idx) => {
    const prevValue = slices.slice(0, idx).reduce((acc, s) => acc + s.value, 0);
    const offset = prevValue / total;
    const pct = slice.value / total;
    return {
      ...slice,
      pct,
      strokeDasharray: `${pct * circumference} ${circumference}`,
      strokeDashoffset: -offset * circumference,
    };
  });

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-44 h-44 flex items-center justify-center">
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full -rotate-90">
          {slicesWithOffset.map((slice, idx) => (
            <circle
              key={idx}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={slice.color}
              strokeWidth={strokeWidth}
              strokeDasharray={slice.strokeDasharray}
              strokeDashoffset={slice.strokeDashoffset}
              strokeLinecap="butt"
            />
          ))}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="text-[10px] uppercase font-bold text-[var(--color-text-muted)] tracking-wider">
            {centerLabel}
          </span>
          <span
            className="text-base font-extrabold text-[var(--color-text-primary)] mt-0.5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {centerValue}
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-5 w-full">
        {slices.map((slice, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: slice.color }}
            />
            <span className="text-[var(--color-text-secondary)] font-medium truncate">
              {slice.label}
            </span>
            <span
              className="font-bold text-[var(--color-text-primary)] ml-auto"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {slice.formattedText || `${Math.round((slice.value / total) * 100)}%`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
