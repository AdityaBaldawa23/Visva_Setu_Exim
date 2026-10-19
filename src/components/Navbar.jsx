"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";
import LanguageSelector from "./LanguageSelector";

const NavLink = ({ href, children, active = false }) => (
  <Link
    href={href}
    className="group relative font-body font-medium text-[15px] text-stone-900 whitespace-nowrap transition-colors duration-200"
  >
    {children}
    <span
      className={`absolute -bottom-1 left-1/2 h-[2px] bg-[#113B2E] transition-all duration-300 ease-out -translate-x-1/2 ${active ? "w-4/5" : "w-0 group-hover:w-4/5"
        }`}
    />
  </Link>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like cubic bezier
      className={`absolute top-0 z-[99] w-full transition-all duration-2000 font-sans ${isScrolled
          ? "bg-[#f4f2e9] shadow-md border-b border-[#e5e3da] py-2"
          : "bg-transparent border-b border-transparent py-3 xl:py-8"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ==================== DESKTOP LAYOUT ==================== */}
        <div className="hidden xl:flex justify-between items-center h-16">
          {/* Start Nav */}
          <nav aria-label={t("nav.mainNav")} className="flex items-center gap-7 2xl:gap-10 flex-1 justify-end pe-10 2xl:pe-12">
            <NavLink href="/" active={pathname === "/"}>{t("nav.home")}</NavLink>
            <NavLink href="/about">{t("nav.about")}</NavLink>
            <NavLink href="/products" active={pathname === "/products"}>{t("nav.products")}</NavLink>
          </nav>

          {/* Center Logo */}
          <div className={`flex justify-center flex-shrink-0 transition-all duration-500 origin-center ${isScrolled ? "scale-90" : "scale-110"
            }`}>
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity duration-300 flex items-center justify-center"
              aria-label={t("nav.homeAria")}
            >
              <Image
                src="/Central_Text_Logo.png"
                alt={t("common.logoAlt")}
                width={300}
                height={80}
                className="block object-contain"
              />
            </Link>
          </div>

          {/* End Nav */}
          <div className="flex items-center gap-7 2xl:gap-10 flex-1 justify-start ps-10 2xl:ps-12">
            <nav aria-label={t("nav.mainNav")} className="flex items-center gap-7 2xl:gap-10">
              <NavLink href="/#presence">{t("nav.presence")}</NavLink>
              <NavLink href="/#process">{t("nav.process")}</NavLink>
              <NavLink href="/#contact">{t("nav.contact")}</NavLink>
            </nav>
            <LanguageSelector />
          </div>
        </div>

        {/* ==================== MOBILE / TABLET LAYOUT ==================== */}
        <div className="xl:hidden flex items-center justify-between h-14">
          {/* Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="flex flex-col justify-center gap-[5px] text-stone-900 z-50 relative w-11 h-11 -m-2.5 p-2.5"
          >
            <span
              className={`block w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
            />
            <span
              className={`block w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
            />
          </button>

          {/* Logo Mobile */}
          <Link
            href="/"
            className={`hover:opacity-80 transition-all duration-500 flex items-center justify-center origin-center ${isScrolled ? "scale-90" : "scale-105"
              }`}
            aria-label={t("nav.homeAria")}
          >
            <Image
              src="/Central_Text_Logo.png"
              alt={t("common.logoAlt")}
              width={220}
              height={40}
              className="block object-contain"
            />
          </Link>

          {/* Language (occupies the former centering spacer) */}
          <LanguageSelector variant="compact" className="w-6 flex justify-center" />
        </div>

        {/* ==================== MOBILE MENU DRAWER ==================== */}
        <div
          id="mobile-menu"
          inert={!isMobileMenuOpen}
          className={`xl:hidden fixed inset-0 bg-[#f4f2e9] z-40 overflow-y-auto transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full rtl:translate-x-full"
            }`}
        >
          <div className="flex flex-col items-center justify-center min-h-full gap-10 px-6 py-24">
            <nav aria-label={t("nav.mainNav")} className="flex flex-col items-center gap-8 text-xl font-playfair text-[#113B2E]">
              {[
                { href: "/", label: t("nav.home") },
                { href: "/#about", label: t("nav.about") },
                { href: "/products", label: t("nav.products") },
                { href: "/#process", label: t("nav.ourProcess") },
                { href: "/#presence", label: t("nav.presence") },
                { href: "/#contact", label: t("nav.contact") },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#8d7c5d] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <LanguageSelector variant="list" className="max-w-sm" />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
