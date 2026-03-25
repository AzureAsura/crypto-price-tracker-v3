"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
    return (
        <section className="relative min-h-[50vh] md:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 md:pt-24 px-4">

            <div className="relative w-full flex flex-col items-center">

                <div className="relative z-20 text-center mb-0 md:mb-[-50px] px-4 w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-[10vw] font-black leading-[0.8] tracking-tighter text-white uppercase flex flex-col items-center"
                    >
                        <span className="block w-full">NIRMALA</span>
                        <span className="block w-full">FINANCE</span>
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative md:w-full md:max-w-6xl aspect-[15/10] md:aspect-[21/9] mt-[-40px] md:mt-[-100px] rounded-tr-[40px] md:rounded-tr-[100px] rounded-bl-[40px] md:rounded-bl-[100px] overflow-hidden border border-white/10 shadow-2xl mx-auto"
                >
                   

                    <img
                        src="/aboutabout.webp"
                        alt="Space Background"
                        className="w-full h-full object-cover scale-110 brightness-75"
                    />
                </motion.div>

            </div>
            <div className="absolute top-1/4 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-600/10 blur-[80px] md:blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-1/4 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-600/10 blur-[80px] md:blur-[120px] rounded-full -z-10" />

        </section>
    );
};

export default AboutHero;