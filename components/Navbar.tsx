'use client'

import { useState, useEffect } from 'react'
import { Search, Globe, LayoutGrid } from 'lucide-react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

const navLink = [
  { name: 'Cryptocurrencies', href: '/cryptocurrencies'},
  { name: 'Exchanges', href: '/exchanges'},
  { name: 'NFT', href: '/nft'},
  { name: 'News' , href: '/news'}
]

const Navbar = () => {

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
        "bg-black/70 backdrop-blur-md before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none"
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

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-5 text-[14px] font-semibold text-gray-300">
              {navLink.map((item, i) => (
                <Link key={i} href={item.href} className='hover:text-white transition-colors'>
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center bg-[#2a2e39] px-4 py-2 rounded-full w-64 text-gray-400 border border-transparent hover:border-gray-500 transition-all cursor-text group">
              <Search size={16} className="mr-2 group-hover:text-white" />
              <span className="text-sm">Search</span>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="flex items-center gap-1.5 hover:bg-white/10 p-2 rounded-lg transition-all text-gray-400 hover:text-white shrink-0">
              <Globe size={18} className="md:w-[20px]" />
              <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider">
                EN<span className="hidden md:inline"> - USD</span>
              </span>
            </button>

            <button className="bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950 px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-bold text-[12px] md:text-[14px] text-white hover:brightness-110 transition-all shadow-lg shadow-blue-500/20 active:scale-95 whitespace-nowrap">
              Get started
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar