"use client";

import { useCart } from "./CartProvider";
import { Icon } from "./Icon";

/** Botón "Agregar" que se convierte en selector de cantidad (– 1 +) al agregar. */
export function AddToCart({ slug, name, compact = false }: { slug: string; name: string; compact?: boolean }) {
  const { qtyOf, setQty, add } = useCart();
  const qty = qtyOf(slug);

  if (qty > 0) {
    return (
      <div className={`mb-qty ${compact ? "" : "is-lg"}`} role="group" aria-label={`Cantidad de ${name}`}>
        <button type="button" onClick={() => setQty(slug, qty - 1)} aria-label={qty === 1 ? "Quitar del carrito" : "Quitar uno"}>
          <Icon name={qty === 1 ? "trash" : "minus"} />
        </button>
        <output aria-live="polite">{qty}</output>
        <button type="button" onClick={() => add(slug)} aria-label="Agregar uno">
          <Icon name="plus" />
        </button>
      </div>
    );
  }

  if (compact) {
    return (
      <button type="button" className="mb-btn mb-btn-primary mb-card-add" aria-label={`Agregar ${name} al carrito`} onClick={() => add(slug)}>
        <Icon name="plus" />
      </button>
    );
  }

  return (
    <button type="button" className="mb-btn mb-btn-primary mb-btn-wide" onClick={() => add(slug)}>
      <Icon name="cart" /> Agregar
    </button>
  );
}
