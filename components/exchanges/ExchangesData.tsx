import React from 'react'

import { discussions } from '@/constants'
import RightHeader from './RightHeader'
import LeftHeader from './LeftHeader'



const CoinsData = () => {
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
        <div className="min-h-screen bg-black text-white py-20">
            <div className='px-4 md:px-0 md:w-[95vw] mx-auto'>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    <div className="lg:col-span-8 flex flex-col gap-4">

                        <LeftHeader/>

                        {/* <ChartById /> */}

                    </div>




                    <div className="lg:col-span-4 flex flex-col gap-6">

                        <RightHeader />


                        <div className="p-6 rounded-2xl border border-gray-600 h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-black text-white mb-4 pb-4 border-gray-600 border-b  tracking-tight">Global Discussion</h2>
                                <div className="space-y-6">
                                    {discussions.map((chat, index) => (
                                        <div key={index} className="flex gap-4 items-start">
                                            <img src={chat.avatar} alt="" className="w-10 h-10 rounded-full border border-gray-700" />
                                            <div className="flex-grow">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-white font-bold text-sm">{chat.user}</span>
                                                    <span className="text-gray-600 text-[10px]">{chat.time}</span>
                                                </div>
                                                <p className="text-gray-400 text-sm leading-relaxed italic">
                                                    "{chat.msg}"
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full mt-8 py-3 rounded-xl border border-gray-600 text-white font-bold text-sm bg-blue-600 hover:bg-blue-700 transition-colors">
                                Join the Discussion
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}



export default CoinsData