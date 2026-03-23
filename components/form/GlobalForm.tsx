'use client'

import React, { useActionState, useEffect } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import { globalFunction } from '@/lib/actions/chat'
import { toast } from 'sonner'

const GlobalForm = () => {

    const [state, formAction, isPending] = useActionState(globalFunction, null)

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
        <div className="pt-3 md:pt-4">
            <form className="relative flex items-center gap-2" action={formAction}>
                <Input
                    placeholder="..."
                    name='chat'
                    className="flex-1 bg-white/5 border-white/10 text-white rounded-xl md:rounded-2xl h-10 md:h-12 px-4 pr-10 text-sm placeholder:text-white/20"
                />
                <Button
                    className="absolute right-2 h-8 w-8 md:h-9 md:w-9 p-0 bg-blue-600 hover:bg-blue-700 text-white rounded-lg md:rounded-xl"
                    type='submit'
                    disabled={isPending}
                >
                    <Send size={16} className="md:w-[18px] md:h-[18px]" />
                </Button>
            </form>
        </div>
    )
}

export default GlobalForm