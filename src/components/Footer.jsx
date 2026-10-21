import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

/*
  Dependencies:  npm i react-icons
  Logo: replace LOGO_SRC with your logo path.
  Fonts + marquee keyframes are injected by the <style> block below,
  so no tailwind.config changes are needed.
*/

const LOGO_SRC = "/logo.png"; // <- change to your logo path

const QUICK_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Global Presence", href: "#presence" },
];

const PRODUCTS = [
  { label: "Green Banana", href: "/products#banana" },
  { label: "Green Chilli", href: "/products#chilli" },
  { label: "White Onions", href: "/products#onion" },
  { label: "Pomogranate", href: "/products#pom" },
  { label: "Turmeric", href: "/products#turmeric" },
];

const SOCIALS = [
  { label: "WhatsApp", href: "https://wa.me/919876543210", Icon: FaWhatsapp },
  { label: "Call us", href: "tel:+919876543210", Icon: FaPhoneAlt },
  { label: "Instagram", href: "https://instagram.com/", Icon: FaInstagram },
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: FaLinkedinIn },
  { label: "Email", href: "mailto:info@vishvasetuexim.com", Icon: FaEnvelope },
];

const TICKER_ITEMS = [
  "Trusted by Families Worldwide",
  "Certified APEDA, GlobalGAP & Phytosanitary Compliance",
  "Connecting Cultures Through Pure Agricultural Excellence",
  "Reliable Ocean & Air Freight Logistics",
];

const Footer = () => {
  const loop = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <footer className="font-['Montserrat',sans-serif] w-full bg-[#04342a] text-white z-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Montserrat:wght@400;500;600&display=swap');
        @keyframes vse-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .vse-marquee-track { animation: vse-marquee 40s linear infinite; }
        .vse-marquee:hover .vse-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .vse-marquee-track { animation: none; } }
      `}</style>

      {/* Main footer */}
      <div className="mx-auto w-full max-w-7xl px-6 pt-16 pb-10 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.95fr_0.95fr_0.9fr] lg:gap-x-0 gap-y-12">
          {/* Brand */}
          <div className="flex flex-col items-start lg:mr-12">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-2">
              <img src={LOGO_SRC} alt="Vishva Setu Exim" className="h-full w-full object-contain" />
            </div>
            <p className="mt-6 max-w-xs text-[15px] leading-7 text-white/75">
              Bridging farms to global markets with premium agricultural exports.
              Delivering quality, reliability, and trust at every step of the journey.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links" className="lg:ml-12 lg:mr-2">
            <h3 className="font-['DM_Serif_Display',serif] text-2xl font-normal tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-4">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[15px] text-white/75 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label="Our products" className="lg:ml-4">
            <h3 className="font-['DM_Serif_Display',serif] text-2xl font-normal tracking-wide text-white">
              Our Products
            </h3>
            <ul className="mt-6 space-y-4">
              {PRODUCTS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[15px] text-white/75 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="font-['DM_Serif_Display',serif] text-2xl font-normal tracking-wide text-white">
              Connect
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white hover:text-[#04342a] focus-visible:bg-white focus-visible:text-[#04342a] focus-visible:outline-none"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>

            <p className="mt-6 max-w-xs text-[15px] leading-7 text-white/75">
              Connect with us for inquiries and global trade opportunities.
            </p>

            <div className="mt-4 space-y-2 text-[15px]">
              <a href="mailto:info@vishvasetuexim.com" className="block text-white/90 transition-colors hover:text-white">
                info@vishvasetuexim.com
              </a>
              <a href="tel:+919876543210" className="block text-white/90 transition-colors hover:text-white">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between border-t border-white/15 pt-5 text-sm text-white/60 sm:flex-row sm:items-center">
          <p>© 2026 Vishva Setu Exim. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <a href="/terms" className="transition-colors hover:text-white">Terms &amp; Conditions</a>
            <a href="/privacy" className="transition-colors hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div
        className="vse-marquee overflow-hidden border-t border-black/5 bg-[#faf8f1] py-5"
        aria-label="Company highlights"
      >
        <div className="vse-marquee-track flex w-max items-center whitespace-nowrap">
          {loop.map((text, i) => (
            <div key={i} className="flex items-center">
              <span className="font-['DM_Serif_Display',serif] px-10 text-xl text-[#04342a] sm:text-2xl">
                {text}
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 text-[#b08d57]"
                fill="currentColor"
              >
                <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2zm7 12l.9 3.1L23 18l-3.1.9L19 22l-.9-3.1L15 18l3.1-.9L19 14z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;