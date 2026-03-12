import React from 'react'
import { ChevronRight } from 'lucide-react'

const News = () => {
    const newsItems = [
        { logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png", time: "1 hour ago", source: "TradingView", title: "South Korea's Kospi Sheds 12% on Iran Conflict, Japan's Nikkei Also Hit Hard" },
        { logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2047.png", time: "1 hour ago", source: "TradingView", title: "Amazon Under Pressure as Data Centers Go Dark After Middle East Drone Attack" },
        { logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png", time: "21 hours ago", source: "TradingView", title: "BTC/USD: Bitcoin Prices Whipsaw as Crypto Traders Seek Direction amid War Tremors" },
        { logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png", time: "yesterday", source: "TradingView", title: "IXIC: Nasdaq Futures Dive as US-Iran Conflict Heats Up, Oil Nears $75" },
        { logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png", time: "yesterday", source: "TradingView", title: "EUR/USD: Euro Tumbles as Traders Flock to Greenback. Support Levels Ahead." },
        { logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png", time: "2 days ago", source: "TradingView", title: "XAU/USD: Gold Soars Above $5,400 as Iran Tensions Trigger Flight to Safe Havens" },
        { logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/4128.png", time: "2 days ago", source: "TradingView", title: "US Crude Oil Hits 9-Month High as Markets Brace for Iran Supply Crisis" },
        { logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png", time: "2 days ago", source: "TradingView", title: "DJI: Dow Futures Dive 500 Points amid US Attack on Iran; Oil Prices Surge" },
        { logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png", time: "4 days ago", source: "TradingView", title: "CRWV: CoreWeave Stock Falls 9% on Timid Guidance, Big Debt Pile" },
    ];

    return (
        <section className="bg-black pb-20 font-sans"> 
            <div className="w-[95vw] mx-auto">

                <div className="flex items-center gap-1 mb-10 group cursor-pointer w-fit">
                    <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Top stories</h2>
                    <ChevronRight size={24} className="text-blue-500 transition-transform group-hover:translate-x-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
                    {newsItems.map((news, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-3 group cursor-pointer -m-3 p-3 rounded-xl transition-all duration-100 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/50"
                        >
                            <div className="flex items-center gap-2 text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                                <img
                                    src={news.logo}
                                    alt="icon"
                                    className="w-4 h-4 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                                />
                                <span>{news.time}</span>
                                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                                <span className="text-blue-500/80 group-hover:text-blue-400">{news.source}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[15px] font-bold text-gray-300 leading-relaxed group-hover:text-white transition-colors line-clamp-2">
                                {news.title}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-gray-900">
                    <a href="#" className="flex items-center gap-1 text-blue-500 font-black text-xs uppercase tracking-widest hover:text-blue-400 group w-fit transition-all">
                        Keep reading
                        <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default News