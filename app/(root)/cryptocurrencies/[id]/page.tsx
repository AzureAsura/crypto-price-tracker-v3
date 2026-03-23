import { auth } from '@/auth'
import CoinsData from '@/components/coinsbyid/CoinsData'
import { getChatByCoinId } from '@/lib/actions/chat'
import { getCoinById } from '@/lib/data'

const Page = async ({ params }: { params: { id: string } }) => {

    const { id } = await params

    const session = await auth()
    const currentUserId = session?.user?.id

    const data = await getCoinById(id)

    const discussions = await getChatByCoinId(id)


    return (
        <div className=''>
            <CoinsData data={data} coinId={id} chatData={discussions} currentUserId={currentUserId} />
        </div >
    )
}

export default Page