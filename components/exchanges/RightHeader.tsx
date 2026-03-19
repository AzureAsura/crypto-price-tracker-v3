import React from 'react'
import {  Globe, Info, MessageCircle, Twitter, } from 'lucide-react'

const RightHeader = () => {

    const exchange = {
        name: "Binance",
        year: 2017,
        country: "Cayman Islands",
        url: "https://www.binance.com/",
        reddit_url: "https://www.reddit.com/r/binance/",
        twitter: "binance",
        medium: "https://medium.com/binanceexchange",
        centralized: true,
        trust_score: 9
    }

    return (
        <div className="flex flex-col gap-4">

            <div className="bg-black p-6 rounded-xl border border-gray-600 shadow-sm">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center">
                        <Info size={18} className="text-blue-500" />
                    </div>
                    <h2 className="text-xl font-black text-white tracking-tight uppercase">
                        About {exchange.name}
                    </h2>
                </div>

                <div className="space-y-4">
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        {exchange.name} adalah bursa kripto terpusat (CEX) yang didirikan pada tahun <span className="text-white font-medium">{exchange.year}</span>. Saat ini berbasis di <span className="text-white font-medium">{exchange.country}</span>.
                    </p>

                    <p className="text-sm text-zinc-400 leading-relaxed">
                        Platform ini memiliki tingkat kepercayaan tinggi dengan Trust Score <span className="text-blue-400 font-bold">{exchange.trust_score}/10</span>, menyediakan ratusan aset digital untuk diperdagangkan secara global.
                    </p>
                </div>
            </div>


            <div className="bg-black p-5 rounded-xl border border-gray-600 shadow-sm">
                <h3 className="text-white font-black text-sm uppercase tracking-tight mb-4 border-b border-white/10 pb-2">
                    Platform Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                    {['Centralized', 'Spot', 'Derivatives', 'High Liquidity'].map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-black uppercase rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>


            <div className="bg-black p-5 rounded-xl border border-gray-600 shadow-sm">
                <h3 className="text-white font-black text-sm uppercase tracking-tight mb-4 border-b border-white/10 pb-2">
                    Official Links
                </h3>
                <div className="flex flex-wrap gap-2">
                    <a
                        href={exchange.url}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-gray-600 rounded-lg text-xs font-bold text-white transition-all w-full"
                    >
                        <Globe size={14} className="text-blue-500" />
                        Official Website
                    </a>
                    <a
                        href={`https://twitter.com/${exchange.twitter}`}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-gray-600 rounded-lg text-xs font-bold text-white transition-all w-full"
                    >
                        <Twitter size={14} className="text-sky-400" />
                        Twitter / X
                    </a>
                    <a
                        href={exchange.reddit_url}
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-gray-600 rounded-lg text-xs font-bold text-white transition-all w-full"
                    >
                        <MessageCircle size={14} className="text-orange-500" />
                        Reddit Community
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RightHeader