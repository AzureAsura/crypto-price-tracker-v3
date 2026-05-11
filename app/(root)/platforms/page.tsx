import { Suspense } from 'react'
import PlatformHeader from '@/components/PlatformHeader'
import PlatformTableSection from '@/components/platforms/PlatformTableSection'
import PlatformTableSkeleton from '@/components/skeletons/PlatformTableSkeleton'

const page = async () => {
  return (
    <div className="min-h-screen">
      <PlatformHeader />

      <Suspense fallback={<PlatformTableSkeleton />}>
        <PlatformTableSection />
      </Suspense>
    </div>
  )
}

export default page
