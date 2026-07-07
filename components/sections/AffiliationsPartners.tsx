import React from "react";

type School = { name: string; logo?: string };

const LOGO_STYLE: Record<string, React.CSSProperties> = {
  "Lafayette":     { maxHeight: 36, maxWidth: 120 },
  "Kenyon":        { maxHeight: 52, maxWidth: 52  },
  "Bucknell":      { maxHeight: 36, maxWidth: 120 },
  "Reed College":  { maxHeight: 36, maxWidth: 120 },
};

const ROW_1: School[] = [
  { name: "Harvard",                      logo: "harvard.svg"       },
  { name: "Dartmouth",                    logo: "dartmouth.png"     },
  { name: "Northwestern",                 logo: "northwestern.svg"  },
  { name: "Georgia State",                logo: "georgia-state.svg" },
  { name: "Lafayette",                    logo: "lafayette.png"     },
  { name: "Lehigh",                       logo: "lehigh.png"        },
  { name: "Tufts",                        logo: "tufts.png"         },
  { name: "Kenyon",                       logo: "kenyon.webp"       },
];

const ROW_2: School[] = [
  { name: "Asian University for Women",   logo: "auw.png"           },
  { name: "Babson",                       logo: "babson.svg"        },
  { name: "Denison",                      logo: "denison.png"       },
  { name: "Bucknell",                     logo: "bucknell.svg"      },
  { name: "Aiglon",                       logo: "aiglon.png"        },
  { name: "Taft",                         logo: "taft.png"          },
  { name: "Syracuse",                     logo: "syracuse.svg"      },
  { name: "Reed College",                 logo: "reed-college.png"  },
];

const SchoolSlot = ({ school }: { school: School }) => (
  <div className="logo-marquee-slot">
    {school.logo ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/images/logos/${school.logo}`}
        alt={school.name}
        style={{ maxHeight: 60, maxWidth: 160, objectFit: "contain", ...LOGO_STYLE[school.name] }}
      />
    ) : (
      <span>{school.name}</span>
    )}
  </div>
);

const AffiliationsPartners = () => (
  <section className="affiliations-partners">
    <div className="wrap">
      <div className="affiliations-intro" data-reveal>
        <h2>Experienced advisors from leading institutions</h2>
        <p>
          Project IVY mentors bring firsthand experience from world-class universities and
          schools — guiding students with insight earned on the journey.
        </p>
      </div>
    </div>

    <div className="logo-marquee-group">
      <div className="logo-marquee">
        <div className="logo-marquee-track">
          {[...ROW_1, ...ROW_1].map((school, i) => (
            <SchoolSlot key={`r1-${i}`} school={school} />
          ))}
        </div>
      </div>
      <div className="logo-marquee logo-marquee--reverse">
        <div className="logo-marquee-track">
          {[...ROW_2, ...ROW_2].map((school, i) => (
            <SchoolSlot key={`r2-${i}`} school={school} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AffiliationsPartners;
