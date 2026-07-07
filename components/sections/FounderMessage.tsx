"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const FounderMessage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full border border-[rgba(182,146,79,0.28)] rounded-[var(--radius)] bg-[rgba(243,237,226,0.45)]">
      <button
        type="button"
        className={cn(
          "flex items-start justify-between gap-6 w-full text-left cursor-pointer border-none font-[inherit] bg-transparent",
          "p-[clamp(24px,3.5vw,36px)] transition-[background] duration-[250ms]",
          "hover:bg-[rgba(243,237,226,0.65)]",
          "max-[980px]:flex-col max-[980px]:items-stretch max-[980px]:gap-4",
        )}
        aria-expanded={expanded}
        aria-controls="founder-message-body"
        onClick={() => setExpanded((open) => !open)}
      >
        <span className="flex-1 min-w-0">
          <h3 className="font-display not-italic text-[clamp(1.25rem,2vw,1.5rem)] tracking-[0.02em] uppercase text-navy mb-3">
            Message from the Founder
          </h3>
          <p className="font-display italic text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.5] text-navy m-0">
            Welcome to Project IVY: Turn Your Ambition into Admission.
          </p>
        </span>
        <span
          className={cn(
            "flex-none inline-flex items-center gap-2 text-[0.88rem] font-semibold tracking-[0.02em] text-[var(--gold-deep)] whitespace-nowrap pt-1",
            "max-[980px]:pt-0 max-[980px]:justify-end",
          )}
        >
          {expanded ? "Show less" : "Read full message"}
          <svg
            className={cn("transition-transform duration-300", expanded && "rotate-180")}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>

      {expanded && (
        <div id="founder-message-body" className="border-t border-[rgba(182,146,79,0.2)]">
          <div className="p-[clamp(20px,3vw,28px)_clamp(24px,3.5vw,36px)_clamp(28px,3.5vw,40px)]">
            <p className="font-display italic text-[1.02rem] leading-[1.72] text-[var(--ink)] mb-[18px]">
              I am so honored to welcome you to this program, not only as the Program
              Director, but as someone who deeply understands what it means to dream beyond
              the limits of where you begin.
            </p>
            <p className="font-display italic text-[1.02rem] leading-[1.72] text-[var(--ink)] mb-[18px]">
              Project IVY was born from a simple but powerful belief: talent is everywhere,
              but guidance is not. Across Cambodia, there are students with extraordinary
              potential&mdash;students with intelligence, discipline, creativity, courage, and
              ambition&mdash;who simply have not always had access to the right information,
              advising, or support. Many students are expected to make life-changing decisions
              about their education without a clear roadmap, without someone to explain the
              process, and without a community that truly understands the journey.
            </p>
            <p className="font-display italic text-[1.02rem] leading-[1.72] text-[var(--ink)] mb-[18px]">
              Project IVY was created to change that.
            </p>
            <p className="font-display italic text-[1.02rem] leading-[1.72] text-[var(--ink)] mb-[18px]">
              Project IVY is built and run by Khmer Scholars and global advisors who have walked the
              path before you. Many of us know what it feels like to come from communities where
              international education can seem distant, complicated, or even impossible. We know
              the uncertainty of applying to schools abroad, searching for scholarships, writing
              essays that capture who you are, and learning how to present your story with
              confidence. More importantly, we know that with the right guidance, students do
              not have to navigate this journey alone.
            </p>
            <p className="font-display italic text-[1.02rem] leading-[1.72] text-[var(--ink)] mb-[18px]">
              On behalf of myself and all Project IVY advisors, I want you to know that this
              program was designed with great care. Every meeting, workshop, discussion, activity, and
              one-on-one session has been shaped around one goal: to help you leave with more
              than inspiration. We want you to leave with direction. We want you to leave with
              a well-rounded profile, stronger application materials, a clearer sense of your story, a deeper
              understanding of your options, and the confidence to take your next step.
            </p>
            <p className="font-display italic text-[1.02rem] leading-[1.72] text-[var(--ink)] mb-[18px]">
              You will be challenged to think honestly about who you are,
              what you value, and what kind of future you want to build. You will learn how to
              research schools strategically, strengthen your academic profile, write with
              authenticity, prepare for interviews, and turn your experiences into a compelling
              application narrative. But beyond practical tools, I hope you also discover
              something even more important: that your story matters.
            </p>
            <p className="font-display italic text-[1.02rem] leading-[1.72] text-[var(--ink)] mb-[18px]">
              Project IVY is not only about admission. It is about preparation, self discovery,
              and possibility. It is about helping Cambodian students see that global education
              is not reserved for a select few. It is about building a generation of young people
              who are ready to step into the world with courage, skill, and purpose&mdash;and one
              day, use those opportunities to open doors for others.
            </p>
            <p className="font-display italic text-[1.02rem] leading-[1.72] text-[var(--ink)] mb-[18px]">
              As you begin this journey, I encourage you to be brave. Ask questions. Take notes.
              Share honestly. Revise your work. Make mistakes. Fix those gaps. Listen to your
              advisors. Learn from your peers. Be willing to grow.
            </p>
            <p className="font-display italic text-[1.02rem] leading-[1.72] text-[var(--ink)] mb-[18px]">
              Take the first step in becoming the narrator of your own story. Welcome to Project
              IVY.
            </p>
            <p className="font-display italic text-[1.02rem] leading-[1.72] text-[var(--ink)] mt-7 pt-6 border-t border-[rgba(182,146,79,0.25)] mb-0">
              With warmth and belief in your potential,
              <br />
              <strong className="not-italic font-semibold text-navy">Somphors Tann</strong>
              <br />
              Founder &amp; Program Director, Project IVY
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FounderMessage;
