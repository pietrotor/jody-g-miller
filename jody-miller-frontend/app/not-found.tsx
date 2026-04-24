import type { Metadata } from "next";
import Link from "next/link";
import ErrorPageShell from "./_error-pages/components/ErrorPageShell";
import { ERROR_404_CONTENT } from "./_error-pages/constants";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for may have moved or no longer exists.",
};

export default function NotFound() {
  return (
    <ErrorPageShell content={ERROR_404_CONTENT}>
      <Link
        href="/"
        className="ui-label inline-block border-b border-accent pb-1 text-heading transition-colors hover:text-accent"
      >
        Return Home
      </Link>
      <Link
        href="/about/bio"
        className="ui-label inline-block border-b border-accent-sage/40 pb-1 text-accent-sage transition-all hover:border-accent hover:text-accent"
      >
        Read the Biography
      </Link>
    </ErrorPageShell>
  );
}
