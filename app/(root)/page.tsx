import { auth } from '@/auth'
import BottomBar from '@/components/BottomBar'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import News from '@/components/News'
import { getBtcMarketCap, getCoins, getTrendingCoins, } from '@/lib/data'
import React from 'react'

const page = async () => {

  const [data, coins, trendingCoins] = await Promise.all([
    getBtcMarketCap(),
    getCoins(),
    getTrendingCoins(),
  ])


  return (
    <>
      <Hero />
      <Content data={data} trendingCoins={trendingCoins} coins={coins} />
      <News />
      <BottomBar />
    </>
  )
}

export default page