import type { Metadata } from "next";
import Image from "next/image";
import credits from "@/lib/credits.json";

export const metadata: Metadata = { title: "Créditos de imágenes" };

export default function CreditsPage() {
  return (
    <div className="container section-tight">
      <header className="page-head">
        <h1 className="h1">Créditos de imágenes</h1>
        <p>Imágenes referenciales de dominio público (CC0) obtenidas mediante Openverse. Serán reemplazadas por fotos propias.</p>
      </header>
      <ul className="credits">
        {credits.map((c) => (
          <li key={c.file}>
            <span className="search-thumb">
              <Image src={c.file} alt="" fill sizes="56px" className="cover-img" />
            </span>
            <span>
              <a href={c.foreign_landing_url} target="_blank" rel="noopener noreferrer">
                {c.title || "Sin título"}
              </a>
              <br />
              {c.creator ? `${c.creator} · ` : ""}
              {c.license.toUpperCase()} · {c.source}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
