import React from 'react'
import { TrendingUp, TrendingDown, Code2, FileText, Globe, ChevronRight, Info, Twitter, Calendar, Heart } from 'lucide-react'

const RightHeader = ({ description, links, categories, name, genesis_date }: any) => {
    return (
        <div className="flex flex-col gap-4 relative">

            <div className="bg-black p-6 rounded-xl border border-gray-600 shadow-sm">

                <div className="flex items-center justify-between pb-4 border-b border-gray-600 mb-6">
                    <h2 className="text-xl font-black text-white tracking-tight uppercase">
                        About {name}
                    </h2>
                    {genesis_date && (
                        <div className="flex flex-col items-end leading-none">
                            <span className="text-[9px] font-black text-white uppercase mb-0.5">Genesis Date</span>
                            <span className="text-[11px] font-black text-zinc-400 uppercase">{genesis_date}</span>
                        </div>
                    )}
                </div>

                {description ? (
                    <div
                        className="text-sm text-zinc-400 leading-relaxed max-h-[300px] overflow-y-auto pr-2 custom-scrollbar"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center py-10 border border-dashed border-gray-600 rounded-xl">
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">No Asset Description Available</span>
                    </div>
                )}

            </div>

            <div className="bg-black p-6 rounded-xl border border-gray-600 shadow-sm">
                <h3 className="text-white font-black text-sm uppercase tracking-tight mb-4 border-b border-gray-600 pb-2">
                    Official Links
                </h3>
                <div className="flex flex-wrap gap-2">
                    {links?.homepage[0] && (
                        <a href={links.homepage[0]} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-gray-600 rounded-lg text-xs font-bold text-white w-full">
                            <Globe size={14} className="text-blue-500" /> Official Website
                        </a>
                    )}
                    {links?.twitter_screen_name && (
                        <a href={`https://twitter.com/${links.twitter_screen_name}`} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-gray-600 rounded-lg text-xs font-bold text-white w-full">
                            <Twitter size={14} className="text-sky-400" /> Twitter / X
                        </a>
                    )}
                    {links?.whitepaper && (
                        <a href={links.whitepaper} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-gray-600 rounded-lg text-xs font-bold text-white w-full">
                            <FileText size={14} className="text-orange-500" /> Whitepaper
                        </a>
                    )}
                    {links?.repos_url?.github[0] && (
                        <a href={links.repos_url.github[0]} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-gray-600 rounded-lg text-xs font-bold text-white w-full">
                            <Code2 size={14} className="text-purple-500" /> Source Code (GitHub)
                        </a>
                    )}
                    {links?.subreddit_url && (
                        <a href={links.subreddit_url} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-gray-600 rounded-lg text-xs font-bold text-white w-full">
                            <span className="text-red-500 font-bold">r/</span> Reddit Community
                        </a>
                    )}
                </div>
            </div>

            {categories && (
                <div className="bg-black p-6 rounded-xl border border-gray-600 shadow-sm">
                    <h3 className="text-white font-black text-sm uppercase tracking-tight mb-4 border-b border-gray-600 pb-2">
                        Tags & Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {categories.slice(0, 8).map((cat: string, i: number) => (
                            <span key={i} className="px-2 py-1 bg-zinc-900 border border-zinc-700 text-[10px] font-black text-zinc-400 rounded uppercase">
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default RightHeader