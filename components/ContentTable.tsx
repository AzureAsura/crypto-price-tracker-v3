'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import clsx from "clsx"
import { useRouter } from 'next/navigation'

const ContentTable = ({ coins }: any) => {

  const router = useRouter()

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <Table className="min-w-[500px] w-full border-separate border-spacing-0 overflow-hidden">
          <TableHeader className="">
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

            {coins?.map((coin: any) => {
              const isDown1h = coin.price_change_percentage_1h_in_currency < 0
              const isDown24h = coin.price_change_percentage_24h_in_currency < 0

              return (
                <TableRow
                  key={coin.id}
                  onClick={() => router.push(`/cryptocurrencies/${coin.id}`)}
                  className="group hover:bg-white/5 transition-colors cursor-pointer">

                  <TableCell className="sticky left-0 z-10 py-4 pl-4  transition-colors border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <img src={coin.image} alt="" className="w-7 h-7 object-contain" />
                      <div className="flex flex-col">
                        <span className="font-bold text-white text-md whitespace-nowrap">{coin.name}</span>
                        <span className="text-[10px] text-white font-semibold uppercase">{coin.symbol}</span>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="text-right text-white whitespace-nowrap px-4 text-[15px] border-b border-white/10">
                    IDR {coin.current_price?.toLocaleString('id-ID')}
                  </TableCell>

                  <TableCell
                    className={clsx("text-right font-bold whitespace-nowrap px-4 text-[15px] border-b border-white/10",
                      isDown1h ? "text-red-400" : "text-green-400")}>
                    <span className="flex items-center justify-end gap-1">
                      {isDown1h ? "▼" : "▲"}{" "}
                      {Math.abs(coin.price_change_percentage_1h_in_currency || 0).toFixed(2)}%
                    </span>
                  </TableCell>

                  <TableCell
                    className={clsx("text-right font-bold whitespace-nowrap px-4 text-[15px] border-b border-white/10",
                      isDown24h ? "text-red-400" : "text-green-400")}>
                    <span className="flex items-center justify-end gap-1 text-md">
                      {isDown24h ? "▼" : "▲"}{" "}
                      {Math.abs(coin.price_change_percentage_24h_in_currency || 0).toFixed(2)}%
                    </span>
                  </TableCell>

                  <TableCell className="text-right text-white whitespace-nowrap px-4 pr-6 text-[15px] border-b border-white/10">
                    IDR {coin.market_cap?.toLocaleString('id-ID')}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ContentTable