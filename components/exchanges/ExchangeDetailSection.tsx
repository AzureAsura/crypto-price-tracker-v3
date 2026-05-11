import { getExchangeById } from '@/lib/data/exchanges'
import { getChatByCoinId } from '@/lib/actions/chat'
import ExchangesData from './ExchangesData'

const ExchangeDetailSection = async ({ exchangeId, userId }: { exchangeId: string, userId?: string }) => {
  const [data, chatData] = await Promise.all([
    getExchangeById(exchangeId),
    getChatByCoinId(exchangeId),
  ])
  return <ExchangesData data={data} exchangeId={exchangeId} userId={userId} chatData={chatData} />
}

export default ExchangeDetailSection
