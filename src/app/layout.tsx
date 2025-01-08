import type { Metadata } from "next";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";
import Head from "next/head";


export const metadata: Metadata = {
  title: "L & G OPTICS",
  description: "Descubre en L & G OPTICS una amplia selección de lentes, armazones y servicios de cuidado visual personalizados. Encuentra la solución perfecta para tu visión.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased" 
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
