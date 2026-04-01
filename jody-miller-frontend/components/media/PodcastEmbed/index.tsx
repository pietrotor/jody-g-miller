interface PodcastEmbedProps {
  embedUrl: string;
  title: string;
}

export default function PodcastEmbed({ embedUrl, title }: PodcastEmbedProps) {
  return (
    <div className="w-full overflow-hidden bg-surface-container">
      <iframe
        src={embedUrl}
        title={title}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="h-[152px] w-full border-0"
      />
    </div>
  );
}
