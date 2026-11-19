import Link from "next/link";
import { categories } from "@/lib/data";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

const cols = [
  {
    title: "Información",
    links: [
      ["Nosotros", "#"],
      ["Nuestra botica", "/#ubicacion"],
      ["Términos y condiciones", "#"],
      ["Política de privacidad", "#"],
      ["Trabaja con nosotros", "#"],
      ["Créditos de imágenes", "/creditos"],
    ],
  },
  {
    title: "Categorías",
    links: categories.slice(0, 6).map((c) => [c.name, `/categoria/${c.slug}`]),
  },
  {
    title: "Mi cuenta",
    links: [
      ["Mi carrito", "/carrito"],
      ["Catálogo digital", "/buscar"],
      ["Delivery", "/#ubicacion"],
      ["Atención farmacéutica", "#"],
    ],
  },
];

/** Footer: columnas que en móvil se vuelven acordeones (details/summary) + franja de confianza. */
export function Footer() {
  return (
    <footer className="mb-footer">
      <div className="container">
        <div className="mb-footer-grid">
          {cols.map((col) => (
            <details key={col.title} className="footer-col" open>
              <summary>
                <h4>{col.title}</h4>
              </summary>
              <ul>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <div className="mb-footer-brand">
            <Logo inverse />
            <p className="footer-tagline">{site.tagline}</p>
            <div className="mb-social">
              {(["facebook", "instagram", "tiktok"] as const).map((n) => (
                <a key={n} href="#" aria-label={n}>
                  <span>
                    <Icon name={n} />
                  </span>
                </a>
              ))}
            </div>
            <a href="#" style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
              <Icon name="book" />
              Libro de reclamaciones
            </a>
            <div className="mb-pay" aria-label="Medios de pago">
              <span>YAPE</span>
              <span>PLIN</span>
              <span>VISA</span>
              <span>MC</span>
            </div>
          </div>
        </div>
        <div className="mb-footer-trust">
          <span>Químico farmacéutico responsable: {site.pharmacist}</span>
          <span>
            {site.digemid} · {site.address}
          </span>
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
