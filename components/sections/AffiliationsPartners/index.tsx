import React from "react";
import "./styles.css";

type School = { name: string; logo?: string };

const LOGO_STYLE: Record<string, React.CSSProperties> = {
  "Lafayette":    { maxHeight: 36, maxWidth: 120 },
  "Kenyon":       { maxHeight: 52, maxWidth: 52  },
  "Bucknell":     { maxHeight: 36, maxWidth: 120 },
  "Reed College": { maxHeight: 36, maxWidth: 120 },
  "Harvard":      { maxHeight: 36, maxWidth: 120 },
  "Lehigh":       { maxHeight: 36, maxWidth: 120 },
  "Northwestern": { maxHeight: 36, maxWidth: 120 },
};

const ROW_1: School[] = [
  { name: "Harvard",       logo: "harvard.svg"       },
  { name: "Dartmouth",     logo: "dartmouth.png"     },
  { name: "Northwestern",  logo: "northwestern.svg"  },
  { name: "Georgia State", logo: "georgia-state.svg" },
  { name: "Lafayette",     logo: "lafayette.png"     },
  { name: "Lehigh",        logo: "lehigh.png"        },
  { name: "Tufts",         logo: "tufts.png"         },
  { name: "Kenyon",        logo: "kenyon.webp"       },
];

const ROW_2: School[] = [
  { name: "Asian University for Women", logo: "auw.png"          },
  { name: "Babson",                     logo: "babson.svg"       },
  { name: "Denison",                    logo: "denison.png"      },
  { name: "Bucknell",                   logo: "bucknell.svg"     },
  { name: "Aiglon",                     logo: "aiglon.png"       },
  { name: "Taft",                       logo: "taft.png"         },
  { name: "Syracuse",                   logo: "syracuse.svg"     },
  { name: "Reed College",               logo: "reed-college.png" },
];

const SchoolSlot = ({ school }: { school: School }) => (
  <div className="flex-none w-40 mr-4.5 aspect-[2.4/1] rounded-[10px] border border-line bg-ivory-2 flex items-center justify-center px-4.5 py-3 transition-[border-color,box-shadow,transform,translate,scale,background] duration-250 hover:border-[rgba(184,150,90,0.8)] hover:shadow-[0_0_0_3px_rgba(184,150,90,0.15)] hover:scale-[1.08] hover:-translate-y-0.5 hover:bg-white">
    {school.logo ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/images/logos/${school.logo}`}
        alt={school.name}
        style={{ maxHeight: 60, maxWidth: 160, objectFit: "contain", ...LOGO_STYLE[school.name] }}
      />
    ) : (
      <span className="text-[0.72rem] font-semibold tracking-wider uppercase text-ink-soft text-center leading-[1.2]">
        {school.name}
      </span>
    )}
  </div>
);

const AffiliationsPartners = () => (
  <section className="bg-paper py-27.5 overflow-hidden">
    <div className="wrap">
      <div className="text-center max-w-170 mx-auto mb-12" data-reveal>
        <h2 className="text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.01em]">
          Experienced advisors from leading institutions
        </h2>
        <p className="mt-4.5 text-[1.05rem] leading-[1.65] text-ink-soft">
          Project IVY mentors bring firsthand experience from world-class universities and
          schools — guiding students with insight earned on the journey.
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-4.5">
      {/* Row 1 — forward */}
      <div
        className="overflow-hidden py-2.5 mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] group"
      >
        <div className="flex w-max animate-[logo-marquee_38s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...ROW_1, ...ROW_1].map((school, i) => (
            <SchoolSlot key={`r1-${i}`} school={school} />
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div
        className="overflow-hidden py-2.5 mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] group"
      >
        <div className="flex w-max animate-[logo-marquee_44s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
          {[...ROW_2, ...ROW_2].map((school, i) => (
            <SchoolSlot key={`r2-${i}`} school={school} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AffiliationsPartners;
