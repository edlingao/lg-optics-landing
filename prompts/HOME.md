# HOME Page Redesign Prompt

## Page: `/` (Homepage)
## File: `src/app/page.tsx`
## Components: Hero, Services, FeaturedProducts, WhyChooseUs, Brands, LocationContact

---

## Design Rules
- DO NOT reinvent the wheel or experiment with multiple designs
- DO NOT go crazy with colors (Navy #1e3a8a & White only)
- NEVER make up information about: prices, sales, location, names, products
- Use ONLY data from existing page content

## Typography
- Headlines: Bakso Sapi (font-roots) → Bold, attention-grabbing
- Body: Bariol (font-sans) → Readable, professional

## Glassmorphism (Subtle Apple-style)
- Cards on dark bg: `backdrop-blur-md bg-white/60 border border-white/30`
- Overlays on light bg: `backdrop-blur-md bg-navy-900/70 border border-white/10`

## Mobile First
- Touch targets: min 44x44px
- No horizontal scroll (except intentional carousels)
- Thumb-zone CTA placement (bottom of viewport)

## Accessibility
- Contact modal trigger visible on all pages
- WhatsApp button always accessible (bottom-right, z-50)
- Focus states on all interactive elements
- Semantic HTML (proper heading hierarchy)

---

## Current State Analysis

### Hero Component (`src/components/Hero.tsx`)
- Full viewport height (90vh)
- Gradient background: navy-900 → navy-800 → primary-800
- Background image with low opacity overlay
- H1: "Óptica en Puebla — Lentes y Exámenes de Vista Profesionales"
- Subtitle: "Tu Visión, Nuestra Especialidad" (accent color)
- 2 CTA buttons: "Agenda tu Examen" (accent) + "Ver Productos" (outline)
- 3 benefit cards with emoji icons
- Decorative blur elements

### Services Component
- 3-card grid layout
- Service cards with images and overlay gradients
- Links to: /examenes-de-vista, /productos, /pricing

### FeaturedProducts Component
- Tabbed product display (Prescription/Sun/Blue Filter)
- Uses ClientOnly wrapper for hydration

### WhyChooseUs Component
- 6-feature grid + stats section + testimonial card

### Brands Component
- Featured brands (3 hero cards) + additional brands grid
- Quality guarantee section

### LocationContact Component
- Contact details + Google Map embed
- Location features grid

---

## Design Improvements

### Hero Section
1. **Layout**: Keep full-viewport, add subtle glass card behind headline
2. **Typography**:
   - H1 with `font-roots` (Bakso Sapi) for impact
   - Body text with `font-sans` (Bariol) for readability
3. **Glass effect**: Add `backdrop-blur-md bg-white/10 border border-white/20` behind content
4. **CTAs**:
   - Primary: WhatsApp button (green, prominent)
   - Secondary: "Agendar Cita" (white outline)
   - Remove "Ver Productos" from hero (users can scroll)
5. **Benefits**: Convert emoji icons to simple SVG icons (faster load)
6. **Remove**: Decorative blur blobs (reduce complexity)

### Services Section
1. **Cards**: Add subtle glass effect on hover (`backdrop-blur-sm bg-white/80`)
2. **Remove**: Heavy gradient overlays on images
3. **Simplify**: Clean white cards with navy text
4. **CTAs**: Single "Ver más" link per card (no button)

### FeaturedProducts Section
1. **Mobile**: Horizontal scroll with snap points (no tabs)
2. **Desktop**: 3-column grid with hover zoom on images
3. **Add**: "Agendar cita" CTA at end of section

### WhyChooseUs Section
1. **Stats**: Animated counters (only on scroll-into-view)
2. **Cards**: Glass effect cards with checkmark icons (not emojis)
3. **Remove**: Testimonial card (no real testimonials = no credibility)

### Brands Section
1. **Simplify**: Single row of grayscale logos (opacity on hover)
2. **Remove**: Hero cards, guarantee badge
3. **Add**: Simple "Marcas que trabajamos" heading

### LocationContact Section
1. **Map**: Glass overlay card with address + "Cómo llegar" CTA
2. **Hours**: Show current status (Abierto/Cerrado based on time)
3. **CTAs**: WhatsApp + Phone + Map buttons

---

## SEO Requirements

### H1 (Keep current - already optimized)
```html
<h1>Óptica en Puebla — Lentes y Exámenes de Vista Profesionales</h1>
```

### Schema.org Fixes (in layout.tsx)
- Remove `servesCuisine` field
- Fix hours: Mon-Fri 11:00-18:00, Sat 11:00-15:00
- Add `@type: "Optician"`

### Internal Links
- Hero → /contacto (Agendar Cita)
- Services → /examenes-de-vista, /productos, /pricing
- LocationContact → /ubicacion

---

## Mobile Considerations

1. **Hero**: Stack CTAs vertically, full-width buttons
2. **Services**: Single column, swipe carousel optional
3. **Products**: Horizontal scroll with visible overflow hint
4. **WhyChooseUs**: 2x3 grid → 2 columns on mobile
5. **Brands**: Horizontal scroll logos
6. **LocationContact**: Stack map above contact info

---

## Contact/WhatsApp Accessibility

1. **WhatsApp Button**:
   - Fixed bottom-right (always visible)
   - Pulse animation every 5s
   - Tooltip on hover: "¿Necesitas ayuda?"

2. **Contact Modal Trigger**:
   - Secondary floating button (above WhatsApp)
   - Opens quick form: Name, Phone, Service dropdown
   - Post-submit: Redirect option to WhatsApp

3. **Phone number**: (221) 337-4152 clickable everywhere

---

## Component Changes Summary

| Component | Action | Key Changes |
|-----------|--------|-------------|
| Hero.tsx | Modify | Glass card, dual fonts, simplified CTAs |
| Services.tsx | Modify | Clean cards, remove heavy gradients |
| FeaturedProducts.tsx | Modify | Horizontal scroll mobile, grid desktop |
| WhyChooseUs.tsx | Modify | Animated stats, remove testimonial |
| Brands.tsx | Simplify | Single logo row, grayscale |
| LocationContact.tsx | Modify | Glass overlay on map, status indicator |

---

## Files to Modify
```
src/components/Hero.tsx
src/components/Services.tsx
src/components/FeaturedProducts.tsx
src/components/WhyChooseUs.tsx
src/components/Brands.tsx
src/components/LocationContact.tsx
src/app/layout.tsx (schema fixes)
```
