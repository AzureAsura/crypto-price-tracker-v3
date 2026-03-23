
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const TickersTable = ({ tickers }: any) => {
    return (
        <div className="card rounded-2xl overflow-hidden  shadow-2xl relative">
            <div className="p-6 border-b border-gray-600 flex justify-between items-center">
                <h3 className="text-white font-black uppercase tracking-tight text-sm">PASANGAN DAGANG TERATAs</h3>
            </div>

            <div className="overflow-x-auto custom-scrollbar overflow-hidden">
                <Table className="min-w-[600px] w-full border-separate border-spacing-0 overflow-hidden">
                    <TableHeader className="">
                        <TableRow className="hover:bg-transparent border-none">
                            <TableHead className="sticky left-0 z-20 pl-6 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                Pasangan
                            </TableHead>
                            <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                harga
                            </TableHead>
                            <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                Vol 24j (usd)
                            </TableHead>
                            <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                Selisih
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {tickers?.map((ticker: any, index: number) => (
                            <TableRow
                                key={index}
                                className="group hover:bg-white/5 transition-colors border-none"
                            >
                                <TableCell className="sticky left-0 z-10 py-4 pl-6  transition-colors border-b border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-white text-[15px] whitespace-nowrap uppercase">
                                                {ticker.base}<span className="text-zinc-300 text-[11px] ml-1">/{ticker.target}</span>
                                            </span>
                                            <span className="text-[9px] text-white font-bold uppercase tracking-widest">
                                                {ticker.market?.name}
                                            </span>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="text-right text-white whitespace-nowrap px-4 text-[15px] border-b border-white/10 font-bold">
                                    ${ticker.last > 1 ? ticker.last.toLocaleString('id-ID') : ticker.last.toFixed(6)}
                                </TableCell>

                                <TableCell className="text-right font-bold text-white whitespace-nowrap px-4 text-[15px] border-b border-white/10">
                                    ${Math.round(ticker.converted_volume?.usd || 0).toLocaleString('id-ID')}
                                </TableCell>

                                <TableCell className="text-right font-bold text-white whitespace-nowrap px-4 text-[14px] border-b border-white/10">
                                    {ticker.bid_ask_spread_percentage?.toFixed(3)}%
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default TickersTable