"use client";

import { useState } from "react";
import { createBooking } from "@/app/actions/bookings";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  eventTitle: string;
  eventId: string;
  rawDate: string;
  rawTime: string;
  venue: string;
  location: string;
  description: string;
}

function buildICS(title: string, rawDate: string, rawTime: string, venue: string, location: string, description: string): string {
  const d = new Date(rawDate);
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");

  const [h, m] = rawTime.split(":");
  const startHour = String(Number(h)).padStart(2, "0");
  const endHour = String(Number(h) + 2).padStart(2, "0");
  const dateStr = `${year}${month}${day}`;

  const escape = (s: string) => s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Breksa AdvisED Global//Events//EN",
    "BEGIN:VEVENT",
    `UID:${dateStr}-${title.toLowerCase().replace(/\s+/g, "-")}@breksa.com`,
    `DTSTART:${dateStr}T${startHour}${m}00`,
    `DTEND:${dateStr}T${endHour}${m}00`,
    `SUMMARY:${escape(title)}`,
    `DESCRIPTION:${escape(description)}`,
    `LOCATION:${escape(`${venue}, ${location}`)}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function downloadICS(title: string, rawDate: string, rawTime: string, venue: string, location: string, description: string) {
  const content = buildICS(title, rawDate, rawTime, venue, location, description);
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${title.toLowerCase().replace(/\s+/g, "-")}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}

const BookingForm = ({ eventTitle, eventId, rawDate, rawTime, venue, location, description }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const result = await createBooking({ eventId, name, email });
      if (result.ok) {
        setDone(true);
      } else {
        setError(result.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="booking-success">
        <div className="check-circle">✓</div>
        <h4>You&apos;re registered!</h4>
        <p>Your spot for <strong>{eventTitle}</strong> is confirmed.</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => downloadICS(eventTitle, rawDate, rawTime, venue, location, description)}
        >
          Add to Calendar
        </button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="booking-name">Full name</label>
        <input
          id="booking-name"
          type="text"
          placeholder="Sokha Chan"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="booking-email">Email</label>
        <input
          id="booking-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>
      {error && <p className="booking-error">{error}</p>}
      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? "Reserving…" : "Reserve My Spot"}
      </button>
      <p className="form-note">Free to register · Limited seats available</p>
    </form>
  );
};

export default BookingForm;
