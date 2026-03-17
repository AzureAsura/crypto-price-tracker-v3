import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import LeftHeader from './LeftHeader'
import ChartById from './ChartById'
import DemoChart from '../content/DemoChart'



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
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white py-10">
      <div className='px-4 md:px-0 md:w-[95vw] mx-auto'>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          <div className="lg:col-span-8 flex flex-col gap-4">

            <LeftHeader />

            <ChartById/>

            



          </div>




          <div className="lg:col-span-4 flex flex-col gap-6">


            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Bitcoin adalah cryptocurrency pertama di dunia yang berbasis blockchain.
                Digunakan sebagai store of value dan digital gold.
              </p>
            </div>


            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2">Trade Now</h3>
              <p className="text-sm text-white/80 mb-4">
                Buy or sell Bitcoin instantly on supported exchanges.
              </p>

              <button className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:scale-[1.02] transition">
                Buy BTC
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}



export default CoinsData