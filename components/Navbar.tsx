'use client'

import { useState, useEffect } from 'react'
import { Search, Globe, ChevronDown, Github } from 'lucide-react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import SearchButton from './SearchButton'
import NavLink from './NavLink'


const navLink = [
  { name: 'Cryptocurrencies', href: '/cryptocurrencies' },
  { name: 'Exchanges', href: '/exchanges' },
  { name: 'Platform', href: '/platform' },
  { name: 'News', href: '/news' }
]

const Navbar = ({ coins }: { coins: any[] }) => {

  const quickPicks = coins.slice(0, 5);

  const [hasScroll, setHasScroll] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setHasScroll(window.scrollY > 32)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all",
        hasScroll &&
        "bg-black/70 backdrop-blur-md before:absolute before:inset-0 before:bg-gradient-to-b before:from-blue-400/20 before:to-transparent before:pointer-events-none"
      )}
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
              href="https://github.com/made-paramasura" 
              target="_blank"
              className="p-2 md:p-2.5 rounded-lg card-dark text-white transition-all active:scale-95 group shadow-sm"
            >
              <Github
                size={20}
                className="text-zinc-400 group-hover:text-white transition-colors"
              />
            </Link>

            <Link
              href={'/sign-in'}
              className="bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-bold text-[12px] md:text-[14px] text-white hover:brightness-110 transition-all shadow-lg shadow-blue-500/20 active:scale-95 whitespace-nowrap"
            >
              Get started
            </Link>
          </div>

        </div>
      </div>
    </nav >
  )
}

export default Navbar