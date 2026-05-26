import BottomBar from '@/components/BottomBar'
import { getCoins } from '@/lib/data'

const BottomBarServer = async () => {
  const coins = await getCoins()
  return <BottomBar coins={coins} />
}

export default BottomBarServer
