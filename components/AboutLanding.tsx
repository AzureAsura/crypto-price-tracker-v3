import React from 'react'

const AboutLanding = () => {
    return (
        <section className="relative w-full overflow-hidden py-32">

            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/90 to-transparent via-[15%]" />

            <div className="relative z-20  mx-auto px-4 md:px-0 md:w-[95vw] flex flex-col items-center text-center">

                <div className="max-w-5xl mb-10 md:mb-24">
                    <h1 className="text-6xl md:text-[100px] font-[900] tracking-tighter text-white leading-[0.85] mb-8">
                        Dibangun di Indonesia
                    </h1>

                    <p className="text-white/60 text-xl font-medium max-w-7xl mx-auto">
                        Platform ini merupakan crypto price tracker yang dikembangkan di Indonesia dengan memanfaatkan API CoinGecko. Dengan efisiensi hanya 30 request per menit, kami menghadirkan pengalaman yang dinamis, ringan, dan mudah digunakan, dilengkapi dengan fitur diskusi koin dan interaksi global.
                    </p>
                </div>

                <div className="relative group w-full px-4 md:px-0 max-w-7xl">
                    <div className="absolute -inset-4 bg-blue-600/10 rounded-[32px] blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>

                    <div className="relative  rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/about.webp"
                            alt="Nirmala Finance Dashboard"
                            className="w-full h-auto opacity-90 "
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutLanding