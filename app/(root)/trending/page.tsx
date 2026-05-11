import { Suspense } from 'react'
import TrendingHeader from '@/components/cryptocurrencies/TrendingHeader'
import TrendingTableSection from '@/components/trending/TrendingTableSection'
import TrendingTableSkeleton from '@/components/skeletons/TrendingTableSkeleton'

const page = async () => {
  return (
    <main className="min-h-screen">
      <div className="px-4 md:px-0 md:w-[95vw] mx-auto pt-20 md:pt-24 pb-10">
        <TrendingHeader />
      </div>

      <Suspense fallback={<TrendingTableSkeleton />}>
        <TrendingTableSection />
      </Suspense>
    </main>
  )
}

export default page
