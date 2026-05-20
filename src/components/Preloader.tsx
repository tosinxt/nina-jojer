'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './Preloader.module.css';

/* Minimum time the preloader is visible so the brand lands */
const MIN_SHOW_MS = 2000;
/* How far the fake progress runs before waiting for real load */
const FAKE_TARGET = 68;

type Phase = 'loading' | 'exiting' | 'done';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>('loading');
  const startRef = useRef(Date.now());
  const progressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const animateTo = (
    target: number,
    duration: number,
    easing: (t: number) => number = (t) => 1 - Math.pow(1 - t, 3),
    onDone?: () => void,
  ) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const startVal = progressRef.current;
    const startTime = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      progressRef.current = startVal + (target - startVal) * easing(t);
      setProgress(progressRef.current);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        onDone?.();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const triggerExit = () => {
    const elapsed = Date.now() - startRef.current;
    const wait = Math.max(0, MIN_SHOW_MS - elapsed);

    setTimeout(() => {
      /* Snap to 100%, brief hold, then slide out */
      animateTo(100, 260, (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, () => {
        setTimeout(() => setPhase('exiting'), 120);
      });
    }, wait);
  };

  useEffect(() => {
    /* Quickly simulate loading progress to FAKE_TARGET */
    animateTo(FAKE_TARGET, 700, (t) => 1 - Math.pow(1 - t, 2));

    const onLoad = () => triggerExit();

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad, { once: true });
    }

    return () => {
      window.removeEventListener('load', onLoad);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Remove from DOM after exit animation finishes */
  useEffect(() => {
    if (phase !== 'exiting') return;
    const t = setTimeout(() => setPhase('done'), 900);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div
      className={`${styles.overlay} ${phase === 'exiting' ? styles.exiting : ''}`}
      aria-hidden="true"
      role="presentation"
    >
      {/* Brand logo */}
      <div className={styles.content}>
        <div className={styles.wordmark}>
          <Image src="/logo.svg" alt="Nina Jojer" width={280} height={109} priority />
        </div>

        {/* Percentage counter */}
        <p className={styles.counter}>{Math.round(progress)}%</p>
      </div>

      {/* Progress bar at the very bottom */}
      <div className={styles.track} aria-hidden="true">
        <div
          className={styles.fill}
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
    </div>
  );
}
