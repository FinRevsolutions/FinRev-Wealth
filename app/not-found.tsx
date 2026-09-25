import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
          Page Not Located
        </span>
        <h1 className="text-3xl font-bold text-[var(--color-primary)]">
          404 — Resource Unavailable
        </h1>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          The requested page could not be located on the FINREV SOLUTIONS portal. You may return to the main homepage or consult our investment directory.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-white text-xs font-semibold rounded-xs hover:bg-[var(--color-secondary)] transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
