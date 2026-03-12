import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import clsx from "clsx"
import { cryptoData } from '@/constants'

const ContentTable = () => {
  return (
    <div className="bg-[#0a0a0a] overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <Table className="min-w-[500px] w-full border-separate border-spacing-0 ">
          <TableHeader className="bg-[#0a0a0a]">

            <TableRow className="hover:bg-transparent border-none">
              {/* <TableHead className="sticky left-0 z-30 bg-[#0a0a0a] w-[50px] pl-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                #
              </TableHead>
              <TableHead className="sticky left-[40px] z-20 bg-[#0a0a0a] min-w-[140px] pl-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                Asset Name
              </TableHead> */}

              <TableHead className="sticky left-0 z-20 bg-[#0a0a0a] min-w-[140px] pl-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                Asset Name
              </TableHead>
              <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                Price
              </TableHead>
              <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                1h %
              </TableHead>
              <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                24h %
              </TableHead>
              <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white pr-6 border-b border-gray-600">
                Market Cap
              </TableHead>
            </TableRow>
          </TableHeader>


          <TableBody>
            {cryptoData.map((coin, index) => (
              <TableRow key={coin.id} className="group hover:bg-[#141414] transition-colors">

                {/* <TableCell className="sticky left-0 z-10 bg-[#0a0a0a] py-4 pl-4 group-hover:bg-[#141414] transition-colors border-b border-white/10 w-[50px]">
                  <span className='font-bold text-white text-md'>{index + 1}</span>
                </TableCell> */}


                {/* <TableCell className="sticky left-[40px] z-10 bg-[#0a0a0a] py-4 pl-4 group-hover:bg-[#141414] transition-colors border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <img src={coin.logo} alt="" className="w-7 h-7 object-contain" />
                    <div className="flex flex-col">
                      <span className="font-bold text-white text-md whitespace-nowrap">{coin.name}</span>
                      <span className="text-[10px] text-white font-semibold uppercase">{coin.symbol}</span>
                    </div>
                  </div>
                </TableCell> */}

                <TableCell className="sticky left-0 z-10 bg-[#0a0a0a] py-4 pl-4 group-hover:bg-[#141414] transition-colors border-b border-white/10">

                  <div className="flex items-center gap-3">

                    <img src={coin.logo} alt="" className="w-7 h-7 object-contain" />

                    <div className="flex flex-col">

                      <span className="font-bold text-white text-md whitespace-nowrap">{coin.name}</span>

                      <span className="text-[10px] text-white font-semibold uppercase">{coin.symbol}</span>

                    </div>

                  </div>

                </TableCell>


                <TableCell className="text-right text-white whitespace-nowrap px-4 text-[15px] border-b border-white/10">
                  {coin.price}
                </TableCell>

                <TableCell
                  className={clsx("text-right  font-bold whitespace-nowrap px-4 text-[15px] border-b border-white/10",
                    coin.isDown1h ? "text-red-400" : "text-green-400")}>
                  <span className="flex items-center justify-end gap-1">
                    {coin.isDown1h ? "▼" : "▲"}{" "}
                    {coin.change1h.replace("+", "").replace("-", "")}
                  </span>
                </TableCell>

                <TableCell
                  className={clsx("text-right  font-bold whitespace-nowrap px-4 text-[15px] border-b border-white/10",
                    coin.isDown24h ? "text-red-400" : "text-green-400")}>
                  <span className="flex items-center justify-end gap-1 text-md">
                    {coin.isDown24h ? "▼" : "▲"}{" "}
                    {coin.change24h.replace("+", "").replace("-", "")}
                  </span>
                </TableCell>


                <TableCell className="text-right text-white whitespace-nowrap px-4 pr-6 text-[15px] border-b border-white/10">
                  {coin.marketCap}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ContentTable