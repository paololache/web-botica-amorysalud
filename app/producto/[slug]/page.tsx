import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddToCart";
import { Icon } from "@/components/Icon";
import { PriceTag, ProductArt, ProductBadge } from "@/components/Product";
import { ProductSection } from "@/components/Sections";
import { byCategory, getCategory, getProduct, products } from "@/lib/data";
import { formatPrice } from "@/lib/format";
import { site, waLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  return p ? { title: p.name, description: `${p.description} ${formatPrice(p.price)}` } : {};
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.category)!;
  const related = byCategory(product.category).filter((p) => p.slug !== slug);

  return (
    <div className="container section-tight">
      <nav className="crumbs" aria-label="Ruta">
        <Link href="/">Inicio</Link> / <Link href={`/categoria/${category.slug}`}>{category.name}</Link> /{" "}
        <span aria-current="page">{product.brand}</span>
      </nav>

      <div className="pdp">
        <div className="pdp-media">
          <ProductArt product={product} sizes="(max-width: 900px) 100vw, 560px" priority />
          <span className="pdp-badge">
            <ProductBadge product={product} />
          </span>
        </div>
        <div className="pdp-info">
          <span className="mb-card-brand">{product.brand}</span>
          <h1 className="pdp-title">{product.name}</h1>
          <div className="mb-row">
            {product.stock > 0 ? (
              <span className="mb-badge mb-badge-care">
                <Icon name="check" /> En stock
              </span>
            ) : (
              <span className="mb-badge mb-badge-promo-soft">Agotado</span>
            )}
            {product.prescription && <span className="mb-badge mb-badge-brand">Requiere receta</span>}
          </div>
          <PriceTag price={product.price} regularPrice={product.regularPrice} size="lg" />
          <AddToCart slug={product.slug} name={product.name} />
          <p className="pdp-desc">{product.description}</p>
          <ul className="pdp-perks">
            <li>
              <Icon name="truck" /> Delivery en menos de 2 h · gratis desde S/ {site.freeShippingFrom}
            </li>
            <li>
              <Icon name="shield" /> Producto con registro sanitario DIGEMID
            </li>
            <li>
              <Icon name="chat" />{" "}
              <a href={waLink(`Hola, tengo una consulta sobre: ${product.name}`)} target="_blank" rel="noopener noreferrer">
                Consulta con nuestro químico farmacéutico
              </a>
            </li>
          </ul>
          {product.prescription && (
            <p className="mb-legal">Medicamento de venta bajo receta médica. Envíanos tu receta por WhatsApp antes de la entrega.</p>
          )}
        </div>
      </div>

      {related.length > 0 && <ProductSection title={`Más en ${category.name}`} href={`/categoria/${category.slug}`} products={related} />}
    </div>
  );
}
