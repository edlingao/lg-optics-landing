# CONTACTO Page Redesign Prompt

## Page: `/contacto`
## File: `src/app/contacto/page.tsx`
## Component: `src/components/ContactForm.tsx`

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
- Contact form must be highly accessible
- WhatsApp button always accessible
- Focus states on all interactive elements
- Semantic HTML, proper labels

---

## Current State Analysis

### Existing Data (DO NOT MODIFY)

**Contact Methods:**
1. Teléfono - (221) 337-4152
   - Llamadas directas de 11:00 AM a 6:00 PM

2. WhatsApp - (221) 337-4152
   - Mensajes 24/7, respuesta rápida

3. Email - info@lg-optics.com
   - Respuesta en menos de 24 horas

4. Visita Directa - 45 Sur #2910, Nueva Antequera
   - Sin cita previa, de 11:00 AM a 6:00 PM

**Address:**
Calle 45 Sur #2910 Local 1 PB, Nueva Antequera, Puebla 72180

**Hours:**
- Lunes - Viernes: 11:00 AM - 6:00 PM
- Sábados: 11:00 AM - 3:00 PM

**FAQs:**
- ¿Necesito agendar cita para un examen de vista?
- ¿Cuánto tiempo dura un examen completo?
- ¿Qué debo traer para mi cita?
- ¿Atienden emergencias visuales?
- ¿Cuándo estarán listos mis lentes?

---

## Design Improvements

### Hero Section
1. **Background**: Solid navy gradient (no gradient-bg class)
2. **Typography**:
   - H1: font-roots "Contáctanos"
   - Body: font-sans
3. **CTAs**:
   - Primary: "Llamar Ahora" (white bg)
   - Secondary: "WhatsApp" (green, outline)
4. **Simplify**: Remove paragraph, just headline + CTAs

### Contact Methods Section
1. **Layout**: 2x2 grid (desktop), 2 columns (mobile)
2. **Cards**:
   - Glass effect cards
   - SVG icons (not emojis)
   - Prominent action button
3. **Highlight WhatsApp**: Slightly larger or with pulse indicator
4. **Remove**: Colored button backgrounds, use navy only

### Form + Map Section
1. **Layout**: Two columns (desktop), stacked (mobile)
2. **Form column**:
   - Remove info box above form
   - Simplified form: Name, Phone, Service dropdown, Message (optional)
   - Inline validation (subtle)
   - Submit button: Navy bg, white text
3. **Map column**:
   - Full-height map
   - Glass overlay card with address + hours
   - "Cómo llegar" button → Google Maps

### ContactForm Component Improvements
1. **Fields**:
   - Name: Required, autofocus
   - Phone: Required, tel input type
   - Service: Dropdown (Examen, Lentes, Cotización, Otro)
   - Message: Optional, textarea
2. **Validation**: Real-time, gentle error messages
3. **Submit states**:
   - Default: "Enviar Mensaje"
   - Loading: Spinner
   - Success: Checkmark + "¿Quieres contactarnos por WhatsApp?"
   - Error: Retry option
4. **Post-submit**: Show WhatsApp + Phone CTAs

### FAQ Section
1. **Layout**: Accordion (collapsible)
2. **Cards**: White bg, subtle shadow
3. **Add**: "¿Más preguntas?" with WhatsApp link
4. **Remove**: Add FAQ schema if not present

### Map Card Overlay
1. **Glass effect**: `backdrop-blur-md bg-white/90`
2. **Content**:
   - Address (copyable)
   - Hours with current status (Abierto/Cerrado)
   - "Abrir en Maps" button

---

## SEO Requirements

### Meta (Keep - already good)
```html
<title>Contacto - Agenda tu Cita | L&G OPTICS Puebla</title>
```

### H1 (Simplify)
```html
<h1>Contáctanos</h1>
```

### H2s
```html
<h2>Formas de Contacto</h2>
<h2>Envíanos un Mensaje</h2>
<h2>Visítanos</h2>
<h2>Preguntas Frecuentes</h2>
```

### FAQ Schema (Add if not present)
```json
{
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

---

## Mobile Considerations

1. **Hero**: Compact, CTAs stacked
2. **Contact methods**: 2x2 grid maintained
3. **Form**: Full-width, large touch targets
4. **Map**: Below form, 300px height
5. **FAQ**: Full-width accordion
6. **Sticky bottom**: "Llamar" + "WhatsApp" buttons

---

## Contact/WhatsApp Accessibility

### Primary Goal: Make contact EASY

1. **WhatsApp everywhere**:
   - Hero CTA
   - Contact method card (highlighted)
   - Post-form submit option
   - FAQ section footer
   - Floating button (global)

2. **Phone everywhere**:
   - Hero CTA
   - Contact method card
   - Map overlay
   - Clickable in all mentions

3. **Form optimization**:
   - Autofocus on name field
   - Phone input with tel: keyboard on mobile
   - Large submit button (full-width mobile)
   - Success state encourages WhatsApp

4. **Accessibility**:
   - All form fields have labels
   - Error messages associated with fields
   - Focus visible on all elements
   - Screen reader friendly

---

## Component Changes Summary

| Section | Action | Key Changes |
|---------|--------|-------------|
| Hero | Simplify | Remove paragraph, compact CTAs |
| Contact Methods | Modify | Glass cards, SVG icons, navy buttons |
| Form | Simplify | Fewer fields, inline validation |
| Map | Enhance | Glass overlay with hours/status |
| FAQ | Enhance | Accordion, WhatsApp link |

---

## Files to Modify
```
src/app/contacto/page.tsx
src/components/ContactForm.tsx
src/components/GoogleMap.tsx (glass overlay)
```

---

## Form Field Specifications

```tsx
// Simplified form fields
const fields = [
  { name: "name", label: "Nombre", type: "text", required: true },
  { name: "phone", label: "Teléfono", type: "tel", required: true },
  {
    name: "service",
    label: "Servicio",
    type: "select",
    options: [
      "Examen de Vista",
      "Cotización de Lentes",
      "Información General",
      "Otro"
    ]
  },
  { name: "message", label: "Mensaje (opcional)", type: "textarea", required: false }
];
```

---

## Post-Submit Flow

```
Submit → Loading (1-2s) → Success State
                              ↓
         "¡Gracias! Te contactaremos pronto."
                              ↓
         [WhatsApp Ahora]  [Llamar]
              ↓                 ↓
         Opens wa.me       Opens tel:
```
