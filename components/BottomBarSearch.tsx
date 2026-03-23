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
import { IoSearchOutline } from 'react-icons/io5'

const BottomBarSearch = ({ initialData = [] }: { initialData: any[] }) => {

    const [open, setOpen] = useState(false);

    const [state, formAction, isPending] = useActionState(searchActions, {
        coins: [],
        initial: true,
    });

    const displayCoins = state.coins.length > 0 ? state.coins : (state.initial ? initialData : []);


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className='relative flex flex-col items-center gap-1 flex-1 -mt-6'>
                    <div className='w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-900/60 transition-all'>
                        <IoSearchOutline size={24} className='text-white' />
                    </div>
                    <p className='text-[9px] font-black uppercase tracking-widest text-zinc-500'>Search</p>
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[700px]  bg-[#030f1f] border border-white/10 p-0 overflow-hidden rounded-xl">

                <DialogHeader className="px-5 pt-4 border-b border-white/10 relative">

                    <DialogTitle className="text-white text-lg font-semibold">
                        Search
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
                                placeholder="Cari asset lalu tekan Enter..."
                                autoComplete="off"
                                className="h-10 pl-7 bg-transparent border-none focus-visible:ring-0 text-white text-base placeholder:text-zinc-500 font-medium"
                            />
                        </div>
                    </form>
                </DialogHeader>

                <div className="max-h-[380px] overflow-y-auto custom-scrollbar py-3 px-2 space-y-2">

                    {state.initial && !isPending && (
                        <p className="px-3 pb-2 text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">
                            Recommended Assets
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
                                        <span className="text-sm font-bold text-white group-hover:text-blue-600">
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
                                {isPending ? 'Searching Blockchain...' : 'Signal Lost / Not Found'}
                            </p>
                        </div>
                    )}
                </div>

                <div className="px-5 py-3 border-t border-white/10 flex justify-between items-center text-[11px] text-zinc-500">
                    <span>Nirmala Finance</span>
                    <span>ESC to close</span>
                </div>

            </DialogContent>
        </Dialog >
    )
}

export default BottomBarSearch