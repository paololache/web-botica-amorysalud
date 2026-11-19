"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useId, useMemo, useRef, useState } from "react";
import { searchProducts } from "@/lib/data";
import { formatPrice } from "@/lib/format";
import { Icon } from "./Icon";
import { ProductArt } from "./Product";

function SearchInner() {
  const router = useRouter();
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const boxRef = useRef<HTMLFormElement>(null);
  const listId = useId();

  const results = useMemo(() => searchProducts(q).slice(0, 6), [q]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setOpen(false);
    if (active >= 0 && results[active]) {
      router.push(`/producto/${results[active].slug}`);
    } else {
      router.push(`/buscar?q=${encodeURIComponent(q.trim())}`);
    }
  }

  function onKey(e: React.KeyboardEvent) {
    if (!open || !results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a <= 0 ? results.length - 1 : a - 1));
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const showList = open && q.trim().length > 1;

  return (
    <form className="search-box" role="search" onSubmit={submit} ref={boxRef}>
      <label className="mb-search">
        <Icon name="search" />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
            setActive(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKey}
          placeholder="Busca medicamentos, marcas o síntomas"
          aria-label="Buscar"
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={active >= 0 ? `${listId}-${active}` : undefined}
        />
        <button type="submit" aria-label="Buscar">
          <Icon name="search" />
        </button>
      </label>
      {showList && (
        <ul className="search-results" id={listId} role="listbox">
          {results.length === 0 && <li className="search-empty">No encontramos “{q}”. Escríbenos por WhatsApp y te ayudamos.</li>}
          {results.map((p, i) => (
            <li key={p.slug} id={`${listId}-${i}`} role="option" aria-selected={i === active}>
              <Link href={`/producto/${p.slug}`} className={i === active ? "is-active" : ""} onClick={() => setOpen(false)}>
                <span className="search-thumb">
                  <ProductArt product={p} sizes="48px" />
                </span>
                <span className="search-name">{p.name}</span>
                <b className={p.regularPrice ? "is-sale" : ""}>{formatPrice(p.price)}</b>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export function SearchField() {
  return (
    <Suspense fallback={<div className="search-box mb-search" />}>
      <SearchInner />
    </Suspense>
  );
}
