import AboutContent from '@/components/about/AboutContent'
import AboutHero from '@/components/about/AboutHero'
import Feedback from '@/components/about/Feedback'
import HowItWorks from '@/components/about/HowItWorks'
import Insights from '@/components/about/Insights'
import WhatsNew from '@/components/about/WhatsNew'
import React from 'react'

const page = () => {
  return (
    <>
      <AboutHero/>
      <AboutContent/>
      <HowItWorks/>
      <WhatsNew/>
      <Insights/>
      <Feedback/>
    </>
  )
}

export default page