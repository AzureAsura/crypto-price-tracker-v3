import ExchangeHeader from '@/components/exchanges/ExchangesHeader'
import ExchangesTable from '@/components/exchanges/ExchangesTable'
import Pagination from '@/components/Pagination'
import { getAllExchangesData } from '@/lib/data/exchanges'
import React from 'react'

const page = async ({
  searchParams
}: {
  searchParams: { page: string }
}) => {

  const page = await searchParams

  const currentPage = Number(page.page) || 1;

  const data = await getAllExchangesData(currentPage)


  return (
    <div className='min-h-screen'>
      <div className='pt-24 px-4 md:px-0 md:w-[95vw] mx-auto'>
        <ExchangeHeader />


        <ExchangesTable initialData={data} />

        <Pagination currentPage={currentPage} />


      </div>
    </div>
  )
}

export default page