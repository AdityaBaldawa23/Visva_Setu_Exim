"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, Handshake, Package, ShieldCheck, Sprout } from 'lucide-react';

const features = [
  {
    id: 1,
    num: '01',
    title: 'Premium Quality',
    desc: 'Sourced directly from trusted farms across India.',
    icon: Leaf,
  },
  {
    id: 2,
    num: '02',
    title: 'Reliable Partnerships',
    desc: 'Built on transparency, consistency and trust.',
    icon: Handshake,
  },
  {
    id: 3,
    num: '03',
    title: 'Global Reach',
    desc: 'Delivering to markets across the world.',
    icon: Package,
  },
  {
    id: 4,
    num: '04',
    title: 'Assured Standards',
    desc: 'Stringent quality checks at every step.',
    icon: ShieldCheck,
  },
  {
    id: 5,
    num: '05',
    title: 'Sustainable Growth',
    desc: 'Supporting farmers and building a better tomorrow.',
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
    if (carouselRef.current && window.innerWidth < 1024) {
      const itemElement = carouselRef.current.children[id - 1];
      if (itemElement) {
        itemElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  return (
    <section id="why-choose-us" className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vishva why choose us.png"
          alt="Why Choose Vishva Setu Exim"
          fill
          className="object-cover object-center"
          quality={100}
        />
        {/* Top and Bottom blend gradients for seamless canvas effect */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f4f2e9] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#f4f2e9] via-[#f4f2e9]/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center">
        
        {/* Header Content */}
        <motion.div 
          className="text-center flex flex-col items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#8d7c5d]"></div>
            <span className="text-[11px] font-inter font-bold tracking-[0.2em] text-[#5a6259] uppercase">
              Why Choose Us
            </span>
            <div className="h-[1px] w-12 bg-[#8d7c5d]"></div>
          </div>

          {/* Main Title */}
          <h2 className="font-playfair text-5xl md:text-[64px] leading-[1.1] font-medium tracking-tight">
            <span className="text-[#0e3b2c] block mb-2">Your Trusted Partner</span>
            <span className="text-[#a68a56] block">in Global Trade.</span>
          </h2>
        </motion.div>

        {/* Timeline / Carousel Area */}
        <div className="w-full relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-[24px] left-[10%] right-[10%] h-[1px] bg-[#8d7c5d] z-0 opacity-40"></div>

          <div 
            ref={carouselRef}
            className="w-full flex lg:grid lg:grid-cols-5 gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory hide-scrollbar pb-12 pt-4 px-4 lg:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((feature) => {
              const isActive = activeId === feature.id;
              const Icon = feature.icon;
              
              return (
                <div 
                  key={feature.id}
                  onClick={() => handleFeatureClick(feature.id)}
                  className={`snap-center shrink-0 w-[280px] lg:w-auto relative z-10 flex flex-col items-center text-center group cursor-pointer transition-all duration-500 ${isActive ? 'opacity-100 scale-105 lg:scale-110' : 'opacity-60 hover:opacity-80'}`}
                >
                  {/* Number Circle */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-playfair text-lg transition-all duration-500 mb-8 relative ${
                    isActive 
                      ? 'bg-[#0e3b2c] text-white shadow-[0_0_0_6px_rgba(14,59,44,0.15)]' 
                      : 'bg-[#f4f2e9] border border-[#8d7c5d] text-[#0e3b2c]'
                  }`}>
                    {feature.num}
                    
                    {/* Active Indicator Ring */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeRing"
                        className="absolute -inset-[6px] rounded-full border border-[#0e3b2c]/30"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>

                  {/* Card Container for Icon, Title, and Description */}
                  <div className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-500 w-full ${
                    isActive 
                      ? 'bg-[#f4f2e9]/95 backdrop-blur-sm shadow-xl border border-[#a68a56]/20' 
                      : 'bg-transparent border border-transparent'
                  }`}>
                    {/* Icon */}
                    <div className={`mb-5 transition-transform duration-500 ${isActive ? 'scale-110 text-[#0e3b2c]' : 'text-[#5a6259]'}`}>
                      <Icon strokeWidth={1.5} size={32} />
                    </div>

                    {/* Title */}
                    <h3 className={`font-playfair text-xl md:text-2xl font-semibold mb-3 transition-colors duration-500 ${isActive ? 'text-[#0e3b2c]' : 'text-[#0e3b2c]/80'}`}>
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className={`font-inter text-sm leading-relaxed max-w-[200px] transition-colors duration-500 ${isActive ? 'text-[#3a3f3a]' : 'text-[#3a3f3a]/80'}`}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
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
