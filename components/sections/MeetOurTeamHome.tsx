import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import { HOME_TEAM, PHOTO_POSITION, PHOTO_SCALE } from "@/lib/team";

const placeholderSlug = (name: string) =>
  `team-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

const MeetOurTeamHome = () => (
  <section className="about-sec alt" id="meet-our-team">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <span className="eyebrow center">Our Team</span>
        <h2>Meet Our Team</h2>
      </div>

      <div className="team-card-grid">
        {HOME_TEAM.map((member, i) => (
          <article
            className="team-card team-card--compact"
            key={member.name}
            data-reveal
            data-reveal-d={String((i % 3) + 1)}
          >
            <div className="team-card-photo" style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
              {member.photo ? (
                <Image
                  src={`/images/${member.photo}`}
                  alt={member.name}
                  width={400}
                  height={400}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: PHOTO_POSITION[member.name] ?? "center top",
                    transform: PHOTO_SCALE[member.name]
                      ? `scale(${PHOTO_SCALE[member.name]})`
                      : undefined,
                  }}
                />
              ) : (
                <PlaceholderImage
                  name={placeholderSlug(member.name)}
                  aspect="1 / 1"
                />
              )}
            </div>
            <div className="team-card-body">
              <h3>{member.name}</h3>
              <p className="team-school">{member.school}</p>
              <p className="team-role">{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default MeetOurTeamHome;
