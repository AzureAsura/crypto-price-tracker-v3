'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { RiHome5Line, RiHome5Fill } from 'react-icons/ri'
import { BiBarChartAlt2 } from 'react-icons/bi'
import { HiOutlineNewspaper, HiNewspaper } from 'react-icons/hi2'
import { RiMenu3Line } from 'react-icons/ri'
import { IoSearchOutline } from 'react-icons/io5'
import BottomBarSearch from './BottomBarSearch'

const BottomBar = ({ coins = [] }: { coins: any[] }) => {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isActive = (route: string) =>
        (pathname.includes(route) && route.length > 1) || pathname === route

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <>
            <div className={clsx(
                'fixed inset-0 z-[110] bg-[#030f1f] transition-all duration-500 ease-in-out lg:hidden',
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
            )}>
                {/* Header Menu untuk Close */}
                <div className='flex justify-end p-6'>
                    <button onClick={toggleMenu} className='p-2 text-zinc-400 hover:text-white'>
                        {/* Kamu bisa pakai icon RiCloseLine atau teks Close */}
                        <p className='text-xs font-bold uppercase tracking-widest'>Close</p>
                    </button>
                </div>

                {/* List Menu Links */}
                <div className='flex flex-col items-center justify-center gap-8 h-full -mt-20'>
                    <Link href="/exchanges" onClick={toggleMenu} className='text-3xl font-black hover:text-blue-400 transition-colors'>EXCHANGES</Link>
                    <Link href="/platforms" onClick={toggleMenu} className='text-3xl font-black hover:text-blue-400 transition-colors'>PLATFORMS</Link>
                    <Link href="/discussions" onClick={toggleMenu} className='text-3xl font-black hover:text-blue-400 transition-colors'>DISCUSSIONS</Link>
                    <Link href="/about" onClick={toggleMenu} className='text-3xl font-black hover:text-blue-400 transition-colors'>ABOUT</Link>
                </div>
            </div>


            <section className='fixed bottom-0 z-[100] w-full border-t border-white/5 bg-[#0e0e10]/80 px-4 pt-2 pb-4 backdrop-blur-2xl lg:hidden'>
                <div className='flex items-end justify-between'>

                    <Link href="/" className={clsx(
                        'flex flex-col items-center gap-1 p-2 rounded-2xl flex-1 transition-all duration-300',
                        isActive('/') ? 'text-blue-400' : 'text-zinc-500 hover:text-white'
                    )}>
                        {isActive('/') ? <RiHome5Fill size={22} /> : <RiHome5Line size={22} />}
                        <p className='text-[9px] font-black uppercase tracking-widest'>Beranda</p>
                    </Link>

                    <Link href="/cryptocurrencies" className={clsx(
                        'flex flex-col items-center gap-1 p-2 rounded-2xl flex-1 transition-all duration-300',
                        isActive('/cryptocurrencies') ? 'text-blue-400' : 'text-zinc-500 hover:text-white'
                    )}>
                        <BiBarChartAlt2 size={22} />
                        <p className='text-[9px] font-black uppercase tracking-widest'>Koin</p>
                    </Link>

                    <BottomBarSearch initialData={coins} />

                    <Link href="/news" className={clsx(
                        'flex flex-col items-center gap-1 p-2 rounded-2xl flex-1 transition-all duration-300',
                        isActive('/news') ? 'text-blue-400' : 'text-zinc-500 hover:text-white'
                    )}>
                        {isActive('/news') ? <HiNewspaper size={22} /> : <HiOutlineNewspaper size={22} />}
                        <p className='text-[9px] font-black uppercase tracking-widest'>Berita</p>
                    </Link>

                    <button 
                        onClick={toggleMenu}
                        className={clsx(
                            'flex flex-col items-center gap-1 p-2 rounded-2xl flex-1 transition-all duration-300',
                            isMenuOpen ? 'text-blue-400' : 'text-zinc-500 hover:text-white'
                        )}
                    >
                        <RiMenu3Line size={22} />
                        <p className='text-[9px] font-black uppercase tracking-widest'>Menu</p>
                    </button>

                </div>
            </section>
        </>
    )
}

export default BottomBar