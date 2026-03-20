import React from 'react'

const LeftHeader = ({ data }: any) => {
   if (!data) return null;

    const priceChange = data.price_change_percentage_24h ?? 0
    const isPositive = priceChange > 0

    const safeLocale = (num: number | null | undefined) => {
        return num ? num.toLocaleString('id-ID') : "---"
    }

    const mainStats = [
        {
            label: "Market Cap",
            value: safeLocale(data.market_cap),
        },
        {
            label: "VOL 24H",
            value: safeLocale(data.total_volume),
        },
        {
            label: "SUPPLY",
            value: safeLocale(data.circulating_supply),
        },
    ]

    const formatCompact = (num: number | null | undefined) => {
        if (num === null || num === undefined || isNaN(num)) return "---"
        
        const absoluteNum = Math.abs(num)
        if (absoluteNum >= 1e12) return (num / 1e12).toFixed(2) + "T"
        if (absoluteNum >= 1e9) return (num / 1e9).toFixed(2) + "B"
        if (absoluteNum >= 1e6) return (num / 1e6).toFixed(2) + "M"
        if (absoluteNum >= 1e3) return (num / 1e3).toFixed(2) + "K"
        return num.toFixed(2)
    }

    const priceRange = [
        {
            label: "24h Low",
            value: formatCompact(data.low_24h),
        },
        {
            label: "24h High",
            value: formatCompact(data.high_24h),
        },
        {
            label: "All Time High",
            value: formatCompact(data.ath),
        },
    ]
    return (
        <div className="rounded-2xl p-6 card shadow-2xl relative overflow-hidden">


            <div className="flex flex-col gap-4 w-full relative z-10">

                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4 md:gap-5">

                        <div className="p-1.5 bg-zinc-900 rounded-full border border-gray-700">
                            <img src={data.image} className="w-10 h-10 md:w-12 md:h-12 rounded-full" alt={data.name} />
                        </div>

                        <div className="leading-tight">
                            <h1 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-2">
                                {data.name}
                                <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[11px] rounded font-bold border border-zinc-700">
                                    {data.symbol.toUpperCase()}
                                </span>
                            </h1>

                            <p className="text-xs md:text-sm font-semibold text-zinc-500 tracking-wide mt-1">
                                Blockchain Ecosystem • Rank #{data.market_cap_rank}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8">

                    <div className="space-y-3">
                        <div className="flex items-baseline gap-3">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none">
                                {data.current_price.toLocaleString('id-ID')}
                            </h2>
                            <span className="text-sm md:text-base text-zinc-500 font-semibold">IDR</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold ${isPositive
                                ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                }`}>
                                {isPositive ? '▲' : '▼'}
                                <span className="opacity-60 ml-1">
                                    {/* ({data.price_change_percentage_24h.toFixed(2)}%) */}
                                    ({(data.price_change_percentage_24h ?? 0).toFixed(2)}%)
                                </span>
                            </div>

                            <span className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">
                                Last 24 Hours
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 lg:pl-10 lg:border-l lg:border-zinc-600">
                        {priceRange.map((item, i) => (
                            <div className="flex flex-col gap-1" key={i}>
                                <span className="text-[10px]  tracking-widest text-zinc-500 uppercase font-semibold">
                                    {item.label}
                                </span>
                                <span className="text-base md:text-lg text-white font-bold tracking-tight">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" pt-4 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                    {mainStats.map((item, i) => (
                        <div
                            key={i}
                            className="flex md:flex-col items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-gray-600"
                        >
                            <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
                                {item.label}
                            </span>
                            <span className="text-sm font-bold text-white tracking-tight">
                                Rp {item.value}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default LeftHeader