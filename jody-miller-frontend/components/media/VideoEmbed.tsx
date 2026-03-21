interface VideoEmbedProps {
  youtubeId: string;
  title?: string;
}

export default function VideoEmbed({ youtubeId, title }: VideoEmbedProps) {
  return (
    <div className="aspect-video w-full overflow-hidden border border-[var(--border)]">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title ?? "Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
