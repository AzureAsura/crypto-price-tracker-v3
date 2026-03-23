'use client'

import React, { useActionState, useState } from 'react'
import { Search, Loader2 } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { searchActions } from '@/lib/actions/search'
import Link from 'next/link'

const SearchButton = ({ initialData = [] }: { initialData: any[] }) => {

    const [open, setOpen] = useState(false);

    const [state, formAction, isPending] = useActionState(searchActions, {
        coins: [],
        initial: true,
    });

    const displayCoins = state.coins.length > 0 ? state.coins : (state.initial ? initialData : []);


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="flex items-center bg-[#2a2e39] px-4 py-2 rounded-full w-56 text-gray-400 border border-transparent hover:border-gray-500 transition-all cursor-pointer group">
                    <Search size={16} className="mr-2 group-hover:text-white" />
                    <span className="text-sm font-medium">Cari Koin</span>
                </div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[700px]  bg-[#030f1f] border border-white/10 p-0 overflow-hidden rounded-xl">

                <DialogHeader className="px-5 pt-4 border-b border-white/10 relative">

                    <DialogTitle className="text-white text-lg font-semibold">
                        Cari Koin
                    </DialogTitle>

                    <form action={formAction} className="pt-4 border-b border-white/10">
                        <div className="relative flex items-center mb-4">
                            {isPending ? (
                                <Loader2 className="absolute left-0 h-4 w-4 text-zinc-400 animate-spin" />
                            ) : (
                                <Search className="absolute left-0 h-4 w-4 text-zinc-400" />
                            )}
                            <Input
                                name="query"
                                placeholder="Cari aset lalu tekan Enter..."
                                autoComplete="off"
                                className="h-10 pl-7 bg-transparent border-none focus-visible:ring-0 text-white text-base placeholder:text-zinc-500 font-medium"
                            />
                        </div>
                    </form>
                </DialogHeader>

                <div className="max-h-[380px] overflow-y-auto custom-scrollbar py-3 px-2 space-y-2">

                    {state.initial && !isPending && (
                        <p className="px-3 pb-2 text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">
                            Rekomendasi aset
                        </p>
                    )}

                    {state.error && (
                        <div className="p-4 text-center text-red-500 text-xs font-bold">{state.error}</div>
                    )}

                    {displayCoins.length > 0 ? (
                        displayCoins.map((coin: any) => (
                            <Link
                                onClick={() => setOpen(false)} 
                                href={`/cryptocurrencies/${coin.id}`}
                                key={coin.id}
                                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 cursor-pointer group transition-all"
                            >

                                <div className="flex items-center gap-3">
                                    <img src={coin.image || coin.thumb} alt={coin.name} className="w-8 h-8 rounded-full bg-zinc-800" />
                                    <div className="flex flex-col leading-none">
                                        <span className="text-sm font-bold text-white ">
                                            {coin.name}
                                        </span>
                                        <span className="text-[10px] text-zinc-500 uppercase font-black tracking-tighter">
                                            {coin.symbol}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-[9px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-1 rounded font-black uppercase">
                                    Rank #{coin.market_cap_rank || '??'}
                                </div>
                            </Link>
                        ))
                    ) : (

                        <div className="py-20 text-center flex flex-col items-center gap-2">
                            <Search size={32} className="text-zinc-800" />
                            <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                                {isPending ? 'Mencari...' : 'Data tidak di temukan'}
                            </p>
                        </div>
                    )}
                </div>

            <div className="px-5 py-3 border-t border-white/10 flex  items-center text-[11px] text-zinc-500">
                <span>Nirmala Finance</span>
            </div>

        </DialogContent>
        </Dialog >
    )
}

export default SearchButton