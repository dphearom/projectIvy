import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";

const PROGRAMS = [
  {
    grade: "9th grade",
    title: "9th grade consulting program at Project Ivy",
    desc: "Discover your goals and aspirations",
    href: "/programmes#grade-9",
  },
  {
    grade: "10th grade",
    title: "10th grade consulting program at Project Ivy",
    desc: "Discover academic fields and career opportunities",
    href: "/programmes#grade-10",
  },
  {
    grade: "11th grade",
    title: "11th grade consulting program at Project Ivy",
    desc: "Identify majors and target schools",
    href: "/programmes#grade-11",
  },
  {
    grade: "12th grade",
    title: "12th grade consulting program at Project Ivy",
    desc: "Develop an outstanding personal profile",
    href: "/programmes#grade-12",
  },
];

const ConsultingPrograms = () => (
  <section className="consulting-programs" id="programmes">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <span className="eyebrow center">Route</span>
        <h2>Consulting programs at Project Ivy</h2>
      </div>
      <div className="program-grid">
        {PROGRAMS.map((program, i) => (
          <article className="program-card" key={program.grade} data-reveal data-reveal-d={String((i % 4) + 1)}>
            <PlaceholderImage label={`${program.grade} program`} aspect="16 / 10" />
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
    </div>
  </section>
);

export default ConsultingPrograms;
