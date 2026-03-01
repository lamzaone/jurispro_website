import React from "react"
import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '@/components/core/Navbar';
import Footer from '@/components/core/Footer';
import MouseEffect from '@/components/core/MouseEffect';

import './globals.scss';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JurisProConsult | Consultanta Juridica Premium pentru Antreprenori',
  description:
    'Infiintare SRL, infiintare PFA, modificari firma si consultanta juridica pentru antreprenori din Romania. 500+ firme infiintate. Solicita oferta gratuita!',
  keywords: [
    'infiintare SRL',
    'infiintare PFA',
    'consultanta juridica',
    'modificari firma',
    'infiintare firma Romania',
    'avocat antreprenori',
  ],
  openGraph: {
    title: 'JurisProConsult | Consultanta Juridica Premium',
    description: 'Infiintare SRL, PFA, modificari firma si consultanta juridica. 500+ firme infiintate.',
    type: 'website',
    locale: 'ro_RO',
  },
  icons: {
    icon: '/logo-nobg.png',
    shortcut: '/logo-nobg.png',
    apple: '/logo-nobg.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body>
        <MouseEffect />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
