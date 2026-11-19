import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import { discount, formatPrice } from "@/lib/format";
import { AddToCart } from "./AddToCart";
import { FavButton } from "./FavButton";

/** Foto del producto (1:1). Si no hay imagen, dibuja el placeholder del design system (.mb-ph). */
export function ProductArt({ product, sizes = "200px", priority = false }: { product: Product; sizes?: string; priority?: boolean }) {
  if (product.image) {
    return (
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes={sizes}
        priority={priority}
        className="product-img"
      />
    );
  }
  return (
    <span
      className="mb-ph"
      role="img"
      aria-label={product.name}
      style={{ left: "36%", top: "26%", width: "28%", height: "62%", background: `var(--${product.tone})` }}
    />
  );
}

export function PriceTag({ price, regularPrice, size }: { price: number; regularPrice?: number; size?: "lg" }) {
  const sale = !!regularPrice && regularPrice > price;
  return (
    <div className={`mb-price ${size === "lg" ? "is-lg" : ""}`}>
      {sale && (
        <span className="mb-price-old">
          <span className="sr-only">Precio regular </span>
          {formatPrice(regularPrice!)}
        </span>
      )}
      <span className={`mb-price-now ${sale ? "is-sale" : ""}`}>
        {sale && <span className="sr-only">Precio oferta </span>}
        {formatPrice(price)}
      </span>
    </div>
  );
}

export function ProductBadge({ product }: { product: Product }) {
  if (product.regularPrice && product.regularPrice > product.price) {
    return <span className="mb-badge mb-badge-promo">{discount(product.regularPrice, product.price)}</span>;
  }
  if (product.tag) return <span className="mb-badge mb-badge-highlight">{product.tag}</span>;
  return null;
}

export function ProductCard({ product }: { product: Product }) {
  const href = `/producto/${product.slug}`;
  return (
    <article className="mb-card">
      <div className="mb-card-media">
        <Link href={href} className="mb-card-hit" aria-label={product.name} tabIndex={-1} />
        <ProductArt product={product} />
        <ProductBadge product={product} />
        <FavButton slug={product.slug} />
      </div>
      <span className="mb-card-brand">{product.brand}</span>
      <h3 className="mb-card-name">
        <Link href={href}>{product.name}</Link>
      </h3>
      {product.prescription && <span className="mb-badge mb-badge-brand mb-card-rx">Requiere receta</span>}
      <div className="mb-card-foot">
        <PriceTag price={product.price} regularPrice={product.regularPrice} />
        <AddToCart slug={product.slug} name={product.name} compact />
      </div>
    </article>
  );
}
