import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const SITE_URL = "https://wolfdanielsymaktub.com";
const TITLE =
  "Wolf Daniel's & Maktub | Camisas vaqueras de fábrica al mayoreo";
const DESCRIPTION =
  "Fabricantes de camisas vaqueras al mayoreo en México. Marcas Wolf Daniel's y Maktub, pedido mínimo 30 piezas, catálogo actualizado cada semana. Sucursales en Puebla, Michoacán y Estado de México.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Wolf Daniel's & Maktub",
  },
  description: DESCRIPTION,
  keywords: [
    "camisas vaqueras al mayoreo",
    "ropa vaquera mayoreo",
    "fabricante de camisas vaqueras",
    "mayoreo ropa vaquera México",
    "camisas western mayoreo",
    "Wolf Daniel's",
    "Maktub camisas",
    "proveedor camisas vaqueras",
  ],
  authors: [{ name: "Wolf Daniel's & Maktub" }],
  category: "Ropa y moda al mayoreo",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Wolf Daniel's & Maktub",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wolf Daniel's & Maktub — Camisas vaqueras de fábrica al mayoreo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
