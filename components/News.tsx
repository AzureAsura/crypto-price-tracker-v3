import React from 'react'
import { ChevronRight } from 'lucide-react'
import { newsItems } from '@/constants'

const News = () => {


    return (
        <section className="pb-20"> 
            <div className="px-4 md:px-0 md:w-[95vw] mx-auto">

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