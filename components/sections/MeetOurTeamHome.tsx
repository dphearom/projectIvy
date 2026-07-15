"use client";

import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import Eyebrow from "@/components/Eyebrow";
import { CORE_TEAM, PHOTO_POSITION, PHOTO_SCALE } from "@/lib/team";
import { useFadeInImage } from "@/lib/useFadeInImage";

const placeholderSlug = (name: string) =>
  `team-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

const TeamPhoto = ({ name, photo }: { name: string; photo: string }) => {
  const fade = useFadeInImage();
  return (
    <Image
      src={`/images/${photo}`}
      alt={name}
      width={400}
      height={400}
      onLoad={fade.onLoad}
      className={fade.className}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: PHOTO_POSITION[name] ?? "center top",
        transform: PHOTO_SCALE[name] ? `scale(${PHOTO_SCALE[name]})` : undefined,
      }}
    />
  );
};

const MeetOurTeamHome = () => (
  <section className="py-30 bg-cream-2" id="meet-our-team">
    <div className="wrap">
      <div className="text-center max-w-180 mx-auto" data-reveal>
        <Eyebrow center>Our Team</Eyebrow>
        <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
          Meet Our Team
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-3 gap-7 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
        {CORE_TEAM.map((member, i) => (
          <article
            className="bg-paper border border-line rounded-(--radius) overflow-hidden"
            key={member.name}
            data-reveal
            data-reveal-d={String((i % 3) + 1)}
          >
            <div className="aspect-square overflow-hidden">
              {member.photo ? (
                <TeamPhoto name={member.name} photo={member.photo} />
              ) : (
                <PlaceholderImage
                  name={placeholderSlug(member.name)}
                  aspect="1 / 1"
                  className="rounded-none"
                />
              )}
            </div>
            <div className="pt-5.5 px-6 pb-5.5">
              <h3 className="text-[1.25rem] text-navy leading-[1.15]">{member.name}</h3>
              <p className="mt-2 mb-1.5 text-[0.82rem] text-ink-soft leading-[1.45]">{member.school}</p>
              <p className="text-[0.82rem] font-semibold tracking-[0.08em] uppercase text-gold">{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default MeetOurTeamHome;
