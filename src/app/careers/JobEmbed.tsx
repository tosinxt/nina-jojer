'use client';

import Script from 'next/script';
import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './careers.module.css';

type Option = { value: string; label: string };

function applyJobListStyles(root: HTMLElement) {
  /* Hide the embed's native filter controls */
  root.querySelectorAll<HTMLElement>('select, button, input[type="submit"], form').forEach((el) => {
    const isSelect = el.tagName === 'SELECT';
    const isBtn = el.tagName === 'BUTTON' || (el instanceof HTMLInputElement && el.type === 'submit');
    if (isSelect || isBtn) {
      el.style.display = 'none';
    }
  });

  /* Also hide any wrapper div that contained only the selects/button */
  const firstDiv = root.querySelector<HTMLElement>(':scope > div');
  if (firstDiv) {
    const hasOnlyControls = !firstDiv.querySelector('table, ul, [class*="job"]');
    if (hasOnlyControls) firstDiv.style.display = 'none';
  }

  /* ── Job table rows ── */
  root.querySelectorAll<HTMLTableElement>('table').forEach((tbl) => {
    tbl.style.cssText = 'width:100%;border-collapse:collapse;border-top:1px solid rgba(0,0,0,0.12);';
    tbl.querySelectorAll('thead').forEach((th) => { th.style.display = 'none'; });
  });

  root.querySelectorAll<HTMLTableRowElement>('tr').forEach((row) => {
    row.style.cssText = 'border-bottom:1px solid rgba(0,0,0,0.12);transition:background 0.15s;';
    row.onmouseenter = () => { row.style.background = '#fafafa'; };
    row.onmouseleave = () => { row.style.background = ''; };
  });

  root.querySelectorAll<HTMLTableCellElement>('td').forEach((td) => {
    td.style.cssText = "padding:28px 0;vertical-align:middle;font-family:'Google Sans Flex',sans-serif;font-size:15px;font-weight:300;line-height:1.5;color:#000;";
    /* Last cell → right-align */
    const row = td.parentElement;
    if (row && td === row.lastElementChild) {
      td.style.textAlign = 'right';
      td.style.paddingLeft = '24px';
      td.style.whiteSpace = 'nowrap';
    }
  });

  /* Job title strong/b tags */
  root.querySelectorAll<HTMLElement>('td strong, td b').forEach((el) => {
    el.style.cssText = "font-family:'Google Sans Flex',sans-serif;font-weight:700;font-size:17px;text-transform:uppercase;letter-spacing:-0.3px;color:#000;display:block;margin-bottom:6px;";
  });

  /* Apply / view links */
  root.querySelectorAll<HTMLAnchorElement>('td a').forEach((a) => {
    a.style.cssText = "font-family:'Google Sans Flex',sans-serif;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#fff;background:#610203;text-decoration:none;padding:10px 20px;display:inline-block;border-radius:0;transition:background 0.15s;";
    a.onmouseenter = () => { a.style.background = '#440102'; };
    a.onmouseleave = () => { a.style.background = '#610203'; };
  });

  /* Headings */
  root.querySelectorAll<HTMLElement>('h3,h4,h5').forEach((h) => {
    h.style.cssText = "font-family:'Google Sans Flex',sans-serif;font-weight:700;font-size:17px;text-transform:uppercase;letter-spacing:-0.3px;color:#000;margin:0 0 6px;";
  });

  /* Empty / info paragraphs */
  root.querySelectorAll<HTMLElement>('p').forEach((p) => {
    p.style.cssText = "font-family:'Google Sans Flex',sans-serif;font-size:14px;font-weight:300;line-height:1.6;color:rgba(0,0,0,0.55);margin:0;border-top:1px solid rgba(0,0,0,0.12);padding:32px 0;";
  });
}

function extractOptions(root: HTMLElement): { countries: Option[]; specializations: Option[] } {
  const selects = root.querySelectorAll<HTMLSelectElement>('select');
  const countries: Option[] = [{ value: 'all', label: 'All Countries' }];
  const specializations: Option[] = [{ value: 'all', label: 'All Roles' }];

  selects.forEach((sel, idx) => {
    const target = idx === 0 ? countries : specializations;
    sel.querySelectorAll('option').forEach((opt) => {
      if (opt.value && opt.value !== 'all' && opt.value !== '') {
        target.push({ value: opt.value, label: opt.textContent?.trim() ?? opt.value });
      }
    });
  });

  return { countries, specializations };
}

