import { siteConfig } from '@/lib/seo';

/* ── Organisation + WebSite (sitelinks searchbox) ── */
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: 'Nina Jojer',
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/logo/Logo/logo-dark.png`,
          width: 180,
          height: 60,
        },
        sameAs: [
          'https://www.linkedin.com/company/ninajojer',
          'https://twitter.com/NinaJojer',
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: '160, Awolowo Road, Ikoyi',
          addressLocality: 'Lagos',
          addressCountry: 'NG',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: 'English',
        },
        description: siteConfig.defaultDescription,
        foundingDate: '2010',
        areaServed: ['Africa', 'Latin America', 'Caribbean'],
        knowsAbout: [
          'Public Policy',
          'Strategic Advisory',
          'Technology Consulting',
          'Business Strategy',
          'Political Risk',
          'Trade Development',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: 'Nina Jojer',
        publisher: { '@id': `${siteConfig.url}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteConfig.url}/insights?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'en-GB',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ── Breadcrumb trail ── */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ── Article / Blog Post ── */
export function ArticleJsonLd({
  title,
  excerpt,
  author,
  publishedAt,
  image,
  slug,
}: {
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  image: string;
  slug: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    image,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nina Jojer',
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo/Logo/logo-dark.png`,
      },
    },
    datePublished: publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/insights/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ── Service / Professional Service ── */
export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name,
    description,
    url,
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: 'Africa',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
