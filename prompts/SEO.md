# L&G OPTICS (lg-optics.com) — SEO Fixes

Site: https://www.lg-optics.com/  
Audit: March 2026 | Data: Google Search Console, last 12 months  
Totals: 35 clicks, 2,012 impressions, 1.7% CTR, avg position 8.8

---

## CRITICAL #1 — /pricing has duplicate meta tags from homepage

**Problem:** /pricing (888 impressions, 9 clicks, 1% CTR) shares the exact same title, meta description, and og:title as the homepage. No H1 or H2 tags exist on this page at all.

**Current title:** `L&G OPTICS Puebla - Lentes y Exámenes de Vista Profesionales`  
**Current meta desc:** Same as homepage (generic, no pricing info)

**Fix — set unique meta tags:**

```html
<title>Paquetes de Lentes desde $1,900 en Puebla | L&G OPTICS</title>

<meta name="description" content="Paquetes de lentes oftálmicos desde $1,900 con armazón incluido. Lentes graduados, antirreflejantes, progresivos y fotocromáticos. Óptica en Puebla con precios accesibles. ¡Cotiza hoy!">

<meta property="og:title" content="Paquetes de Lentes desde $1,900 | L&G OPTICS Puebla">
<meta property="og:description" content="Lentes graduados con armazón desde $1,900. Paquetes con antirreflejante, antiblue y fotocromático. Visítanos en Nueva Antequera, Puebla.">
```

---

## CRITICAL #2 — /pricing has zero heading tags

**Problem:** "Nuestros Paquetes" is styled visually but not wrapped in semantic H1/H2. Google can't parse page structure.

**Fix:**

```html
<h1>Paquetes de Lentes en Puebla — Desde $1,900</h1>
<p>Todos nuestros paquetes incluyen un armazón de línea.</p>

<!-- Name each pricing card with H2 -->
<h2>Paquete Básico — $1,900</h2>
<h2>Paquete Premium — $2,900</h2>
<h2>Paquete Elite — $3,900</h2>
```

---

## CRITICAL #3 — No canonical URLs on any page

**Problem:** Site accessible via both `lg-optics.com` and `www.lg-optics.com`. No canonical tags exist. Google indexes both as separate sites, splitting ranking power.

**Fix — add to `<head>` of every page:**

| Page | Canonical |
|------|-----------|
| / | `<link rel="canonical" href="https://www.lg-optics.com/">` |
| /pricing | `<link rel="canonical" href="https://www.lg-optics.com/pricing">` |
| /productos | `<link rel="canonical" href="https://www.lg-optics.com/productos">` |
| /examenes-de-vista | `<link rel="canonical" href="https://www.lg-optics.com/examenes-de-vista">` |
| /contacto | `<link rel="canonical" href="https://www.lg-optics.com/contacto">` |
| /ubicacion | `<link rel="canonical" href="https://www.lg-optics.com/ubicacion">` |

Also set up a 301 redirect from `lg-optics.com` → `www.lg-optics.com`.

---

## CRITICAL #4 — Homepage H1 is not keyword-optimized

**Problem:** Current H1 is "Tu Visión, Nuestra Especialidad" — a slogan nobody searches for. Top keyword "lentes en puebla" (36 impressions, 0 clicks, position ~12) appears in zero H1 tags sitewide.

**Fix:**

```html
<!-- Before -->
<h1>Tu Visión, Nuestra Especialidad</h1>

<!-- After -->
<h1>Óptica en Puebla — Lentes y Exámenes de Vista Profesionales</h1>
<p class="subtitle">Tu Visión, Nuestra Especialidad</p>
```

---

## CRITICAL #5 — Schema markup errors

**Problem:** LocalBusiness schema contains `"servesCuisine": "Optical Services"` (restaurant field) and shows hours as 09:00–19:00, but the site says 11:00–18:00.

**Fix — remove `servesCuisine` entirely, correct hours:**

```json
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "11:00",
    "closes": "18:00"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Saturday"],
    "opens": "11:00",
    "closes": "15:00"
  }
]
```

Consider adding `@type: "Optician"` and `"areaServed": "Puebla"`.

---

## MODERATE #6 — /pricing page is too thin

**Problem:** Only 3 price cards with minimal text and huge empty space. No package names, descriptions, or FAQs.

**Fix — add to each card:**
- A descriptive name (Básico / Premium / Elite)
- 1-sentence description of who it's for
- A CTA button ("Cotizar este paquete")

**Add FAQ section below cards:**

```html
<h2>Preguntas Frecuentes sobre Nuestros Paquetes</h2>
<h3>¿Qué armazón incluye cada paquete?</h3>
<p>Todos los paquetes incluyen un armazón de línea...</p>
<h3>¿Cuánto tiempo tardan mis lentes?</h3>
<p>Los lentes básicos están listos en...</p>
<h3>¿Puedo elegir un armazón de marca premium?</h3>
<p>Sí, puedes actualizar tu armazón...</p>
<h3>¿Los paquetes incluyen examen de vista?</h3>
<p>El examen de vista se puede agregar...</p>
```

Add FAQ schema markup for rich results.

---

## MODERATE #7 — Wrong phone number in /contacto meta description

**Current:** `(222) 123-4567`  
**Correct:** `(221) 337-4152`

```html
<meta name="description" content="Agenda tu examen de vista en L&G OPTICS Puebla. Llámanos al (221) 337-4152 o envía WhatsApp. Ubicados en 45 Sur #2910, Nueva Antequera. Estacionamiento gratuito.">
```

---

## MODERATE #8 — Navigation doesn't collapse on mobile

**Problem:** 60% of traffic is mobile. The navbar shows all 6 links + CTA horizontally, causing overflow on small screens.

**Fix:** Add hamburger menu at `max-width: 768px`. Keep "Agendar Cita" and WhatsApp always visible.

---

## MODERATE #9 — No internal cross-linking

| From | Link to | Anchor text |
|------|---------|-------------|
| /pricing | /productos | "Ver catálogo completo de armazones" |
| /pricing | /examenes-de-vista | "¿Necesitas examen de vista? Desde $250" |
| /productos | /pricing | "Ver nuestros paquetes desde $1,900" |
| /examenes-de-vista | /pricing | "Combina tu examen con un paquete de lentes" |
| All sub-pages | Breadcrumbs | "Inicio → Productos" etc. |

---

## Recommended title tags (all pages)

| Page | Title (under 60 chars) |
|------|------------------------|
| / | L&G OPTICS Puebla — Lentes y Exámenes de Vista |
| /pricing | Paquetes de Lentes desde $1,900 \| L&G OPTICS Puebla |
| /productos | Lentes y Armazones Premium en Puebla \| L&G OPTICS |
| /examenes-de-vista | Exámenes de Vista desde $250 en Puebla \| L&G OPTICS |
| /contacto | Contacto y Citas \| L&G OPTICS Puebla |
| /ubicacion | Ubicación L&G OPTICS — Nueva Antequera, Puebla |

Each page needs a unique meta description (under 160 chars) with primary keyword + CTA.

---

## What's already working

- Homepage has good keyword-rich title and meta description
- All images have alt text
- LocalBusiness schema present (needs corrections above)
- Language set to `es-MX` (correct for local Puebla SEO)
- /productos and /examenes-de-vista have unique descriptive titles and good structure
