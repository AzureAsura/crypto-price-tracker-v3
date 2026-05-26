const NavbarSkeleton = () => (
  <nav className="fixed top-0 left-0 w-full z-50 transition-all card">
    <div className="px-4 md:px-0 md:w-[95vw] mx-auto rounded-xl py-4 flex items-center shadow-2xl">
      <div className="flex items-center justify-between w-full">

        {/* Logo */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-[35px] h-[35px] rounded-md bg-white/10 animate-pulse" />
          <div className="flex flex-col gap-1">
            <div className="h-[14px] w-20 bg-white/10 animate-pulse rounded" />
            <div className="h-[10px] w-16 bg-white/5 animate-pulse rounded" />
          </div>
        </div>

        {/* Nav links + search (desktop only) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="h-3 w-14 bg-white/10 animate-pulse rounded" />
            <div className="h-3 w-14 bg-white/10 animate-pulse rounded" />
            <div className="h-3 w-14 bg-white/10 animate-pulse rounded" />
            <div className="h-3 w-14 bg-white/10 animate-pulse rounded" />
            <div className="h-9 w-44 rounded-lg bg-white/5 animate-pulse" />
          </div>
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 md:h-10 md:w-10 rounded-lg bg-white/10 animate-pulse" />
          <div className="flex items-center gap-3 px-1.5 md:px-3 py-1.5 rounded-full bg-white/5">
            <div className="hidden md:flex flex-col items-end gap-1">
              <div className="h-3 w-20 bg-white/10 animate-pulse rounded" />
              <div className="h-2 w-24 bg-white/5 animate-pulse rounded" />
            </div>
            <div className="w-[35px] h-[35px] rounded-full bg-white/10 animate-pulse shrink-0" />
          </div>
        </div>

      </div>
    </div>
  </nav>
)

export default NavbarSkeleton
