import { Suspense } from 'react'
import { auth } from '@/auth'
import CoinDetailSection from '@/components/coinsbyid/CoinDetailSection'
import CoinDetailSkeleton from '@/components/skeletons/CoinDetailSkeleton'

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const session = await auth()
  const currentUserId = session?.user?.id

  return (
    <div className="">
      <Suspense fallback={<CoinDetailSkeleton />}>
        <CoinDetailSection coinId={id} currentUserId={currentUserId} />
      </Suspense>
    </div>
  )
}

export default Page
