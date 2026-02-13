"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const topLinks = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Özellikler" },
  { href: "/yatirim-rehberi", label: "Kurulum" },
  { href: "/blog", label: "Haberler" },
  { href: "/iletisim", label: "Destek" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#111] text-white">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 text-xs text-gray-400">
          <span>support@felixmarkets.com &bull; +61 272 418 913</span>
          <span className="hidden sm:inline">LEVANTE UD Resmi Partneri</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-gold flex items-center justify-center">
            <span className="text-white font-black text-lg leading-none">F</span>
          </div>
          <div className="leading-tight">
            <span className="text-sm font-bold tracking-wide">FELIX MARKETS</span>
            <span className="block text-[10px] text-gold font-semibold tracking-widest uppercase">Mobile App</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {topLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://apps.apple.com/tr/app/felix-markets/id6747508035?l=tr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
          >
            <Download className="h-4 w-4" />
            İndir
          </a>
          <a
            href="https://felixmarketsglobal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-white border border-white/20 px-4 py-2 rounded transition-colors"
          >
            Giriş Yap
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#111]">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {topLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-3">
              <a
                href="https://apps.apple.com/tr/app/felix-markets/id6747508035?l=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 bg-gold text-white text-sm font-semibold px-4 py-2.5 rounded"
                onClick={() => setOpen(false)}
              >
                <Download className="h-4 w-4" />
                İndir
              </a>
              <a
                href="https://felixmarketsglobal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-sm text-gray-300 border border-white/20 px-4 py-2.5 rounded"
                onClick={() => setOpen(false)}
              >
                Giriş Yap
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
