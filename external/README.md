# Mi Botica — design system

Design system para el e-commerce de una botica de barrio en Lima. Toma como referencia la estructura comercial de boticasperu.pe (orden de la home, tipos de banner, tarjeta de producto, footer) y la moderniza: más aire, radios más suaves, un azul más vivo, un verde de salud nuevo y el rojo reservado solo para ofertas. "Mi Botica" es un nombre provisional: cámbialo por el del cliente en `design-system.json`, aquí y en la portada.

> No se copian logos, fotos ni banners de la referencia. Las imágenes de producto y campaña las aporta el cliente (o se producen nuevas) siguiendo las proporciones de **Imagenes.md**.

## Principios

1. **Cercana, no corporativa.** La botica cuida a la familia del barrio. Fondos claros, fotos de personas reales, mensajes en segunda persona ("Tu cuidado, nuestra prioridad").
2. **El precio manda.** En cada tarjeta el precio es lo más visible después de la foto. El rojo `promo` solo aparece si hay descuento real.
3. **Orden de góndola.** La home se recorre como una farmacia: campaña → categorías → marcas → ofertas por necesidad (piel, adulto mayor, infantil, nutrición, bienestar). Ver **Estructura-home.md**.
4. **Una acción por tarjeta.** "Agregar" en `brand`. Nada compite con él.

## Voz y contenido

- Tutea, cálido y directo: "Lo quiero", "Ver más", "Agregar".
- Títulos de sección = necesidad + beneficio: "Lo mejor para tu nutrición", "Cuidado para ti y tu familia".
- La referencia usa emoji en todos los títulos (🎈🎉). **Modernización:** máximo un emoji por título y solo en campañas de temporada; en el resto, el icono de categoría hace ese trabajo.
- Nombre de producto: Marca + producto + atributo + "– Presentación cantidad" (ej. "Protector solar facial FPS 50+ – Frasco 50 ml"). Unidades en minúscula (ml, g, un).
- Precios: `S/ 83.90` (S/ + espacio + dos decimales). Descuento: `-30%`.
- Legales de banner en `caption`, `ink-muted`, debajo de la imagen, nunca dentro.

## Fundamentos visuales

**Color.** Neutros azulados (`surface`, `surface-raised`, `ink`) + tres acentos con significado:
- `brand` azul: acción y navegación (Agregar, Ver más, foco).
- `care` verde: salud y servicio (stock, envío gratis, atención farmacéutica).
- `promo` rojo: dinero (descuentos, precio oferta, contador del carrito).
- `highlight` amarillo: campañas temporales (3x2, Nuevo, Cyber). Siempre con `on-highlight`.
Header y footer van en `brand-deep` con texto `on-brand-deep`.

**Tipografía.** Una sola familia, Plus Jakarta Sans (Google Fonts), con Poppins de respaldo, que era la fuente de la referencia. Títulos en 700–800, cuerpo 400–500. Los precios usan `font-variant-numeric: tabular-nums`.

**Forma.** Tarjetas `radius-lg` (20px) con `shadow-card`; hero y campañas `radius-xl`; chips y logos de marca en `radius-pill`. La referencia usaba 12px en todo y sombras duras; aquí la jerarquía la marca el radio.

**Espaciado.** Base 4px. Contenedor máx. 1200px con gutter `space-6`. Entre secciones `space-12`. Grid de productos: 2 col móvil · 3 tablet · 5 desktop (la referencia mostraba 5–6).

**Movimiento.** Hover de tarjeta: sube 2px + `shadow-hover` (150 ms). Carruseles con scroll-snap, sin autoplay excepto el hero (6 s, pausa en hover).

**Accesibilidad.** Todos los pares texto/fondo de los tokens cumplen 4.5:1 en ambos temas. Banners con `alt` descriptivo (la referencia tenía alt="image" en todos). Foco visible con `focus`. Tap targets ≥ 44px.

## Iconografía

Íconos lineales de 24px, trazo 1.75, esquinas redondeadas (recomendado: Lucide o Phosphor Regular). Cada categoría del nav lleva su icono dentro de un círculo `brand-soft`. El carrito lleva contador `promo` en `radius-pill`. No hay set de íconos subido aún: pendiente del cliente.

## Logo

Sin logo todavía: se usa el nombre en `h3` 800 color `on-brand-deep` sobre el header. Cuando el cliente lo entregue, subir SVG en una línea + isotipo a `assets/Logos/`.

## Componentes

Cada tarjeta del sistema es HTML + CSS (`components/bundle.css`, clases `mb-*`), listo para portar a cualquier stack (React, Vue, WordPress/WooCommerce, Shopify). Orden de uso en la home:

AnnouncementBar → Header (utility bar + barra principal + CategoryNav) → HeroCarousel → SectionHeader → BrandStrip → PromoBannerGrid → ProductCard / ProductRail → WideBanner → CampaignSplit → ReelsGrid → Footer → WhatsAppFab.

Átomos: Button, Badge, PriceTag, SearchField.

## Secciones de este sistema

- **Estructura-home.md** — orden exacto de la home de la referencia y la versión modernizada.
- **Imagenes.md** — tamaños, proporciones y orden de cada tipo de imagen.
- **Modernizacion.md** — qué se cambia respecto a la referencia y por qué.
