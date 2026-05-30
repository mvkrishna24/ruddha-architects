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
  title: 'Ruddha Architects & Interiors — Architecture That Speaks',
  description:
    'Ruddha Architects & Interiors is a premium architecture and interior design studio based in Hyderabad, India. We craft spaces that are structurally sound, visually timeless, and deeply human.',
  keywords: [
    'architecture',
    'interior design',
    'Hyderabad',
    'luxury architecture',
    'residential architecture',
    'commercial design',
    'Ruddha Architects',
    'Telangana',
  ],
  authors: [{ name: 'Ruddha Architects & Interiors' }],
  openGraph: {
    title: 'Ruddha Architects & Interiors',
    description: 'Architecture That Speaks',
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
