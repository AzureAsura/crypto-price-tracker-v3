'use client'

import { ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import { Users, MapPin, Coins } from 'lucide-react';

const indoGrowthData = [
    { val: 13.3 },
    { val: 13.9 },
    { val: 13.6 },
    { val: 14.8 },
    { val: 16.5 },
    { val: 16.1 },
    { val: 17.8 },
    { val: 18.5 },
    { val: 19.2 },
    { val: 20.1 }
];

export default function TrendingHeader() {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

             <div className="card rounded-2xl p-6 flex flex-col justify-center h-full shadow-2xl transition-all hover:border-zinc-500">
                <div className="space-y-4">

                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        <Coins size={14} className="text-blue-500" />
                        Berdasarkan Tren
                    </div>

                    <h1 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tighter leading-tight">
                        Pasar Kripto indonesia
                    </h1>

                    <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                   Menampilkan aset kripto yang sedang tren berdasarkan aktivitas pasar, pergerakan harga, dan minat pengguna secara real-time, sehingga kamu dapat dengan mudah mengidentifikasi peluang dan mengikuti dinamika pasar terkini.
                    </p>

                </div>
            </div>


            <div className="card rounded-2xl p-6 flex flex-col justify-between h-full min-h-[180px] shadow-2xl relative overflow-hidden group transition-all hover:border-zinc-500">
                <div className="flex justify-between items-start relative z-10">
                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                            <MapPin size={15} className="text-blue-500" />
                            Adopsi Di Indonesia
                        </div>
                        <h2 className="text-3xl font-black text-white tracking-tighter">20,19 JUTA</h2>
                    </div>

                    <div className="relative z-10">
                        <span className="text-[10px] font-black text-blue-500 bg-blue-500/10 px-2 py-1 rounded-sm border border-blue-500/20">
                            +52.1% PENINGKATAN
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={indoGrowthData}>
                            <defs>
                                <linearGradient id="colorIndo" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <YAxis hide domain={['dataMin', 'dataMax']} />
                            <Area
                                type="monotone"
                                dataKey="val"
                                stroke="#2563eb"
                                strokeWidth={3}
                                fill="url(#colorIndo)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}