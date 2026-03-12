import { heroCoins } from '@/constants'

const Hero = () => {

    return (
        <section className="relative bg-[#171717] w-full h-screen flex flex-col items-center justify-center overflow-hidden group">

            <div className="absolute inset-0 z-0 overflow-hidden">
                {heroCoins.map((coin, i) => (
                    <img
                        key={i}
                        src={coin.src}
                        alt="coin"
                        className={`absolute ${coin.pos} ${coin.size} ${coin.display} z-20 filter blur-xs opacity-40 hover:blur-none hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-out cursor-pointer`}
                        style={{ animationDelay: `${i * 0.5}s` }}
                    />
                ))}
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] z-0"></div>

            <div className="relative z-10 text-center flex flex-col items-center container">
                <h1 className="text-6xl md:text-[100px] font-[900] tracking-tighter text-white leading-[0.9] mb-6">
                    Look first / <br className='md:hidden' />
                    Then leap.
                </h1>

                <p className="text-white text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-10 opacity-90">
                    The best trades require research, then commitment.
                </p>

                <div className="flex flex-col items-center gap-4">
                    <button className="relative group">
                        <div
                            className="bg-white text-black px-12 py-5 font-bold text-xl transition-all hover:bg-gray-200 active:scale-95"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}
                        >
                            Get started for free
                        </div>
                    </button>

                    <span className="text-gray-400 text-sm tracking-wide">
                        $0 forever, no credit card needed
                    </span>
                </div>
            </div>

        </section>
    )
}

export default Hero