import { getCoins } from '@/lib/data'
import ContentTable from '@/components/ContentTable'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const MarketTableSection = async () => {
  const coins = await getCoins()

  return (
    <div className="rounded-xl card overflow-hidden shadow-sm h-full flex flex-col">
      <div className="px-6 py-4 flex justify-between items-center border-b border-gray-600">
        <h3 className="text-white font-black text-xl uppercase tracking-tight">Ringkasan Pasar</h3>
        <Link href={'/cryptocurrencies'} className="group flex items-center gap-2 text-[11px] font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg transition-all">
          LIHAT SEMUA COIN <ChevronRight size={15} />
        </Link>
      </div>

      <ContentTable coins={coins} />
    </div>
  )
}

export default MarketTableSection
