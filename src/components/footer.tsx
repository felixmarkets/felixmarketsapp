import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded bg-gold flex items-center justify-center">
                <span className="text-white font-black text-sm">F</span>
              </div>
              <span className="text-white text-sm font-bold">Felix Markets App</span>
            </div>
            <p className="text-xs leading-relaxed">
              Mobil trading uygulaması. iOS, Windows ve Mac platformlarında profesyonel işlem deneyimi.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">İndirme</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://apps.apple.com/tr/app/felix-markets/id6747508035?l=tr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">iOS (App Store)</a></li>
              <li><a href="https://download.metatrader.com/cdn/web/felix.markets.ltd/mt5/felixmarkets5setup.exe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Windows (MT5)</a></li>
              <li><a href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.pkg.zip" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mac (MT5)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Keşfet</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/hizmetler" className="hover:text-white transition-colors">Özellikler</Link></li>
              <li><Link href="/yatirim-rehberi" className="hover:text-white transition-colors">Kurulum Rehberi</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Haberler</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="hover:text-white transition-colors">Destek</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">İletişim</h4>
            <ul className="space-y-2 text-xs">
              <li>support@felixmarkets.com</li>
              <li>+61 272 418 913</li>
              <li>Fomboni – Comoros</li>
            </ul>
          </div>
        </div>

        {/* Risk + copyright */}
        <div className="border-t border-white/10 pt-6 space-y-3">
          <p className="text-[10px] leading-relaxed text-gray-500">
            <strong className="text-gray-400">LEVANTE UD RESMİ PARTNERİ</strong> &mdash; Risk Uyarısı: Türev ürünlerle işlem yapmak önemli riskler taşır ve tüm yatırımcılar için uygun olmayabilir. Geçmiş performans gelecekteki sonuçların göstergesi değildir. Felix Markets, Comoros&apos;da kayıtlı (HT00324040) ve ASIC tarafından düzenlenmiştir (ACN 648 763 955). ABD, İngiltere, Kanada sakinlerine hizmet verilmemektedir.
          </p>
          <p className="text-[10px] text-gray-600">
            &copy; {new Date().getFullYear()} Felix Markets. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
