"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
// import {Linkedin, Twitter, Youtube } from "lucide-react";
import { DM_Serif_Display, Montserrat } from "next/font/google";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ------------------------------------------------------------------ */
/*  Edit your details here                                             */
/* ------------------------------------------------------------------ */
const COMPANY = "Vishva Setu Exim";
const ADDRESS = ["[Business address line 1]", "[Business address line 2]", "[City, State - PIN]"];
const EMAIL = "info@vishvasetuexim.com";
const PHONE = "+91 00000 00000";
const MAP_QUERY = "Pune, Maharashtra, India"; // replace with your exact address

const SOCIALS = [

];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const PRODUCT_LINKS = [
  { label: "Green Banana", href: "/products" },
  { label: "Green Chilli", href: "/products" },
  { label: "Pomegranate", href: "/products" },
  { label: "Turmeric", href: "/products" },
  { label: "White Onion", href: "/products" },
];

const TICKER_ITEMS = [
  "Bridging Farms",
  "Global Markets",
  "Trust & Consistency",
  "Rooted in India",
];

const Ticker = () => {
  const reduceMotion = useReducedMotion();
  // Two identical halves; moving by -50% gives a seamless loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  const Row = ({ hidden = false }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((text, i) => (
        <React.Fragment key={`${text}-${i}`}>
          <span
            className={`${dmSerif.className} whitespace-nowrap text-xl sm:text-6xl md:text-7xl lg:text-3xl text-white px-6 sm:px-10`}
          >
            {text}
          </span>
          <span className="h-1 w-2 rotate-45 bg-[#a68a56] shrink-0" />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden py-10 md:py-14" role="presentation">
      <motion.div
        className="flex w-max"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        <Row />
        <Row hidden />
      </motion.div>
    </div>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  const headingClass = `${dmSerif.className} text-2xl sm:text-[28px] uppercase tracking-wide text-white mb-6`;
  const linkClass =
    "text-white/80 hover:text-[#a68a56] transition-colors duration-300";

  return (
    <footer
      className={`${montserrat.className} w-full bg-black text-white z-10`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-14 md:pt-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.2fr] gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" aria-label={`${COMPANY} home`} className="inline-block">
              <span className={`${dmSerif.className} block text-4xl sm:text-5xl leading-tight`}>
                {COMPANY}
              </span>
              <span className="mt-2 flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[#a68a56]">
                <span className="h-px w-8 bg-[#a68a56]" />
                Premium Agricultural Exports
              </span>
            </Link>

            <div className="flex items-center gap-3 mt-8">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-[#a68a56] hover:text-white transition-colors duration-300"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                </a>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-sm sm:text-base font-medium hover:bg-white hover:text-black transition-colors duration-300"
            >
              Request a Quotation
            </Link>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="space-y-4 text-base">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get in touch */}
          <div>
            <h3 className={headingClass}>Get In Touch</h3>
            <address className="not-italic text-base leading-relaxed space-y-5">
              <p className="text-white/80">
                {ADDRESS.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p>
                <a href={`mailto:${EMAIL}`} className={linkClass}>
                  {EMAIL}
                </a>
              </p>
              <p>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className={linkClass}>
                  {PHONE}
                </a>
              </p>
            </address>
          </div>

          {/* Map */}
          <div>
            <h3 className={headingClass}>Contact Us</h3>
            <div className="overflow-hidden rounded-2xl h-[200px] sm:h-[220px] w-full">
              <iframe
                title={`${COMPANY} location`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Products row */}
        <div className="mt-14 md:mt-16">
          <h3 className={headingClass}>Our Products</h3>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-base sm:text-lg">
            {PRODUCT_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ticker */}
      <div className="mt-10 md:mt-14">
        <Ticker />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm sm:text-base">
          <p className="text-white/80 text-center md:text-left">
            Copyright © {year} {COMPANY}, All Rights Reserved.
          </p>
          <ul className="flex items-center divide-x divide-white/40">
            <li className="pr-4">
              <Link href="/sitemap" className={linkClass}>
                Sitemap
              </Link>
            </li>
            <li className="px-4">
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
            </li>
            <li className="pl-4">
              <Link href="/terms" className={linkClass}>
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;