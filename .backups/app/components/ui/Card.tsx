import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  hover = true,
  padding = "md",
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "bg-[var(--color-surface-card)] rounded-lg sm:rounded-xl border border-[var(--color-border-strong)]",
        "shadow-[var(--shadow-card)]",
        hover && "transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:border-[#b8c8d2]",
        paddingClasses[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
