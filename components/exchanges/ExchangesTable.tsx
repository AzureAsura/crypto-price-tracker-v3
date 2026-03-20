'use client'
import { useRouter } from "next/navigation"
import { ShieldCheck, ArrowRight } from 'lucide-react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const ExchangesTable = ({ initialData }: { initialData: any[] }) => {
    const router = useRouter()

    return (

            <div className=" overflow-hidden">
                <div className="overflow-x-auto custom-scrollbar w-[95vw] mx-auto border border-gray-600 rounded-2xl">
                    <Table className="min-w-[500px] bg-[#030f1f] w-full border-separate border-spacing-0 ">
                        <TableHeader className="bg-[#030f1f]">

                            <TableRow className="hover:bg-transparent border-none">
                                <TableHead className="sticky left-0 z-30 bg-[#030f1f] w-[50px] pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                    #
                                </TableHead>
                                <TableHead className="sticky left-[40px] z-20 bg-[#030f1f] min-w-[140px] pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                    Exchange Name
                                </TableHead>
                                <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                    Trust Score
                                </TableHead>
                                <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                    Year Established
                                </TableHead>
                                <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                    Country
                                </TableHead>
                                <TableHead className="text-right px-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                    24H Vol
                                </TableHead>
                            </TableRow>
                        </TableHeader>


                        <TableBody>
                            {initialData?.map((exchange, index) => {

                                return (
                                    <TableRow
                                        key={exchange.id}
                                        onClick={() => router.push(`/exchanges/${exchange.id}`)}
                                        className="group hover:bg-[#1E1E1E] transition-colors cursor-pointer"
                                    >
                                        <TableCell className="sticky left-0 z-10 bg-[#030f1f] py-4 pl-4 group-hover:bg-[#1E1E1E] transition-colors border-b border-white/10 w-[50px]">
                                            <span className='font-bold text-white text-md'>{exchange.trust_score_rank}</span>
                                        </TableCell>

                                        <TableCell className="sticky left-[40px] z-10 py-4 pl-4 bg-[#030f1f] group-hover:bg-[#1E1E1E] transition-colors border-b border-white/10 !whitespace-normal min-w-[140px] max-w-[160px]">
                                            <div className="flex items-center gap-2 md:gap-3 min-w-0">
                                                <img
                                                    src={exchange.image}
                                                    alt={exchange.name}
                                                    className="w-6 h-6 md:w-7 md:h-7 object-contain flex-shrink-0"
                                                />
                                                <div className="flex flex-col min-w-0 overflow-hidden">
                                                    <span className="font-bold text-white text-sm md:text-md leading-tight break-words line-clamp-2">
                                                        {exchange.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </TableCell>

                                        <TableCell className="text-right text-white font-medium border-b border-white/10">
                                            <div className="flex flex-col items-end">
                                                <span className="text-green-400 font-bold">{exchange.trust_score}/10</span>
                                            </div>
                                        </TableCell>

                                        <TableCell className="text-right text-white border-b font-bold border-white/10">
                                            {exchange.year_established || 'N/A'}
                                        </TableCell>

                                        <TableCell className="text-right text-white font-bold border-b border-white/10">
                                            {exchange.country}
                                        </TableCell>

                                        <TableCell className="text-right text-white font-bold border-b border-white/10 pr-4">
                                            {exchange.trade_volume_24h_btc.toLocaleString('id-ID', { maximumFractionDigits: 2 })} BTC
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

export default ExchangesTable