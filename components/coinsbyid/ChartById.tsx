'use client'
import React, { useMemo, useState } from 'react'
import { AreaChart, Area, YAxis, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { Maximize2, BarChart3, Clock } from 'lucide-react'

const ChartById = ({ data }: { data: [number, number][] }) => {
  const [timeframe, setTimeframe] = useState('7D')
  const [metric, setMetric] = useState('Price')

  const formattedData = useMemo(() => {
    if (!Array.isArray(data)) return []
    return data.map(([timestamp, price]) => ({
      time: timestamp,
      value: price
    }))
  }, [data])

  const isUp = useMemo(() => {
    if (!data || data.length < 2) return false
    return data[data.length - 1][1] > data[0][1]
  }, [data])

  const chartColor = isUp ? '#22c55e' : '#ef4444'

  if (!data || data.length === 0) return <div className="h-[400px] w-full bg-zinc-900/50 animate-pulse rounded-2xl" />

  return (
    <div className="w-full bg-black border border-gray-600 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">

      <div className="flex items-center justify-between gap-3 mb-8 relative z-20">

        <div className="flex items-center gap-2">
          <div className="flex bg-zinc-900 rounded-lg border border-zinc-800">
            {['Price', 'Market Cap'].map((m) => (
              <button
                key={m}
                onClick={() => setMetric(m)}
                className={`px-2.5 md:px-4 py-1.5 md:py-2 text-[10px] md:text-[12px] font-bold uppercase rounded-md transition-all ${metric === m
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:text-white'
                  }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-zinc-900 rounded-lg border border-zinc-800">
            {['1D', '7D', '1M', '3M', '1Y'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-2 md:px-3 py-1.5 md:py-2 text-[10px] md:text-[12px] font-semibold uppercase tracking-wide rounded-md transition-all ${timeframe === tf
                    ? 'bg-zinc-700 text-white'
                    : 'text-zinc-400 hover:text-white'
                  }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

      </div>

      <div className="w-full h-[200px] md:h-[300px] relative z-10">

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={formattedData} margin={{ top: 40, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColor} stopOpacity={0.3} />
                <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
              </linearGradient>
            </defs>

            <YAxis hide domain={['dataMin', 'dataMax']} />
            <XAxis hide dataKey="time" />

            <Tooltip
              cursor={{ stroke: '#3f3f46', strokeWidth: 1, strokeDasharray: '4 4' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-black border border-zinc-700 p-3 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                      <p className="text-[9px] font-black text-zinc-500 uppercase mb-1 tracking-widest">Spot Price</p>
                      <p className="text-sm font-black text-white leading-none tracking-tighter">
                        IDR {payload[0].value?.toLocaleString('id-ID')}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke={chartColor}
              fillOpacity={1}
              fill="url(#colorPrice)"
              strokeWidth={3}
              dot={false}
              isAnimationActive={true}
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>


      <div className="mt-6 pt-4 flex items-center justify-between">
        <div className="flex gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold text-zinc-400 uppercase">Market State</span>
            <span className="text-[12px] font-black text-zinc-300 uppercase">Open</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold text-zinc-400 uppercase">Trend</span>
            <span className={`text-[12px] font-black uppercase ${isUp ? 'text-green-600' : 'text-red-600'}`}>{isUp ? 'BULLISH' : 'BEARISH'}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <Clock size={12} />
          <span className="text-[10px] font-black uppercase tracking-tighter">Updated 1m ago</span>
        </div>
      </div>

      <div className={`absolute -bottom-20 -right-20 w-64 h-64 blur-[120px] opacity-10 ${isUp ? 'bg-green-600' : 'bg-red-600'}`} />
    </div>
  )
}

export default ChartById