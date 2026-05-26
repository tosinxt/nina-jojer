'use client';

import styles from './InsightsFilterPanel.module.css';

export type DateRange = 'all' | 'this-week' | 'this-month' | 'last-3-months';

export interface InsightsFilters {
  author: string;
  publishedAt: DateRange;
  updatedAt: DateRange;
}

export const DEFAULT_FILTERS: InsightsFilters = { author: '', publishedAt: 'all', updatedAt: 'all' };

export const isFiltered = (f: InsightsFilters) =>
  f.author !== '' || f.publishedAt !== 'all' || f.updatedAt !== 'all';

const DATE_OPTS: { value: DateRange; label: string }[] = [
  { value: 'all',           label: 'Any' },
  { value: 'this-week',     label: 'This week' },
  { value: 'this-month',    label: 'This month' },
  { value: 'last-3-months', label: 'Last 3 months' },
];

interface Props {
  open: boolean;
  filters: InsightsFilters;
  authors: string[];
  onChange: (f: InsightsFilters) => void;
  onClear: () => void;
}

export default function InsightsFilterPanel({ open, filters, authors, onChange, onClear }: Props) {
  const set = (patch: Partial<InsightsFilters>) => onChange({ ...filters, ...patch });

  return (
    <div className={`${styles.strip} ${open ? styles.stripOpen : ''}`} aria-hidden={!open}>
      <div className={styles.inner}>

        {/* Author */}
        {authors.length > 0 && (
          <>
            <div className={styles.group}>
              <span className={styles.groupLabel}>Author</span>
              <button
                className={`${styles.chip} ${filters.author === '' ? styles.chipActive : ''}`}
                onClick={() => set({ author: '' })}
                tabIndex={open ? 0 : -1}
              >All</button>
              {authors.map((a) => (
                <button
                  key={a}
                  className={`${styles.chip} ${filters.author === a ? styles.chipActive : ''}`}
                  onClick={() => set({ author: a })}
                  tabIndex={open ? 0 : -1}
                >{a}</button>
              ))}
            </div>
            <div className={styles.sep} />
          </>
        )}

        {/* Published */}
        <div className={styles.group}>
          <span className={styles.groupLabel}>Published</span>
          {DATE_OPTS.map((o) => (
            <button
              key={o.value}
              className={`${styles.chip} ${filters.publishedAt === o.value ? styles.chipActive : ''}`}
              onClick={() => set({ publishedAt: o.value })}
              tabIndex={open ? 0 : -1}
            >{o.label}</button>
          ))}
        </div>

        <div className={styles.sep} />

        {/* Updated */}
        <div className={styles.group}>
          <span className={styles.groupLabel}>Updated</span>
          {DATE_OPTS.map((o) => (
            <button
              key={o.value}
              className={`${styles.chip} ${filters.updatedAt === o.value ? styles.chipActive : ''}`}
              onClick={() => set({ updatedAt: o.value })}
              tabIndex={open ? 0 : -1}
            >{o.label}</button>
          ))}
        </div>

        {isFiltered(filters) && (
          <button className={styles.clear} onClick={onClear} tabIndex={open ? 0 : -1}>
            Clear
          </button>
        )}

      </div>
    </div>
  );
}
