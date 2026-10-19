"use client";

import { useCallback, useSyncExternalStore } from "react";
import { DEFAULT_LOCALE, STORAGE_KEY, getLocaleMeta, isSupportedLocale } from "./config";
import { dictionaries } from "./dictionaries";

// ---------------------------------------------------------------------------
// Locale store. The server (and the first client render during hydration)
// always sees the default locale; the saved preference is applied right
// after hydration, so markup never mismatches.
// ---------------------------------------------------------------------------
let currentLocale = null;
const listeners = new Set();

const readStoredLocale = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return isSupportedLocale(saved) ? saved : DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
};

const getSnapshot = () => {
  if (currentLocale === null) currentLocale = readStoredLocale();
  return currentLocale;
};

const getServerSnapshot = () => DEFAULT_LOCALE;

const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const setLocale = (code) => {
  const next = isSupportedLocale(code) ? code : DEFAULT_LOCALE;
  currentLocale = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage unavailable (private mode etc.) - the choice still applies for this visit.
  }
  listeners.forEach((l) => l());
};

// ---------------------------------------------------------------------------
// Lookup: "section.key.sub" -> value. Falls back to English, then to the key
// itself so a missing translation is visible but never crashes the page.
// ---------------------------------------------------------------------------
const lookup = (dict, key) =>
  key.split(".").reduce((node, part) => (node == null ? undefined : node[part]), dict);

const interpolate = (value, vars) =>
  typeof value === "string" && vars
    ? value.replace(/\{(\w+)\}/g, (m, name) => (name in vars ? String(vars[name]) : m))
    : value;

export const translate = (locale, key, vars) => {
  let value = lookup(dictionaries[locale], key);
  if (value === undefined && locale !== DEFAULT_LOCALE) {
    value = lookup(dictionaries[DEFAULT_LOCALE], key);
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[i18n] Missing "${key}" for locale "${locale}", using English.`);
    }
  }
  if (value === undefined) return key;
  return interpolate(value, vars);
};

export function useLocale() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useTranslation() {
  const locale = useLocale();
  const t = useCallback((key, vars) => translate(locale, key, vars), [locale]);
  const meta = getLocaleMeta(locale);
  return { t, locale, dir: meta.dir, isRTL: meta.dir === "rtl", setLocale };
}
