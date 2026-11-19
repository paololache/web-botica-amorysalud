"use client";

import { useRef } from "react";
import { Icon } from "./Icon";

/** Carrusel horizontal con scroll-snap. Flechas en desktop; en móvil asoma la tercera tarjeta. Sin autoplay. */
export function ProductRail({ children, label }: { children: React.ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  return (
    <div className="rail-wrap">
      <button type="button" className="mb-hero-arrow prev rail-arrow" aria-label="Ver anteriores" onClick={() => scroll(-1)}>
        <Icon name="left" />
      </button>
      <div className="mb-rail" ref={ref} role="region" aria-label={label} tabIndex={0}>
        {children}
      </div>
      <button type="button" className="mb-hero-arrow next rail-arrow" aria-label="Ver siguientes" onClick={() => scroll(1)}>
        <Icon name="right" />
      </button>
    </div>
  );
}
