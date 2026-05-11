import { auth } from '@/auth'
import Insights from '@/components/about/Insights'
import AboutLanding from '@/components/AboutLanding'
import Content from '@/components/Content'
import Hero from '@/components/Hero'
import News from '@/components/News'
import React from 'react'

const page = async () => {
  return (
    <>
      <Hero />
      <AboutLanding />
      <Content />
      <News />
      <Insights />
    </>
  )
}

export default page
