"use client";

import React from "react";
import Image from "next/image";
import { WorldMap } from "./world-map";
import { motion } from "framer-motion";
import { MapPin, Plane } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

import { Montserrat, DM_Serif_Display } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const destinations = [
  {
    key: "canada",
    flag: "🇨🇦",
  },
  {
    key: "usa",
    flag: "🇺🇸",
  },
  {
    key: "uae",
    flag: "🇦🇪",
  },
  {
    key: "singapore",
    flag: "🇸🇬",
  },
  {
    key: "bangladesh",
    flag: "🇧🇩",
  },
  {
    key: "sriLanka",
    flag: "🇱🇰",
  },
  {
    key: "vietnam",
    flag: "🇻🇳",
  },
  {
    key: "europe",
    flag: "🇪🇺",
  },
  {
    key: "russia",
    flag: "🇷🇺",
  },
];
const GlobalPresence = () => {
  const { t } = useTranslation();

  return (
    <section
      id="presence"
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-start overflow-hidden py-16 sm:py-20 md:py-24"
    >
      {/* Background Images with Mobile Design Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background Image (hidden on mobile) */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/world presence.png"
            alt={t("presence.bgAlt")}
            fill
            className="object-cover object-center"
            quality={95}
          />
        </div>

        {/* Mobile Background Image Placeholder (Replace /global-presence-mobile-bg.png with your mobile design) */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/global-presence-mobile-bg.png"
            alt={t("presence.bgMobileAlt")}
            fill
            className="object-cover object-center"
            quality={95}
          />
        </div>

        {/* Top and Bottom blend gradients for seamless canvas effect */}
        <div className="absolute top-0 left-0 right-0 h-28 sm:h-48 bg-gradient-to-b from-[#f4f2e9] via-[#f4f2e9]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-48 bg-gradient-to-t from-[#f4f2e9] via-[#f4f2e9]/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center h-full">
        {/* Header Content */}
        <motion.div
          className="text-center flex flex-col items-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d]"></div>
            <span
              className={`${dmSerif.className} text-[10px] sm:text-[11px] font-normal tracking-[0.2em] text-[#5a6259] uppercase`}
            >
              {t("presence.eyebrow")}
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d]"></div>
          </div>

          {/* Main Title */}
          <h2
            className={`${dmSerif.className} text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.12] font-normal tracking-tight`}
          >
            <span className="text-[#0e3b2c] block mb-1 sm:mb-2">
              {t("presence.titleLine1")}
            </span>
            <span className="text-[#a68a56] block">
              {t("presence.titleLine2")}
            </span>
          </h2>
        </motion.div>

        {/* ==================== DESKTOP: Aceternity World Map (hidden on mobile) ==================== */}
        <div className="flex w-full max-w-6xl relative items-center justify-center bg-transparent mt-4 sm:mt-8">
          <WorldMap
            lineColor="#a68a56"
            mapAlt={t("presence.mapAlt")}
            getLabel={(key) => t(`presence.countries.${key}.label`)}
            dots={[
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 56.1304, lng: -106.3468 }, // Canada
                label: "canada",
                flag: "🇨🇦",
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 37.0902, lng: -95.7129 }, // USA
                label: "usa",
                flag: "🇺🇸",
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 23.4241, lng: 53.8478 }, // UAE
                label: "uae",
                flag: "🇦🇪",
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 1.3521, lng: 103.8198 }, // Singapore
                label: "singapore",
                flag: "🇸🇬",
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 23.685, lng: 90.3563 }, // Bangladesh
                label: "bangladesh",
                flag: "🇧🇩",
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: -9.8731, lng: 85.7718 }, // Sri Lanka
                label: "sriLanka",
                flag: "🇱🇰",
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 14.0583, lng: 108.2772 }, // Vietnam
                label: "vietnam",
                flag: "🇻🇳",
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 50.1109, lng: 10.0 }, // Central Europe
                label: "europe",
                flag: "🇪🇺",
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 61.524, lng: 105.3188 }, // Russia
                label: "russia",
                flag: "🇷🇺",
              },
            ]}
          />
        </div>

        {/* ==================== MOBILE: Radial Route Cards (visible on mobile only) ==================== */}
        <div className="flex md:hidden flex-col items-center w-full mt-6 gap-6">
          {/* Central India Hub Badge */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-full bg-[#0e3b2c] flex items-center justify-center shadow-xl border-4 border-[#a68a56]/40 relative">
              <span className="text-3xl">🇮🇳</span>
              {/* Pulsing ring */}
              <motion.div
                className="absolute -inset-2 rounded-full border-2 border-[#a68a56]/40"
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <span className="font-playfair text-lg text-[#0e3b2c] font-semibold mt-3">
              {t("presence.india")}
            </span>
            <span
              className={`font-body text-[10px] tracking-[0.15em] text-[#8d7c5d] uppercase`}
            >
              {t("presence.originHub")}
            </span>
          </motion.div>

          {/* Animated dashed connector line from India hub downward */}
          <div className="flex flex-col items-center -my-2">
            <motion.div
              className="w-[2px] h-8 border-l-2 border-dashed border-[#a68a56]/50"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{ transformOrigin: "top" }}
            />
            <motion.div
              className="w-5 h-5 rounded-full bg-[#a68a56] flex items-center justify-center shadow-sm -mt-0.5"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5, type: "spring" }}
            >
              <Plane size={11} className="text-white -rotate-90" />
            </motion.div>
          </div>

          {/* Destination Cards Grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm px-1">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.key}
                className="relative overflow-hidden rounded-2xl bg-[#f4f2e9]/95 backdrop-blur-md border border-[#a68a56]/25 shadow-lg p-4 flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.15 * i, ease: "easeOut" }}
              >
                {/* Top-right mini route indicator */}
                <div className="absolute top-2 end-2">
                  <MapPin size={12} className="text-[#a68a56]/50" />
                </div>

                {/* Flag */}
                <span className="text-3xl mb-2 drop-shadow-sm">
                  {dest.flag}
                </span>

                {/* Country Name */}
                <h3 className="font-playfair text-base font-semibold text-[#0e3b2c] leading-tight mb-0.5">
                  {t(`presence.countries.${dest.key}.label`)}
                </h3>

                {/* Region Tag */}
                <span
                  className={`font-body text-[9px] font-bold tracking-[0.15em] text-[#a68a56] uppercase mb-2`}
                >
                  {t(`presence.countries.${dest.key}.region`)}
                </span>

                {/* Tagline */}
                <p
                  className={`font-body text-[10px] text-[#5a6259] leading-snug`}
                >
                  {t(`presence.countries.${dest.key}.tagline`)}
                </p>

                {/* Bottom gold accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#a68a56] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom "& more" accent */}
          <motion.p
            className="font-inter text-xs text-[#5a6259] tracking-wide mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {t("presence.more")}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
