"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavLink = ({ href, children, active = false }) => (
  <Link
    href={href}
    className="group relative font-inter font-medium text-[15px] text-stone-900 transition-colors duration-200"
  >
    {children}
    <span
      className={`absolute -bottom-1 left-1/2 h-[2px] bg-[#113B2E] transition-all duration-300 ease-out -translate-x-1/2 ${
        active ? "w-4/5" : "w-0 group-hover:w-4/5"
      }`}
    />
  </Link>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like cubic bezier
      className={`absolute top-0 z-[99] w-full transition-all duration-2000 font-sans ${
        isScrolled
          ? "bg-[#f4f2e9] shadow-md border-b border-[#e5e3da] py-2"
          : "bg-transparent border-b border-transparent py-3 md:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ==================== DESKTOP LAYOUT ==================== */}
        <div className="hidden md:flex justify-between items-center h-16">
          {/* Left Nav */}
          <nav className="flex items-center gap-10 flex-1 justify-end pr-12">
            <NavLink href="/" active={pathname === "/"}>Home</NavLink>
            <NavLink href="/#about">About Us</NavLink>
            <NavLink href="/products" active={pathname === "/products"}>Products</NavLink>
          </nav>

          {/* Center Logo */}
          <div className={`flex justify-center flex-shrink-0 transition-all duration-500 origin-center ${
            isScrolled ? "scale-90" : "scale-110"
          }`}>
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity duration-300 flex items-center justify-center"
              aria-label="Vishva Setu Exim Home"
            >
              <Image
                src="/Central_Text_Logo.png"
                alt="Vishva Setu Exim Logo"
                width={300}
                height={80}
                className="block object-contain"
              />
            </Link>
          </div>

          {/* Right Nav */}
          <nav className="flex items-center gap-10 flex-1 justify-start pl-12">
            <NavLink href="/#presence">Our Presence</NavLink>
            <NavLink href="/#process">Process</NavLink>
            <NavLink href="/#contact">Contact Us</NavLink>
          </nav>
        </div>

        {/* ==================== MOBILE LAYOUT ==================== */}
        <div className="md:hidden flex items-center justify-between h-14">
          {/* Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
            className="flex flex-col gap-[5px] text-stone-900 z-50 relative"
          >
            <span
              className={`block w-6 h-[2px] bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>

          {/* Logo Mobile */}
          <Link
            href="/"
            className={`hover:opacity-80 transition-all duration-500 flex items-center justify-center origin-center ${
              isScrolled ? "scale-90" : "scale-105"
            }`}
            aria-label="Vishva Setu Exim Home"
          >
            <Image
              src="/Central_Text_Logo.png"
              alt="Vishva Setu Exim Logo"
              width={220}
              height={40}
              className="block object-contain"
            />
          </Link>
          
          <div className="w-6"></div> {/* Spacer for centering */}
        </div>

        {/* ==================== MOBILE MENU DRAWER ==================== */}
        <div
          className={`md:hidden fixed inset-0 bg-[#f4f2e9] z-40 transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8 text-xl font-playfair text-[#113B2E]">
            {[
              { href: "/", label: "Home" },
              { href: "/#about", label: "About Us" },
              { href: "/products", label: "Products" },
              { href: "/#process", label: "Our Process" },
              { href: "/#presence", label: "Our Presence" },
              { href: "/#contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#8d7c5d] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}