"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { LOCALES, getLocaleMeta } from "@/i18n/config";
import { useTranslation } from "@/i18n/useTranslation";

/**
 * variant="dropdown" - compact trigger + popup menu (header).
 * variant="compact"  - icon-only trigger + popup menu (mobile header bar).
 * variant="list"     - inline buttons (mobile drawer).
 */
export default function LanguageSelector({ variant = "dropdown", onSelect, className = "" }) {
  const { t, locale, setLocale } = useTranslation();
  const current = getLocaleMeta(locale);

  const choose = (code) => {
    setLocale(code);
    onSelect?.(code);
  };

  if (variant === "list") {
    return (
      <div role="group" aria-label={t("nav.chooseLanguage")} className={`flex flex-wrap justify-center gap-2 ${className}`}>
        {LOCALES.map((l) => {
          const active = l.code === locale;
          return (
            <button
              key={l.code}
              type="button"
              lang={l.code}
              aria-pressed={active}
              onClick={() => choose(l.code)}
              className={`font-body min-h-11 rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e3b2c] ${
                active
                  ? "border-[#0e3b2c] bg-[#0e3b2c] text-white"
                  : "border-[#a68a56]/40 text-[#0e3b2c] hover:bg-[#0e3b2c]/5"
              }`}
            >
              {l.nativeName}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <LanguageMenu
      compact={variant === "compact"}
      className={className}
      current={current}
      locale={locale}
      onChoose={choose}
      t={t}
    />
  );
}

function LanguageMenu({ compact, className, current, locale, onChoose, t }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const itemRefs = useRef([]);
  const menuId = useId();

  // Close on outside click / touch.
  useEffect(() => {
    if (!open) return;
    const onPointer = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  // Move focus into the menu when it opens.
  useEffect(() => {
    if (!open) return;
    const idx = Math.max(0, LOCALES.findIndex((l) => l.code === locale));
    itemRefs.current[idx]?.focus();
  }, [open, locale]);

  const close = (returnFocus = true) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  };

  const onTriggerKey = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onMenuKey = (e) => {
    const items = itemRefs.current.filter(Boolean);
    const i = items.indexOf(document.activeElement);
    const focusAt = (n) => items[(n + items.length) % items.length]?.focus();
    switch (e.key) {
      case "ArrowDown": e.preventDefault(); focusAt(i + 1); break;
      case "ArrowUp": e.preventDefault(); focusAt(i - 1); break;
      case "Home": e.preventDefault(); focusAt(0); break;
      case "End": e.preventDefault(); focusAt(items.length - 1); break;
      case "Escape": e.preventDefault(); close(); break;
      case "Tab": setOpen(false); break;
      default:
    }
  };

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={t("nav.currentLanguage", { name: current.nativeName })}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onTriggerKey}
        className={`font-body flex items-center rounded-full text-stone-900 transition-colors hover:text-[#113B2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e3b2c] ${
          compact ? "h-11 w-11 -m-2.5 justify-center" : "gap-1.5 py-1 text-[15px] font-medium whitespace-nowrap"
        }`}
      >
        <Globe className={compact ? "h-[22px] w-[22px]" : "h-4 w-4"} strokeWidth={1.5} aria-hidden="true" />
        {!compact && (
          <>
            <span>{current.short}</span>
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </>
        )}
      </button>

      {open && (
        <ul
          id={menuId}
          role="menu"
          aria-label={t("nav.chooseLanguage")}
          onKeyDown={onMenuKey}
          className="absolute end-0 top-full z-[100] mt-3 min-w-[200px] overflow-hidden rounded-2xl border border-[#a68a56]/30 bg-[#f4f2e9] py-2 shadow-[0_10px_30px_rgba(120,100,60,0.22)]"
        >
          {LOCALES.map((l, i) => {
            const active = l.code === locale;
            return (
              <li key={l.code} role="none">
                <button
                  ref={(el) => (itemRefs.current[i] = el)}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  lang={l.code}
                  onClick={() => {
                    onChoose(l.code);
                    close();
                  }}
                  className={`font-body flex min-h-11 w-full items-center justify-between gap-4 px-4 py-2 text-start text-sm outline-none transition-colors focus-visible:bg-[#0e3b2c]/10 hover:bg-[#0e3b2c]/5 ${
                    active ? "font-semibold text-[#0e3b2c]" : "text-stone-800"
                  }`}
                >
                  <span className="flex flex-col">
                    <span>{l.nativeName}</span>
                    {l.nativeName !== l.name && (
                      <span lang="en" className="text-[11px] font-normal text-[#5a6259]">{l.name}</span>
                    )}
                  </span>
                  {active && <Check className="h-4 w-4 shrink-0 text-[#a68a56]" aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
