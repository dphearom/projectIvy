import Image from "next/image";
import { MENTOR_TEAM, PHOTO_POSITION, PHOTO_SCALE } from "@/lib/team";

const OurTeam = () => (
  <section className="about-sec alt" id="team">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <span className="eyebrow center">Our Advisors</span>
        <h2>Built by Khmer scholars who lived the journey</h2>
        <p>
          Project IVY is led by Cambodian scholars and mentors who have walked the path from
          local classrooms to global universities — and are dedicated to helping the next
          generation do the same.
        </p>
      </div>

      <div className="team-card-grid">
        {MENTOR_TEAM.map((member, i) => (
          <article className="team-card" key={member.name} data-reveal data-reveal-d={String((i % 3) + 1)}>
            <div className="team-card-photo" style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
              <Image
                src={`/images/${member.photo}.jpg`}
                alt={member.name}
                width={400}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: PHOTO_POSITION[member.name] ?? "center top", transform: PHOTO_SCALE[member.name] ? `scale(${PHOTO_SCALE[member.name]})` : undefined }}
              />
            </div>
            <div className="team-card-body">
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-school">{member.school}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default OurTeam;
