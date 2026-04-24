"use client";

import VideoModal from "./components/VideoModal";
import { useYoutubeVideoPreview } from "./hooks/useYoutubeVideoPreview";
import type { IYoutubeVideoPreviewProps } from "./types";

export default function YoutubeVideoPreview({
  youtubeId,
  title,
  posterUrl,
  posterAlt,
}: IYoutubeVideoPreviewProps): React.ReactElement {
  const { isModalOpen, handleOpen, handleClose, handleContentClick } =
    useYoutubeVideoPreview();

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        aria-label={`Play video: ${title}`}
        className="group relative flex aspect-video w-full cursor-pointer items-center justify-center overflow-hidden border border-accent-sage/10 bg-[#d6d3cc]"
      >
        <img
          src={posterUrl}
          alt={posterAlt ?? title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
        <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
          <svg
            className="ml-1 h-6 w-6 text-heading md:h-7 md:w-7"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>

      {isModalOpen && (
        <VideoModal
          youtubeId={youtubeId}
          title={title}
          onClose={handleClose}
          onContentClick={handleContentClick}
        />
      )}
    </>
  );
}
