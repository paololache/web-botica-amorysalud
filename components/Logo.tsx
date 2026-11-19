import { site } from "@/lib/site";

/** Isotipo de Botica Amor y Salud: corazón rojo/verde con cruz blanca y mano, dentro de un círculo blanco.
 *  Versión vectorial simplificada a partir del letrero; reemplazar por el SVG oficial cuando exista. */
export function LogoMark() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="49" fill="#fff" />
      <path d="M50 84C26 67 13 54 13 38c0-12 9-21 20-21 7 0 13 4 17 10 4-6 10-10 17-10 11 0 20 9 20 21 0 16-13 29-37 46z" fill="#d42a2a" />
      <path d="M50 27c-4-6-10-10-17-10-11 0-20 9-20 21 0 5 1 9 4 13h33z" fill="#3fa35b" />
      <path d="M49 33h11v12h12v11H60v13H49V56H37V45h12z" fill="#fff" />
      <path d="M24 56c5-1 9-2 13-1l9 1c2 0 2 2 0 2h-6l8 1c2 0 2 2 0 2l-9 .5c-5 .5-10 .5-15-1z" fill="#3fa35b" />
    </svg>
  );
}

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand-logo ${inverse ? "is-inverse" : ""}`}>
      <LogoMark />
      <span className="brand-logo-text">
        <b>BOTICA</b>
        <span>Amor y Salud</span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}
