"use client";

import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const DESKTOP_BG = "/process-bg.png";
const MOBILE_BG = "/mobile-bg.png"; // 👈 your phone bg filename

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 lg:h-7 lg:w-7"
  >
    {children}
  </svg>
);

const icons = {
  sourcing: (
    <Icon>
      <path d="M12 21v-9" />
      <path d="M12 12c0-4 2.5-6.5 6.5-6.5C18.5 9.5 16 12 12 12Z" />
      <path d="M12 14c0-3-2-5-5-5 0 3 2 5 5 5Z" />
    </Icon>
  ),
  quality: (
    <Icon>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </Icon>
  ),
  export: (
    <Icon>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="m3 8 9 5 9-5" />
      <path d="M12 13v8" />
    </Icon>
  ),
  shipping: (
    <Icon>
      <path d="M3 17h18l-2 4H5l-2-4Z" />
      <path d="M5 17V11h14v6" />
      <path d="M9 11V7h6v4" />
      <path d="M12 3v4" />
    </Icon>
  ),
  delivery: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z" />
    </Icon>
  ),
};

const leftSteps = [
  { id: 1, icon: icons.sourcing, title: "Sourcing", desc: "Direct procurement from trusted farmers across India.", offset: "" },
  { id: 2, icon: icons.quality, title: "Quality & Processing", desc: "Careful grading, quality checks, and compliant packaging.", offset: "lg:translate-x-4" },
  { id: 3, icon: icons.export, title: "Export & Logistics", desc: "Documentation, customs clearance, and seamless logistics management.", offset: "" },
];

const rightSteps = [
  { id: 4, icon: icons.shipping, title: "Global Shipping", desc: "Reliable shipping through our global network of partners.", offset: "" },
  { id: 5, icon: icons.delivery, title: "Delivery to Markets", desc: "Timely delivery to international markets with consistent support.", offset: "" },
];

const TOTAL_STEPS = leftSteps.length + rightSteps.length;

const StepCard = ({ id, icon, offset, activeId, onSelect }) => {
  const { t } = useTranslation();
  const isActive = activeId === id;
  const title = t(`process.steps.${id}.title`);
  const desc = t(`process.steps.${id}.desc`);

  return (
    <div className={`mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:w-[340px] ${offset}`}>
      <motion.button
        type="button"
        onClick={() => onSelect(id)}
        aria-pressed={isActive}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        className={`flex w-full items-center gap-3 rounded-[44px] py-2.5 pl-3 pr-5 text-left backdrop-blur-sm transition-all duration-300 lg:gap-4 lg:py-4 lg:pl-5 lg:pr-7 ${isActive
            ? "bg-[#fbf7ee]/95 shadow-[0_10px_30px_rgba(120,100,60,0.22),0_0_0_1px_rgba(166,138,86,0.45)]"
            : "bg-[#fbf7ee]/70 shadow-[0_6px_24px_rgba(120,100,60,0.12),0_0_0_1px_rgba(166,138,86,0.15)] hover:bg-[#fbf7ee]/95"
          }`}
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 lg:h-14 lg:w-14 ${isActive
              ? "border-[#0b3d2c] bg-[#0b3d2c] text-white shadow-[0_0_0_4px_rgba(11,61,44,0.12)]"
              : "border-[#e3d6b8] bg-[#fffdf7] text-[#0b3d2c]"
            }`}
        >
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3
            className="text-sm font-semibold leading-tight text-[#0b3d2c] lg:text-lg"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {title}
          </h3>
          <p className={`${montserrat.className} mt-0.5 text-[11px] leading-snug text-[#5b5b52] lg:mt-1 lg:text-[13px]`}>
            {desc}
          </p>
        </div>
      </motion.button>
    </div>
  );
};

export default function ProcessSection() {
  const [activeId, setActiveId] = useState(1);
  const { t } = useTranslation();


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prev) => (prev === TOTAL_STEPS ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id = "process" className="relative w-full overflow-hidden bg-[#f4f2e9] px-5 pb-8 pt-[8vw] md:px-12 lg:min-h-[1100px] lg:px-6 lg:pb-28 lg:pt-28">
      {/* Desktop background (unchanged) */}
      <div
        className="absolute inset-0 hidden bg-cover bg-bottom bg-no-repeat lg:block"
        style={{ backgroundImage: `url('${DESKTOP_BG}')` }}
        aria-hidden="true"
      />

      {/* Mobile / tablet background: full width, natural proportions, covers heading too */}
      <div
        className="absolute inset-0 bg-[length:100%_auto] bg-top bg-no-repeat lg:hidden"
        style={{ backgroundImage: `url('${MOBILE_BG}')` }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <span className="h-px w-10 bg-[#8a8a7a] sm:w-20" />
            <span className={`font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-[#5b5b52] sm:text-xs`}>
              {t("process.eyebrow")}
            </span>
            <span className="h-px w-10 bg-[#8a8a7a] sm:w-20" />
          </div>

          <h2 className="font-playfair mt-3 text-[9vw] leading-[1.15] lg:mt-8 lg:text-7xl">
            <span className="block text-[#0b3d2c]">{t("process.titleLine1")}</span>
            <span className="mt-1 block text-[#a98a52]">{t("process.titleLine2")}</span>
          </h2>
        </div>

        {/* Gap between heading and globe (desktop only) */}
        <div className="h-0 lg:h-28" aria-hidden="true" />

        {/* Steps + globe space */}
        <div className="mx-auto grid max-w-none items-center gap-1.5 lg:grid-cols-[340px_minmax(0,1fr)_340px] lg:gap-6 lg:gap-86">
          {/* Mobile globe space (globe is part of the bg image) */}
          <div className="h-[62vw] lg:hidden" aria-hidden="true" />

          <div className="flex flex-col gap-1.5 lg:justify-self-start lg:gap-5 lg:-translate-x-12 xl:-translate-x-18">
            {leftSteps.map((s) => (
              <div key={s.id} className={s.id === 3 ? "hidden lg:block" : ""}>
                <StepCard {...s} activeId={activeId} onSelect={setActiveId} />
              </div>
            ))}
          </div>

          {/* Globe space (desktop) */}
          <div className="hidden h-[480px] lg:block" aria-hidden="true" />

          <div className="flex flex-col gap-1.5 lg:gap-7 lg:pt-10">
            {rightSteps.map((s) => (
              <StepCard key={s.id} {...s} activeId={activeId} onSelect={setActiveId} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-28 sm:h-48 bg-gradient-to-b from-[#f4f2e9] via-[#f4f2e9]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-48 bg-gradient-to-t from-[#f4f2e9] via-[#f4f2e9]/50 to-transparent"></div>
    </section>
  );
}