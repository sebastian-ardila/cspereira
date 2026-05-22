# Rediseño Landing + Página Comunidad — Couchsurfing Pereira

**Fecha:** 2026-05-22
**Estado:** Aprobado, pendiente implementación

## Contexto

El sitio actual (`src/App.js`) es una single-page de una sección con un hero rojo-naranja, una caja "en construcción por" y un iframe del blog. Se necesita un rediseño moderno: hero limpio con poco texto, sección de contacto con WhatsApp, paleta moderna, y separar la sección de comunidad a su propia ruta.

## Objetivos

1. Landing minimalista, moderna, con muy poco texto
2. CTA principal: contactar por WhatsApp
3. Página separada `/comunidad` con info de la comunidad y autores
4. Paleta moderna sustituyendo el naranja-rojo actual

## Diseño visual

### Paleta de colores

| Token            | Hex       | Uso                                |
|------------------|-----------|------------------------------------|
| `--midnight`     | `#0B1B2B` | Fondo principal hero, nav          |
| `--deep-blue`    | `#1E3A5F` | Variantes de fondo, secciones      |
| `--coral`        | `#FF7A6B` | CTAs, acentos, énfasis             |
| `--cream`        | `#F8F4ED` | Fondo claro, texto sobre oscuro    |
| `--gold`         | `#C9A87C` | Detalles decorativos, líneas       |
| `--whatsapp`     | `#25D366` | Botón WhatsApp (color oficial)     |
| `--ink`          | `#1A1A1A` | Texto principal sobre claro        |

### Tipografía

- **Display (títulos):** Instrument Serif (Google Fonts) — elegante editorial
- **Body / UI:** Inter (Google Fonts) — moderno legible

Cargar desde Google Fonts en `public/index.html`.

## Arquitectura del sitio

### Rutas

```
/             → Home: Nav + Hero + Contacto + Footer
/comunidad    → Comunidad: Nav + Hero secundario + ¿Qué es? + Blog embed + Autores + CTA
```

### Stack

- **react-router-dom v6** (nuevo): rutas reales con URL navegable
- **styled-components** (existente): mantener
- **Google Fonts** vía `<link>` en `index.html`

### Estructura de archivos propuesta

```
src/
├── App.js                  # Router con <BrowserRouter> y rutas
├── index.css               # Reset + variables CSS + import fonts
├── index.js                # Entry
├── styled.js               # ELIMINAR (reemplazar por componentes por sección)
├── components/
│   ├── Nav.js              # Navbar fijo con links
│   ├── Footer.js           # Footer minimal
│   └── WhatsAppButton.js   # Botón reutilizable WhatsApp
├── pages/
│   ├── Home.js             # Landing: Hero + Contacto
│   └── Comunidad.js        # Página comunidad
└── theme.js                # Tokens de color, espaciado, fuentes
```

**Decisión router:** Usar `HashRouter` (no `BrowserRouter`). Razón: el deploy es a GitHub Pages (`https://dila93.github.io/cspereira/`), donde `BrowserRouter` requiere SPA fallback que GitHub Pages no soporta nativamente. `HashRouter` funciona sin configuración: las rutas serán `/#/` y `/#/comunidad`.

## Componentes por página

### Home `/`

**Nav (fijo, translúcido con blur al hacer scroll)**
- Izquierda: logo "CP" o pequeño
- Derecha: Inicio · Comunidad · Contacto (scroll a sección)

**Hero (100vh)**
- Fondo `--midnight` con gradiente sutil hacia `--deep-blue`
- Blob coral animado en esquina (CSS keyframes, sin librerías)
- Layout centrado:
  - Pre-título pequeño dorado: "PEREIRA · COLOMBIA"
  - Título display grande: "Couchsurfing Pereira"
  - Línea separadora dorada corta
  - Tagline una línea: "Viaja. Comparte. Pertenece."
  - Botón CTA coral: "Contáctanos →"
- Indicador scroll abajo (chevron animado)

**Sección Contacto (id="contacto", ~60vh)**
- Fondo `--cream`
- Card centrada con:
  - Título: "¿Listo para conectarte?"
  - Subtítulo breve: "Escríbenos por WhatsApp y únete a la comunidad."
  - Botón grande verde WhatsApp con icono SVG → `https://wa.me/573177822100`

**Footer**
- Fondo `--midnight`
- Una línea: "Couchsurfing Pereira · 2026" + link a `/comunidad`

### Comunidad `/comunidad`

**Nav** (mismo componente que Home)

**Hero secundario** (~50vh)
- Fondo `--deep-blue`
- Título: "Nuestra comunidad"
- Subtítulo breve

**Sección ¿Qué es?**
- Fondo `--cream`
- 2-3 párrafos cortos sobre Couchsurfing Pereira

**Sección Blog**
- Iframe actual del blog de Blogspot (mantener)
- Wrapper con padding y border-radius para que se vea integrado

**Sección Autores ("Construido por")**
- Fondo `--midnight`
- Grid de 4 cards con avatar circular (iniciales sobre fondo coral) + nombre + link
- Autores: Harold Romero, Maribel Obando, Andres Zuluaga, Sebastian Ardila

**Footer** (mismo componente)

## Datos concretos

- **WhatsApp:** `+57 317 782 2100` (link: `https://wa.me/573177822100`)
- **Logo existente:** `src/Couchsurfing_Pereira_1.png` (mantener uso)

## Lo que se elimina

- Hero rojo-naranja actual
- Bloque "en construcción por" inline en landing → se mueve a `/comunidad` con nuevo diseño
- Iframe del blog en landing → se mueve a `/comunidad`
- Estilos inline en `App.js`
- `src/styled.js` actual (componentes muy básicos, se rehace)

## Criterios de éxito

- [ ] Landing carga con hero pantalla completa, sin iframe ni autores visibles
- [ ] Click en CTA Hero scrollea a sección contacto
- [ ] Click en botón WhatsApp abre `wa.me/573177822100`
- [ ] Navegar a `/comunidad` muestra blog + autores
- [ ] Funciona en dev (`npm start`) y build (`npm run build`)
- [ ] Responsive: se ve bien en mobile (375px) y desktop (1440px)

## Decisiones diferidas

- Texto de "¿Qué es Couchsurfing Pereira?" se rellena con placeholder; user lo refinará después
- Links de autores quedan apuntando a `#` por ahora (actualmente apuntan a google.com como placeholder)
