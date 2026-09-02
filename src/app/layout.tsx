import type { ReactNode } from "react";
import { Cormorant, Montserrat } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/Footer";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsReady } from "@/components/motion/JsReady";
import { site } from "@/data/content";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.brand,
  authors: [{ name: site.name }],
  keywords: [
    "mentoria padaria",
    "Júnior Maffille",
    "gestão de padarias",
    "aumento de faturamento",
    "mentoria negócios alimentícios",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.brand,
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/images/hero-sunset.png",
        width: 1200,
        height: 630,
        alt: "Júnior Maffille — mentoria para padarias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/hero-sunset.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#14110e",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brand,
  url: site.url,
  description: site.description,
  areaServed: "BR",
  founder: {
    "@type": "Person",
    name: site.name,
    jobTitle: "Mentor de padarias e negócios alimentícios",
  },
  sameAs: [site.whatsappHref],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <JsReady />
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <ProgressBar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
