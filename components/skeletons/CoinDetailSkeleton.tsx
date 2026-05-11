const ChatRowSkeleton = () => (
  <div className="flex gap-4 items-start">
    <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse flex-shrink-0" />
    <div className="flex flex-col gap-2 flex-grow">
      <div className="flex items-center gap-2">
        <div className="h-3 w-20 bg-white/10 animate-pulse rounded" />
        <div className="h-2 w-10 bg-white/5 animate-pulse rounded" />
      </div>
      <div className="h-3 w-full bg-white/5 animate-pulse rounded" />
      <div className="h-3 w-3/4 bg-white/5 animate-pulse rounded" />
    </div>
  </div>
)

const CoinDetailSkeleton = () => (
  <div className="min-h-screen text-white pt-24 pb-10">
    <div className="px-4 md:px-0 md:w-[95vw] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">

        {/* Left: price + chart */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {/* LeftHeader skeleton */}
          <div className="card p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse" />
              <div className="flex flex-col gap-1">
                <div className="h-4 w-28 bg-white/10 animate-pulse rounded" />
                <div className="h-2.5 w-14 bg-white/5 animate-pulse rounded" />
              </div>
            </div>
            <div className="h-10 w-48 bg-white/10 animate-pulse rounded mb-2" />
            <div className="h-5 w-24 bg-white/5 animate-pulse rounded mb-6" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="h-2.5 w-20 bg-white/5 animate-pulse rounded" />
                  <div className="h-4 w-24 bg-white/10 animate-pulse rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Chart skeleton */}
          <div className="card p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <div className="h-4 w-32 bg-white/10 animate-pulse rounded" />
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-7 w-10 bg-white/10 animate-pulse rounded" />
                ))}
              </div>
            </div>
            <div className="h-[300px] w-full bg-white/5 animate-pulse rounded-xl" />
          </div>
        </div>

        {/* Right: description + chat */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* RightHeader skeleton */}
          <div className="card p-6 rounded-2xl">
            <div className="h-5 w-28 bg-white/10 animate-pulse rounded mb-4 pb-4 border-b border-gray-600" />
            <div className="space-y-2 mb-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-3 w-full bg-white/5 animate-pulse rounded" />
              ))}
              <div className="h-3 w-2/3 bg-white/5 animate-pulse rounded" />
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-6 w-20 bg-white/10 animate-pulse rounded-full" />
              ))}
            </div>
          </div>

          {/* Chat skeleton */}
          <div className="p-6 rounded-2xl card flex flex-col gap-6">
            <div className="h-5 w-32 bg-white/10 animate-pulse rounded" />
            <ChatRowSkeleton />
            <ChatRowSkeleton />
            <ChatRowSkeleton />
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default CoinDetailSkeleton
