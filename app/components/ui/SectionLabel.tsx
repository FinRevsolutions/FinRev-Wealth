interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-secondary)]",
        "font-[family-name:var(--font-body)]",
        className,
      ].join(" ")}
    >
      <span className="finrev-gold-dot shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
