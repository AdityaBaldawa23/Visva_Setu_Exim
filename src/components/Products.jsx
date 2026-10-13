"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const products = [
  { id: 1, name: "G9 Green Banana", subtitle: "PREMIUM INDIAN ORIGIN", img:"/banana.png" },
  { id: 2, name: "G4 Green Chilli", subtitle: "FARM FRESH QUALITY", img:"/chilli.png"},
  { id: 3, name: "Pomegranate", subtitle: "RICH IN NATURAL GOODNESS", img:"/pom.png" },
  { id: 4, name: "Fresh Onion", subtitle: "GOLDEN HARVEST", img:"/onion.png" },
  { id: 5, name: "Turmeric", subtitle: "RICH IN NATURAL GOODNESS", img:"/turmeric.png" },
];

const Products = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      // Calculate progress from 0 to 1
      const progress =
        scrollWidth > clientWidth
          ? scrollLeft / (scrollWidth - clientWidth)
          : 0;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const ref = carouselRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
      return () => ref.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="products"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hide py-8"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ishva product catalogue.png"
          alt="Vishva Setu Exim Products Background"
          fill
          className="object-cover object-center"
          quality={75}
        />
        {/* Top and Bottom blend gradients for seamless canvas effect */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f4f2e9] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f4f2e9] to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center">
        {/* Header Content */}
        <motion.div
          className="text-center flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#8d7c5d]"></div>
            <span className="text-[11px] font-inter font-bold tracking-[0.2em] text-[#5a6259] uppercase">
              Premium Agricultural Products
            </span>
          </div>

          {/* Main Title */}
          <h2 className="font-playfair text-5xl md:text-[64px] leading-[1.1] mb-6 font-medium tracking-tight">
            <span className="text-[#0e3b2c] block mb-2">From Our Farms.</span>
            <span className="text-[#a68a56] block">to Your Markets.</span>
          </h2>

          {/* Description */}
          <p className="font-inter text-lg text-[#3a3f3a] max-w-2xl leading-relaxed">
            Carefully sourced agricultural products, selected for quality,
            freshness and consistency.
          </p>
        </motion.div>

        {/* Carousel Area */}
        <div className="w-full relative flex items-center justify-center group">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className={`absolute -left-4 md:-left-12 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-[#8d7c5d] text-[#0e3b2c] hover:bg-[#0e3b2c] hover:text-white transition-all duration-300 bg-[#f4f2e9]/50 backdrop-blur-sm ${scrollProgress <= 0.01 ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}
            disabled={scrollProgress <= 0.01}
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* Cards Container */}
          <div
            ref={carouselRef}
            className="w-full overflow-x-auto flex gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="snap-center shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-22px)] bg-[#fdfbf6]/90 backdrop-blur-sm rounded-[32px] p-6 border border-[#e5dfc9] flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                {/* Image Placeholder */}
                <div className="w-full aspect-square rounded-[24px] bg-[#ebe7d9] mb-8 relative overflow-hidden flex items-center justify-center">
                  <Image src={product.img} fill className="object-auto"/>
                </div>

                {/* Card Content */}
                <div className="w-full flex flex-col items-start text-left px-2">
                  <div className="h-[1px] w-8 bg-[#8d7c5d] mb-4"></div>
                  <h3 className="font-playfair text-2xl text-[#0e3b2c] font-semibold mb-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="font-inter text-[9px] font-bold tracking-[0.2em] text-[#8d7c5d] uppercase">
                      {product.subtitle}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[#8d7c5d] flex items-center justify-center text-[#0e3b2c] hover:bg-[#8d7c5d] hover:text-white transition-colors cursor-pointer">
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className={`absolute -right-4 md:-right-12 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-[#8d7c5d] text-[#0e3b2c] hover:bg-[#0e3b2c] hover:text-white transition-all duration-300 bg-[#f4f2e9]/50 backdrop-blur-sm ${scrollProgress >= 0.99 ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}
            disabled={scrollProgress >= 0.99}
          >
            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Pagination Progress */}
        <div className="mt-8 flex items-center gap-6 font-inter text-sm font-semibold text-[#3a3f3a]">
          <span>01</span>
          <div className="w-32 h-[2px] bg-[#e5dfc9] relative rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#8d7c5d]"
              animate={{ width: `${16.66 + scrollProgress * (100 - 16.66)}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
          </div>
          <span>06</span>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Products;
