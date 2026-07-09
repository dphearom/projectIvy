import PlaceholderImage from "@/components/PlaceholderImage";
import Button from "@/components/Button";
import { PLACEHOLDERS } from "@/lib/placeholders";
import { ADVISING_PROGRAM_SUMMARIES } from "@/lib/programs";

const PROGRAM_PHOTOS: Record<string, string> = {
  "middle-school": PLACEHOLDERS.PROGRAM_MIDDLE_SCHOOL,
  "university-readiness": PLACEHOLDERS.PROGRAM_READINESS,
  "university-application": PLACEHOLDERS.PROGRAM_APPLICATION,
  "graduate-school": PLACEHOLDERS.PROGRAM_GRADUATE_SCHOOL,
};

const ALL_PROGRAMS = [...ADVISING_PROGRAM_SUMMARIES];

const AdvisingPrograms = () => (
  <section className="bg-ivory py-27.5" id="programmes">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <h2>Advising programs at Project IVY</h2>
        <p>
          Personalized advising from Grade 9 through graduate school — programs
          designed to meet students where they are.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-5">
        {ALL_PROGRAMS.map((program, i) => (
          <article
            className="grid grid-cols-[260px_1fr] min-h-47.5 bg-paper border border-line rounded-(--radius) overflow-hidden transition-[transform,translate,box-shadow,border-color] duration-350 ease hover:-translate-y-1.25 hover:shadow-[0_28px_50px_-28px_rgba(14,23,41,0.28)] hover:border-[rgba(184,150,90,0.4)] max-[980px]:grid-cols-[220px_1fr] max-[760px]:grid-cols-1"
            key={program.id}
            data-reveal
            data-reveal-d={String((i % 3) + 1)}
          >
            <PlaceholderImage
              name={PROGRAM_PHOTOS[program.id] ?? program.id}
              aspect="unset"
              className="rounded-none h-full min-h-47.5 max-[760px]:h-55 max-[760px]:min-h-55"
            />
            <div className="flex flex-col justify-between p-[28px_30px]">
              <div>
                <h3 className="text-[1.35rem] text-navy leading-[1.12]">{program.title}</h3>
                <p className="mt-2.5 text-[0.95rem] text-ink-soft leading-[1.55]">{program.desc}</p>
              </div>
              <Button variant="ghost-dark" href={program.href} className="self-start mt-5" arrow>
                View details
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default AdvisingPrograms;
