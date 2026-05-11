import { getCoinById } from '@/lib/data'
import { getChatByCoinId } from '@/lib/actions/chat'
import CoinsData from './CoinsData'

const CoinDetailSection = async ({ coinId, currentUserId }: { coinId: string, currentUserId?: string }) => {
  const [data, discussions] = await Promise.all([
    getCoinById(coinId),
    getChatByCoinId(coinId),
  ])
  return <CoinsData data={data} coinId={coinId} chatData={discussions} currentUserId={currentUserId} />
}

export default CoinDetailSection
