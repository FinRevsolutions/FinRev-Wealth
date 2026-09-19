import Link from "next/link";
import { ArrowRight, Construction } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface ComingSoonPageProps {
  title: string;
  description: string;
  category?: string;
  parentHref?: string;
  parentLabel?: string;
}

export function ComingSoonPage({
  title,
  description,
  category,
  parentHref = "/",
  parentLabel = "Home",
}: ComingSoonPageProps) {
  return (
    <section className="min-h-[70vh] flex items-center py-24 bg-[var(--color-surface-canvas)]">
      <Container>
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-8">
            <Link href={parentHref} className="hover:text-[var(--color-text-primary)] transition-colors">
              {parentLabel}
            </Link>
            <span>/</span>
            {category && (
              <>
                <span className="text-[var(--color-text-primary)]">{category}</span>
                <span>/</span>
              </>
            )}
            <span className="text-[var(--color-text-primary)]">{title}</span>
          </nav>

          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)] flex items-center justify-center mb-6">
            <Construction size={24} className="text-white" />
          </div>

          {/* Content */}
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)] mb-3">
            Coming Soon
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>
          <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed mb-8">
            {description}
          </p>
          <p className="text-sm text-[var(--color-text-muted)] mb-8">
            This page is currently being built as part of our Phase 2 development.
            In the meantime, please contact us directly for any enquiries.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white text-sm font-bold rounded hover:bg-[var(--color-secondary-700)] transition-colors"
            >
              Speak with an Expert
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border-strong)] text-[var(--color-text-primary)] text-sm font-bold rounded hover:bg-[var(--color-surface-low)] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
