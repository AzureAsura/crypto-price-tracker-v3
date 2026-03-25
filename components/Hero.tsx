import Link from "next/link"

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden group bg-black">

            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/video.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 h-full">
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] z-10 pointer-events-none"></div>

            <div className="relative z-20 text-center flex flex-col items-center px-4 md:px-0 md:w-[95vw] mx-auto">
                <h1 className="text-7xl md:text-[120px] font-[900] tracking-tighter text-white leading-[0.9] mb-6">
                    Kuasai Pasar Kripto
                </h1>

                <p className="text-white text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-10 opacity-90">
                    Informasi pasar kripto real-time <br className='sm:hidden' /> untuk keputusan yang tepat.
                </p>

                <div className="flex flex-col items-center gap-4">
                    <Link href={'/cryptocurrencies'} className="relative group">
                        <div
                            className="bg-white text-black px-12 py-5 font-bold text-xl transition-all hover:bg-gray-200 active:scale-95"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}
                        >
                            Mulai Sekarang
                        </div>
                    </Link>

                    <span className="text-gray-400 text-sm tracking-wide">
                        Nikmati akses gratis tanpa batas
                    </span>
                </div>
            </div>

        </section>
    )
}

export default Hero