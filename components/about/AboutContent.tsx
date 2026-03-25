"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutContent = () => {
  return (
    <section className="relative pt-20 pb-4 md:pb-16 px-4 md:px-0 w-full flex flex-col items-center text-center overflow-hidden">

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
        <p className="text-lg md:text-2xl leading-[1.6] text-white/50 font-normal tracking-tight">
          <span className="text-white font-bold">Nirmala Finance</span> merupakan platform <span className="text-white font-bold italic">crypto price tracker</span> yang dikembangkan di Indonesia dengan memanfaatkan API dari <span className="text-white font-bold">CoinGecko</span>. Dengan efisiensi sistem yang hanya menggunakan <span className="text-white font-bold">30 request per menit</span>, kami menghadirkan pengalaman yang <span className="text-white font-bold">ringan</span>, <span className="text-white font-bold">responsif</span>, dan tetap <span className="text-white font-bold italic">real-time</span>.

          Platform ini dirancang untuk memberikan <span className="text-white font-bold">kemudahan eksplorasi data</span>, dilengkapi dengan fitur <span className="text-white font-bold">diskusi koin</span> dan <span className="text-white font-bold">interaksi global</span>, sehingga Anda dapat memahami pergerakan pasar secara lebih mendalam. Bersama <span className="text-white font-bold">Nirmala Finance</span>, mari <span className="text-white font-bold">optimalkan strategi</span> dan ubah insight menjadi peluang nyata di dunia aset digital.
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