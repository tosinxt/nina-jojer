export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  functional: boolean;
};

export type StoredConsent = {
  categories: ConsentCategories;
  timestamp: number;
};

const STORAGE_KEY = 'cookie_consent_v2';
const LEGACY_KEY = 'cookie_consent';
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 180; // 180 days

export const CONSENT_CHANGE_EVENT = 'consent-change';

export function getStoredConsent(): StoredConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (!parsed?.timestamp || Date.now() - parsed.timestamp > MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(categories: ConsentCategories) {
  if (typeof window === 'undefined') return;
  const stored: StoredConsent = { categories, timestamp: Date.now() };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  window.localStorage.removeItem(LEGACY_KEY);
  window.dispatchEvent(new CustomEvent<ConsentCategories>(CONSENT_CHANGE_EVENT, { detail: categories }));
}
