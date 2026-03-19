'use client'
import React, { useState } from 'react'
import { Search, Coins, TrendingUp, History } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const SearchButton = () => {

    const topCoins = [
        { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 'IDR 1.42B', change: '+2.4%' },
        { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 'IDR 52.1M', change: '-1.2%' },
        { id: 'solana', name: 'Solana', symbol: 'SOL', price: 'IDR 2.4M', change: '+5.7%' },
    ]

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="hidden lg:flex items-center bg-[#2a2e39] px-4 py-2 rounded-full w-64 text-gray-400 border border-transparent hover:border-gray-500 transition-all cursor-pointer group">
                    <Search size={16} className="mr-2 group-hover:text-white" />
                    <span className="text-sm font-medium">Search</span>
                </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[700px]  bg-[#171717] border border-gray-600 p-0 overflow-hidden rounded-xl">

                <DialogHeader className="px-5 pt-4 border-b border-white/10 relative">

                

                    <DialogTitle className="text-white text-lg font-semibold">
                        Search
                    </DialogTitle>

                    <div className="relative flex items-center">
                        <Search className="absolute left-0 h-4 w-4 text-zinc-400" />
                        <Input
                            placeholder="Search assets..."
                            className="h-10 pl-7 bg-transparent border-none focus-visible:ring-0 text-white text-base placeholder:text-zinc-500 font-medium"
                        />
                    </div>
                </DialogHeader>

                <div className="max-h-[380px] overflow-y-auto custom-scrollbar py-3 px-2 space-y-2">

                    <div className="text-[11px] text-zinc-500 uppercase tracking-wide font-medium px-1">
                        Trending
                    </div>

                    {topCoins.map((coin) => (
                        <div
                            key={coin.id}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer transition"
                        >

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                    <Coins size={14} className="text-zinc-400" />
                                </div>

                                <div className="flex flex-col leading-tight">
                                    <span className="text-sm font-semibold text-white">
                                        {coin.name}
                                    </span>
                                    <span className="text-[11px] text-zinc-500 uppercase">
                                        {coin.symbol}
                                    </span>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-sm font-semibold text-white">
                                    {coin.price}
                                </p>
                                <p className={`text-[11px] font-medium ${coin.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                                    }`}>
                                    {coin.change}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="px-5 py-3 border-t border-white/10 flex justify-between items-center text-[11px] text-zinc-500">
                    <span>Nirmala Finance</span>
                    <span>ESC to close</span>
                </div>

            </DialogContent>
        </Dialog>
    )
}

export default SearchButton