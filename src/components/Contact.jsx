"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTranslation } from "@/i18n/useTranslation";

import { Montserrat, DM_Serif_Display } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: Replace these with your actual EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setStatus("success");
        form.current.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      },
    );
  };

  // Native validation bubbles use the browser's language; show the site's instead.
  const handleInvalid = (e) => {
    const field = e.target;
    if (field.validity.valueMissing)
      field.setCustomValidity(t("contact.validation.required"));
    else if (field.validity.typeMismatch)
      field.setCustomValidity(t("contact.validation.email"));
  };
  const clearValidity = (e) => e.target.setCustomValidity?.("");

  return (
    <section
      id="contact"
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden py-16 sm:py-24 md:py-32"
    >
      {/* Background Images with Mobile Design Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background Image (hidden on mobile) */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/contact.jpeg"
            alt={t("contact.bgAlt")}
            fill
            className="object-cover object-center"
            quality={95}
          />
        </div>

        {/* Mobile Background Image Placeholder (Replace /contact-mobile-bg.png with your mobile design) */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/contact-mobile-bg.png"
            alt={t("contact.bgMobileAlt")}
            fill
            className="object-cover object-center"
            quality={95}
          />
        </div>

        {/* Top and Bottom blend gradients for seamless canvas effect */}
        <div className="absolute top-0 left-0 right-0 h-28 sm:h-48 bg-gradient-to-b from-[#f4f2e9] via-[#f4f2e9]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-48 bg-gradient-to-t from-[#f4f2e9] via-[#f4f2e9]/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header Content */}
        <motion.div
          className="text-center flex flex-col items-center mb-10 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d]"></div>
            <span
              className={`${dmSerif.className} text-[10px] sm:text-[11px] font-normal tracking-[0.2em] text-[#5a6259] uppercase`}
            >
              {t("contact.eyebrow")}
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#8d7c5d]"></div>
          </div>

          {/* Main Title */}
          <h2
            className={`${dmSerif.className} text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.12] font-normal tracking-tight`}
          >
            <span className="text-[#0e3b2c] block mb-1 sm:mb-2">
              {t("contact.titleLine1")}
            </span>
            <span className="text-[#a68a56] block">
              {t("contact.titleLine2")}
            </span>
          </h2>
        </motion.div>

        {/* Contact Form Container */}
        <motion.div
          className="w-full bg-[#f4f2e9]/92 backdrop-blur-md border border-[#a68a56]/30 shadow-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative subtle gold accent */}
          <div className="absolute top-0 start-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a68a56] to-transparent opacity-50"></div>

          <form
            ref={form}
            onSubmit={sendEmail}
            onInvalidCapture={handleInvalid}
            onInputCapture={clearValidity}
            className="w-full flex flex-col gap-6 sm:gap-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Name */}
              <div className="flex flex-col relative group">
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder={t("contact.fields.name")}
                  aria-label={t("contact.fields.name")}
                  className={`w-full bg-transparent border-b border-[#a68a56]/40 focus:border-[#0e3b2c] text-[#0e3b2c] px-2 py-2.5 sm:py-3 outline-none transition-colors placeholder:text-[#5a6259]/60 font-body text-sm sm:text-base`}
                />
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col relative group">
                <input
                  type="tel"
                  name="user_mobile"
                  dir="ltr"
                  required
                  placeholder={t("contact.fields.mobile")}
                  aria-label={t("contact.fields.mobile")}
                  className={`w-full bg-transparent border-b border-[#a68a56]/40 focus:border-[#0e3b2c] text-[#0e3b2c] px-2 py-2.5 sm:py-3 outline-none transition-colors placeholder:text-[#5a6259]/60 font-body text-sm sm:text-base rtl:text-right`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Email ID (Optional) */}
              <div className="flex flex-col relative group">
                <input
                  type="email"
                  name="user_email"
                  dir="ltr"
                  placeholder={t("contact.fields.email")}
                  aria-label={t("contact.fields.email")}
                  className={`w-full bg-transparent border-b border-[#a68a56]/40 focus:border-[#0e3b2c] text-[#0e3b2c] px-2 py-2.5 sm:py-3 outline-none transition-colors placeholder:text-[#5a6259]/60 font-body text-sm sm:text-base rtl:text-right`}
                />
              </div>

              {/* Location */}
              <div className="flex flex-col relative group">
                <input
                  type="text"
                  name="user_location"
                  required
                  placeholder={t("contact.fields.location")}
                  aria-label={t("contact.fields.location")}
                  className={`w-full bg-transparent border-b border-[#a68a56]/40 focus:border-[#0e3b2c] text-[#0e3b2c] px-2 py-2.5 sm:py-3 outline-none transition-colors placeholder:text-[#5a6259]/60 font-body text-sm sm:text-base`}
                />
              </div>
            </div>

            {/* Product Enquiry */}
            <div className="flex flex-col relative group">
              <input
                type="text"
                name="enquiry_product"
                required
                placeholder={t("contact.fields.product")}
                aria-label={t("contact.fields.product")}
                className={`w-full bg-transparent border-b border-[#a68a56]/40 focus:border-[#0e3b2c] text-[#0e3b2c] px-2 py-2.5 sm:py-3 outline-none transition-colors placeholder:text-[#5a6259]/60 font-body text-sm sm:text-base`}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col relative group">
              <textarea
                name="message"
                rows="4"
                placeholder={t("contact.fields.message")}
                aria-label={t("contact.fields.message")}
                className={`w-full bg-transparent border-b border-[#a68a56]/40 focus:border-[#0e3b2c] text-[#0e3b2c] px-2 py-2.5 sm:py-3 outline-none transition-colors placeholder:text-[#5a6259]/60 font-body text-sm sm:text-base`}
              ></textarea>
            </div>

            {/* Submit Button & Status */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mt-2 sm:mt-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-[#0e3b2c] text-white font-body text-sm sm:text-base font-medium tracking-wide rounded-md hover:bg-[#134d3a] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl`}
              >
                {status === "sending"
                  ? t("contact.sending")
                  : t("contact.submit")}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <span
                  role="status"
                  className={`font-body text-green-700 text-xs sm:text-sm font-medium text-center`}
                >
                  {t("contact.success")}
                </span>
              )}
              {status === "error" && (
                <span
                  role="alert"
                  className={`font-body text-red-600 text-xs sm:text-sm font-medium text-center`}
                >
                  {t("contact.error")}
                </span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
