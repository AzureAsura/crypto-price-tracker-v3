'use client'

import { ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import { Users, MapPin } from 'lucide-react';

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

export default function Header() {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-[#1a1a1a] border border-gray-600 rounded-2xl p-6 flex flex-col justify-center h-full shadow-2xl transition-all hover:border-zinc-500">
                <div className="space-y-3">
                    <h1 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none">
                        Cryptocurrency Market
                    </h1>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-2xl">
                        The global digital asset market currently stands at a valuation of <span className="text-white font-bold">$2.61 Trillion</span>. We track real-time price movements, market trends, and liquidity across more than <span className="text-white font-bold">12,450+</span> cryptocurrencies, delivering clear insights into the fast-growing decentralized economy.
                    </p>
                </div>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-600 rounded-2xl p-6 flex flex-col justify-between h-full min-h-[180px] shadow-2xl relative overflow-hidden group transition-all hover:border-zinc-500">
                <div className="flex justify-between items-start relative z-10">
                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                            <MapPin size={10} className="text-blue-500" /> Indonesia Adoption
                        </div>
                        <h2 className="text-3xl font-black text-white tracking-tighter">20,19M</h2>
                    </div>

                    <div className="relative z-10">
                        <span className="text-[10px] font-black text-blue-500 bg-blue-500/10 px-2 py-1 rounded-sm border border-blue-500/20">
                            +52.1% GROWTH
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