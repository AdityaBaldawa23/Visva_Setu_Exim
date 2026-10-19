// Supported locales. To add a language: add an entry here and a matching
// dictionary in ./locales, then register it in ./dictionaries.js.
export const LOCALES = [
  { code: "en", name: "English", nativeName: "English", short: "EN", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", short: "AR", dir: "rtl" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", short: "BN", dir: "ltr" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", short: "VI", dir: "ltr" },
  { code: "si", name: "Sinhala", nativeName: "සිංහල", short: "SI", dir: "ltr" },
];

export const DEFAULT_LOCALE = "en";
export const STORAGE_KEY = "vse-locale";

export const isSupportedLocale = (code) => LOCALES.some((l) => l.code === code);

export const getLocaleMeta = (code) =>
  LOCALES.find((l) => l.code === code) ?? LOCALES.find((l) => l.code === DEFAULT_LOCALE);
