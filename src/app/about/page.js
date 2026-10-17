"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sprout, ShieldCheck, Globe2, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const highlights = [
  {
    icon: Sprout,
    title: "Farm-Focused Sourcing",
    text: "Building relationships around agricultural produce and seasonal availability.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Commitment",
    text: "Working towards buyer specifications and appropriate handling standards.",
  },
  {
    icon: Globe2,
    title: "Global Connections",
    text: "Connecting Indian agricultural products with international opportunities.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    text: "Prioritising clear communication, transparency and mutual growth.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Background image (no blur, no overlay, no effects) */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/product-bg.png"
          alt="About Us Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* ================= INTRO ================= */}
      <section className="relative w-full">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-28 sm:pt-36 md:pt-40 pb-12 md:pb-16">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            {/* Subtitle */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d]"></div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#5a6259] uppercase">
                About Vishvasetu Exim
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.12] mb-6 md:mb-8 font-medium tracking-tight">
              <span className="text-[#0e3b2c] block">Rooted in Farms.</span>
              <span className="text-[#a68a56] block">Driven by Trust.</span>
            </h1>

            <p
              className={`${montserrat.className} text-sm sm:text-base md:text-lg text-[#3a3f3a] leading-relaxed max-w-xl`}
            >
              Connecting India&apos;s agricultural strength with global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="relative w-full">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-8 md:py-12">
          <motion.div
            className={`${montserrat.className} max-w-3xl space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg text-[#3a3f3a] leading-relaxed`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p>
              At Vishvasetu Exim, we believe that every successful global partnership begins with
              quality products, trusted relationships and a commitment to doing business the right
              way.
            </p>
            <p>
              Based in India, we focus on sourcing fresh agricultural produce and connecting it with
              international buyers through a reliable, transparent and customer-focused export
              approach. From the farms where our products are grown to the markets where they are
              delivered, we aim to make every step of the journey more dependable.
            </p>
            <p>
              Our product portfolio includes fresh G9 green bananas, G4 green chillies,
              pomegranates, onions and other agricultural commodities. We work towards meeting buyer
              specifications through careful sourcing, appropriate packaging, quality checks and
              coordinated shipment planning.
            </p>
            <p>
              Behind every product are the farmers whose hard work brings India&apos;s agricultural
              richness to the world. We value these relationships and aim to build long-term
              partnerships that create value for farmers, buyers and our business alike.
            </p>
            <p>
              Our promise is simple: to build trust through transparency, focus on quality at every
              stage, and develop lasting relationships with customers across global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="relative w-full">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-10 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="rounded-2xl border border-[#8d7c5d]/30 bg-white/60 p-6 sm:p-8 shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0c3827] mb-5">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-medium text-[#0e3b2c] mb-2">
                    {item.title}
                  </h3>
                  <p
                    className={`${montserrat.className} text-sm sm:text-base text-[#3a3f3a] leading-relaxed`}
                  >
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= OUR PROMISE ================= */}
      <section className="relative w-full">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-10 md:pt-16 pb-20 md:pb-28">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d]"></div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#5a6259] uppercase">
                Our Promise
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-6 md:mb-8 font-medium tracking-tight">
              <span className="text-[#0e3b2c] block">From Indian Farms</span>
              <span className="text-[#a68a56] block">to Global Futures.</span>
            </h2>

            <p
              className={`${montserrat.className} text-sm sm:text-base md:text-lg text-[#3a3f3a] mb-8 md:mb-10 leading-relaxed max-w-xl`}
            >
              Every harvest carries a story of hard work. Every shipment represents a commitment. At
              Vishvasetu Exim, we bring the two together.
            </p>

            <Link
              href="/products"
              className={`group inline-flex items-center justify-center gap-3 bg-[#0c3827] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full ${montserrat.className} text-sm sm:text-[15px] font-medium hover:bg-[#144d37] transition-all duration-300 shadow-md w-full sm:w-auto`}
            >
              <span>Explore Our Products</span>
              <ArrowRight
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                strokeWidth={1.5}
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}