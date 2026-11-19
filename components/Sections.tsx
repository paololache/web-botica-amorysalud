import Image from "next/image";
import Link from "next/link";
import { brands, categories, type Product } from "@/lib/data";
import { splitPrice } from "@/lib/format";
import { site, waLink } from "@/lib/site";
import { Icon, type IconName } from "./Icon";
import { ProductCard } from "./Product";
import { ProductRail } from "./ProductRail";

export function SectionHeader({ title, subtitle, href, linkLabel = "Ver más", id }: { title: string; subtitle?: string; href?: string; linkLabel?: string; id?: string }) {
  return (
    <div className="mb-sechead">
      <div>
        <h2 id={id}>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {href && (
        <Link className="mb-link" href={href}>
          {linkLabel} <Icon name="right" />
        </Link>
      )}
    </div>
  );
}

export function ProductSection({ title, subtitle, href, products }: { title: string; subtitle?: string; href?: string; products: Product[] }) {
  return (
    <section className="section">
      <SectionHeader title={title} subtitle={subtitle} href={href} />
      <ProductRail label={title}>
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </ProductRail>
    </section>
  );
}

const benefits: { icon: IconName; title: string; text: string; href?: string }[] = [
  { icon: "truck", title: "Delivery en 2 h", text: `Gratis desde S/ ${site.freeShippingFrom}` },
  { icon: "chat", title: "Atención farmacéutica", text: "Consulta por WhatsApp", href: waLink("Hola, quisiera una consulta farmacéutica.") },
  { icon: "mobile", title: "Paga con Yape o Plin", text: "También tarjetas" },
  { icon: "rx", title: "Envía tu receta", text: "Te cotizamos al toque", href: waLink("Hola, quiero enviar mi receta para cotizar.") },
];

export function BenefitsBar() {
  return (
    <section className="section-tight" aria-label="Beneficios">
      <div className="mb-benefits">
        {benefits.map((b) => {
          const inner = (
            <>
              <span className="mb-benefit-ico">
                <Icon name={b.icon} />
              </span>
              <div>
                <b>{b.title}</b>
                <span>{b.text}</span>
              </div>
            </>
          );
          return b.href ? (
            <a key={b.title} className="mb-benefit" href={b.href} target="_blank" rel="noopener noreferrer">
              {inner}
            </a>
          ) : (
            <div key={b.title} className="mb-benefit">
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function CategoryGrid() {
  return (
    <section className="section">
      <SectionHeader title="Encuentra lo que necesitas" subtitle="Recorre la botica por categoría" />
      <div className="cat-grid">
        {categories.slice(0, 7).filter((c) => c.slug !== "dermocosmetica").map((c) => (
          <Link key={c.slug} href={`/categoria/${c.slug}`} className="cat-tile">
            <span className="cat-tile-ico">
              <Icon name={c.icon} />
            </span>
            <b>{c.name}</b>
            <span>{c.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

type Promo = { name: string; from: string; price: number; href: string; tone?: "care" | "promo"; image: string; alt: string };

const promos: Promo[] = [
  { name: "Jarabe de propóleo", from: "Ahora", price: 22.5, href: "/producto/propoleo-jarabe", image: "/img/banners/promo-propoleo.jpg", alt: "Frascos de miel con cuchara de madera" },
  { name: "Cinta kinesiológica", from: "Desde", price: 18.8, href: "/producto/cinta-kinesiologica", tone: "promo", image: "/img/banners/promo-cinta.jpg", alt: "Brazo con una venda adhesiva" },
];

export function PromoBannerGrid() {
  return (
    <section className="section">
      <div className="mb-promo-grid">
        {promos.map((p) => {
          const [int, dec] = splitPrice(p.price);
          return (
            <Link key={p.name} className={`mb-promo ${p.tone ? `is-${p.tone}` : ""}`} href={p.href} aria-label={`${p.name}, ${p.from.toLowerCase()} S/ ${int}${dec}`}>
              <div className="mb-promo-copy">
                <span className="mb-promo-name">{p.name}</span>
                <span className="mb-promo-from">{p.from}</span>
                <span className="mb-promo-price">
                  <small>S/</small>
                  {int}
                  <sup>{dec}</sup>
                </span>
                <span className="mb-btn mb-btn-primary mb-btn-sm">Buscar oferta</span>
              </div>
              <div className="mb-promo-art">
                <Image src={p.image} alt={p.alt} fill sizes="(max-width: 900px) 50vw, 300px" className="cover-img" />
              </div>
            </Link>
          );
        })}
      </div>
      <p className="mb-legal">Válido del 18 al 30 de noviembre de 2026 o hasta agotar stock. Imágenes referenciales.</p>
    </section>
  );
}

export function WideBanner() {
  return (
    <section className="section-tight">
      <Link className="mb-wide" href="/#ubicacion">
        <div>
          <div className="mb-wide-title">
            Envíos en <span>menos de 2 horas</span>
          </div>
          <div className="mb-wide-sub">{site.deliveryZones}</div>
        </div>
        <span className="mb-btn mb-btn-secondary">Pide ahora</span>
      </Link>
    </section>
  );
}

export function CampaignSplit({ title, href, products, image, alt }: { title: string; href: string; products: Product[]; image: string; alt: string }) {
  return (
    <section className="section">
      <div className="mb-campaign">
        <div className="mb-campaign-photo">
          <Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 500px" className="campaign-img" />
          <h2 className="mb-campaign-title">{title}</h2>
          <Link className="mb-btn mb-btn-promo" href={href} style={{ alignSelf: "flex-start" }}>
            ¡Lo quiero!
          </Link>
        </div>
        <div className="mb-campaign-rail">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function BrandStrip() {
  return (
    <section className="section">
      <SectionHeader title="Marcas que trabajamos" />
      <div className="mb-brands">
        {brands.map((b) => (
          <Link key={b} className="mb-brand" href={`/buscar?q=${encodeURIComponent(b)}`}>
            {b}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function StoreLocation() {
  const { lat, lon } = site.map;
  const d = 0.012;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - d},${lat - d},${lon + d},${lat + d}&layer=mapnik&marker=${lat},${lon}`;
  return (
    <section className="section" id="ubicacion">
      <SectionHeader title="Visítanos o pide delivery" subtitle="Tu botica de confianza en el barrio" />
      <div className="store">
        <div className="store-info">
          <div className="store-row">
            <span className="mb-benefit-ico">
              <Icon name="pin" />
            </span>
            <div>
              <b>Dirección</b>
              <span>{site.address}</span>
            </div>
          </div>
          <div className="store-row">
            <span className="mb-benefit-ico">
              <Icon name="clock" />
            </span>
            <div>
              <b>Horario</b>
              {site.hours.map((h) => (
                <span key={h.days}>
                  {h.days}: {h.time}
                </span>
              ))}
            </div>
          </div>
          <div className="store-row">
            <span className="mb-benefit-ico">
              <Icon name="truck" />
            </span>
            <div>
              <b>Delivery</b>
              <span>{site.deliveryZones}</span>
            </div>
          </div>
          <div className="mb-row">
            <a className="mb-btn mb-btn-primary" href={waLink("Hola, quisiera hacer un pedido.")} target="_blank" rel="noopener noreferrer">
              <Icon name="chat" /> Pedir por WhatsApp
            </a>
            <a className="mb-btn mb-btn-secondary" href={`tel:${site.phone.replace(/\s|-/g, "")}`}>
              <Icon name="phone" /> Llamar
            </a>
          </div>
        </div>
        <iframe className="store-map" title={`Mapa de ${site.name}`} src={src} loading="lazy" />
      </div>
    </section>
  );
}
