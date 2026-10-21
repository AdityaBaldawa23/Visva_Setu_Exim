"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Globe2,
  ThermometerSnowflake,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/i18n/useTranslation";

// Display text for each product lives in the locale files under productsPage.items.<id>
const productList = [
  { id: "banana", num: "01", img: "/banana.png" },
  { id: "chilli", num: "02", img: "/chilli.png" },
  { id: "pom", num: "03", img: "/pom.png" },
  { id: "onion", num: "04", img: "/onion.png" },
  { id: "turmeric", num: "05", img: "/turmeric.png" },
  { id: "coconut", num: "06", img: "/coconut.jpeg" },
  { id: "drumstick", num: "07", img: "/drumstick.jpeg" },
];

export default function ProductPage() {
  const { t, isRTL } = useTranslation();
  const products = productList.map((p) => ({ ...p, ...t(`productsPage.items.${p.id}`) }));

  return (
<>
    <div className="relative min-h-[100svh] w-full overflow-x-hidden selection:bg-[#a68a56] selection:text-white bg-[#f4f2e9]">
      {/* FIXED BACKGROUND (desktop + mobile) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/product-bg.png"
            alt={t("productsPage.bgAlt")}
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
        </div>

        <div className="block md:hidden absolute inset-0">
          <Image
            src="/product-page-mobile-bg.png"
            alt={t("productsPage.bgMobileAlt")}
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f2e9]/10 via-transparent to-[#f4f2e9]/10"></div>
      </div>

      <Navbar />

      <main className="relative z-10 w-full pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24">
        {/* HERO */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-4 sm:pt-8 pb-10 sm:pb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-[#a68a56]/40 shadow-xs mb-5 sm:mb-8"
          >
            <Link href="/" className="text-[11px] sm:text-xs font-medium text-[#5a6259] hover:text-[#0e3b2c] transition-colors">
              {t("productsPage.breadcrumbHome")}
            </Link>
            <span className="text-[#a68a56] text-xs font-semibold">•</span>
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0e3b2c] uppercase">
              {t("productsPage.breadcrumbCurrent")}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center w-full"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 w-full">
              <div className="h-[1px] w-6 sm:w-14 bg-[#8d7c5d] shrink-0"></div>
              <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.25em] text-[#5a6259] uppercase text-center">
                {t("productsPage.eyebrow")}
              </span>
              <div className="h-[1px] w-6 sm:w-14 bg-[#8d7c5d] shrink-0"></div>
            </div>

            <h1 className="font-playfair text-[1.9rem] min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] font-medium tracking-tight mb-4 sm:mb-6">
              <span className="text-[#0e3b2c] block">{t("productsPage.titleLine1")}</span>
              <span className="text-[#a68a56] italic block">{t("productsPage.titleLine2")}</span>
            </h1>

            <p className={`font-body text-[13px] sm:text-base md:text-lg text-[#4a524a] max-w-3xl leading-relaxed mb-7 sm:mb-10 px-1 sm:px-2`}>
              {t("productsPage.intro")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl px-1 sm:px-2">
              {products.map((prod) => (
                <a
                  key={prod.id}
                  href={`#${prod.id}`}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#a68a56]/30 text-[11px] sm:text-xs font-semibold text-[#0e3b2c] hover:bg-[#0e3b2c] hover:text-white hover:border-[#0e3b2c] transition-all duration-300 shadow-xs"
                >
                  {prod.short}
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PRODUCT SECTIONS */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-14 sm:gap-24 lg:gap-36 mt-4 sm:mt-10">
          {products.map((product, index) => {
            const isEven = index % 2 === 1;

            return (
              <div key={product.id} id={product.id} className="scroll-mt-24 sm:scroll-mt-36">
                <div
                  className={`flex flex-col gap-8 sm:gap-12 lg:gap-16 items-center ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* INFORMATION SIDE */}
                  <motion.div
                    className="w-full min-w-0 lg:w-1/2 flex flex-col items-start text-start order-2 lg:order-none"
                    initial={{ opacity: 0, x: (isEven !== isRTL) ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0e3b2c] text-white flex items-center justify-center font-playfair text-xs sm:text-sm font-semibold shadow-xs shrink-0">
                        {product.num}
                      </span>
                      <span className={`font-body text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#a68a56] uppercase`}>
                        {product.category}
                      </span>
                      <span className="h-[1px] w-8 sm:w-10 bg-[#a68a56]/40"></span>
                    </div>

                    <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0e3b2c] font-medium leading-[1.15] mb-2 sm:mb-3 break-words">
                      {product.name}
                    </h2>

                    <p className={`font-body text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider text-[#8d7c5d] uppercase mb-4 sm:mb-5`}>
                      {product.subtitle}
                    </p>

                    <p className={`font-body text-[13px] sm:text-sm md:text-base text-[#4a524a] leading-relaxed mb-5 sm:mb-6`}>
                      {product.description}
                    </p>

                    {/* Origin & Highlights */}
                    <div className="w-full p-3.5 sm:p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[#a68a56]/25 shadow-xs mb-5 sm:mb-6 flex flex-col gap-2.5">
                      <div className={`font-body flex items-start gap-2 text-xs text-[#0e3b2c] font-medium`}>
                        <Globe2 size={16} className="text-[#a68a56] shrink-0 mt-0.5" />
                        <span>
                          <strong>{t("productsPage.originBelt")}</strong> {product.origin}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-[#a68a56]/15">
                        {product.highlights.map((h, i) => (
                          <span
                            key={i}
                            className={`font-body inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[#0e3b2c] bg-[#0e3b2c]/5 px-2 sm:px-2.5 py-1 rounded-md`}
                          >
                            <CheckCircle2 size={12} className="text-[#0e3b2c] shrink-0" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="w-full mb-6 sm:mb-8">
                      <h3 className={`font-playfair text-[11px] sm:text-xs tracking-[0.18em] text-[#5a6259] uppercase mb-3 flex items-center gap-2`}>
                        <Award size={14} className="text-[#a68a56]" />
                        {t("productsPage.specsTitle")}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                        {product.specs.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-2.5 sm:p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-[#a68a56]/20 shadow-2xs flex flex-col justify-center min-w-0"
                          >
                            <span className={`font-body text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#8d7c5d]`}>
                              {spec.label}
                            </span>
                            <span className={`font-body text-xs font-medium text-[#103728] mt-0.5 break-words`}>
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certifications & CTA */}
                    <div className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 pt-4 border-t border-[#a68a56]/30">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        {product.certifications.map((c, cIdx) => (
                          <span
                            key={cIdx}
                            className={`font-body inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#0e3b2c] bg-white/90 border border-[#a68a56]/30 px-2 sm:px-2.5 py-1 rounded-full shadow-2xs`}
                          >
                            <ShieldCheck size={12} className="text-[#a68a56] shrink-0" />
                            {c}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/#contact`}
                        className={`font-body inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#0e3b2c] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#134d3a] hover:gap-3 transition-all duration-300 shadow-md group/btn w-full xl:w-auto text-center shrink-0`}
                      >
                        <span>{t("productsPage.enquire")}</span>
                        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1 rtl:-scale-x-100 rtl:group-hover/btn:-translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>

                  {/* IMAGE SIDE */}
                  <motion.div
                    className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-none"
                    initial={{ opacity: 0, x: (isEven !== isRTL) ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#a68a56]/40 shadow-xl sm:shadow-2xl bg-white/80 group">
                      <Image
                        src={product.img}
                        alt={t("productsPage.imageAlt", { name: product.name })}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 500px, 560px"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>

                      <div className="absolute top-2.5 sm:top-4 start-2.5 sm:start-4 z-20">
                        <span className={`font-body inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#f4f2e9]/90 backdrop-blur-md text-[9px] sm:text-[11px] font-bold tracking-wider text-[#0e3b2c] border border-[#a68a56]/40 shadow-xs uppercase`}>
                          <Sparkles size={11} className="text-[#a68a56]" />
                          {t("productsPage.gradeBadge")}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 sm:bottom-4 end-2.5 sm:end-4 z-20">
                        <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0e3b2c]/90 backdrop-blur-md text-[9px] sm:text-[11px] font-medium text-white border border-[#a68a56]/40 shadow-xs">
                          <ThermometerSnowflake size={12} className="text-[#a68a56]" />
                          {t("productsPage.coldChainBadge")}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-28 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0e3b2c] to-[#08241b] text-white p-6 sm:p-10 md:p-14 shadow-2xl border border-[#a68a56]/40 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8"
          >
            <div className="absolute -end-20 -bottom-20 w-80 h-80 rounded-full border border-[#a68a56]/20 pointer-events-none"></div>
            <div className="absolute -end-10 -bottom-10 w-60 h-60 rounded-full border border-[#a68a56]/15 pointer-events-none"></div>

            <div className="flex flex-col text-start max-w-xl relative z-10">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#a68a56] uppercase mb-2">
                {t("productsPage.cta.eyebrow")}
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-3 sm:mb-4">
                {t("productsPage.cta.title")}
              </h3>
              <p className={`font-body text-xs sm:text-sm text-[#e5e3da]/80 leading-relaxed`}>
                {t("productsPage.cta.text")}
              </p>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-md bg-[#a68a56] text-[#0e3b2c] text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-[#0e3b2c] transition-all duration-300 shadow-xl w-full md:w-auto text-center"
              >
                <span>{t("productsPage.cta.button")}</span>
                <ArrowRight size={16} className="rtl:-scale-x-100" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
    <Footer />
</>
  );
}