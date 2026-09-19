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
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition-all shadow-sm active:scale-[0.99]",
  secondary:
    "border border-[var(--color-border-strong)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-surface-low)] hover:border-[var(--color-secondary)] shadow-xs transition-all",
  outline:
    "border border-[var(--color-border-strong)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-surface-low)] hover:border-[var(--color-secondary)]",
  ghost:
    "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface-low)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
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
          "inline-flex items-center justify-center gap-2 font-semibold rounded-lg",
          "transition-all duration-150 focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-[var(--color-secondary-500)] focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
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
