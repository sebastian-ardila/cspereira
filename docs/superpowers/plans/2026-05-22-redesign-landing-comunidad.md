# Rediseño Landing + Comunidad — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rediseño completo del sitio Couchsurfing Pereira con hero moderno minimalista, sección WhatsApp, paleta azul medianoche + coral, y página separada `/comunidad`.

**Architecture:** SPA en React 18 con `react-router-dom` (HashRouter para compatibilidad con GitHub Pages). Theming centralizado en `src/theme.js`. Componentes reutilizables (Nav, Footer, WhatsAppButton). Páginas en `src/pages/`. Styled-components mantenido como motor de estilos.

**Tech Stack:** React 18 · react-router-dom v6 · styled-components 6 · Google Fonts (Instrument Serif, Inter) · CSS animations

**Nota sobre testing:** El proyecto no tiene suite de tests robusta. Este plan usa verificación manual en navegador (`npm start`) y build (`npm run build`) en lugar de TDD estricto, dado que el trabajo es 95% visual. Cada tarea incluye pasos de verificación explícitos.

**Spec de referencia:** `docs/superpowers/specs/2026-05-22-redesign-landing-comunidad-design.md`

---

## File Structure

**Crear:**
- `src/theme.js` — tokens (colores, fuentes, espaciado, breakpoints)
- `src/components/Nav.js` — navbar fijo translúcido
- `src/components/Footer.js` — footer minimal
- `src/components/WhatsAppButton.js` — botón WhatsApp con icono
- `src/pages/Home.js` — landing (Hero + Contacto)
- `src/pages/Comunidad.js` — página comunidad

**Modificar:**
- `package.json` — agregar `react-router-dom`
- `public/index.html` — `<link>` a Google Fonts + título
- `src/App.js` — reemplazar todo el contenido con `<HashRouter>` + rutas
- `src/index.css` — reset CSS + variables CSS globales

**Eliminar:**
- `src/styled.js` — reemplazado por componentes por página

---

## Task 1: Setup dependencias, fuentes y theme

**Files:**
- Modify: `package.json` (agregar dependency)
- Modify: `public/index.html` (fonts + title)
- Modify: `src/index.css` (reset + vars)
- Create: `src/theme.js`

- [ ] **Step 1: Instalar react-router-dom**

```bash
cd /Users/dila/Docs/Code/cspereira && npm install react-router-dom@6
```

Expected: agrega `"react-router-dom": "^6.x"` a `package.json`, sin errores.

- [ ] **Step 2: Actualizar `public/index.html`**

Reemplazar el contenido completo del `<head>` para incluir Google Fonts y mejor título. Abrir `public/index.html` y:

- Cambiar `<title>React App</title>` por `<title>Couchsurfing Pereira</title>`
- Cambiar el meta description a: `<meta name="description" content="Couchsurfing Pereira — Viaja. Comparte. Pertenece." />`
- Agregar antes del `</head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
```

- [ ] **Step 3: Reescribir `src/index.css`**

Reemplazar contenido completo de `src/index.css` con:

```css
:root {
  --midnight: #0B1B2B;
  --deep-blue: #1E3A5F;
  --coral: #FF7A6B;
  --coral-dark: #E8604F;
  --cream: #F8F4ED;
  --gold: #C9A87C;
  --whatsapp: #25D366;
  --whatsapp-dark: #1DA851;
  --ink: #1A1A1A;
  --muted: #6B6B6B;

  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  --max-width: 1200px;
  --radius: 12px;
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: var(--font-body);
  color: var(--ink);
  background: var(--cream);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
}
```

- [ ] **Step 4: Crear `src/theme.js`**

```javascript
export const theme = {
  colors: {
    midnight: '#0B1B2B',
    deepBlue: '#1E3A5F',
    coral: '#FF7A6B',
    coralDark: '#E8604F',
    cream: '#F8F4ED',
    gold: '#C9A87C',
    whatsapp: '#25D366',
    whatsappDark: '#1DA851',
    ink: '#1A1A1A',
    muted: '#6B6B6B',
  },
  fonts: {
    display: "'Instrument Serif', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
  },
  maxWidth: '1200px',
  radius: '12px',
};
```

