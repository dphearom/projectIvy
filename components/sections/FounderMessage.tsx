"use client";

import { useState } from "react";

const FounderMessage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`founder-message${expanded ? " founder-message--expanded" : ""}`}>
      <button
        type="button"
        className="founder-message__toggle"
        aria-expanded={expanded}
        aria-controls="founder-message-body"
        onClick={() => setExpanded((open) => !open)}
      >
        <span className="founder-message__toggle-text">
          <h3>Message from the Founder</h3>
          <p className="founder-message__lead">
            Welcome to Project IVY: Turn Your Ambition into Admission.
          </p>
        </span>
        <span className="founder-message__toggle-action">
          {expanded ? "Show less" : "Read full message"}
          <svg
            className={`founder-message__chevron${expanded ? " open" : ""}`}
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
      <div
        id="founder-message-body"
        className="founder-message__body"
      >
        <div className="founder-message__body-inner">
        <p>
          I am so honored to welcome you to this programme, not only as the Programme
          Director, but as someone who deeply understands what it means to dream beyond
          the limits of where you begin.
        </p>
        <p>
          Project IVY was born from a simple but powerful belief: talent is everywhere,
          but guidance is not. Across Cambodia, there are students with extraordinary
          potential&mdash;students with intelligence, discipline, creativity, courage, and
          ambition&mdash;who simply have not always had access to the right information,
          mentorship, or support. Many students are expected to make life-changing decisions
          about their education without a clear roadmap, without someone to explain the
          process, and without a community that truly understands the journey.
        </p>
        <p>Project IVY was created to change that.</p>
        <p>
          This bootcamp is built by Khmer Scholars and global mentors who have walked the
          path before you. Many of us know what it feels like to come from communities where
          international education can seem distant, complicated, or even impossible. We know
          the uncertainty of applying to schools abroad, searching for scholarships, writing
          essays that capture who you are, and learning how to present your story with
          confidence. More importantly, we know that with the right guidance, students do
          not have to navigate this journey alone.
        </p>
        <p>
          On behalf of myself and all Project IVY mentors, I want you to know that this
          programme was designed with great care. Every workshop, discussion, activity, and
          one-on-one session has been shaped around one goal: to help you leave with more
          than inspiration. We want you to leave with direction. We want you to leave with
          stronger application materials, a clearer sense of your story, a deeper
          understanding of your options, and the confidence to take your next step.
        </p>
        <p>
          Over these seven days, you will be challenged to think honestly about who you are,
          what you value, and what kind of future you want to build. You will learn how to
          research schools strategically, strengthen your academic profile, write with
          authenticity, prepare for interviews, and turn your experiences into a compelling
          application narrative. But beyond practical tools, I hope you also discover
          something even more important: that your story matters.
        </p>
        <p>
          Project IVY is not only about admission. It is about preparation, self discovery,
          and possibility. It is about helping Cambodian students see that global education
          is not reserved for a select few. It is about building a generation of young people
          who are ready to step into the world with courage, skill, and purpose&mdash;and one
          day, use those opportunities to open doors for others.
        </p>
        <p>
          As you begin this journey, I encourage you to be brave. Ask questions. Take notes.
          Share honestly. Revise your work. Make mistakes. Fix those gaps. Listen to your
          mentors. Learn from your peers. Be willing to grow.
        </p>
        <p>
          Take the first step in becoming the narrator of your own story. Welcome to Project
          IVY.
        </p>
        <p className="founder-message__signoff">
          With warmth and belief in your potential,
          <br />
          <strong>Somphors Tann</strong>
          <br />
          Founder &amp; Programme Director, Project IVY
        </p>
        </div>
      </div>
      )}
    </div>
  );
};

export default FounderMessage;
