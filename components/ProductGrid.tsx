"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/data";
import { ProductCard } from "./Product";

type Sort = "relevancia" | "precio-asc" | "precio-desc" | "descuento";

export function ProductGrid({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<Sort>("relevancia");
  const [onlySale, setOnlySale] = useState(false);

  const list = useMemo(() => {
    let l = onlySale ? products.filter((p) => p.regularPrice) : [...products];
    const off = (p: Product) => (p.regularPrice ? 1 - p.price / p.regularPrice : 0);
    if (sort === "precio-asc") l.sort((a, b) => a.price - b.price);
    if (sort === "precio-desc") l.sort((a, b) => b.price - a.price);
    if (sort === "descuento") l.sort((a, b) => off(b) - off(a));
    return l;
  }, [products, sort, onlySale]);

  return (
    <>
      <div className="grid-toolbar">
        <span className="grid-count">{list.length} productos</span>
        <label className="toggle">
          <input type="checkbox" checked={onlySale} onChange={(e) => setOnlySale(e.target.checked)} /> Solo ofertas
        </label>
        <label className="select">
          <span className="sr-only">Ordenar por</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="relevancia">Relevancia</option>
            <option value="precio-asc">Menor precio</option>
            <option value="precio-desc">Mayor precio</option>
            <option value="descuento">Mayor descuento</option>
          </select>
        </label>
      </div>
      {list.length ? (
        <div className="product-grid">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p className="empty">No hay productos con estos filtros.</p>
      )}
    </>
  );
}
