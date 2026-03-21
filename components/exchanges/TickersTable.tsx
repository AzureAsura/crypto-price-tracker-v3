
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

const TickersTable = ({ tickers }: any) => {
    return (
        <div className="card rounded-2xl overflow-hidden  shadow-2xl relative">
            <div className="p-6 border-b border-gray-600 flex justify-between items-center">
                <h3 className="text-white font-black uppercase tracking-tight text-sm">Top Trading Pairs</h3>
                <span className="text-[10px] text-blue-500 font-black bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded uppercase tracking-widest">
                    Live Market
                </span>
            </div>

            <div className="overflow-x-auto custom-scrollbar overflow-hidden">
                <Table className="min-w-[600px] w-full border-separate border-spacing-0 overflow-hidden">
                    <TableHeader className="">
                        <TableRow className="hover:bg-transparent border-none">
                            <TableHead className="sticky left-0 z-20 pl-6 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                Pair
                            </TableHead>
                            <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                Price
                            </TableHead>
                            <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                24h Vol (USD)
                            </TableHead>
                            <TableHead className="text-right px-4 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                Spread
                            </TableHead>
                            <TableHead className="text-center pr-6 text-[10px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                Action
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
                                    <Link href={`/cryptocurrencies/${ticker.coin_id}`} className="flex items-center gap-3">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-white text-[15px] whitespace-nowrap uppercase">
                                                {ticker.base}<span className="text-zinc-300 text-[11px] ml-1">/{ticker.target}</span>
                                            </span>
                                            <span className="text-[9px] text-white font-bold uppercase tracking-widest">
                                                {ticker.market?.name}
                                            </span>
                                        </div>
                                    </Link>
                                </TableCell>

                                <TableCell className="text-right text-white whitespace-nowrap px-4 text-[15px] border-b border-white/10 font-bold">
                                    ${ticker.last > 1 ? ticker.last.toLocaleString('id-ID') : ticker.last.toFixed(6)}
                                </TableCell>

                                <TableCell className="text-right text-white whitespace-nowrap px-4 text-[15px] border-b border-white/10">
                                    ${Math.round(ticker.converted_volume?.usd || 0).toLocaleString('id-ID')}
                                </TableCell>

                                <TableCell className="text-right text-white whitespace-nowrap px-4 text-[14px] border-b border-white/10">
                                    {ticker.bid_ask_spread_percentage?.toFixed(3)}%
                                </TableCell>

                                <TableCell className="text-center pr-6 border-b border-white/10">
                                    <a 
                                        href={ticker.trade_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-600/20 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    >
                                        <ExternalLink size={14} />
                                    </a>
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