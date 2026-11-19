import type { IconName } from "@/components/Icon";
import { normalize } from "./format";

export type Tone = "brand" | "care" | "highlight" | "promo";

export type Category = {
  slug: string;
  name: string;
  icon: IconName;
  description: string;
};

export type Product = {
  slug: string;
  brand: string;
  /** Nombre según la voz: producto + atributo + "– Presentación cantidad" */
  name: string;
  category: string;
  price: number;
  regularPrice?: number;
  tone: Tone;
  tag?: "Nuevo" | "3x2";
  prescription?: boolean;
  stock: number;
  description: string;
  /** Ruta en /public (800×800, fondo blanco o transparente). Si falta, se dibuja un placeholder. */
  image?: string;
};

export const categories: Category[] = [
  { slug: "medicamentos", name: "Medicamentos", icon: "pill", description: "Analgésicos, antigripales, digestivos y más" },
  { slug: "dermocosmetica", name: "Dermocosmética", icon: "drop", description: "Dermocosmética recomendada por dermatólogos" },
  { slug: "cuidado-personal", name: "Cuidado personal", icon: "sparkle", description: "Higiene diaria para toda la familia" },
  { slug: "mama-y-bebe", name: "Mamá y bebé", icon: "baby", description: "Pañales, cremas y cuidado infantil" },
  { slug: "adulto-mayor", name: "Adulto mayor", icon: "cane", description: "Bienestar y movilidad para los abuelos" },
  { slug: "nutricion", name: "Nutrición", icon: "leaf", description: "Vitaminas y suplementos" },
  { slug: "botiquin", name: "Botiquín", icon: "kit", description: "Todo para primeros auxilios en casa" },
  { slug: "bienestar", name: "Bienestar", icon: "heart", description: "Cuidado íntimo y bienestar sexual" },
];

