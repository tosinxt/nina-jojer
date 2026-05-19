export const siteConfig = {
  name: 'Nina Jojer',
  url: 'https://www.ninajojer.com', // update when domain is live
  ogImage: 'https://www.ninajojer.com/og-image.jpg',
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

/** Merge page-level keywords with global keywords */
export function buildKeywords(...extra: string[]) {
  return [...extra, ...siteConfig.keywords];
}