export default function JobEmbed() {
  const embedRef = useRef<HTMLDivElement>(null);
  const [countries, setCountries] = useState<Option[]>([{ value: 'all', label: 'All Countries' }]);
  const [specializations, setSpecializations] = useState<Option[]>([{ value: 'all', label: 'All Roles' }]);
  const [activeCountry, setActiveCountry] = useState('all');
  const [activeSpec, setActiveSpec] = useState('all');
  const [ready, setReady] = useState(false);

  const triggerLoad = useCallback((country: string, spec: string) => {
    // @ts-ignore
    if (typeof window !== 'undefined' && typeof window.loadContent === 'function') {
      // @ts-ignore
      window.loadContent(country === 'all' ? undefined : country, spec === 'all' ? undefined : spec);
    }
  }, []);

  useEffect(() => {
    const el = embedRef.current;
    if (!el) return;

    const observer = new MutationObserver(() => {
      /* Extract filter options once we have selects */
      const selects = el.querySelectorAll('select');
      if (selects.length > 0 && !ready) {
        const opts = extractOptions(el);
        if (opts.countries.length > 1) setCountries(opts.countries);
        if (opts.specializations.length > 1) setSpecializations(opts.specializations);
        setReady(true);
      }
      applyJobListStyles(el);
    });

    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [ready]);

  const handleCountry = (val: string) => {
    setActiveCountry(val);
    triggerLoad(val, activeSpec);
  };

  const handleSpec = (val: string) => {
    setActiveSpec(val);
    triggerLoad(activeCountry, val);
  };

  return (
    <div>
      {/* ── Custom filter pills (events-style) ── */}
      <div className={styles.jobFilters}>
        <div className={styles.jobFilterGroup}>
          {countries.map((opt) => (
            <button
              key={opt.value}
              className={`${styles.jobFilterPill} ${activeCountry === opt.value ? styles.jobFilterPillActive : ''}`}
              onClick={() => handleCountry(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {specializations.length > 1 && (
          <div className={styles.jobFilterGroup}>
            {specializations.map((opt) => (
              <button
                key={opt.value}
                className={`${styles.jobFilterPill} ${activeSpec === opt.value ? styles.jobFilterPillActive : ''}`}
                onClick={() => handleSpec(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Hidden embed target */}
      <div ref={embedRef} id="SH_Embed" />

      <Script
        id="sh-embed-script"
        src="https://ninajojer.seamlesshiring.com/js/embed.js"
        strategy="afterInteractive"
        onReady={() => {
          // @ts-ignore
          window.loadContent = (country?: string, specialization?: string) => {
            // @ts-ignore
            if (typeof window !== 'undefined' && window.SH_Embed) {
              const el = document.getElementById('SH_Embed');
              if (el) {
                // @ts-ignore
                el.innerHTML = window.SH_Embed.pull({
                  key: 'eyJpdiI6Im1LZEJReWhzM3NPblluMUdvNlA4TWc9PSIsInZhbHVlIjoiUkR6VnJXWDZBYXd6N2UweXZxaEJDZGlSN1hhR0lBMThaWStzMmZPdEZOamZLWktpS0VaUWlVbHlVVUNrUzJmVUNsQy96b1psTVVENnlSVkdHekJNaXc9PSIsIm1hYyI6ImI5ZTAzNmZmODQ3YmJhYThiNjc5NTk0OGU3Zjc1ZDcxMjIyYjg3OGMwNGQ4YjJkNGRhZTc5M2Y0N2JjMWRiNWMiLCJ0YWciOiIifQ==',
                  base_url: 'https://ninajojer.seamlesshiring.com/',
                  country: country ?? 'all',
                  specialization: specialization ?? 'all',
                });
                const embedEl = document.getElementById('SH_Embed');
                if (embedEl) applyJobListStyles(embedEl);
              }
            }
          };
          // @ts-ignore
          window.loadContent();
        }}
      />
    </div>
  );
}
