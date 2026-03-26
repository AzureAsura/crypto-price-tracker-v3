# 🪙 Nirmala Finance — Crypto Price Tracker

## 🏫 Institusi

(IDB Bali)

## 👥 Anggota Tim

* Ketua: (Made Paramasura)
* Anggota 1: (I Made Ryan Pradnyana)
* Anggota 2: (Naufal Putra Abidian)

---

## 📄 Deskripsi Karya  

**Nirmala Finance** merupakan platform berbasis web yang dikembangkan dalam bidang **ekonomi digital**, khususnya pada sektor **aset kripto (cryptocurrency)** yang saat ini menjadi bagian dari transformasi sistem keuangan global.  

Latar belakang pembuatan website ini didasarkan pada pesatnya pertumbuhan investasi kripto di masyarakat, namun masih terdapat kendala dalam akses informasi yang **cepat, ringan, dan terintegrasi**. Banyak platform yang tersedia cenderung kompleks, berat, serta belum menyediakan fitur interaksi sosial dalam satu ekosistem.  

Website ini bertujuan untuk:  
- Menyediakan informasi harga aset kripto secara **real-time dan akurat**  
- Membantu pengguna dalam **menganalisis pergerakan pasar** melalui visualisasi data  
- Menciptakan **ekosistem digital** yang menggabungkan data finansial dan interaksi sosial  
- Mendukung literasi masyarakat dalam memahami **ekonomi digital dan investasi kripto**  

Manfaat dari pengembangan website ini antara lain:  
- Mempermudah pengguna dalam **pengambilan keputusan ekonomi berbasis data**  
- Meningkatkan pemahaman terhadap **dinamika pasar kripto**  
- Menjadi sarana edukasi sekaligus diskusi dalam komunitas ekonomi digital  

Pemilihan subtema berfokus pada **ekonomi dan fintech**, karena cryptocurrency merupakan inovasi finansial yang berperan penting dalam perkembangan sistem ekonomi modern, khususnya dalam hal desentralisasi, transparansi, dan efisiensi transaksi.  

---

## 🔗 Link Website

[https://nirmala-finance-cpt.vercel.app](https://nirmala-finance-cpt.vercel.app)

---

<div align="center">
  Dibuat di Indonesia 🇮🇩
</div>

---

## ✨ Fitur Utama

* **📈 Live Price Tracking** — Pantau harga ribuan koin secara real-time yang diambil dari CoinGecko API, mencakup market cap, trending, exchange, dan asset platform
* **📊 Chart Historis** — Visualisasi pergerakan harga dengan grafik interaktif menggunakan Recharts
* **💬 Diskusi Global** — Forum diskusi terintegrasi untuk koin, exchange, dan topik global langsung dari halaman detail
* **🔐 Autentikasi Aman** — Login & register via NextAuth v5 dengan password yang di-hash menggunakan bcrypt
* **🖼️ Foto Profil** — Upload dan kelola foto profil menggunakan Vercel Blob Storage
* **🎨 Glassmorphism UI** — Antarmuka modern dengan efek kaca transparan, animasi Framer Motion
* **⚡ Server Actions** — Seluruh data fetching dan mutasi dijalankan melalui Next.js Server Actions untuk performa optimal

---

## 🛠️ Tech Stack

| Kategori      | Teknologi                                   |
| ------------- | ------------------------------------------- |
| Framework     | Next.js 16, React 19                        |
| Language      | TypeScript 5                                |
| Styling       | Tailwind CSS v4, shadcn/ui, Radix UI        |
| Database      | PostgreSQL via Prisma 7 + Prisma Accelerate |
| Auth          | NextAuth v5 (Auth.js) + Prisma Adapter      |
| Storage       | Vercel Blob (foto profil)                   |
| Charts        | Recharts                                    |
| Animation     | Motion (Framer Motion)                      |
| API           | CoinGecko Public API                        |
| Validation    | Zod v4                                      |
| Notifications | Sonner                                      |

---

## 🚀 Memulai

### Prasyarat

Pastikan kamu sudah menginstal:

* Node.js (v18+)
* PostgreSQL atau akun Prisma Accelerate
* Akun Vercel (opsional, untuk Blob Storage)

### Instalasi

1. **Clone repositori ini**

   ```bash
   git clone https://github.com/username/cryptopricetracker.git
   cd cryptopricetracker
   ```

2. **Install dependensi**

   ```bash
   npm install
   ```

3. **Salin file environment**

   ```bash
   cp .env.example .env
   ```

4. **Isi variabel environment**

5. **Jalankan migrasi database**

   ```bash
   npx prisma migrate dev
   ```

6. **Jalankan development server**

   ```bash
   npm run dev
   ```

---

## 🔑 Environment Variables

```env
COINGECKO_API="your-api-key"
DATABASE_URL="postgresql://user:password@localhost:5432/nirmala_finance"
AUTH_SECRET="your-secret-key"
BLOB_READ_WRITE_TOKEN="your-vercel-blob-token"
```

---

## 🤝 Kontribusi

Kontribusi sangat diterima!

```bash
npm run lint
```
