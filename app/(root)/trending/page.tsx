import Header from '@/components/cryptocurrencies/Header'
import CoinsTable from '@/components/trending/CoinsTable'
import { getTrendingCoins } from '@/lib/data'
import React from 'react'

const page = async () => {

    const data = await getTrendingCoins()


    return (
        <main className="bg-black min-h-screen">
            <div className='px-4 md:px-0 md:w-[95vw] mx-auto pt-20 md:pt-24 pb-10'>
                <Header />
            </div>
                <CoinsTable initialData={data} />
        </main>
    )
}

export default page