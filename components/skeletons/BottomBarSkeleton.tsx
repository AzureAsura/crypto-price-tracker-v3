const BottomBarSkeleton = () => (
  <section className="fixed bottom-0 z-[100] w-full border-t border-white/5 bg-[#0e0e10]/80 px-4 pt-2 pb-4 backdrop-blur-2xl lg:hidden">
    <div className="flex items-end justify-between">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-1 p-2 rounded-2xl flex-1">
          <div className="w-[22px] h-[22px] rounded-full bg-white/10 animate-pulse" />
          <div className="h-[8px] w-10 bg-white/5 animate-pulse rounded" />
        </div>
      ))}
    </div>
  </section>
)

export default BottomBarSkeleton
