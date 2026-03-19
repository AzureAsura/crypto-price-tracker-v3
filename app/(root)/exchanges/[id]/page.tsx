import ExchangesData from '@/components/exchanges/ExchangesData'
import React from 'react'

const page = async({ params } : { params :  { id: string }}) => {

    const id = await params


  return (
    <div className=''>
        <ExchangesData/>
    </div>
  )
}

export default page