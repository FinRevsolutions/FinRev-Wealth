import { type HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: "white" | "canvas" | "navy" | "none";
  spacing?: "sm" | "md" | "lg" | "xl";
}

const bgClasses = {
  white: "bg-[var(--color-surface-card)]",
  canvas: "bg-[var(--color-surface-canvas)]",
  navy: "bg-[var(--color-primary)] text-white",
  none: "",
};

const spacingClasses = {
  sm: "py-10 md:py-14",
  md: "py-14 md:py-20",
  lg: "py-20 md:py-28",
  xl: "py-24 md:py-36",
};

export function Section({
  background = "none",
  spacing = "lg",
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={[bgClasses[background], spacingClasses[spacing], className].join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}
