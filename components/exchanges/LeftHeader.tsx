import React from 'react'

const LeftHeader = ({ data }: any) => {
    if (!data) return null;

    console.log(data)

    const mainTicker = data?.tickers?.[0];


    const safeLocale = (num: number | null | undefined) => {
        return num ? num.toLocaleString('id-ID') : "---"
    }

    const mainStats = [
        {
            label: "TOP PAIR VOL",
            value: mainTicker?.volume ? mainTicker.volume.toLocaleString('id-ID', { maximumFractionDigits: 0 }) : "---",
        },
        {
            label: "TRUST RANK",
            value: `#${data.trust_score_rank || '---'}`,
        },
        {
            label: "ACTIVE PAIRS",
            value: data.tickers?.length || "---",
        },
    ]

    return (
        <div className="card rounded-2xl p-6 shadow-2xl relative overflow-hidden">


            <div className="flex flex-col gap-4 w-full relative z-10">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4 md:gap-5">
                        <div className="p-1.5 bg-zinc-900 rounded-full border border-gray-700">
                            <img src={data.image} className="w-10 h-10 md:w-12 md:h-12 rounded-full" alt={data.name} />
                        </div>

                        <div className="leading-tight">
                            <h1 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2">
                                {data.name.toUpperCase()}
                                <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[11px] rounded font-bold border border-zinc-700 uppercase">
                                    {data.centralized ? 'CEX' : 'DEX'}
                                </span>
                            </h1>
                            <p className="text-xs md:text-sm font-semibold text-zinc-500 tracking-wide mt-1 uppercase">
                                {data.country || 'Global'} • Established {data.year_established || 'N/A'}
                            </p>
                        </div>
                    </div>
                </div>



                <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8">
                    <div className="space-y-3">

                        <div className="space-y-1">
                            <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-bold">
                                24h Trading Volume
                            </span>
                            <div className="flex items-baseline gap-3">
                                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none">
                                    {data.trade_volume_24h_btc ? safeLocale(data.trade_volume_24h_btc) : '---'}
                                </h2>

                                <span className="text-sm md:text-base text-zinc-500 font-semibold uppercase">BTC</span>
                            </div>
                        </div>



                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                                TRUST SCORE: {data.trust_score}/10
                            </div>
                            <span className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">
                                Verified Exchange
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:pl-10 lg:border-l lg:border-zinc-600">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-semibold">
                                Spread (Avg)
                            </span>
                            <span className="text-base md:text-lg text-white font-bold tracking-tight">
                                {mainTicker?.bid_ask_spread_percentage?.toFixed(4) || '0.00'}%
                            </span>
                        </div>
                    </div>
                </div>

                <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                    {mainStats.map((item, i) => (
                        <div
                            key={i}
                            className="flex md:flex-col items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-gray-600"
                        >
                            <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
                                {item.label}
                            </span>
                            <span className="text-sm font-bold text-white tracking-tight uppercase">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default LeftHeader