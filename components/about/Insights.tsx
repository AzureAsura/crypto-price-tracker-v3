import Link from "next/link";

const Insights = () => {
  const insights = [
    {
      imgUrl: "/in1.webp",
      href:'/cryptocurrencies',
      title: "Semua Aset dalam Satu Platform",
      desc: "Pantau berbagai aset kripto secara terpusat tanpa perlu berpindah platform.",
    },
    {
      imgUrl: "/in2.webp",
      href:'/trending',
      title: "Data Real-Time dengan Akurasi Tinggi",
      desc: "Nirmala Finance menghadirkan data pasar kripto yang cepat, stabil, dan dirancang untuk memberikan informasi yang dapat diandalkan.",
    },
    {
      imgUrl: "/in3.webp",
      href:'/cryptocurrencies/bitcoin',
      title: "Analisis Lebih Mudah & Terstruktur",
      desc: "Dashboard yang intuitif membantu Anda membaca tren pasar dan memahami pergerakan harga dengan lebih jelas.",
    },
  ];

  return (
    <section className="relative md:pt-10 pb-10 px-4 md:px-0 md:w-[95vw] mx-auto w-full flex flex-col items-center overflow-hidden ">
      
      <div className="flex flex-col items-center mb-16 px-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-[1px] h-4 bg-white/20" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-medium italic">
            Wawasan
          </span>
        </div>
        <h2 
          className="text-3xl md:text-6xl font-bold text-white text-center tracking-tight"
        >
          Insight tentang Nirmala
        </h2>
      </div>

      <div className="flex flex-col gap-10 w-full ">
        {insights.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 group cursor-pointer w-full"
          >
            <div className="w-full md:w-[220px] h-[200px] md:h-[200px] overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/5">
              <img 
                src={item.imgUrl} 
                alt="Insight"
                className="w-full h-full object-cover "
              />
            </div>



            <Link href={item.href} className="flex-1 flex flex-col justify-center w-full px-2 md:px-0">
              <h3 className="text-xl md:text-[42px] font-normal leading-tight text-white mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm md:text-lg leading-relaxed">
                {item.desc}
              </p>
            </Link>

            <Link href={item.href} className="hidden lg:flex items-center justify-center w-20 h-20 rounded-full border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-300 flex-shrink-0">
              <svg 
                width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="stroke-white group-hover:stroke-black transition-colors"
              >
                <path d="M6.66663 16H25.3333M25.3333 16L18.6666 9.33331M25.3333 16L18.6666 22.6666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Insights;