import { getTrendingCoins } from '@/lib/data'
import Link from 'next/link'

const TrendingSection = async () => {
  const trendingCoins = await getTrendingCoins()

  return (
    <div className="p-6 rounded-xl card flex-grow flex flex-col">
      <div className="flex justify-between items-center pb-4 border-b border-gray-600">
        <h2 className="text-xl font-black text-white tracking-tight uppercase">
          Sedang tren
        </h2>
      </div>

      <div className="space-y-2 flex-grow py-3">
        {trendingCoins?.slice(0, 5).map((item: any, idx: number) => {
          const isDown = item.price_change_percentage_24h < 0

          return (
            <Link
              href={`/cryptocurrencies/${item.id}`}
              key={item.id || idx}
              className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`w-1 h-5 rounded-full ${isDown ? 'bg-red-500' : 'bg-green-500'}`} />
                <div>
                  <div className="text-white font-bold text-sm">{item.name}</div>
                  <div className="text-[10px] text-gray-500 uppercase">{item.symbol}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-white text-sm font-bold">
                  IDR {item.current_price?.toLocaleString('id-ID')}
                </div>
                <div className={`text-[10px] font-bold ${isDown ? 'text-red-500' : 'text-green-500'}`}>
                  {isDown ? '▼' : '▲'} {Math.abs(item.price_change_percentage_24h).toFixed(2)}%
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <Link href={'/trending'} className="w-full py-3 rounded-xl border border-gray-600 text-white font-bold text-sm btn-color btn-color:hover transition-colors text-center uppercase">
        selengkapnya
      </Link>
    </div>
  )
}

export default TrendingSection
