import React from 'react'
import { newsItems } from '@/constants'


const NewsPage = () => {

  return (
    <div className="min-h-screen text-white">

      <div className="px-4 md:px-0 md:w-[95vw] mx-auto pt-28 pb-20">

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-center leading-tight">
          Top <span className="text-blue-600">Stories</span>
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-400 text-center max-w-xl mx-auto">
          Real-time headlines from global markets, crypto, and finance.
        </p>
      </div>

      <section className="">
        <div className="px-4 md:px-0 md:w-[95vw] mx-auto">


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


        </div>
      </section>


    </div>
  )
}

export default NewsPage