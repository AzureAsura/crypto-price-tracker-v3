import { Suspense } from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import GlobalForm from '@/components/form/GlobalForm'
import DiscussionSection from '@/components/chat/DiscussionSection'
import DiscussionSkeleton from '@/components/skeletons/DiscussionSkeleton'

const page = async () => {
  const session = await auth()

  if (!session) {
    redirect('/auth')
  }

  const currentUserId = session?.user?.id

  return (
    <div className="h-[calc(100vh-120px)] pb-20 md:pb-0 mt-24 w-full px-3 md:px-0 md:w-[95vw] mx-auto">
      <div className="flex flex-col h-full p-3 md:p-5 card rounded-xl md:rounded-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 px-1">
          <div className="flex items-center gap-2 md:gap-3">
            <div>
              <h1 className="text-sm md:text-xl font-bold text-white tracking-tight">
                Diskusi Global
              </h1>
              <p className="text-[10px] md:text-xs text-white/40 italic">
                Bagikan analisis atau pemikiranmu dengan komunitas
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <Suspense fallback={<DiscussionSkeleton />}>
            <DiscussionSection currentUserId={currentUserId} />
          </Suspense>
        </div>

        <GlobalForm />
      </div>
    </div>
  )
}

export default page
