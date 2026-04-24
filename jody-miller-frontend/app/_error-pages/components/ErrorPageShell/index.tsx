import React from "react";
import type { IErrorPageShellProps } from "../../types";

export default function ErrorPageShell({
  content,
  children,
}: IErrorPageShellProps): React.ReactElement {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-6 pb-20 pt-32 md:pt-40">
      <p className="font-sans text-xs font-light uppercase tracking-widest text-[var(--muted-text)]">
        {content.label}
      </p>

      <p className="mt-10 font-serif text-[96px] italic leading-none text-[var(--heading)] sm:text-[140px] md:text-[180px]">
        {content.code}
      </p>

      <hr className="my-10 border-[var(--border)]" />

      <h1 className="font-serif text-3xl text-[var(--heading)] sm:text-4xl md:text-5xl">
        {content.title}
      </h1>

      <p className="mt-6 font-sans text-base font-light leading-relaxed text-[var(--body)]">
        {content.description}
      </p>

      <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">
        {children}
      </div>
    </section>
  );
}
