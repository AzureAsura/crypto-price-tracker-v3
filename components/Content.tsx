'use client'
import { TrendingUp, TrendingDown, Clock, ChevronRight } from 'lucide-react'
import ContentTable from './ContentTable';
import { indicesData, discussions, exchanges } from '@/constants'
import DemoChart from './DemoChart';
import Link from 'next/link';
import clsx from 'clsx';


const Content = ({ data }: any) => {


  return (
    <div className="bg-black border-t border-white/10 md:rounded-t-[50px] min-h-screen text-white py-16">
      <div className="px-4 md:px-0 md:w-[95vw] mx-auto">
 

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
  

          <div className="md:col-span-4 flex flex-col gap-4">



            <div className="bg-black p-5 rounded-xl border border-gray-600 shadow-sm">
              <div className="flex justify-between items-center pb-4 border-b border-gray-600 mb-6">
                <h2 className="text-xl font-black text-white tracking-tight uppercase">
                  Market Cap
                </h2>
              </div>

              <DemoChart data={data.sparkline_in_7d.price} />

              <div className="flex justify-between items-end mt-2 px-1">
                <div className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">
                  Performance 7D
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

            <div className="bg-black p-5 rounded-xl border border-gray-600 shadow-sm flex-grow flex flex-col">
              <div className="flex justify-between items-center pb-4 border-b border-gray-600 ">
                <h2 className="text-xl font-black text-white tracking-tight uppercase">
                  Trending Coins
                </h2>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              </div>

              <div className="space-y-2 flex-grow py-3">
                {indicesData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-1 h-5 rounded-full ${item.isDown ? 'bg-red-500' : 'bg-green-500'}`} />
                      <div>
                        <div className="text-white font-bold text-sm">{item.name}</div>
                        <div className="text-[10px] text-gray-500 uppercase">{item.desc}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-white text-sm font-bold">{item.price}</div>
                      <div className={`text-[10px] font-bold ${item.isDown ? 'text-red-500' : 'text-green-500'}`}>
                        {item.isDown ? '▼' : '▲'} {item.percent}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 rounded-xl border border-gray-600 text-white font-bold text-sm bg-blue-600 hover:bg-blue-700 transition-colors">
                View All Trending
              </button>
            </div>

          </div>

          <div className="md:col-span-8">
            <div className="bg-black rounded-xl border border-gray-600 overflow-hidden shadow-sm h-full flex flex-col">

              <div className="p-4 flex justify-between items-center border-b border-gray-600">
                <h3 className="text-white font-black text-xl uppercase tracking-tight">Market Overview</h3>
                <Link href={'/cryptocurrencies'} className="group flex items-center gap-2 text-[11px] font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg transition-all">
                  SEE ALL COINS <ChevronRight size={15} />
                </Link>
              </div>

              <ContentTable />
            </div>
          </div>

        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4 items-stretch'>
          <div className="lg:col-span-7">
            <div className="p-6 rounded-2xl border border-gray-600 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-4 border-b-gray-600 border-b mb-4">
                  <h2 className="text-xl font-black text-white tracking-tight uppercase">Top Exchanges</h2>
                  <button className="group flex items-center gap-2 text-[11px] font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg transition-all">
                    ALL EXCHANGE <ChevronRight size={15} />
                  </button>
                </div>

                <div className="space-y-1">
                  {exchanges.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-4 rounded-xl hover:bg-white/[0.08] transition-all group cursor-pointer">
                      <div className="flex items-center gap-5">
                        <img src={item.img} alt="" className="w-12 h-12 object-cover rounded-sm shadow-lg brightness-90 group-hover:brightness-110 transition-all" />
                        <div>
                          <div className="text-white font-bold text-lg">{item.pair}</div>
                          <div className="text-gray-500 text-xs font-medium uppercase tracking-wider">Spot Trading</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-mono font-bold text-white">{item.rate}</div>
                        <div className={`text-sm font-bold ${item.isUp ? 'text-green-400' : 'text-red-400'}`}>
                          {item.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-5">
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


export default Content