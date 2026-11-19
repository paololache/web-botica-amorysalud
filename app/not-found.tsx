import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container section empty-cart">
      <h1 className="h1">No encontramos esta página</h1>
      <p>Puede que el producto ya no esté disponible.</p>
      <Link className="mb-btn mb-btn-primary" href="/">
        Volver al inicio
      </Link>
    </div>
  );
}
