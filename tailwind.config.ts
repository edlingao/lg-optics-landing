import type { Config } from "tailwindcss";

const blue = {
  50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6',
  600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554',
};

export default {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: blue,
        // Brand blue, taken from the store logo.
        navy: blue,
        // Text and buttons: near-black, as fashion stores use. Blue is kept for the logo only.
        ink: '#1c1c1c',
        cream: '#ffffff',
        // Soft neutral for the few tinted bands and image placeholders.
        sand: '#f4f3ef',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        // Headings. The class keeps its old name so every page picks up the new typeface.
        roots: ['var(--font-display)', 'Georgia', 'serif'],
      },
      screens: { xs: '375px' },
    },
  },
  plugins: [],
} satisfies Config;
