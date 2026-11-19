// Mi Botica es CSS-first: cada componente es HTML con clases mb-* (ver components/<Comp>/preview.html).
export declare function formatPrice(n: number): string; // 83.9 -> "S/ 83.90"
export declare function discount(regular: number, sale: number): string; // (119.9, 83.9) -> "-30%"
declare global { interface Window { MiBotica: { formatPrice: typeof formatPrice; discount: typeof discount } } }
