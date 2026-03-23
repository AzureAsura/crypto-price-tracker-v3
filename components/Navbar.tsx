
import { Github } from 'lucide-react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import SearchButton from './SearchButton'
import NavLink from './NavLink'
import { auth } from '@/auth'




const navLink = [
  { name: 'Koin', href: '/cryptocurrencies' },
  { name: 'Bursa', href: '/exchanges' },
  { name: 'Platform', href: '/platform' },
  { name: 'Berita', href: '/news' }
]

interface ProfileData {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  bio?: string | null;
  createdAt?: Date | string;
}

const Navbar = async ({ coins, userData }: { coins: any[], userData: ProfileData }) => {

  const session = await auth()

  const quickPicks = coins.slice(0, 5);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all card"
    >
      <div className="px-4 md:px-0 md:w-[95vw] mx-auto rounded-xl py-4 flex items-center shadow-2xl">

        <div className="flex items-center justify-between w-full">

          <Link href={'/'} className="flex items-center gap-1.5 cursor-pointer group shrink-0">
            <Image src={'/logo.svg'} alt='logo' height={35} width={35} priority />

            <div className="flex flex-col justify-between leading-none">
              <span className="text-[18px] font-black tracking-tighter text-white uppercase">
                Nirmala
              </span>
              <span className="text-[12px] font-bold tracking-[0.2em] text-blue-600 uppercase">
                Finance
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-6 text-[14px] font-semibold text-gray-300">

              <NavLink />

              <SearchButton initialData={quickPicks} />
            </div>

          </div>


          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/AzureAsura/crypto-price-tracker-v3"
              target="_blank"
              className="p-2 md:p-2.5 rounded-lg bg-[#030f1f] text-white transition-all active:scale-95 group shadow-sm"
            >
              <Github
                size={20}
                className="text-zinc-400 group-hover:text-white transition-colors"
              />
            </Link>

            {session ? (
              <Link href={'/profile'} className="flex items-center gap-3 px-1.5 md:px-3 py-1.5 rounded-full bg-white/5">
                <div className="hidden md:flex flex-col items-end leading-tight">
                  <span className="text-[12px] font-bold text-white truncate max-w-[100px]">
                    {userData.name}
                  </span>
                  <span className="text-[10px] text-zinc-300 truncate max-w-[100px]">
                    {userData.email}
                  </span>
                </div>
                <div className="relative w-[35px] h-[35px] shrink-0">
                  <Image
                    src={userData.image || "/placeholder.jpg"}
                    alt="avatar"
                    fill 
                    className="rounded-full border border-blue-500/30 object-cover" 
                    priority
                  />
                </div>
              </Link>
            ) : (
              <Link
                href={'/auth'}
                className="btn-color btn-color:hover px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-bold text-[12px] md:text-[14px] text-white hover:brightness-110 transition-all shadow-lg shadow-blue-500/20 active:scale-95 whitespace-nowrap"
              >
                Mulai Sekarang
              </Link>
            )}
          </div>

        </div>
      </div>
    </nav >
  )
}

export default Navbar