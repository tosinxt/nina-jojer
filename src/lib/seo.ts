export const siteConfig = {
  name: 'Nina Jojer',
  url: 'https://www.ninajojer.com', // update when domain is live
  ogImage: 'https://www.ninajojer.com/images/og/site.jpg',
  twitterHandle: '@NinaJojer',
  locale: 'en_GB',

  defaultTitle: 'Nina Jojer | Strategic Advisory & Consulting',
  defaultDescription:
    'Nina Jojer is a Strategic Advisory firm with strong technology implementation and delivery capabilities, specialising in public policy, business strategy, and technology across Africa and LAC markets.',

  keywords: [
    'Nina Jojer',
    'Strategic Advisory Africa',
    'Public Policy Consulting',
    'Business Strategy Africa',
    'Technology Consulting Africa',
    'Policy Analysis',
    'Government Consulting',
    'West Africa Business',
    'LAC Markets Consulting',
    'Political Risk Advisory',
    'E-Borders Infrastructure',
    'Trade Development Africa',
    'Data Protection Policy',
    'Blockchain Policy Africa',
  ] as string[],
} as const;

/** Build a full canonical URL from a pathname */
export function canonicalUrl(path = '') {
  return `${siteConfig.url}${path}`;
}

/**
 * Social-preview-safe image URL. WhatsApp drops og:image files over ~600KB,
 * so Sanity images are resized to 1200x630 JPEG via CDN params.
 * Relative paths are made absolute.
 */
export function ogImageUrl(image: string) {
  if (image.includes('cdn.sanity.io')) {
    return `${image}?w=1200&h=630&fit=crop&fm=jpg&q=80`;
  }
  return image.startsWith('/') ? canonicalUrl(image) : image;
}

/** Merge page-level keywords with global keywords */
export function buildKeywords(...extra: string[]) {
  return [...extra, ...siteConfig.keywords];
}
