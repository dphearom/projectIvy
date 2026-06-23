import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { PROGRAM_SUMMARIES } from "@/lib/programs";

const ConsultingPrograms = () => (
  <section className="consulting-programs" id="programmes">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <h2>Consulting programs at Project IVY</h2>
        <p>
          Personalized advising from Grade 9 through university application — three
          pathways designed to meet students where they are.
        </p>
      </div>
      <div className="program-grid program-grid--stack">
        {PROGRAM_SUMMARIES.map((program, i) => (
          <article
            className="program-card"
            key={program.id}
            data-reveal
            data-reveal-d={String((i % 3) + 1)}
          >
            <PlaceholderImage label={program.title} aspect="16 / 10" />
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

export default ConsultingPrograms;
