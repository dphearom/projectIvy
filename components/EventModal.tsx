"use client";

import { useEffect } from "react";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import type { EventDTO } from "@/lib/events";

interface Props {
  event: EventDTO;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="ev-modal-backdrop" onClick={onClose}>
      <div className="ev-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={event.title}>
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
            <div className="booking-card">
              <span className="price-tag">Free Registration</span>
              <h3>Reserve your spot</h3>
              <div className="booking-summary">
                <div className="booking-summary-item">
                  <div className="b-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <div><div className="b-label">Date</div><div className="b-value">{event.date}</div></div>
                </div>
                <div className="booking-summary-item">
                  <div className="b-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div><div className="b-label">Time</div><div className="b-value">{event.time}</div></div>
                </div>
                <div className="booking-summary-item">
                  <div className="b-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div><div className="b-label">Venue</div><div className="b-value">{event.venue}</div></div>
                </div>
              </div>
              <BookingForm
                eventTitle={event.title}
                eventId={event.id}
                rawDate={event.rawDate}
                rawTime={event.rawTime}
                venue={event.venue}
                location={event.location}
                description={event.description}
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
