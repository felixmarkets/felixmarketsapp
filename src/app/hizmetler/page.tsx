import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Headphones,
  Fingerprint,
  CheckCircle,
  Apple,
  Monitor,
  Download,
  Bell,
  Wifi,
  Smartphone,
} from "lucide-react";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Özellikler ve İndirme | Felix Markets Mobil Uygulama",
  description:
    "Felix Markets mobil uygulamasının tüm özellikleri. iOS, Windows ve Mac için indirme linkleri. Gelişmiş grafikler, güvenli işlemler ve hızlı emir gerçekleştirme.",
  alternates: { canonical: "https://felixmarketsapp.com/hizmetler" },
  openGraph: {
    title: "Felix Markets App Özellikleri | Mobil Trading",
    description: "Gelişmiş grafikler, güvenli işlemler, hızlı emir gerçekleştirme. iOS ve Windows için indirin.",
  },
};

export default function HizmetlerPage() {
  return (
    <>
      {/* Hero */}
      <section className="navy-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Uygulama <span className="text-gold">Özellikleri</span> ve İndirme
            </h1>
            <p className="text-lg text-gray-300">
              Felix Markets mobil uygulamasının sunduğu gelişmiş özellikler ve
              platform indirme linkleri.
            </p>
          </div>
        </div>
      </section>

      {/* Download Platforms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Platformlarımızı <span className="text-gold">İndirin</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Apple,
                title: "Felix Markets iOS",
                desc: "iPhone ve iPad için tasarlanmış, Apple güvenlik standartlarına uygun kullanıcı dostu arayüz ile kolay trading.",
                href: "https://apps.apple.com/tr/app/felix-markets/id6747508035?l=tr",
                cta: "App Store'dan İndir",
                features: ["Touch ID / Face ID desteği", "Retina ekran optimizasyonu", "Push bildirimler"],
              },
              {
                icon: Monitor,
                title: "Felix Markets Windows",
                desc: "Windows masaüstü için optimize edilmiş, MetaTrader 5 entegrasyonlu profesyonel analiz araçları.",
                href: "https://download.metatrader.com/cdn/web/felix.markets.ltd/mt5/felixmarkets5setup.exe",
                cta: "Windows için İndir",
                features: ["MetaTrader 5 entegrasyonu", "Çoklu monitör desteği", "Gelişmiş grafik araçları"],
              },
              {
                icon: Download,
                title: "Felix Markets Mac",
                desc: "macOS için MetaTrader 5 uygulaması. Native performans ve Retina ekran desteği.",
                href: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.pkg.zip",
                cta: "Mac için İndir",
                features: ["macOS native uygulama", "Apple Silicon desteği", "Retina ekran uyumlu"],
              },
            ].map((platform) => (
              <Card key={platform.title} className="overflow-hidden hover:border-gold/50 transition-all duration-300">
                <CardContent className="p-8 space-y-5">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                    <platform.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold">{platform.title}</h3>
                  <p className="text-muted-foreground text-sm">{platform.desc}</p>
                  <ul className="space-y-2">
                    {platform.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="gold" className="w-full" asChild>
                    <a href={platform.href} target="_blank" rel="noopener noreferrer">
                      {platform.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Gelişmiş <span className="text-gold">Özellikler</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Felix Markets mobil uygulamasının sunduğu profesyonel trading özellikleri
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Gelişmiş Grafikler", desc: "Profesyonel teknik analiz araçları ve gerçek zamanlı grafikler ile piyasa trendlerini mobil cihazınızdan takip edin." },
              { icon: Shield, title: "Güvenli İşlemler", desc: "Banka düzeyinde şifreleme ve 2FA güvenlik sistemi ile paranızı ve kişisel verilerinizi koruyun." },
              { icon: Zap, title: "Hızlı Emir Gerçekleştirme", desc: "20ms'den az gecikme süresi ile anlık işlem yapın. Piyasa fırsatlarını kaçırmayın." },
              { icon: Globe, title: "1000+ Enstrüman", desc: "Forex, hisse senedi, emtia, endeks ve kripto para dahil geniş yelpazede mobil işlem imkanı." },
              { icon: Headphones, title: "7/24 Uygulama İçi Destek", desc: "Uzman müşteri hizmetleri ekibimiz uygulama içi canlı destek ile her zaman yanınızda." },
              { icon: Fingerprint, title: "Biyometrik Giriş", desc: "Parmak izi ve yüz tanıma ile hızlı ve güvenli giriş. Şifre hatırlama derdi yok." },
              { icon: Bell, title: "Anlık Bildirimler", desc: "Fiyat alarmları, piyasa haberleri ve işlem bildirimleri ile her gelişmeden anında haberdar olun." },
              { icon: Wifi, title: "Düşük Veri Kullanımı", desc: "Optimize edilmiş veri aktarımı ile mobil veri tasarrufu sağlayın. Wi-Fi olmadan da sorunsuz çalışır." },
              { icon: Smartphone, title: "Çoklu Cihaz Senkronizasyonu", desc: "Masaüstü ve mobil arasında sorunsuz geçiş. İşlemleriniz tüm cihazlarda senkronize kalır." },
            ].map((feature) => (
              <Card key={feature.title} className="group hover:border-gold/50 transition-all duration-300">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="navy-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hemen İndirin ve Trading&apos;e Başlayın
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Felix Markets mobil uygulamasını indirin ve profesyonel trading deneyimini
            cebinizde yaşayın. Minimum $100 depozito ile hemen işlem yapmaya başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" asChild>
              <a href="https://apps.apple.com/tr/app/felix-markets/id6747508035?l=tr" target="_blank" rel="noopener noreferrer">
                <Apple className="mr-2 h-5 w-5" /> App Store&apos;dan İndir
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-gold/50 text-gold hover:bg-gold/10" asChild>
              <a href="https://download.metatrader.com/cdn/web/felix.markets.ltd/mt5/felixmarkets5setup.exe" target="_blank" rel="noopener noreferrer">
                <Monitor className="mr-2 h-5 w-5" /> Windows için İndir
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