- [ ] **Step 5: Verificar que el dev server arranca**

```bash
cd /Users/dila/Docs/Code/cspereira && npm start
```

Expected: dev server arranca en `localhost:3000` sin errores de compilación. La página todavía muestra el diseño viejo — eso está bien. Cerrar el server con Ctrl+C.

- [ ] **Step 6: Commit**

```bash
cd /Users/dila/Docs/Code/cspereira && git add package.json package-lock.json public/index.html src/index.css src/theme.js && git commit -m "feat: setup theme, fonts y router dependency

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Componente WhatsAppButton

**Files:**
- Create: `src/components/WhatsAppButton.js`

- [ ] **Step 1: Crear directorio `components/`**

```bash
mkdir -p /Users/dila/Docs/Code/cspereira/src/components
```

- [ ] **Step 2: Crear `src/components/WhatsAppButton.js`**

```javascript
import styled from 'styled-components';
import { theme } from '../theme';

const WHATSAPP_NUMBER = '573177822100';

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 32px;
  background: ${theme.colors.whatsapp};
  color: white;
  border-radius: 999px;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);

  &:hover {
    background: ${theme.colors.whatsappDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45);
  }

  svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }
`;

export default function WhatsAppButton({ label = 'Chatear por WhatsApp', message }) {
  const url = message
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <Button href={url} target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      {label}
    </Button>
  );
}
```

- [ ] **Step 3: Verificar import compila**

Crear un import temporal de prueba — NO ejecutar este paso si todavía no usaste WhatsAppButton en otro archivo. Validación real ocurre en Task 4 al usarlo en Home.

- [ ] **Step 4: Commit**

```bash
cd /Users/dila/Docs/Code/cspereira && git add src/components/WhatsAppButton.js && git commit -m "feat: componente WhatsAppButton reutilizable

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Componentes Nav y Footer

**Files:**
- Create: `src/components/Nav.js`
- Create: `src/components/Footer.js`

- [ ] **Step 1: Crear `src/components/Nav.js`**

```javascript
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

const Bar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 18px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;
  background: ${(p) => (p.$scrolled ? 'rgba(11, 27, 43, 0.85)' : 'transparent')};
  backdrop-filter: ${(p) => (p.$scrolled ? 'blur(12px)' : 'none')};
  border-bottom: 1px solid ${(p) => (p.$scrolled ? 'rgba(248, 244, 237, 0.08)' : 'transparent')};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 14px 20px;
  }
`;

const Logo = styled(Link)`
  font-family: ${theme.fonts.display};
  font-size: 1.5rem;
  color: ${theme.colors.cream};
  font-style: italic;
  letter-spacing: 0.02em;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 16px;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.cream};
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  opacity: 0.85;
  transition: opacity 0.2s ease, color 0.2s ease;

  &:hover {
    opacity: 1;
    color: ${theme.colors.coral};
  }
`;

const NavAnchor = styled.a`
  color: ${theme.colors.cream};
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  opacity: 0.85;
  cursor: pointer;
  transition: opacity 0.2s ease, color 0.2s ease;

  &:hover {
    opacity: 1;
    color: ${theme.colors.coral};
  }
`;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Bar $scrolled={scrolled}>
      <Logo to="/">CP</Logo>
      <Links>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/comunidad">Comunidad</NavLink>
        {isHome ? (
          <NavAnchor href="#contacto">Contacto</NavAnchor>
        ) : (
          <NavLink to="/#contacto">Contacto</NavLink>
        )}
      </Links>
    </Bar>
  );
}
```

- [ ] **Step 2: Crear `src/components/Footer.js`**

