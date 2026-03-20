import Image from 'next/image'
import React from 'react'

const Page = () => {
    return (
        <div className="w-screen h-screen bg-[#0a0a0a] flex flex-col md:flex-row font-sans text-white overflow-hidden">

            <div className="hidden md:block w-1/2 h-full relative group">
                <img
                    src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1500"
                    alt="Finance Visual"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />


                <div className="absolute bottom-12 left-12 flex items-center gap-2 opacity-80">
                    <Image src={'/logo.svg'} height={35} width={35} alt='logo' />
                    <span className="font-bold tracking-tighter text-xl uppercase">Nirmala Finance</span>
                </div>
            </div>

            <div className="flex-1 h-full flex flex-col items-center justify-center p-6 md:p-12 relative">


                <div className="w-full max-w-[360px] space-y-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full h-12 flex items-center justify-center gap-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all">
                            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-5 h-5" alt="Google" />
                            Continue with Google
                        </button>

                        <button className="w-full h-12 flex items-center justify-center gap-3 bg-[#1DA1F2] text-white rounded-full font-semibold hover:bg-[#1a8cd8] transition-all">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            Continue with Twitter
                        </button>

                        <div className="flex items-center gap-4 py-2">
                            <div className="h-[1px] flex-1 bg-white/10"></div>
                            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest text-center">or</span>
                            <div className="h-[1px] flex-1 bg-white/10"></div>
                        </div>

                        <button className="w-full h-12 flex items-center justify-center gap-3 border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-all">
                            <svg className="w-5 h-5 opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            Email
                        </button>
                    </div>

                    <div className="pt-6 text-center text-sm text-gray-500">
                        Do not have an account? <span className="text-blue-500 cursor-pointer hover:underline">Sign up</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page