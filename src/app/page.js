import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import WhyChooseUs from '@/components/WhyChooseUs';
import GlobalPresence from '@/components/GlobalPresence';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-[#a68a56] selection:text-white">
      <Navbar />
      <main className="flex flex-col w-full m-0 p-0">
        <Hero />
        <About />
        <Products />
        <Process />
        <WhyChooseUs />
        <GlobalPresence />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