```javascript
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

const Wrapper = styled.footer`
  background: ${theme.colors.midnight};
  color: ${theme.colors.cream};
  padding: 32px;
  text-align: center;
  font-size: 0.88rem;
  opacity: 0.85;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const FooterLink = styled(Link)`
  color: ${theme.colors.coral};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <div>Couchsurfing Pereira · 2026</div>
      <div>
        Conoce más sobre <FooterLink to="/comunidad">nuestra comunidad</FooterLink>
      </div>
    </Wrapper>
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/dila/Docs/Code/cspereira && git add src/components/Nav.js src/components/Footer.js && git commit -m "feat: componentes Nav y Footer

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Página Home (Hero + Contacto)

**Files:**
- Create: `src/pages/Home.js`

- [ ] **Step 1: Crear directorio `pages/`**

```bash
mkdir -p /Users/dila/Docs/Code/cspereira/src/pages
```

- [ ] **Step 2: Crear `src/pages/Home.js`**

```javascript
import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';
import WhatsAppButton from '../components/WhatsAppButton';

const blobFloat = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -40px) scale(1.05); }
  66% { transform: translate(-20px, 30px) scale(0.95); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); opacity: 0.5; }
  50% { transform: translateY(8px); opacity: 1; }
`;

const Hero = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, ${theme.colors.midnight} 0%, ${theme.colors.deepBlue} 100%);
  color: ${theme.colors.cream};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  overflow: hidden;
`;

const Blob = styled.div`
  position: absolute;
  top: 10%;
  right: 8%;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, ${theme.colors.coral} 0%, transparent 70%);
  opacity: 0.35;
  border-radius: 50%;
  filter: blur(40px);
  animation: ${blobFloat} 14s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 280px;
    height: 280px;
    top: 20%;
    right: -10%;
  }
`;

const BlobTwo = styled(Blob)`
  top: auto;
  bottom: 5%;
  left: 5%;
  right: auto;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, ${theme.colors.gold} 0%, transparent 70%);
  opacity: 0.2;
  animation-duration: 18s;
  animation-direction: reverse;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

const Eyebrow = styled.div`
  color: ${theme.colors.gold};
  font-size: 0.82rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 500;
`;

const Title = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: clamp(3rem, 9vw, 6.5rem);
  font-weight: 400;
  line-height: 1;
  margin: 0;
  letter-spacing: -0.01em;

  em {
    font-style: italic;
    color: ${theme.colors.coral};
  }
`;

const Divider = styled.div`
  width: 64px;
  height: 1px;
  background: ${theme.colors.gold};
  opacity: 0.6;
`;

const Tagline = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  margin: 0;
  opacity: 0.9;
  letter-spacing: 0.05em;
`;

const CTA = styled.a`
  margin-top: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 36px;
  background: ${theme.colors.coral};
  color: ${theme.colors.midnight};
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 14px rgba(255, 122, 107, 0.4);

  &:hover {
    background: ${theme.colors.coralDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 122, 107, 0.55);
  }
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: ${theme.colors.cream};
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.6;
  animation: ${bounce} 2s ease-in-out infinite;

  &::after {
    content: '↓';
    display: block;
    margin-top: 6px;
    font-size: 1rem;
  }
`;

const Contacto = styled.section`
  background: ${theme.colors.cream};
  padding: 96px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactoCard = styled.div`
  max-width: 560px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ContactoTitle = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 400;
  margin: 0;
  color: ${theme.colors.midnight};
  line-height: 1.1;
`;

const ContactoText = styled.p`
  font-size: 1.05rem;
  color: ${theme.colors.muted};
  margin: 0 0 12px 0;
  line-height: 1.6;
`;

