'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation"

const TrendingMiniChart = ({ url, isDown }: { url: string, isDown: boolean }) => {
    if (!url) return <div className="w-[150px] h-[45px]" />;

    return (
        <div className="w-[150px] h-[45px] flex items-center justify-end">
            <img
                src={url}
                alt="chart"
                className="w-full h-full object-contain opacity-80"
                style={{
                    filter: isDown
                        ? 'grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(100%)'
                        : 'grayscale(100%) brightness(80%) sepia(100%) hue-rotate(70deg) saturate(500%) contrast(100%)'
                }}
            />

            
        </div>
    )
}

const CoinsTable = ({ initialData }: { initialData: any[] }) => {

    const router = useRouter()

    return (
        <div className="overflow-hidden">
            <div className="overflow-x-auto custom-scrollbar w-[95vw] mx-auto border border-gray-600 rounded-2xl">
                <Table className="min-w-[500px] bg-[#030f1f] w-full border-separate border-spacing-0 ">
                    <TableHeader className="bg-[#030f1f]">
                        <TableRow className="hover:bg-transparent border-none">
                            <TableHead className="sticky left-0 z-30 bg-[#030f1f] w-[50px] pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">#</TableHead>
                            <TableHead className="sticky left-[50px] z-20 bg-[#030f1f] min-w-[140px] pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">nama aset</TableHead>
                            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">harga</TableHead>
                            <TableHead className="text-right pl-4 text-[12px] tracking-widest font-bold text-white border-b border-gray-600">24j %</TableHead>
                            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">peringkat</TableHead>
                            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">Kapitalisasi pasar</TableHead>
                            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white pr-6 border-b border-gray-600">7 hari terakhir (Sparkline)</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {initialData?.map((coin, index) => {
                            const p24h = coin.price_change_percentage_24h ?? 0
                            const isDown = p24h < 0

                            return (
                                <TableRow
                                    key={coin.id}
                                    onClick={() => router.push(`/cryptocurrencies/${coin.id}`)}
                                    className="group hover:bg-[#1E1E1E] transition-colors cursor-pointer">

                                    <TableCell className="sticky left-0 z-10 bg-[#030f1f] py-4 pl-4 border-b border-white/10 w-[50px] group-hover:bg-[#1E1E1E] transition-colors">
                                        <span className='font-bold text-white text-md'>{index + 1}</span>
                                    </TableCell>

                                    <TableCell className="sticky left-[50px] z-10 py-4 pl-4 bg-[#030f1f] group-hover:bg-[#1E1E1E] transition-colors border-b border-white/10 !whitespace-normal min-w-[140px] max-w-[160px]">
                                        <div className="flex items-center gap-2 md:gap-3 min-w-0">
                                            <img
                                                src={coin.image}
                                                alt=""
                                                className="w-6 h-6 md:w-7 md:h-7 object-contain flex-shrink-0"
                                            />
                                            <div className="flex flex-col min-w-0 overflow-hidden">
                                                <span className="font-bold text-white text-sm md:text-md leading-tight break-words line-clamp-2">
                                                    {coin.name}
                                                </span>
                                                <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
                                                    {coin.symbol}
                                                </span>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell className="text-right text-white font-medium border-b border-white/10 group-hover:bg-[#1E1E1E] transition-colors">
                                        IDR {coin.current_price?.toLocaleString('id-ID')}
                                    </TableCell>

                                    <TableCell className={`text-right font-bold border-b border-white/10 group-hover:bg-[#1E1E1E] transition-colors ${isDown ? 'text-red-400' : 'text-green-400'}`}>
                                        {isDown ? '▼' : '▲'} {Math.abs(p24h).toFixed(2)}%
                                    </TableCell>

                                    <TableCell className="text-right text-white font-medium border-b border-white/10 group-hover:bg-[#1E1E1E] transition-colors">
                                        # {coin.market_cap_rank ?? '-'}
                                    </TableCell>

                                    <TableCell className="text-right text-white border-b border-white/10 group-hover:bg-[#1E1E1E] transition-colors">
                                        IDR {(coin.market_cap).toLocaleString('id-ID')}
                                    </TableCell>

                                    <TableCell className="text-right border-b border-white/10 pr-6 group-hover:bg-[#1E1E1E] transition-colors">
                                        <div className="flex justify-end">
                                            <TrendingMiniChart
                                                url={coin.sparkline_url}
                                                isDown={isDown}
                                            />
                                        </div>
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

export default CoinsTable