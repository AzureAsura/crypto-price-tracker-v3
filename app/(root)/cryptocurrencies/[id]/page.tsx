import CoinsData from '@/components/coinsbyid/CoinsData'
import { getCoinById } from '@/lib/data'

const Page = async ({ params }: { params: { id: string } }) => {

    const { id }  = await params

    const data = await getCoinById(id)


    return (
        <div className=''>
            <CoinsData data={data}/>
        </div>
    )
}

export default Page