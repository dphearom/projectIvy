const BLOCKS = [
  {
    num: "01",
    title: "Who We Are",
    desc:
      "Project IVY is an educational advisory and mentorship organization founded in Cambodia. We support high-potential students in navigating international education pathways with confidence and purpose.",
  },
  {
    num: "02",
    title: "What We Do",
    desc:
      "We provide expert guidance on academic planning, application strategy, scholarships, and personal branding. Through our programs, mentorship, and resources, we help students turn their potential into opportunity.",
  },
  {
    num: "03",
    title: "Why We Exist",
    desc:
      "We exist to level the playing field. Every Cambodian student deserves access to the right information, the right mentors, and the right opportunities to build a global future, regardless of their background.",
  },
] as const;

const WhoWeAre = () => (
  <section className="py-30 bg-cream-2" id="who-we-are">
    <div className="wrap">
      <div className="text-center max-w-180 mx-auto" data-reveal>
        <span className="eyebrow center">Who We Are</span>
        <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
          The foundation behind Project IVY
        </h2>
      </div>
      <div className="mt-14 grid grid-cols-3 gap-6 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
        {BLOCKS.map(({ num, title, desc }, i) => (
          <article
            className="group relative overflow-hidden bg-paper border border-line rounded-(--radius) pt-9.5 px-8.5 pb-8.5 transition-[transform,filter,border-color] duration-300 hover:-translate-y-0.75 hover:drop-shadow-[0_14px_28px_rgba(14,23,41,0.18)] hover:border-[rgba(184,150,90,0.4)] before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[linear-gradient(90deg,var(--gold)_0%,rgba(184,150,90,0.3)_70%,transparent_100%)] before:origin-left before:scale-x-0 before:transition-transform before:duration-400 hover:before:scale-x-100"
            key={title}
            data-reveal
            data-reveal-d={String(i + 1)}
          >
            <div className="font-display font-semibold italic text-[38px] text-gold leading-none">{num}</div>
            <h3 className="text-[25px] mt-4 leading-[1.12] text-navy">{title}</h3>
            <p className="mt-3 text-ink-soft text-[15px] leading-[1.62]">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAre;
