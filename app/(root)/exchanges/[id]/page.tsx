import ExchangesData from '@/components/exchanges/ExchangesData'
import { getExchangeById } from '@/lib/data/exchanges'
import React from 'react'

const page = async({ params } : { params :  { id: string }}) => {

    const { id } = await params

    const data = await getExchangeById(id)


  return (
    <div className=''>
        <ExchangesData data={data}/>
    </div>
  )
}

export default page