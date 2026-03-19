import BottomBar from '@/components/BottomBar'
import Content from '@/components/Content'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import News from '@/components/News'
import { getBtcMarketCap, } from '@/lib/data'
import React from 'react'

const page = async () => {


  const data = await getBtcMarketCap()






  return (
    <>
      <Navbar />
      <Hero />
      <Content data={data} />
      <News />
      <BottomBar/>
    </>
  )
}

export default page