import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { PLACEHOLDERS } from "@/lib/placeholders";
import { ADVISING_PROGRAM_SUMMARIES, SERVICE_CAMPS_SUMMARY } from "@/lib/programs";

const PROGRAM_PHOTOS: Record<string, string> = {
  "university-readiness": PLACEHOLDERS.PROGRAM_READINESS,
  "university-application": PLACEHOLDERS.PROGRAM_APPLICATION,
  "service-camps": PLACEHOLDERS.PROGRAM_SERVICE_CAMPS,
};

// const ALL_PROGRAMS = [...ADVISING_PROGRAM_SUMMARIES, SERVICE_CAMPS_SUMMARY];
const ALL_PROGRAMS = [...ADVISING_PROGRAM_SUMMARIES];

const AdvisingPrograms = () => (
  <section className="consulting-programs" id="programmes">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <h2>Advising programs at Project IVY</h2>
        <p>
          Personalized advising from Grade 9 through university application — three pathways
          designed to meet students where they are.
        </p>
      </div>
      <div className="program-grid--h">
        {ALL_PROGRAMS.map((program, i) => (
          <article
            className="program-card program-card--h"
            key={program.id}
            data-reveal
            data-reveal-d={String((i % 3) + 1)}
          >
            <PlaceholderImage name={PROGRAM_PHOTOS[program.id] ?? program.id} aspect="4 / 3" />
            <div className="program-body">
              <div>
                <h3>{program.title}</h3>
                <p>{program.desc}</p>
              </div>
              <Link className="btn btn-ghost-dark program-card-btn" href={program.href}>
                View details <span className="arrow">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default AdvisingPrograms;
