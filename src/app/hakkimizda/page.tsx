import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Smartphone, Globe, Zap, ArrowRight, CheckCircle, Lock, Award } from "lucide-react";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Hakkımızda | Felix Markets App Nedir?",
  description:
    "Felix Markets App, iOS ve Windows için geliştirilmiş profesyonel mobil trading uygulamasıdır. MetaTrader 5 entegrasyonu ve güvenli işlem altyapısı.",
  alternates: { canonical: "https://felixmarketsapp.com/hakkimizda" },
  openGraph: {
    title: "Felix Markets App Hakkında | Mobil Trading Uygulaması",
    description: "iOS ve Windows için profesyonel mobil trading uygulaması. MetaTrader 5 entegrasyonu, güvenli altyapı ve 7/24 destek.",
  },
};

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero */}
      <section className="navy-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-gold">Felix Markets App</span> Hakkında
            </h1>
            <p className="text-lg text-gray-300">
              Profesyonel mobil trading deneyimi — her yerden, her an güvenle işlem yapın.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">
                Mobil Trading&apos;in Yeni Adresi
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Felix Markets App, iOS ve Windows platformları için özel olarak geliştirilmiş
                profesyonel bir mobil trading uygulamasıdır. MetaTrader 5 entegrasyonu sayesinde
                gelişmiş grafik araçları, teknik analiz göstergeleri ve anlık emir gerçekleştirme
                özelliklerini avucunuzun içine taşıyoruz.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Uygulamamız, banka düzeyinde şifreleme teknolojisi ve iki faktörlü kimlik
                doğrulama (2FA) ile güvenli bir işlem ortamı sunar. Biyometrik giriş desteği
                sayesinde parmak izi veya yüz tanıma ile hızlı ve güvenli erişim sağlayabilirsiniz.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                1000&apos;den fazla işlem enstrümanına mobil erişim, 20ms&apos;den düşük gecikme
                süresi ile anlık emir gerçekleştirme ve 7/24 uygulama içi canlı destek ile
                profesyonel trading deneyimini cebinizde yaşayın. Felix Markets App ile
                global piyasalara her yerden bağlanın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 navy-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">
              Fonlarınızın Güvenliği Birinci Önceliğimiz
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Felix Markets&apos;te yatırımlarınızın güvenliği en yüksek önceliğimizdir.
              MWALI lisansları ve WikiFX onayı ile fonlarınızın gelişmiş güvenlik
              protokolleriyle korunmasını sağlıyoruz.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Lock, text: "Banka Düzeyinde Şifreleme" },
                { icon: Shield, text: "2FA Güvenlik Sistemi" },
                { icon: Award, text: "ASIC Düzenlemeli" },
                { icon: Lock, text: "Biyometrik Giriş Desteği" },
                { icon: Shield, text: "7/24 Güvenlik İzleme" },
                { icon: CheckCircle, text: "Apple Güvenlik Standartları" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Neden Felix Markets?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Smartphone,
                title: "Mobil Optimizasyon",
                desc: "Tüm cihazlarda mükemmel performans ve kullanıcı deneyimi. Retina ekran desteği.",
              },
              {
                icon: Zap,
                title: "Anlık Emir Gerçekleştirme",
                desc: "20ms altı gecikme süresi ile piyasa fırsatlarını anında değerlendirin.",
              },
              {
                icon: Globe,
                title: "1000+ Enstrüman",
                desc: "Forex, hisse, emtia, endeks ve kripto para dahil geniş yelpazede mobil işlem.",
              },
              {
                icon: Shield,
                title: "Güvenli Altyapı",
                desc: "Banka düzeyinde şifreleme, 2FA ve biyometrik giriş ile maksimum güvenlik.",
              },
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                    <item.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Warning + CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Uygulamayı İndirin ve Başlayın
          </h2>
          <p className="text-muted-foreground mb-8">
            Felix Markets mobil uygulamasını indirin ve profesyonel trading deneyimini
            cebinizde yaşayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="gold" size="lg" asChild>
              <Link href="/hizmetler">
                Özellikleri İncele <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/iletisim">
                İletişime Geçin
              </Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Risk Uyarısı:</strong> Türev ürün ticareti önemli riskler taşır. Tüm yatırımcılar
            için uygun değildir. Geçmiş performans gelecekteki performansın göstergesi değildir.
            İşlem kararlarınızı vermeden önce yasal belgeleri okuyun ve riskleri tam olarak anladığınızdan emin olun.
          </p>
        </div>
      </section>
    </>
  );
}
