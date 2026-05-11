const MarketCapSkeleton = () => (
  <div className="card p-6 rounded-xl">
    <div className="flex justify-between items-center pb-4 border-b border-gray-600 mb-6">
      <div className="h-5 w-44 bg-white/10 animate-pulse rounded" />
    </div>
    <div className="h-[140px] w-full bg-white/5 animate-pulse rounded-xl my-10" />
    <div className="flex justify-between items-end mt-2 px-1">
      <div className="h-3 w-28 bg-white/10 animate-pulse rounded" />
      <div className="h-3 w-12 bg-white/10 animate-pulse rounded" />
    </div>
  </div>
)

export default MarketCapSkeleton
