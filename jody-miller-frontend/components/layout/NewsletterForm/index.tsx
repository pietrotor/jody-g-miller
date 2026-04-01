"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <p className="font-sans text-sm font-light text-body">
        You&apos;re on the list. Thank you.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="newsletter-email" className="ui-label text-accent-sage">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="border-b border-accent-sage/40 bg-transparent pb-2 font-sans text-sm font-light text-heading placeholder:text-accent-sage/40 focus:border-accent focus:outline-none transition-colors duration-200 sm:w-64"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="ui-label text-accent transition-opacity hover:opacity-60 disabled:opacity-40"
      >
        {status === "loading" ? "Sending…" : "Subscribe →"}
      </button>
    </form>
  );
}
