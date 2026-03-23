export const heroCoins = [
    {
        src: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        pos: "top-20 left-10 md:top-[10%] md:left-[10%]",
        size: "w-24 md:w-30",
        display: "block"
    },
    {
        src: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
        pos: "top-[15%] -right-12 md:top-[15%] md:right-[15%]",
        size: "w-28 md:w-36",
        display: "block"
    },
    {
        src: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
        pos: "bottom-10 left-4 md:bottom-[15%] md:left-[12%]",
        size: "w-32 md:w-24",
        display: "block"
    },
    {
        src: "https://assets.coingecko.com/coins/images/6319/large/usdc.png",
        pos: "bottom-[20%] -right-10 md:bottom-[20%] md:right-[27%]",
        size: "w-20 md:w-24",
        display: "block"
    },
    {
        src: "https://assets.coingecko.com/coins/images/1094/standard/tron-logo.png?1696502193",
        pos: "top-[45%] -left-12 md:left-[3%]",
        size: "w-16 md:w-16",
        display: "block"
    },
    {
        src: "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970",
        pos: "top-[65%] -right-16 md:right-[5%]",
        size: "w-24 md:w-28",
        display: "hidden md:block"
    },
    {
        src: "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png?1696501409",
        pos: "top-[40%] -right-8 md:right-[4%]",
        size: "w-20 md:w-24",
        display: "block"
    },
    {
        src: "https://assets.coingecko.com/coins/images/975/standard/cardano.png?1696502090",
        pos: "-bottom-10 left-[40%] md:bottom-[5%] md:left-[40%]",
        size: "w-24 md:w-28",
        display: "hidden md:block"
    },
    {
        src: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
        pos: "-top-12 left-[30%] md:top-[10%] md:left-[45%]",
        size: "w-20 md:w-24",
        display: "hidden md:block"
    },
];




export const exchanges = [
    {
        name: "BINANCE",
        trustScore: "10/10",
        country: "Cayman Islands",
        img: "https://assets.coingecko.com/markets/images/52/large/binance.jpg?1706864274",
        href: "binance",
    },
    {
        name: "COINBASE",
        trustScore: "10/10",
        country: "United States",
        img: "https://assets.coingecko.com/markets/images/23/large/Coinbase_Coin_Primary.png?1706864258",
        href: "gdax",
    },
    {
        name: "BYBIT",
        trustScore: "10/10",
        country: "British Virgin Islands",
        img: "https://assets.coingecko.com/markets/images/698/large/bybit_spot.png?1706864649",
        href: "bybit_spot",
    },
    {
        name: "OKX",
        trustScore: "10/10",
        country: "Seychelles",
        img: "https://assets.coingecko.com/markets/images/96/large/WeChat_Image_20220117220452.png?1706864283",
        href: "okex",
    },
];

export const discussions = [
    { user: "Alex_Trader", msg: "Bullish on $BTC for the next 4 hours. Resistance looks weak.", time: "2m ago", avatar: "https://i.pravatar.cc/150?u=1" },
    { user: "Sarah.K", msg: "EUR/USD reacting strongly to the news. Watch the 1.0850 level closely.", time: "5m ago", avatar: "https://i.pravatar.cc/150?u=2" },
    { user: "WhaleHunter", msg: "Massive buy orders coming in for $ETH. Something is brewing.", time: "12m ago", avatar: "https://i.pravatar.cc/150?u=3" },
    { user: "WhaleHunter", msg: "Massive buy orders coming in for $ETH. Something is brewing.", time: "12m ago", avatar: "https://i.pravatar.cc/150?u=3" },
];