export default function Home() {
  return (
    <main>
      <Hero>
        <Blob />
        <BlobTwo />
        <HeroContent>
          <Eyebrow>Pereira · Colombia</Eyebrow>
          <Title>
            Couchsurfing <em>Pereira</em>
          </Title>
          <Divider />
          <Tagline>Viaja. Comparte. Pertenece.</Tagline>
          <CTA href="#contacto">Contáctanos →</CTA>
        </HeroContent>
        <ScrollHint>scroll</ScrollHint>
      </Hero>

      <Contacto id="contacto">
        <ContactoCard>
          <ContactoTitle>¿Listo para conectarte?</ContactoTitle>
          <ContactoText>
            Escríbenos por WhatsApp y únete a la comunidad de viajeros y anfitriones de Pereira.
          </ContactoText>
          <WhatsAppButton
            label="Chatear por WhatsApp"
            message="¡Hola! Me gustaría saber más sobre Couchsurfing Pereira."
          />
        </ContactoCard>
      </Contacto>
    </main>
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/dila/Docs/Code/cspereira && git add src/pages/Home.js && git commit -m "feat: página Home con hero minimal y sección contacto

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Página Comunidad

**Files:**
- Create: `src/pages/Comunidad.js`

- [ ] **Step 1: Crear `src/pages/Comunidad.js`**

```javascript
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';
import WhatsAppButton from '../components/WhatsAppButton';

const Hero = styled.section`
  background: linear-gradient(135deg, ${theme.colors.deepBlue} 0%, ${theme.colors.midnight} 100%);
  color: ${theme.colors.cream};
  padding: 160px 32px 96px;
  text-align: center;
`;

const HeroInner = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Eyebrow = styled.div`
  color: ${theme.colors.gold};
  font-size: 0.82rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 500;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 400;
  margin: 0;
  line-height: 1.05;

  em {
    font-style: italic;
    color: ${theme.colors.coral};
  }
`;

const HeroSub = styled.p`
  font-size: 1.1rem;
  opacity: 0.85;
  max-width: 520px;
  margin: 0;
  line-height: 1.6;
`;

const About = styled.section`
  background: ${theme.colors.cream};
  padding: 96px 32px;
`;

const AboutInner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  font-weight: 400;
  margin: 0;
  color: ${theme.colors.midnight};
  line-height: 1.1;
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.75;
  color: ${theme.colors.ink};
  margin: 0;
`;

const BlogSection = styled.section`
  background: ${theme.colors.cream};
  padding: 0 32px 96px;
`;

const BlogInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const BlogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

const BlogIframeWrap = styled.div`
  background: white;
  border-radius: ${theme.radius};
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(11, 27, 43, 0.08);
  border: 1px solid rgba(11, 27, 43, 0.06);
`;

const BlogIframe = styled.iframe`
  width: 100%;
  height: 900px;
  border: 0;
  display: block;
`;

const Authors = styled.section`
  background: ${theme.colors.midnight};
  color: ${theme.colors.cream};
  padding: 96px 32px;
`;

const AuthorsInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const AuthorsTitle = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  font-weight: 400;
  margin: 0;
  text-align: center;

  em {
    font-style: italic;
    color: ${theme.colors.coral};
  }
`;

const AuthorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`;

const AuthorCard = styled.a`
  background: rgba(248, 244, 237, 0.04);
  border: 1px solid rgba(248, 244, 237, 0.08);
  border-radius: ${theme.radius};
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 122, 107, 0.08);
    border-color: ${theme.colors.coral};
    transform: translateY(-3px);
  }
`;

const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.colors.coral} 0%, ${theme.colors.gold} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.display};
  font-size: 1.6rem;
  color: ${theme.colors.midnight};
  font-style: italic;
`;

const AuthorName = styled.div`
  font-size: 0.98rem;
  font-weight: 500;
  letter-spacing: 0.01em;
`;

const CTASection = styled.section`
  background: ${theme.colors.cream};
  padding: 96px 32px;
  text-align: center;
`;

const CTAInner = styled.div`
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const BackLink = styled(Link)`
  color: ${theme.colors.coral};
  font-weight: 500;
  font-size: 0.95rem;

  &:hover {
    text-decoration: underline;
  }
`;

