'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { CONSENT_CHANGE_EVENT, getStoredConsent, type ConsentCategories } from '@/lib/consent';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function applyConsent(categories: ConsentCategories) {
  window.gtag?.('consent', 'update', {
    analytics_storage: categories.analytics ? 'granted' : 'denied',
  });
}

export default function GoogleAnalytics() {
  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) applyConsent(stored.categories);

    function onConsentChange(e: Event) {
      const categories = (e as CustomEvent<ConsentCategories>).detail;
      applyConsent(categories);
    }

    window.addEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        id="ga-consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              wait_for_update: 500
            });
          `,
        }}
      />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `gtag('js', new Date()); gtag('config', '${GA_ID}');`,
        }}
      />
    </>
  );
}
