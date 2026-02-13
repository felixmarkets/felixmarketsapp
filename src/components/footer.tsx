import Link from "next/link";
import { Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-navy-dark text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Smartphone className="h-6 w-6 text-gold" />
              <span className="text-lg font-bold text-white">
                Felix Markets App
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Profesyonel mobil trading deneyimi. Her yerden, her an güvenle işlem yapın.
            </p>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4">Uygulamalar</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://download.metatrader.com/cdn/web/felix.markets.ltd/mt5/felixmarkets5setup.exe" className="hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">Windows MT5</a></li>
              <li><a href="https://apps.apple.com/tr/app/felix-markets/id6747508035?l=tr" className="hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">iOS App Store</a></li>
              <li><a href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.pkg.zip" className="hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">Mac MT5</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4">Sayfalar</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hakkimizda" className="hover:text-gold transition-colors">Hakkımızda</Link></li>
              <li><Link href="/hizmetler" className="hover:text-gold transition-colors">Özellikler</Link></li>
              <li><Link href="/yatirim-rehberi" className="hover:text-gold transition-colors">İndirme Rehberi</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/iletisim" className="hover:text-gold transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">Adres:</span>
                <span>Fomboni – Mwali Adası – Comoros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">Tel:</span>
                <span>+61 272 418 913</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">E-posta:</span>
                <span>support@felixmarkets.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            <strong>LEVANTE UD&apos;NİN RESMİ PARTNERİ</strong>
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            <strong>Risk Uyarısı:</strong> Türev ürünlerle işlem yapmak önemli riskler taşır ve tüm yatırımcılar için uygun olmayabilir. Geçmiş performans gelecekteki sonuçların göstergesi değildir. Lütfen yasal belgelerimizi okuyun ve işlem yapmadan önce riskleri anlayın. Felix Markets, ABD, İngiltere, Kanada ve diğer belirli yargı bölgelerindeki sakinlere hizmet sunmamaktadır. Felix Markets, Comoros&apos;da kayıtlı (HT00324040) ve ASIC tarafından düzenlenmiştir (ACN 648 763 955).
          </p>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Copyright {new Date().getFullYear()} | Felix Markets App
          </p>
          <ul className="flex gap-4 text-sm">
            <li><Link href="/" className="hover:text-gold transition-colors">Ana Sayfa</Link></li>
            <li><Link href="/hizmetler" className="hover:text-gold transition-colors">Özellikler</Link></li>
            <li><Link href="/yatirim-rehberi" className="hover:text-gold transition-colors">İndirme Rehberi</Link></li>
            <li><Link href="/iletisim" className="hover:text-gold transition-colors">İletişim</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
