import CoinsData from '@/components/coinsbyid/CoinsData'
import React from 'react'

const Page = async ({ params }: { params: { id: string } }) => {

 

    return (
        <div className=''>
            <CoinsData/>

        </div>
    )
}

export default Page