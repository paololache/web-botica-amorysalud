"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getProduct, type Product } from "@/lib/data";

type Line = { slug: string; qty: number };
type CartLine = Line & { product: Product };

type CartCtx = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  qtyOf: (slug: string) => number;
  setQty: (slug: string, qty: number) => void;
  add: (slug: string, qty?: number) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "mibotica:cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Line[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items, ready]);

  const setQty = useCallback((slug: string, qty: number) => {
    setItems((prev) => {
      const max = getProduct(slug)?.stock ?? 99;
      const q = Math.max(0, Math.min(qty, max));
      const rest = prev.filter((l) => l.slug !== slug);
      if (q === 0) return rest;
      const exists = prev.some((l) => l.slug === slug);
      return exists ? prev.map((l) => (l.slug === slug ? { ...l, qty: q } : l)) : [...prev, { slug, qty: q }];
    });
  }, []);

  const value = useMemo<CartCtx>(() => {
    const lines = items
      .map((l) => ({ ...l, product: getProduct(l.slug)! }))
      .filter((l) => l.product);
    return {
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: lines.reduce((n, l) => n + l.qty * l.product.price, 0),
      qtyOf: (slug) => items.find((l) => l.slug === slug)?.qty ?? 0,
      setQty,
      add: (slug, qty = 1) => setQty(slug, (items.find((l) => l.slug === slug)?.qty ?? 0) + qty),
      clear: () => setItems([]),
    };
  }, [items, setQty]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
