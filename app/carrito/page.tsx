import type { Metadata } from "next";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = { title: "Mi carrito" };

export default function CartPage() {
  return (
    <div className="container section-tight">
      <header className="page-head">
        <h1 className="h1">Mi carrito</h1>
      </header>
      <CartView />
    </div>
  );
}
