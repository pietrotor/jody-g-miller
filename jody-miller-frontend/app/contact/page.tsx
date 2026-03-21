import type { Metadata } from "next";
import { FadeUp, AnimatedLine, RevealOnScroll } from "@/components/ui/motion";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jody Greenstone Miller.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <FadeUp>
        <p className="font-sans text-xs font-light uppercase tracking-[0.22em] text-[var(--muted-text)]">
          Contact
        </p>
      </FadeUp>
      <FadeUp delay={0.08} className="mt-4">
        <AnimatedLine />
      </FadeUp>
      <FadeUp delay={0.15} className="mt-6">
        <h1 className="font-serif text-5xl italic leading-tight text-[var(--heading)] sm:text-6xl">
          Get in touch
        </h1>
      </FadeUp>
      <FadeUp delay={0.22} className="mt-5">
        <p className="font-sans text-base font-light leading-relaxed text-[var(--body)]">
          For speaking engagements, advisory conversations, media inquiries, or
          general correspondence.
        </p>
      </FadeUp>

      <RevealOnScroll className="mt-14">
        <hr className="border-[var(--border)]" />
      </RevealOnScroll>

      <RevealOnScroll className="mt-12">
        <ContactForm />
      </RevealOnScroll>
    </div>
  );
}
