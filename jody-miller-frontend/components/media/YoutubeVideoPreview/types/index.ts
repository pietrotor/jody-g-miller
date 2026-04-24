import type { MouseEvent } from "react";

export interface IYoutubeVideoPreviewProps {
  youtubeId: string;
  title: string;
  posterUrl: string;
  posterAlt?: string;
}

export interface IVideoModalProps {
  youtubeId: string;
  title: string;
  onClose: () => void;
  onContentClick: (event: MouseEvent<HTMLDivElement>) => void;
}
