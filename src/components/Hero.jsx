"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/hero-bg.jpg"
          alt="Agriculture World Map Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Subtle overlay for the left side to ensure text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#f4f2e9]/60 via-[#f4f2e9]/30 to-transparent"></div> */}
        {/* Bottom blend gradient to seamlessly merge with About section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#f4f2e9]"></div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-20">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#8d7c5d]"></div>
            <span className="text-[11px] font-inter font-bold tracking-[0.2em] text-[#5a6259] uppercase">
              Premium Agricultural Exports
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-playfair text-6xl md:text-[80px] leading-[1.1] mb-8 font-medium tracking-tight">
            <span className="text-[#0e3b2c] block">Bridging Farms</span>
            <span className="text-[#a68a56] block">to Global Markets.</span>
          </h1>

          {/* Description */}
          <p className="font-inter text-lg text-[#3a3f3a] mb-10 leading-relaxed max-w-lg">
            Vishva Setu Exim connects quality agricultural products from India&apos;s farms to markets across the world, ensuring trust, consistency and long-term value for our global partners.
          </p>

          {/* CTA Button */}
          <button className="group flex items-center gap-3 bg-[#0c3827] text-white px-8 py-4 rounded-full font-inter text-[15px] hover:bg-[#144d37] transition-all duration-300 shadow-md">
            <span>Explore Our Products</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
