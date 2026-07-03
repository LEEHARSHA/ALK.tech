import './globals.css';
import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'ALK Solutions | Building Intelligent Digital Experiences',
  description: 'Premium software engineering for AI-first brands. Intelligent products, scalable systems, and immersive digital experiences.',
  openGraph: {
    title: 'ALK Solutions | Building Intelligent Digital Experiences',
    description: 'Premium software engineering for AI-first brands. Intelligent products, scalable systems, and immersive digital experiences.',
    siteName: 'ALK Solutions',
    type: 'website',
    url: 'https://alk-tech.com',
    images: [
      {
        url: 'https://alk-tech.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ALK Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALK Solutions | Building Intelligent Digital Experiences',
    description: 'Premium software engineering for AI-first brands.',
  },
  metadataBase: new URL('https://alk-tech.com'),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-white antialiased selection:bg-primary/30 selection:text-white">
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
