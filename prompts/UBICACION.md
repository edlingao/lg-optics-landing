# UBICACION Page Redesign Prompt

## Page: `/ubicacion`
## File: `src/app/ubicacion/page.tsx`

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
- Semantic HTML

---

## Current State Analysis

### Existing Data (DO NOT MODIFY)

**Address:**
Calle 45 Sur #2910 Local 1 PB
Colonia Nueva Antequera
Puebla, Puebla 72180
México

**Contact:**
- Teléfono: (221) 337-4152
- Email: info@lg-optics.com

**Hours:**
- Lunes - Viernes: 11:00 AM - 6:00 PM
- Sábados: 11:00 AM - 3:00 PM

**Features:**
- Estacionamiento gratuito
- Transporte público cercano

**Transporte Público:**
- Ruta 12A - Nueva Antequera (2 cuadras)
- Ruta 15 - 45 Sur y 29 Poniente (1 cuadra)
- Ruta 8 - Boulevard 5 de Mayo (5 cuadras)
- Línea 1 RUTA - Estación Nueva Antequera (10 min caminando)

**Referencias Cercanas:**
- OXXO Nueva Antequera - 50 metros - Frente al local
- Farmacia del Ahorro - 100 metros - Misma cuadra
- Banco Azteca - 200 metros - A 2 cuadras hacia el norte
- Plaza Antequera - 300 metros - A 3 cuadras hacia el sur

---

## Design Improvements

### Hero Section
1. **Layout**: Large map as hero background with glass overlay
2. **Typography**:
   - H1: font-roots "Visítanos en Nueva Antequera"
   - Body: font-sans, shorter description
3. **Glass overlay**: Address card centered
4. **CTAs**:
   - Primary: "Abrir en Google Maps" (opens external)
   - Secondary: "Agendar Cita" (outline)

### Map Section
1. **Full-width map**: 400px height minimum
2. **Glass overlay card**:
   - Position: Bottom-left on desktop, below map on mobile
   - Content: Full address with copy button
   - Hours with live status (Abierto/Cerrado)
   - Quick action buttons

### Contact Info Section
1. **Cards**: Glass effect, icon + info
2. **Layout**: 3 cards (Phone, Email, Hours)
3. **Icons**: Simple SVG icons
4. **Interactions**:
   - Phone: Click to call
   - Email: Click to email
   - Hours: Show current status

### Quick Actions
1. **Buttons**: Side by side (desktop), stacked (mobile)
2. **Options**:
   - "Agendar Cita" → Contact modal
   - "WhatsApp" → wa.me link
3. **Style**: Navy and green buttons

### Transport Section
1. **Layout**: Clean list with route icons
2. **Cards**: White bg, subtle shadow
3. **Info**: Route name + stop name + distance
4. **Add**: Walking time estimates
5. **Remove**: 🚌 emojis, use SVG bus icon

### References Section
1. **Layout**: Compact list or 2x2 grid
2. **Cards**: Minimal, white bg
3. **Info**: Place name + distance + direction
4. **Icons**: Simple location markers

### Travel Tip
1. **Keep**: Blue info box
2. **Style**: Light glass effect
3. **Icon**: Simple info icon (not 💡)

### Final CTA Section
1. **Background**: Navy gradient
2. **Glass card**: Subtle glass effect
3. **Typography**: font-roots headline
4. **CTAs**:
   - Primary: "Llamar para Indicaciones"
   - Secondary: "WhatsApp Indicaciones"

---

## SEO Requirements

### Meta (Keep - already good)
```html
<title>Ubicación y Horarios - L&G OPTICS Nueva Antequera, Puebla</title>
```

### H1 (Simplify)
```html
<h1>Visítanos en Nueva Antequera</h1>
```

### H2s
```html
<h2>Ubicación Exacta</h2>
<h2>Información de Contacto</h2>
<h2>Transporte Público</h2>
<h2>Referencias Cercanas</h2>
```

### Schema (Already in layout.tsx)
- Verify address matches
- Verify hours match: 11:00-18:00 Mon-Fri, 11:00-15:00 Sat

### Local SEO
- Full address in structured format
- Phone number clickable
- Google Maps link with exact coordinates

---

## Mobile Considerations

1. **Hero**: Map full-width, glass card below
2. **Contact info**: Single column cards
3. **Quick actions**: Sticky bottom bar
4. **Transport**: Scrollable list
5. **References**: 2-column grid
6. **Final CTA**: Full-width buttons stacked

---

## Contact/WhatsApp Accessibility

1. **Address copy**:
   - Click-to-copy button
   - Visual feedback: "Copiado!"

2. **Google Maps**:
   - Pre-filled search: "L&G Optics, 45 Sur 2910, Nueva Antequera, Puebla"
   - Opens in new tab

3. **WhatsApp for directions**:
   - Pre-filled: "Hola, necesito indicaciones para llegar a L&G OPTICS"

4. **Phone**:
   - Always clickable: tel:+522213374152

5. **Floating WhatsApp**: Always visible (global)

---

## Component Changes Summary

| Section | Action | Key Changes |
|---------|--------|-------------|
| Hero | Redesign | Map as bg, glass overlay card |
| Map | Enhance | Glass overlay, copy address, status |
| Contact | Simplify | 3 icon cards, clickable |
| Transport | Simplify | Clean list, walking times |
| References | Simplify | Compact cards, 2x2 grid |
| Final CTA | Keep | Glass card, navy bg |

---

## Files to Modify
```
src/app/ubicacion/page.tsx
src/components/GoogleMap.tsx (glass overlay enhancement)
```

---

## Live Status Feature

```tsx
// Calculate if currently open
function getOpenStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = hour + minute / 60;

  if (day === 0) return { open: false, text: "Cerrado - Abrimos Lunes" };
  if (day === 6) {
    // Saturday: 11:00 - 15:00
    if (time >= 11 && time < 15) return { open: true, text: "Abierto hasta 3:00 PM" };
    return { open: false, text: "Cerrado - Abrimos Lunes" };
  }
  // Mon-Fri: 11:00 - 18:00
  if (time >= 11 && time < 18) return { open: true, text: "Abierto hasta 6:00 PM" };
  if (time < 11) return { open: false, text: "Abrimos a las 11:00 AM" };
  return { open: false, text: "Cerrado - Abrimos mañana" };
}
```

---

## Copy Address Feature

```tsx
function copyAddress() {
  const address = "Calle 45 Sur #2910 Local 1 PB, Nueva Antequera, Puebla 72180";
  navigator.clipboard.writeText(address);
  // Show "Copiado!" feedback
}
```
