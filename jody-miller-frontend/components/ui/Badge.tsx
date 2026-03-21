import type { ContentType } from "@/lib/types";

const labels: Record<ContentType, string> = {
  article: "Article",
  video: "Video",
  podcast: "Podcast",
};

export default function Badge({ type }: { type: ContentType }) {
  return (
    <span className="font-sans text-xs font-light text-[var(--muted-text)]">
      {labels[type]}
    </span>
  );
}
