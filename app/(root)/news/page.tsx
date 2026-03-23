import React from 'react'
import { newsItems } from '@/constants'
import Link from 'next/link'

const NewsPage = () => {
  return (
    <div className="min-h-screen text-white">
      <div className="flex flex-col lg:flex-row px-4 md:px-0 md:w-[95vw] mx-auto gap-16 pt-24 pb-20">
        
        <aside className="lg:w-[45%] lg:sticky lg:top-24 lg:h-fit self-start">
          <div className="text-left card p-6 rounded-2xl">
            <span className="block text-blue-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              Market Insights
            </span>

            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Berita Pasar Kripto
            </h1>
          

            <div className=" text-sm text-gray-500">
              Diperbarui setiap menit • Data global
            </div>

            <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-blue-500/5">
              <img
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop"
                alt="Crypto News Banner"
                className="h-[300px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

             <p className="mt-4 text-base md:text-lg text-gray-400 font-normal leading-relaxed max-w-lg">
              Dapatkan update terbaru pasar kripto secara real-time, mulai dari pergerakan Bitcoin, tren altcoin, hingga perkembangan ekosistem blockchain global.
            </p>

          </div>
        </aside>

        <main className="lg:w-[55%]">
          <div className="flex flex-col gap-10">
            {newsItems.map((news, index) => (
              <Link
                href={`news/${news.id}`}
                key={index}
                className="flex flex-col gap-3 group cursor-pointer -m-3 p-3 rounded-xl transition-all duration-100 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/50"
              >
                <div className="flex items-center gap-2 text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                  <img
                    src={news.logo}
                    alt="icon"
                    className="w-4 h-4 rounded-full "
                  />
                  <span>{news.time}</span>
                  <span className="w-1 h-1 bg-gray-700 rounded-full" />
                  <span className="text-blue-500/80 group-hover:text-blue-400">{news.source}</span>
                </div>

                <h3 className="text-[18px] font-bold text-gray-300 leading-relaxed group-hover:text-white transition-colors tracking-tight">
                  {news.title}
                </h3>
                
                <div className="flex items-center gap-1 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[10px] font-black uppercase tracking-widest mt-1">
                  Lihat Selengkapnya <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </main>

      </div>
    </div>
  )
}

export default NewsPage