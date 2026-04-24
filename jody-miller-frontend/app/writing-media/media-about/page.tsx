import type { Metadata } from "next";
import Link from "next/link";
import { fetchArchiveItems } from "@/lib/strapi";
import { archiveItems as fallbackItems } from "@/lib/mock-data";
import VideoEmbed from "@/components/media/VideoEmbed";
import PodcastEmbed from "@/components/media/PodcastEmbed";
import {
  FadeUp,
  AnimatedLine,
  RevealOnScroll,
  ScrollStaggerList,
  ScrollStaggerItem,
} from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Media About Me & BTG",
  description:
    "Video appearances, podcast features, and media coverage of Jody Greenstone Miller and Business Talent Group.",
};

export default async function MediaAboutPage() {
  const archiveItems = await fetchArchiveItems().catch(() => fallbackItems);

  const mediaItems = archiveItems
    .filter((item) => item.type === "video" || item.type === "podcast")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 8);
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <FadeUp>
        <p className="font-sans text-xs font-light uppercase tracking-[0.22em] text-[var(--muted-text)]">
          Writing &amp; Media
        </p>
      </FadeUp>
      <FadeUp delay={0.08} className="mt-4">
        <AnimatedLine />
      </FadeUp>
      <FadeUp delay={0.15} className="mt-6">
        <h1 className="font-serif text-5xl italic leading-tight text-[var(--heading)] sm:text-6xl">
          Media About Me &amp; BTG
        </h1>
      </FadeUp>
      <FadeUp delay={0.22} className="mt-5">
        <p className="font-sans text-base font-light leading-relaxed text-[var(--body)]">
          A selection of video appearances and podcast features — interviews,
          panel discussions, and conversations that cover Jody&apos;s work,
          thinking, and the broader themes she cares about.
        </p>
      </FadeUp>

      <RevealOnScroll className="my-12">
        <hr className="border-[var(--border)]" />
      </RevealOnScroll>

      <ScrollStaggerList className="space-y-16">
        {mediaItems.map((item) => (
          <ScrollStaggerItem key={item.id}>
            <article>
              {item.type === "video" && item.youtubeId && (
                <VideoEmbed youtubeId={item.youtubeId} title={item.title} />
              )}
              {item.type === "podcast" && item.embedUrl && (
                <PodcastEmbed embedUrl={item.embedUrl} title={item.title} />
              )}

              <div className="mt-4">
                <h2 className="font-serif text-xl italic text-[var(--heading)]">
                  {item.title}
                </h2>
                <p className="mt-1 font-sans text-xs font-light text-[var(--muted-text)]">
                  {item.source}
                  <span className="mx-2 text-[var(--border)]">·</span>
                  {item.year}
                  {item.type === "podcast" && item.duration && (
                    <>
                      <span className="mx-2 text-[var(--border)]">·</span>
                      {item.duration}
                    </>
                  )}
                </p>
                <p className="mt-3 font-sans text-sm font-light leading-relaxed text-[var(--body)]">
                  {item.description}
                </p>
              </div>
            </article>
          </ScrollStaggerItem>
        ))}
      </ScrollStaggerList>

      <RevealOnScroll className="mt-16 border-t border-[var(--border)] pt-8">
        <Link
          href="/writing-media/archive"
          className="font-sans text-xs font-light text-[var(--muted-text)] transition-colors duration-200 hover:text-[var(--heading)]"
        >
          View The Full Archive →
        </Link>
      </RevealOnScroll>
    </div>
  );
}
