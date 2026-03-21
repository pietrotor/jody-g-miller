"use client";

export default function NewsletterForm() {
  return (
    <form
      className="mt-5 flex max-w-sm gap-0"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 border border-[var(--border)] border-r-0 bg-transparent px-4 py-2.5 font-sans text-sm font-light text-[var(--body)] placeholder:text-[var(--muted-text)] focus:border-[var(--heading)] focus:outline-none"
      />
      <button
        type="submit"
        className="border border-[var(--border)] bg-[var(--heading)] px-5 py-2.5 font-sans text-xs font-light tracking-wide text-[var(--background)] transition-opacity hover:opacity-80"
      >
        Subscribe
      </button>
    </form>
  );
}
