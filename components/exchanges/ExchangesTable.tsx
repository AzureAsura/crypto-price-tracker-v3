'use client'
import { useRouter } from "next/navigation"
import { ShieldCheck, ArrowRight } from 'lucide-react'

const ExchangesTable = ({ initialData }: { initialData: any[] }) => {
    const router = useRouter()

    return (
        <div className="w-full border-t border-gray-600 bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                {initialData?.map((exchange, index) => {
                    const isHighTrust = exchange.trust_score >= 9;

                    return (
                        <div
                            key={exchange.id}
                            onClick={() => router.push(`/exchanges/${exchange.id}`)}
                            className="group relative p-6 rounded-2xl cursor-pointer  border border-gray-600 hover:border-gray-500 hover:bg-[#111] transition-all duration-300"
                        >
                            <div className="flex flex-col gap-5 h-full">

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-4">
                                        <img
                                            src={exchange.image}
                                            className="w-11 h-11 object-contain"
                                        />

                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-lg font-semibold text-white tracking-tight">
                                                    {exchange.name}
                                                </h3>
                                                {isHighTrust && (
                                                    <ShieldCheck size={18} className="text-blue-600" />
                                                )}
                                            </div>

                                            <span className="text-xs text-gray-400">
                                                Rank #{exchange.trust_score_rank} • {exchange.country || 'Global'}
                                            </span>
                                        </div>
                                    </div>

                                    <ArrowRight size={16} className="text-gray-500 group-hover:text-white" />
                                </div>

                                {/* DESC */}
                                <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
                                    {exchange.description || "High liquidity crypto exchange with advanced trading tools and global market access."}
                                </p>

                                {/* STATS */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-700">

                                    <div>
                                        <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                                            Score
                                        </div>
                                        <div className="text-lg font-semibold text-white">
                                            {exchange.trust_score}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                                            24H Vol
                                        </div>
                                        <div className="text-lg font-semibold text-white tabular-nums">
                                            {exchange.trade_volume_24h_btc.toLocaleString()}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-[11px] text-gray-500 uppercase tracking-wider">
                                            Year
                                        </div>
                                        <div className="text-sm text-gray-300">
                                            {exchange.year_established || '—'}
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExchangesTable