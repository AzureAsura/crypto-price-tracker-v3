import { auth } from '@/auth'
import AboutLanding from '@/components/AboutLanding'
import Content from '@/components/Content'
import Hero from '@/components/Hero'
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
      <AboutLanding/>
      <Content data={data} trendingCoins={trendingCoins} coins={coins} />
      <News />
    </>
  )
}

export default page