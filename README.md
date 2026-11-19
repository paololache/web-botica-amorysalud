# Botica Amor y Salud — web

Tienda web de **Botica Amor y Salud** ("Peruanos trabajando para más Peruanos"), botica de barrio en Lima, hecha con **Next.js 16 (App Router) + TypeScript** y lista para desplegar en **Vercel**.

El diseño sale de `external/` (design system "Mi Botica"): la app importa directamente
`external/tokens.css` y `external/components/bundle.css`, así que cualquier cambio en los tokens o en las clases `mb-*` se refleja en la web.
`app/theme.css` aplica la marca del cliente sobre los tokens: web blanca, verde del logo para acciones, rojo del logo para identidad (barra superior, footer), titulares en serif Fraunces y logo en `components/Logo.tsx` (SVG simplificado del letrero; reemplazar por el oficial).
`app/globals.css` añade layout responsive y piezas que el sistema describe pero no trae en CSS (selector de cantidad, autocompletar, carrito…).

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
```

## Desplegar en Vercel

1. Sube esta carpeta a un repositorio de GitHub (incluida `external/`).
2. En vercel.com → **Add New → Project** → importa el repo. Vercel detecta Next.js solo; no hay que configurar nada.
3. O desde la terminal: `npx vercel` (preview) y `npx vercel --prod`.

## Qué hay

| Ruta | Contenido |
|---|---|
| `/` | Home en el orden recomendado de `external/Estructura-home.md` |
| `/categoria/[slug]` | Grid 2/3/5 columnas con orden y filtro de ofertas (estático) |
| `/producto/[slug]` | Ficha de producto (estático) |
| `/buscar?q=` | Búsqueda; el header tiene autocompletar con foto y precio |
| `/carrito` | Carrito (guardado en el navegador) que envía el pedido por WhatsApp |

## Qué completar con datos del cliente

- `lib/site.ts`: teléfono, **número de WhatsApp**, dirección, horario, Q.F. responsable, registro DIGEMID, coordenadas del mapa.
- `lib/data.ts`: catálogo de productos y categorías. Para usar fotos reales, pon la imagen en `public/productos/` (800×800, WebP) y añade `image: "/productos/archivo.webp"` al producto; mientras tanto se dibuja el placeholder del design system.
- `components/HeroCarousel.tsx`, `components/Sections.tsx`: textos de campañas, banners y fechas de vigencia.
- Logo: cuando exista, reemplazar el componente `Logo` en `components/Header.tsx`.
# web-botica-amorysalud
