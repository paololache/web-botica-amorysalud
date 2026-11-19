"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories } from "@/lib/data";
import { site } from "@/lib/site";
import { useCart } from "./CartProvider";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { SearchField } from "./SearchField";

export function Header() {
  const { count } = useCart();
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <div className={`site-header ${compact ? "is-compact" : ""}`}>
      <div className="mb-utility">
        <span>
          <Icon name="phone" />
          Pedidos: <strong>{site.phone}</strong>
          <span className="utility-extra">· Delivery en Lima · {site.hours[0].time}</span>
          <span className="utility-tagline utility-extra">· {site.tagline}</span>
        </span>
        <span className="utility-links">
          <Link href="/#ubicacion">
            <Icon name="store" />
            Nuestra botica
          </Link>
          <Link href="/buscar">
            <Icon name="book" />
            Catálogo digital
          </Link>
        </span>
      </div>

      <header className="mb-header">
        <Link href="/" aria-label={`${site.name}, ir al inicio`} className="logo-link">
          <Logo />
        </Link>
        <SearchField />
        <div className="mb-header-actions">
          <Link className="mb-hdr-action hdr-hide-sm" href="/#ubicacion">
            <Icon name="pin" />
            <span>
              Entregar en<b>{site.district}</b>
            </span>
          </Link>
          <a className="mb-hdr-action hdr-hide-sm" href="#" onClick={(e) => e.preventDefault()}>
            <Icon name="user" />
            <span>
              Hola<b>Inicia sesión</b>
            </span>
          </a>
          <Link className="mb-hdr-action mb-cart" href="/carrito" aria-label={`Carrito, ${count} productos`}>
            <Icon name="cart" />
            {count > 0 && <span className="mb-cart-count">{count}</span>}
          </Link>
        </div>
      </header>

      <nav className="mb-catnav" aria-label="Categorías">
        <button type="button" className="mb-chip is-menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
          <Icon name={menuOpen ? "close" : "menu"} />
          Categorías
        </button>
        {categories.map((c) => {
          const href = `/categoria/${c.slug}`;
          return (
            <Link key={c.slug} href={href} className={`mb-chip ${pathname === href ? "is-active" : ""}`} aria-current={pathname === href ? "page" : undefined}>
              <span className="mb-chip-ico">
                <Icon name={c.icon} />
              </span>
              {c.name}
            </Link>
          );
        })}
      </nav>

      {menuOpen && (
        <div className="cat-menu">
          <div className="container cat-menu-grid">
            {categories.map((c) => (
              <Link key={c.slug} href={`/categoria/${c.slug}`} className="cat-menu-item">
                <span className="mb-chip-ico">
                  <Icon name={c.icon} />
                </span>
                <span>
                  <b>{c.name}</b>
                  <small>{c.description}</small>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
