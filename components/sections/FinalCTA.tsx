import Link from "next/link";
import ArrowRight from "@/components/ArrowRight";

const FinalCTA = () => {
  return (
    <section className="section final-cta" id="cta">
      <div className="container">
        <span className="accent-label">Join the Movement</span>
        <h2 className="reveal">
          We Are Not Just Guiding Students — We Are Building the Future Human Capital
          of Cambodia.
        </h2>
        <p className="reveal reveal-delay-1">
          The journey to global opportunity starts with a single step. Whether
          you&apos;re a student with big dreams or a parent seeking the best path for
          your child — we&apos;re here to guide you every step of the way.
        </p>
        <div className="cta-buttons reveal reveal-delay-2">
          <Link href="/events" className="btn btn-accent" style={{ fontSize: "16px", padding: "17px 36px" }}>
            <ArrowRight size={20} />
            Start Your Journey Today
          </Link>
          <Link href="/#features" className="btn btn-white" style={{ fontSize: "16px", padding: "17px 36px" }}>
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
