
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-white relative z-10 overflow-hidden min-h-[50vh] flex flex-col justify-between py-10 px-6 pb-28 md:pb-10"
    >

      <div className="relative z-10 px-4 md:px-0 md:w-[95vw] mx-auto w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left pt-10">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-black uppercase tracking-tighters tracking-wide mb-4">Kontak</h2>
          <ul className="space-y-3 text-base text-neutral-400 font-manrope">
            <li>info@nirmalafinance.com</li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Sosial Media</h2>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-base text-neutral-400 font-manrope">
            <Link href="#" className="hover:text-white transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              X / Twitter
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Telegram
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-20 text-center">
        <h1 className="text-[9vw] font-black tracking-tighter uppercase leading-none text-white/10 select-none pointer-events-none">
          Nirmala Finance
        </h1>
        <p className="text-xs text-neutral-600 font-manrope mt-6">
          © 2026 Nirmala Finance. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}