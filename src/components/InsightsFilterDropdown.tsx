'use client';

import { useEffect, useRef } from 'react';
import styles from './InsightsFilterDropdown.module.css';

export type DateRange = 'all' | 'this-week' | 'this-month' | 'last-3-months';

export const DATE_OPTIONS: { value: DateRange; label: string }[] = [
  { value: 'all',            label: 'All dates' },
  { value: 'this-week',      label: 'This week' },
  { value: 'this-month',     label: 'This month' },
  { value: 'last-3-months',  label: 'Last 3 months' },
];

export interface InsightsFilters {
  author: string;        // '' = all
  publishedAt: DateRange;
  updatedAt: DateRange;
}

export const DEFAULT_FILTERS: InsightsFilters = {
  author: '',
  publishedAt: 'all',
  updatedAt: 'all',
};

export function isFiltered(f: InsightsFilters) {
  return f.author !== '' || f.publishedAt !== 'all' || f.updatedAt !== 'all';
}

interface Props {
  open: boolean;
  filters: InsightsFilters;
  authors: string[];
  onChange: (filters: InsightsFilters) => void;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLElement | null>;
}

export default function InsightsFilterDropdown({ open, filters, authors, onChange, onClose, anchorRef }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current && !panelRef.current.contains(target) &&
        anchorRef.current && !anchorRef.current.contains(target)
      ) onClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose, anchorRef]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  const set = (patch: Partial<InsightsFilters>) => onChange({ ...filters, ...patch });
  const hasActive = isFiltered(filters);

  return (
    <div
      ref={panelRef}
      className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
      role="dialog"
      aria-label="Filter insights"
      aria-hidden={!open}
    >
      {/* Author */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>Author</div>
        <Option label="All authors" active={filters.author === ''} onClick={() => set({ author: '' })} open={open} />
        {authors.map((a) => (
          <Option key={a} label={a} active={filters.author === a} onClick={() => set({ author: a })} open={open} />
        ))}
      </div>

      {/* Date published */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>Date published</div>
        {DATE_OPTIONS.map((opt) => (
          <Option
            key={opt.value}
            label={opt.label}
            active={filters.publishedAt === opt.value}
            onClick={() => set({ publishedAt: opt.value })}
            open={open}
          />
        ))}
      </div>

      {/* Date updated */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>Date updated</div>
        {DATE_OPTIONS.map((opt) => (
          <Option
            key={opt.value}
            label={opt.label}
            active={filters.updatedAt === opt.value}
            onClick={() => set({ updatedAt: opt.value })}
            open={open}
          />
        ))}
      </div>

      {hasActive && (
        <div className={styles.clearRow}>
          <button className={styles.clearBtn} onClick={() => onChange(DEFAULT_FILTERS)}>
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}

function Option({ label, active, onClick, open }: { label: string; active: boolean; onClick: () => void; open: boolean }) {
  return (
    <button
      className={`${styles.option} ${active ? styles.optionActive : ''}`}
      onClick={onClick}
      tabIndex={open ? 0 : -1}
      aria-pressed={active}
    >
      <span className={styles.optionLabel}>{label}</span>
      {active && <span className={styles.optionCheck} />}
    </button>
  );
}
