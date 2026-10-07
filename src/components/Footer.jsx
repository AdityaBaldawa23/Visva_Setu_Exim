import React from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b2b20] text-[#e5e3da] pt-20 pb-8 px-6 lg:px-12 font-inter border-t border-[#a68a56]/30">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col pr-4">
            {/* Logo */}
            <Link href="/" className="mb-6 inline-block">
              <img 
                src="/Logo.png" 
                alt="Vishva Setu Exim Logo" 
                className="h-48 md:h-48 w-auto rounded-2xl object-contain hover:opacity-90 transition-opacity" 
              />
            </Link>
            <p className="text-sm leading-relaxed text-[#c2c0b8]">
              Bridging farms to global markets with premium agricultural exports. Delivering quality, reliability, and trust at every step of the journey.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-inter font-semibold text-white text-lg mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-4 text-sm">
              <li>
                <Link href="#about" className="hover:text-[#a68a56] transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-[#a68a56] transition-colors duration-300">Our Process</Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="hover:text-[#a68a56] transition-colors duration-300">Why Choose Us</Link>
              </li>
              <li>
                <Link href="#presence" className="hover:text-[#a68a56] transition-colors duration-300">Global Presence</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="flex flex-col">
            <h3 className="font-inter font-semibold text-white text-lg mb-6 tracking-wide">
              Our Products
            </h3>
            <ul className="flex flex-col space-y-4 text-sm">
              <li>
                <Link href="#products" className="hover:text-[#a68a56] transition-colors duration-300">Fresh Fruits</Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#a68a56] transition-colors duration-300">Premium Spices</Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#a68a56] transition-colors duration-300">Organic Vegetables</Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#a68a56] transition-colors duration-300">Grains & Cereals</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col">
            <h3 className="font-inter font-semibold text-white text-lg mb-6 tracking-wide">
              Connect
            </h3>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#a68a56] hover:text-white transition-all duration-300">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#a68a56] hover:text-white transition-all duration-300">
                <Phone size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#a68a56] hover:text-white transition-all duration-300">
                <Globe size={18} />
              </a>
            </div>

            <p className="text-sm leading-relaxed text-[#c2c0b8] mb-4">
              Connect with us for inquiries and global trade opportunities.
            </p>

            <div className="flex flex-col space-y-2 text-sm text-[#e5e3da]">
              <a href="mailto:info@vishvasetuexim.com" className="hover:text-[#a68a56] transition-colors duration-300">
                info@vishvasetuexim.com
              </a>
              <a href="tel:+919876543210" className="hover:text-[#a68a56] transition-colors duration-300">
                +91 98765 43210
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#a3a19a]">
          <p>© {new Date().getFullYear()} Vishva Setu Exim. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-[#a68a56] transition-colors duration-300">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-[#a68a56] transition-colors duration-300">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
