interface VideoEmbedProps {
  youtubeId: string;
  title: string;
}

export default function VideoEmbed({ youtubeId, title }: VideoEmbedProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-surface-container">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
