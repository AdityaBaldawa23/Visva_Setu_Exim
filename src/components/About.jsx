"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative min-h-[100svh] w-full flex items-center overflow-hidden py-20 md:py-24">
      {/* Background Images with Mobile Design Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background Image (hidden on mobile) */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/about-bg.png"
            alt="About Vishva Setu Exim"
            fill
            className="object-cover object-center"
            quality={100}
          />
        </div>

        {/* Mobile Background Image Placeholder (Replace /about-mobile-bg.png with your mobile design) */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/about-mobile-bg.png"
            alt="About Vishva Setu Exim Mobile Background"
            fill
            className="object-cover object-center"
            quality={100}
          />
        </div>

        {/* Top and Bottom blend gradients for seamless canvas effect */}
        {/* <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-[#f4f2e9] to-transparent"></div> */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#f4f2e9] to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex justify-center md:justify-end">
        <motion.div 
          className="max-w-xl w-full p-6 sm:p-12 md:p-0 rounded-3xl md:rounded-none bg-[#f4f2e9]/80 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none border border-[#a68a56]/20 md:border-none shadow-sm md:shadow-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
            <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d]"></div>
            <span className="text-[10px] sm:text-[11px] font-inter font-bold tracking-[0.2em] text-[#5a6259] uppercase">
              About Us
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d] md:hidden"></div>
          </div>

          {/* Main Title */}
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-[1.12] mb-5 sm:mb-8 font-medium tracking-tight">
            <span className="text-[#0e3b2c] block mb-1 sm:mb-2">Rooted in Farms.</span>
            <span className="text-[#a68a56] block">Driven by Trust.</span>
          </h2>

          {/* Description */}
          <p className="font-inter text-sm sm:text-base md:text-[17px] text-[#3a3f3a] leading-relaxed">
            At Vishva Setu Exim, we are committed to delivering high-quality agricultural products from the heart of India to the world. Our journey is built on strong partnerships, sustainable practices, and a deep respect for the farmers who make it all possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
