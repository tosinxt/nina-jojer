import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          fill
          priority
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default HeroSection;
