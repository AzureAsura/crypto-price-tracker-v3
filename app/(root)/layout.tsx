import { auth } from '@/auth'
import BottomBar from '@/components/BottomBar'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { getProfile } from '@/lib/actions/profile'
import { getCoins } from '@/lib/data'
import React from 'react'

const layout = async ({ children }: { children: React.ReactNode }) => {

  const [coins, session] = await Promise.all([
    getCoins(),
    auth()
  ])

  let userData = null

  if (session) {
    userData = await getProfile(session?.user.id)

  }


  return (
    <div>
      <Navbar coins={coins} userData={userData as any} />
      {children}
      <BottomBar coins={coins} />
      <Footer />
    </div>
  )
}

export default layout