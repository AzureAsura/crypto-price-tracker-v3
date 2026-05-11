const TrendingSkeleton = () => (
  <div className="p-6 rounded-xl card flex-grow flex flex-col">
    <div className="flex justify-between items-center pb-4 border-b border-gray-600">
      <div className="h-5 w-32 bg-white/10 animate-pulse rounded" />
    </div>

    <div className="space-y-2 flex-grow py-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex justify-between items-center p-2">
          <div className="flex items-center gap-3">
            <div className="w-1 h-5 rounded-full bg-white/10 animate-pulse" />
            <div className="flex flex-col gap-1">
              <div className="h-3 w-20 bg-white/10 animate-pulse rounded" />
              <div className="h-2 w-10 bg-white/5 animate-pulse rounded" />
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="h-3 w-24 bg-white/10 animate-pulse rounded" />
            <div className="h-2 w-12 bg-white/5 animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>

    <div className="w-full h-10 bg-white/5 animate-pulse rounded-xl" />
  </div>
)

export default TrendingSkeleton
