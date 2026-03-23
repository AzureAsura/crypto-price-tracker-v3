import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { ChevronDown, BarChart3, TrendingUp, Newspaper, Info } from 'lucide-react'

const navLink2 = [
    {name: 'Crypto News', href: '/news', description: 'Berita terkini seputar dunia blockchain dan teknologi Web3 secara global.'},
    {name: 'About Us', href: '/about', description: 'Pelajari lebih lanjut tentang visi, misi, dan tujuan platform kami.'},
    {name: 'Global Discussion', href: '/discussion',  description: 'Coba fitur Global Discussion kami'},
]

const NavLink = () => {
    return (
        <>

            <DropdownMenu>
                <DropdownMenuTrigger className="group flex items-center gap-1.5 text-gray-400 hover:text-white transition cursor-pointer text-[14px] font-semibold">
                    Koin
                    <ChevronDown size={14} className="group-data-[state=open]:rotate-180 transition-transform text-gray-500" />
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="start"
                    className="w-[500px] bg-zinc-900 border border-zinc-700/50 text-white p-4 rounded-2xl mt-4 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                >
                    <div className="grid grid-cols-2 gap-4">

                        <Link
                            href="/cryptocurrencies"
                            className="flex flex-col gap-1 p-4 rounded-xl bg-zinc-800/40 hover:bg-zinc-800/70 transition-all"
                        >
                            <div className="flex items-center gap-2 text-blue-400">
                                <span className="font-bold text-sm text-white">
                                    Kapitalisasi Pasar
                                </span>
                            </div>

                            <p className="text-xs text-gray-400 leading-relaxed whitespace-normal break-words">
                                Peringkat aset crypto teratas berdasarkan kapitalisasi pasar global dan performa terkini.
                            </p>
                        </Link>

                        <Link
                            href="/trending"
                            className="flex flex-col gap-2 p-2 rounded-xl bg-zinc-800/40 hover:bg-zinc-800/70 transition-all"
                        >
                            <div className="flex items-center gap-2 text-orange-400">
                                <span className="font-bold text-sm text-white">
                                    Sedang Tren
                                </span>
                            </div>

                            <p className="text-xs text-gray-400 leading-relaxed whitespace-normal break-words">
                                Koin yang sedang naik daun dan paling banyak dicari oleh pengguna hari ini.
                            </p>
                        </Link>

                    </div>
                </DropdownMenuContent>
            </DropdownMenu>


            <Link href="/exchanges" className="text-gray-400 hover:text-white transition-colors text-[14px] font-semibold tracking-tight">
                Bursa
            </Link>

            <Link href="/platforms" className="text-gray-400 hover:text-white transition-colors text-[14px] font-semibold tracking-tight">
                Platform
            </Link>

            <DropdownMenu>
                <DropdownMenuTrigger className="group flex items-center gap-1.5 text-gray-400 hover:text-white transition cursor-pointer text-[14px] font-semibold">
                    Lainnya
                    <ChevronDown size={14} className="group-data-[state=open]:rotate-180 transition-transform duration-300 text-gray-500" />
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="end"
                    className="w-[500px] bg-zinc-900 border border-zinc-700/50 text-white p-4 rounded-2xl mt-4 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                >

                    <div className="grid grid-cols-2 gap-4">
                        {navLink2.map((item) => (
                            <Link
                            key={item.name}
                            href={item.href}
                            className="flex flex-col gap-2 p-4 rounded-xl bg-zinc-800/40 hover:bg-zinc-800/70 transition-all"
                        >
                            <div className="flex items-center gap-2 text-green-400">
                                <span className="font-bold text-sm text-white">
                                    {item.name}
                                </span>
                            </div>

                            <p className="text-xs text-gray-400 leading-relaxed whitespace-normal break-words">
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