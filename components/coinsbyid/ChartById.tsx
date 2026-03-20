'use client'
import React, { useMemo, useState, useEffect, useRef } from 'react'
import { AreaChart, Area, YAxis, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { Clock } from 'lucide-react'
import { useDebounce } from 'use-debounce'
import clsx from 'clsx'

const timeframeMap: Record<string, string> = {
  '1D': '1',
  '7D': '7',
  '1M': '30',
  '3M': '90',
  '1Y': '365',
};

const ChartById = ({ coinId }: { coinId: string }) => {

  const [chartData, setChartData] = useState<{ time: number, value: number }[]>([]);
  const [timeframe, setTimeframe] = useState('7D');
  const [metric, setMetric] = useState('Price');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const cache = useRef<Record<string, { time: number, value: number }[]>>({});

  const [debouncedTimeframe] = useDebounce(timeframe, 500);
  const [debouncedMetric] = useDebounce(metric, 500);

  useEffect(() => {

    const controller = new AbortController();

    const fetchNewData = async () => {

      const cacheKey = `${coinId}-${debouncedTimeframe}-${debouncedMetric}`;

      if (cache.current[cacheKey]) {
        setChartData(cache.current[cacheKey]);
        return;
      }

      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=idr&days=${timeframeMap[debouncedTimeframe]}`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("Kena limit nih!");

        const result = await response.json();
        const rawData = debouncedMetric === 'Price' ? result.prices : result.market_caps;

        if (!rawData || rawData.length === 0) {
          setChartData([]);
          setIsError(true);
          return;
        }

        const formatted = rawData.map(([time, val]: [number, number]) => ({ time, value: val }));

        setIsError(false);
        cache.current[cacheKey] = formatted;
        setChartData(formatted);

      } catch (error: any) {
        if (error.name !== 'AbortError') console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewData();

    return () => controller.abort();

  }, [debouncedTimeframe, debouncedMetric, coinId]);


  const isUp = useMemo(() => {
    if (chartData.length < 2) return false;
    return chartData[chartData.length - 1].value > chartData[0].value;
  }, [chartData]);

  const chartColor = isUp ? '#22c55e' : '#ef4444';

  if (isLoading && chartData.length === 0) {
    return <div className="h-[400px] w-full bg-zinc-900/50 animate-pulse rounded-2xl border border-gray-600" />;
  }

  return (
    <div className="w-full bg-black border border-gray-600 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">

      <div className="flex items-center justify-between gap-3 mb-8 relative z-20">
        <div className="flex items-center gap-2">
          <div className="flex bg-zinc-900 rounded-lg border border-zinc-800">
            {['Price', 'Market Cap'].map((m) => (
              <button
                key={m}
                onClick={() => setMetric(m)}
                className={clsx('px-2.5 md:px-4 py-1.5 md:py-2 text-[10px] md:text-[12px] font-bold uppercase rounded-md transition-all', metric === m ? 'bg-white text-black' : 'text-zinc-400 hover:text-white cursor-pointer')}
              >
                {m}
              </button>
            ))}
          </div>
        </div>


        <div className="flex items-center gap-2">
          <div className="flex bg-zinc-900 rounded-lg border border-zinc-800">
            {Object.keys(timeframeMap).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={clsx('px-2 md:px-3 py-1.5 md:py-2 text-[10px] md:text-[12px] font-semibold uppercase tracking-wide rounded-md transition-all', timeframe === tf ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-white cursor-pointer')}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`w-full h-[200px] md:h-[300px] relative z-10 transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>

        {!isLoading && (chartData.length === 0 || isError) ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 rounded-xl bg-zinc-900/20">
            <p className="text-[10px] md:text-xs font-black text-zinc-500 uppercase tracking-[0.2em]">
              DATA STREAM UNAVAILABLE
            </p>
            <p className="text-[9px] text-zinc-600 mt-1 uppercase font-bold italic">
              {debouncedTimeframe} • PLEASE REFRESH IN A MOMENT
            </p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 40, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={`colorPrice-${coinId}`} x1="0" y1="0" x2="0" y2="1">
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
                      <div className="bg-black border border-zinc-700 p-3 rounded-lg">
                        <p className="text-[9px] font-black text-zinc-500 uppercase mb-1">{metric} Spot</p>
                        <p className="text-sm font-black text-white">
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
                fill={`url(#colorPrice-${coinId})`}
                strokeWidth={3}
                dot={false}
                isAnimationActive={true}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>


      <div className="mt-6 pt-4 flex items-center justify-between">
        <div className="flex gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-400 uppercase">Trend</span>
            <span className={clsx('text-[12px] font-black uppercase', isUp ? 'text-green-600' : 'text-red-600')}>
              {isUp ? 'BULLISH' : 'BEARISH'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <Clock size={12} />
          <span className="text-[10px] uppercase font-black">
            {isLoading ? 'Updating...' : 'Live Data'}
          </span>
        </div>
      </div>

      <div className={`absolute -bottom-20 -right-20 w-64 h-64 blur-[120px] opacity-10 ${isUp ? 'bg-green-600' : 'bg-red-600'}`} />
    </div>
  )
}

export default ChartById;