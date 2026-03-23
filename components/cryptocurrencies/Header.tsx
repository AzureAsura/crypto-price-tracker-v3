'use client'

import { MapPin, Coins, ArrowUpRight, ArrowDownRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Header({ data }: { data: any[] }) {

    const trendingList = data?.slice(0, 5) || [];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card rounded-2xl p-6 flex flex-col justify-center h-full shadow-2xl">
                <div className="space-y-4">

                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        <Coins size={14} className="text-blue-500" />
                        berdasarkan Kapitalisasi pasar
                    </div>

                    <h1 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tighter leading-tight">
                        Pasar Kripto indonesia
                    </h1>

                    <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                        Pasar aset digital global saat ini memiliki valuasi sekitar <span className="text-white font-bold">$2.61 Triliun</span>. Kami memantau pergerakan harga secara real-time, tren pasar, dan likuiditas dari lebih dari <span className="text-white font-bold">12.450+</span> aset kripto, menghadirkan insight yang jelas dalam ekosistem ekonomi terdesentralisasi yang terus berkembang.
                    </p>

                </div>
            </div>

            <div className="card rounded-2xl p-6 flex flex-col justify-between h-auto md:h-[200px] shadow-2xl relative ">
                <div className="flex justify-between items-center z-10 mb-4 md:mb-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        <Coins size={14} className="text-blue-500" />
                        Aset Sedang Tren
                    </div>

                    <Link href="/trending" className="flex items-center gap-1 text-[10px] font-black text-blue-500 hover:text-white uppercase tracking-widest transition-colors shrink-0">
                        Lihat <span className="hidden sm:inline">Semua</span> <ChevronRight size={12} />
                    </Link>
                </div>

                <div className="space-y-2 md:space-y-1 z-10">
                    {trendingList.map((coin) => {
                        const isPositive = coin.price_change_percentage_24h > 0;
                        return (
                            <div key={coin.id} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0 md:border-0">
                                <div className="flex items-center gap-2">
                                    <img src={coin.image} alt="" className="w-4 h-4 object-contain shrink-0" />
                                    <span className="text-[11px] font-black text-white uppercase tracking-tighter">{coin.symbol}</span>
                                </div>

                                <div className="flex items-center gap-2 md:gap-4">
                                    <span className="text-[10px] font-bold text-white whitespace-nowrap">
                                        IDR {coin.current_price.toLocaleString('id-ID', { maximumFractionDigits: 0 })}
                                    </span>
                                    <div className={`flex items-center text-[10px] font-black w-12 justify-end ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                        {isPositive ? '+' : ''}{coin.price_change_percentage_24h.toFixed(1)}%
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}