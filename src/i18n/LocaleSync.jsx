"use client";

import { useEffect } from "react";
import { getLocaleMeta } from "./config";
import { useLocale } from "./useTranslation";

// Keeps <html lang/dir> in step with the selected locale and lifts the
// pre-hydration guard set by the inline script in layout.js.
export default function LocaleSync() {
  const locale = useLocale();

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = getLocaleMeta(locale).dir;
    root.classList.remove("i18n-pending");
  }, [locale]);

  return null;
}
