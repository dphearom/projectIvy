"use client";

import { useLocale, useTranslations } from "next-intl";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Block =
  | { type: "p"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] };

type Section = { heading: string; blocks: Block[] };

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const TermsModal = ({ open, onOpenChange }: Props) => {
  const t = useTranslations("terms");
  const locale = useLocale();
  const isKm = locale === "km";

  const intro = t.raw("intro") as string[];
  const sections = t.raw("sections") as Section[];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        lang={isKm ? "km" : undefined}
        className={cn("sm:max-w-2xl", isKm && "khmer-script font-body")}
      >
        <DialogHeader>
          <DialogTitle className={cn(isKm && "leading-[1.4]")}>{t("title")}</DialogTitle>
        </DialogHeader>

        <div className="text-[0.92rem] text-ink-soft leading-[1.7]">
          {intro.map((para, i) => (
            <p key={i} className="mb-3.5">
              {para}
            </p>
          ))}

          {sections.map((section, si) => (
            <section
              key={si}
              className={cn(
                "mt-6 pt-5",
                si > 0 && "border-t border-line",
              )}
            >
              <h3 className="font-body text-[1.12rem] font-bold text-navy mb-2.5">{section.heading}</h3>
              {section.blocks.map((block, bi) => {
                if (block.type === "list") {
                  return (
                    <ul key={bi} className="list-none m-0 p-0 mb-3 flex flex-col gap-1.5">
                      {block.items.map((item, ii) => (
                        <li key={ii} className="flex gap-2.5 items-start">
                          <span className="mt-2 size-1.5 rounded-full bg-gold-deep shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "subheading") {
                  return (
                    <h4 key={bi} className="font-body text-[0.95rem] font-semibold text-ink mt-3.5 mb-1.5">
                      {block.text}
                    </h4>
                  );
                }
                return (
                  <p key={bi} className="mb-3">
                    {block.text}
                  </p>
                );
              })}
            </section>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;
