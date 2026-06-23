"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import BookingCard from "@/components/BookingCard";
import type { EventDTO } from "@/lib/events";

interface Props {
  event: EventDTO;
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function EventModal({ event, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);

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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      trapFocus(e);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    const prev = document.activeElement as HTMLElement | null;
    dialogRef.current?.querySelector<HTMLElement>("button")?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [onClose, trapFocus]);

  return (
    <div className="ev-modal-backdrop" onClick={onClose}>
      <div ref={dialogRef} className="ev-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={event.title}>
        <button className="ev-modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="ev-modal-banner">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 720px) 100vw, 920px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="ev-modal-body">
          <div className="ev-modal-main">
            <div className="ev-loc">{event.location}</div>
            <h2 className="ev-modal-title">{event.title}</h2>

            <div className="ev-modal-meta">
              <span><strong>Date</strong> {event.date}</span>
              <span><strong>Time</strong> {event.time}</span>
              <span><strong>Venue</strong> {event.venue}</span>
              {event.mode && <span><strong>Format</strong> {event.mode}</span>}
            </div>

            {event.tags.length > 0 && (
              <div className="event-tags">
                {event.tags.map((t) => <span key={t} className="event-tag">{t}</span>)}
              </div>
            )}

            <div className="ev-modal-section">
              <h3>About this event</h3>
              <p>{event.description}</p>
            </div>

            {event.agenda.length > 0 && (
              <div className="ev-modal-section">
                <h3>What we&apos;ll cover</h3>
                <ul className="event-agenda">
                  {event.agenda.map((item, i) => (
                    <li key={item}>
                      <span className="marker">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="ev-modal-aside">
            <BookingCard event={event} />
          </aside>
        </div>
      </div>
    </div>
  );
}
