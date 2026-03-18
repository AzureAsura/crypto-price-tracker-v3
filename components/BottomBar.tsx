'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { bottomBarLinks } from '@/constants'


const BottomBar = () => {
    const pathname = usePathname()

    return (
        <section className='fixed bottom-0 z-[100] w-full rounded-t-3xl border-t border-white/5 bg-[#0e0e10]/80 p-3 backdrop-blur-2xl xs:px-7 md:hidden'>
            <div className='flex items-center justify-between gap-1 xs:gap-3'>
                {bottomBarLinks.map((link) => {
                    const isActive =
                        (pathname.includes(link.route) && link.route.length > 1) ||
                        pathname === link.route;

                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={clsx(
                                'relative flex flex-col items-center gap-1.5 rounded-2xl p-2 flex-1 sm:flex-1 sm:px-2 sm:py-2.5 transition-all duration-300 ease-out',
                                isActive ? 'bg-gradient-to-r from-blue-600 via-blue-800 to-blue-950' : 'text-zinc-500 hover:text-white'
                            )}
                        >
                            <div className={clsx(
                                isActive ? "text-white" : "text-inherit transition-colors"
                            )}>
                                {link.svg}
                            </div>

                            <p className={clsx(
                                'text-[9px] font-black uppercase tracking-widest transition-all',
                                isActive ? 'text-white' : 'text-inherit'
                            )}>
                                {link.label}
                            </p>

                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default BottomBar