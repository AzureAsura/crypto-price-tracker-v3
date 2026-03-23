import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const navLink2 = [
    {
        name: 'Berita',
        href: '/news',
        description: 'Berita terkini seputar dunia blockchain dan teknologi Web3 secara global.',
        accent: 'from-sky-500/20 to-blue-500/10',
        dot: 'bg-sky-400',
    },
    {
        name: 'Tentang Kami',
        href: '/about',
        description: 'Pelajari lebih lanjut tentang visi, misi, dan tujuan platform kami.',
        accent: 'from-violet-500/20 to-purple-500/10',
        dot: 'bg-violet-400',
    },
    {
        name: 'Diskusi Global',
        href: '/discussion',
        description: 'Coba fitur Diskusi Global kami dan bergabung dengan komunitas.',
        accent: 'from-emerald-500/20 to-teal-500/10',
        dot: 'bg-emerald-400',
    },
]

const coinLinks = [
    {
        name: 'Kapitalisasi Pasar',
        href: '/cryptocurrencies',
        description: 'Peringkat aset crypto teratas berdasarkan kapitalisasi pasar global dan performa terkini.',
        accent: 'from-blue-500/20 to-cyan-500/10',
        dot: 'bg-blue-400',
    },
    {
        name: 'Sedang Tren',
        href: '/trending',
        description: 'Koin yang sedang naik daun dan paling banyak dicari oleh pengguna hari ini.',
        accent: 'from-orange-500/20 to-amber-500/10',
        dot: 'bg-orange-400',
    },
]

const dropdownContentClass = `
    bg-[#030f1f] border border-white/10 text-white p-3 rounded-2xl mt-3
    shadow-[0_24px_80px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.04)]
    backdrop-blur-xl
`

const cardClass = `
    group/card relative flex flex-col gap-1.5 p-4 rounded-xl
    border border-white/[0.06] bg-white/[0.03]
    hover:bg-white/[0.06] hover:border-white/[0.12]
    transition-all duration-200 overflow-hidden
`

const NavLink = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="group flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-[13.5px] font-semibold tracking-tight outline-none">
                    Koin
                    <ChevronDown
                        size={13}
                        className="group-data-[state=open]:rotate-180 transition-transform duration-200 text-gray-500 group-hover:text-gray-300"
                    />
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="start"
                    className={`w-[460px] ${dropdownContentClass}`}
                >
                    <div className="grid grid-cols-2 gap-2">
                        {coinLinks.map((item) => (
                            <Link key={item.name} href={item.href} className={cardClass}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl`} />

                                <div className="relative flex items-center gap-2">
                                    <span className={`h-1.5 w-1.5 rounded-full ${item.dot} shrink-0`} />
                                    <span className="font-semibold text-sm text-white">
                                        {item.name}
                                    </span>
                                </div>
                                <p className="relative text-[11.5px] text-gray-500 leading-relaxed group-hover/card:text-gray-400 transition-colors duration-200">
                                    {item.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>

            <Link
                href="/exchanges"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-[13.5px] font-semibold tracking-tight"
            >
                Bursa
            </Link>

            <Link
                href="/platforms"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-[13.5px] font-semibold tracking-tight"
            >
                Platform
            </Link>

            <DropdownMenu>
                <DropdownMenuTrigger className="group flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-[13.5px] font-semibold tracking-tight outline-none">
                    Lainnya
                    <ChevronDown
                        size={13}
                        className="group-data-[state=open]:rotate-180 transition-transform duration-200 text-gray-500 group-hover:text-gray-300"
                    />
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="end"
                    className={`w-[460px] ${dropdownContentClass}`}
                >
                    <div className="grid grid-cols-2 gap-2">
                        {navLink2.map((item) => (
                            <Link key={item.name} href={item.href} className={cardClass}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl`} />

                                <div className="relative flex items-center gap-2">
                                    <span className={`h-1.5 w-1.5 rounded-full ${item.dot} shrink-0`} />
                                    <span className="font-semibold text-sm text-white">
                                        {item.name}
                                    </span>
                                </div>
                                <p className="relative text-[11.5px] text-gray-500 leading-relaxed group-hover/card:text-gray-400 transition-colors duration-200">
                                    {item.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default NavLink