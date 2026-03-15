# PRODUCTOS Page Redesign Prompt

## Page: `/productos`
## File: `src/app/productos/page.tsx`

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
- No horizontal scroll (except intentional carousels)
- Thumb-zone CTA placement

## Accessibility
- Contact modal trigger visible
- WhatsApp button always accessible
- Focus states on all interactive elements
- Semantic HTML (proper heading hierarchy)

---

## Current State Analysis

### Page Structure
- **Hero**: Gradient bg, H1, description, 2 CTAs, link to /pricing
- **Categories**: 3 product categories (Lentes Graduados, Lentes de Sol, Protección Luz Azul)
- **Product Cards**: 6 products per category with image, name, price, features, 2 CTAs
- **Final CTA**: "¿No encuentras lo que buscas?" section

### Existing Data (DO NOT MODIFY)
**Lentes Graduados:**
- Progresivos Premium - Desde $2,500
- Bifocales Ejecutivos - Desde $1,800
- Monofocales HD - Desde $1,200
- Antirreflejantes - Desde $1,500
- Fotocromáticos - Desde $2,200
- Alto Índice - Desde $2,800

**Lentes de Sol:**
- Polarizados Sport - Desde $1,500
- Clásicos Elegantes - Desde $1,200
- Aviador Premium - Desde $1,800
- Oversize Fashion - Desde $1,400
- Deportivos Pro - Desde $1,600
- Vintage Collection - Desde $1,300

**Protección Luz Azul:**
- Blue Light Pro - Desde $1,600
- Office Comfort - Desde $1,400
- Gaming Elite - Desde $1,700
- Everyday Shield - Desde $1,300
- Night Mode - Desde $1,500
- Student Plus - Desde $1,200

---

## Design Improvements

### Hero Section
1. **Background**: Solid navy-900 (no gradient orbs)
2. **Glass card**: Subtle `backdrop-blur-md bg-white/10` behind content
3. **Typography**: H1 with font-roots, body with font-sans
4. **CTAs**:
   - Primary: "Solicitar Cotización" (white button)
   - Secondary: "Agendar Examen" (outline)
5. **Remove**: Pricing link from hero (confusing context)

### Category Navigation
1. **Add sticky tabs**: Category selector that sticks on scroll
2. **Tab design**: Underline indicator, no background
3. **Mobile**: Horizontal scroll tabs

### Product Cards
1. **Layout**:
   - Desktop: 3 columns
   - Tablet: 2 columns
   - Mobile: Full-width cards
2. **Card design**:
   - White bg, subtle shadow
   - Image with glass overlay on hover
   - Clean typography (no "Premium" badge)
3. **Features**: Simple checkmarks, not bullet dots
4. **CTAs**:
   - Single "Cotizar" button (navy bg)
   - Link to WhatsApp with pre-filled message including product name
5. **Remove**: "Más Info" button (redundant)

### Category Headers
1. **Icons**: Replace emojis with simple SVG icons
2. **Description**: Shorter, 1 line max
3. **Spacing**: Reduce mb-16 to mb-8

### Final CTA Section
1. **Glass card**: Add subtle glass effect
2. **Typography**: Font-roots for headline
3. **CTAs**:
   - Primary: "WhatsApp Directo" (green)
   - Secondary: "Llamar Ahora" (outline)

---

## SEO Requirements

### Current Meta (Keep - already good)
```html
<title>Productos - Lentes y Armazones Premium | L&G OPTICS Puebla</title>
<meta name="description" content="Descubre nuestra amplia selección de lentes oftálmicos, armazones premium y lentes de sol en Puebla...">
```

### H1 (Keep)
```html
<h1>Productos Premium para tu Visión</h1>
```

### Category H2s (Keep)
```html
<h2>Lentes Graduados</h2>
<h2>Lentes de Sol</h2>
<h2>Protección Luz Azul</h2>
```

### Internal Links (Add)
- Link to /pricing: "Ver paquetes desde $1,900"
- Link to /examenes-de-vista: "Necesitas examen?"
- Link to /contacto: All CTAs

---

## Mobile Considerations

1. **Hero**: Stack CTAs, full-width
2. **Category tabs**: Horizontal scroll, always visible
3. **Product cards**:
   - Full-width single column
   - Swipe hint on first card
   - Image takes 50% of card height
4. **CTA buttons**: Thumb-zone placement (sticky bottom optional)
5. **Images**: Lazy load with placeholder

---

## Contact/WhatsApp Accessibility

1. **Per-product WhatsApp**:
   - Link format: `https://wa.me/522213374152?text=Hola, me interesa [PRODUCT_NAME]`

2. **Floating actions**:
   - WhatsApp button (fixed, always visible)
   - Contact modal trigger (secondary)

3. **Category CTA**: "Agendar cita para ver [category]" at end of each category

---

## Component Changes Summary

| Section | Action | Key Changes |
|---------|--------|-------------|
| Hero | Modify | Solid bg, glass card, simplified |
| Category Tabs | Add | Sticky navigation, underline style |
| Product Cards | Modify | Clean design, single CTA, WhatsApp link |
| Category Headers | Simplify | SVG icons, shorter text |
| Final CTA | Modify | Glass card, WhatsApp primary |

---

## Files to Modify
```
src/app/productos/page.tsx
```

---

## Lazy Loading Strategy
```tsx
// Add to product images
<Image
  src={product.image}
  alt={product.name}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```
