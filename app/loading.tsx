"use client";

import { motion } from "framer-motion";

export default function Loading() {
  const bars = Array.from({ length: 5 });

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#030f1f] text-white p-8 md:p-12 font-sans">

      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold tracking-[0.15em] uppercase text-white">
          Nirmala Finance
        </span>
        <span className="text-[10px] tracking-widest uppercase text-white/30 font-mono">
          Est. 2026
        </span>
      </div>

      <div className="flex flex-col items-center justify-center gap-10">

        {/* Bar loader */}
        <div className="flex items-end gap-[6px] h-12">
          {bars.map((_, i) => (
            <motion.div
              key={i}
              className="w-[6px] rounded-sm bg-white"
              animate={{ scaleY: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
              style={{ originY: 1, height: "100%" }}
            />
          ))}
        </div>

        <motion.p
          className="text-2xl md:text-3xl font-bold tracking-[0.3em] uppercase text-white"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading
        </motion.p>

        <motion.p
          className="text-[11px] font-medium uppercase tracking-[0.4em] text-white/30"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Sinkronisasi Data Pasar
        </motion.p>
      </div>

      <div className="flex justify-end items-end">
        <motion.div
          className="flex gap-1"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1 h-1 rounded-full bg-white/40 inline-block"
            />
          ))}
        </motion.div>
      </div>

    </div>
  );
}