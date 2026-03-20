import React from 'react';
import { ShieldCheck, TrendingUp, Layers, Coins } from 'lucide-react';

const LeftHeader = () => {

    const exchangeData = {
        name: "Binance",
        year_established: 2017,
        country: "Cayman Islands",
        image: "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1706864274",
        trust_score: 9,
        trust_score_rank: 6,
        trade_volume_24h_btc: 207319.13,
        coins: 384,
        pairs: 1281,
        centralized: true,

        top_ticker: {
            base: "BTC",
            target: "USDT",
            last: 69476,
            usd_volume: 1406996874,
            change_24h: 3.12,
        }
    };

    const stats = [
        {
            label: "TRUST RANK",
            value: `#${exchangeData.trust_score_rank}`,
            icon: <ShieldCheck size={12} className="text-green-400" />
        },
        {
            label: "24H VOL (USD)",
            value: `$${(exchangeData.top_ticker.usd_volume / 1e9).toFixed(2)}B`,
            icon: <TrendingUp size={12} className="text-blue-400" />
        },
        {
            label: "COINS",
            value: exchangeData.coins,
            icon: <Coins size={12} className="text-yellow-400" />
        },
        {
            label: "PAIRS",
            value: exchangeData.pairs,
            icon: <Layers size={12} className="text-purple-400" />
        },
    ];

    return (
        <div className="border border-gray-600 rounded-xl p-5 bg-zinc-900/50 backdrop-blur-sm">
            <div className="flex flex-col gap-6 w-full">


                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                        <img
                            src={exchangeData.image}
                            alt={exchangeData.name}
                            className="w-12 h-12 rounded-lg border border-white/10"
                        />
                        <div className="leading-tight">
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold tracking-wide text-white">
                                    {exchangeData.name.toUpperCase()}
                                </h1>
                                {exchangeData.centralized && (
                                    <span className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-400 rounded-full border border-zinc-700">
                                        CEX
                                    </span>
                                )}
                            </div>
                            <p className="text-[11px] text-zinc-500 mt-1">
                                Established {exchangeData.year_established} • {exchangeData.country}
                            </p>
                        </div>
                    </div>


                    <div className="text-right">
                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Trust Score</p>
                        <p className="text-lg font-bold text-green-400">{exchangeData.trust_score}<span className="text-zinc-500 text-sm">/10</span></p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 w-full">


                    <div className="shrink-0">
                        <div className="flex items-baseline gap-2">
                            <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-tighter">Main Market BTC/USDT</p>
                        </div>
                        <div className="flex items-end gap-3 mt-1">
                            <h2 className="text-3xl font-bold tracking-tight text-white">
                                ${exchangeData.top_ticker.last.toLocaleString()}
                            </h2>
                            <div className="text-sm font-semibold mb-1 text-green-400">
                                +{exchangeData.top_ticker.change_24h}%
                            </div>
                        </div>
                        <p className="text-[11px] text-zinc-500 mt-1 uppercase">
                            24h Vol: {exchangeData.trade_volume_24h_btc.toLocaleString()} BTC
                        </p>
                    </div>


                    <div className="flex flex-wrap gap-6 text-sm text-zinc-400 lg:pl-8 lg:border-l lg:border-white/10">
                        {stats.map((item, i) => (
                            <div className="flex flex-col leading-tight" key={i}>
                                <div className="flex items-center gap-1">
                                    <span className="opacity-70">{item.icon}</span>
                                    <span className="text-[10px] tracking-widest text-zinc-500 uppercase">
                                        {item.label}
                                    </span>
                                </div>
                                <span className="text-white font-semibold text-sm">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LeftHeader;