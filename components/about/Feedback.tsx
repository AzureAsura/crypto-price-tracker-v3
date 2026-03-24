"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Feedback = () => {
  return (
    <section className="relative py-20 w-full flex flex-col lg:flex-row gap-10 px-4 md:px-0 md:w-[95vw] mx-auto overflow-hidden">

      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col p-8 md:p-12 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-600/10 blur-[80px] -z-10 group-hover:bg-blue-600/20 transition-colors" />
        
        <div className="relative z-10">
          <h4 className="font-bold text-2xl md:text-3xl text-white mb-2">
            Made Paramasura
          </h4>
          <p className="text-sm md:text-lg text-white/50 mb-6 uppercase tracking-widest">
            Founder | Nirmala Finance
          </p>
          <p className="text-lg md:text-2xl leading-[1.6] text-white italic opacity-80">
            “Dengan perkembangan teknologi saat ini, Nirmala Finance hadir untuk mempermudah akses data pasar kripto secara transparan. Platform ini bukan sekadar alat, tapi jembatan menuju Web 3.0 yang lebih efisien bagi semua orang.”
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative flex-1 flex justify-center items-center min-h-[450px] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl"
      >
        <img 
          src="https://raw.githubusercontent.com/adrianhajdin/project_metaverse/main/public/planet-09.png" 
          alt="Crypto Journey"
          className="w-full h-full object-cover rounded-[32px]"
        />

      </motion.div>

      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default Feedback;