import { Suspense } from 'react'
import ExchangeHeader from '@/components/exchanges/ExchangesHeader'
import ExchangesTableSection from '@/components/exchanges/ExchangesTableSection'
import ExchangesTableSkeleton from '@/components/skeletons/ExchangesTableSkeleton'
import Pagination from '@/components/Pagination'

const page = async ({
  searchParams
}: {
  searchParams: Promise<{ page: string }>
}) => {
  const { page: pageParam } = await searchParams
  const currentPage = Number(pageParam) || 1

  return (
    <div className="min-h-screen">
      <div className="pt-24 px-4 md:px-0 md:w-[95vw] mx-auto">
        <ExchangeHeader />

        <Suspense fallback={<ExchangesTableSkeleton />} key={currentPage}>
          <ExchangesTableSection page={currentPage} />
        </Suspense>

        <Pagination currentPage={currentPage} />
      </div>
    </div>
  )
}

export default page
