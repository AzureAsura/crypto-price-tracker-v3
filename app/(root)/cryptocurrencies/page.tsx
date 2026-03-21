import CoinsTable from '@/components/cryptocurrencies/CoinsTable'
import Header from '@/components/cryptocurrencies/Header'
import Pagination from '@/components/Pagination'
import { getAllCoinsData } from '@/lib/data'
import { Info, TrendingUp } from 'lucide-react'

const page = async ({
  searchParams
}: {
  searchParams: { page: string }
}) => {

  const page = await searchParams

  const currentPage = Number(page.page) || 1;

  const coins = await getAllCoinsData(currentPage)

  return (
    <main className=" min-h-screen">
      <div className='px-4 md:px-0 md:w-[95vw] mx-auto pt-24 pb-10'>
        <Header />
      </div>

      <CoinsTable initialData={coins} />

      <Pagination currentPage={currentPage}/>

    </main>
  )
}

export default page