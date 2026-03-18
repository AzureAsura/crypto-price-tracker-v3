import CoinsTable from '@/components/cryptocurrencies/CoinsTable'
import Header from '@/components/cryptocurrencies/Header'
import { getAllCoinsData } from '@/lib/data'
import { Info, TrendingUp } from 'lucide-react'

const page = async () => {
  const coins = await getAllCoinsData()

  return (
    <main className="bg-black min-h-screen">
      <div className='px-4 md:px-0 md:w-[95vw] mx-auto pt-20 md:pt-24 pb-10'>
        <Header/>
      </div>

      <CoinsTable initialData={coins} />

    </main>
  )
}

export default page