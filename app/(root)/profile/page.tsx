import { auth } from "@/auth"
import Image from "next/image"
import { signOut } from "@/auth"
import Link from "next/link"
import EditProfile from "@/components/profile/EditProfile"
import { getProfile } from "@/lib/actions/profile"
import { getChatByUserId } from "@/lib/actions/chat"
import { redirect } from "next/navigation"
import { LogOut } from "lucide-react"


const page = async () => {

  const session = await auth()

  if (!session) {
    redirect('/auth')
  }

  const [data, chatData] = await Promise.all([

    getProfile(session?.user.id),
    getChatByUserId(session?.user.id)

  ])

  if (!chatData) {
    return null
  }


  return (
    <div className='px-4 md:px-0 md:w-[95vw] min-h-screen mx-auto pt-24 lg:flex-row flex-col flex gap-8'>

      <div className='w-[300px] px-6 pb-6 pt-10 flex flex-col justify-center items-center card border border-white/10 rounded-[30px] relative z-0 h-fit max-lg:w-full'>
        <div className='w-[220px] h-[220px] relative rounded-full overflow-hidden border border-white/20'>
          <Image
            src={data?.image || "/placeholder.jpg"}
            alt={data?.name || ""}
            fill
            className='object-cover'
            priority
          />
        </div>

        <p className='text-3xl font-black mt-7 text-center leading-7 text-white'>
          @{data?.name}
        </p>


        <p className='mt-5 text-center text-sm text-white/70'>
          {data?.bio}
        </p>

        <EditProfile data={data as any} />
        <div className="w-full h-px bg-white/10 my-6" />

        <form
          action={async () => {
            "use server"
            await signOut({ redirectTo: '/' })
          }}
          className="w-full"
        >
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm font-semibold cursor-pointer"
          >
            <LogOut className="size-4" />
            Sign Out
          </button>
        </form>

      </div>




      <div className='flex-1 flex flex-col gap-5'>
        {chatData.map((item: any) => (
          <div
            key={item.id}
            className="group flex gap-4 p-6 rounded-2xl card"
          >
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                <img
                  src={data?.image || "/placeholder.jpg"}
                  alt={data?.name || ""}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-tight">
                  {data?.name}
                </span>
                <span className="bg-blue-500/20 text-blue-400 text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter border border-blue-500/30">
                  {item.coinId}
                </span>
              </div>

              <p className="text-[14px] text-white/80 leading-relaxed max-w-2xl">
                {item.content}
              </p>

              <div className="flex items-center gap-4 mt-2">
                <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">
                  {new Date(item.createdAt).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>



    </div>
  )
}

export default page