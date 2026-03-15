# PRICING Page Redesign Prompt

## Page: `/pricing`
## File: `src/app/pricing/page.tsx`

---

## Design Rules
- DO NOT reinvent the wheel or experiment with multiple designs
- DO NOT go crazy with colors (Navy #1e3a8a & White only)
- NEVER make up information about: prices, sales, location, names, products
- Use ONLY data from existing page content

## Typography
- Headlines: Bakso Sapi (font-roots)
- Body: Bariol (font-sans)

## Glassmorphism (Subtle)
- Cards: `backdrop-blur-md bg-white/60 border border-white/30`
- Overlays: `backdrop-blur-md bg-navy-900/70 border border-white/10`

## Mobile First
- Touch targets: min 44x44px
- No horizontal scroll
- Thumb-zone CTA placement

## Accessibility
- Contact modal trigger visible
- WhatsApp button always accessible
- Focus states on all interactive elements
- Semantic HTML (proper heading hierarchy)

---

## Current State Analysis

### Existing Data (DO NOT MODIFY)

**Packages:**
1. Paquete Básico - $1,900
   - Lentes oftálmicos graduados CR-39
   - Resistencia a rayones
   - Armazón de línea incluido
   - Icon: 🤓

2. Paquete Superior - $2,900 (Más Popular)
   - Lentes oftálmicos graduados
   - Filtro Antiblue Premium
   - Tratamiento antirreflejante
   - Resistencia a rayones
   - Armazón de línea incluido
   - Icon: 💻

3. Paquete Alto Índice - $3,900
   - Lentes de alto índice (delgados)
   - Diseño progresivo disponible
   - Filtro Antiblue Premium
   - Tratamiento antirreflejante
   - Fotocromático incluido
   - Armazón de línea incluido
   - Icon: ✨

**FAQs:**
- ¿Qué armazón incluye cada paquete?
- ¿Cuánto tiempo tardan mis lentes?
- ¿Puedo elegir un armazón de marca premium?
- ¿Los paquetes incluyen examen de vista?

---

## Current State (Good elements to keep)

### Already Implemented Well
- Glassmorphism hero (keep but simplify)
- 3-tier pricing cards with highlight on middle
- FAQ section with schema markup
- Final CTA with glass effect
- "Más Popular" badge
- Checkmark icons (not bullets)

### Needs Improvement
- Too many decorative orbs (heavy for mobile)
- Colors: Using accent (amber) should be navy/white only
- Card scale effect on popular (too dramatic on mobile)
- FAQ is plain cards, should be accordion

---

## Design Improvements

### Hero Section
1. **Background**: Solid navy-900 to primary-800 gradient (keep)
2. **Remove**: Glowing orbs (3 large blur elements)
3. **Glass card**: Simplify to single subtle glass layer
4. **Typography**:
   - H1: font-roots "Paquetes de Lentes en Puebla"
   - Body: font-sans
5. **Remove**: Extra gradient overlays inside glass card

### Pricing Cards
1. **Layout**:
   - Desktop: 3 columns, middle elevated
   - Mobile: Single column, all same size
2. **Card design**:
   - Non-highlighted: White bg, navy border
   - Highlighted (Superior): Navy bg with white text
   - Remove: Gradient on highlighted card
3. **Badge**: "Más Popular" - simple navy pill on white card
4. **Icons**: Replace emojis with simple SVG icons
5. **Price display**: Large font-roots number
6. **Features**: Checkmarks (keep), consistent spacing
7. **CTA**:
   - All cards: "Cotizar" → Opens WhatsApp with package name
   - Navy bg button (white on highlighted)

### Internal Links Section
1. **Keep**: Links to /productos and /examenes-de-vista
2. **Style**: Simple text links with arrow, no boxes

### FAQ Section
1. **Layout**: Accordion (collapsible)
2. **Card style**: White bg, subtle shadow
3. **Interaction**: Click to expand, one open at a time
4. **Icons**: + / - indicators

### Final CTA Section
1. **Background**: Solid navy gradient (no orbs)
2. **Glass card**: Keep subtle glass effect
3. **Typography**: font-roots headline
4. **CTAs**:
   - Primary: "Agendar Cita" → Contact modal
   - Secondary: "WhatsApp Directo" (green, outline style)

---

## SEO Requirements

### Meta (Already fixed per SEO.md)
```html
<title>Paquetes de Lentes desde $1,900 | L&G OPTICS Puebla</title>
```

### H1 (Keep)
```html
<h1>Paquetes de Lentes en Puebla</h1>
```

### H2s
```html
<h2>Paquete Básico — $1,900</h2>
<h2>Paquete Superior — $2,900</h2>
<h2>Paquete Alto Índice — $3,900</h2>
<h2>Preguntas Frecuentes</h2>
```

### FAQ Schema (Keep - already implemented)
```json
{
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

### Internal Links
- /productos: "Ver catálogo completo de armazones"
- /examenes-de-vista: "¿Necesitas examen de vista? Desde $250"

---

## Mobile Considerations

1. **Hero**: Reduce padding, smaller glass card
2. **Pricing cards**:
   - Single column, no scale effect
   - All cards same width
   - Swipe hint optional
3. **FAQ**: Full-width accordion
4. **Final CTA**: Stack buttons vertically
5. **Floating CTA**: "Cotizar" button fixed at bottom (optional)

---

## Contact/WhatsApp Accessibility

1. **Per-package WhatsApp**:
   - Básico: `https://wa.me/522213374152?text=Hola, me interesa el Paquete Básico de $1,900`
   - Superior: `https://wa.me/522213374152?text=Hola, me interesa el Paquete Superior de $2,900`
   - Alto Índice: `https://wa.me/522213374152?text=Hola, me interesa el Paquete Alto Índice de $3,900`

2. **FAQ section**: Add "¿Más preguntas?" with WhatsApp link

3. **Floating WhatsApp**: Always visible (global component)

---

## Component Changes Summary

| Section | Action | Key Changes |
|---------|--------|-------------|
| Hero | Simplify | Remove orbs, keep single glass layer |
| Pricing Cards | Modify | Navy/white only, SVG icons, no scale |
| FAQ | Enhance | Accordion, expand/collapse |
| Final CTA | Simplify | Remove orbs, keep glass |

---

## Files to Modify
```
src/app/pricing/page.tsx
```

---

## Color Corrections

**Remove (amber/accent colors):**
- `bg-accent` → `bg-navy-900`
- `hover:bg-accent/90` → `hover:bg-navy-800`
- `text-accent` → `text-white` or `text-navy-900`
- `shadow-primary-500/25` → `shadow-navy-900/20`

**Keep:**
- Green for WhatsApp only (`bg-green-500`)
- Green checkmarks in feature lists
