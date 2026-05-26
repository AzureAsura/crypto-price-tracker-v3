import { auth } from '@/auth'
import Navbar from '@/components/Navbar'
import { getProfile } from '@/lib/actions/profile'
import { getCoins } from '@/lib/data'

const NavbarServer = async () => {
  const [coins, session] = await Promise.all([getCoins(), auth()])
  let userData = null
  if (session) {
    userData = await getProfile(session?.user.id)
  }
  return <Navbar coins={coins} userData={userData as any} />
}

export default NavbarServer
