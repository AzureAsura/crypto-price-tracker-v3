'use client'

import { ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import { TrendingUp, Building2 } from 'lucide-react';

export default function ExchangeHeader() {

    const indoGrowthData = [
        { val: 7.5 },
        { val: 10.2 },
        { val: 17.0 },
        { val: 22.9 },
        { val: 13.3 },
        { val: 14.8 },
        { val: 16.5 },
        { val: 18.6 },
        { val: 19.0 },
        { val: 19.6 }
    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">

            <div className="card rounded-2xl p-6 flex flex-col justify-center h-full shadow-2xl transition-all hover:border-zinc-500">
                <div className="space-y-4">

                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        <Building2 size={14} className="text-blue-500" />
                        Bursa Kripso
                    </div>

                    <h1 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tighter leading-tight">
                        Akses untuk Beli dan Jual Aset Digital
                    </h1>

                    <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                        Platform exchange kripto merupakan tempat di mana pengguna di Indonesia dapat membeli, menjual, dan memperdagangkan aset digital seperti Bitcoin dan Ethereum. Dengan menyediakan likuiditas, transparansi harga, serta akses ke pasar global, exchange menjadi fondasi dalam ekosistem kripto.
                    </p>

                </div>
            </div>


            <div className="card rounded-2xl p-6 flex flex-col justify-between h-full min-h-[180px] shadow-2xl relative overflow-hidden group transition-all hover:border-zinc-500">

                <div className="flex justify-between items-start relative z-10">

                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                            <TrendingUp size={15} className="text-blue-500" />
                            Adopsi di Indonesia
                        </div>

                        <h2 className="text-3xl font-black text-white tracking-tighter">
                            19.6 JUTA
                        </h2>

                    </div>


                    <div className="relative z-10">
                        <span className="text-[10px] font-black text-blue-500 bg-blue-500/10 px-2 py-1 rounded-sm border border-blue-500/20">
                            +47% Tahun Terakhir
                        </span>
                    </div>

                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={indoGrowthData}>
                            <defs>
                                <linearGradient id="colorExchange" x1="0" y1="0" x2="0" y2="1">
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
                                fill="url(#colorExchange)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

            </div>

        </div>
    );
}