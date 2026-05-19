"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About',                  href: '/about',    hasDropdown: true  },
  { label: 'Services',               href: '/services', hasDropdown: true  },
  { label: 'Case Studies',           href: '/case-studies'                  },
  { label: 'Insights & Perspectives',href: '/insights'                      },
  { label: 'Events',                 href: '/events'                        },
  { label: 'Careers',                href: '/careers'                       },
  { label: 'Contact',                href: '/contact'                       },
];

const Chevron = () => (
  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" aria-hidden="true">
    <path d="M0 0L5 5L10 0" stroke="black" strokeWidth="1.2" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Nina jojer log 2.png"
            alt="Nina Jojer"
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          {navLinks.map(({ label, href, hasDropdown }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/');
            return (
              <li key={href} className={styles.navItem}>
                <Link
                  href={href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  {isActive && <span className={styles.activeDot} aria-hidden="true" />}
                  {label}
                  {hasDropdown && <Chevron />}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${styles.barMid} ${isMobileMenuOpen ? styles.barMidHide : ''}`} />
          <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barBot : ''}`} />
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
              onClick={() => setIsMobileMenuOpen(false)}
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
