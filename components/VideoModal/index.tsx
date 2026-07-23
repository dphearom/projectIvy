"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslation } from "@/components/useTranslation";
import type { Language } from "@/lib/i18n/language";
import type { LocalizedVideo } from "@/lib/videos";
import { youtubeEmbedUrl, youtubeThumbnailUrl } from "@/lib/youtube";
import "./styles.css";

type Props = {
  videos: LocalizedVideo;
  title: string;
  onClose: () => void;
};

const LANGUAGES: Language[] = ["en", "km"];
const SIDEBAR_IDLE_MS = 4000;
const DESKTOP_LAYOUT_QUERY = "(min-width: 901px)";

const FOCUSABLE =
  'a[href], button:not([disabled]), iframe, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const VideoModal = ({ videos, title, onClose }: Props) => {
  const { language } = useLanguage();
  const { t, tPlain } = useTranslation("shared.videoModal");
  const dialogRef = useRef<HTMLDivElement>(null);
  const sidebarIdleTimerRef = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(language);
  const [isSwitching, setIsSwitching] = useState(false);
  const [sidebarDimmed, setSidebarDimmed] = useState(false);
  const [isDesktopLayout, setIsDesktopLayout] = useState(false);

  const activeUrl = videos[selectedLang];
  const embedUrl = youtubeEmbedUrl(activeUrl);

  const clearSidebarIdleTimer = useCallback(() => {
    if (sidebarIdleTimerRef.current !== null) {
      window.clearTimeout(sidebarIdleTimerRef.current);
      sidebarIdleTimerRef.current = null;
    }
  }, []);

  const revealSidebar = useCallback(() => {
    setSidebarDimmed(false);
  }, []);

  const scheduleSidebarDim = useCallback(() => {
    clearSidebarIdleTimer();
    sidebarIdleTimerRef.current = window.setTimeout(() => {
      setSidebarDimmed(true);
    }, SIDEBAR_IDLE_MS);
  }, [clearSidebarIdleTimer]);

  const handleSidebarActivity = useCallback(() => {
    if (!isDesktopLayout) return;
    revealSidebar();
    scheduleSidebarDim();
  }, [isDesktopLayout, revealSidebar, scheduleSidebarDim]);

  const handleModalMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!isDesktopLayout || !dialogRef.current) return;

      revealSidebar();

      const rect = dialogRef.current.getBoundingClientRect();
      const relativeX = event.clientX - rect.left;
      const nearSidebar = relativeX >= rect.width * 0.62;

      if (nearSidebar) {
        clearSidebarIdleTimer();
        return;
      }

      scheduleSidebarDim();
    },
    [clearSidebarIdleTimer, isDesktopLayout, revealSidebar, scheduleSidebarDim],
  );

  const selectLanguage = useCallback((lang: Language) => {
    if (lang === selectedLang) return;
    setIsSwitching(true);
    setSelectedLang(lang);
    handleSidebarActivity();
  }, [handleSidebarActivity, selectedLang]);

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
    const mediaQuery = window.matchMedia(DESKTOP_LAYOUT_QUERY);
    const syncLayout = () => setIsDesktopLayout(mediaQuery.matches);
    syncLayout();
    mediaQuery.addEventListener("change", syncLayout);
    return () => mediaQuery.removeEventListener("change", syncLayout);
  }, []);

  useEffect(() => {
    if (!mounted || !isDesktopLayout) {
      setSidebarDimmed(false);
      clearSidebarIdleTimer();
      return;
    }

    scheduleSidebarDim();
    return clearSidebarIdleTimer;
  }, [clearSidebarIdleTimer, isDesktopLayout, mounted, scheduleSidebarDim]);

  useEffect(() => {
    setSelectedLang(language);
  }, [language]);

  useEffect(() => {
    if (!isSwitching) return;
    const timer = window.setTimeout(() => setIsSwitching(false), 220);
    return () => window.clearTimeout(timer);
  }, [isSwitching, selectedLang]);

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
      <div className="video-modal-shell" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="video-modal__close"
          onClick={onClose}
          aria-label={tPlain("closeAriaLabel")}
        >
          <span aria-hidden="true">×</span>
          <span className="video-modal__close-label">{t("close")}</span>
        </button>

        <div
          ref={dialogRef}
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onMouseMove={handleModalMouseMove}
          onFocusCapture={(event) => {
            if (!isDesktopLayout) return;
            if ((event.target as HTMLElement).closest(".video-modal__sidebar")) {
              handleSidebarActivity();
            }
          }}
        >
          <div className="video-modal__layout">
            <div className="video-modal__main">
              <div className={`video-modal__player${isSwitching ? " video-modal__player--switching" : ""}`}>
                {embedUrl ? (
                  <iframe
                    key={selectedLang}
                    src={embedUrl}
                    title={title}
                    className="video-modal__iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="video-modal__fallback">{t("loadError")}</div>
                )}
              </div>
            </div>

            <aside
              className={`video-modal__sidebar${sidebarDimmed && isDesktopLayout ? " video-modal__sidebar--dimmed" : ""}`}
              aria-label={tPlain("versionsAriaLabel")}
              onMouseEnter={handleSidebarActivity}
              onFocus={handleSidebarActivity}
            >
              <p className="video-modal__sidebar-heading">{t("versionsHeading")}</p>
              <ul className="video-modal__versions">
                {LANGUAGES.map((lang) => {
                  const isSelected = lang === selectedLang;
                  const thumbUrl = youtubeThumbnailUrl(videos[lang]);

                  return (
                    <li key={lang}>
                      <button
                        type="button"
                        className={`video-modal__version${isSelected ? " video-modal__version--selected" : ""}`}
                        aria-pressed={isSelected}
                        onClick={() => selectLanguage(lang)}
                      >
                        <span className="video-modal__version-thumb">
                          {thumbUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={thumbUrl} alt="" loading="lazy" />
                          ) : (
                            <span className="video-modal__version-thumb-fallback" aria-hidden="true" />
                          )}
                        </span>
                        <span className="video-modal__version-label">{t(`languages.${lang}`)}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default VideoModal;
