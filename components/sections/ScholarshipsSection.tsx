import { SCHOLARSHIPS } from "@/lib/scholarships";
import Button from "@/components/Button";

type Props = {
  showPageHeader?: boolean;
};

const ScholarshipsSection = ({ showPageHeader = true }: Props) => (
  <section className="pt-30 pb-30 bg-cream" id="scholarships">
    <div className="wrap">
      {showPageHeader && (
        <div className="text-center max-w-180 mx-auto" data-reveal>
          <span className="eyebrow center">Financial Support</span>
          <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
            Scholarships at Project IVY
          </h2>
          <p className="mt-4.5 text-ink-soft text-[17px] leading-[1.65]">
            Need-based scholarships available for university applications and IELTS.
          </p>
        </div>
      )}

      <div className="max-w-190 mx-auto mb-12 text-center" data-reveal data-reveal-d="1">
        <p className="text-[1.02rem] text-ink-soft leading-[1.65]">
          At Project IVY, we believe that financial limitations should not prevent motivated
          students from accessing high-quality academic advising, application support, and
          English test preparation. Through our need-based scholarship opportunities, selected
          students may receive partial support for Project IVY programs, university applications,
          and IELTS based on financial need, academic motivation, and commitment to the
          application journey.
        </p>
      </div>

      <div className="grid gap-7">
        {SCHOLARSHIPS.map((scholarship, i) => (
          <article
            className="bg-paper border border-line rounded-(--radius) overflow-hidden transition-[transform,translate,box-shadow,border-color] duration-350 hover:-translate-y-1 hover:shadow-[0_24px_44px_-24px_rgba(14,23,41,0.28)] hover:border-[rgba(184,150,90,0.4)]"
            key={scholarship.id}
            id={scholarship.id}
            data-reveal
            data-reveal-d={String((i % 3) + 1)}
          >
            <div className="pt-8 px-7 pb-6 border-b border-line">
              <h3 className="text-[1.35rem] text-navy leading-[1.2]">{scholarship.title}</h3>
              <p className="mt-3 mb-5 text-[0.98rem] text-ink-soft leading-[1.55]">
                {scholarship.overview}
              </p>
              <Button href="/contact" arrow>
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 max-[680px]:grid-cols-1">
              <div className="pt-6 px-7 pb-7 border-r border-line last:border-r-0 max-[680px]:border-r-0 max-[680px]:border-b max-[680px]:last:border-b-0">
                <h4 className="text-[1rem] text-navy mb-3">Learn More</h4>
                <p className="text-[0.9rem] text-ink-soft leading-[1.55]">{scholarship.learnMore}</p>
              </div>

              <div className="pt-6 px-7 pb-7 border-r border-line last:border-r-0 max-[680px]:border-r-0 max-[680px]:border-b max-[680px]:last:border-b-0">
                <h4 className="text-[1rem] text-navy mb-3">Who Can Apply?</h4>
                <ul className="mt-2 pl-[1.1rem] [&>li+li]:mt-1.5">
                  {scholarship.eligibility.map((item) => (
                    <li key={item} className="text-[0.9rem] text-ink-soft leading-[1.55]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 px-7 pb-7 border-r border-line last:border-r-0 max-[680px]:border-r-0 max-[680px]:border-b max-[680px]:last:border-b-0">
                <h4 className="text-[1rem] text-navy mb-3">How We Select Scholarship Recipients</h4>
                <p className="text-[0.9rem] text-ink-soft leading-[1.55]">Scholarship decisions are based on:</p>
                <ul className="mt-2 pl-[1.1rem] [&>li+li]:mt-1.5">
                  {scholarship.selectionCriteria.map((item) => (
                    <li key={item} className="text-[0.9rem] text-ink-soft leading-[1.55]">
                      {item}
                    </li>
                  ))}
                </ul>
                {scholarship.footnote && (
                  <p className="mt-3 text-[0.84rem] italic text-ink-soft">{scholarship.footnote}</p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ScholarshipsSection;
