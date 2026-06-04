import type { Metadata, Viewport } from 'next';
import { Google_Sans_Flex } from 'next/font/google';
import './globals.css';
import Preloader from '@/components/Preloader';
import CookieBanner from '@/components/CookieBanner';
import { OrganizationJsonLd } from '@/components/JsonLd';
import { siteConfig } from '@/lib/seo';

const googleSansFlex = Google_Sans_Flex({
  variable: '--font-google-sans-flex',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#610203',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.defaultTitle,
    template: `%s | Nina Jojer`,
  },

  description: siteConfig.defaultDescription,
  keywords: siteConfig.keywords,

  authors: [{ name: 'Nina Jojer', url: siteConfig.url }],
  creator: 'Nina Jojer',
  publisher: 'Nina Jojer',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-GB': siteConfig.url,
      'en-US': siteConfig.url,
    },
  },

  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Nina Jojer — Strategic Advisory & Consulting',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [siteConfig.ogImage],
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',

  category: 'business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <OrganizationJsonLd />
      </head>
      <body className={googleSansFlex.variable}>
        <Preloader />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