export const products: Product[] = [
  // Dermocosmética
  { slug: "protector-solar-facial-fps50", brand: "Dermo", name: "Protector solar facial toque seco FPS 50+ – Frasco 50 ml", category: "dermocosmetica", price: 83.9, regularPrice: 119.9, tone: "brand", stock: 12, description: "Protección muy alta UVA/UVB con acabado seco, ideal para piel mixta a grasa. No comedogénico." },
  { slug: "gel-limpiador-piel-grasa", brand: "Pure", name: "Gel limpiador facial piel grasa – Frasco 200 ml", category: "dermocosmetica", price: 45.9, regularPrice: 58.9, tone: "care", stock: 8, description: "Limpia en profundidad sin resecar. Con zinc y niacinamida." },
  { slug: "crema-hidratante-ceramidas", brand: "Hidra", name: "Crema hidratante con ceramidas – Pote 50 g", category: "dermocosmetica", price: 62.5, tone: "highlight", tag: "Nuevo", stock: 15, description: "Restaura la barrera de la piel seca y sensible. Sin perfume." },
  { slug: "agua-micelar", brand: "Derma", name: "Agua micelar piel sensible – Frasco 400 ml", category: "dermocosmetica", price: 39.9, regularPrice: 49.9, tone: "brand", stock: 20, description: "Desmaquilla y limpia rostro y ojos sin enjuague." },
  { slug: "protector-solar-ninos", brand: "Solar", name: "Protector solar niños FPS 50+ – Frasco 120 ml", category: "dermocosmetica", price: 54.9, regularPrice: 69.9, tone: "highlight", stock: 10, description: "Fórmula resistente al agua para piel infantil." },
  { slug: "serum-vitamina-c", brand: "Vital", name: "Sérum vitamina C 10% – Gotero 30 ml", category: "dermocosmetica", price: 89.9, tone: "promo", stock: 6, description: "Ilumina y unifica el tono. Uso diurno con protector solar." },

  // Medicamentos
  { slug: "paracetamol-500", brand: "Genérico", name: "Paracetamol 500 mg – Caja 100 tabletas", category: "medicamentos", price: 8.5, tone: "brand", stock: 50, description: "Analgésico y antipirético. Lea las instrucciones antes de usar." },
  { slug: "ibuprofeno-400", brand: "Genérico", name: "Ibuprofeno 400 mg – Caja 100 tabletas", category: "medicamentos", price: 12.9, tone: "promo", stock: 40, description: "Antiinflamatorio no esteroideo. Lea las instrucciones antes de usar." },
  { slug: "antigripal-dia-noche", brand: "Cuida", name: "Antigripal día y noche – Caja 12 tabletas", category: "medicamentos", price: 14.9, regularPrice: 18.9, tone: "highlight", stock: 25, description: "Alivia los síntomas del resfrío común." },
  { slug: "amoxicilina-500", brand: "Genérico", name: "Amoxicilina 500 mg – Caja 100 cápsulas", category: "medicamentos", price: 28.0, tone: "care", prescription: true, stock: 18, description: "Antibiótico. Venta bajo receta médica." },
  { slug: "sales-rehidratacion", brand: "Salud", name: "Sales de rehidratación oral sabor naranja – Sobre 27.9 g", category: "medicamentos", price: 2.5, tone: "highlight", tag: "3x2", stock: 60, description: "Repone líquidos y electrolitos." },
  { slug: "omeprazol-20", brand: "Genérico", name: "Omeprazol 20 mg – Caja 100 cápsulas", category: "medicamentos", price: 15.9, tone: "brand", prescription: true, stock: 30, description: "Inhibidor de la bomba de protones. Venta bajo receta médica." },

  // Cuidado personal
  { slug: "jabon-liquido-antibacterial", brand: "Pure", name: "Jabón líquido antibacterial – Frasco 400 ml", category: "cuidado-personal", price: 11.9, regularPrice: 15.9, tone: "care", stock: 35, description: "Elimina el 99.9% de bacterias. Con glicerina." },
  { slug: "crema-dental-encias", brand: "Zinc", name: "Crema dental protección encías – Tubo 90 g", category: "cuidado-personal", price: 9.9, tone: "brand", tag: "3x2", stock: 40, description: "Ayuda a prevenir el sangrado de encías." },
  { slug: "desodorante-sin-alcohol", brand: "Cuida", name: "Desodorante roll-on sin alcohol – Frasco 50 ml", category: "cuidado-personal", price: 13.5, tone: "promo", stock: 22, description: "Protección 48 h para piel sensible." },
  { slug: "shampoo-anticaspa", brand: "Derma", name: "Shampoo anticaspa – Frasco 375 ml", category: "cuidado-personal", price: 21.9, regularPrice: 27.9, tone: "highlight", stock: 14, description: "Controla la caspa desde la primera aplicación." },

  // Mamá y bebé
  { slug: "panales-etapa-3", brand: "Bebé+", name: "Pañales etapa 3 talla M – Paquete 50 un", category: "mama-y-bebe", price: 42.9, regularPrice: 52.9, tone: "brand", stock: 16, description: "Hasta 12 horas de protección. Cubierta transpirable." },
  { slug: "toallitas-humedas", brand: "Bebé+", name: "Toallitas húmedas sin perfume – Paquete 80 un", category: "mama-y-bebe", price: 8.9, tone: "care", tag: "3x2", stock: 45, description: "Con aloe vera, hipoalergénicas." },
  { slug: "crema-anti-paspadura", brand: "Hidra", name: "Crema anti paspadura con óxido de zinc – Tubo 60 g", category: "mama-y-bebe", price: 18.5, tone: "highlight", stock: 20, description: "Previene y alivia la dermatitis del pañal." },
  { slug: "shampoo-bebe", brand: "Bebé+", name: "Shampoo para bebé sin lágrimas – Frasco 200 ml", category: "mama-y-bebe", price: 15.9, regularPrice: 19.9, tone: "promo", stock: 18, description: "Fórmula suave, pH balanceado." },
  { slug: "termometro-digital-flexible", brand: "Botiquín", name: "Termómetro digital flexible – 1 un", category: "mama-y-bebe", price: 19.9, tone: "care", stock: 12, description: "Punta flexible, lectura en 60 segundos." },

  // Adulto mayor
  { slug: "panal-adulto-m", brand: "Cuida", name: "Pañal para adulto talla M – Paquete 20 un", category: "adulto-mayor", price: 49.9, regularPrice: 59.9, tone: "brand", stock: 10, description: "Alta absorción con barreras antifugas." },
  { slug: "tensiometro-digital", brand: "Salud", name: "Tensiómetro digital de brazo – 1 un", category: "adulto-mayor", price: 119.0, regularPrice: 149.0, tone: "care", stock: 5, description: "Memoria para 60 lecturas y detector de arritmia." },
  { slug: "pastillero-semanal", brand: "Cuida", name: "Pastillero semanal mañana y noche – 1 un", category: "adulto-mayor", price: 14.9, tone: "highlight", stock: 25, description: "14 compartimentos con tapa de fácil apertura." },
  { slug: "colageno-hidrolizado", brand: "Nutri", name: "Colágeno hidrolizado con magnesio – Pote 300 g", category: "adulto-mayor", price: 69.9, tone: "promo", tag: "Nuevo", stock: 9, description: "Ayuda a mantener articulaciones y huesos saludables." },

  // Nutrición
  { slug: "multivitaminico-adultos", brand: "Vital", name: "Multivitamínico adultos A-Z – Frasco 60 tabletas", category: "nutricion", price: 54.9, regularPrice: 69.9, tone: "brand", stock: 14, description: "Vitaminas y minerales para el día a día." },
  { slug: "vitamina-c-1000", brand: "Vital", name: "Vitamina C 1000 mg efervescente – Tubo 10 tabletas", category: "nutricion", price: 12.9, tone: "highlight", tag: "3x2", stock: 30, description: "Refuerza tus defensas. Sabor naranja." },
  { slug: "omega-3", brand: "Nutri", name: "Omega 3 1000 mg – Frasco 100 cápsulas", category: "nutricion", price: 45.0, tone: "care", stock: 11, description: "Aceite de pescado concentrado." },
  { slug: "propoleo-jarabe", brand: "Nutri", name: "Jarabe de propóleo con miel – Frasco 120 ml", category: "nutricion", price: 22.5, regularPrice: 28.0, tone: "promo", stock: 17, description: "Suaviza la garganta de forma natural." },

  // Botiquín
  { slug: "agua-oxigenada", brand: "Botiquín", name: "Agua oxigenada 10 vol – Frasco 120 ml", category: "botiquin", price: 3.5, tone: "brand", stock: 40, description: "Antiséptico para limpieza de heridas superficiales." },
  { slug: "alcohol-70", brand: "Botiquín", name: "Alcohol medicinal 70° – Frasco 250 ml", category: "botiquin", price: 5.9, tone: "care", stock: 50, description: "Desinfectante de uso externo." },
  { slug: "gasa-esteril", brand: "Botiquín", name: "Gasa estéril 7.5 × 7.5 cm – Bolsa 5 un", category: "botiquin", price: 1.3, tone: "highlight", stock: 80, description: "Gasa de algodón, estéril, para curaciones." },
  { slug: "algodon-bolitas", brand: "Botiquín", name: "Algodón en bolitas – Bolsa 100 g", category: "botiquin", price: 8.9, tone: "promo", stock: 30, description: "Algodón hidrófilo 100% puro." },
  { slug: "curitas-surtidas", brand: "Salud", name: "Curitas surtidas resistentes al agua – Caja 40 un", category: "botiquin", price: 7.9, regularPrice: 9.9, tone: "brand", stock: 35, description: "Diferentes tamaños para cortes y raspones." },
  { slug: "cinta-kinesiologica", brand: "Salud", name: "Cinta kinesiológica – Rollo 5 m", category: "botiquin", price: 18.8, regularPrice: 24.9, tone: "care", stock: 8, description: "Soporte muscular y articular." },

  // Bienestar
  { slug: "gel-intimo", brand: "Cuida", name: "Gel íntimo hidratante – Tubo 50 g", category: "bienestar", price: 24.9, tone: "promo", stock: 12, description: "Base acuosa, compatible con preservativos." },
  { slug: "preservativos-ultra", brand: "Cuida", name: "Preservativos ultra delgados – Caja 12 un", category: "bienestar", price: 19.9, regularPrice: 24.9, tone: "brand", stock: 20, description: "Látex natural lubricado." },
  { slug: "jabon-intimo", brand: "Pure", name: "Jabón íntimo pH balanceado – Frasco 250 ml", category: "bienestar", price: 17.9, tone: "care", stock: 18, description: "Con ácido láctico y caléndula." },
];

// Imágenes referenciales (CC0, ver /creditos): /public/img/productos/<slug>.jpg. Reemplazar por packshots reales 800×800.
for (const p of products) p.image ??= `/img/productos/${p.slug}.jpg`;

export const brands = ["DERMA", "SOLAR", "NUTRI", "BEBÉ+", "VITAL", "PURE", "CUIDA", "ZINC", "SALUD", "HIDRA"];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function byCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function onSale() {
  return products.filter((p) => p.regularPrice && p.regularPrice > p.price);
}

export function searchProducts(query: string) {
  const q = normalize(query.trim());
  if (!q) return [];
  const terms = q.split(/\s+/);
  return products.filter((p) => {
    const hay = normalize(`${p.name} ${p.brand} ${getCategory(p.category)?.name ?? ""} ${p.description}`);
    return terms.every((t) => hay.includes(t));
  });
}
