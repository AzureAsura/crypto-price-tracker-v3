import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const MarketTableSkeleton = () => (
  <div className="overflow-hidden">
    <div className="overflow-x-auto">
      <Table className="min-w-[500px] w-full border-separate border-spacing-0">
        <TableHeader>
          <TableRow className="hover:bg-transparent border-none">
            <TableHead className="sticky left-0 z-20 min-w-[140px] pl-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
              NAMA ASET
            </TableHead>
            <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
              HARGA
            </TableHead>
            <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
              1j %
            </TableHead>
            <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
              24j %
            </TableHead>
            <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white pr-6 border-b border-gray-600">
              Kapitalisasi pasar
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 8 }).map((_, i) => (
            <TableRow key={i} className="hover:bg-transparent">
              <TableCell className="sticky left-0 z-10 py-4 pl-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 animate-pulse" />
                  <div className="flex flex-col gap-1">
                    <div className="h-3 w-20 bg-white/10 animate-pulse rounded" />
                    <div className="h-2 w-8 bg-white/5 animate-pulse rounded" />
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right px-4 border-b border-white/10">
                <div className="h-3 w-24 bg-white/10 animate-pulse rounded ml-auto" />
              </TableCell>
              <TableCell className="text-right px-4 border-b border-white/10">
                <div className="h-3 w-14 bg-white/10 animate-pulse rounded ml-auto" />
              </TableCell>
              <TableCell className="text-right px-4 border-b border-white/10">
                <div className="h-3 w-14 bg-white/10 animate-pulse rounded ml-auto" />
              </TableCell>
              <TableCell className="text-right px-4 pr-6 border-b border-white/10">
                <div className="h-3 w-28 bg-white/10 animate-pulse rounded ml-auto" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
)

export default MarketTableSkeleton
