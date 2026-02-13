import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Download, Apple, Monitor } from "lucide-react";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "İndirme Rehberi | Felix Markets App Kurulum Kılavuzu",
  description:
    "Felix Markets mobil uygulamasını iOS, Windows ve Mac'e nasıl indirip kuracağınızı adım adım öğrenin. Hesap oluşturma, para yatırma ve ilk işlem rehberi.",
  alternates: { canonical: "https://felixmarketsapp.com/yatirim-rehberi" },
  openGraph: {
    title: "Felix Markets App İndirme Rehberi | Adım Adım Kurulum",
    description: "iOS, Windows ve Mac için Felix Markets uygulamasını indirip kurun. Adım adım başlangıç rehberi.",
  },
};

const steps = [
  {
    term: "1. Platformunuzu Seçin",
    definition:
      "Felix Markets uygulaması iOS (iPhone/iPad), Windows ve Mac platformlarında kullanılabilir. Cihazınıza uygun platformu seçerek indirme işlemine başlayın.",
  },
  {
    term: "2. Uygulamayı İndirin",
    definition:
      "iOS için App Store'dan 'Felix Markets' aratarak indirin. Windows için MetaTrader 5 kurulum dosyasını indirip çalıştırın. Mac için MetaTrader 5 PKG dosyasını indirip yükleyin.",
  },
  {
    term: "3. Hesap Oluşturun",
    definition:
      "Uygulamayı açtıktan sonra 'Yeni Hesap Aç' seçeneğine tıklayın. Kişisel bilgilerinizi girin ve kimlik doğrulama sürecini tamamlayın. E-posta adresinizi ve telefon numaranızı doğrulayın.",
  },
  {
    term: "4. Güvenlik Ayarlarını Yapın",
    definition:
      "Hesabınızın güvenliği için iki faktörlü kimlik doğrulamayı (2FA) etkinleştirin. iOS cihazlarda Touch ID veya Face ID ile biyometrik giriş ayarlayın.",
  },
  {
    term: "5. Hesabınıza Para Yatırın",
    definition:
      "Minimum $100 depozito ile hesabınızı fonlayın. Banka havalesi, kredi kartı ve diğer güvenli ödeme yöntemlerini kullanabilirsiniz. Para yatırma işlemi genellikle birkaç dakika içinde tamamlanır.",
  },
  {
    term: "6. MetaTrader 5 Bağlantısı",
    definition:
      "Uygulamada Felix Markets sunucusunu seçin ve hesap bilgilerinizle giriş yapın. MetaTrader 5 platformunun tüm gelişmiş özelliklerine mobil cihazınızdan erişebilirsiniz.",
  },
  {
    term: "7. Grafik ve Analiz Araçlarını Keşfedin",
    definition:
      "Uygulamadaki gelişmiş grafik araçlarını, teknik göstergeleri ve çizim araçlarını keşfedin. Zaman dilimlerini ayarlayın, favori enstrümanlarınızı izleme listesine ekleyin.",
  },
  {
    term: "8. Bildirim Ayarlarını Yapılandırın",
    definition:
      "Fiyat alarmları, piyasa haberleri ve işlem bildirimleri için push bildirim ayarlarınızı yapılandırın. Önemli piyasa hareketlerinden anında haberdar olun.",
  },
  {
    term: "9. Demo Hesapla Pratik Yapın",
    definition:
      "Gerçek para riske atmadan önce demo hesap ile uygulamayı tanıyın. Sanal bakiye ile gerçek piyasa koşullarında işlem yaparak deneyim kazanın.",
  },
  {
    term: "10. İlk İşleminizi Yapın",
    definition:
      "Hazır olduğunuzda gerçek hesabınıza geçin. Enstrüman seçin, lot miktarını belirleyin, stop loss ve take profit seviyelerini ayarlayın ve ilk işleminizi gerçekleştirin.",
  },
];

export default function YatirimRehberiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-sm text-gold">
              <Download className="h-4 w-4" />
              <span>Adım Adım Kurulum</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              İndirme <span className="text-gold">Rehberi</span>
            </h1>
            <p className="text-lg text-gray-300">
              Felix Markets mobil uygulamasını indirip kurmanız ve ilk işleminizi
              yapmanız için adım adım kılavuz.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Download Links */}
      <section className="py-12 border-b bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button variant="gold" size="lg" asChild>
              <a href="https://apps.apple.com/tr/app/felix-markets/id6747508035?l=tr" target="_blank" rel="noopener noreferrer">
                <Apple className="mr-2 h-5 w-5" /> App Store&apos;dan İndir
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://download.metatrader.com/cdn/web/felix.markets.ltd/mt5/felixmarkets5setup.exe" target="_blank" rel="noopener noreferrer">
                <Monitor className="mr-2 h-5 w-5" /> Windows için İndir
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Kurulum ve Başlangıç Adımları
              </h2>
              <p className="text-muted-foreground">
                Felix Markets uygulamasını indirip ilk işleminizi yapmak için
                aşağıdaki adımları takip edin.
              </p>
            </div>
            <div className="space-y-4">
              {steps.map((item, index) => (
                <Card key={item.term} className="hover:border-gold/30 transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-start gap-3">
                      <span className="text-gold font-bold text-sm mt-0.5 shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.term}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-14">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.definition}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hemen İndirin ve Başlayın
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Felix Markets uygulamasını indirin ve profesyonel trading deneyimini
            cebinizde yaşayın. Demo hesapla risksiz pratik yapabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link href="/hizmetler">
                Özellikleri İncele <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-white/10" asChild>
              <Link href="/blog">Blog Yazılarını Oku</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
