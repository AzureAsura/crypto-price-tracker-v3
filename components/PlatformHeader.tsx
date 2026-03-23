'use client'

import { ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import { Layers, Network } from 'lucide-react';

export default function PlatformHeader() {

    const platformGrowthData = [
        { val: 30 },
        { val: 45 },
        { val: 60 },
        { val: 85 },
        { val: 110 },
        { val: 140 },
        { val: 180 },
        { val: 220 },
        { val: 260 },
        { val: 310 }
    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-10 pt-24 px-4 md:px-0 md:w-[95vw] mx-auto">

            <div className="card rounded-2xl p-6 flex flex-col justify-center h-full shadow-2xl transition-all hover:border-zinc-500">
                <div className="space-y-4">

                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        <Layers size={14} className="text-blue-500" />
                        Platform Aset
                    </div>

                    <h1 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tighter leading-tight">
                        Jaringan & Ekosistem Blockchain
                    </h1>

                    <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                        Platform aset merupakan jaringan blockchain tempat aset digital dibuat dan dijalankan. Platform seperti Ethereum atau Binance Smart Chain memungkinkan penggunaan smart contract, aplikasi terdesentralisasi, serta ekosistem token yang mendukung perkembangan industri kripto secara luas.
                    </p>

                </div>
            </div>


            <div className="card rounded-2xl p-6 flex flex-col justify-between h-full min-h-[180px] shadow-2xl relative overflow-hidden group transition-all hover:border-zinc-500">

                <div className="flex justify-between items-start relative z-10">

                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                            <Network size={15} className="text-blue-500" />
                            Jaringan Blockchain yang Aktif
                        </div>

                        <h2 className="text-3xl font-black text-white tracking-tighter">
                            310+
                        </h2>

                    </div>

                    <div className="relative z-10">
                        <span className="text-[10px] font-black text-blue-500 bg-blue-500/10 px-2 py-1 rounded-sm border border-blue-500/20">
                           Perkembangan Pesat
                        </span>
                    </div>

                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={platformGrowthData}>
                            <defs>
                                <linearGradient id="colorPlatform" x1="0" y1="0" x2="0" y2="1">
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
                                fill="url(#colorPlatform)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

            </div>

        </div>
    );
}