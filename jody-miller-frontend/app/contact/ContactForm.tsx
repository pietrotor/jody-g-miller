"use client";

export default function ContactForm() {
  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block font-sans text-xs font-light uppercase tracking-widest text-[var(--muted-text)]"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="mt-2 w-full border-b border-[var(--border)] bg-transparent pb-2 pt-1 font-sans text-sm font-light text-[var(--body)] focus:border-[var(--heading)] focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-sans text-xs font-light uppercase tracking-widest text-[var(--muted-text)]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="mt-2 w-full border-b border-[var(--border)] bg-transparent pb-2 pt-1 font-sans text-sm font-light text-[var(--body)] focus:border-[var(--heading)] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block font-sans text-xs font-light uppercase tracking-widest text-[var(--muted-text)]"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className="mt-2 w-full border-b border-[var(--border)] bg-transparent pb-2 pt-1 font-sans text-sm font-light text-[var(--body)] focus:border-[var(--heading)] focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-sans text-xs font-light uppercase tracking-widest text-[var(--muted-text)]"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          required
          className="mt-2 w-full resize-none border border-[var(--border)] bg-transparent p-3 font-sans text-sm font-light leading-relaxed text-[var(--body)] focus:border-[var(--heading)] focus:outline-none"
        />
      </div>

      <div>
        <button
          type="submit"
          className="border border-[var(--heading)] bg-[var(--heading)] px-8 py-3 font-sans text-xs font-light tracking-wide text-[var(--background)] transition-opacity hover:opacity-80"
        >
          Send
        </button>
      </div>
    </form>
  );
}
