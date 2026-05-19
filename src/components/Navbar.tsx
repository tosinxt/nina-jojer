"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

/* ── Dropdown data ── */
const servicesItems = [
  {
    href: '/services/policy',
    image: '/images/Layout/419/NqA6w 1-4.png',
    title: 'Policy & Advisory Solutions',
    desc: 'Shaping African policy and regulations.',
  },
  {
    href: '/services/corporate',
    image: '/images/Layout/419/NqA6w 2-1.png',
    title: 'Corporate Solutions',
    desc: 'Market entry and strategy advisory in Africa.',
  },
  {
    href: '/services/technology',
    image: '/images/Layout/419/NqA6w 1-6.png',
    title: 'Technology Solutions',
    desc: 'Biometric, cybersecurity and digital infrastructure.',
  },
  {
    href: '/services/communications',
    image: '/images/Layout/419/NqA6w 2.png',
    title: 'Strategic Communications',
    desc: 'Government affairs and institutional messaging.',
  },
];

const aboutItems = [
  { href: '/about',          label: 'Who We Are',    desc: 'Our story, mission and values' },
  { href: '/about#team',     label: 'Our Team',      desc: 'The people behind the work' },
  { href: '/about#values',   label: 'Our Values',    desc: 'What we stand for' },
  { href: '/careers',        label: 'Careers',       desc: 'Join Nina Jojer Africa' },
];

const navLinks = [
  { label: 'About',                   href: '/about',        key: 'about',    hasDropdown: true  },
  { label: 'Services',                href: '/services',     key: 'services', hasDropdown: true  },
  { label: 'Case Studies',            href: '/case-studies', key: 'cases'                       },
  { label: 'Insights & Perspectives', href: '/insights',     key: 'insights'                    },
  { label: 'Events',                  href: '/events',       key: 'events'                      },
  { label: 'Careers',                 href: '/careers',      key: 'careers'                     },
  { label: 'Contact',                 href: '/contact',      key: 'contact'                     },
];

/* ── Icons ── */
const Chevron = ({ open }: { open: boolean }) => (
  <svg
    width="10" height="6" viewBox="0 0 10 6" fill="none"
    aria-hidden="true"
    className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
  >
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Component ── */
const Navbar = () => {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileMenuOpen, setMobileMenu]   = useState(false);
  const [openKey, setOpenKey]               = useState<string | null>(null);
  const closeTimer                          = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname                            = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close dropdown on route change */
  useEffect(() => { setOpenKey(null); }, [pathname]);

  const open  = (key: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenKey(key); };
  const close = ()            => { closeTimer.current = setTimeout(() => setOpenKey(null), 120); };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Nina jojer log 2.png" alt="Nina Jojer" className={styles.logoImg} />
        </Link>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          {navLinks.map(({ label, href, key, hasDropdown }) => {
            const isActive  = pathname === href || pathname.startsWith(href + '/');
            const isOpen    = openKey === key;

            return (
              <li
                key={key}
                className={styles.navItem}
                onMouseEnter={() => hasDropdown ? open(key) : undefined}
                onMouseLeave={() => hasDropdown ? close()   : undefined}
              >
                <Link
                  href={href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''} ${isOpen ? styles.navLinkOpen : ''}`}
                >
                  {label}
                  {hasDropdown && <Chevron open={isOpen} />}
                </Link>

                {/* ── Services mega-panel ── */}
                {key === 'services' && (
                  <div
                    className={`${styles.dropdown} ${styles.dropdownServices} ${isOpen ? styles.dropdownOpen : ''}`}
                    onMouseEnter={() => open(key)}
                    onMouseLeave={close}
                  >
                    <div className={styles.serviceGrid}>
                      {servicesItems.map((item) => (
                        <Link key={item.href} href={item.href} className={styles.serviceCard}>
                          <div className={styles.serviceImgWrap}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.image} alt={item.title} className={styles.serviceImg} />
                          </div>
                          <div className={styles.serviceCardBody}>
                            <p className={styles.serviceCardTitle}>{item.title}</p>
                            <p className={styles.serviceCardDesc}>{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className={styles.dropdownFooter}>
                      <Link href="/services" className={styles.dropdownFooterLink}>
                        View all services <ArrowRight />
                      </Link>
                    </div>
                  </div>
                )}

                {/* ── About panel ── */}
                {key === 'about' && (
                  <div
                    className={`${styles.dropdown} ${styles.dropdownAbout} ${isOpen ? styles.dropdownOpen : ''}`}
                    onMouseEnter={() => open(key)}
                    onMouseLeave={close}
                  >
                    <ul className={styles.aboutList}>
                      {aboutItems.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className={styles.aboutItem}>
                            <span className={styles.aboutItemLabel}>{item.label}</span>
                            <span className={styles.aboutItemDesc}>{item.desc}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenu(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barTop    : ''}`} />
          <span className={`${styles.bar} ${styles.barMid} ${isMobileMenuOpen ? styles.barMidHide : ''}`} />
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barBot    : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={styles.mobileLink}
              onClick={() => setMobileMenu(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
