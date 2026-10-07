"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // TODO: Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus('success');
          form.current.reset();
          // Reset success message after 5 seconds
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
        }
      );
  };

  return (
    <section id="contact" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/process.png"
          alt="Contact Vishva Setu Exim"
          fill
          className="object-cover object-center"
          quality={100}
        />
        {/* Top and Bottom blend gradients for seamless canvas effect */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#f4f2e9] via-[#f4f2e9]/50 to-transparent"></div>
        {/* Bottom gradient fades into the footer background color if needed, or just standard transparent */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#f4f2e9] via-[#f4f2e9]/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header Content */}
        <motion.div 
          className="text-center flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#8d7c5d]"></div>
            <span className="text-[11px] font-inter font-bold tracking-[0.2em] text-[#5a6259] uppercase">
              Get in Touch
            </span>
            <div className="h-[1px] w-12 bg-[#8d7c5d]"></div>
          </div>

          {/* Main Title */}
          <h2 className="font-playfair text-5xl md:text-[64px] leading-[1.1] font-medium tracking-tight">
            <span className="text-[#0e3b2c] block mb-2">Let&apos;s Build a</span>
            <span className="text-[#a68a56] block">Partnership.</span>
          </h2>
        </motion.div>

        {/* Contact Form Container */}
        <motion.div 
          className="w-full bg-[#f4f2e9]/90 backdrop-blur-md border border-[#a68a56]/30 shadow-2xl rounded-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative subtle gold accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a68a56] to-transparent opacity-50"></div>

          <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="flex flex-col relative group">
                <input 
                  type="text" 
                  name="user_name" 
                  required
                  placeholder="Full Name *"
                  className="w-full bg-transparent border-b border-[#a68a56]/40 focus:border-[#0e3b2c] text-[#0e3b2c] px-2 py-3 outline-none transition-colors placeholder:text-[#5a6259]/60 font-inter peer"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col relative group">
                <input 
                  type="tel" 
                  name="user_mobile" 
                  required
                  placeholder="Mobile Number *"
                  className="w-full bg-transparent border-b border-[#a68a56]/40 focus:border-[#0e3b2c] text-[#0e3b2c] px-2 py-3 outline-none transition-colors placeholder:text-[#5a6259]/60 font-inter"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email ID (Optional) */}
              <div className="flex flex-col relative group">
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="Email ID (Optional)"
                  className="w-full bg-transparent border-b border-[#a68a56]/40 focus:border-[#0e3b2c] text-[#0e3b2c] px-2 py-3 outline-none transition-colors placeholder:text-[#5a6259]/60 font-inter"
                />
              </div>

              {/* Location */}
              <div className="flex flex-col relative group">
                <input 
                  type="text" 
                  name="user_location" 
                  required
                  placeholder="Your Location / Country *"
                  className="w-full bg-transparent border-b border-[#a68a56]/40 focus:border-[#0e3b2c] text-[#0e3b2c] px-2 py-3 outline-none transition-colors placeholder:text-[#5a6259]/60 font-inter"
                />
              </div>
            </div>

            {/* Product Enquiry */}
            <div className="flex flex-col relative group">
              <input 
                type="text" 
                name="enquiry_product" 
                required
                placeholder="Product you want to enquire for *"
                className="w-full bg-transparent border-b border-[#a68a56]/40 focus:border-[#0e3b2c] text-[#0e3b2c] px-2 py-3 outline-none transition-colors placeholder:text-[#5a6259]/60 font-inter"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col relative group">
              <textarea 
                name="message" 
                rows="4"
                placeholder="Any message or specific requirements..."
                className="w-full bg-transparent border-b border-[#a68a56]/40 focus:border-[#0e3b2c] text-[#0e3b2c] px-2 py-3 outline-none transition-colors placeholder:text-[#5a6259]/60 font-inter resize-none"
              ></textarea>
            </div>

            {/* Submit Button & Status */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-4">
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full sm:w-auto px-10 py-4 bg-[#0e3b2c] text-white font-inter font-medium tracking-wide rounded-sm hover:bg-[#134d3a] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <span className="text-green-700 font-inter text-sm font-medium">
                  Message sent successfully! We will contact you soon.
                </span>
              )}
              {status === 'error' && (
                <span className="text-red-600 font-inter text-sm font-medium">
                  Failed to send message. Please try again.
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
