import { getAssetPlatforms } from '@/lib/data'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import PlatformHeader from '@/components/PlatformHeader'

const page = async () => {
  const data = await getAssetPlatforms()

  return (
    <div className="bg-black min-h-screen">

     <PlatformHeader/>

      <div className="overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar w-[95vw] mx-auto">
          <Table className="min-w-[500px] border-t border-gray-600 w-full border-separate border-spacing-0">

            <TableHeader className="bg-[#0a0a0a]">
              <TableRow className="hover:bg-transparent border-none">

                <TableHead className="sticky left-0 z-30 bg-[#0a0a0a] w-[50px] pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                  #
                </TableHead>

                <TableHead className="sticky left-[43px] z-20 bg-[#0a0a0a] min-w-[160px] pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                  Network Name
                </TableHead>

                <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                  Short Name
                </TableHead>

                <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                  Native Coin
                </TableHead>

                <TableHead className="text-right pl-4 pr-6 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                  Chain ID
                </TableHead>

              </TableRow>
            </TableHeader>

            <TableBody>
              {data?.map((platform: any, index: number) => (
                <TableRow
                  key={platform.id}
                  className="group hover:bg-[#141414] transition-colors cursor-pointer"
                >

                  <TableCell className="sticky left-0 z-10 bg-black py-4 pl-4 group-hover:bg-[#141414] transition-colors border-b border-white/10 w-[50px]">
                    <span className="font-bold text-white text-md">{index + 1}</span>
                  </TableCell>

                  <TableCell className="sticky left-[43px] z-10 py-4 pl-4 bg-black group-hover:bg-[#141414] transition-colors border-b border-white/10 !whitespace-normal min-w-[160px] max-w-[180px]">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <img
                        src={platform.image?.large || '/placeholder-chain.png'}
                        alt={platform.name}
                        className="w-6 h-6 md:w-7 md:h-7 object-contain flex-shrink-0 bg-white rounded-full"
                      />
                      <div className="flex flex-col min-w-0 overflow-hidden">
                        <span className="font-bold text-white text-sm md:text-md leading-tight break-words line-clamp-2">
                          {platform.name}
                        </span>
                        <span className="text-xs text-gray-500">{platform.id}</span>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="text-right text-white font-bold border-b border-white/10 pr-4">
                    <span className=" uppercase text-sm">
                      {platform.shortname}
                    </span>
                  </TableCell>

                  <TableCell className="text-right text-white font-medium border-b border-white/10 pr-4">
                    <span className="text-green-400 uppercase font-bold text-sm">
                      {platform.native_coin_id}
                    </span>
                  </TableCell>

                  <TableCell className="text-right text-white font-bold border-b border-white/10 pr-6">
                    {platform.chain_identifier}
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>

          </Table>
        </div>
      </div>

    </div>
  )
}

export default page