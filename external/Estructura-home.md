# Estructura de la home

Orden relevado de la referencia (desktop, ~1055px de ancho visible) y su equivalente modernizado. Las secciones de producto se repiten en un patrón fijo: **título + "Ver más" → banners → carrusel**.

| # | Referencia | Componente | Notas de modernización |
|---|---|---|---|
| 1 | Barra de campaña animada (GIF "BotiDays – Hasta 50% de descuento"), 40px de alto | AnnouncementBar | Texto real + CTA en vez de GIF; fondo `highlight` o `brand-deep`. Cerrable. |
| 2 | Utility bar blanca: teléfono "Botifono", "Boticas", "Catálogo digital" | Header (fila superior) | Agregar horario de atención y "Delivery en Lima". |
| 3 | Header azul: logo, buscador "Estoy buscando", Mi ubicación, Inicia sesión, carrito con contador | Header | Buscador con placeholder útil ("Busca medicamentos, marcas o síntomas"). Header sticky que se compacta al hacer scroll. |
| 4 | Nav de categorías: menú "Categorías" + Dermacare, Power Zone, Quality Store, Adulto mayor… + "Ver más" | CategoryNav | Chips con icono en scroll horizontal; en móvil va bajo el buscador. |
| 5 | Hero carrusel, 6 slides (1055×306), flechas + dots, legal debajo | HeroCarousel | Contenido a 1200px con `radius-xl`; dots `highlight`. |
| 6 | "Cuidado para tu piel" + fila de 10 logos de marca | SectionHeader + BrandStrip | Logos en círculos `radius-pill` sobre `surface-raised`. |
| 7 | 2×2 banners promo de marca (434×208 c/u) | PromoBannerGrid | Grid 2 col desktop, 1 col móvil (o carrusel). |
| 8 | Carrusel de productos de piel (5 tarjetas) | ProductRail + ProductCard | |
| 9 | Banner ancho (910×153) | WideBanner | |
| 10 | "Lo mejor para el adulto mayor" + Ver más + 2 banners | SectionHeader + PromoBannerGrid | |
| 11 | "Tu cuidado, nuestra prioridad" + Ver más + carrusel cuidado personal | SectionHeader + ProductRail | |
| 12 | Banner ancho | WideBanner | |
| 13 | "Lo mejor para el cuidado infantil" + 2×2 banners + carrusel (6) | SectionHeader + PromoBannerGrid + ProductRail | |
| 14 | "Amor y cuidado en cada momento ❤️ ¡Lo quiero!" — banners 419×200 | CampaignSplit | |
| 15 | "Cuidado para ti y tu familia" — botiquín (agua oxigenada, alcohol, gasas, termómetro…) | ProductRail | Precios sin descuento: sin badge rojo. |
| 16 | "Lo esencial para estar preparado 🎒" — foto lifestyle a pantalla completa con carrusel encima | CampaignSplit | Foto a un lado, productos al otro; velo `overlay` solo si el texto va sobre la foto. |
| 17 | "Lo mejor para tu nutrición" + Ver más + carrusel vitaminas | SectionHeader + ProductRail | |
| 18 | "Tu bienestar, burbuja a burbuja ¡Lo quiero!" | CampaignSplit | |
| 19 | "Bienestar sexual" + Ver más + carrusel (12) | SectionHeader + ProductRail | |
| 20 | "Todo para cuidar de ti — Lo quiero" | CampaignSplit | |
| 21 | "Reels de tus marcas favoritas" — 3 videos verticales | ReelsGrid | Videos 9:16 con play y nombre de marca. |
| 22 | Footer azul: Información · Nuestros servicios · Usuarios · logo + redes + Libro de reclamaciones + medios de pago; copyright | Footer | Agregar bloque de confianza: registro DIGEMID, químico farmacéutico responsable, dirección. |
| — | Botón flotante WhatsApp (abajo a la derecha) | WhatsAppFab | |

## Versión recomendada para una botica de barrio

Una botica pequeña no necesita 20 secciones. Orden sugerido:

1. AnnouncementBar (delivery / horario)
2. Header + CategoryNav
3. HeroCarousel (3 slides máx.)
4. Bloque de beneficios: Delivery · Atención farmacéutica · Pago con Yape/Plin · Receta por WhatsApp
5. "Ofertas de la semana" — ProductRail
6. Categorías destacadas en grid de 6 (Medicamentos, Cuidado personal, Mamá y bebé, Adulto mayor, Nutrición, Botiquín)
7. PromoBannerGrid (2 banners)
8. "Botiquín del hogar" — ProductRail
9. CampaignSplit de temporada
10. "Mamá y bebé" — ProductRail
11. BrandStrip "Marcas que trabajamos"
12. Ubicación + horario + mapa
13. Footer + WhatsAppFab
