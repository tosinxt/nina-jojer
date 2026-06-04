'use client';

import { useState, useRef, useEffect } from 'react';
import BlurText from '@/components/BlurText';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import styles from './contact.module.css';

const offices = [
  { city: 'Lagos', address: '11A Chris Efuyemi Onanuga Street, Lekki Phase One, Lagos, Nigeria' },
  { city: 'Abuja', address: '21 Lobito Crescent, Wuse 2, Abuja, Nigeria' },
  { city: 'South Africa', address: 'Maine, 1 Amarand Ave, Menlyn, Pretoria, 0181, South Africa' },
  { city: 'Sierra Leone Office', address: '12A Main Motor Road, Congo Cross, Freetown, Sierra Leone' },
];

const countries = [
  { name: 'Nigeria',        code: '+234', flag: '🇳🇬' },
  { name: 'South Africa',   code: '+27',  flag: '🇿🇦' },
  { name: 'Ghana',          code: '+233', flag: '🇬🇭' },
  { name: 'Kenya',          code: '+254', flag: '🇰🇪' },
  { name: 'Sierra Leone',   code: '+232', flag: '🇸🇱' },
  { name: 'Ethiopia',       code: '+251', flag: '🇪🇹' },
  { name: 'Tanzania',       code: '+255', flag: '🇹🇿' },
  { name: 'Uganda',         code: '+256', flag: '🇺🇬' },
  { name: 'Cameroon',       code: '+237', flag: '🇨🇲' },
  { name: 'Senegal',        code: '+221', flag: '🇸🇳' },
  { name: 'Côte d\'Ivoire', code: '+225', flag: '🇨🇮' },
  { name: 'Rwanda',         code: '+250', flag: '🇷🇼' },
  { name: 'Zambia',         code: '+260', flag: '🇿🇲' },
  { name: 'Zimbabwe',       code: '+263', flag: '🇿🇼' },
  { name: 'Angola',         code: '+244', flag: '🇦🇴' },
  { name: 'Mozambique',     code: '+258', flag: '🇲🇿' },
  { name: 'Egypt',          code: '+20',  flag: '🇪🇬' },
  { name: 'Morocco',        code: '+212', flag: '🇲🇦' },
  { name: 'Tunisia',        code: '+216', flag: '🇹🇳' },
  { name: 'Algeria',        code: '+213', flag: '🇩🇿' },
  { name: 'United Kingdom', code: '+44',  flag: '🇬🇧' },
  { name: 'United States',  code: '+1',   flag: '🇺🇸' },
  { name: 'France',         code: '+33',  flag: '🇫🇷' },
  { name: 'Germany',        code: '+49',  flag: '🇩🇪' },
  { name: 'China',          code: '+86',  flag: '🇨🇳' },
  { name: 'India',          code: '+91',  flag: '🇮🇳' },
  { name: 'UAE',            code: '+971', flag: '🇦🇪' },
  { name: 'Brazil',         code: '+55',  flag: '🇧🇷' },
  { name: 'Canada',         code: '+1',   flag: '🇨🇦' },
  { name: 'Australia',      code: '+61',  flag: '🇦🇺' },
  { name: 'Netherlands',    code: '+31',  flag: '🇳🇱' },
  { name: 'Sweden',         code: '+46',  flag: '🇸🇪' },
  { name: 'Norway',         code: '+47',  flag: '🇳🇴' },
  { name: 'Switzerland',    code: '+41',  flag: '🇨🇭' },
  { name: 'Belgium',        code: '+32',  flag: '🇧🇪' },
  { name: 'Spain',          code: '+34',  flag: '🇪🇸' },
  { name: 'Italy',          code: '+39',  flag: '🇮🇹' },
  { name: 'Portugal',       code: '+351', flag: '🇵🇹' },
  { name: 'Japan',          code: '+81',  flag: '🇯🇵' },
  { name: 'South Korea',    code: '+82',  flag: '🇰🇷' },
  { name: 'Singapore',      code: '+65',  flag: '🇸🇬' },
  { name: 'Malaysia',       code: '+60',  flag: '🇲🇾' },
  { name: 'Indonesia',      code: '+62',  flag: '🇮🇩' },
  { name: 'Pakistan',       code: '+92',  flag: '🇵🇰' },
  { name: 'Bangladesh',     code: '+880', flag: '🇧🇩' },
  { name: 'Saudi Arabia',   code: '+966', flag: '🇸🇦' },
  { name: 'Qatar',          code: '+974', flag: '🇶🇦' },
  { name: 'Turkey',         code: '+90',  flag: '🇹🇷' },
  { name: 'Mexico',         code: '+52',  flag: '🇲🇽' },
  { name: 'Argentina',      code: '+54',  flag: '🇦🇷' },
  { name: 'Colombia',       code: '+57',  flag: '🇨🇴' },
  { name: 'Botswana',       code: '+267', flag: '🇧🇼' },
  { name: 'Namibia',        code: '+264', flag: '🇳🇦' },
  { name: 'Malawi',         code: '+265', flag: '🇲🇼' },
  { name: 'Madagascar',     code: '+261', flag: '🇲🇬' },
  { name: 'Sudan',          code: '+249', flag: '🇸🇩' },
  { name: 'Libya',          code: '+218', flag: '🇱🇾' },
  { name: 'Mauritius',      code: '+230', flag: '🇲🇺' },
  { name: 'Gabon',          code: '+241', flag: '🇬🇦' },
  { name: 'Congo',          code: '+242', flag: '🇨🇬' },
  { name: 'DR Congo',       code: '+243', flag: '🇨🇩' },
  { name: 'Liberia',        code: '+231', flag: '🇱🇷' },
  { name: 'Guinea',         code: '+224', flag: '🇬🇳' },
  { name: 'Togo',           code: '+228', flag: '🇹🇬' },
  { name: 'Benin',          code: '+229', flag: '🇧🇯' },
  { name: 'Niger',          code: '+227', flag: '🇳🇪' },
  { name: 'Mali',           code: '+223', flag: '🇲🇱' },
  { name: 'Burkina Faso',   code: '+226', flag: '🇧🇫' },
  { name: 'Gambia',         code: '+220', flag: '🇬🇲' },
  { name: 'Mauritania',     code: '+222', flag: '🇲🇷' },
  { name: 'Somalia',        code: '+252', flag: '🇸🇴' },
  { name: 'Djibouti',       code: '+253', flag: '🇩🇯' },
  { name: 'Eritrea',        code: '+291', flag: '🇪🇷' },
  { name: 'Lesotho',        code: '+266', flag: '🇱🇸' },
  { name: 'Eswatini',       code: '+268', flag: '🇸🇿' },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
        setSearch('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  function isActive(field: string) {
    return focused === field || form[field as keyof typeof form] !== '';
  }

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.includes(search)
  );

  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── HERO HEADER ── */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <BlurText as="h1" text="GET IN TOUCH" direction="bottom" delay={130} animateBy="letters" className={styles.heroTitle} />
            <BlurText text="We are ready to discuss your objectives in confidence. Reach out to our team for strategic advisory, technology solutions, or partnership opportunities." direction="bottom" delay={80} stepDuration={0.4} className={styles.heroBody} />
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
                <BlurText as="h2" text="Send us a message" direction="bottom" delay={110} className={styles.heading} />
                <BlurText text="Tell us about your needs." direction="bottom" delay={100} stepDuration={0.4} className={styles.subheading} />
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
                  className={`${styles.input} ${isActive('firstName') ? styles.inputActive : ''}`}
                  type="text"
                  name="firstName"
                  placeholder="Enter first name here"
                  value={form.firstName}
                  onChange={handleChange}
                  onFocus={() => setFocused('firstName')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Last name</label>
                <input
                  className={`${styles.input} ${isActive('lastName') ? styles.inputActive : ''}`}
                  type="text"
                  name="lastName"
                  placeholder="Enter last name here"
                  value={form.lastName}
                  onChange={handleChange}
                  onFocus={() => setFocused('lastName')}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email</label>
                <input
                  className={`${styles.input} ${isActive('email') ? styles.inputActive : ''}`}
                  type="email"
                  name="email"
                  placeholder="Enter email address here"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Phone Number</label>
                <div className={`${styles.input} ${styles.phoneInput} ${(focused === 'phone' || form.phone !== '') ? styles.inputActive : ''}`}>
                  {/* Country code dropdown */}
                  <div className={styles.phonePrefix} ref={dropdownRef}>
                    <button
                      type="button"
                      className={styles.phonePrefixBtn}
                      onClick={() => { setDropdownOpen(o => !o); setSearch(''); }}
                      aria-expanded={dropdownOpen}
                    >
                      <span className={styles.flagEmoji}>{selectedCountry.flag}</span>
                      <span className={styles.phonePrefixCode}>{selectedCountry.code}</span>
                      <svg className={`${styles.chevron} ${dropdownOpen ? styles.chevronUp : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1L5 5L9 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <div className={styles.dropdown}>
                        <div className={styles.dropdownSearch}>
                          <input
                            className={styles.dropdownSearchInput}
                            type="text"
                            placeholder="Search country..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            autoFocus
                          />
                        </div>
                        <ul className={styles.dropdownList}>
                          {filteredCountries.map(c => (
                            <li key={c.code + c.name}>
                              <button
                                type="button"
                                className={`${styles.dropdownItem} ${selectedCountry.name === c.name ? styles.dropdownItemActive : ''}`}
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setDropdownOpen(false);
                                  setSearch('');
                                }}
                              >
                                <span className={styles.flagEmoji}>{c.flag}</span>
                                <span className={styles.dropdownItemName}>{c.name}</span>
                                <span className={styles.dropdownItemCode}>{c.code}</span>
                              </button>
                            </li>
                          ))}
                          {filteredCountries.length === 0 && (
                            <li className={styles.dropdownEmpty}>No results</li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  <input
                    className={styles.phoneInner}
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number here"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={`${styles.label} ${styles.labelLg}`}>Message</label>
              <textarea
                className={`${styles.textarea} ${isActive('message') ? styles.textareaActive : ''}`}
                name="message"
                placeholder="Tell us more about your inquiry"
                rows={6}
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
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
            <BlurText as="h2" text="Offices" direction="bottom" delay={110} className={styles.heading} />
            <BlurText text="We work across the continent from our main hub." direction="bottom" delay={100} stepDuration={0.4} className={styles.subheading} />
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
