import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`${styles.content} container`}>
        <div className={styles.textContainer}>
          <h4 className={styles.subtitle}>Strategic Consulting for Africa</h4>
          <h1 className={styles.title}>
            Navigating Policy, <br />
            <span>Powering Business.</span>
          </h1>
          <p className={styles.description}>
            Nina Jojer provides expert guidance in public policy, business strategy, and technological solutions, bridging the gap between governance and enterprise.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Our Expertise</button>
            <button className={styles.secondaryBtn}>Explore Insights</button>
          </div>
        </div>
      </div>
      <div className={styles.visual}>
        {/* Placeholder for the premium visual - will use a CSS pattern or the generated image if I can host it */}
        <div className={styles.pattern}></div>
      </div>
    </section>
  );
};

export default Hero;
