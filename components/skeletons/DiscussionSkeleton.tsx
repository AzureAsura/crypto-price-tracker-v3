const DiscussionSkeleton = () => (
  <div className="h-full overflow-hidden flex flex-col gap-4 py-2 pr-1">
    {Array.from({ length: 6 }).map((_, i) => {
      const isOwn = i % 3 === 2
      return (
        <div key={i} className={`flex items-end gap-3 ${isOwn ? 'flex-row-reverse' : ''}`}>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 animate-pulse flex-shrink-0" />
          <div className={`flex flex-col gap-1 max-w-[75%] ${isOwn ? 'items-end' : ''}`}>
            <div className={`h-2.5 w-24 bg-white/10 animate-pulse rounded ${isOwn ? 'ml-auto' : ''}`} />
            <div className={`p-3 rounded-2xl ${isOwn ? 'bg-white/10' : 'bg-white/5'} animate-pulse`}
              style={{ width: `${140 + (i * 20) % 80}px`, height: '52px' }} />
          </div>
        </div>
      )
    })}
  </div>
)

export default DiscussionSkeleton
