import { getBtcMarketCap } from '@/lib/data'
import DemoChart from '@/components/DemoChart'
import clsx from 'clsx'

const MarketCapSection = async () => {
  const data = await getBtcMarketCap()

  return (
    <div className="card p-6 rounded-xl">
      <div className="flex justify-between items-center pb-4 border-b border-gray-600 mb-6">
        <h2 className="text-xl font-black text-white tracking-tight uppercase">
          Kapitalisasi Pasar
        </h2>
      </div>

      <DemoChart data={data.sparkline_in_7d.price} />

      <div className="flex justify-between items-end mt-2 px-1">
        <div className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">
          PERFORMA 7 HARI
        </div>
        <div className={clsx(
          "text-xs font-bold",
          data.price_change_percentage_7d_in_currency >= 0 ? "text-green-500" : "text-red-500"
        )}>
          {data.price_change_percentage_7d_in_currency >= 0 ? '+' : ''}
          {data.price_change_percentage_7d_in_currency?.toFixed(2)}%
        </div>
      </div>
    </div>
  )
}

export default MarketCapSection
