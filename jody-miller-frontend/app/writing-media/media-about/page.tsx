import type { Metadata } from "next";
import Link from "next/link";
import { archiveItems } from "@/lib/mock-data";
import VideoEmbed from "@/components/media/VideoEmbed";
import PodcastEmbed from "@/components/media/PodcastEmbed";

export const metadata: Metadata = {
  title: "Media About Me & BTG",
  description:
    "Video appearances, podcast features, and media coverage of Jody Greenstone Miller and Business Talent Group.",
};

const mediaItems = archiveItems
  .filter((item) => item.type === "video" || item.type === "podcast")
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 8);

export default function MediaAboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <p className="font-sans text-xs font-light uppercase tracking-widest text-[var(--muted-text)]">
        Writing &amp; Media
      </p>
      <h1 className="mt-3 font-serif text-4xl text-[var(--heading)] sm:text-5xl">
        Media About Me &amp; BTG
      </h1>
      <p className="mt-5 font-sans text-base font-light leading-relaxed text-[var(--body)]">
        A selection of video appearances and podcast features — interviews,
        panel discussions, and conversations that cover Jody&apos;s work,
        thinking, and the broader themes she cares about.
      </p>

      <hr className="my-12 border-[var(--border)]" />

      <div className="space-y-16">
        {mediaItems.map((item) => (
          <article key={item.id}>
            {item.type === "video" && (
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
                {item.type === "podcast" ? item.show : item.publication}
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
        ))}
      </div>

      <div className="mt-16 border-t border-[var(--border)] pt-8">
        <Link
          href="/writing-media/archive"
          className="font-sans text-xs font-light text-[var(--muted-text)] transition-colors hover:text-[var(--heading)]"
        >
          View The Full Archive →
        </Link>
      </div>
    </div>
  );
}
