import { getAllCoinsData } from '@/lib/data'
import CoinsTable from './CoinsTable'

const CoinsTableSection = async ({ page }: { page: number }) => {
  const coins = await getAllCoinsData(page)
  return <CoinsTable initialData={coins} />
}

export default CoinsTableSection
