import React from 'react'

const LeftHeader = () => {
    const coin = {
        name: "Bitcoin",
        symbol: "BTC",
        image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        current_price: 70187,
        price_change_24h: 2126.88,
        price_change_percentage_24h: 3.12,
        market_cap: 1381651251183,
        total_volume: 20154184933,
        market_cap_rank: 1,
    }

    const stats = [
        {
            label: "MKT CAP",
            value: `$${(coin.market_cap / 1e12).toFixed(2)}T`,
        },
        {
            label: "VOL",
            value: `$${(coin.total_volume / 1e9).toFixed(2)}B`,
        },
        {
            label: "SUPPLY",
            value: "19.67M",
        },
        {
            label: "DOM",
            value: "52.4%",
        },
    ]

    const isPositive = coin.price_change_percentage_24h > 0
    return (
        <div className="border border-gray-600 rounded-xl p-4">

            <div className="flex flex-col items-start gap-6 w-full">

                <div className="flex items-center gap-3 shrink-0">
                    <img src={coin.image} className="w-10 h-10 rounded-full" />
                    <div className="leading-tight">
                        <h1 className="text-lg font-semibold tracking-wide">
                            {coin.name.toUpperCase()}
                            <span className="text-zinc-500 ml-2 text-sm">{coin.symbol}</span>
                        </h1>
                        <p className="text-[11px] text-zinc-500">
                            Rank #{coin.market_cap_rank}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 w-full ">

                    <div className="shrink-0">
                        <div className="flex items-end gap-4">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                                {coin.current_price.toLocaleString()}
                                <span className="text-sm text-zinc-400 ml-1"> USD</span>
                            </h2>

                            <div className={`text-sm font-semibold mb-1 ${isPositive ? 'text-green-400' : 'text-red-400'
                                }`}>
                                {isPositive ? '+' : ''}
                                {coin.price_change_24h.toFixed(2)} ({coin.price_change_percentage_24h.toFixed(2)}%)
                            </div>
                        </div>

                        <p className="text-[11px] text-zinc-500">
                            Market cap: {coin.market_cap.toLocaleString()}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm text-zinc-400 lg:pl-8 lg:border-l lg:border-white/10">
                        {stats.map((item, i) => (
                            <div className="flex flex-col leading-tight" key={i}>
                                <span className="text-[10px] tracking-widest text-zinc-500 uppercase">
                                    {item.label}
                                </span>
                                <span className="text-white font-semibold text-sm">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>


            </div>
        </div>
    )
}

export default LeftHeader