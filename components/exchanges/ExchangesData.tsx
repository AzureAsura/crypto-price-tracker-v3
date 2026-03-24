import React from 'react'
import { discussions } from '@/constants'
import RightHeader from './RightHeader'
import LeftHeader from './LeftHeader'
import TickersTable from './TickersTable'
import CoinForm from '../form/CoinForm'

const ExchangesData = ({ data, exchangeId, userId, chatData }: any) => {
    if (!data) return null;

    const tickers = data?.tickers?.slice(0, 15) || []

    return (
        <div className="min-h-screen text-white pt-24 pb-10">
            <div className='px-4 md:px-0 md:w-[95vw] mx-auto'>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">

                    <div className="lg:col-span-8 flex flex-col gap-4 lg:sticky lg:top-24">
                        <LeftHeader data={data} />

                        <TickersTable tickers={tickers} />
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-24 h-fit">
                        <RightHeader data={data} />

                        <div className="p-6 rounded-2xl card h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-black text-white mb-4 pb-4 border-gray-600 border-b tracking-tight">
                                    Diskusi Bursa
                                </h2>

                                {chatData?.length === 0 ? (
                                    <div className=" text-white/30 text-sm">
                                        Belum ada diskusi. Mulai percakapan!
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {chatData?.slice(0, 4).map((item: any, index: number) => (
                                            <div key={index} className="flex gap-4 items-start">
                                                <img
                                                    src={item.user?.image || '/placeholder.jpg'}
                                                    alt=""
                                                    className="w-10 h-10 rounded-full border border-gray-700 object-cover"
                                                />
                                                <div className="flex-grow">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-white font-bold text-sm">@{item.user?.name}</span>
                                                        <span className="text-gray-600 text-[10px]">
                                                            {new Date(item.createdAt).toLocaleTimeString([], {
                                                                hour: '2-digit',
                                                                minute: '2-digit',
                                                            })}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-400 text-sm leading-relaxed italic">
                                                        "{item.content}"
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <CoinForm id={exchangeId} chatData={chatData} currentUserId={userId} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ExchangesData