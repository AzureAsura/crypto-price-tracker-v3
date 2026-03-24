"use client";

import { motion } from "framer-motion";

const COINS = [
  { id: 1,  name: "Bitcoin",   img: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",  size: 120, x: "8%",  y: "15%" },
  { id: 2,  name: "Ethereum",  img: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",  size: 140, x: "78%", y: "10%" },
  { id: 3,  name: "Solana",    img: "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",  size: 130, x: "88%", y: "55%" },
  { id: 4,  name: "BNB",       img: "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",  size: 110, x: "5%",  y: "60%" },
  { id: 5,  name: "XRP",       img: "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",  size: 90, x: "20%", y: "80%" },
  { id: 6,  name: "USDC",      img: "https://coin-images.coingecko.com/coins/images/6319/large/USDC.png?1769615602", size: 100, x: "70%", y: "78%" },
  { id: 7,  name: "Tron",   img: "https://coin-images.coingecko.com/coins/images/1094/large/tron-logo.png?1696502193",  size: 100, x: "15%", y: "35%" },
  { id: 8,  name: "Dogecoin",  img: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409", size: 70, x: "82%", y: "32%" },
  { id: 9,  name: "Avalanche", img: "https://coin-images.coingecko.com/coins/images/12559/thumb/Avalanche_Circle_RedWhite_Trans.png", size: 34, x: "50%", y: "88%" },
  { id: 10, name: "Polkadot",  img: "https://coin-images.coingecko.com/coins/images/12171/thumb/polkadot.jpg",  size: 50, x: "42%", y: "6%"  },
];

export default function NotFound() {
  return (
    <>
      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #020b1e;
        }

        .page {
          min-height: 100vh;
          background: linear-gradient(135deg, #020b1e 0%, #041230 40%, #051840 70%, #020e28 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 2rem;
        }

        .page::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }
        .blob-1 {
          width: 420px; height: 420px;
          background: rgba(37, 99, 235, 0.22);
          top: -100px; left: -80px;
        }
        .blob-2 {
          width: 320px; height: 320px;
          background: rgba(34, 211, 238, 0.13);
          bottom: -80px; right: -60px;
        }

        .coin {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          user-select: none;
        }
        .coin img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
          filter: drop-shadow(0 4px 16px rgba(37,99,235,0.45));
        }

        .card {
          position: relative;
          z-index: 10;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 3rem 2.5rem;
          max-width: 460px;
          width: 100%;
          text-align: center;
          box-shadow:
            0 0 0 1px rgba(37,99,235,0.1),
            0 24px 64px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }

        .error-num {
          font-size: clamp(5.5rem, 18vw, 8rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #93c5fd 0%, #67e8f9 50%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .divider {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #22d3ee);
          border-radius: 2px;
          margin: 1rem auto;
        }

        .title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 0.65rem;
        }

        .desc {
          font-size: 0.875rem;
          color: rgba(148, 163, 184, 0.85);
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.72rem 1.8rem;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 0 24px rgba(37,99,235,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 36px rgba(37,99,235,0.6);
        }

        @media (max-width: 500px) {
          .card { padding: 2.5rem 1.5rem; }
          .coin { display: none; }
          .coin-visible { display: block; }
        }
      `}</style>

      <div className="page">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {COINS.map((coin, i) => (
          <motion.div
            key={coin.id}
            className="coin"
            style={{ left: coin.x, top: coin.y, width: coin.size, height: coin.size }}
            animate={{
              y: [0, -(14 + (i % 6) * 3), 0],
              rotate: i % 2 === 0 ? [0, 8, -8, 0] : [0, -10, 10, 0],
            }}
            transition={{
              duration: 5 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.28,
            }}
          >
            <img src={coin.img} alt={coin.name} />
          </motion.div>
        ))}

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="error-num"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5, type: "spring" }}
          >
            404
          </motion.div>

          <motion.div
            className="divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          />

          <motion.h1
            className="title"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.4 }}
          >
            Halaman Tidak Ditemukan
          </motion.h1>

          <motion.p
            className="desc"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.43, duration: 0.4 }}
          >
            Seperti koin yang hilang dari wallet — halaman yang kamu cari tidak ada atau sudah dipindahkan.
          </motion.p>

          <motion.a
            href="/"
            className="btn"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            ← Kembali ke Home
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}