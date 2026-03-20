

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
import { LineChart, Line, YAxis } from 'recharts'

const MiniChart = ({ data }: { data: number[] }) => {

    const chartData = data?.map(p => ({ p })) || []

    const firstPrice = data?.[0] || 0
    const lastPrice = data?.[data.length - 1] || 0
    const isActuallyDown = lastPrice < firstPrice

    return (
        <LineChart width={150} height={45} data={chartData}>

            <YAxis hide domain={['dataMin', 'dataMax']} />
            <Line
                type="monotone"
                dataKey="p"
                stroke={isActuallyDown ? '#ef4444' : '#22c55e'}
                strokeWidth={1.5}
                dot={false}
                isAnimationActive={true}
            />
        </LineChart>
    )
}
const CoinsTable = ({ initialData }: { initialData: any[] }) => {
    const router = useRouter()

    return (
        <div className="bg-black overflow-hidden">
            <div className="overflow-x-auto custom-scrollbar w-[95vw] mx-auto ">
                <Table className="min-w-[500px] border-t border-gray-600 w-full border-separate border-spacing-0 ">
                    <TableHeader className="bg-[#0a0a0a]">

                        <TableRow className="hover:bg-transparent border-none">
                            <TableHead className="sticky left-0 z-30 bg-[#0a0a0a] w-[50px] pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                #
                            </TableHead>
                            <TableHead className="sticky left-[40px] z-20 bg-[#0a0a0a] min-w-[140px] pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                Asset Name
                            </TableHead>
                            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                Price
                            </TableHead>
                            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                1h %
                            </TableHead>
                            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                24h %
                            </TableHead>
                            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                7d %
                            </TableHead>
                            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white border-b border-gray-600">
                                Market Cap
                            </TableHead>
                            <TableHead className="text-right pl-4 text-[12px] tracking-widest uppercase font-bold text-white pr-6 border-b border-gray-600">
                                Last 7 Days
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {initialData?.map((coin, index) => {
                            const isDown1h = coin.price_change_percentage_1h_in_currency < 0
                            const isDown24h = coin.price_change_percentage_24h_in_currency < 0
                            const isDown7d = coin.price_change_percentage_7d_in_currency < 0

                            return (

                                <TableRow
                                    key={coin.id}
                                    onClick={() => router.push(`/cryptocurrencies/${coin.id}`)}
                                    className="group hover:bg-[#141414] transition-colors cursor-pointer">

                                    <TableCell className="sticky left-0 z-10 bg-black py-4 pl-4 group-hover:bg-[#141414] transition-colors border-b border-white/10 w-[50px]">
                                        <span className='font-bold text-white text-md'>{coin.market_cap_rank}</span>
                                    </TableCell>



                                    <TableCell className="sticky left-[40px] z-10 py-4 pl-4 bg-black group-hover:bg-[#141414] transition-colors border-b border-white/10 !whitespace-normal min-w-[140px] max-w-[160px]">
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



                                    <TableCell className="text-right text-white font-medium border-b border-white/10">
                                        IDR {coin.current_price.toLocaleString('id-ID')}
                                    </TableCell>

                                    <TableCell className={`text-right font-bold border-b border-white/10 ${isDown1h ? 'text-red-400' : 'text-green-400'}`}>
                                        <span className="text-[13px]">
                                            {isDown1h ? '▼' : '▲'} {Math.abs(coin.price_change_percentage_1h_in_currency || 0).toFixed(2)}%
                                        </span>
                                    </TableCell>



                                    <TableCell className={`text-right font-bold border-b border-white/10 ${isDown24h ? 'text-red-400' : 'text-green-400'}`}>
                                        {isDown24h ? '▼' : '▲'} {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                                    </TableCell>

                                    <TableCell className={`text-right font-bold border-b border-white/10 ${isDown7d ? 'text-red-400' : 'text-green-400'}`}>
                                        <span className="text-[13px]">
                                            {isDown7d ? '▼' : '▲'} {Math.abs(coin.price_change_percentage_7d_in_currency || 0).toFixed(2)}%
                                        </span>
                                    </TableCell>




                                    <TableCell className="text-right text-white border-b border-white/10">
                                        IDR {coin.market_cap.toLocaleString('id-ID')}
                                    </TableCell>

                                    <TableCell className="text-right border-b border-white/10 pr-6">
                                        <div className="flex justify-end">
                                            <MiniChart
                                                data={coin.sparkline_in_7d.price}
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