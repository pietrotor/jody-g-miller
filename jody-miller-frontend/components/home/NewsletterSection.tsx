"use client";

import { useState } from "react";
import { RevealOnScroll, AnimatedLine } from "@/components/ui/motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-2xl px-6 py-20 text-center sm:py-24">
        <RevealOnScroll>
          <p className="font-sans text-[10px] font-light uppercase tracking-[0.3em] text-[var(--muted-text)]">
            Newsletter
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08} className="mt-4">
          <AnimatedLine />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} className="mt-8">
          <h2 className="font-serif text-3xl italic leading-snug text-[var(--heading)] sm:text-4xl">
            Occasional thoughts on work,
            <br />
            leadership, and what&apos;s next.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.22} className="mt-5">
          <p className="font-sans text-sm font-light text-[var(--muted-text)]">
            Written when there&apos;s something worth saying. No calendar. No
            spam.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3} className="mt-8">
          {submitted ? (
            <p className="font-serif text-lg italic text-[var(--accent)]">
              You&apos;re on the list. Thank you.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:mx-auto sm:max-w-md sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 border border-[var(--border)] bg-[var(--background)] px-4 py-3 font-sans text-sm font-light text-[var(--body)] placeholder:text-[var(--muted-text)] transition-colors duration-200 focus:border-[var(--heading)] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[var(--heading)] px-7 py-3 font-sans text-sm font-light text-[var(--background)] transition-opacity duration-200 hover:opacity-70"
              >
                Subscribe
              </button>
            </form>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
