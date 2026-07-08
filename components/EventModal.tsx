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
    <div
      className="fixed inset-0 z-300 bg-[rgba(11,23,48,0.6)] backdrop-blur-[10px] flex items-center justify-center p-6 animate-[backdropIn_0.2s_ease] max-[720px]:p-0 max-[720px]:items-end"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="bg-paper rounded-[20px] w-full max-w-235 max-h-[88vh] overflow-y-auto relative shadow-[0_50px_120px_-24px_rgba(11,23,48,0.55)] animate-[modalIn_0.3s_cubic-bezier(.2,.7,.2,1)] [scrollbar-width:thin] [scrollbar-color:var(--line)_transparent] max-[720px]:max-h-[94vh] max-[720px]:rounded-b-none"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={event.title}
      >
        <button
          className="absolute top-3.5 right-3.5 z-10 size-8.5 rounded-full bg-[rgba(255,255,255,0.85)] border border-line cursor-pointer flex items-center justify-center text-[15px] text-ink leading-none transition-colors duration-200 hover:bg-cream"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="relative aspect-[16/7] rounded-t-[20px] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 720px) 100vw, 920px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="grid grid-cols-[1fr_340px] items-start max-[720px]:grid-cols-1">
          <div className="pt-8 px-9 pb-8 border-r border-line max-[720px]:border-r-0 max-[720px]:border-b max-[720px]:pt-6 max-[720px]:px-5 max-[720px]:pb-6">
            <div className="font-body text-[0.78rem] tracking-[0.12em] uppercase text-gold">{event.location}</div>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] text-navy mt-2.5 mb-4.5 leading-[1.1] tracking-[-0.01em]">
              {event.title}
            </h2>

            <div className="flex flex-wrap gap-y-2.5 gap-x-5.5 text-[0.88rem] text-ink-soft mb-4">
              <span><strong className="text-ink font-semibold mr-1.25">Date</strong> {event.date}</span>
              <span><strong className="text-ink font-semibold mr-1.25">Time</strong> {event.time}</span>
              <span><strong className="text-ink font-semibold mr-1.25">Venue</strong> {event.venue}</span>
              {event.mode && <span><strong className="text-ink font-semibold mr-1.25">Format</strong> {event.mode}</span>}
            </div>

            {event.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {event.tags.map((t) => (
                  <span
                    key={t}
                    className="font-body font-semibold text-[11px] tracking-[0.12em] uppercase text-gold border border-[rgba(182,146,79,0.3)] rounded-full py-1 px-3 bg-[rgba(182,146,79,0.06)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-7 pt-6 border-t border-line">
              <h3 className="text-[1.2rem] text-navy mb-3">About this event</h3>
              <p className="text-[0.97rem] text-ink-soft leading-[1.7]">{event.description}</p>
            </div>

            {event.agenda.length > 0 && (
              <div className="mt-7 pt-6 border-t border-line">
                <h3 className="text-[1.2rem] text-navy mb-3">What we&apos;ll cover</h3>
                <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
                  {event.agenda.map((item, i) => (
                    <li key={item} className="flex gap-4 items-start text-[1.02rem] text-ink">
                      <span className="flex-none w-7 h-7 rounded-full bg-[rgba(182,146,79,0.12)] border border-[rgba(182,146,79,0.3)] text-gold text-[0.78rem] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="pt-8 px-7 sticky top-0 max-[720px]:py-6 max-[720px]:px-5 max-[720px]:static">
            <BookingCard event={event} />
          </aside>
        </div>
      </div>
    </div>
  );
}
