"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

const Hero = () => {
  const { t, isRTL } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full flex items-start md:items-center overflow-hidden"
    >
      {/* Background Images */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Desktop Background — unchanged */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/hero-bg1.png"
            alt={t("hero.bgAlt")}
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </div>

        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/hero-mobile-bg.jpg"
            alt={t("hero.bgMobileAlt")}
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </div>

        {/* Bottom blend gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-b from-transparent to-[#f4f2e9]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-40 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-24">
        <motion.div
          className="max-w-2xl md:rtl:ms-auto"
          initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-2.5 sm:gap-4 mb-3 sm:mb-6 md:mb-8">
            <div className="h-[1px] w-6 sm:w-12 bg-[#8d7c5d]" />
            <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.18em] sm:tracking-[0.2em] text-[#5a6259] uppercase">
              {t("hero.eyebrow")}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-playfair text-[2.15rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] sm:leading-[1.12] mb-4 sm:mb-6 md:mb-8 font-medium tracking-tight">
            <span className="text-[#0e3b2c] block">
              {t("hero.titleLine1")}
            </span>
            <span className="text-[#a68a56] block">
              {t("hero.titleLine2")}
            </span>
          </h1>

          {/* Description */}
          <p className="font-body text-[13px] leading-[1.65] sm:text-base md:text-lg text-[#3a3f3a] mb-5 sm:mb-8 md:mb-10 max-w-lg">
            {t("hero.description")}
          </p>

          {/* CTA Button — compact on mobile */}
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#0c3827] text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-full font-body text-xs sm:text-[15px] font-medium hover:bg-[#144d37] transition-all duration-300 shadow-md w-auto sm:w-auto"
          >
            <span>{t("hero.cta")}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;