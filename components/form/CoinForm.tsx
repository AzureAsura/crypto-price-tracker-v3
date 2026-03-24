'use client'

import { useState, useEffect, useRef, useActionState } from 'react'
import { MessageSquare, User, Send, Loader } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogTitle
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { coinFunction } from '@/lib/actions/chat'
import { toast } from 'sonner'

const CoinForm = ({ id, chatData, currentUserId }: { id: string, chatData: any[], currentUserId: string }) => {

    const [open, setOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const el = containerRef.current
        if (!el) return
        el.scrollTop = el.scrollHeight
    }, [chatData])

    const chatById = coinFunction.bind(null, id)

    const [state, formAction, isPending] = useActionState(chatById, null)

    useEffect(() => {
        if (state?.message) {
            if (state.success) {
                toast.success(state.message)
            } else {
                toast.error(state.message)
            }
        }
    }, [state])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="w-full mt-8 py-3 rounded-xl border border-gray-600 text-white font-bold text-sm btn-color btn-color:hover transition-colors cursor-pointer">
                    Bergabung
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[700px] h-[80vh] bg-[#030f1f] border border-white/10 p-0 overflow-hidden rounded-2xl flex flex-col">

                <DialogHeader className="px-5 pt-4 pb-3 border-b border-white/10 shrink-0">
                    <div className="flex items-center gap-3">
                        <div>
                            <DialogTitle className="text-white text-base font-bold tracking-tight">
                                Forum Diskusi
                            </DialogTitle>
                            <p className="text-[10px] text-white/40 italic">
                                Bagikan pengalamanmu.
                            </p>
                        </div>
                    </div>
                </DialogHeader>

                <div
                    ref={containerRef}
                    className="flex-1 overflow-y-auto px-3 py-4 space-y-4 min-h-0"
                >
                    {chatData?.length === 0 && (
                        <div className="flex items-center justify-center h-full text-white/30 text-sm">
                            Belum ada diskusi. Mulai percakapan!
                        </div>
                    )}

                    {chatData?.map((item: any) => {
                        const isMe = item.userId === currentUserId
                        return (
                            <div
                                key={item.id}
                                className={`group flex gap-2 md:gap-4 items-start p-2 transition-all ${isMe ? 'flex-row-reverse' : ''}`}
                            >
                                <Avatar className="w-8 h-8 md:w-10 md:h-10 border border-white/10 shrink-0">
                                    <AvatarImage src={item.user?.image || ''} className="object-cover" />
                                    <AvatarFallback className="bg-blue-600 text-white">
                                        <User size={16} />
                                    </AvatarFallback>
                                </Avatar>

                                <div className={`flex-1 flex flex-col ${isMe ? 'items-end' : 'items-start'} space-y-1`}>
                                    <div className={`flex items-center gap-1.5 ${isMe ? 'flex-row-reverse' : ''}`}>
                                        <span className="font-semibold text-xs text-blue-400">
                                            @{item.user?.name}
                                        </span>
                                        <span className="text-[9px] text-white/40">
                                            {new Date(item.createdAt).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </span>
                                    </div>
                                    <p className={`text-xs md:text-sm text-white leading-relaxed px-3 py-2 md:p-3 rounded-xl md:rounded-2xl inline-block max-w-[85%] ${isMe ? 'rounded-tr-none bg-blue-600/20' : 'rounded-tl-none bg-white/5'}`}>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="px-3 pb-4 pt-2 border-t border-white/10 shrink-0">

                    <form action={formAction} className='flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 border border-white/10 focus-within:border-blue-500/50 transition-colors'>
                        <input
                            type="text"
                            name='chat'
                            placeholder="Masukkan pesan..."
                            className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
                        />
                        <button type='submit' disabled={isPending} className="p-1.5 rounded-lg text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                            {isPending ? <Loader size={16} /> : <Send size={16} />}
                        </button>

                    </form>
                </div>

            </DialogContent>
        </Dialog>
    )
}

export default CoinForm