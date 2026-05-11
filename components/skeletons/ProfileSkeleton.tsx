const ChatCardSkeleton = () => (
  <div className="flex gap-4 p-6 rounded-2xl card">
    <div className="w-12 h-12 rounded-full bg-white/10 animate-pulse flex-shrink-0" />
    <div className="flex flex-col gap-2 flex-grow">
      <div className="flex items-center gap-2">
        <div className="h-3 w-24 bg-white/10 animate-pulse rounded" />
        <div className="h-4 w-16 bg-white/5 animate-pulse rounded" />
      </div>
      <div className="h-3 w-full bg-white/5 animate-pulse rounded" />
      <div className="h-3 w-3/4 bg-white/5 animate-pulse rounded" />
      <div className="h-2.5 w-32 bg-white/5 animate-pulse rounded mt-1" />
    </div>
  </div>
)

const ProfileSkeleton = () => (
  <div className="px-4 md:px-0 md:w-[95vw] min-h-screen mx-auto pt-24 lg:flex-row flex-col flex gap-8">

    {/* Sidebar skeleton */}
    <div className="w-[300px] px-6 pb-6 pt-10 flex flex-col justify-center items-center card border border-white/10 rounded-[30px] relative z-0 h-fit max-lg:w-full">
      <div className="w-[220px] h-[220px] rounded-full bg-white/10 animate-pulse" />
      <div className="h-7 w-36 bg-white/10 animate-pulse rounded mt-7" />
      <div className="space-y-1.5 mt-5 w-full">
        <div className="h-3 w-full bg-white/5 animate-pulse rounded" />
        <div className="h-3 w-4/5 bg-white/5 animate-pulse rounded mx-auto" />
      </div>
      <div className="h-10 w-full bg-white/5 animate-pulse rounded-xl mt-6" />
      <div className="w-full h-px bg-white/10 my-6" />
      <div className="h-5 w-20 bg-white/5 animate-pulse rounded" />
    </div>

    {/* Chat cards skeleton */}
    <div className="flex-1 flex flex-col gap-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <ChatCardSkeleton key={i} />
      ))}
    </div>

  </div>
)

export default ProfileSkeleton
