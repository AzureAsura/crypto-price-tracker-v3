"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      text: "Pantau harga kripto secara langsung dengan data akurat dari CoinGecko, diperbarui secara efisien dan cepat.",
    },
    {
      id: "02",
      text: "Analisis pergerakan pasar dengan data yang terstruktur, membantu Anda memahami tren dan peluang terbaik.",
    },
    {
      id: "03",
      text: "Diskusikan koin favorit Anda dan ambil keputusan trading dengan insight dari komunitas global.",
    },
  ];

  return (
    <section className="relative pt-20 pb-4 md:pb-16 px-4 md:w-[85vw] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 relative flex justify-center items-center"
      >
        <div className="absolute w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full" />
        
        <motion.img 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src="https://static.vecteezy.com/system/resources/previews/008/822/064/large_2x/3d-design-bitcoin-cryptocurrency-white-background-free-png.png" 
          alt="Illustration"
          className="w-[80%] md:w-full max-w-[500px] object-contain relative z-10 drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
        />
      </motion.div>

      <div className="flex-1 flex flex-col gap-8 text-left">
        <div className="flex items-center gap-2">
          <span className="w-[1px] h-4 bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-medium">
            Cara Kerja Nirmala
          </span>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white leading-tighter tracking-tight"
        >
          Mulai pantau dengan beberapa klik
        </motion.h2>

        <div className="flex flex-col gap-8 mt-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center gap-6 group"
            >
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-[24px] card flex items-center justify-center backdrop-blur-md group-hover:bg-blue-600/20 transition-all duration-300">
                <span className="text-white font-bold text-lg">{step.id}</span>
              </div>
              
              <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-[350px]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HowItWorks;