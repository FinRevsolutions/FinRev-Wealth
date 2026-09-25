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
        "bg-[var(--color-surface-card)] rounded-xs border border-[var(--color-border-subtle)]",
        "shadow-[var(--shadow-card)]",
        hover && "transition-all duration-150 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-secondary)]",
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
