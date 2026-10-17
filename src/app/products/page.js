"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Globe2,
  ThermometerSnowflake,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Body font (headings & subheadings keep their existing Playfair / Inter fonts)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const bodyFont = montserrat.className;

const productList = [
  {
    id: "banana",
    num: "01",
    category: "Fresh Fruits",
    name: "G9 Cavendish Green Banana",
    subtitle: "Naturally Grown • Flawless Caliber • Farm-Fresh Export Grade",
    img: "/banana.png",
    origin: "Maharashtra, Gujarat & Andhra Pradesh",
    description:
      "Cultivated across India's fertile river basins under ideal tropical sunlight, our G9 (Grand Nain) Cavendish green bananas are internationally acclaimed for their thick protective peel, uniform finger length, and rich creamy taste upon ripening. Procured directly from GlobalGAP certified orchards, each hand is gently washed, sanitized, calibrated, and packed in pristine food-grade vacuum bags to guarantee optimum shelf life during marine voyage.",
    specs: [
      { label: "Variety", value: "Grand Nain (Cavendish G9)" },
      { label: "Finger Length", value: "Min 18 cm - 25 cm (7 - 9 inches)" },
      { label: "Caliber / Diameter", value: "39 mm to 47 mm" },
      { label: "Hands per Box", value: "4, 5, 6 & 7 hands (Cluster / Hand)" },
      { label: "Packaging", value: "7 kg / 13 kg Box, as per your requirement" },
      { label: "Cold Storage Temp", value: "13.2°C – 13.5°C Controlled Atmosphere" },
      { label: "Shelf Life", value: "35 – 45 Days in Reefer Transit" },
      { label: "Availability", value: "Year-Round Continuous Supply" },
    ],
    certifications: ["GlobalGAP", "APEDA Approved", "Phytosanitary Certified"],
    highlights: ["Uniform Green Tone", "Zero Chemical Ripening", "Export Caliber Foam-Padded"],
  },
  {
    id: "chilli",
    num: "02",
    category: "Fresh Vegetables",
    name: "G4 Fresh Green Chilli",
    subtitle: "Pungent & Vibrant • High Capsaicin • Hand-Harvested Daily",
    img: "/chilli.png",
    origin: "Gujarat, Andhra Pradesh & Karnataka",
    description:
      "Our G4 export green chillies are celebrated globally for their intense natural pungency, radiant glossy green sheen, and crispy texture. Harvested in the early morning dew to retain maximum moisture and essential capsaicin oils, each pod undergoes stringent optical and manual grading to eliminate blemishes, ensuring only uniform, long-stemmed chillies reach our state-of-the-art cold-pack facility.",
    specs: [
      { label: "Variety", value: "G4 Green Chilli (Export Standard)" },
      { label: "Pod Length", value: "8 cm to 14 cm" },
      { label: "Skin & Texture", value: "Glossy Dark Green, Firm & Crunchy" },
      { label: "Pungency Level", value: "High (Capsaicin Rich: 45,000–60,000 SHU)" },
      { label: "Packaging", value: "3.5 kg / 4 kg / 5 kg Box, as per your requirement" },
      { label: "Transit Temp", value: "7°C – 9°C (85–90% Relative Humidity)" },
      { label: "Shelf Life", value: "21 – 25 Days under Cold-Chain" },
      { label: "Availability", value: "Round the Year Harvest" },
    ],
    certifications: ["FSSAI Compliant", "SPICES Board Certified", "APEDA Regulated"],
    highlights: ["Hand-Picked Daily", "Intense Fresh Aroma", "Ventilated Moisture-Guard Boxes"],
  },
  {
    id: "pom",
    num: "03",
    category: "Fresh Fruits",
    name: "Bhagwa Premium Pomegranate",
    subtitle: "Ruby-Red Arils • High Brix Sweetness • Superfruit Antioxidants",
    img: "/pom.png",
    origin: "Solapur & Nashik, Maharashtra",
    description:
      "Renowned as the crown jewel of Indian horticulture, the Bhagwa pomegranate is globally coveted for its glowing saffron-red rind and tender, seedless ruby-red arils dripping with sweet, antioxidant-dense juice. Sourced straight from Solapur—India's pomegranate capital—every fruit is carefully weighed, foam-sleeved, and nested to guard its delicate crown and ruby luster across thousands of nautical miles.",
    specs: [
      { label: "Variety", value: "Bhagwa (Kesar Red Standard)" },
      { label: "Fruit Weight", value: "200g – 450g+ (Small to Jumbo Grade)" },
      { label: "Color Profile", value: "Deep Glossy Red Rind with Ruby Arils" },
      { label: "Total Soluble Solids", value: "15° to 16.5° Brix (Super Sweet)" },
      { label: "Packaging", value: "3.5 kg / 4 kg Tray Pack (9 / 10 / 12 / 14 counts), as per your requirement" },
      { label: "Transit Temp", value: "5°C – 7°C Controlled Reefer" },
      { label: "Shelf Life", value: "60 – 75 Days under Refrigerated Storage" },
      { label: "Availability", value: "Round the Year Harvest" },
    ],
    certifications: ["GlobalGAP Certified", "Phytosanitary Clean", "PomeNet Registered"],
    highlights: ["Soft Seedless Arils", "Individually Net-Sleeved", "High Juice Content (48%+)"],
  },
  {
    id: "onion",
    num: "04",
    category: "Root Vegetables",
    name: "Fresh Red & White Onions",
    subtitle: "Nashik Harvested • Golden-Red Flakes • Long Ambient Shelf Life",
    img: "/onion.png",
    origin: "Nashik & Pune, Maharashtra",
    description:
      "Sourced from the mineral-dense soils of Nashik, our fresh onions boast firm, solid globes shielded by multiple intact, papery crimson skins that lock in pungent aroma and moisture. Dried thoroughly in specialized curing sheds, they resist sprouting and moisture decay, ensuring supreme resilience across open-container and reefer maritime shipments to ports worldwide.",
    specs: [
      { label: "Varieties", value: "Nashik Red Onion / Light Red / White Onion" },
      { label: "Caliber / Size", value: "40 mm – 50 mm / 55 mm+ / 60 mm+ Jumbo" },
      { label: "Shape & Moisture", value: "Round Globe, Moisture Dried < 14%" },
      { label: "Pungency", value: "Strong Sharp Aroma & High Dry Matter" },
      { label: "Packaging", value: "10 kg / 20 kg / 25 kg / 50 kg Red Lenomesh Bag" },
      { label: "Storage Temp", value: "Well-Ventilated Ambient / 0°C–2°C Reefer" },
      { label: "Shelf Life", value: "45 – 90 Days under Dry Ventilation" },
      { label: "Availability", value: "Year-Round (Kharif, Late Kharif & Rabi)" },
    ],
    certifications: ["APEDA Export Verified", "AGMARK Grade 1", "Phytosanitary Inspected"],
    highlights: ["Cured Outer Skin", "Sprout-Inhibited", "Heavy-Duty Mesh Bags"],
  },
  {
    id: "turmeric",
    num: "05",
    category: "Spices & Botanicals",
    name: "High-Curcumin Pure Turmeric",
    subtitle: "Salem & Nizamabad Finger • Golden Glow • Therapeutic Curcumin",
    img: "/turmeric.png",
    origin: "Salem (Tamil Nadu) & Nizamabad (Telangana)",
    description:
      "Revered across culinary and nutraceutical industries, our Indian turmeric fingers and whole dried rhizomes offer deep saffron-gold pigmentation and naturally elevated curcumin concentrations (up to 7%). Cured by ancient boiling and sun-basking traditions before mechanical polishing, our turmeric delivers unmatched earthy warmth, antibacterial potency, and pure export grade consistency.",
    specs: [
      { label: "Types Available", value: "Single Polished Fingers, also Double Polished Fingers, Bulbs & Powder" },
      { label: "Curcumin Content", value: "3.5% to 7% High Bio-Active Potency" },
      { label: "Moisture Content", value: "Max 9.5% – 10% (Strictly Dried)" },
      { label: "Extraneous Matter", value: "< 0.5% (Mechanically Cleaned & Sorted)" },
      { label: "Packaging", value: "25 kg / 50 kg Jute Bag or Poly-Lined PP Bags" },
      { label: "Storage Condition", value: "Cool, Dry & Dark Moisture-Free Warehouse" },
      { label: "Shelf Life", value: "24 Months under Standard Storage" },
      { label: "Availability", value: "Round the Year Harvest" },
    ],
    certifications: ["SPICES Board of India", "FSSAI Grade A", "Laboratory Tested"],
    highlights: ["Deep Golden Color", "Zero Adulteration", "High Natural Curcumin"],
  },
];

