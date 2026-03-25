"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChartBar, Globe, MessagesSquare, Sparkles } from 'lucide-react';

const WhatsNew = () => {
    const features = [
        {
            icon: <MessagesSquare />,
            title: "Forum Diskusi Aktif",
            desc: "Terhubung dengan pengguna lain untuk berbagi insight, dan analisis terhadap berbagai aset kripto secara real-time.",
        },
        {
            icon: <Sparkles />,
            title: "UI Modern & Nyaman",
            desc: "Desain yang bersih dan intuitif memberikan pengalaman penggunaan yang lebih nyaman dan fokus saat memantau pasar.",
        }
    ];

    return (
        <section className="relative pt-20 pb-4 md:pb-16 w-full px-4 md:px-0 md:w-[95vw] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 overflow-hidden ">

            <div className="flex-1 flex flex-col gap-8 text-left z-10 w-full">
                <div className="flex items-center gap-2">
                    <span className="w-[1px] h-4 bg-white/20" />
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-medium">
                        Apa yang Baru?
                    </span>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-white leading-tighter tracking-tight"
                >
                    Ada yang baru dari Nirmala?
                </motion.h2>

                <div className="flex flex-col sm:flex-row gap-8 mt-4 w-full">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex-1 flex flex-col gap-4 p-6 rounded-[24px] card"
                        >
                            <div className="w-14 h-14 rounded-[18px] bg-white/10 flex items-center justify-center text-2xl backdrop-blur-lg border border-white/10 text-blue-500">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white">
                                {feature.title}
                            </h3>

                            <p className="text-white/40 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex-1 relative flex justify-center md:justify-end items-end w-full min-h-[300px] md:min-h-[500px]"
            >
                <motion.img
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    src="/logo.svg"
                    alt="Planet Illustration"
                    className="w-[80%] md:w-full max-w-[500px] object-contain relative z-10 drop-shadow-[0_0_80px_rgba(59,130,246,0.2)]"
                />
            </motion.div>

        </section>
    );
};

export default WhatsNew;