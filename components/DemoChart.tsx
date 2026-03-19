'use client'
import React, { useMemo } from 'react'
import { AreaChart, Area, YAxis } from 'recharts'

const DemoChart = ({ data }: { data: number[] }) => {
    
    const formattedData = useMemo(() => {
        if (!Array.isArray(data)) return []
        
        return data
            .filter((_, i) => i % 2 === 0)
            .map((price) => ({
                value: price 
            }))
    }, [data])

    
    const isUp = useMemo(() => {
        if (!data || data.length < 2) return false
        return data[data.length - 1] > data[0]
    }, [data])

    const chartColor = isUp ? '#22c55e' : '#ef4444'

    if (formattedData.length === 0) return <div className="h-[140px] w-full bg-white/5 animate-pulse rounded-xl" />

    return (

        <div className="w-full h-[140px] my-10 flex justify-center items-center">
            <AreaChart 
                width={450} 
                height={200} 
                data={formattedData}
                margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={chartColor} stopOpacity={0.3}/>
                        <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
                    </linearGradient>
                </defs>
                
                <YAxis hide domain={['dataMin', 'dataMax']} />
                
                <Area
                    type="basis" 
                    dataKey="value"
                    stroke={chartColor}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                    strokeWidth={2.5}
                    dot={false}
                    isAnimationActive={true}
                />
            </AreaChart>
        </div>
    )
}

export default DemoChart