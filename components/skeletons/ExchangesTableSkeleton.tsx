import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ExchangesTableSkeleton = () => (
  <div className="overflow-hidden rounded-2xl">
    <div className="overflow-x-auto custom-scrollbar w-full border border-gray-600 rounded-2xl">
      <Table className="min-w-[500px] w-full border-separate border-spacing-0 bg-[#030f1f]">
        <TableHeader>
          <TableRow className="hover:bg-transparent border-none">
            <TableHead className="sticky left-0 z-30 bg-[#030f1f] w-[50px] pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">#</TableHead>
            <TableHead className="sticky left-[40px] z-20 bg-[#030f1f] min-w-[160px] pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">Nama Bursa</TableHead>
            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">Trust Score</TableHead>
            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">Volume 24H</TableHead>
            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">Tahun</TableHead>
            <TableHead className="text-right pl-4 pr-6 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">Negara</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 10 }).map((_, i) => (
            <TableRow key={i} className="hover:bg-transparent">
              <TableCell className="sticky left-0 z-10 bg-[#030f1f] py-4 pl-4 border-b border-white/10 w-[50px]">
                <div className="h-3 w-5 bg-white/10 animate-pulse rounded" />
              </TableCell>
              <TableCell className="sticky left-[40px] z-10 py-4 pl-4 bg-[#030f1f] border-b border-white/10 min-w-[160px]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 animate-pulse flex-shrink-0" />
                  <div className="h-3 w-28 bg-white/10 animate-pulse rounded" />
                </div>
              </TableCell>
              <TableCell className="text-right border-b border-white/10">
                <div className="h-3 w-12 bg-white/10 animate-pulse rounded ml-auto" />
              </TableCell>
              <TableCell className="text-right border-b border-white/10">
                <div className="h-3 w-24 bg-white/10 animate-pulse rounded ml-auto" />
              </TableCell>
              <TableCell className="text-right border-b border-white/10">
                <div className="h-3 w-10 bg-white/10 animate-pulse rounded ml-auto" />
              </TableCell>
              <TableCell className="text-right border-b border-white/10 pr-6">
                <div className="h-3 w-16 bg-white/10 animate-pulse rounded ml-auto" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
)

export default ExchangesTableSkeleton
