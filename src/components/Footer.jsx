"use client";

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tickerItems = [
  "Bridging Indian Farms to Global Ports",
  "Uncompromising Export Quality & Standards",
  "Fresh Cavendish Bananas & G4 Chillies Worldwide",
  "Certified APEDA, GlobalGAP & Phytosanitary Compliance",
  "Connecting Cultures Through Pure Agricultural Excellence",
  "Reliable Ocean Reefer Cold-Chain Shipments",
  "From Indian Soil to Wholesalers Across the Globe",
  "Trust • Integrity • Consistency • Global Trade",
];

const Footer = () => {
  return (
    <footer className={`bg-[#0b2b20] text-[#e5e3da] pt-14 sm:pt-16 md:pt-20 pb-0 ${montserrat.className} border-t border-[#a68a56]/30 overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-12 sm:mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col pr-0 sm:pr-4">
            {/* Logo */}
            <Link href="/" className="mb-4 sm:mb-6 inline-block">
              <img 
                src="/Logo.png" 
                alt="Vishva Setu Exim Logo" 
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto rounded-xl sm:rounded-2xl object-contain hover:opacity-90 transition-opacity" 
              />
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-[#c2c0b8]">
              Bridging farms to global markets with premium agricultural exports. Delivering quality, reliability, and trust at every step of the journey.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-white text-base sm:text-lg mb-4 sm:mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li>
                <Link href="/#about" className="hover:text-[#a68a56] transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-[#a68a56] transition-colors duration-300">Our Process</Link>
              </li>
              <li>
                <Link href="/#why-choose-us" className="hover:text-[#a68a56] transition-colors duration-300">Why Choose Us</Link>
              </li>
              <li>
                <Link href="/#presence" className="hover:text-[#a68a56] transition-colors duration-300">Global Presence</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="flex flex-col">
            <h3 className="font-inter font-semibold text-white text-base sm:text-lg mb-4 sm:mb-6 tracking-wide">
              Our Products
            </h3>
            <ul className="flex flex-col space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li>
                <Link href="/products" className="hover:text-[#a68a56] transition-colors duration-300">Fresh Fruits</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#a68a56] transition-colors duration-300">Premium Spices</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#a68a56] transition-colors duration-300">Organic Vegetables</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#a68a56] transition-colors duration-300">Grains & Cereals</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col">
            <h3 className="font-inter font-semibold text-white text-base sm:text-lg mb-4 sm:mb-6 tracking-wide">
              Connect
            </h3>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <a href="#" aria-label="WhatsApp" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#a68a56] hover:text-white transition-all duration-300">
                <MessageCircle size={17} />
              </a>
              <a href="#" aria-label="Phone" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#a68a56] hover:text-white transition-all duration-300">
                <Phone size={17} />
              </a>
              <a href="#" aria-label="Website" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#a68a56] hover:text-white transition-all duration-300">
                <Globe size={17} />
              </a>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#c2c0b8] mb-3 sm:mb-4">
              Connect with us for inquiries and global trade opportunities.
            </p>

            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-[#e5e3da]">
              <a href="mailto:info@vishvasetuexim.com" className="hover:text-[#a68a56] transition-colors duration-300 break-all">
                info@vishvasetuexim.com
              </a>
              <a href="tel:+919876543210" className="hover:text-[#a68a56] transition-colors duration-300">
                +91 98765 43210
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Credits & Policies) */}
        <div className="w-full border-t border-white/10 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a3a19a] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Vishva Setu Exim. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-[#a68a56] transition-colors duration-300">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-[#a68a56] transition-colors duration-300">Privacy Policy</Link>
          </div>
        </div>

      </div>

      {/* Infinitely Moving Horizontal Marquee Line below Credits */}
      <div className="w-full bg-[#fdfbf7] text-[#0e3b2c] py-3.5 sm:py-4 border-t-2 border-[#a68a56]/50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] relative overflow-hidden select-none">
        <div className="flex w-max">
          {/* First loop track */}
          <motion.div
            className="flex items-center shrink-0 space-x-8 sm:space-x-12 pr-8 sm:pr-12"
            animate={{ x: "-100%" }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {tickerItems.map((quote, index) => (
              <div key={`tick-1-${index}`} className="flex items-center space-x-6 sm:space-x-8">
                <span className="font-playfair text-sm sm:text-base font-semibold tracking-wide whitespace-nowrap text-[#0e3b2c]">
                  {quote}
                </span>
                <span className="flex items-center justify-center text-[#a68a56]">
                  <Sparkles size={14} className="animate-pulse" />
                </span>
              </div>
            ))}
          </motion.div>

          {/* Duplicate loop track for continuous seamless scroll */}
          <motion.div
            className="flex items-center shrink-0 space-x-8 sm:space-x-12 pr-8 sm:pr-12"
            animate={{ x: "-100%" }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {tickerItems.map((quote, index) => (
              <div key={`tick-2-${index}`} className="flex items-center space-x-6 sm:space-x-8">
                <span className="font-playfair text-sm sm:text-base font-semibold tracking-wide whitespace-nowrap text-[#0e3b2c]">
                  {quote}
                </span>
                <span className="flex items-center justify-center text-[#a68a56]">
                  <Sparkles size={14} className="animate-pulse" />
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
