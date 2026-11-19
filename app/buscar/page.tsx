import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { onSale, products, searchProducts } from "@/lib/data";
import { waLink } from "@/lib/site";

export const metadata: Metadata = { title: "Buscar" };

type Props = { searchParams: Promise<{ q?: string; ofertas?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q = "", ofertas } = await searchParams;
  const query = q.trim();
  const list = ofertas ? onSale() : query ? searchProducts(query) : products;
  const title = ofertas ? "Ofertas de la semana" : query ? `Resultados para “${query}”` : "Catálogo digital";

  return (
    <div className="container section-tight">
      <header className="page-head">
        <h1 className="h1">{title}</h1>
        {query && !list.length && (
          <p>
            No encontramos productos para tu búsqueda.{" "}
            <a className="mb-link" href={waLink(`Hola, ¿tienen ${query}?`)} target="_blank" rel="noopener noreferrer">
              Pregúntanos por WhatsApp
            </a>
          </p>
        )}
      </header>
      {list.length > 0 && <ProductGrid key={`${query}-${ofertas}`} products={list} />}
    </div>
  );
}
