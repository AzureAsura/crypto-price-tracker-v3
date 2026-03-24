"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black text-white p-10 font-sans tracking-tight">

      <div className="flex justify-between items-start">
        <div className="text-xl font-black  opacity-90">NIRMALA FINANCE</div>
        <div className="text-[10px] opacity-40 font-mono tracking-widest uppercase">Est. 2026</div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="text-6xl md:text-8xl font-bold italic tracking-tighter flex items-baseline gap-1">
          <motion.span animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}>LOADING</motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className=""
          >
            .....
          </motion.span>
        </div>
        <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-white/30 font-medium">
          Sinkronisasi Data Pasar
        </p>
      </div>

    
        
 
    </div>
  );
}