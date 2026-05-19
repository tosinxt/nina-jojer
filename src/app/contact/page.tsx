'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import styles from './contact.module.css';

const offices = [
  { city: 'Lagos', address: '160, Awolowo Road, Ikoyi, Lagos, Nigeria' },
  { city: 'Abuja', address: '21 Lobito Crescent, Wuse 2, Abuja, Nigeria' },
  { city: 'South Africa', address: 'Maine, 1 Amarand Ave, Menlyn, Pretoria, 0181, South Africa' },
  { city: 'Sierra Leone Office', address: '12A Main Motor Road, Congo Cross, Freetown, Sierra Leone' },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HERO HEADER ── */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>GET IN TOUCH</h1>
            <p className={styles.heroBody}>
              We are ready to discuss your objectives in confidence. Reach out to our team for
              strategic advisory, technology solutions, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          {/* Left: info */}
          <div className={styles.infoCol}>
            <div className={styles.sectionTitle}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                <span className={styles.eyebrowText}>GET IN TOUCH</span>
              </div>
              <div className={styles.titleBlock}>
                <h2 className={styles.heading}>Send us a message</h2>
                <p className={styles.subheading}>Tell us about your needs.</p>
              </div>
            </div>

            <div className={styles.contactDetails}>
              <a href="mailto:business@ninajojer.com" className={styles.contactRow}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/contact/icon-mail.svg" alt="" className={styles.contactIcon} />
                <span>business@ninajojer.com</span>
              </a>
              <a href="tel:+2347020013234" className={styles.contactRow}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/contact/icon-call.svg" alt="" className={styles.contactIcon} />
                <span>+234 (0)70 2001 3234</span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>First name</label>
                <input
                  className={`${styles.input} ${styles.inputEmpty}`}
                  type="text"
                  name="firstName"
                  placeholder="Enter first name here"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Last name</label>
                <input
                  className={`${styles.input} ${styles.inputActive}`}
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email</label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Phone Number</label>
                <div className={`${styles.input} ${styles.phoneInput}`}>
                  <div className={styles.phonePrefix}>
                    <span className={styles.phonePrefixCode}>+234</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/contact/flag-ng.png" alt="Nigeria" className={styles.flagImg} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/contact/chevron-down.svg" alt="" className={styles.chevronImg} />
                  </div>
                  <input
                    className={styles.phoneInner}
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number here"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={`${styles.label} ${styles.labelLg}`}>Message</label>
              <textarea
                className={styles.textarea}
                name="message"
                placeholder="Tell us more about your inquiry"
                rows={6}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>Submit</button>
          </form>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className={styles.officesSection}>
        <div className={styles.officesContainer}>
          <div className={styles.officesHeader}>
            <h2 className={styles.heading}>Offices</h2>
            <p className={styles.subheading}>We work across the continent from our main hub.</p>
          </div>
          <div className={styles.officesGrid}>
            {offices.map((o) => (
              <div key={o.city} className={styles.officeCard}>
                <p className={styles.officeCity}>{o.city}</p>
                <p className={styles.officeAddress}>{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
