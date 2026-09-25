import { type HTMLAttributes } from "react";

type BadgeVariant = "amfi" | "emerald" | "gold" | "navy" | "neutral";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  amfi: "bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] border border-[var(--color-border-subtle)]",
  emerald: "bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] border border-[var(--color-border-subtle)]",
  gold: "bg-[var(--color-finrev-gold-subtle)] text-[#b8860b] border border-[var(--color-border-gold)]",
  navy: "bg-[var(--color-primary)] text-white border border-[var(--color-primary-600)]",
  neutral: "bg-[var(--color-surface-low)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)]",
};

export function Badge({
  variant = "neutral",
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 px-2.5 py-0.5",
        "text-xs font-semibold rounded-xs",
        "font-[family-name:var(--font-body)]",
        variantClasses[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
