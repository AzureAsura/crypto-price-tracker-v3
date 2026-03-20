import BottomBar from '@/components/BottomBar'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { getCoins } from '@/lib/data'
import React from 'react'

const layout = async({ children }: { children: React.ReactNode }) => {

  const coins = await getCoins()

  return (
    <div>
        <Navbar coins={coins}/>
        {children}
        <BottomBar/>
        <Footer/>
    </div>
  )
}

export default layout