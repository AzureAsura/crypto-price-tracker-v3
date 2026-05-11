import { Suspense } from 'react'
import { auth } from '@/auth'
import ExchangeDetailSection from '@/components/exchanges/ExchangeDetailSection'
import ExchangeDetailSkeleton from '@/components/skeletons/ExchangeDetailSkeleton'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const session = await auth()
  const currentUserId = session?.user?.id

  return (
    <div className="">
      <Suspense fallback={<ExchangeDetailSkeleton />}>
        <ExchangeDetailSection exchangeId={id} userId={currentUserId} />
      </Suspense>
    </div>
  )
}

export default page
