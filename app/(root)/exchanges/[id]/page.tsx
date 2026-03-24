import { auth } from '@/auth'
import ExchangesData from '@/components/exchanges/ExchangesData'
import { getChatByCoinId } from '@/lib/actions/chat'
import { getExchangeById } from '@/lib/data/exchanges'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {

  const { id } = await params

  const session = await auth()
  const currentUserId = session?.user?.id

  const [data, chatData] = await Promise.all([
    getExchangeById(id),
    getChatByCoinId(id),
  ])

  return (
    <div className=''>
      <ExchangesData data={data} exchangeId={id} userId={currentUserId} chatData={chatData} />
    </div>
  )
}

export default page