export default function ProductPage() {
  return (
    <div className="relative min-h-[100svh] w-full overflow-x-hidden selection:bg-[#a68a56] selection:text-white bg-[#f4f2e9]">
      {/* FIXED BACKGROUND (desktop + mobile) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/product-bg.png"
            alt="Vishva Setu Exim Background Pattern Desktop"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
        </div>

        <div className="block md:hidden absolute inset-0">
          <Image
            src="/product-page-mobile-bg.png"
            alt="Vishva Setu Exim Background Pattern Mobile"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f2e9]/10 via-transparent to-[#f4f2e9]/10"></div>
      </div>

      <Navbar />

      <main className="relative z-10 w-full pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24">
        {/* HERO */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-4 sm:pt-8 pb-10 sm:pb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-[#a68a56]/40 shadow-xs mb-5 sm:mb-8"
          >
            <Link href="/" className="text-[11px] sm:text-xs font-medium text-[#5a6259] hover:text-[#0e3b2c] transition-colors">
              Home
            </Link>
            <span className="text-[#a68a56] text-xs font-semibold">•</span>
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0e3b2c] uppercase">
              Export Catalogue
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center w-full"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 w-full">
              <div className="h-[1px] w-6 sm:w-14 bg-[#8d7c5d] shrink-0"></div>
              <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.25em] text-[#5a6259] uppercase text-center">
                Direct From Indian Farms to Global Ports
              </span>
              <div className="h-[1px] w-6 sm:w-14 bg-[#8d7c5d] shrink-0"></div>
            </div>

            <h1 className="font-playfair text-[1.9rem] min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] font-medium tracking-tight mb-4 sm:mb-6">
              <span className="text-[#0e3b2c] block">Our Export Grade</span>
              <span className="text-[#a68a56] italic block">Agricultural Portfolio.</span>
            </h1>

            <p className={`${bodyFont} text-[13px] sm:text-base md:text-lg text-[#4a524a] max-w-3xl leading-relaxed mb-7 sm:mb-10 px-1 sm:px-2`}>
              Each product in our catalogue is sourced directly from vetted farming collectives across India.
              Meticulously sorted, graded for export caliber, and safeguarded with unbroken cold-chain logistics to deliver peak freshness to our international partners.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl px-1 sm:px-2">
              {productList.map((prod) => (
                <a
                  key={prod.id}
                  href={`#${prod.id}`}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#a68a56]/30 text-[11px] sm:text-xs font-semibold text-[#0e3b2c] hover:bg-[#0e3b2c] hover:text-white hover:border-[#0e3b2c] transition-all duration-300 shadow-xs"
                >
                  {prod.name.split(" ")[0]} {prod.name.split(" ")[1] || ""}
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PRODUCT SECTIONS */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-14 sm:gap-24 lg:gap-36 mt-4 sm:mt-10">
          {productList.map((product, index) => {
            const isEven = index % 2 === 1;

            return (
              <div key={product.id} id={product.id} className="scroll-mt-24 sm:scroll-mt-36">
                <div
                  className={`flex flex-col gap-8 sm:gap-12 lg:gap-16 items-center ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* INFORMATION SIDE */}
                  <motion.div
                    className="w-full min-w-0 lg:w-1/2 flex flex-col items-start text-left order-2 lg:order-none"
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0e3b2c] text-white flex items-center justify-center font-playfair text-xs sm:text-sm font-semibold shadow-xs shrink-0">
                        {product.num}
                      </span>
                      <span className={`${bodyFont} text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#a68a56] uppercase`}>
                        {product.category}
                      </span>
                      <span className="h-[1px] w-8 sm:w-10 bg-[#a68a56]/40"></span>
                    </div>

                    <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0e3b2c] font-medium leading-[1.15] mb-2 sm:mb-3 break-words">
                      {product.name}
                    </h2>

                    <p className={`${bodyFont} text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider text-[#8d7c5d] uppercase mb-4 sm:mb-5`}>
                      {product.subtitle}
                    </p>

                    <p className={`${bodyFont} text-[13px] sm:text-sm md:text-base text-[#4a524a] leading-relaxed mb-5 sm:mb-6`}>
                      {product.description}
                    </p>

                    {/* Origin & Highlights */}
                    <div className="w-full p-3.5 sm:p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[#a68a56]/25 shadow-xs mb-5 sm:mb-6 flex flex-col gap-2.5">
                      <div className={`${bodyFont} flex items-start gap-2 text-xs text-[#0e3b2c] font-medium`}>
                        <Globe2 size={16} className="text-[#a68a56] shrink-0 mt-0.5" />
                        <span>
                          <strong>Origin Belt:</strong> {product.origin}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-[#a68a56]/15">
                        {product.highlights.map((h, i) => (
                          <span
                            key={i}
                            className={`${bodyFont} inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[#0e3b2c] bg-[#0e3b2c]/5 px-2 sm:px-2.5 py-1 rounded-md`}
                          >
                            <CheckCircle2 size={12} className="text-[#0e3b2c] shrink-0" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="w-full mb-6 sm:mb-8">
                      <h3 className={`${bodyFont} text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[#5a6259] uppercase mb-3 flex items-center gap-2`}>
                        <Award size={14} className="text-[#a68a56]" />
                        Export Specifications
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                        {product.specs.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-2.5 sm:p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-[#a68a56]/20 shadow-2xs flex flex-col justify-center min-w-0"
                          >
                            <span className={`${bodyFont} text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#8d7c5d]`}>
                              {spec.label}
                            </span>
                            <span className={`${bodyFont} text-xs font-medium text-[#103728] mt-0.5 break-words`}>
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certifications & CTA */}
                    <div className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 pt-4 border-t border-[#a68a56]/30">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        {product.certifications.map((c, cIdx) => (
                          <span
                            key={cIdx}
                            className={`${bodyFont} inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#0e3b2c] bg-white/90 border border-[#a68a56]/30 px-2 sm:px-2.5 py-1 rounded-full shadow-2xs`}
                          >
                            <ShieldCheck size={12} className="text-[#a68a56] shrink-0" />
                            {c}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/#contact`}
                        className={`${bodyFont} inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#0e3b2c] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#134d3a] hover:gap-3 transition-all duration-300 shadow-md group/btn w-full xl:w-auto text-center shrink-0`}
                      >
                        <span>Enquire for Export</span>
                        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>

                  {/* IMAGE SIDE */}
                  <motion.div
                    className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-none"
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#a68a56]/40 shadow-xl sm:shadow-2xl bg-white/80 group">
                      <Image
                        src={product.img}
                        alt={`${product.name} - Vishva Setu Exim`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 500px, 560px"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>

                      <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 z-20">
                        <span className={`${bodyFont} inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#f4f2e9]/90 backdrop-blur-md text-[9px] sm:text-[11px] font-bold tracking-wider text-[#0e3b2c] border border-[#a68a56]/40 shadow-xs uppercase`}>
                          <Sparkles size={11} className="text-[#a68a56]" />
                          Grade-A Export Caliber
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 sm:bottom-4 right-2.5 sm:right-4 z-20">
                        <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0e3b2c]/90 backdrop-blur-md text-[9px] sm:text-[11px] font-medium text-white border border-[#a68a56]/40 shadow-xs">
                          <ThermometerSnowflake size={12} className="text-[#a68a56]" />
                          Cold-Chain Monitored
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-28 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0e3b2c] to-[#08241b] text-white p-6 sm:p-10 md:p-14 shadow-2xl border border-[#a68a56]/40 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8"
          >
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-[#a68a56]/20 pointer-events-none"></div>
            <div className="absolute -right-10 -bottom-10 w-60 h-60 rounded-full border border-[#a68a56]/15 pointer-events-none"></div>

            <div className="flex flex-col text-left max-w-xl relative z-10">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#a68a56] uppercase mb-2">
                Custom Export Solutions
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-3 sm:mb-4">
                Require Custom Bulk Packaging or Private Labelling?
              </h3>
              <p className={`${bodyFont} text-xs sm:text-sm text-[#e5e3da]/80 leading-relaxed`}>
                We cater to customized palletized shipments, CIF / FOB contracts, and dedicated branding boxes for international wholesalers and retail chains across the Middle East, Europe, and Asia.
              </p>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-md bg-[#a68a56] text-[#0e3b2c] text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-[#0e3b2c] transition-all duration-300 shadow-xl w-full md:w-auto text-center"
              >
                <span>Request Custom Quote</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}