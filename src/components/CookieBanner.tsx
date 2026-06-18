'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';
import { getStoredConsent, saveConsent, type ConsentCategories } from '@/lib/consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [functional, setFunctional] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) setVisible(true);
  }, []);

  function close() {
    setVisible(false);
    setShowPreferences(false);
  }

  function acceptAll() {
    saveConsent({ necessary: true, analytics: true, functional: true });
    close();
  }

  function declineAll() {
    saveConsent({ necessary: true, analytics: false, functional: false });
    close();
  }

  function openPreferences() {
    const stored = getStoredConsent()?.categories;
    setAnalytics(stored?.analytics ?? false);
    setFunctional(stored?.functional ?? false);
    setShowPreferences(true);
  }

  function savePreferences() {
    const categories: ConsentCategories = { necessary: true, analytics, functional };
    saveConsent(categories);
    close();
  }

  if (!visible) return null;

  if (showPreferences) {
    return (
      <div className={styles.banner} role="dialog" aria-label="Cookie preferences">
        <div className={styles.prefsInner}>
          <p className={styles.title}>Cookie preferences</p>

          <div className={styles.prefRow}>
            <div className={styles.prefText}>
              <p className={styles.prefLabel}>Necessary</p>
              <p className={styles.prefDesc}>Required for the site to function. Always on.</p>
            </div>
            <span className={styles.lockedToggle} aria-hidden="true" />
          </div>

          <div className={styles.prefRow}>
            <div className={styles.prefText}>
              <p className={styles.prefLabel}>Analytics</p>
              <p className={styles.prefDesc}>Helps us understand site usage via Google Analytics.</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={analytics}
              className={`${styles.toggle} ${analytics ? styles.toggleOn : ''}`}
              onClick={() => setAnalytics((v) => !v)}
            >
              <span className={styles.toggleThumb} />
            </button>
          </div>

          <div className={styles.prefRow}>
            <div className={styles.prefText}>
              <p className={styles.prefLabel}>Functional &amp; Preference</p>
              <p className={styles.prefDesc}>Remembers choices like your preferred region or text size.</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={functional}
              className={`${styles.toggle} ${functional ? styles.toggleOn : ''}`}
              onClick={() => setFunctional((v) => !v)}
            >
              <span className={styles.toggleThumb} />
            </button>
          </div>

          <div className={styles.actions}>
            <button className={styles.decline} onClick={() => setShowPreferences(false)}>Back</button>
            <button className={styles.accept} onClick={savePreferences}>Save preferences</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.title}>We use cookies</p>
          <p className={styles.body}>
            We use cookies to improve your experience and analyse site usage.
            Read our{' '}
            <Link href="/cookies" className={styles.link}>Cookie Policy</Link>{' '}
            to learn more.
          </p>
        </div>
        <div className={styles.actions}>
          <button className={styles.manage} onClick={openPreferences}>Manage preferences</button>
          <button className={styles.decline} onClick={declineAll}>Decline</button>
          <button className={styles.accept} onClick={acceptAll}>Accept all</button>
        </div>
      </div>
    </div>
  );
}
