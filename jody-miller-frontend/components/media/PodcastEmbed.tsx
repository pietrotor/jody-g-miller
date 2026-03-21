interface PodcastEmbedProps {
  embedUrl: string;
  title?: string;
}

export default function PodcastEmbed({ embedUrl, title }: PodcastEmbedProps) {
  return (
    <div className="w-full overflow-hidden border border-[var(--border)]">
      <iframe
        src={embedUrl}
        title={title ?? "Podcast"}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="h-20 w-full"
      />
    </div>
  );
}
