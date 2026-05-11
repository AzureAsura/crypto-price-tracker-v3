import { getAllExchangesData } from '@/lib/data/exchanges'
import ExchangesTable from './ExchangesTable'

const ExchangesTableSection = async ({ page }: { page: number }) => {
  const data = await getAllExchangesData(page)
  return <ExchangesTable initialData={data} />
}

export default ExchangesTableSection
