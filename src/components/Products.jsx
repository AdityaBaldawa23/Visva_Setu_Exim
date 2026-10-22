"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

// Display text for each product lives in the locale files under products.items.<id>
const products = [
  { id: "banana", img: "/banana.png" },
  { id: "chilli", img: "/chilli.png" },
  { id: "pom", img: "/pom.png" },
  { id: "onion", img: "/onion.png" },
  { id: "turmeric", img: "/turmeric.png" },
  { id: "coconut", img: "/coconut.jpeg" },
  { id: "drumstick", img: "/drumstick.jpeg" },
];

const Products = () => {
  const { t, isRTL } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? Math.abs(scrollLeft) / maxScroll : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    }
  };

  useEffect(() => {
    const ref = carouselRef.current;
    if (ref) {
      // Direction changes flip the scroll origin; start again from the first card.
      ref.scrollLeft = 0;
      ref.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => ref.removeEventListener("scroll", handleScroll);
    }
  }, [isRTL]);

  // "Previous" / "next" follow the reading direction (mirrored in RTL).
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: (isRTL ? 1 : -1) * carouselRef.current.clientWidth * 0.8,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: (isRTL ? -1 : 1) * carouselRef.current.clientWidth * 0.8,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="products"
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24"
    >
      {/* Background Images with Mobile Design Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background Image (hidden on mobile) */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/product.png"
            alt={t("products.bgAlt")}
            fill
            className="object-cover object-center"
            quality={90}
          />
        </div>

        {/* Mobile Background Image Placeholder (Replace /products-mobile-bg.png with your mobile design) */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/products-mobile-bg.png"
            alt={t("products.bgMobileAlt")}
            fill
            className="object-cover object-center"
            quality={90}
          />
        </div>

        {/* Top and Bottom blend gradients for seamless canvas effect */}
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-[#f4f2e9] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#f4f2e9] to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex flex-col items-center">
        {/* Header Content */}
        <motion.div
          className="text-center flex flex-col items-center mb-10 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d]"></div>
            <span className="text-[10px] sm:text-[11px] font-inter font-bold tracking-[0.2em] text-[#5a6259] uppercase">
              {t("products.eyebrow")}
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d]"></div>
          </div>

          {/* Main Title */}
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.12] mb-4 sm:mb-6 font-medium tracking-tight">
            <span className="text-[#0e3b2c] block mb-1 sm:mb-2">
              {t("products.titleLine1")}
            </span>
            <span className="text-[#a68a56] block">
              {t("products.titleLine2")}
            </span>
          </h2>

          {/* Description */}
          <p
            className={`font-body text-sm sm:text-base md:text-lg text-[#3a3f3a] max-w-2xl leading-relaxed`}
          >
            {t("products.description")}
          </p>
        </motion.div>

        {/* Carousel Area */}
        <div className="w-full relative flex items-center justify-center">
          {/* Left Arrow (Desktop / Tablet) */}
          <button
            onClick={scrollLeft}
            aria-label={
              isRTL ? t("products.scrollRight") : t("products.scrollLeft")
            }
            className={`hidden md:flex absolute -start-4 lg:-start-12 z-20 items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-[#8d7c5d] text-[#0e3b2c] hover:bg-[#0e3b2c] hover:text-white transition-all duration-300 bg-[#f4f2e9]/80 backdrop-blur-sm ${
              scrollProgress <= 0.01
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            disabled={scrollProgress <= 0.01}
          >
            <ArrowLeft className="w-5 h-5 rtl:-scale-x-100" strokeWidth={1.5} />
          </button>

          {/* Cards Container */}
          <div
            ref={carouselRef}
            className="w-full overflow-x-auto flex gap-4 sm:gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar pb-6 pt-2 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map(({ id, img }) => {
              const product = { id, img, ...t(`products.items.${id}`) };
              return (
                <div
                  key={product.id}
                  className="snap-center shrink-0 w-[82vw] sm:w-[320px] md:w-[calc(33.333%-22px)] bg-[#fdfbf6]/90 backdrop-blur-sm rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border border-[#e5dfc9] flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="w-full aspect-square rounded-[20px] sm:rounded-[24px] bg-[#ebe7d9] mb-6 sm:mb-8 relative overflow-hidden flex items-center justify-center">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 320px, 33vw"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="w-full flex flex-col items-start text-start px-1 sm:px-2">
                    <div className="h-[1px] w-8 bg-[#8d7c5d] mb-3 sm:mb-4"></div>
                    <h3 className="font-playfair text-xl sm:text-2xl text-[#0e3b2c] font-semibold mb-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between gap-3 w-full mt-2">
                      <span
                        className={`font-body text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#8d7c5d] uppercase`}
                      >
                        {product.subtitle}
                      </span>
                      <Link
                        href={`/products#${product.id}`}
                        aria-label={t("products.viewDetails", {
                          name: product.name,
                        })}
                        className="shrink-0 w-8 h-8 rounded-full border border-[#8d7c5d] flex items-center justify-center text-[#0e3b2c] hover:bg-[#0e3b2c] hover:text-white transition-colors"
                      >
                        <ArrowRight
                          className="w-3.5 h-3.5 rtl:-scale-x-100"
                          strokeWidth={2}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow (Desktop / Tablet) */}
          <button
            onClick={scrollRight}
            aria-label={
              isRTL ? t("products.scrollLeft") : t("products.scrollRight")
            }
            className={`hidden md:flex absolute -end-4 lg:-end-12 z-20 items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-[#8d7c5d] text-[#0e3b2c] hover:bg-[#0e3b2c] hover:text-white transition-all duration-300 bg-[#f4f2e9]/80 backdrop-blur-sm ${
              scrollProgress >= 0.99
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }`}
            disabled={scrollProgress >= 0.99}
          >
            <ArrowRight
              className="w-5 h-5 rtl:-scale-x-100"
              strokeWidth={1.5}
            />
          </button>
        </div>

        {/* Mobile Swipe Indicators & Pagination */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          {/* Mobile Arrow Controls */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={scrollLeft}
              aria-label={t("products.previous")}
              className="w-11 h-11 rounded-full border border-[#8d7c5d] text-[#0e3b2c] flex items-center justify-center bg-white/70 shadow-xs"
            >
              <ArrowLeft size={16} className="rtl:-scale-x-100" />
            </button>
            <span className={`font-body text-xs text-[#5a6259]`}>
              {t("products.swipe")}
            </span>
            <button
              onClick={scrollRight}
              aria-label={t("products.next")}
              className="w-11 h-11 rounded-full border border-[#8d7c5d] text-[#0e3b2c] flex items-center justify-center bg-white/70 shadow-xs"
            >
              <ArrowRight size={16} className="rtl:-scale-x-100" />
            </button>
          </div>

          {/* Pagination Progress */}
          <div
            className={`flex items-center gap-4 sm:gap-6 font-body text-xs sm:text-sm font-semibold text-[#3a3f3a]`}
          >
            <span>01</span>
            <div className="w-24 sm:w-32 h-[2px] bg-[#e5dfc9] relative rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 start-0 h-full bg-[#8d7c5d]"
                animate={{ width: `${20 + scrollProgress * 80}%` }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
            </div>
            <span>05</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
