"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center p-6 bg-[#f8f9fa] text-[#071a2a]">
        <div className="max-w-md w-full text-center space-y-4">
          <h2 className="text-xl font-bold text-[#071a2a]">
            An unexpected error occurred
          </h2>
          <p className="text-xs text-[#334155] leading-relaxed">
            Please try resetting this view or return to the main homepage.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-[#071a2a] text-white text-xs font-semibold rounded hover:bg-[#146b73] transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-4 py-2 border border-[#cbd5e1] text-xs font-semibold rounded text-[#071a2a] hover:bg-white transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
