"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutContent = () => {
  return (
    <section className="relative py-20 px-4 md:px-0 w-full flex flex-col items-center text-center overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex items-center gap-2 mb-8"
      >
        <span className="w-[1px] h-4 bg-white/20" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-medium">
          Tentang Nirmala Finance
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl"
      >
        <p className="text-2xl  leading-[1.6] text-white/50 font-normal tracking-tight">
          <span className="text-white font-bold">Nirmala Finance</span> adalah ekosistem keuangan modern masa depan, di mana Anda bisa memantau pasar kripto dengan data <span className="text-white font-bold italic">real-time</span> yang sangat akurat. Rasakan pengalaman <span className="text-white font-bold">analisis data</span> yang mendalam karena ini adalah revolusi sistem pelacakan aset digital saat ini. Cukup dengan platform kami, Anda dapat dengan mudah <span className="text-white font-bold">mengeksplorasi</span> pergerakan pasar yang Anda inginkan. Mari <span className="text-white font-bold">wujudkan</span> strategi trading Anda menjadi profit nyata dengan memantau lebih jauh ke bawah.
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-16 text-white/30"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>

      {/* Background Glow Kiri & Kanan (Aura) */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full -z-10" />

    </section>
  );
};

export default AboutContent;