const authors = [
  { name: 'Harold Romero', initials: 'HR', link: '#' },
  { name: 'Maribel Obando', initials: 'MO', link: '#' },
  { name: 'Andres Zuluaga', initials: 'AZ', link: '#' },
  { name: 'Sebastian Ardila', initials: 'SA', link: '#' },
];

export default function Comunidad() {
  return (
    <main>
      <Hero>
        <HeroInner>
          <Eyebrow>La comunidad</Eyebrow>
          <HeroTitle>
            Una <em>red</em> de viajeros y anfitriones
          </HeroTitle>
          <HeroSub>
            Conocemos personas, intercambiamos historias y abrimos nuestras puertas a quien viaja por Pereira.
          </HeroSub>
        </HeroInner>
      </Hero>

      <About>
        <AboutInner>
          <SectionTitle>¿Qué es Couchsurfing Pereira?</SectionTitle>
          <Paragraph>
            Somos un grupo local de viajeros, anfitriones y curiosos que cree que la mejor forma de
            conocer un lugar es a través de su gente. Organizamos encuentros, rutas y experiencias
            para que cualquier persona que pase por Pereira pueda sentirse en casa.
          </Paragraph>
          <Paragraph>
            La comunidad es abierta y gratuita. Si te interesa hospedar, viajar, o simplemente
            unirte a un próximo evento, contáctanos por WhatsApp.
          </Paragraph>
        </AboutInner>
      </About>

      <BlogSection>
        <BlogInner>
          <BlogHeader>
            <SectionTitle>Desde el blog</SectionTitle>
            <Paragraph>Historias y rutas que hemos compartido como comunidad.</Paragraph>
          </BlogHeader>
          <BlogIframeWrap>
            <BlogIframe
              title="Blog de Couchsurfing Pereira"
              src="https://couchsurfingpereira.blogspot.com/2023/09/salento-ruta-circular.html"
            />
          </BlogIframeWrap>
        </BlogInner>
      </BlogSection>

      <Authors>
        <AuthorsInner>
          <AuthorsTitle>
            Construido <em>por</em>
          </AuthorsTitle>
          <AuthorsGrid>
            {authors.map((author) => (
              <AuthorCard key={author.name} href={author.link}>
                <Avatar>{author.initials}</Avatar>
                <AuthorName>{author.name}</AuthorName>
              </AuthorCard>
            ))}
          </AuthorsGrid>
        </AuthorsInner>
      </Authors>

      <CTASection>
        <CTAInner>
          <SectionTitle>¿Te animas?</SectionTitle>
          <Paragraph>Únete a la comunidad escribiéndonos por WhatsApp.</Paragraph>
          <WhatsAppButton
            label="Escribir por WhatsApp"
            message="¡Hola! Quiero unirme a la comunidad de Couchsurfing Pereira."
          />
          <BackLink to="/">← Volver al inicio</BackLink>
        </CTAInner>
      </CTASection>
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/dila/Docs/Code/cspereira && git add src/pages/Comunidad.js && git commit -m "feat: página Comunidad con info, blog, autores y CTA

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Router en App.js + eliminar styled.js viejo

**Files:**
- Modify: `src/App.js` (reemplazo total)
- Delete: `src/styled.js`

- [ ] **Step 1: Reescribir `src/App.js`**

Reemplazar contenido completo de `src/App.js` con:

```javascript
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Comunidad from './pages/Comunidad';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunidad" element={<Comunidad />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
```

- [ ] **Step 2: Eliminar `src/styled.js`**

```bash
rm /Users/dila/Docs/Code/cspereira/src/styled.js
```

- [ ] **Step 3: Verificar que el build compila**

```bash
cd /Users/dila/Docs/Code/cspereira && npm run build
```

Expected: build se completa sin errores. Posibles warnings de ESLint sobre imports no usados son aceptables si no rompen el build.

- [ ] **Step 4: Levantar dev server y verificar visualmente**

```bash
cd /Users/dila/Docs/Code/cspereira && npm start
```

Abrir `http://localhost:3000/` y verificar:
- Nav fijo arriba con "CP", "Inicio", "Comunidad", "Contacto"
- Hero pantalla completa con título grande "Couchsurfing Pereira", tagline y botón coral
- Scroll: aparece sección de contacto con botón verde de WhatsApp
- Click botón WhatsApp: abre `wa.me/573177822100` en nueva pestaña
- Click "Comunidad" en nav: navega a `/#/comunidad`
- En `/comunidad`: hero secundario, sección "¿Qué es?", iframe del blog, grid de 4 autores con avatares circulares, sección final con WhatsApp y "Volver al inicio"
- Click "Volver al inicio": vuelve a `/`
- Probar en mobile (ancho 375px en DevTools): todo se ve bien sin overflow horizontal

Cerrar dev server con Ctrl+C cuando termine la verificación.

- [ ] **Step 5: Commit**

```bash
cd /Users/dila/Docs/Code/cspereira && git add src/App.js src/styled.js && git commit -m "feat: integrar router y eliminar layout viejo

Cambia App.js a HashRouter con rutas / y /comunidad.
Elimina src/styled.js (componentes legacy reemplazados).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Verificación final y limpieza

**Files:**
- Verify all: `npm run build`, manual browser test

- [ ] **Step 1: Verificar build de producción**

```bash
cd /Users/dila/Docs/Code/cspereira && npm run build
```

Expected: build exitoso, output en `build/`.

- [ ] **Step 2: Servir el build de producción y probar**

```bash
cd /Users/dila/Docs/Code/cspereira && npx serve -s build
```

Abrir la URL que muestra (típicamente `http://localhost:3000`). Verificar las mismas cosas del Task 6 Step 4. Las rutas con hash (`/#/comunidad`) deben funcionar idénticamente.

Cerrar con Ctrl+C.

- [ ] **Step 3: Verificar `git status` limpio**

```bash
cd /Users/dila/Docs/Code/cspereira && git status
```

Expected: `nothing to commit, working tree clean`. Si hay cambios pendientes (ej. `build/`), agregarlos a `.gitignore` si no lo están ya, o commitear según corresponda.

- [ ] **Step 4: Confirmar funcionalidad terminada**

Checklist final:
- [ ] Landing carga sin iframe ni autores
- [ ] Hero ocupa pantalla completa con poco texto
- [ ] CTA Hero scrollea a contacto
- [ ] Botón WhatsApp abre `wa.me/573177822100`
- [ ] `/comunidad` carga con blog, autores e info
- [ ] Navegación entre rutas funciona
- [ ] Build de producción funciona
- [ ] Responsive en mobile (375px)
- [ ] No queda `src/styled.js`

---

## Self-Review

**Spec coverage:**
- ✅ Paleta azul medianoche + coral → Task 1 (theme.js + CSS vars)
- ✅ Tipografía Instrument Serif + Inter → Task 1 (Google Fonts en index.html)
- ✅ Routing HashRouter → Task 6 (App.js)
- ✅ Nav fijo translúcido con blur al scroll → Task 3
- ✅ Hero minimal con blob coral animado → Task 4
- ✅ Sección Contacto con WhatsApp → Task 4
- ✅ Footer minimal → Task 3
- ✅ Página /comunidad con blog iframe → Task 5
- ✅ Sección autores con cards y avatares → Task 5
- ✅ WhatsApp `573177822100` → Task 2 (constante)
- ✅ Eliminar styled.js viejo → Task 6
- ✅ Eliminar iframe y autores de landing → reemplazado por Home en Task 4

**Placeholders escaneados:** Ninguno crítico. Links de autores apuntan a `#` (explícito en spec como decisión diferida). Texto "¿Qué es?" tiene contenido real plausible para que el sitio funcione; el usuario lo refinará.

**Type consistency:** `WHATSAPP_NUMBER` definido una vez en `WhatsAppButton.js`. Props del componente (`label`, `message`) consistentes en ambos usos. `theme` exportado desde `theme.js` se usa consistente en todos los componentes.
