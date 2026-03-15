# EXAMENES Page Redesign Prompt

## Page: `/examenes-de-vista`
## File: `src/app/examenes-de-vista/page.tsx`

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

**Exam Types:**
1. Examen Visual Completo - 45-60 min - Desde $350
   - Includes: Medición agudeza, Refracción computarizada, Fondo de ojo, Evaluación binocular, Detección enfermedades, Prescripción
   - Ideal: Revisión anual, cambio graduación, síntomas visuales

2. Examen de Refracción - 30 min - Desde $250
   - Includes: Autorefractometría, Refracción subjetiva, Visión cercana, Visión lejana, Corrección astigmatismo, Graduación final
   - Ideal: Renovación lentes, primera vez

3. Examen Pediátrico - 30-45 min - Desde $300
   - Includes: Pruebas adaptadas edad, Detección ambliopía, Evaluación estrabismo, Control miopía, Orientación padres, Seguimiento
   - Ideal: Niños 3-17 años, problemas escolares

4. Examen Ocupacional - 40 min - Desde $400
   - Includes: Agudeza certificada, Visión colores, Campo visual, Visión nocturna, Certificado oficial, Recomendaciones
   - Ideal: Conductores, pilotos, trabajadores industriales

**Technologies:**
- Autorefractómetro Digital
- Oftalmoscopio LED
- Lensómetro Automático
- Tonómetro de Aplanación

**Conditions:**
- Miopía, Hipermetropía, Astigmatismo, Presbicia, Ojo Seco, Fatiga Visual

---

## Design Improvements

### Hero Section
1. **Layout**: Two-column (content + image)
2. **Background**: Solid navy gradient (no orbs)
3. **Glass card**: Light glass behind content
4. **Image**: Keep existing man-holding-glasses.jpeg
5. **Typography**:
   - H1: font-roots "Exámenes de Vista Profesionales en Puebla"
   - Body: font-sans
6. **CTAs**:
   - Primary: "Agendar Examen" (white bg)
   - Secondary: "Llamar Ahora" (outline)
7. **Remove**: Link to /pricing in hero (add later in page)

### Exam Types Section
1. **Cards**:
   - Glass effect cards with subtle shadow
   - 2x2 grid (desktop), single column (mobile)
2. **Card content**:
   - SVG icon (not emoji)
   - Name, duration, price on same line
   - Short description
   - "Incluye" as collapsible accordion (mobile)
   - Single CTA: "Agendar" → links to WhatsApp with exam name
3. **Price display**: Navy badge with white text

### Technology Section
1. **Layout**: 4-column icon grid (desktop), 2x2 (mobile)
2. **Icons**: Simple SVG icons (not emoji 🔬)
3. **Cards**: Clean white bg, navy text
4. **Remove**: Benefit bullets (too much text)

### Conditions Section
1. **Layout**: 3x2 grid (desktop), 2x3 (mobile)
2. **Cards**:
   - Compact cards with icon + name + description
   - Remove treatment info (clutter)
3. **Icons**: Replace emojis with simple SVGs

### Process Section
1. **Layout**: Horizontal stepper (desktop), vertical (mobile)
2. **Steps**: Numbered circles with connecting line
3. **Icons**: Simple SVGs (not emojis)
4. **Text**: Keep short descriptions

### Final CTA Section
1. **Glass card**: Subtle glass effect
2. **Typography**: font-roots for headline
3. **CTAs**:
   - Primary: "Agendar en Línea" → Contact modal
   - Secondary: "WhatsApp" (green)
4. **Hours**: Update to correct: Lun-Vie 11:00-18:00, Sáb 11:00-15:00

---

## SEO Requirements

### Current Meta (Keep - already good)
```html
<title>Exámenes de Vista Profesionales en Puebla | L&G OPTICS</title>
```

### H1 (Keep)
```html
<h1>Exámenes de Vista Profesionales en Puebla</h1>
```

### H2s (Keep)
- Tipos de Exámenes Disponibles
- Tecnología de Vanguardia
- Condiciones que Detectamos y Tratamos
- ¿Cómo funciona tu examen?

### Internal Links (Add)
- Link to /pricing: "Combina tu examen con un paquete de lentes"
- Link to /contacto: All CTAs
- Link to /ubicacion: "Visítanos"

### Schema (Add)
```json
{
  "@type": "Service",
  "name": "Examen de Vista",
  "provider": {
    "@type": "Optician",
    "name": "L&G OPTICS"
  },
  "areaServed": "Puebla",
  "priceRange": "$250 - $400"
}
```

---

## Mobile Considerations

1. **Hero**: Stack content above image, full-width CTAs
2. **Exam cards**: Single column, accordion for details
3. **Technology**: 2x2 grid
4. **Conditions**: 2-column grid
5. **Process**: Vertical stepper
6. **Floating CTA**: "Agendar" button fixed at bottom

---

## Contact/WhatsApp Accessibility

1. **Per-exam WhatsApp**:
   - Format: `https://wa.me/522213374152?text=Hola, quiero agendar un [EXAM_NAME]`

2. **Floating "Agendar" button**:
   - Fixed bottom, appears after scrolling past hero
   - Opens contact modal or WhatsApp

3. **Phone clickable**: (221) 337-4152

---

## Component Changes Summary

| Section | Action | Key Changes |
|---------|--------|-------------|
| Hero | Modify | Solid bg, glass card, simplified |
| Exam Cards | Modify | Glass effect, accordion mobile, single CTA |
| Technology | Simplify | SVG icons, remove bullets |
| Conditions | Simplify | Compact cards, SVG icons |
| Process | Modify | Stepper with connecting line |
| Final CTA | Modify | Glass card, correct hours |

---

## Files to Modify
```
src/app/examenes-de-vista/page.tsx
```

---

## Hours Correction
**Current (WRONG):** Lun-Vie 9:00-19:00 | Sáb 9:00-18:00 | Dom 10:00-16:00
**Correct:** Lun-Vie 11:00 AM - 6:00 PM | Sáb 11:00 AM - 3:00 PM
