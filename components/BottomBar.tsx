'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { RiHome5Line, RiHome5Fill } from 'react-icons/ri'
import { BiBarChartAlt2 } from 'react-icons/bi'
import { HiOutlineNewspaper, HiNewspaper } from 'react-icons/hi2'
import { RiMenu3Line } from 'react-icons/ri'
import BottomBarSearch from './BottomBarSearch'
import { X } from 'lucide-react'

const bottomBarLink = [
    {name: 'Bursa', href:'/exchanges'},
    {name: 'platform', href: '/platforms'},
    {name: 'DISKUSI', href: '/discussion'},
    {name: 'tentang kami', href: '/about'},
]

const BottomBar = ({ coins = [] }: { coins: any[] }) => {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isActive = (route: string) =>
        (pathname.includes(route) && route.length > 1) || pathname === route

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <>
            <div className={clsx(
                'fixed inset-0 z-[110] bg-[#030f1f] transition-all duration-500 ease-in-out lg:hidden flex flex-col p-7',
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
            )}>
                <div className='flex justify-between items-center mb-16'>
                    <div className='flex flex-col leading-0 items-start group'>
                        <h2 className="font-[1000] text-4xl tracking-tighter text-white uppercase">
                            NIRMALA
                        </h2>
                        <span className="text-[20px] tracking-[0.4em] font-black text-blue-500 uppercase mt-2">
                            FINANCE
                        </span>
                    </div>

                    <button onClick={toggleMenu} className='w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all'>
                        <X />
                    </button>
                </div>

                <nav className='flex flex-col mb-auto'>
                    {bottomBarLink.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={toggleMenu}
                            className='text-4xl uppercase font-black tracking-[-0.05em] text-white'
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                            href={'https://docs.coingecko.com/'}
                            target='_blank'
                            className='text-4xl uppercase font-black tracking-[-0.05em] text-white'
                        >
                            API Docs
                        </Link>
                </nav>

                <div className='pt-8 border-t border-white/5 grid grid-cols-2 gap-8'>
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase">Sosial Media</span>
                        <Link href="#" className="text-white font-bold text-sm flex items-center gap-2">
                            Instagram
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase">Kontak</span>
                        <div className="flex flex-col gap-1">
                            <p className="text-white font-bold text-sm">hello@nirmala.com</p>
                            <p className="text-white font-bold text-sm">+62 821-xxxx-xxxx</p>
                        </div>
                    </div>
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