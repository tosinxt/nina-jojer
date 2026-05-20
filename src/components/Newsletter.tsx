'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal as="div" className={styles.leftCol}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Newsletters</span>
          </div>
          <h2 className={styles.heading}>Stay informed</h2>
        </Reveal>
        <Reveal as="div" delay={150} className={styles.rightCol}>
          <p className={styles.desc}>
            Get our latest thinking delivered to your inbox each month
          </p>
          <div className={styles.actions}>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                setEmail('');
              }}
            >
              <input
                className={styles.input}
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className={styles.button} type="submit">
                Subscribe
              </button>
            </form>
            <p className={styles.disclaimer}>
              We respect your inbox. Unsubscribe anytime from any email.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
