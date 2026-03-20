import React from 'react'
import { Globe, Info, MessageCircle, Twitter, ShieldCheck } from 'lucide-react'

const RightHeader = ({ data }: any) => {
    if (!data) return null;

    return (
        <div className="flex flex-col gap-4 relative">

            <div className="card p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-gray-600 mb-6">
                    <h2 className="text-xl font-black text-white tracking-tight uppercase">
                        About {data.name}
                    </h2>
                    <ShieldCheck size={20} className="text-blue-500" />
                </div>

                {data.description ? (
                    <div
                        className="text-sm text-zinc-400 leading-relaxed max-h-[300px] overflow-y-auto pr-2 custom-scrollbar"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center py-10 border border-dashed border-gray-600 rounded-xl">
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">No Exchange Description Available</span>
                    </div>
                )}
            </div>

            <div className="card p-6 rounded-xl shadow-sm">
                <h3 className="text-white font-black text-sm uppercase tracking-tight mb-4 border-b border-gray-600 pb-2">
                    Official Links
                </h3>
                <div className="flex flex-wrap gap-2">
                    {data.url && (
                        <a href={data.url} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-gray-600 rounded-lg text-xs font-bold text-white w-full transition-all">
                            <Globe size={14} className="text-blue-500" /> Official Website
                        </a>
                    )}
                    {data.twitter_handle && (
                        <a href={`https://twitter.com/${data.twitter_handle}`} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-gray-600 rounded-lg text-xs font-bold text-white w-full transition-all">
                            <Twitter size={14} className="text-sky-400" /> Twitter / X
                        </a>
                    )}
                    {data.reddit_url && (
                        <a href={data.reddit_url} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-gray-600 rounded-lg text-xs font-bold text-white w-full transition-all">
                            <MessageCircle size={14} className="text-orange-500" /> Reddit Community
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RightHeader