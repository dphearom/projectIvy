"use client";

import { useState } from "react";
import { createBooking } from "@/app/actions/bookings";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  eventTitle: string;
  eventId: string;
}

const BookingForm = ({ eventTitle, eventId }: Props) => {
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
        <p>
          We&apos;ve saved your spot for <strong>{eventTitle}</strong>. A
          confirmation will be sent to {email}.
        </p>
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