export const newsItems = [
    {
        id: 1,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        time: "30 mins ago",
        source: "Nirmala Research",
        title: "Analisis Dominasi Bitcoin: Apakah Altseason Segera Tiba?",
        content: `
### Dinamika Pasar Terkini
Bitcoin (BTC) saat ini sedang menguji zona *resistance* psikologis yang krusial. Meskipun volatilitas meningkat, data *on-chain* menunjukkan adanya akumulasi signifikan oleh pemegang jangka panjang (*HODLers*).

**Poin Utama Analisis:**
* **Dominasi BTC:** Terpantau stabil di angka 52%, memberikan ruang gerak terbatas bagi Altcoins.
* **Arus Keluar Bursa:** Penurunan cadangan BTC di bursa sentral menandakan sentimen *bullish*.
* **Sentimen Makro:** Kebijakan moneter global yang mulai melonggar menjadi katalis positif.

Jika Bitcoin mampu menembus level *all-time high* barunya, kita mungkin akan melihat fase konsolidasi sebelum likuiditas mengalir deras ke ekosistem Layer-1 lainnya.
    `
    },
    {
        id: 2,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
        time: "1 hour ago",
        source: "TradingView",
        title: "Ethereum 2.0: Lonjakan Staking dan Dampaknya pada Suplai",
        content: `
### Deflasi Melalui EIP-1559
Ekosistem Ethereum terus bertransformasi. Dengan mekanisme *burn* yang aktif, jumlah ETH yang keluar dari sirkulasi mencapai rekor baru minggu ini, menciptakan tekanan suplai yang positif.

#### Mengapa Ini Penting?
1. **Staking Rewards:** Partisipasi dalam *liquid staking* meningkat hingga 15% WoW.
2. **Layer-2 Expansion:** Adopsi *Rollups* mengurangi biaya transaksi hingga 90%, menarik lebih banyak pengguna ritel.
3. **Institusional:** ETF Ethereum spot mulai menunjukkan aliran masuk dana (*inflow*) yang stabil.

> "Ethereum bukan lagi sekadar platform smart contract, melainkan aset produktif dengan kelangkaan yang terprogram."
    `
    },
    {
        id: 3,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
        time: "3 hours ago",
        source: "Solana Daily",
        title: "Solana Menembus Rekor Transaksi Per Detik (TPS)",
        content: `
### Efisiensi Jaringan yang Tak Tertandingi
Solana kembali membuktikan posisinya sebagai kompetitor utama dalam kategori *high-throughput blockchain*. Upgrade mainnet terbaru telah meminimalisir *downtime* secara signifikan.

**Statistik Jaringan:**
* **Real TPS:** Berhasil menyentuh angka 3.500+ dalam kondisi beban tinggi.
* **Aktivitas NFT:** Volume perdagangan NFT berbasis Solana melampaui prediksi analis bulan ini.
* **Ekosistem DeFi:** TVL (*Total Value Locked*) naik sebesar 12% dalam 24 jam terakhir.

Para pengembang kini berfokus pada optimasi *fee markets* untuk memastikan jaringan tetap terjangkau meskipun terjadi lonjakan trafik yang ekstrim.
    `
    },
    {
        id: 4,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
        time: "5 hours ago",
        source: "ChainLink News",
        title: "Adopsi RWA: Masa Depan Aset Dunia Nyata di Blockchain",
        content: `
### Bridge ke Ekonomi Tradisional
Tokenisasi *Real World Assets* (RWA) menjadi topik terhangat di kuartal ini. Integrasi antara institusi keuangan tradisional dan protokol DeFi semakin erat.

**Manfaat Utama RWA:**
- **Likuiditas Global:** Aset seperti properti dan emas kini dapat diperdagangkan 24/7.
- **Transparansi:** Verifikasi kepemilikan aset secara *on-chain* mengurangi risiko *fraud*.
- **Aksesibilitas:** Memungkinkan investor kecil untuk memiliki fraksi dari aset bernilai tinggi.

Beberapa bank besar telah mulai melakukan uji coba untuk menerbitkan obligasi langsung di atas jaringan publik, menandakan era baru digitalisasi aset.
    `
    },
    {
        id: 5,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/20495.png",
        time: "8 hours ago",
        source: "CryptoSlate",
        title: "Regulasi Global: Menyeimbangkan Inovasi dan Perlindungan",
        content: `
### Update Kerangka Kerja Kripto
Pemerintah di berbagai belahan dunia mulai memperjelas regulasi terkait aset digital. Langkah ini dipandang sebagai pedang bermata dua oleh pelaku pasar.

**Dampak Regulasi:**
1. **Kepastian Hukum:** Menarik modal dari dana pensiun dan asuransi yang sebelumnya ragu.
2. **Kepatuhan KYC:** Standar baru yang lebih ketat untuk bursa kripto guna mencegah pencucian uang.
3. **Pajak Kripto:** Implementasi sistem pelaporan otomatis di beberapa negara maju.

Meskipun terlihat membatasi, regulasi yang tepat justru akan menjadi pondasi bagi adopsi massal di masa depan tanpa harus mengorbankan keamanan pengguna.
    `
    },
    {
        id: 6,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
        time: "10 hours ago",
        source: "DeFi Pulse",
        title: "Keamanan Protokol: Mengapa Audit Saja Tidak Cukup?",
        content: `
### Keamanan di Era Multi-Chain
Insiden peretasan baru-baru ini pada salah satu *cross-chain bridge* mengingatkan kita akan pentingnya keamanan berlapis dalam ekosistem Web3.

**Strategi Mitigasi Risiko:**
* **Formal Verification:** Metode matematika untuk membuktikan keamanan kode *smart contract*.
* **Bug Bounties:** Program insentif bagi peretas etis untuk menemukan celah sebelum dieksploitasi.
* **Insurance Protocols:** Penggunaan asuransi desentralisasi untuk melindungi aset pengguna.

Investor disarankan untuk selalu melakukan *Due Diligence* dan tidak hanya tergiur oleh APY yang tinggi namun memiliki profil risiko yang tidak jelas.
    `
    },
    {
        id: 7,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
        time: "12 hours ago",
        source: "Lisk Updates",
        title: "Lisk Migrasi ke Layer-2: Strategi Baru untuk Skalabilitas",
        content: `
### Rebranding dan Evolusi Teknologi
Lisk secara resmi mengumumkan transisinya menjadi solusi Ethereum Layer-2. Langkah strategis ini bertujuan untuk memanfaatkan likuiditas besar yang ada di ekosistem Ethereum.

**Apa yang Berubah?**
- **Stack Teknologi:** Mengadopsi *OP Stack* untuk performa yang lebih efisien.
- **Interoperabilitas:** Memungkinkan dApps Lisk berkomunikasi langsung dengan ekosistem EVM lainnya.
- **Developer Experience:** Memudahkan pengembang JavaScript untuk membangun aplikasi blockchain di atas infrastruktur L2.

Migrasi ini diharapkan mampu menghidupkan kembali minat komunitas terhadap proyek yang telah lama berdiri ini.
    `
    },
    {
        id: 8,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
        time: "15 hours ago",
        source: "Polygon Lab",
        title: "Polygon 2.0: Visi Menjadi Value Layer Internet",
        content: `
### Arsitektur Zero-Knowledge (ZK)
Polygon sedang dalam proses upgrade besar-besaran menuju ekosistem yang didorong oleh teknologi ZK-Proof. Tujuannya adalah menciptakan skalabilitas tak terbatas tanpa mengorbankan keamanan.

**Komponen Utama:**
- **AggLayer:** Menghubungkan berbagai chain sehingga likuiditas terasa seperti satu kesatuan.
- **POL Token:** Evolusi dari MATIC yang memiliki fungsi staking lebih luas di seluruh jaringan Polygon.
- **CDK (Chain Development Kit):** Memungkinkan perusahaan membangun L2 mereka sendiri dengan mudah.

Dengan teknologi ini, transfer aset antar jaringan akan terjadi secara instan dan tanpa biaya yang mahal.
    `
    },
    {
        id: 9,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png",
        time: "18 hours ago",
        source: "Aptos Insights",
        title: "Aptos dan Masa Depan Game Web3 yang Responsif",
        content: `
### Pengalaman Pengguna Setara Web2
Aptos terus menarik minat para pengembang game berkat bahasa pemrograman *Move* yang aman dan cepat. Fokus utamanya adalah menghilangkan hambatan teknis bagi pengguna awam.

**Inovasi Unggulan:**
* **Sub-second Latency:** Transaksi yang terkonfirmasi dalam waktu kurang dari satu detik.
* **Keyless Accounts:** Login ke aplikasi blockchain hanya menggunakan Google atau Apple ID.
* **Dynamic NFTs:** Aset game yang dapat berubah statusnya secara *real-time* berdasarkan aktivitas pemain.

Industri gaming diprediksi akan menjadi pintu gerbang utama bagi miliaran pengguna baru untuk masuk ke dunia kripto.
    `
    },
    {
        id: 10,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        time: "24 hours ago",
        source: "Macro Digest",
        title: "Korelasi Kripto dan Pasar Saham: Apakah Masih Terkait?",
        content: `
### Pergeseran Narasi Aset Digital
Selama setahun terakhir, korelasi antara Bitcoin dan indeks saham teknologi (NASDAQ) mulai menunjukkan pelemahan. Ini memicu diskusi mengenai peran Bitcoin sebagai *Digital Gold*.

#### Analisis Perbandingan:
1. **Safe Haven:** Bitcoin mulai bergerak beriringan dengan emas saat terjadi krisis perbankan.
2. **Risk-On Asset:** Namun, di mata investor institusi, BTC tetap dianggap aset berisiko tinggi saat suku bunga naik.
3. **Siklus Halving:** Pengaruh internal kripto (seperti halving) kini mulai lebih dominan daripada berita ekonomi makro harian.

Kesimpulannya, pasar kripto mulai mendewasa dan menemukan identitasnya sendiri sebagai kelas aset yang unik dalam portofolio investasi global.
    `
    },
    {
        id: 11,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        date: "2026-03-20",
        time: "20 Mar 2026",
        source: "Nirmala Treasury",
        title: "Institusi Global Mulai Mengadopsi Standar Akuntansi Kripto Baru",
        content: `
### Era Baru Transparansi Korporasi
Dewas Standar Akuntansi Keuangan Internasional telah merilis pedoman baru mengenai pelaporan aset digital di neraca perusahaan. Hal ini merupakan langkah besar bagi adopsi institusional.

**Implikasi Utama bagi Perusahaan:**
- **Fair Value Accounting:** Perusahaan kini dapat melaporkan keuntungan aset kripto tanpa harus menjualnya terlebih dahulu.
- **Audit Terstandarisasi:** Memudahkan auditor global dalam memverifikasi cadangan aset digital.
- **Minat S&P 500:** Diprediksi lebih banyak perusahaan publik akan mengalokasikan kas mereka ke Bitcoin.

> "Langkah ini menghilangkan hambatan psikologis terbesar bagi CFO perusahaan Fortune 500 untuk menyentuh aset digital."

| Dampak | Jangka Pendek | Jangka Panjang |
| :--- | :--- | :--- |
| Volatilitas | Meningkat | Menurun |
| Likuiditas | Stabil | Sangat Tinggi |
    `
    },
    {
        id: 12,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
        date: "2026-03-21",
        time: "21 Mar 2026",
        source: "Ethereum Foundation",
        title: "The Surge: Roadmap Ethereum Menuju 100.000 TPS",
        content: `
### Membedah Teknologi Danksharding
Ethereum sedang memasuki fase "The Surge" yang berfokus pada skalabilitas masif melalui implementasi *Data Availability Sampling*. Ini akan mengubah cara Layer-2 beroperasi selamanya.

#### Apa yang Akan Terjadi?
1. **Blob Transactions:** Optimalisasi biaya penyimpanan data di Layer-1.
2. **Rollup-Centric Future:** Layer-2 akan menjadi tempat utama bagi aktivitas ekonomi harian.
3. **Statelessness:** Memungkinkan node dijalankan dengan perangkat keras yang lebih ringan.

**Target Utama:**
- Biaya transaksi di L2 di bawah **$0.01**.
- Kecepatan pemrosesan total ekosistem mencapai **100.000+ TPS**.
- Keamanan tetap terdesentralisasi sepenuhnya tanpa kompromi.
    `
    },
    {
        id: 13,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
        date: "2026-03-22",
        time: "22 Mar 2026",
        source: "Solana Ecosystem",
        title: "Solana Firedancer: Upgrade Paling Ambisius Sejak Genesis",
        content: `
### Client Validator Baru dari Jump Crypto
Firedancer bukan sekadar update biasa; ini adalah klien validator baru yang ditulis ulang sepenuhnya menggunakan bahasa C++. Tujuannya adalah untuk memaksimalkan potensi perangkat keras server.

**Keunggulan Firedancer:**
* **Throughput:** Mampu menangani hingga 1 juta transaksi per detik di lingkungan testnet.
* **Resiliensi:** Memberikan redundansi jika klien validator utama mengalami *bug*.
* **Latensi Rendah:** Sangat krusial untuk aplikasi *High-Frequency Trading* (HFT).

Dengan hadirnya Firedancer, Solana berambisi menjadi *world-wide computer* yang mampu menangani beban kerja bursa saham global secara *on-chain*.
    `
    },
    {
        id: 14,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
        date: "2026-03-22",
        time: "22 Mar 2026",
        source: "Chainlink Lab",
        title: "CCIP: Menghubungkan Semua Blockchain dalam Satu Jaringan",
        content: `
### Standar Baru Interoperabilitas
Chainlink Cross-Chain Interoperability Protocol (CCIP) telah menjadi standar industri untuk transfer data dan nilai antar blockchain yang berbeda secara aman.

**Kenapa CCIP Berbeda?**
- **Risk Management Network:** Jaringan independen yang memantau adanya aktivitas mencurigakan saat transfer lintas chain.
- **Universal Interface:** Pengembang hanya butuh satu interface untuk berinteraksi dengan puluhan blockchain sekaligus.
- **Keamanan Level Institusi:** Digunakan oleh SWIFT dalam uji coba transfer aset bank tradisional ke blockchain.

> "Masa depan bukanlah 'Satu Blockchain untuk Semua', melainkan ekosistem terfragmentasi yang terhubung secara mulus melalui protokol aman."
    `
    },
    {
        id: 15,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
        date: "2026-03-23",
        time: "23 Mar 2026",
        source: "Polygon News",
        title: "Zero-Knowledge Proofs: Privasi dan Skala untuk Enterprise",
        content: `
### Revolusi ZK-EVM
Polygon terus memimpin dalam pengembangan teknologi *Zero-Knowledge*. Versi terbaru dari ZK-EVM menjanjikan kompatibilitas penuh dengan semua *tooling* Ethereum tanpa perlu mengubah kode sedikitpun.

#### Keunggulan Bagi Bisnis:
1. **Privasi Data:** Mengizinkan verifikasi transaksi tanpa mengungkap data sensitif pengguna.
2. **Efisiensi Biaya:** Membungkus ribuan transaksi menjadi satu bukti kecil yang murah di-post ke mainnet.
3. **Keamanan Kriptografis:** Tidak bergantung pada asumsi kepercayaan, melainkan pada kebenaran matematika murni.

Saat ini, beberapa merek fashion dunia telah mulai menggunakan teknologi ini untuk memverifikasi keaslian produk fisik mereka melalui NFT.
    `
    },
    {
        id: 16,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
        date: "2026-03-23",
        time: "23 Mar 2026",
        source: "Binance Research",
        title: "Analisis Pasar: Koin AI dan Sinergi dengan Komputasi Awan",
        content: `
### Kripto Bertemu Artificial Intelligence
Sektor AI di dunia kripto mengalami pertumbuhan eksponensial. Proyek yang menawarkan komputasi GPU terdesentralisasi menjadi primadona baru di kalangan investor.

**Faktor Pendorong:**
- **Kelangkaan GPU:** Perusahaan AI mencari alternatif selain penyedia awan tradisional.
- **Demokratisasi AI:** Memberikan akses ke model bahasa besar (LLM) tanpa kontrol terpusat.
- **Incentivized Training:** Memberikan reward kepada user yang menyumbangkan daya komputasinya.

**Top Projects to Watch:**
* Protokol Rendering (Render)
* Decentralized Compute (Akash)
* AI Agent Networks (Fetch.ai)
    `
    },
    {
        id: 17,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6442.png",
        date: "2026-03-24",
        time: "24 Mar 2026",
        source: "Avalanche Insider",
        title: "Subnets: Kustomisasi Blockchain untuk Kebutuhan Spesifik",
        content: `
### Solusi untuk Pemerintah dan Korporasi
Avalanche Subnets memungkinkan siapa saja membuat blockchain sendiri yang berjalan di atas infrastruktur Avalanche yang aman dengan aturan main sendiri.

**Fitur Unggulan Subnets:**
- **Compliance:** Bisa diatur agar hanya user yang sudah KYC yang boleh bertransaksi.
- **Token Gas Sendiri:** Gunakan token komunitasmu sendiri sebagai biaya transaksi.
- **Performa Terisolasi:** Kemacetan di chain utama tidak akan mempengaruhi performa Subnet kamu.

Langkah ini telah menarik perhatian beberapa bank regional untuk menerbitkan *stablecoin* lokal di atas Subnet mereka sendiri.
    `
    },
    {
        id: 18,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png",
        date: "2026-03-24",
        time: "24 Mar 2026",
        source: "Aptos Dev",
        title: "Move Language: Mengapa Developer Meninggalkan Solidity?",
        content: `
### Keamanan di Tingkat Bahasa Pemrograman
Bahasa pemrograman Move, yang awalnya dikembangkan oleh tim Meta (Facebook), kini menjadi standar baru untuk pembuatan *smart contract* yang tahan terhadap eksploitasi.

#### Perbedaan Utama:
* **Resource-Oriented:** Aset di Move tidak bisa diduplikasi atau dihapus secara tidak sengaja, mereka diperlakukan seperti benda fisik.
* **Proactive Security:** Menghilangkan celah *re-entrancy* yang sering menjadi penyebab peretasan jutaan dolar di Ethereum.
* **Formal Verification Tooling:** Memudahkan pengembang mengecek apakah logika mereka sudah benar sebelum dideploy.

"Move adalah jawaban bagi ekosistem DeFi yang lelah dengan eksploitasi keamanan yang terus menerus terjadi."
    `
    },
    {
        id: 19,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/20495.png",
        date: "2026-03-25",
        time: "25 Mar 2026",
        source: "CryptoSlate Daily",
        title: "Staking 2.0: Munculnya Liquid Restaking (LRT)",
        content: `
### Maksimalisasi Yield melalui EigenLayer
Dunia staking kembali berevolusi dengan diperkenalkannya konsep *Restaking*. Kini, ETH yang sudah di-stake tidak hanya mengamankan Ethereum, tapi juga layanan lainnya.

**Alur Kerja LRT:**
1. User melakukan staking ETH.
2. Token LST (seperti stETH) dimasukkan kembali ke protokol restaking.
3. User mendapatkan reward tambahan dari berbagai *Actively Validated Services* (AVS).

**Peringatan Risiko:**
> "Meskipun menawarkan yield yang jauh lebih tinggi, restaking menambah lapisan risiko baru pada ekosistem smart contract. Selalu gunakan modal dingin."
    `
    },
    {
        id: 20,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        date: "2026-03-25",
        time: "25 Mar 2026",
        source: "Nirmala Finance News",
        title: "Global Liquidity Cycle: Kripto Sebagai Leading Indicator",
        content: `
### Menuju Puncak Siklus Empat Tahunan
Berdasarkan data likuiditas global (M2 Money Supply), pasar aset berisiko diperkirakan akan memasuki fase ekspansi yang kuat hingga akhir tahun 2026.

**Analisis Siklus:**
* **Liquidity Inflow:** Bank sentral mulai menurunkan suku bunga untuk menstimulasi ekonomi.
* **Halving Effect:** Dampak pengurangan emisi Bitcoin mulai terasa pada sisi penawaran.
* **Retail FOMO:** Volume pencarian kata kunci "Crypto" di Google Trend mulai merangkak naik.

Secara historis, Bitcoin cenderung memimpin reli pasar sebelum diikuti oleh saham teknologi dan komoditas lainnya. Persiapkan strategi *exit* Anda sebelum euforia mencapai puncaknya.
    `
    }, {
        id: 21,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        date: "2026-03-26",
        time: "26 Mar 2026",
        source: "Nirmala Analytics",
        title: "Bitcoin Halving 2026: Mengapa Siklus Ini Berbeda dari Sebelumnya?",
        content: `
### Analisis Pasca-Halving: Kelangkaan Digital yang Terakselerasi
Siklus halving tahun 2026 menghadirkan dinamika unik yang belum pernah terjadi pada era 2012, 2016, atau 2020. Penurunan emisi blok kini dibarengi dengan permintaan institusional yang masif melalui ETF spot global.

#### Perbandingan Metrik Suplai vs Permintaan
- **Laju Inflasi Tahunan:** Kini turun di bawah emas, menjadikan BTC aset paling langka secara matematis.
- **Cadangan Bursa:** Terendah dalam 8 tahun terakhir. Investor lebih memilih *self-custody* atau *cold storage*.
- **MVRV Z-Score:** Menunjukkan bahwa kita masih berada di zona akumulasi sehat, jauh dari zona *overheated*.

**Proyeksi Skenario Pasar:**
1. **Bullish:** Penembusan harga di atas $120k dipicu oleh adopsi kas negara (Sovereign Wealth Funds).
2. **Neutral:** Konsolidasi panjang di area $80k - $95k karena pengetatan likuiditas makro.
3. **Bearish:** Koreksi tajam jika terjadi kegagalan sistemik pada protokol stablecoin besar.

> "Matematika tidak bisa didebat. Pengurangan suplai di tengah lonjakan permintaan hanya memiliki satu muara logis: apresiasi nilai jangka panjang."
    `
    },
    {
        id: 22,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
        date: "2026-03-26",
        time: "26 Mar 2026",
        source: "Ether-Scan Daily",
        title: "EIP-4844 dan Revolusi Biaya Transaksi: Data Availability Layer",
        content: `
### Membedah Arsitektur "Proto-Danksharding"
Ethereum telah berhasil mengimplementasikan *blobs*, sebuah ruang data khusus yang memungkinkan Layer-2 (L2) memposting data transaksi dengan biaya yang hampir mendekati nol. Ini adalah tonggak sejarah menuju skalabilitas internet.

#### Dampak Ekonomi pada Ekosistem L2:
* **Optimism & Arbitrum:** Biaya swap turun dari $0.50 menjadi kurang dari $0.02.
* **Base & ZK-Sync:** Peningkatan jumlah pengguna aktif harian hingga 400% pasca-upgrade.
* **Burn Rate:** Meskipun biaya L2 turun, volume transaksi yang masif justru meningkatkan jumlah ETH yang di-burn di Layer-1.

| Metrik | Sebelum Upgrade | Sesudah Upgrade |
| :--- | :--- | :--- |
| Avg. L2 Fee | $0.85 | $0.012 |
| Data Cost | 90% total cost | < 5% total cost |
| Scalability | 15-30 TPS | 1,000+ TPS |

Sektor gaming dan media sosial desentralisasi (DeSoc) adalah pemenang utama dalam perubahan fundamental ini.
    `
    },
    {
        id: 23,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
        date: "2026-03-27",
        time: "27 Mar 2026",
        source: "Solana Foundation",
        title: "State Compression: Rahasia Solana Menyimpan Jutaan NFT dengan Murah",
        content: `
### Inovasi Penyimpanan Data On-Chain
Solana memperkenalkan teknologi *State Compression* yang memungkinkan pencetakan (minting) jutaan NFT dengan biaya hanya beberapa dollar saja. Hal ini mustahil dilakukan di blockchain tradisional mana pun saat ini.

**Bagaimana Cara Kerjanya?**
Teknologi ini menggunakan *Merkle Trees* untuk menyimpan data di luar memori utama validator namun tetap memiliki keamanan yang diverifikasi secara on-chain.

**Gunakan Case Industri:**
- **Loyalty Program:** Starbucks dan merek ritel besar menggunakan ini untuk kartu poin digital.
- **DePIN:** Pemetaan infrastruktur fisik menggunakan jutaan sensor yang datanya dicatat sebagai NFT terkompresi.
- **Ticketing:** Tiket konser global yang anti-pemalsuan dan mudah diperdagangkan kembali.

#### Roadmap Pengembangan:
- [x] Implementasi Merkle Trees di Mainnet.
- [x] Integrasi dengan wallet populer (Phantom/Solflare).
- [ ] Dukungan untuk aset yang dapat berubah statusnya (*Dynamic Assets*).
    `
    },
    {
        id: 24,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
        date: "2026-03-27",
        time: "27 Mar 2026",
        source: "Chainlink Ecosystem",
        title: "The Oracle Problem: Mengapa Data Off-Chain Masih Menjadi Titik Lemah?",
        content: `
### Menjamin Integritas Data di Dunia Web3
Smart contract hanya sepintar data yang mereka terima. Jika data harga dari oracle dimanipulasi, protokol DeFi senilai miliaran dolar bisa runtuh dalam sekejap.

**Solusi Chainlink 2.0:**
1. **Multiple Data Sources:** Mengambil data dari agregator bursa utama untuk mencegah manipulasi satu sumber.
2. **Decentralized Oracle Networks (DONs):** Ratusan node independen memvalidasi data sebelum dikirim ke blockchain.
3. **Proof of Reserve (PoR):** Verifikasi otomatis bahwa aset yang menjamin stablecoin atau koin terbungkus (wrapped) benar-benar ada.

> "Keamanan tidak boleh dikompromikan demi kecepatan. Di dunia keuangan, kebenaran data adalah segalanya."

Masa depan oracle terletak pada *Privacy-Preserving Data* menggunakan DECO, yang memungkinkan verifikasi data sensitif tanpa mengekspos data aslinya ke publik.
    `
    },
    {
        id: 25,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
        date: "2026-03-28",
        time: "28 Mar 2026",
        source: "Polygon Labs",
        title: "AggLayer: Mengakhiri Fragmentasi Likuiditas di Ekosistem L2",
        content: `
### Menuju Pengalaman 'Single Chain'
Masalah utama Ethereum saat ini adalah banyaknya Layer-2 yang tidak bisa berkomunikasi satu sama lain. Polygon AggLayer hadir untuk menyatukan semua chain tersebut dalam satu lapisan likuiditas bersama.

**Manfaat bagi Pengguna:**
- Tidak perlu lagi melakukan *bridging* manual yang memakan waktu dan biaya.
- Saldo Anda di Chain A dapat langsung digunakan untuk bertransaksi di Chain B.
- Pengalaman pengguna yang mulus seperti menggunakan satu internet terpadu.

#### Struktur Arsitektur AggLayer:
* **Unified Bridge:** Jembatan tunggal untuk semua L2 berbasis Polygon.
* **Pessimistic Proofs:** Menjamin keamanan lintas chain tanpa harus menunggu periode tantangan 7 hari.
* **Shared Liquidity:** Pool likuiditas yang dapat diakses oleh semua dApps di seluruh ekosistem.
    `
    },
    {
        id: 26,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
        date: "2026-03-28",
        time: "28 Mar 2026",
        source: "DeFi Research",
        title: "Sustainable Yield: Meninggalkan Era Emisi Token Inflasioner",
        content: `
### Membangun Ekonomi Protokol yang Sehat
Era "Yield Farming" dengan bunga 1.000% yang didukung oleh pencetakan token baru telah berakhir. Kini, fokus beralih ke *Real Yield*—pendapatan yang berasal dari biaya penggunaan nyata.

**Sumber Pendapatan Berkelanjutan:**
- **Trading Fees:** Pendapatan dari pengguna yang melakukan swap di DEX.
- **Lending Interest:** Bunga yang dibayar oleh peminjam aset.
- **Liquid Staking:** Bagi hasil dari pengamanan jaringan blockchain.

**Checklist Protokol Sehat:**
- [x] Pendapatan protokol lebih besar dari emisi token.
- [x] Memiliki dana cadangan (Treasury) yang terdiversifikasi.
- [x] Tata kelola (Governance) yang aktif dan transparan.
- [ ] Ketergantungan rendah pada insentif spekulatif.
    `
    },
    {
        id: 27,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/20495.png",
        date: "2026-03-29",
        time: "29 Mar 2026",
        source: "Institutional Ledger",
        title: "CBDC vs Stablecoins: Persaingan Memperebutkan Dominasi Digital",
        content: `
### Masa Depan Uang Digital di Tangan Siapa?
Bank Sentral di seluruh dunia mulai meluncurkan *Central Bank Digital Currencies* (CBDC). Di sisi lain, stablecoin swasta seperti USDC dan USDT tetap mendominasi volume perdagangan kripto.

#### Perbandingan Strategis:
| Fitur | CBDC | Stablecoins |
| :--- | :--- | :--- |
| Penerbit | Pemerintah | Perusahaan Swasta |
| Privasi | Terpantau penuh | Pseudonymous |
| Inovasi | Lambat | Sangat Cepat (DeFi) |
| Kepercayaan | Berbasis Negara | Berbasis Audit/Code |

Pertempuran ini akan menentukan bagaimana kita membayar kopi, mengirim uang ke luar negeri, dan mengelola tabungan dalam satu dekade ke depan. Adopsi regulasi MiCA di Eropa menjadi standar emas baru dalam kompetisi ini.
    `
    },
    {
        id: 28,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
        date: "2026-03-29",
        time: "29 Mar 2026",
        source: "Lisk Tech",
        title: "Membangun Aplikasi Web3 dengan JavaScript: Peluang Emas Devs",
        content: `
### Menurunkan Hambatan Masuk bagi Pengembang
Salah satu penghalang adopsi blockchain adalah bahasa pemrograman yang sulit seperti Rust atau Solidity. Lisk mengubah narasi ini dengan memungkinkan pengembangan dApps menggunakan JavaScript/TypeScript.

**Kenapa Ini Revolusioner?**
- **Talent Pool:** Ada jutaan developer JS di dunia dibandingkan ribuan developer Solidity.
- **Time to Market:** Siklus pengembangan yang lebih cepat karena ekosistem library yang luas.
- **Sidechain Architecture:** Setiap aplikasi berjalan di chain-nya sendiri, mencegah kemacetan jaringan.

#### Framework Lisk SDK:
1. **Modules:** Tambahkan fitur seperti NFT atau DeFi hanya dengan mengimpor modul.
2. **Plugins:** Integrasikan dashboard atau API eksternal dengan mudah.
3. **Interoperability:** Terhubung langsung ke ekosistem Ethereum melalui jembatan L2 terbaru.
    `
    },
    {
        id: 29,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png",
        date: "2026-03-30",
        time: "30 Mar 2026",
        source: "Aptos Global",
        title: "Parallel Execution: Kunci Menghadapi Ledakan Trafik Web3",
        content: `
### Inovasi Engine Transaksi Block-STM
Blockchain tradisional memproses transaksi satu per satu (sekuensial). Aptos menggunakan *Parallel Execution*, di mana ribuan transaksi diproses secara bersamaan di berbagai inti CPU.

**Dampak pada Pengguna Akhir:**
- **Konfirmasi Instan:** Tidak ada lagi istilah "transaksi pending" selama berjam-jam.
- **Biaya Tetap Rendah:** Meskipun jutaan orang menggunakan jaringan, biaya tidak melonjak drastis.
- **Scalability:** Mampu menangani volume transaksi sekelas bursa saham Nasdaq atau sistem pembayaran Visa.

> "Aptos didesain bukan untuk komunitas kecil, melainkan untuk infrastruktur keuangan global yang sesungguhnya."
    `
    },
    {
        id: 30,
        logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        date: "2026-03-30",
        time: "30 Mar 2026",
        source: "Nirmala Finance",
        title: "Kesimpulan Kuartal I 2026: Kripto Telah Menjadi Dewasa",
        content: `
### Refleksi dan Proyeksi Masa Depan
Menutup kuartal pertama tahun 2026, kita melihat pergeseran fundamental. Kripto bukan lagi sekadar instrumen spekulasi, melainkan lapisan infrastruktur baru untuk keuangan, identitas, dan kepemilikan data.

**Pencapaian Utama Q1:**
- [x] Total Market Cap kembali menembus angka historis.
- [x] Adopsi Layer-2 mencapai titik kritis (Mainstream Adoption).
- [x] Regulasi global memberikan kepastian hukum bagi investor besar.

**Apa yang Harus Diperhatikan di Q2?**
Sektor **AI + Crypto** dan **RWA (Real World Assets)** diprediksi akan menjadi narasi dominan. Tetap lakukan riset mendalam, amankan kunci privat Anda, dan jangan pernah berinvestasi lebih dari yang Anda siap untuk kehilangan.

**Terima kasih telah mengikuti update dari Nirmala Finance.**
    `
    }
];

export const globalChat = [
  {
    id: 1,
    user: {
      name: "satoshi",
      image: "https://i.pravatar.cc/100?img=1"
    },
    content: "Bitcoin masih kuat di level ini.",
    createdAt: new Date()
  },
  {
    id: 2,
    user: {
      name: "vitalik",
      image: "https://i.pravatar.cc/100?img=2"
    },
    content: "Ethereum makin solid sejak upgrade terakhir, gas fee juga mulai stabil.",
    createdAt: new Date()
  },
  {
    id: 3,
    user: {
      name: "crypto_bali",
      image: "https://i.pravatar.cc/100?img=3"
    },
    content: "Altcoin lagi mulai gerak, tapi tetap hati-hati sama volatility ya.",
    createdAt: new Date()
  },
  {
    id: 4,
    user: {
      name: "traderX",
      image: "https://i.pravatar.cc/100?img=4"
    },
    content: "Market lagi nunggu arah, better nunggu konfirmasi sebelum entry.",
    createdAt: new Date()
  }
];