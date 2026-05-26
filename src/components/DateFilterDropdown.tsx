'use client';

import { useEffect, useRef } from 'react';
import styles from './DateFilterDropdown.module.css';

export type DateRange = 'all' | 'this-week' | 'this-month' | 'next-3-months' | 'past';

export const DATE_OPTIONS: { value: DateRange; label: string }[] = [
  { value: 'all',           label: 'All dates' },
  { value: 'this-week',     label: 'This week' },
  { value: 'this-month',    label: 'This month' },
  { value: 'next-3-months', label: 'Next 3 months' },
  { value: 'past',          label: 'Past events' },
];

interface Props {
  open: boolean;
  value: DateRange;
  onChange: (value: DateRange) => void;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement | null>;
}

export default function DateFilterDropdown({ open, value, onChange, onClose, anchorRef }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current && !panelRef.current.contains(target) &&
        anchorRef.current && !anchorRef.current.contains(target)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose, anchorRef]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      ref={panelRef}
      className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
      role="listbox"
      aria-label="Date filter options"
      aria-hidden={!open}
    >
      <div className={styles.panelHeader}>Filter by date</div>
      {DATE_OPTIONS.map((opt, i) => (
        <div key={opt.value}>
          {i === DATE_OPTIONS.length - 1 && <div className={styles.divider} />}
          <button
            role="option"
            aria-selected={value === opt.value}
            className={`${styles.option} ${value === opt.value ? styles.optionActive : ''}`}
            onClick={() => { onChange(opt.value); onClose(); }}
            tabIndex={open ? 0 : -1}
          >
            {opt.label}
            {value === opt.value && <span className={styles.optionCheck} />}
          </button>
        </div>
      ))}
    </div>
  );
}
