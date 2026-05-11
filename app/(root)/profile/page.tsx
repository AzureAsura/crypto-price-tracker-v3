import { Suspense } from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import ProfileSection from '@/components/profile/ProfileSection'
import ProfileSkeleton from '@/components/skeletons/ProfileSkeleton'

const page = async () => {
  const session = await auth()

  if (!session) {
    redirect('/auth')
  }

  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileSection userId={session.user.id!} />
    </Suspense>
  )
}

export default page
