import './globals.css';
import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Apex LK.Tech | AI, Website & App Development Company',
  description:
    'Apex LK.Tech builds premium websites, Android applications, AI chatbots, UI/UX design, SEO services, business automation solutions, and custom software for startups and businesses.',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      type: 'image/png',
    },
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Apex LK.Tech | AI, Website & App Development Company',
    description:
      'Apex LK.Tech creates premium websites, Android apps, AI chatbots, UI/UX design, SEO, automation and custom software.',
    siteName: 'Apex LK.Tech',
    type: 'website',
    url: 'https://www.alk.co.in/',
    images: [
      {
        url: 'https://www.alk.co.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Apex LK.Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex LK.Tech | AI, Website & App Development Company',
    description: 'Premium Website Development, Android Apps, AI Chatbots, SEO, UI/UX Design and Business Automation.',
  },
  metadataBase: new URL('https://www.alk.co.in'),
  alternates: {
    canonical: 'https://www.alk.co.in/',
  },
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
