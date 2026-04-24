"use client";

import { useCallback, useEffect, useState } from "react";
import type { MouseEvent } from "react";
import {
  BODY_OVERFLOW_HIDDEN,
  KEY_ESCAPE,
} from "../../constants";

interface IUseYoutubeVideoPreviewResult {
  isModalOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleContentClick: (event: MouseEvent<HTMLDivElement>) => void;
}

/**
 * Local state and side effects for the YouTube video preview component.
 *
 * Controls whether the video modal is open, the open/close handlers, a
 * content click handler that prevents backdrop-dismissal while clicking
 * the player, and the side effects required while the modal is open:
 * listening for the Escape key and locking body scroll so the page
 * underneath does not move.
 *
 * @returns An object with the modal state flag and its interaction handlers.
 */
export function useYoutubeVideoPreview(): IUseYoutubeVideoPreviewResult {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpen = useCallback((): void => {
    setIsModalOpen(true);
  }, []);

  const handleClose = useCallback((): void => {
    setIsModalOpen(false);
  }, []);

  const handleContentClick = useCallback(
    (event: MouseEvent<HTMLDivElement>): void => {
      event.stopPropagation();
    },
    [],
  );

  useEffect((): (() => void) | void => {
    if (!isModalOpen) return;

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === KEY_ESCAPE) setIsModalOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = BODY_OVERFLOW_HIDDEN;
    window.addEventListener("keydown", onKeyDown);

    return (): void => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  return { isModalOpen, handleOpen, handleClose, handleContentClick };
}
