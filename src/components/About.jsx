"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative min-h-[85vh] w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Vishva about image.png"
          alt="About Vishva Setu Exim"
          fill
          className="object-cover object-center"
          quality={100}
        />
        {/* Subtle gradient to ensure text readability if needed, blending the right side */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#f4f2e9]/40 via-transparent to-transparent"></div>
        {/* Top and Bottom blend gradients for seamless canvas effect */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f4f2e9] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f4f2e9] to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-24 flex justify-end">
        <motion.div 
          className="max-w-xl pr-4 md:pr-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#8d7c5d]"></div>
            <span className="text-[11px] font-inter font-bold tracking-[0.2em] text-[#5a6259] uppercase">
              About Us
            </span>
          </div>

          {/* Main Title */}
          <h2 className="font-playfair text-5xl md:text-[72px] leading-[1.1] mb-8 font-medium tracking-tight">
            <span className="text-[#0e3b2c] block mb-2">Rooted in Farms.</span>
            <span className="text-[#a68a56] block">Driven by Trust.</span>
          </h2>

          {/* Description */}
          <p className="font-inter text-[17px] text-[#3a3f3a] leading-relaxed">
            At Vishva Setu Exim, we are committed to delivering high-quality agricultural products from the heart of India to the world. Our journey is built on strong partnerships, sustainable practices, and a deep respect for the farmers who make it all possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
