"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { youtubeEmbedUrl } from "@/lib/youtube";
import "./styles.css";

type Props = {
  videoUrl: string;
  title: string;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), iframe, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const VideoModal = ({ videoUrl, title, onClose }: Props) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const embedUrl = youtubeEmbedUrl(videoUrl);

  const trapFocus = useCallback((e: KeyboardEvent) => {
    if (e.key !== "Tab" || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      trapFocus(e);
    };

    document.addEventListener("keydown", onKey, true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const prevFocus = document.activeElement as HTMLElement | null;
    requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLElement>("button")?.focus();
    });

    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, [mounted, onClose, trapFocus]);

  if (!mounted) return null;

  return createPortal(
    <div className="video-modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="video-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button
          type="button"
          className="video-modal__close"
          onClick={onClose}
          aria-label="Close video"
        >
          <span aria-hidden="true">×</span>
          <span className="video-modal__close-label">Close</span>
        </button>

        <div className="video-modal__player">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={title}
              className="video-modal__iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="video-modal__fallback">This video could not be loaded.</div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default VideoModal;
