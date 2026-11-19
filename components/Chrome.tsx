"use client";

import { useEffect, useState } from "react";
import { site, waLink } from "@/lib/site";
import { Icon } from "./Icon";

const messages = [
  { text: `Delivery gratis en ${site.district} y Los Olivos por compras desde S/ ${site.freeShippingFrom}`, cta: null },
  { text: "Semana de la salud: hasta 30% en dermocosmética", cta: { label: "Ver ofertas", href: "/categoria/dermocosmetica" } },
];

/** Franja superior: texto HTML (no GIF), un mensaje a la vez, rota cada 5 s, cerrable. */
export function AnnouncementBar() {
  const [i, setI] = useState(0);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % messages.length), 5000);
    return () => clearInterval(t);
  }, []);

  if (closed) return null;
  const m = messages[i];
  return (
    <div className={`mb-announce announce ${m.cta ? "" : "is-deep"}`} role="region" aria-label="Anuncio">
      <span aria-live="polite">
        {m.text}
        {m.cta && (
          <>
            {" · "}
            <a href={m.cta.href}>{m.cta.label}</a>
          </>
        )}
      </span>
      <button type="button" className="announce-close" aria-label="Cerrar anuncio" onClick={() => setClosed(true)}>
        <Icon name="close" />
      </button>
    </div>
  );
}

/** Botón flotante de WhatsApp con burbuja de ayuda que aparece una vez a los 10 s. */
export function WhatsAppFab() {
  const [tip, setTip] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("mibotica:tip") === "1";
    } catch {}
    if (seen) return;
    const t = setTimeout(() => {
      setTip(true);
      try {
        sessionStorage.setItem("mibotica:tip", "1");
      } catch {}
    }, 10000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="mb-fab-wrap fab-fixed">
      {tip && (
        <button type="button" className="mb-fab-tip" onClick={() => setTip(false)}>
          ¿Necesitas ayuda con tu receta?
        </button>
      )}
      <a className="mb-fab" href={waLink("Hola, quisiera hacer una consulta.")} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp">
        <Icon name="chat" />
      </a>
    </div>
  );
}
