import React from 'react'
import { TrendingUp, TrendingDown, Code2, FileText, Globe, ChevronRight, Info } from 'lucide-react'


const RightHeader = () => {
    return (
        <>
            <div className="bg-black p-6 rounded-xl border border-gray-600 shadow-sm">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center">
                        <Info size={18} className="text-blue-500" />
                    </div>
                    <h2 className="text-xl font-black text-white tracking-tight uppercase">
                        About Bitcoin
                    </h2>
                </div>

                <div className="space-y-4">
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        Bitcoin (BTC) adalah mata uang kripto desentralisasi pertama yang diperkenalkan pada tahun 2008 oleh seseorang atau sekelompok orang dengan nama samaran <span className="text-white font-medium">Satoshi Nakamoto</span>.
                    </p>

                    <p className="text-sm text-zinc-400 leading-relaxed">
                        Berbeda dengan mata uang fiat tradisional, Bitcoin beroperasi tanpa otoritas pusat atau bank sentral. Transaksi diverifikasi oleh node jaringan melalui kriptografi dan dicatat dalam buku besar terdistribusi publik yang disebut <span className="text-blue-400">blockchain</span>.
                    </p>

                </div>
            </div>


            <div className="bg-black p-5 rounded-xl border border-gray-600 shadow-sm">
                <h3 className="text-white font-black text-sm uppercase tracking-tight mb-4 border-b border-white/10 pb-2">
                    Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                    {['Cryptocurrency', 'Store of Value', 'POW'].map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-black uppercase rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>


            <div className="flex flex-col gap-4">
                <div className="bg-black p-5 rounded-xl border border-gray-600 shadow-sm">
                    <h3 className="text-white font-black text-sm uppercase tracking-tight mb-4 border-b border-white/10 pb-2">
                        Official Links
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        <a
                            href="#"
                            className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-gray-600 rounded-lg text-xs font-bold text-white transition-all w-full"
                        >
                            <Globe size={14} className="text-blue-500" />
                            Official Website
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-gray-600 rounded-lg text-xs font-bold text-white transition-all w-full"
                        >
                            <FileText size={14} className="text-orange-500" />
                            Whitepaper
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-gray-600 rounded-lg text-xs font-bold text-white transition-all w-full"
                        >
                            <Code2 size={14} className="text-purple-500" />
                            Source Code
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RightHeader