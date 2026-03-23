"use client"

import { useEffect, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "lucide-react"

export default function GlobalChatList({ data, currentUserId }: any) {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const el = containerRef.current
        if (!el) return
        el.scrollTop = el.scrollHeight
    }, [data])

    return (
        <div
            ref={containerRef}
            className="overflow-y-auto h-full pb-4 space-y-4 md:space-y-6"
        >
            {data?.map((item: any) => {
                const isMe = item.userId === currentUserId

                return (
                    <div
                        key={item.id}
                        className={`group flex gap-2 md:gap-4 items-start p-2 md:p-3 transition-all ${isMe ? "flex-row-reverse" : ""}`}
                    >
                        <Avatar className="w-8 h-8 md:w-10 md:h-10 border border-white/10 shrink-0">
                            <AvatarImage src={item.user.image || ""} className="object-cover" />
                            <AvatarFallback className="bg-blue-600 text-white">
                                <User size={16} className="md:w-5 md:h-5" />
                            </AvatarFallback>
                        </Avatar>

                        <div className={`flex-1 flex flex-col ${isMe ? "items-end" : "items-start"} space-y-1`}>
                            <div className={`flex items-center gap-1.5 md:gap-2 ${isMe ? "flex-row-reverse" : ""}`}>
                                <span className="font-semibold text-xs md:text-sm text-blue-400">
                                    @{item.user.name}
                                </span>
                                <span className="text-[9px] md:text-[10px] text-white/80">
                                    {new Date(item.createdAt).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </span>
                            </div>

                            <p className={`text-xs md:text-sm text-white leading-relaxed bg-white/5 px-3 py-2 md:p-3 rounded-xl md:rounded-2xl inline-block max-w-[85%] ${isMe ? "rounded-tr-none bg-blue-600/20" : "rounded-tl-none"}`}>
                                {item.content}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}