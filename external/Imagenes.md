# Imágenes: tamaños, proporciones y orden

Medidas tomadas de la referencia (tamaño mostrado a ~1055px de ancho) y la exportación recomendada (2× para pantallas retina, WebP/AVIF, ≤ 200 KB).

| Tipo | Referencia (mostrado) | Proporción | Exportar desktop | Exportar móvil | Dónde va |
|---|---|---|---|---|---|
| Barra de campaña | 1055×40 (GIF) | — | Texto HTML, no imagen | Texto HTML | Arriba de todo |
| Hero slide | 1055×306 | ≈ 3.45:1 | 2400×700 | 1080×1080 (1:1) o 1080×1350 | Hero, 3–6 slides |
| Banner promo | 434×208 | ≈ 2.08:1 | 1040×500 | igual | Grid 2×2 bajo cada título de sección |
| Banner campaña | 419×200 | ≈ 2.1:1 | 1000×480 | igual | Bloques "¡Lo quiero!" |
| Banner ancho | 910×153 | ≈ 6:1 | 2400×400 | 1080×360 (3:1) | Entre secciones |
| Foto lifestyle campaña | ancho completo, ~600 alto | ≈ 16:9 | 1600×1000 | 1080×1080 | CampaignSplit |
| Foto de producto | ~120×120 en tarjeta | 1:1 | 800×800, fondo transparente o blanco | igual | ProductCard |
| Logo de marca | ~60×40 en recuadro | — | SVG o PNG 240×120 | igual | BrandStrip |
| Reel | vertical | 9:16 | 1080×1920 MP4 + póster | igual | ReelsGrid |

## Composición de los banners (patrón de la referencia)

Los banners promo siguen siempre el mismo esquema, conviene mantenerlo como plantilla:

- **Izquierda:** nombre del producto o pack (bold), "Ahora / Desde / Hasta", precio grande con decimales en superíndice (`S/ 22.50`) o porcentaje (`53% dscto`), botón "Buscar oferta / Ver ofertas".
- **Derecha:** packshot del producto sobre un podio o sombra.
- **Fondo:** color de marca con un acento diagonal (en la referencia: rayos/zigzag celestes).
- **Debajo, fuera de la imagen:** texto legal (vigencia, stock, RUC) en `caption`.

**Modernización:** fondo `brand-soft` o color plano de la marca del producto, sin rayos; packshot más grande; precio en `price` a 2×; botón real en HTML (no dibujado en la imagen) para que sea clicable y accesible.

## Orden de las imágenes en la home

1. Hero (slides en orden de prioridad comercial: campaña del mes → 3x2 → marca destacada)
2. Logos de marca (10, orden alfabético o por acuerdo comercial)
3. Banners 2×2 de la categoría del bloque
4. Fotos de producto en carrusel
5. Banner ancho como separador cada 2 bloques
6. Foto lifestyle de campaña
7. Reels al final, antes del footer

## Reglas

- `alt` descriptivo siempre ("Protector solar facial FPS 50+, 30% de descuento"), nunca "image".
- `loading="lazy"` en todo lo que esté bajo el hero; el primer slide con `fetchpriority="high"`.
- Nada de texto importante quemado en la imagen sin repetirlo en HTML.
- Fotos de personas: reales y del público objetivo (familias peruanas, adultos mayores, mamás). Con permiso de uso.
