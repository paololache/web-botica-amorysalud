"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const KEY = "mibotica:favs";

function read(): string[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function FavButton({ slug }: { slug: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(read().includes(slug)), [slug]);

  function toggle() {
    const list = read();
    const next = list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug];
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {}
    setOn(next.includes(slug));
  }

  return (
    <button type="button" className={`mb-card-fav ${on ? "is-on" : ""}`} aria-label="Guardar en favoritos" aria-pressed={on} onClick={toggle}>
      <Icon name="heart" />
    </button>
  );
}
