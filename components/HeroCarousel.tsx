"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

type Slide = {
  kicker: string;
  title: React.ReactNode;
  cta: { label: string; href: string };
  image: string;
  alt: string;
  bg?: string;
};

const slides: Slide[] = [
  {
    kicker: "Solo esta semana",
    title: (
      <>
        Protección solar <em>hasta 30%</em> de descuento
      </>
    ),
    cta: { label: "Ver ofertas", href: "/categoria/dermocosmetica" },
    image: "/img/banners/hero-solar.jpg",
    alt: "Mujer sonriendo mientras se aplica crema en el rostro",
  },
  {
    kicker: "Vitaminas y defensas",
    title: (
      <>
        Lleva 3 y paga 2 en <em>vitamina C</em>
      </>
    ),
    cta: { label: "Ver nutrición", href: "/categoria/nutricion" },
    bg: "var(--brand-soft)",
    image: "/img/banners/hero-vitaminas.jpg",
    alt: "Naranjas frescas en el árbol, fuente de vitamina C",
  },
  {
    kicker: "Atención farmacéutica",
    title: (
      <>
        Envía tu receta por WhatsApp y <em>te cotizamos</em>
      </>
    ),
    cta: { label: "Ver medicamentos", href: "/categoria/medicamentos" },
    bg: "var(--cream)",
    image: "/img/banners/hero-farmaceutico.jpg",
    alt: "Profesional de salud con bata blanca revisando una tablet",
  },
];

/** Hero: autoplay 6 s con pausa en hover/foco, flechas y dots (highlight el activo). Legal fuera del slide. */
export function HeroCarousel() {
  const [i, setI] = useState(0);
  const paused = useRef(false);
  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => {
      if (!paused.current) setI((n) => (n + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];
  return (
    <section aria-roledescription="carrusel" aria-label="Promociones destacadas">
      <div
        className="mb-hero"
        style={{ "--hero-bg": s.bg ?? "var(--rose-soft)", background: "var(--hero-bg)" } as React.CSSProperties}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onFocus={() => (paused.current = true)}
        onBlur={() => (paused.current = false)}
      >
        <div className="mb-hero-copy" key={i} aria-roledescription="diapositiva" aria-label={`${i + 1} de ${slides.length}`}>
          <span className="mb-hero-kicker">{s.kicker}</span>
          <h2 className="mb-hero-title">{s.title}</h2>
          <Link className="mb-btn mb-btn-primary" href={s.cta.href}>
            {s.cta.label} <Icon name="right" />
          </Link>
        </div>
        <div className="mb-hero-art">
          {slides.map((sl, k) => (
            <Image
              key={sl.image}
              src={sl.image}
              alt={k === i ? sl.alt : ""}
              aria-hidden={k !== i}
              fill
              sizes="(max-width: 900px) 100vw, 600px"
              priority={k === 0}
              className={`hero-img ${k === i ? "is-on" : ""}`}
            />
          ))}
        </div>
        <button type="button" className="mb-hero-arrow prev" aria-label="Anterior" onClick={() => go(i - 1)}>
          <Icon name="left" />
        </button>
        <button type="button" className="mb-hero-arrow next" aria-label="Siguiente" onClick={() => go(i + 1)}>
          <Icon name="right" />
        </button>
        <div className="mb-hero-dots">
          {slides.map((_, k) => (
            <button key={k} type="button" className={k === i ? "on" : ""} aria-label={`Ir a la diapositiva ${k + 1}`} aria-current={k === i} onClick={() => go(k)} />
          ))}
        </div>
      </div>
      <p className="mb-legal">Válido del 18 al 30 de noviembre de 2026 o hasta agotar stock. Imágenes referenciales.</p>
    </section>
  );
}
