"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, Search, Package, Ship, MapPin, ChevronRight, ChevronDown } from 'lucide-react';

const processes = [
  {
    id: 1,
    num: '01',
    title: 'Farm Sourcing',
    desc: 'Direct sourcing from trusted farmers and reliable growing regions across India.',
    icon: Leaf,
    image: './farm_sourcing.png'
  },
  {
    id: 2,
    num: '02',
    title: 'Quality Control',
    desc: 'Careful selection, grading and quality checks to meet buyer specifications.',
    icon: Search,
    image: './quality.png'
  },
  {
    id: 3,
    num: '03',
    title: 'Export Packaging',
    desc: 'Export-ready packaging designed for product protection, freshness and safe handling.',
    icon: Package,
    image: './export.png'
  },
  {
    id: 4,
    num: '04',
    title: 'Shipping & Logistics',
    desc: 'Documentation, customs, logistics and shipment coordination from origin to destination.',
    icon: Ship,
    image: './ship.png'
  },
  {
    id: 5,
    num: '05',
    title: 'Market Delivery',
    desc: 'Efficient delivery to international markets.',
    icon: MapPin,
    image: './market.png'
  }
];

const Process = () => {
  return (
    <section id="process" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Background Images with Mobile Design Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background Image (hidden on mobile) */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/process.png"
            alt="Our Export Process"
            fill
            className="object-cover object-center"
            quality={95}
          />
        </div>

        {/* Mobile Background Image Placeholder (Replace /process-mobile-bg.png with your mobile design) */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/process-mobile-bg.png"
            alt="Our Export Process Mobile Background"
            fill
            className="object-cover object-center"
            quality={95}
          />
        </div>

        {/* Top and Bottom blend gradients for seamless canvas effect */}
        <div className="absolute top-0 left-0 right-0 h-28 sm:h-48 bg-gradient-to-b from-[#f4f2e9] via-[#f4f2e9]/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-48 bg-gradient-to-t from-[#f4f2e9] via-[#f4f2e9]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header Content */}
        <motion.div 
          className="text-center flex flex-col items-center mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d]"></div>
            <span className="text-[10px] sm:text-[11px] font-inter font-bold tracking-[0.2em] text-[#5a6259] uppercase">
              Our Process
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d]"></div>
          </div>

          {/* Main Title */}
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.12] font-medium tracking-tight">
            <span className="text-[#0e3b2c] block mb-1 sm:mb-2">How We Deliver</span>
            <span className="text-[#a68a56] block">Excellence.</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between relative mt-4 sm:mt-8">
          
          {processes.map((process, index) => {
            const Icon = process.icon;
            const isLast = index === processes.length - 1;

            return (
              <React.Fragment key={process.id}>
                
                {/* Step Card */}
                <motion.div 
                  className="relative flex flex-col items-center w-full max-w-[280px] lg:max-w-[240px] shrink-0 group cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                >
                  
                  {/* Top Icon overlapping the top arch */}
                  <div className="relative z-20 -mb-6 w-11 h-11 sm:w-12 sm:h-12 bg-[#103728] rounded-full flex items-center justify-center text-white border-[3px] border-[#f4f2e9] shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  {/* The Image Arch */}
                  <div className="relative w-full aspect-[4/3] rounded-t-[120px] overflow-hidden border border-[#a68a56]/40 shadow-xl bg-[#f4f2e9]">
                    <img 
                      src={process.image}
                      alt={process.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Number Circle overlapping the bottom of the image */}
                  <div className="relative z-20 -mt-6 w-11 h-11 sm:w-12 sm:h-12 bg-[#f4f2e9] rounded-full flex items-center justify-center text-[#103728] border border-[#a68a56] font-playfair text-base sm:text-lg shadow-sm transition-colors duration-300 group-hover:bg-[#0e3b2c] group-hover:text-white">
                    {process.num}
                  </div>

                  {/* Text Content */}
                  <div className="mt-2 text-center p-4 rounded-2xl transition-all duration-300 border border-[#a68a56]/20 bg-[#f4f2e9]/95 backdrop-blur-sm shadow-md lg:bg-transparent lg:border-transparent lg:shadow-none lg:group-hover:bg-[#f4f2e9]/95 lg:group-hover:backdrop-blur-md lg:group-hover:border-[#a68a56]/30 lg:group-hover:shadow-xl w-full">
                    <h3 className="font-playfair text-lg sm:text-xl text-[#0e3b2c] mb-1.5 font-semibold">
                      {process.title}
                    </h3>
                    <p className="font-inter text-xs text-[#5a6259] leading-relaxed max-w-[210px] mx-auto">
                      {process.desc}
                    </p>
                  </div>

                </motion.div>

                {/* Vertical Connector for Mobile */}
                {!isLast && (
                  <div className="flex lg:hidden flex-col items-center justify-center my-3 sm:my-4 h-12">
                    <div className="w-[2px] h-8 border-l-2 border-dashed border-[#a68a56]/60"></div>
                    <div className="w-6 h-6 rounded-full bg-[#a68a56] flex items-center justify-center text-white shadow-xs -mt-1">
                      <ChevronDown size={14} strokeWidth={2.5} />
                    </div>
                  </div>
                )}

                {/* Connecting Line for Desktop */}
                {!isLast && (
                  <div className="hidden lg:flex flex-1 items-start justify-center relative mt-[70px] xl:mt-[80px]">
                    <svg 
                      className="absolute w-full h-[50px] top-0 left-0 pointer-events-none"
                      viewBox="0 0 100 50" 
                      preserveAspectRatio="none"
                    >
                      <motion.path 
                        d="M0,0 C30,50 70,50 100,0" 
                        fill="none" 
                        stroke="#a68a56" 
                        strokeDasharray="4 4" 
                        strokeWidth="1.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: (index * 0.2) + 0.5 }}
                      />
                    </svg>
                    
                    {/* Golden Arrow Circle in the middle of the dip */}
                    <motion.div 
                      className="absolute top-[28px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#a68a56] flex items-center justify-center text-white shadow-md z-10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + 1.2, type: "spring" }}
                    >
                      <ChevronRight size={14} strokeWidth={3} />
                    </motion.div>
                  </div>
                )}

              </React.Fragment>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Process;
