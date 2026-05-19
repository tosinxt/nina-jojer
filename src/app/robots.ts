import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/', '/_next/'],
      },
      {
        // Block AI training crawlers
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'CCBot', 'anthropic-ai'],
        disallow: '/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
