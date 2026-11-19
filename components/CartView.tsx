"use client";

import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "@/lib/format";
import { site, waLink } from "@/lib/site";
import { AddToCart } from "./AddToCart";
import { useCart } from "./CartProvider";
import { Icon } from "./Icon";
import { ProductArt } from "./Product";

export function CartView() {
  const { lines, subtotal, count } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pay, setPay] = useState("Yape");

  if (!lines.length) {
    return (
      <div className="empty-cart">
        <span className="mb-benefit-ico">
          <Icon name="cart" />
        </span>
        <p>Tu carrito está vacío.</p>
        <Link className="mb-btn mb-btn-primary" href="/">
          Seguir comprando
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= site.freeShippingFrom ? 0 : site.shippingCost;
  const total = subtotal + shipping;
  const needsRx = lines.some((l) => l.product.prescription);
  const missing = site.freeShippingFrom - subtotal;

  const message = [
    `Hola ${site.name}, quiero hacer este pedido:`,
    "",
    ...lines.map((l) => `• ${l.qty} × ${l.product.name} — ${formatPrice(l.qty * l.product.price)}`),
    "",
    `Subtotal: ${formatPrice(subtotal)}`,
    `Delivery: ${shipping ? formatPrice(shipping) : "Gratis"}`,
    `Total: ${formatPrice(total)}`,
    "",
    name ? `Nombre: ${name}` : false,
    address ? `Dirección: ${address}` : false,
    `Pago: ${pay}`,
    needsRx ? "Envío la receta médica a continuación." : false,
  ]
    .filter((l) => l !== false)
    .join("\n");

  return (
    <div className="cart">
      <ul className="cart-lines">
        {lines.map((l) => (
          <li key={l.slug} className="cart-line">
            <Link href={`/producto/${l.slug}`} className="cart-thumb">
              <ProductArt product={l.product} sizes="80px" />
            </Link>
            <div className="cart-line-info">
              <span className="mb-card-brand">{l.product.brand}</span>
              <Link href={`/producto/${l.slug}`} className="cart-line-name">
                {l.product.name}
              </Link>
              {l.product.prescription && <span className="mb-badge mb-badge-brand">Requiere receta</span>}
              <span className="caption">{formatPrice(l.product.price)} c/u</span>
            </div>
            <div className="cart-line-side">
              <b className="tabular">{formatPrice(l.qty * l.product.price)}</b>
              <AddToCart slug={l.slug} name={l.product.name} compact />
            </div>
          </li>
        ))}
      </ul>

      <aside className="cart-summary">
        <h2 className="h3">Resumen ({count})</h2>
        {missing > 0 && (
          <p className="mb-badge mb-badge-care cart-hint">Te faltan {formatPrice(missing)} para delivery gratis</p>
        )}
        <dl>
          <div>
            <dt>Subtotal</dt>
            <dd>{formatPrice(subtotal)}</dd>
          </div>
          <div>
            <dt>Delivery</dt>
            <dd>{shipping ? formatPrice(shipping) : "Gratis"}</dd>
          </div>
          <div className="cart-total">
            <dt>Total</dt>
            <dd>{formatPrice(total)}</dd>
          </div>
        </dl>
        <label className="field">
          <span>Nombre</span>
          <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
        <label className="field">
          <span>Dirección de entrega</span>
          <input value={address} onChange={(e) => setAddress(e.target.value)} autoComplete="street-address" placeholder={`Calle, número, referencia (${site.district})`} />
        </label>
        <label className="field">
          <span>Medio de pago</span>
          <select value={pay} onChange={(e) => setPay(e.target.value)}>
            <option>Yape</option>
            <option>Plin</option>
            <option>Tarjeta (POS al entregar)</option>
            <option>Efectivo</option>
          </select>
        </label>
        {needsRx && <p className="mb-legal">Tu pedido incluye medicamentos con receta: te la pediremos por WhatsApp.</p>}
        <a className="mb-btn mb-btn-primary mb-btn-block" href={waLink(message)} target="_blank" rel="noopener noreferrer">
          <Icon name="chat" /> Enviar pedido por WhatsApp
        </a>
        <p className="mb-legal">Confirmaremos stock y hora de entrega por WhatsApp antes de cobrar.</p>
      </aside>
    </div>
  );
}
