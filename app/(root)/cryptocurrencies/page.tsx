import { Suspense } from 'react'
import CryptoHeaderSection from '@/components/cryptocurrencies/CryptoHeaderSection'
import CryptoHeaderSkeleton from '@/components/skeletons/CryptoHeaderSkeleton'
import CoinsTableSection from '@/components/cryptocurrencies/CoinsTableSection'
import CoinsTableSkeleton from '@/components/skeletons/CoinsTableSkeleton'
import Pagination from '@/components/Pagination'

const page = async ({
  searchParams
}: {
  searchParams: Promise<{ page: string }>
}) => {
  const { page: pageParam } = await searchParams
  const currentPage = Number(pageParam) || 1

  return (
    <main className="min-h-screen">
      <div className="px-4 md:px-0 md:w-[95vw] mx-auto pt-24 pb-10">
        <Suspense fallback={<CryptoHeaderSkeleton />}>
          <CryptoHeaderSection />
        </Suspense>
      </div>

      <Suspense fallback={<CoinsTableSkeleton />} key={currentPage}>
        <CoinsTableSection page={currentPage} />
      </Suspense>

      <Pagination currentPage={currentPage} />
    </main>
  )
}

export default page
