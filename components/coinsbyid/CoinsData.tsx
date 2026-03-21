import React from 'react'
import LeftHeader from './LeftHeader'
import ChartById from './ChartById'
import RightHeader from './RightHeader'
import { discussions } from '@/constants'

const CoinsData = ({ data, coinId }: any) => {
  if (!data) return null;

  return (
    <div className="min-h-screen text-white pt-24 pb-10">
      <div className='px-4 md:px-0 md:w-[95vw] mx-auto'>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">

          <div className="lg:col-span-8 flex flex-col gap-4 lg:sticky lg:top-24">
            <LeftHeader data={data} />
            <ChartById coinId={coinId} />

          </div>

          <div className="lg:col-span-4 flex flex-col gap-4 lg:h-[calc(100vh-10px)] lg:overflow-y-auto pr-2 custom-scrollbar">
            <RightHeader
              description={data.description}
              links={data.links}
              categories={data.categories}
              name={data.name}
              genesis_date={data.genesis_date}
            />

            <div className="p-6 rounded-2xl card h-full flex flex-col justify-between">
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

export default CoinsData