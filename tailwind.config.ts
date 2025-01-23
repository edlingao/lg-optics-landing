import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#114D72",
      },
      backgroundImage: {
        bannerImg: "url('/glasses-copy.jpg')"
      },
      fontFamily: {
        roots: ['"Bakso Sapi"', 'cursive'],
      },
      screens: {
        sm: '300px',
        md: '700px',
        lg: '1024px',
        xl: '1280px',
      },
      boxShadow: {
        custom: '2px 2px 3px #999',
      },
    },
  },
  plugins: [],
} satisfies Config;
