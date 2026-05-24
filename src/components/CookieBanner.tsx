'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

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
          <button className={styles.decline} onClick={decline}>Decline</button>
          <button className={styles.accept} onClick={accept}>Accept all</button>
        </div>
      </div>
    </div>
  );
}
