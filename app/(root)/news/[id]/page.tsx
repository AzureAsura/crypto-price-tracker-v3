import React from 'react'
import { newsItems } from '@/constants'
import { notFound } from 'next/navigation'
import MarkdownRenderer from '@/components/MarkdownRenderer'

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params

  const news = newsItems.find((item) => item.id.toString() === id)

  if (!news) {
    notFound()
  }

  return (
    <div className="min-h-screen text-white pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        <header className="mb-12 border-b border-white/10 pb-10">
          <div className="flex items-center gap-3 mb-6">
            <img src={news.logo} alt="logo" className="w-8 h-8 rounded-full" />
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">
              {news.source} • {news.time}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            {news.title}
          </h1>
          
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </header>

        <article className="card p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
          <MarkdownRenderer content={news.content} />
        </article>
      </div>
    </div>
  )
}

export default Page