"use client";

import React from "react";
import Image from "next/image";
import { WorldMap } from "./world-map";
import { motion } from "framer-motion";

const GlobalPresence = () => {
  return (
    <section
      id="presence"
      className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/world presence.png"
          alt="Global Presence of Vishva Setu Exim"
          fill
          className="object-cover object-center"
          quality={100}
        />
        {/* Top and Bottom blend gradients for seamless canvas effect */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#f4f2e9] via-[#f4f2e9]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#f4f2e9] via-[#f4f2e9]/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center h-full">
        {/* Header Content */}
        <motion.div
          className="text-center flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#8d7c5d]"></div>
            <span className="text-[11px] font-inter font-bold tracking-[0.2em] text-[#5a6259] uppercase">
              Global Presence
            </span>
            <div className="h-[1px] w-12 bg-[#8d7c5d]"></div>
          </div>

          {/* Main Title */}
          <h2 className="font-playfair text-5xl md:text-[64px] leading-[1.1] font-medium tracking-tight">
            <span className="text-[#0e3b2c] block mb-2">From India,</span>
            <span className="text-[#a68a56] block">to the World.</span>
          </h2>
        </motion.div>

        {/* Aceternity World Map Placeholder Area */}
        {/* This container has a completely transparent background so the world presence.png shows through */}
        <div className="w-full max-w-6xl flex-1 min-h-[400px] md:min-h-[600px] relative flex items-center justify-center bg-transparent mt-8">
          <WorldMap
            lineColor="#a68a56"
            dots={[
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 56.1304, lng: -106.3468 }, // Canada
                label: "Canada", flag: "🇨🇦"
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 37.0902, lng: -95.7129 }, // USA
                label: "USA", flag: "🇺🇸"
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 23.4241, lng: 53.8478 }, // UAE
                label: "UAE", flag: "🇦🇪"
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: -1.2921, lng: 36.8219 }, // Kenya
                label: "Kenya", flag: "🇰🇪"
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 1.3521, lng: 103.8198 }, // Singapore
                label: "Singapore", flag: "🇸🇬"
              },
              {
                start: { lat: 20.5937, lng: 78.9629 }, // India
                end: { lat: 23.6850, lng: 90.3563 }, // Bangladesh
                label: "Bangladesh", flag: "🇧🇩"
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
