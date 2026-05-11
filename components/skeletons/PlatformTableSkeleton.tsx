import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const PlatformTableSkeleton = () => (
  <div className="overflow-hidden">
    <div className="overflow-x-auto custom-scrollbar w-[95vw] mx-auto border border-gray-600 rounded-2xl">
      <Table className="min-w-[500px] w-full border-separate border-spacing-0">
        <TableHeader className="bg-[#030f1f]">
          <TableRow className="hover:bg-transparent border-none">
            <TableHead className="sticky left-0 z-30 bg-[#030f1f] w-[50px] pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">#</TableHead>
            <TableHead className="sticky left-[43px] z-20 bg-[#030f1f] min-w-[160px] pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">Nama Jaringan</TableHead>
            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">Nama</TableHead>
            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">koin jaringan</TableHead>
            <TableHead className="text-right pl-4 pr-6 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">id jaringan</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 15 }).map((_, i) => (
            <TableRow key={i} className="group bg-[#030f1f] hover:bg-transparent">
              <TableCell className="sticky left-0 z-10 bg-[#030f1f] py-4 pl-4 border-b border-white/10 w-[50px]">
                <div className="h-3 w-5 bg-white/10 animate-pulse rounded" />
              </TableCell>
              <TableCell className="sticky left-[43px] z-10 py-4 pl-4 bg-[#030f1f] border-b border-white/10 min-w-[160px]">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 animate-pulse flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="h-3 w-24 bg-white/10 animate-pulse rounded" />
                    <div className="h-2 w-12 bg-white/5 animate-pulse rounded" />
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right border-b border-white/10 pr-4">
                <div className="h-3 w-10 bg-white/10 animate-pulse rounded ml-auto" />
              </TableCell>
              <TableCell className="text-right border-b border-white/10 pr-4">
                <div className="h-3 w-20 bg-white/10 animate-pulse rounded ml-auto" />
              </TableCell>
              <TableCell className="text-right border-b border-white/10 pr-6">
                <div className="h-3 w-8 bg-white/10 animate-pulse rounded ml-auto" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
)

export default PlatformTableSkeleton
