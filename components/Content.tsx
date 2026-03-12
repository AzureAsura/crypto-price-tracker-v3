import React from 'react'
import { TrendingUp, TrendingDown, Clock, ChevronRight } from 'lucide-react'
import ContentTable from './content/ContentTable';
import DemoChart from './content/DemoChart';

const Content = () => {
  const exchanges = [
    { pair: "EUR / USD", rate: "1.0842", change: "+0.12%", isUp: true, img: "https://assets.coingecko.com/markets/images/52/large/binance.jpg?1706864274" },
    { pair: "GBP / USD", rate: "1.2631", change: "-0.05%", isUp: false, img: "https://assets.coingecko.com/markets/images/23/large/Coinbase_Coin_Primary.png?1706864258" },
    { pair: "USD / JPY", rate: "150.42", change: "+0.24%", isUp: true, img: "https://assets.coingecko.com/markets/images/698/large/bybit_spot.png?1706864649" },
    { pair: "BTC / USD", rate: "64,231", change: "+1.42%", isUp: true, img: "https://assets.coingecko.com/markets/images/96/large/WeChat_Image_20220117220452.png?1706864283" },
  ];

  const discussions = [
    { user: "Alex_Trader", msg: "Bullish on $BTC for the next 4 hours. Resistance looks weak.", time: "2m ago", avatar: "https://i.pravatar.cc/150?u=1" },
    { user: "Sarah.K", msg: "EUR/USD reacting strongly to the news. Watch the 1.0850 level closely.", time: "5m ago", avatar: "https://i.pravatar.cc/150?u=2" },
    { user: "WhaleHunter", msg: "Massive buy orders coming in for $ETH. Something is brewing.", time: "12m ago", avatar: "https://i.pravatar.cc/150?u=3" },
    { user: "WhaleHunter", msg: "Massive buy orders coming in for $ETH. Something is brewing.", time: "12m ago", avatar: "https://i.pravatar.cc/150?u=3" },
  ];


  return (
    <div className="bg-black border-t border-white/10 md:rounded-t-[50px] min-h-screen text-white py-16">
      <div className="w-[95vw] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

          <div className="lg:col-span-4">
            <DemoChart/>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-black rounded-xl border border-gray-600 overflow-hidden shadow-sm h-full flex flex-col">

              <div className="p-4 flex justify-between items-center border-b border-gray-600">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Market Overview</h3>
                  <button className="group flex items-center gap-2 text-[11px] font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg transition-all">
                  SEE ALL COINS <ChevronRight size={15} />
                  </button>
              </div>

              <ContentTable />
            </div>
          </div>

        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4 items-stretch'>
          <div className="lg:col-span-7">
            <div className="p-6 rounded-2xl border border-gray-600 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-4 border-b-gray-600 border-b mb-4">
                  <h2 className="text-xl font-bold text-white tracking-tight">Market Exchange</h2>
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
                <h2 className="text-xl font-bold text-white mb-4 pb-4 border-gray-600 border-b  tracking-tight">Global Discussion</h2>
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