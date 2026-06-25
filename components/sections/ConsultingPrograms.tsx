import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { PLACEHOLDERS } from "@/lib/placeholders";
import { ADVISING_PROGRAM_SUMMARIES } from "@/lib/programs";

const PROGRAM_PHOTOS: Record<string, string> = {
  "university-readiness": PLACEHOLDERS.PROGRAM_READINESS,
  "university-application": PLACEHOLDERS.PROGRAM_APPLICATION,
};

const AdvisingPrograms = () => (
  <section className="consulting-programs" id="programmes">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <h2>Advising programs at Project IVY</h2>
        <p>
          Personalized advising from Grade 9 through university application — two pathways
          designed to meet students where they are.
        </p>
      </div>
      <div className="program-grid program-grid--stack">
        {ADVISING_PROGRAM_SUMMARIES.map((program, i) => (
          <article
            className="program-card"
            key={program.id}
            data-reveal
            data-reveal-d={String((i % 2) + 1)}
          >
            <PlaceholderImage name={PROGRAM_PHOTOS[program.id]} aspect="16 / 10" />
            <div className="program-body">
              <h3>{program.title}</h3>
              <p>{program.desc}</p>
              <Link className="program-link" href={program.href}>
                See details <span className="arrow">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="events-foot" data-reveal>
        <Link className="btn btn-ghost-dark" href="/programmes">
          Explore all programs <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default AdvisingPrograms;
