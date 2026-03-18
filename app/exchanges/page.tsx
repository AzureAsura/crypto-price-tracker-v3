import ExchangesTable from '@/components/exchanges/ExchangesTable'
import { getAllExchangesData } from '@/lib/data'
import React from 'react'

const page = async() => {

    const data = await getAllExchangesData()


  return (
    <div className='bg-black'>
        <div className='pt-20 px-4 md:px-0 md:w-[95vw] mx-auto'>
        <ExchangesTable initialData={data}/>

        </div>
    </div>
  )
}

export default page