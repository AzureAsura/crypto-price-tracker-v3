<div align="center">

# 🪙 Nirmala Finance

**Crypto Price Tracker · Built in Indonesia**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

Platform crypto price tracker yang dikembangkan di Indonesia, memanfaatkan CoinGecko API secara efisien dengan hanya **30 request per menit**. Tampil dengan desain glassmorphism yang modern, ringan, dan dilengkapi fitur diskusi komunitas global.

[Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## ✨ Fitur Utama

- **📈 Live Price Tracking** — Pantau harga ribuan koin secara real-time berdasarkan market cap, trending, exchange, dan asset platform
- **📊 Chart Historis** — Visualisasi pergerakan harga dengan grafik interaktif menggunakan Lightweight Charts & Recharts
- **💬 Diskusi Global** — Forum diskusi terintegrasi untuk koin, exchange, dan topik global — langsung dari halaman detail
- **🔐 Autentikasi Aman** — Login & register via NextAuth v5 dengan password yang di-hash menggunakan bcrypt
- **🖼️ Foto Profil** — Upload dan kelola foto profil menggunakan Vercel Blob Storage
- **🎨 Glassmorphism UI** — Antarmuka modern dengan efek kaca transparan, animasi GSAP & Motion
- **⚡ Server Actions** — Seluruh data fetching dan mutasi dijalankan melalui Next.js Server Actions untuk performa optimal

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | Next.js 16, React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4, shadcn/ui, Radix UI |
| Database | PostgreSQL via Prisma 7 + Prisma Accelerate |
| Auth | NextAuth v5 (Auth.js) + Prisma Adapter |
| Storage | Vercel Blob (foto profil) |
| Charts | Recharts |
| Animation | Motion (Framer Motion) |
| API | CoinGecko Public API |
| Validation | Zod v4 |
| Notifications | Sonner |

---

## 🚀 Memulai

### Prasyarat

Pastikan kamu sudah menginstal:
- [Node.js](https://nodejs.org/) (v18+)
- [PostgreSQL](https://www.postgresql.org/) atau akun [Prisma Accelerate](https://www.prisma.io/data-platform/accelerate)
- Akun [Vercel](https://vercel.com/) (opsional, untuk Blob Storage)

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

4. **Isi variabel environment** (lihat bagian [Environment Variables](#-environment-variables))

5. **Jalankan migrasi database**
   ```bash
   npx prisma migrate dev
   ```

6. **Jalankan development server**
   ```bash
   npm run dev
   ```

   Buka [http://localhost:3000](http://localhost:3000) di browser kamu.

---

## 🔑 Environment Variables

Buat file `.env` di root project dan isi variabel berikut:

```env
# Coin Gecko API Key
COINGECKO_API="your-api-key"

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/nirmala_finance"

# NextAuth
AUTH_SECRET="your-secret-key"

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN="your-vercel-blob-token"
```

---

## 📁 Struktur Project

```
cryptopricetracker/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Route grup autentikasi
│   ├── (root)/             # Route utama (dashboard, detail, diskusi)
│   └── api/                # API routes
├── components/             # Komponen UI reusable
│   ├── ui/                 # shadcn/ui components
│   └── ...
├── lib/                    # Utilities & server actions
│   ├── actions/            # Next.js Server Actions
│   └── ...
├── prisma/                 # Schema & migrasi database
├── public/                 # Aset statis
└── types/                  # TypeScript type definitions
```

---


## 🤝 Kontribusi

Kontribusi sangat diterima! Ikuti langkah berikut:

1. Fork repositori ini
2. Buat branch baru: `git checkout -b feat/nama-fitur`
3. Commit perubahan: `git commit -m 'feat: tambah fitur X'`
4. Push ke branch: `git push origin feat/nama-fitur`
5. Buat Pull Request

Pastikan kode kamu lolos linting sebelum submit:
```bash
npm run lint
```

---

## 📄 Lisensi

Didistribusikan di bawah lisensi **MIT**. Lihat [`LICENSE`](LICENSE) untuk informasi lebih lanjut.

---

## 🙏 Kredit

- [CoinGecko API](https://www.coingecko.com/en/api) — Data harga kripto
- [shadcn/ui](https://ui.shadcn.com/) — Komponen UI
- [Lightweight Charts](https://tradingview.github.io/lightweight-charts/) — Chart harga

---

<div align="center">
  Dibuat di Indonesia
</div>