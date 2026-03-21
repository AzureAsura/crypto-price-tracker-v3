import { Send, MessageSquare, User, MoreVertical } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import GlobalForm from '@/components/form/GlobalForm'
import { getGlobalChat } from '@/lib/actions/chat'
import { auth } from '@/auth' 
import { redirect } from 'next/navigation'

const page = async() => {
  const session = await auth()
  
  if (!session) {
    redirect('/auth')
  }
  
  const currentUserId = session?.user?.id
  
  const data = await getGlobalChat()


  return (
    <div className="h-[calc(100vh-120px)] pb-20 md:pb-0 mt-24 w-full px-3 md:px-0 md:w-[95vw] mx-auto">
      <div className="flex flex-col h-full p-3 md:p-5 card rounded-xl md:rounded-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 px-1">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-blue-500/10 rounded-lg md:rounded-xl text-blue-500">
              <MessageSquare size={20} className="md:w-6 md:h-6" />
            </div>
            <div>
              <h1 className="text-sm md:text-xl font-bold text-white tracking-tight">
                Global Discussion
              </h1>
              <p className="text-[10px] md:text-xs text-white/40 italic">
                Share your thoughts with other developers.
              </p>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1 pr-2 md:pr-4 overflow-hidden">
          <div className="space-y-4 md:space-y-6 pb-4">
            {data?.map((item: any) => {
              const isMe = item.userId === currentUserId; 

              return (
                <div
                  key={item.id}
                  className={`group flex gap-2 md:gap-4 items-start p-2 md:p-3 transition-all ${isMe ? 'flex-row-reverse' : ''}`}
                >
                  <Avatar className="w-8 h-8 md:w-10 md:h-10 border border-white/10 shrink-0">
                    <AvatarImage src={item.user.image} className='object-cover'/>
                    <AvatarFallback className="bg-blue-600 text-white">
                      <User size={16} className="md:w-5 md:h-5" />
                    </AvatarFallback>
                  </Avatar>

                  <div className={`flex-1 flex flex-col ${isMe ? 'items-end' : 'items-start'} space-y-1`}>
                    <div className={`flex items-center gap-1.5 md:gap-2 ${isMe ? 'flex-row-reverse' : ''}`}>
                      <span className="font-semibold text-xs md:text-sm text-blue-400">
                        @{item.user.name}
                      </span>
                      <span className="text-[9px] md:text-[10px] text-white/80">
                         {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    <p className={`text-xs md:text-sm text-white leading-relaxed bg-white/5 px-3 py-2 md:p-3 rounded-xl md:rounded-2xl inline-block max-w-[85%] ${isMe ? 'rounded-tr-none bg-blue-600/20' : 'rounded-tl-none'}`}>
                      {item.content}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>

        <GlobalForm />
      </div>
    </div>
  )
}

export default page