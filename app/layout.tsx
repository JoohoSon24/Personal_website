import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'https://jooho-son-portfolio.mellowloach5.chatgpt.site',
  ),
  title: 'Jooho Son — AI & 3D Vision Researcher',
  description:
    'Portfolio of Jooho Son, a KAIST student working on 3D/4D vision, spatial intelligence, and vision-language-action systems.',
  openGraph: {
    title: 'Jooho Son — AI & 3D Vision Researcher',
    description: '3D/4D Vision · Spatial Intelligence · VLA',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jooho Son — AI & 3D Vision Researcher',
    description: '3D/4D Vision · Spatial Intelligence · VLA',
    images: ['/og.png'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
