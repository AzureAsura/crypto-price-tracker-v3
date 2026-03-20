"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion'

const Pagination = ({ currentPage }: { currentPage: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const totalPages = 50;

  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + 2);

  if (endPage - startPage < 2) {
    startPage = Math.max(1, endPage - 2);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex items-center justify-center gap-2 mt-10"
    >
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        disabled={currentPage <= 1}
        onClick={() => router.push(createPageURL(currentPage - 1))}
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white/60 disabled:opacity-20 disabled:cursor-not-allowed hover:text-white transition-colors cursor-pointer"
        style={{
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(12px)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      <AnimatePresence mode="popLayout">
        {pageNumbers.map((num) => (
          <motion.button
            key={num}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => router.push(createPageURL(num))}
            className="relative w-12 h-12 rounded-xl text-sm font-semibold cursor-pointer"
            style={
              currentPage === num
                ? {
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.5), rgba(99,102,241,0.4))',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 0 20px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
                  color: 'white',
                }
                : {
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.5)',
                }
            }
          >
            {currentPage === num && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.35), rgba(99,102,241,0.3))',
                  boxShadow: '0 0 24px rgba(59,130,246,0.25)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{num}</span>
          </motion.button>
        ))}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        disabled={currentPage >= totalPages}
        onClick={() => router.push(createPageURL(currentPage + 1))}
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white/60 disabled:opacity-20 disabled:cursor-not-allowed hover:text-white transition-colors cursor-pointer"
        style={{
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(12px)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </motion.div>
  )
}

export default Pagination