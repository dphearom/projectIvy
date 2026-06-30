"use client";

import { useState } from "react";
import { EMAIL_RE } from "@/lib/utils";

const ConsultationForm = () => {
  const [role, setRole] = useState<"parent" | "student">("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [grade, setGrade] = useState("");
  const [school, setSchool] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const isParent = role === "parent";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) return setError("Please enter your full name.");
    if (!EMAIL_RE.test(email)) return setError("Please enter a valid email address.");
    if (!phone.trim()) return setError("Please enter your phone number.");
    if (isParent && !childName.trim()) return setError("Please enter your child's name.");
    if (!grade) return setError(`Please select ${isParent ? "your child's" : "your"} grade.`);
    if (!school.trim()) return setError("Please enter the current school.");
    if (!terms) return setError("Please agree to the Terms & Conditions.");

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="booking-success">
        <div className="check-circle">✓</div>
        <h4>Thank you!</h4>
        <p>Your information has been submitted successfully. We will contact you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="consultation-role">
        <legend>You are:</legend>
        <div className="role-options">
          {(["parent", "student"] as const).map((value) => (
            <label key={value} className={`role-option${role === value ? " active" : ""}`}>
              <input
                type="radio"
                name="role"
                value={value}
                checked={role === value}
                onChange={() => setRole(value)}
              />
              {value === "parent" ? "Parents" : "Student"}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="consult-name">{isParent ? "Parent's full name" : "Full name"} (*)</label>
        <input
          id="consult-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="consult-email">Email (*)</label>
        <input
          id="consult-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="consult-phone">Phone (*)</label>
        <input
          id="consult-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
        />
      </div>

      {isParent && (
        <div>
          <label htmlFor="consult-child-name">Child&apos;s name (*)</label>
          <input
            id="consult-child-name"
            type="text"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
          />
        </div>
      )}

      <div>
        <label htmlFor="consult-grade">
          {isParent ? "Child's grade level" : "Grade"} (*)
        </label>
        <select id="consult-grade" value={grade} onChange={(e) => setGrade(e.target.value)}>
          <option value="">Select...</option>
          <option value="9">Grade 9</option>
          <option value="10">Grade 10</option>
          <option value="11">Grade 11</option>
          <option value="12">Grade 12</option>
        </select>
      </div>

      <div>
        <label htmlFor="consult-school">School currently attending (*)</label>
        <input
          id="consult-school"
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
      </div>

      <label className="consultation-terms">
        <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
        I agree to the Terms &amp; Conditions
      </label>

      {error && <p className="booking-error">{error}</p>}

      <button type="submit" className="btn btn-gold" disabled={submitting}>
        {submitting ? "Submitting…" : "Sign up for consultation"}
      </button>
    </form>
  );
};

export default ConsultationForm;
