import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  turbopack: {},
  async redirects() {
    return [
      { source: "/products", destination: "/productos", permanent: true },
      { source: "/contact", destination: "/contacto", permanent: true },
      { source: "/location", destination: "/ubicacion", permanent: true },
      { source: "/us", destination: "/nosotros", permanent: true },
    ];
  },
};

export default nextConfig;
