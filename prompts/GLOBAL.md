# GLOBAL Components Redesign Prompt

## Components:
- Header: `src/app/header/page.tsx`
- Footer: `src/app/footer/page.tsx`
- WhatsApp Button: `src/app/whatsapp-button/page.tsx`
- Contact Modal: `src/components/ContactModal.tsx` (NEW)
- CSS: `src/app/globals.css`
- Layout: `src/app/layout.tsx`

---

## Design Rules
- DO NOT reinvent the wheel or experiment with multiple designs
- DO NOT go crazy with colors (Navy #1e3a8a & White only)
- NEVER make up information about: prices, sales, location, names, products

## Typography
- Headlines: Bakso Sapi (font-roots)
- Body: Bariol (font-sans)

## Glassmorphism (Subtle)
- Cards: `backdrop-blur-md bg-white/60 border border-white/30`
- Overlays: `backdrop-blur-md bg-navy-900/70 border border-white/10`

## Mobile First
- Touch targets: min 44x44px
- Thumb-zone navigation

---

## Header Component

### Current State
- Sticky top: `sticky top-0 z-50`
- Background: `bg-navy-900`
- Logo + navigation links
- Mobile: Hamburger menu, slide-over from right
- Uses react-icons

### Improvements

1. **Glassmorphism on scroll**:
   - Default: `bg-navy-900`
   - On scroll: `backdrop-blur-md bg-navy-900/90`

2. **Desktop Navigation**:
   - Links: font-sans, white text
   - Active link: underline indicator
   - CTA: "Agendar Cita" button (white outline)

3. **Mobile Navigation**:
   - Hamburger: Simple 3-line icon
   - Slide-over: Glass effect (`backdrop-blur-xl bg-navy-900/95`)
   - Close button: X icon
   - Links: Large touch targets (48px height)
   - Bottom: WhatsApp + Phone quick actions

4. **Logo**:
   - Keep existing
   - Link to home

### Code Pattern
```tsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 20);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Header class
className={`sticky top-0 z-50 transition-all ${
  scrolled ? 'backdrop-blur-md bg-navy-900/90' : 'bg-navy-900'
}`}
```

---

## Footer Component

### Current State
- 4-column grid: Brand (2 cols) | Contact | Hours & Social
- Dark theme: `bg-navy-900 text-white`
- Social icons: Instagram, Facebook, TikTok

### Improvements

1. **Simplify to 3 columns**:
   - Column 1: Logo + tagline
   - Column 2: Quick links
   - Column 3: Contact + Hours

2. **Quick Links**:
   - Inicio, Productos, Exámenes, Precios, Contacto, Ubicación

3. **Contact Info**:
   - Phone: (221) 337-4152 (clickable)
   - Email: info@lg-optics.com (clickable)
   - Address: 45 Sur #2910 (link to /ubicacion)

4. **Hours**:
   - Lun-Vie: 11:00 AM - 6:00 PM
   - Sáb: 11:00 AM - 3:00 PM

5. **Social Icons**:
   - Simple white icons
   - Hover: opacity change only
   - Keep: Instagram, Facebook, TikTok

6. **Bottom Bar**:
   - Copyright: "© 2024 L&G OPTICS. Todos los derechos reservados."
   - Remove: Extra quick links (already in grid)

7. **Mobile**:
   - Single column stacked
   - Centered alignment
   - Social icons as last row

---

## WhatsApp Button Component

### Current State
- Fixed: `fixed bottom-6 right-6 z-50`
- Size: `w-14 h-14`
- Color: `bg-[#25d366]`
- Icon: BsWhatsapp from react-icons
- Link: wa.me with pre-filled message

### Improvements

1. **Animation**:
   - Idle: Subtle pulse every 5 seconds
   - Hover: Scale 1.1

2. **Tooltip**:
   - On hover: "¿Necesitas ayuda?" slide-up tooltip
   - Mobile: No tooltip (tap goes directly to WhatsApp)

3. **Shadow**:
   - Add: `shadow-lg shadow-green-500/30`

4. **Accessibility**:
   - aria-label: "Contactar por WhatsApp"
   - Focus visible ring

### Code Pattern
```tsx
// Pulse animation CSS
@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

.whatsapp-btn::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: #25d366;
  animation: pulse-ring 3s ease-in-out infinite;
  opacity: 0.3;
}
```

---

## Contact Modal Component (NEW)

### Purpose
Quick-access contact form from any page, secondary to WhatsApp button.

### Trigger Button
- Fixed position: `bottom-6 right-24` (left of WhatsApp)
- Size: `w-12 h-12`
- Style: `bg-navy-900 text-white rounded-full`
- Icon: Envelope or chat bubble
- Tooltip: "Formulario rápido"

### Modal Design
1. **Overlay**: `bg-black/50 backdrop-blur-sm`
2. **Modal card**: Glass effect, max-w-md, centered
3. **Header**: "Contáctanos" + close button
4. **Form fields**:
   - Name (required)
   - Phone (required)
   - Service dropdown
5. **Submit**: Navy button, full-width
6. **Success state**: Checkmark + WhatsApp CTA

### Code Structure
```tsx
// ContactModal.tsx
'use client';

import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-navy-900 mb-6">
              Contáctanos
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              ¡Gracias!
            </h3>
            <p className="text-gray-600 mb-6">
              Te contactaremos pronto.
            </p>
            <a
              href="https://wa.me/522213374152"
              className="bg-green-500 text-white px-6 py-3 rounded-lg inline-block"
            >
              WhatsApp Ahora
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
```

---

## CSS Updates (globals.css)

### Glass Classes (Refine existing)
```css
/* Subtle glass for Apple-like design */
.glass {
  @apply backdrop-blur-md bg-white/60 border border-white/30;
}

.glass-dark {
  @apply backdrop-blur-md bg-navy-900/70 border border-white/10;
}

/* Remove old glass classes or update them */
```

### Button Classes (Navy/White only)
```css
.btn-primary {
  @apply bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300;
}

.btn-secondary {
  @apply bg-transparent border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300;
}

.btn-whatsapp {
  @apply bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300;
}
```

### Remove Accent Colors
```css
/* REMOVE or comment out */
/* .bg-accent { ... } */

/* Replace accent usage with navy */
```

---

## Layout.tsx Updates

### Schema.org Fixes
```json
{
  "@type": "Optician",
  "name": "L&G OPTICS",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle 45 Sur #2910 Local 1 PB",
    "addressLocality": "Puebla",
    "addressRegion": "Puebla",
    "postalCode": "72180",
    "addressCountry": "MX"
  },
  "telephone": "+52-221-337-4152",
  "email": "info@lg-optics.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "11:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "11:00",
      "closes": "15:00"
    }
  ],
  "areaServed": "Puebla"
}
```

### Remove servesCuisine
Find and remove any `servesCuisine` field from the schema.

---

## Files to Modify
```
src/app/header/page.tsx
src/app/footer/page.tsx
src/app/whatsapp-button/page.tsx
src/components/ContactModal.tsx (CREATE)
src/app/globals.css
src/app/layout.tsx
```

---

## Implementation Order
1. Update globals.css with new glass classes
2. Fix layout.tsx schema
3. Refactor Header with scroll glass effect
4. Simplify Footer to 3 columns
5. Enhance WhatsApp button with animation
6. Create ContactModal component
7. Add ContactModal trigger to layout
