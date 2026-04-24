"use client";

import { createPortal } from "react-dom";
import {
  YOUTUBE_EMBED_BASE_URL,
  YOUTUBE_EMBED_QUERY,
  YOUTUBE_IFRAME_ALLOW,
} from "../../constants";
import type { IVideoModalProps } from "../../types";

export default function VideoModal({
  youtubeId,
  title,
  onClose,
  onContentClick,
}: IVideoModalProps): React.ReactPortal | null {
  if (typeof document === "undefined") return null;

  const embedSrc = `${YOUTUBE_EMBED_BASE_URL}/${youtubeId}?${YOUTUBE_EMBED_QUERY}`;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 md:right-6 md:top-6 md:h-12 md:w-12"
      >
        <svg
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        onClick={onContentClick}
        className="relative aspect-video w-full max-w-5xl overflow-hidden bg-black shadow-2xl"
      >
        <iframe
          src={embedSrc}
          title={title}
          allow={YOUTUBE_IFRAME_ALLOW}
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>,
    document.body,
  );
}
