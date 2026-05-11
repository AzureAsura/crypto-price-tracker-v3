import { getTrendingCoins } from '@/lib/data'
import Header from './Header'

const CryptoHeaderSection = async () => {
  const trending = await getTrendingCoins()
  return <Header data={trending} />
}

export default CryptoHeaderSection
