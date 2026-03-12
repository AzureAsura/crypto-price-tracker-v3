'use client'

import React, { useEffect, useRef } from 'react'
import {
    createChart,
    LineSeries,
    ColorType,
    UTCTimestamp,
    AreaSeries
} from 'lightweight-charts'
import { indicesData } from '@/constants'

const DemoChart = () => {
    const chartRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!chartRef.current) return

        const chart = createChart(chartRef.current, {
            height: 300,
            layout: {
                background: { type: ColorType.Solid, color: '#0b0f14' },
                textColor: '#000',
            },
            grid: {
                vertLines: { visible: false },
                horzLines: { visible: false },
            },
            rightPriceScale: { visible: false },
            timeScale: { visible: false },
        })

        let base = 100
        const data: { time: UTCTimestamp; value: number }[] = []
        const start = Math.floor(Date.now() / 1000) - 3600 * 24

        for (let i = 0; i < 60; i++) {
            base += (Math.random() - 0.5) * 3

            data.push({
                time: (start + i * 900) as UTCTimestamp,
                value: parseFloat(base.toFixed(2)),
            })
        }

        const isUp = data[data.length - 1].value > data[0].value
        const color = isUp ? '#16c784' : '#ea3943'

        const line = chart.addSeries(AreaSeries, {
            lineColor: color,
            topColor: color + '44', 
            bottomColor: 'transparent',
            lineWidth: 2,
            lastValueVisible: false,
            priceLineVisible: false,
        });

        line.setData(data)

        chart.timeScale().fitContent()

        return () => chart.remove()
    }, [])

    return (
        <div className="bg-black p-5 rounded-xl border border-gray-600 shadow-sm h-full flex flex-col">
            <div className="flex justify-between items-center pb-4 border-b-gray-600 border-b mb-4">
                <h2 className="text-xl font-bold text-white tracking-tight">Market Exchange</h2>
            </div>

            {/* <div ref={chartRef} className="mb-6" /> */}

            <div className="space-y-4 flex-grow">
                {indicesData.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all">
                        <div className="flex items-center gap-3">
                            <div className={`w-1 h-5 rounded-full ${item.isDown ? 'bg-red-500' : 'bg-green-500'}`} />
                            <div>
                                <div className="text-white font-bold text-sm">{item.name}</div>
                                <div className="text-[10px] text-gray-500">{item.desc}</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-white text-sm font-bold">{item.price}</div>
                            <div className={`text-[10px] ${item.isDown ? 'text-red-500' : 'text-green-500'}`}>
                                {item.change} {item.percent}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-8 py-3 rounded-xl border border-gray-600 text-white font-bold text-sm bg-blue-600 hover:bg-blue-700 transition-colors">
                View All Trending
            </button>
        </div>
    )
}

export default DemoChart