"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Insights = () => {
  const insights = [
    {
      imgUrl: "https://raw.githubusercontent.com/adrianhajdin/project_metaverse/main/public/planet-06.png",
      title: "Peluncuran Nirmala Finance bikin Elon Musk ketar-ketir",
      desc: "Teknologi pelacakan aset real-time kami memberikan akurasi data yang belum pernah ada sebelumnya di pasar kripto.",
    },
    {
      imgUrl: "https://raw.githubusercontent.com/adrianhajdin/project_metaverse/main/public/planet-07.png",
      title: "7 tips mudah menguasai analisis pasar dengan terminal Nirmala",
      desc: "Pelajari cara memaksimalkan fitur dashboard untuk memprediksi pergerakan harga koin secara presisi dan efisien.",
    },
    {
      imgUrl: "https://raw.githubusercontent.com/adrianhajdin/project_metaverse/main/public/planet-08.png",
      title: "Dengan satu platform, Anda bisa memantau seluruh dunia kripto",
      desc: "Integrasi API global memungkinkan Anda mengakses ribuan pasangan aset digital hanya dalam satu genggaman.",
    },
  ];

  return (
    <section className="relative py-24 px-4 md:px-0 md:w-[95vw] mx-auto w-full flex flex-col items-center overflow-hidden ">
      
      <div className="flex flex-col items-center mb-16 px-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-[1px] h-4 bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-medium italic">
            Wawasan
          </span>
        </div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl font-bold text-white text-center tracking-tight"
        >
          Insight tentang Nirmala
        </motion.h2>
      </div>

      <div className="flex flex-col gap-10 w-full ">
        {insights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-8 group cursor-pointer w-full"
          >
            <div className="w-full md:w-[270px] h-[200px] md:h-[250px] overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5">
              <img 
                src={item.imgUrl} 
                alt="Insight"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center w-full px-2 md:px-0">
              <h3 className="text-xl md:text-[42px] font-normal leading-tight text-white mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Arrow Button Section */}
            <div className="hidden lg:flex items-center justify-center w-20 h-20 rounded-full border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-300 flex-shrink-0">
              <motion.svg 
                whileHover={{ rotate: -45 }}
                width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="stroke-white group-hover:stroke-black transition-colors"
              >
                <path d="M6.66663 16H25.3333M25.3333 16L18.6666 9.33331M25.3333 16L18.6666 22.6666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Glow Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
};

export default Insights;