import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Smartphone,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  Download,
  Globe,
  Headphones,
  Monitor,
  ChevronRight,
  Apple,
  Fingerprint,
} from "lucide-react";
import Link from "next/link";

export const runtime = "edge";

const appFeatures = [
  {
    icon: BarChart3,
    title: "Gelişmiş Grafikler",
    description:
      "Profesyonel teknik analiz araçları ve gerçek zamanlı grafikler ile piyasa trendlerini mobil cihazınızdan takip edin.",
  },
  {
    icon: Shield,
    title: "Güvenli İşlemler",
    description:
      "Banka düzeyinde şifreleme ve 2FA güvenlik sistemi ile paranızı ve kişisel verilerinizi koruyun.",
  },
  {
    icon: Zap,
    title: "Hızlı Emir Gerçekleştirme",
    description:
      "20ms&apos;den az gecikme süresi ile anlık işlem yapın. Piyasa fırsatlarını kaçırmayın.",
  },
  {
    icon: Globe,
    title: "1000+ Enstrüman",
    description:
      "Forex, hisse senedi, emtia, endeks ve kripto para dahil geniş yelpazede mobil işlem imkanı.",
  },
  {
    icon: Headphones,
    title: "7/24 Destek",
    description:
      "Uzman müşteri hizmetleri ekibimiz uygulama içi canlı destek ile her zaman yanınızda.",
  },
  {
    icon: Fingerprint,
    title: "Biyometrik Giriş",
    description:
      "Parmak izi ve yüz tanıma ile hızlı ve güvenli giriş. Şifre hatırlama derdi yok.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section — Centered with app focus */}
      <section className="relative overflow-hidden navy-gradient text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-sm text-gold">
              <Smartphone className="h-4 w-4" />
              <span>Profesyonel trading cebinizde</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
              Felix Markets{" "}
              <span className="text-gold">Mobil Uygulaması</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              iOS ve Windows için geliştirilen Felix Markets uygulamasıyla
              her yerden güvenle işlem yapın. MetaTrader 5 entegrasyonu,
              anlık bildirimler ve profesyonel analiz araçları avucunuzun içinde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="gold" size="lg" asChild>
                <a
                  href="https://apps.apple.com/tr/app/felix-markets/id6747508035?l=tr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Apple className="mr-2 h-5 w-5" />
                  App Store&apos;dan İndir
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gold/50 text-gold hover:bg-gold/10"
                asChild
              >
                <a
                  href="https://download.metatrader.com/cdn/web/felix.markets.ltd/mt5/felixmarkets5setup.exe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Monitor className="mr-2 h-5 w-5" />
                  Windows İndir
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Platformlarımızı <span className="text-gold">İndirin</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              iOS, Windows ve Mac için özel olarak optimize edilmiş Felix Markets uygulamaları
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Felix Markets iOS",
                desc: "iPhone ve iPad için tasarlanmış, Apple güvenlik standartlarına uygun kullanıcı dostu arayüz.",
                href: "https://apps.apple.com/tr/app/felix-markets/id6747508035?l=tr",
                cta: "App Store'dan İndir",
                iconEl: Apple,
              },
              {
                title: "Felix Markets Windows",
                desc: "Windows masaüstü için optimize edilmiş, MetaTrader 5 entegrasyonlu profesyonel analiz araçları.",
                href: "https://download.metatrader.com/cdn/web/felix.markets.ltd/mt5/felixmarkets5setup.exe",
                cta: "Windows için İndir",
                iconEl: Monitor,
              },
              {
                title: "Felix Markets Mac",
                desc: "macOS için MetaTrader 5 uygulaması. Retina ekran desteği ve native performans.",
                href: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.pkg.zip",
                cta: "Mac için İndir",
                iconEl: Download,
              },
            ].map((item) => (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">
                <Card className="h-full hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 cursor-pointer group">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto group-hover:bg-gold/20 transition-colors">
                      <item.iconEl className="h-7 w-7 text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-gold transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                    <div className="flex items-center justify-center text-gold text-sm font-medium">
                      {item.cta}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Uygulama <span className="text-gold">Özellikleri</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Felix Markets mobil uygulamasının sunduğu gelişmiş özelliklerle
              profesyonel trading deneyimi yaşayın.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="group hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nasıl <span className="text-gold">Başlanır</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Felix Markets mobil uygulamasını indirip işlem yapmaya başlamak çok kolay.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Uygulamayı İndirin", desc: "App Store veya Windows için MetaTrader 5 uygulamasını indirin." },
              { step: "02", title: "Hesap Oluşturun", desc: "Kişisel bilgilerinizle hızlıca kayıt olun ve hesabınızı doğrulayın." },
              { step: "03", title: "Para Yatırın", desc: "Minimum $100 depozito ile güvenli ödeme yöntemleriyle hesabınızı fonlayın." },
              { step: "04", title: "İşlem Yapın", desc: "1000+ enstrümanda profesyonel araçlarla mobil trading deneyimini yaşayın." },
            ].map((item) => (
              <Card key={item.step} className="text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                    <span className="text-gold font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="navy-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Hemen İndirin ve Trading&apos;e Başlayın
            </h2>
            <p className="text-gray-300 text-lg">
              Felix Markets mobil uygulamasını indirin ve profesyonel trading deneyimini
              cebinizde yaşayın. Güvenli altyapı, hızlı emir ve 7/24 destek ile
              global piyasalara her yerden erişin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="gold" size="lg" asChild>
                <a
                  href="https://apps.apple.com/tr/app/felix-markets/id6747508035?l=tr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Apple className="mr-2 h-5 w-5" />
                  App Store&apos;dan İndir
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gold/50 text-gold hover:bg-gold/10"
                asChild
              >
                <a
                  href="https://download.metatrader.com/cdn/web/felix.markets.ltd/mt5/felixmarkets5setup.exe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Monitor className="mr-2 h-5 w-5" />
                  Windows için İndir
                </a>
              </Button>
            </div>
            <p className="text-gray-500 text-sm pt-2">
              <a
                href="https://felixmarketglobal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors underline"
              >
                felixmarketglobal.com
              </a>
              {" "}üzerinden de platforma erişebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
