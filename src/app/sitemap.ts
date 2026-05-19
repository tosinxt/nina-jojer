import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

// Static routes with their SEO priority and change frequency
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: siteConfig.url,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  {
    url: `${siteConfig.url}/about`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${siteConfig.url}/services`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${siteConfig.url}/services/policy`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${siteConfig.url}/services/corporate`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${siteConfig.url}/services/technology`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${siteConfig.url}/services/communications`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${siteConfig.url}/case-studies`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  },
  {
    url: `${siteConfig.url}/insights`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.85,
  },
  {
    url: `${siteConfig.url}/events`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    url: `${siteConfig.url}/careers`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    url: `${siteConfig.url}/contact`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // When Sanity is fully configured, fetch dynamic slugs here:
  // const insights = await client.fetch<{ slug: string; _updatedAt: string }[]>(
  //   `*[_type == "insight"]{ "slug": slug.current, _updatedAt }`
  // );
  // const insightRoutes = insights.map((i) => ({
  //   url: `${siteConfig.url}/insights/${i.slug}`,
  //   lastModified: new Date(i._updatedAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.75,
  // }));
  //
  // const caseStudies = await client.fetch<{ slug: string; _updatedAt: string }[]>(
  //   `*[_type == "caseStudy"]{ "slug": slug.current, _updatedAt }`
  // );
  // const caseStudyRoutes = caseStudies.map((c) => ({
  //   url: `${siteConfig.url}/case-studies/${c.slug}`,
  //   lastModified: new Date(c._updatedAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.75,
  // }));

  // Known insight slugs (fallback until Sanity is live)
  const knownInsightSlugs = [
    'nigeria-blockchain-policy',
    'west-africa-trade',
    'data-protection-act',
    'big-data-ai-africa',
  ];
  const insightRoutes: MetadataRoute.Sitemap = knownInsightSlugs.map((slug) => ({
    url: `${siteConfig.url}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const knownCaseStudySlugs = ['e-borders', 'financial-network'];
  const caseStudyRoutes: MetadataRoute.Sitemap = knownCaseStudySlugs.map((slug) => ({
    url: `${siteConfig.url}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...insightRoutes, ...caseStudyRoutes];
}
