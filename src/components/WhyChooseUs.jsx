"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Handshake, Package, ShieldCheck, Sprout } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const features = [
  {
    id: 1,
    num: "01",
    title: "Premium Quality",
    desc: "Sourced directly from trusted farms across India.",
    icon: Leaf,
  },
  {
    id: 2,
    num: "02",
    title: "Reliable Partnerships",
    desc: "Built on transparency, consistency and trust.",
    icon: Handshake,
  },
  {
    id: 3,
    num: "03",
    title: "Global Reach",
    desc: "Delivering to markets across the world.",
    icon: Package,
  },
  {
    id: 4,
    num: "04",
    title: "Assured Standards",
    desc: "Stringent quality checks at every step.",
    icon: ShieldCheck,
  },
  {
    id: 5,
    num: "05",
    title: "Sustainable Growth",
    desc: "Supporting farmers and building a better tomorrow.",
    icon: Sprout,
  },
];

const WhyChooseUs = () => {
  const [activeId, setActiveId] = useState(1);
  const carouselRef = useRef(null);

  // Auto-cycle the active state for a premium interactive feel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prev) => (prev === features.length ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual click to set active state and scroll into view on mobile

  const handleFeatureClick = (id) => {
    setActiveId(id);
  };

  return (
    <section
      id="why-choose-us"
      className="relative min-h-[auto] lg:min-h-[100svh] w-full flex flex-col items-center justify-start overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Background Images with Mobile Design Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Desktop background */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/vishva why choose us.png"
            alt="Why Choose Vishva Setu Exim"
            fill
            sizes="100vw"
            className="object-cover object-center"
            quality={90}
          />
        </div>

        {/* Mobile background */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/why-choose-us-mobile-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            quality={85}
          />
        </div>

        {/* Top and Bottom blend gradients for seamless canvas effect */}
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-[#f4f2e9] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-48 bg-gradient-to-t from-[#f4f2e9] via-[#f4f2e9]/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex flex-col items-center">
        {/* Header Content */}
        <motion.div
          className="text-center flex flex-col items-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d]"></div>
            <span className="text-[10px] sm:text-[11px] font-inter font-bold tracking-[0.2em] text-[#5a6259] uppercase">
              Why Choose Us
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d]"></div>
          </div>

          {/* Main Title */}
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.12] font-medium tracking-tight">
            <span className="text-[#0e3b2c] block mb-1 sm:mb-2">
              Your Trusted Partner
            </span>
            <span className="text-[#a68a56] block">in Global Trade.</span>
          </h2>
        </motion.div>

        {/* Timeline / Carousel Area */}

        {/* Responsive Features */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Timeline line — desktop only */}
          {/* <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-[#8d7c5d]/40" /> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-4">
            {features.map((feature) => {
              const isActive = activeId === feature.id;
              const Icon = feature.icon;

              return (
                <motion.button
                  key={feature.id}
                  type="button"
                  onClick={() => handleFeatureClick(feature.id)}
                  aria-pressed={isActive}
                  className={`relative z-10 flex w-full flex-col items-center text-center rounded-2xl p-5 sm:p-6 lg:px-3 lg:py-5 transition-all duration-300 ${isActive
                      ? "bg-[#f4f2e9]/95 backdrop-blur-sm border border-[#a68a56]/40 shadow-lg"
                      : "bg-[#f4f2e9]/65 border border-[#a68a56]/15 hover:bg-[#f4f2e9]/90"
                    }`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Number */}
                  <div
                    className={`relative mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-playfair text-lg transition-all duration-300 ${isActive
                        ? "bg-[#0e3b2c] text-white shadow-[0_0_0_5px_rgba(14,59,44,0.12)]"
                        : "bg-[#f4f2e9] border border-[#8d7c5d] text-[#0e3b2c]"
                      }`}
                  >
                    {feature.num}
                  </div>

                  {/* Icon */}
                  <div
                    className={`mb-4 transition-colors duration-300 ${isActive ? "text-[#0e3b2c]" : "text-[#5a6259]"
                      }`}
                  >
                    <Icon size={30} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-xl lg:text-lg xl:text-xl font-semibold leading-snug text-[#0e3b2c] mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`${montserrat.className} text-sm leading-relaxed text-[#3a3f3a] max-w-xs lg:text-xs xl:text-sm`}
                  >
                    {feature.desc}
                  </p>
                </motion.button>
              );
            })}
          </div>
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

export default WhyChooseUs;
