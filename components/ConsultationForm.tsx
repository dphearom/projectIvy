"use client";

import { useState } from "react";
import { cn, EMAIL_RE } from "@/lib/utils";

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

  const labelCls = "font-body text-[0.85rem] font-semibold text-ink block mb-1.5";
  const fieldCls =
    "w-full py-3 px-4 rounded-[10px] border border-line bg-ivory font-body text-[0.95rem] text-ink transition-[border-color,box-shadow] duration-200 outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(184,150,90,0.12)]";

  if (done) {
    return (
      <div className="text-center py-5">
        <div className="size-14 rounded-full bg-[linear-gradient(180deg,var(--gold-soft),var(--gold))] text-[#1a1505] text-[1.4rem] font-bold flex items-center justify-center mx-auto mb-4">
          ✓
        </div>
        <h4 className="text-[1.3rem] text-ink mb-2">Thank you!</h4>
        <p className="text-[0.95rem] text-ink-soft mb-5">
          Your information has been submitted successfully. We will contact you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4.5" onSubmit={handleSubmit} noValidate>
      <fieldset className="border-none m-0 p-0">
        <legend className={cn(labelCls, "mb-2.5")}>You are:</legend>
        <div className="flex gap-2.5">
          {(["parent", "student"] as const).map((value) => {
            const active = role === value;
            return (
              <label
                key={value}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3.25 px-3.5 rounded-[10px] border-2 text-[0.93rem] font-semibold cursor-pointer transition-[border-color,background,color,box-shadow] duration-200",
                  active
                    ? "text-paper border-navy bg-navy shadow-[0_8px_20px_-10px_rgba(14,23,41,0.35)]"
                    : "border-line bg-ivory text-ink-soft hover:border-[rgba(184,150,90,0.5)] hover:text-ink",
                )}
              >
                <input
                  type="radio"
                  name="role"
                  value={value}
                  checked={active}
                  onChange={() => setRole(value)}
                  className="absolute opacity-0 pointer-events-none"
                />
                {value === "parent" ? "Parents" : "Student"}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="consult-name" className={labelCls}>
          {isParent ? "Parent's full name" : "Full name"} (*)
        </label>
        <input
          id="consult-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          className={fieldCls}
        />
      </div>

      <div>
        <label htmlFor="consult-email" className={labelCls}>Email (*)</label>
        <input
          id="consult-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className={fieldCls}
        />
      </div>

      <div>
        <label htmlFor="consult-phone" className={labelCls}>Phone (*)</label>
        <input
          id="consult-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
          className={fieldCls}
        />
      </div>

      {isParent && (
        <div>
          <label htmlFor="consult-child-name" className={labelCls}>Child&apos;s name (*)</label>
          <input
            id="consult-child-name"
            type="text"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            className={fieldCls}
          />
        </div>
      )}

      <div>
        <label htmlFor="consult-grade" className={labelCls}>
          {isParent ? "Child's grade level" : "Grade"} (*)
        </label>
        <select
          id="consult-grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className={cn(fieldCls, "appearance-none pr-10 cursor-pointer bg-no-repeat")}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231b2436' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
            backgroundPosition: "right 14px center",
            backgroundSize: "16px 16px",
          }}
        >
          <option value="">Select...</option>
          <option value="9">Grade 9</option>
          <option value="10">Grade 10</option>
          <option value="11">Grade 11</option>
          <option value="12">Grade 12</option>
        </select>
      </div>

      <div>
        <label htmlFor="consult-school" className={labelCls}>School currently attending (*)</label>
        <input
          id="consult-school"
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className={fieldCls}
        />
      </div>

      <label className="flex items-start gap-2.5 text-[0.88rem] text-ink-soft cursor-pointer">
        <input
          type="checkbox"
          checked={terms}
          onChange={(e) => setTerms(e.target.checked)}
          className="mt-0.75"
        />
        I agree to the Terms &amp; Conditions
      </label>

      {error && <p className="text-[0.88rem] text-[#c0392b]">{error}</p>}

      <button type="submit" className="btn btn-gold w-full justify-center" disabled={submitting}>
        {submitting ? "Submitting…" : "Sign up for consultation"}
      </button>
    </form>
  );
};

export default ConsultationForm;
