"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

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
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        disabled={currentPage <= 1}
        onClick={() => router.push(createPageURL(currentPage - 1))}
        className="p-2 border rounded text-white disabled:opacity-30 cursor-pointer" 
      >
        {"<"}
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => router.push(createPageURL(num))}
          className={`w-10 h-10 border text-white rounded cursor-pointer ${
            currentPage === num ? "bg-blue-600" : "bg-transparent"
          }`}
        >
          {num}
        </button>
      ))}

      <button
        disabled={currentPage >= totalPages}
        onClick={() => router.push(createPageURL(currentPage + 1))}
        className="p-2 border rounded text-white disabled:opacity-30 cursor-pointer"
      >
        {">"}
      </button>
    </div>
  );
}


export default Pagination