import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] border border-[var(--color-primary-600)] hover:border-[var(--color-secondary)] shadow-xs transition-colors",
  secondary:
    "border border-[var(--color-border-strong)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-surface-low)] hover:border-[var(--color-secondary)] shadow-xs transition-colors",
  outline:
    "border border-[var(--color-border-strong)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-surface-low)] hover:border-[var(--color-secondary)] transition-colors",
  ghost:
    "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface-low)] transition-colors",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-xs font-semibold tracking-wide",
  md: "px-5 py-2.5 text-sm font-semibold tracking-wide",
  lg: "px-7 py-3 text-sm font-semibold tracking-wide",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className = "", children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={[
          "inline-flex items-center justify-center gap-2 rounded-xs",
          "transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none",
          "font-[family-name:var(--font-body)]",
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
