"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useFadeInImage } from "@/lib/useFadeInImage";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  tags: string[];
  rawDate: string;
  onClick?: () => void;
}

function parseEventDate(rawDate: string, date: string) {
  const d = new Date(rawDate);
  if (!Number.isNaN(d.getTime())) {
    return {
      day: String(d.getDate()),
      month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
      year: String(d.getFullYear()),
    };
  }
  const parts = date.split(/[ ,]+/);
  if (parts.length >= 2) {
    return {
      month: parts[0].toUpperCase(),
      day: parts[1],
      year: parts[2] ?? "",
    };
  }
  return { day: "", month: "", year: "" };
}

const EventCard = ({ title, image, location, date, time, rawDate, onClick }: Props) => {
  const { day, month, year } = parseEventDate(rawDate, date);
  const fade = useFadeInImage();
  const { markLoaded } = fade;
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) markLoaded();
  }, [markLoaded]);

  // <button> instead of <Link> because clicking opens the EventModal, not a new page.
  // CSS resets button appearance (border, background, font, padding) in globals.css .ev rule.
  return (
    <button
      type="button"
      className="bg-paper rounded-(--radius) overflow-hidden border border-line flex flex-col transition duration-400 ease-[cubic-bezier(.2,.7,.2,1)] text-inherit h-full cursor-pointer text-left appearance-none p-0 w-full hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-28px_rgba(19,35,63,0.35)]"
      onClick={onClick}
    >
      <div className="aspect-[16/10] relative">
        <div className="absolute inset-0" aria-label={title}>
          <Image
            ref={imgRef}
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 380px"
            style={{ objectFit: "cover" }}
            className={fade.className}
            onLoad={fade.onLoad}
          />
        </div>
        {day && month && (
          <div className="absolute top-3.5 left-3.5 z-3 bg-paper rounded-[10px] py-2 px-3 text-center leading-none shadow-[0_10px_24px_-12px_rgba(0,0,0,0.4)]">
            <b className="font-display text-[1.5rem] text-ink block">{day}</b>
            <span className="text-[0.68rem] tracking-[0.14em] uppercase text-gold">{month}</span>
          </div>
        )}
      </div>
      <div className="pt-6 px-6 pb-6.5 flex flex-col flex-1">
        <div className="font-body text-[0.78rem] tracking-[0.12em] uppercase text-gold">{location}</div>
        <h3 className="text-[1.35rem] mt-3 mb-4 tracking-[-0.01em] leading-[1.12] text-navy">{title}</h3>
        <div className="font-body mt-auto flex justify-between items-center text-[0.86rem] text-ink-soft pt-4 border-t border-line">
          <span>
            {month} {day}{year ? `, ${year}` : ""} · {time}
          </span>
          <span className="text-ink font-semibold">Reserve →</span>
        </div>
      </div>
    </button>
  );
};

export default EventCard;
