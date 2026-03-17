import CoinsTable from '@/components/cryptocurrencies/CoinsTable'
import { getAllCoinsData } from '@/lib/data' 

const page = async () => {
  const coins = await getAllCoinsData()

  console.log(coins)

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <CoinsTable initialData={coins}/>
    </main>
  )
}

export default page