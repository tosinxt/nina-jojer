"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const DropdownIcon = () => (
  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.chevron}>
    <path d="M0.730469 0.730469L5.48542 5.11298L10.2404 0.730469" stroke="currentColor" strokeWidth="1.46084" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.menuOpenHeader : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image 
              src="/images/Nina jojer log 2.png" 
              alt="Nina Jojer Logo" 
              width={180} 
              height={50} 
              priority
              className={styles.logo}
            />
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                About <DropdownIcon />
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services" className={styles.navLink}>
                Services <DropdownIcon />
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/case-studies" className={styles.navLink}>Case Studies</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/insights" className={styles.navLink}>Insights & Perspectives</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/events" className={styles.navLink}>Events</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/careers" className={styles.navLink}>Career</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle Button - Matches Figma node 883:11552 line lengths */}
        <button 
          className={`${styles.mobileToggle} ${isMenuOpen ? styles.activeToggle : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={styles.hamburgerContainer}>
            <span className={`${styles.bar} ${styles.barTop}`} />
            <span className={`${styles.bar} ${styles.barMiddle}`} />
            <span className={`${styles.bar} ${styles.barBottom}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.drawerOpen : ''}`}>
        <ul className={styles.mobileNavList}>
          <li className={styles.mobileNavItem}>
            <Link href="/about" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="/services" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="/case-studies" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
              Case Studies
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="/insights" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
              Insights & Perspectives
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="/events" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
              Events
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="/careers" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
              Career
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link href="/contact" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

