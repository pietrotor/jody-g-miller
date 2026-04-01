"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
  };

  return (
    <section className="bg-heading px-6 py-24 md:px-12 md:py-32">
      <RevealOnScroll>
        <div className="mx-auto max-w-2xl text-center">

          {/* Label */}
          <span className="ui-label text-background/40">Newsletter</span>

          {sent ? (
            <p className="mt-8 font-serif text-4xl italic text-background md:text-5xl">
              You&apos;re on the list. Thank you.
            </p>
          ) : (
            <>
              {/* Headline */}
              <p className="mt-6 font-serif text-4xl italic leading-snug text-background md:text-5xl">
                Stay informed on the<br className="hidden md:block" /> future of work.
              </p>
              <p className="mt-4 font-sans text-sm font-light tracking-wide text-background/40">
                Occasional writing and ideas, delivered to your inbox.
              </p>

              {/* Form — underline input + inline subscribe, matching DESIGN.md */}
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-12 max-w-md"
              >
                <div className="group flex items-end border-b border-background/20 pb-4 transition-colors duration-300 focus-within:border-accent">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="flex-grow bg-transparent font-serif text-2xl italic text-background placeholder:text-background/25 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="ui-label flex-none pb-1 text-background/50 transition-colors duration-300 hover:text-accent"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </>
          )}

        </div>
      </RevealOnScroll>
    </section>
  );
}
