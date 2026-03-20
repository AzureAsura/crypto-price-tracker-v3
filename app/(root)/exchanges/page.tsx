import ExchangeHeader from '@/components/exchanges/ExchangesHeader'
import ExchangesTable from '@/components/exchanges/ExchangesTable'
import { getAllExchangesData } from '@/lib/data/exchanges'
import React from 'react'

const page = async() => {

    const data = await getAllExchangesData()


  return (
    <div className='min-h-screen'>
        <div className='pt-20 md:pt-24 px-4 md:px-0 md:w-[95vw] mx-auto'>
        <ExchangeHeader/>
          

        <ExchangesTable initialData={data}/>

        </div>
    </div>
  )
}

export default page