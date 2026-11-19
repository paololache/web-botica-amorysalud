import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { byCategory, categories, getCategory } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCategory((await params).slug);
  return c ? { title: c.name, description: c.description } : {};
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  return (
    <div className="container section-tight">
      <nav className="crumbs" aria-label="Ruta">
        <Link href="/">Inicio</Link> / <span aria-current="page">{category.name}</span>
      </nav>
      <header className="page-head">
        <h1 className="h1">{category.name}</h1>
        <p>{category.description}</p>
      </header>
      <ProductGrid products={byCategory(slug)} />
    </div>
  );
}
