"use client";

import Link from "next/link";
import ErrorPageShell from "./_error-pages/components/ErrorPageShell";
import { ERROR_500_CONTENT } from "./_error-pages/constants";
import { useErrorLogging } from "./_error-pages/hooks/useErrorLogging";
import type { IErrorBoundaryError } from "./_error-pages/types";

interface IErrorPageProps {
  error: IErrorBoundaryError;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: IErrorPageProps) {
  useErrorLogging(error);

  return (
    <ErrorPageShell content={ERROR_500_CONTENT}>
      <button
        type="button"
        onClick={reset}
        className="ui-label inline-block self-start border-b border-accent pb-1 text-heading transition-colors hover:text-accent"
      >
        Try Again
      </button>
      <Link
        href="/"
        className="ui-label inline-block border-b border-accent-sage/40 pb-1 text-accent-sage transition-all hover:border-accent hover:text-accent"
      >
        Return Home
      </Link>
      <Link
        href="/contact"
        className="ui-label inline-block border-b border-accent-sage/40 pb-1 text-accent-sage transition-all hover:border-accent hover:text-accent"
      >
        Report the Issue
      </Link>
    </ErrorPageShell>
  );
}
