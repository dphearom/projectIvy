"use client";

import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import Eyebrow from "@/components/Eyebrow";
import { MENTOR_TEAM, PHOTO_POSITION, PHOTO_SCALE } from "@/lib/team";
import { useFadeInImage } from "@/lib/useFadeInImage";

const placeholderSlug = (name: string) =>
  `team-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

const MentorPhoto = ({ name, photo }: { name: string; photo: string }) => {
  const fade = useFadeInImage();
  return (
    <Image
      src={`/images/${photo}.jpg`}
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

const OurTeam = () => (
  <section className="py-30 bg-cream-2" id="team">
    <div className="wrap">
      <div className="text-center max-w-180 mx-auto" data-reveal>
        <Eyebrow center>Our Advisors</Eyebrow>
        <h2 className="text-[clamp(36px,4.4vw,56px)] leading-[1.04] mt-4.5 tracking-[-0.005em]">
          Built by Khmer scholars who lived the journey
        </h2>
        <p className="mt-4.5 text-ink-soft text-[17px] leading-[1.65]">
          Project IVY is led by Cambodian scholars and mentors who have walked the path from
          local classrooms to global universities — and are dedicated to helping the next
          generation do the same.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-3 gap-7 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
        {MENTOR_TEAM.map((member, i) => (
          <article
            className="bg-paper border border-line rounded-(--radius) overflow-hidden transition-[transform,translate,box-shadow,border-color] duration-350 hover:-translate-y-1.25 hover:shadow-[0_28px_50px_-28px_rgba(14,23,41,0.28)] hover:border-[rgba(184,150,90,0.4)]"
            key={member.name}
            data-reveal
            data-reveal-d={String((i % 3) + 1)}
          >
            <div className="aspect-square overflow-hidden">
              {member.photo ? (
                <MentorPhoto name={member.name} photo={member.photo} />
              ) : (
                <PlaceholderImage
                  name={placeholderSlug(member.name)}
                  aspect="1 / 1"
                  className="rounded-none h-full"
                />
              )}
            </div>
            <div className="pt-5.5 px-6 pb-6.5">
              <h3 className="text-[1.25rem] text-navy leading-[1.15]">{member.name}</h3>
              <p className="mt-2 mb-3 text-[0.82rem] font-semibold tracking-[0.08em] uppercase text-gold">
                {member.role}
              </p>
              <p className="mt-2 mb-3 text-[0.82rem] text-ink-soft leading-[1.45]">{member.school}</p>
              <p className="text-[0.92rem] text-ink-soft leading-[1.58]">{member.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default OurTeam;
