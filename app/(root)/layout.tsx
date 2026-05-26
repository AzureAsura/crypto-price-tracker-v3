import { Suspense } from 'react'
import BottomBarServer from '@/components/BottomBarServer'
import BottomBarSkeleton from '@/components/skeletons/BottomBarSkeleton'
import Footer from '@/components/Footer'
import NavbarServer from '@/components/NavbarServer'
import NavbarSkeleton from '@/components/skeletons/NavbarSkeleton'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Suspense fallback={<NavbarSkeleton />}>
        <NavbarServer />
      </Suspense>
      {children}
      <Suspense fallback={<BottomBarSkeleton />}>
        <BottomBarServer />
      </Suspense>
      <Footer />
    </div>
  )
}

export default layout
