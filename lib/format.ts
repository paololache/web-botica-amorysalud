// Port de los helpers de external/components/bundle.js (window.MiBotica)
export function formatPrice(n: number): string {
  return "S/ " + Number(n).toFixed(2);
}

export function discount(regular: number, sale: number): string {
  return "-" + Math.round((1 - sale / regular) * 100) + "%";
}

/** Separa un precio en entero y decimales para los banners: 22.5 -> ["22", ".50"] */
export function splitPrice(n: number): [string, string] {
  const [int, dec] = Number(n).toFixed(2).split(".");
  return [int, "." + dec];
}

export function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}
