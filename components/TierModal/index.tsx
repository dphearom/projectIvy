"use client";

import { useEffect, useRef, type ReactNode } from "react";
import "./styles.css";

type Props = {
  title: string;
  price: string;
  tagline: string;
  /** Rendered above the padded body — e.g. a full-bleed cover image. */
  media?: ReactNode;
  onClose: () => void;
  /** Body content below the tagline (features, deliverables, outcome box, etc.). */
  children: ReactNode;
  footer: ReactNode;
};

const TierModal = ({ title, price, tagline, media, onClose, children, footer }: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="tier-modal-overlay"
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      <div className="tier-modal" role="dialog" aria-modal="true" aria-label={title}>
        <button type="button" className="tier-modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="tier-modal__scroll">
          {media}
          <div className="tier-modal__body">
            <h3 className="tier-modal__name">{title}</h3>
            <span className="tier-modal__price">{price}</span>
            <p className="tier-modal__tagline">{tagline}</p>
            {children}
            <div className="tier-modal__footer">{footer}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierModal;
