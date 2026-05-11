import { getTrendingCoins } from '@/lib/data'
import CoinsTable from './CoinsTable'

const TrendingTableSection = async () => {
  const data = await getTrendingCoins()
  return <CoinsTable initialData={data} />
}

export default TrendingTableSection
