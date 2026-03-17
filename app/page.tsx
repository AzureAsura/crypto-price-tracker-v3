import Content from '@/components/Content'
import Hero from '@/components/Hero'
import News from '@/components/News'
import { getBtcMarketCap } from '@/lib/data'
import React from 'react'

const page = async () => {


  const data = await getBtcMarketCap()

  // console.log(chartData)


  return (
    <>
      <Hero />
      <Content data={data} />
      <News />
    </>
  )
}

export default page