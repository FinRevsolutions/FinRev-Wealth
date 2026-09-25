import { Container } from "@/components/ui/Container";
import { REGULATORY } from "@/lib/constants";

export function TrustStrip() {
  return (
    <section
      className="bg-white border-b border-[var(--color-border-subtle)]"
      aria-label="Regulatory Credentials and Capabilities"
    >
      <Container>
        {/* Desktop / Tablet Ribbon: Architectural Horizontal Ribbon with Thin Dividers */}
        <div className="hidden md:flex items-center justify-between py-3.5 px-2">
          <div className="flex items-center gap-2">
            <span className="text-xs lg:text-[13px] font-semibold tracking-wider text-[var(--color-primary)] uppercase">
              AMFI Registered MFD
            </span>
          </div>

          <span
            className="text-[var(--color-border-strong)] font-light select-none"
            aria-hidden="true"
          >
            |
          </span>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs lg:text-[13px] font-bold text-[var(--color-secondary)] tracking-wider">
              {REGULATORY.arnNumber}
            </span>
          </div>

          <span
            className="text-[var(--color-border-strong)] font-light select-none"
            aria-hidden="true"
          >
            |
          </span>

          <div className="flex items-center gap-2">
            <span className="text-xs lg:text-[13px] font-semibold text-[var(--color-primary)] tracking-wide">
              Multiple AMC Access
            </span>
          </div>

          <span
            className="text-[var(--color-border-strong)] font-light select-none"
            aria-hidden="true"
          >
            |
          </span>

          <div className="flex items-center gap-2">
            <span className="text-xs lg:text-[13px] font-semibold text-[var(--color-primary)] tracking-wide">
              Goal-Mapped Planning
            </span>
          </div>

          <span
            className="text-[var(--color-border-strong)] font-light select-none"
            aria-hidden="true"
          >
            |
          </span>

          <div className="flex items-center gap-2">
            <span className="text-xs lg:text-[13px] font-semibold text-[var(--color-primary)] tracking-wide">
              Life & Health Protection
            </span>
          </div>
        </div>

        {/* Mobile View: Architectural Ribbon with Thin Dividers & Zero Overflow */}
        <div className="flex md:hidden flex-wrap items-center justify-center gap-x-2.5 gap-y-2 py-3 px-1 text-center">
          <span className="text-[11px] font-semibold tracking-wider text-[var(--color-primary)] uppercase">
            AMFI Registered MFD
          </span>
          <span
            className="text-[var(--color-border-strong)] font-light select-none"
            aria-hidden="true"
          >
            |
          </span>
          <span className="font-mono text-[11px] font-bold text-[var(--color-secondary)] tracking-wider">
            {REGULATORY.arnNumber}
          </span>
          <span
            className="text-[var(--color-border-strong)] font-light select-none"
            aria-hidden="true"
          >
            |
          </span>
          <span className="text-[11px] font-semibold text-[var(--color-primary)]">
            Multiple AMC Access
          </span>
          <span
            className="text-[var(--color-border-strong)] font-light select-none"
            aria-hidden="true"
          >
            |
          </span>
          <span className="text-[11px] font-semibold text-[var(--color-primary)]">
            Goal-Mapped Planning
          </span>
          <span
            className="text-[var(--color-border-strong)] font-light select-none"
            aria-hidden="true"
          >
            |
          </span>
          <span className="text-[11px] font-semibold text-[var(--color-primary)]">
            Life & Health Protection
          </span>
        </div>
      </Container>
    </section>
  );
}
