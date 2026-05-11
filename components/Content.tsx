import { Suspense } from 'react'
import { ChevronRight } from 'lucide-react'
import { globalChat, exchanges } from '@/constants'
import Link from 'next/link'
import MarketCapSection from './home/MarketCapSection'
import TrendingSection from './home/TrendingSection'
import MarketTableSection from './home/MarketTableSection'
import MarketCapSkeleton from './skeletons/MarketCapSkeleton'
import TrendingSkeleton from './skeletons/TrendingSkeleton'
import MarketTableSkeleton from './skeletons/MarketTableSkeleton'

const Content = () => {
  return (
    <div className=" min-h-screen text-white pb-16 md:pt-10">
      <div className="px-4 md:px-0 md:w-[95vw] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">

          <div className="md:col-span-4 flex flex-col gap-4">
            <Suspense fallback={<MarketCapSkeleton />}>
              <MarketCapSection />
            </Suspense>

            <Suspense fallback={<TrendingSkeleton />}>
              <TrendingSection />
            </Suspense>
          </div>

          <div className="md:col-span-8">
            <Suspense fallback={
              <div className="rounded-xl card overflow-hidden shadow-sm h-full flex flex-col">
                <div className="px-6 py-4 flex justify-between items-center border-b border-gray-600">
                  <div className="h-5 w-40 bg-white/10 animate-pulse rounded" />
                  <div className="h-8 w-32 bg-white/5 animate-pulse rounded-lg" />
                </div>
                <MarketTableSkeleton />
              </div>
            }>
              <MarketTableSection />
            </Suspense>
          </div>

        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4 items-stretch'>
          <div className="lg:col-span-7">
            <div className="p-6 rounded-2xl card h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center pb-4 border-b-gray-600 border-b mb-4">
                  <h2 className="text-xl font-black text-white tracking-tight uppercase">Bursa teratas</h2>
                  <Link href={'/exchanges'} className="group flex text-start items-center gap-2 text-[11px] font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg transition-all uppercase">
                    Lihat Selengkapnya <ChevronRight size={15} />
                  </Link>
                </div>

                <div className="space-y-1">
                  {exchanges.map((item, index) => (
                    <Link href={`exchanges/${item.href}`} key={index} className="flex items-center justify-between py-4 px-2 rounded-xl hover:bg-white/[0.08] transition-all group cursor-pointer">
                      <div className="flex items-center gap-5">
                        <img src={item.img} alt="" className="w-12 h-12 object-cover rounded-sm shadow-lg brightness-90 group-hover:brightness-110 transition-all" />
                        <div>
                          <div className="text-white font-bold text-lg">{item.name}</div>
                          <div className="text-gray-500 text-xs font-medium uppercase tracking-wider">Spot Trading</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg uppercase font-black text-white">{item.country}</div>
                        <div className='text-sm font-bold text-green-400'>
                          {item.trustScore}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl card h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-black text-white mb-4 pb-4 border-gray-600 border-b tracking-tight">
                  Diskusi Koin
                </h2>

                <div className="space-y-6">
                  {globalChat?.map((item: any, index: number) => (
                    <div key={index} className="flex gap-4 items-start">
                      <img
                        src={item.user?.image || '/placeholder.jpg'}
                        alt=""
                        className="w-10 h-10 rounded-full border border-gray-700 object-cover"
                      />
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-white font-bold text-sm">@{item.user?.name}</span>
                          <span className="text-gray-600 text-[10px]">
                            {new Date(item.createdAt).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed italic">
                          "{item.content}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link href={'/discussion'} className="w-full mt-8 py-3 rounded-xl border border-gray-600 text-white font-bold text-sm btn-color btn-color:hover transition-colors text-center">
                BERGABUNG
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Content
