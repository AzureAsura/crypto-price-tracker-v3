import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ChatRowSkeleton = () => (
  <div className="flex gap-4 items-start">
    <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse flex-shrink-0" />
    <div className="flex flex-col gap-2 flex-grow">
      <div className="flex items-center gap-2">
        <div className="h-3 w-20 bg-white/10 animate-pulse rounded" />
        <div className="h-2 w-10 bg-white/5 animate-pulse rounded" />
      </div>
      <div className="h-3 w-full bg-white/5 animate-pulse rounded" />
    </div>
  </div>
)

const ExchangeDetailSkeleton = () => (
  <div className="min-h-screen text-white pt-24 pb-10">
    <div className="px-4 md:px-0 md:w-[95vw] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">

        {/* Left: exchange info + tickers */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {/* LeftHeader skeleton */}
          <div className="card p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/10 animate-pulse" />
              <div className="flex flex-col gap-2">
                <div className="h-6 w-40 bg-white/10 animate-pulse rounded" />
                <div className="h-4 w-20 bg-white/5 animate-pulse rounded" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="h-2.5 w-20 bg-white/5 animate-pulse rounded" />
                  <div className="h-4 w-24 bg-white/10 animate-pulse rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Tickers table skeleton */}
          <div className="card rounded-2xl overflow-hidden">
            <Table className="min-w-[400px] w-full border-separate border-spacing-0">
              <TableHeader>
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="pl-6 text-[11px] tracking-widest uppercase font-bold text-white border-b border-gray-600">Pasangan</TableHead>
                  <TableHead className="text-right px-4 text-[11px] tracking-widest uppercase font-bold text-white border-b border-gray-600">Harga</TableHead>
                  <TableHead className="text-right px-4 text-[11px] tracking-widest uppercase font-bold text-white border-b border-gray-600">Volume</TableHead>
                  <TableHead className="text-right px-6 text-[11px] tracking-widest uppercase font-bold text-white border-b border-gray-600">Spread</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 8 }).map((_, i) => (
                  <TableRow key={i} className="hover:bg-transparent">
                    <TableCell className="py-3 pl-6 border-b border-white/10">
                      <div className="h-3 w-20 bg-white/10 animate-pulse rounded" />
                    </TableCell>
                    <TableCell className="text-right px-4 border-b border-white/10">
                      <div className="h-3 w-20 bg-white/10 animate-pulse rounded ml-auto" />
                    </TableCell>
                    <TableCell className="text-right px-4 border-b border-white/10">
                      <div className="h-3 w-24 bg-white/10 animate-pulse rounded ml-auto" />
                    </TableCell>
                    <TableCell className="text-right px-6 border-b border-white/10">
                      <div className="h-3 w-14 bg-white/10 animate-pulse rounded ml-auto" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Right: description + chat */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* RightHeader skeleton */}
          <div className="card p-6 rounded-2xl">
            <div className="h-5 w-20 bg-white/10 animate-pulse rounded mb-4" />
            <div className="space-y-2 mb-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-3 w-full bg-white/5 animate-pulse rounded" />
              ))}
              <div className="h-3 w-2/3 bg-white/5 animate-pulse rounded" />
            </div>
            <div className="flex flex-col gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-8 w-full bg-white/5 animate-pulse rounded-lg" />
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

export default ExchangeDetailSkeleton
