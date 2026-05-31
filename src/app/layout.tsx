import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';

/* ─── Fonts ─── */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

/* ─── Metadata ─── */
export const metadata: Metadata = {
  title: 'Ruddha Architects & Interiors — Where Space Becomes Story | Warangal',
  description:
    'Ruddha Architects & Interiors is a professional architecture, interior design, and turnkey execution studio based in Kashibugga, Warangal, Telangana. Led by Ar. Sathkruth Gone, we deliver AI-integrated, client-centric architectural design from concept to completion.',
  keywords: [
    'architects in Warangal',
    'architecture firm Warangal',
    'interior design Warangal',
    'Ruddha Architects',
    'Ar. Sathkruth Gone',
    'architecture Telangana',
    'residential architecture Warangal',
    'turnkey construction Warangal',
    'interior designers Telangana',
    'landscape design Warangal',
    'renovation Warangal',
    'AI integrated architecture',
  ],
  authors: [{ name: 'Ruddha Architects & Interiors' }],
  openGraph: {
    title: 'Ruddha Architects & Interiors — Warangal, Telangana',
    description: 'Where Space Becomes Story. Architecture, interiors, and execution by Ar. Sathkruth Gone.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ─── Root Layout ─── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
