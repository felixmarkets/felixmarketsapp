import type { Metadata } from "next";
import { Shield, Lock, Fingerprint, Eye, Server, BadgeCheck } from "lucide-react";

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
      {/* Hero — sol hizalı, koyu arka plan */}
      <section className="bg-[#111] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Hakkımızda</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-5">
              Mobil Trading&apos;in <span className="text-gold">Yeni Nesil</span> Uygulaması
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Felix Markets App, yatırımcılara iOS ve Windows üzerinden profesyonel
              trading deneyimi sunan MetaTrader 5 tabanlı bir mobil uygulamadır.
            </p>
          </div>
        </div>
      </section>

      {/* İki sütunlu hikaye — diğer sitelerde yok */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">Neden Bu Uygulama?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Geleneksel masaüstü trading platformları mobil dünyaya uyum sağlamakta
                zorlanıyordu. Felix Markets App, bu boşluğu doldurmak için sıfırdan
                tasarlandı — mobil öncelikli, hızlı ve güvenli.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MetaTrader 5&apos;in tüm gücünü cebinize taşıyoruz: gelişmiş grafikler,
                50+ teknik gösterge, anlık emir gerçekleştirme ve 1000&apos;den fazla
                enstrümana erişim. Tüm bunlar 20ms altı gecikme süresiyle.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Kim İçin?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                İster yeni başlayan ister deneyimli yatırımcı olun — Felix Markets App
                her seviyeye uygun araçlar sunar. Demo hesapla risksiz pratik yapabilir,
                hazır olduğunuzda gerçek hesaba geçebilirsiniz.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Forex, hisse senedi, emtia, endeks ve kripto para piyasalarında tek
                uygulama üzerinden işlem yapın. Masaüstü ve mobil arasında sorunsuz
                senkronizasyon ile her yerden trading yapın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rakamlar — yatay bar, diğer sitelerde yok */}
      <section className="bg-[#111] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-black text-gold">1000+</div>
              <div className="text-xs text-gray-400 mt-1">Enstrüman</div>
            </div>
            <div>
              <div className="text-3xl font-black text-gold">&lt;20ms</div>
              <div className="text-xs text-gray-400 mt-1">Gecikme Süresi</div>
            </div>
            <div>
              <div className="text-3xl font-black text-gold">7/24</div>
              <div className="text-xs text-gray-400 mt-1">Uygulama Desteği</div>
            </div>
            <div>
              <div className="text-3xl font-black text-gold">3</div>
              <div className="text-xs text-gray-400 mt-1">Platform (iOS, Win, Mac)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Güvenlik — 6 kart grid, diğer sitelerden farklı layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-3">
            Güvenlik <span className="text-gold">Altyapımız</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10 text-sm">
            Paranız ve kişisel verileriniz çok katmanlı güvenlik sistemiyle korunur.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Lock, label: "256-bit SSL Şifreleme" },
              { icon: Shield, label: "İki Faktörlü Doğrulama" },
              { icon: Fingerprint, label: "Biyometrik Giriş" },
              { icon: Eye, label: "7/24 Güvenlik İzleme" },
              { icon: Server, label: "Ayrıştırılmış Hesaplar" },
              { icon: BadgeCheck, label: "ASIC Düzenlemeli" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-card border rounded-lg p-4 hover:border-gold/30 transition-colors">
                <item.icon className="h-5 w-5 text-gold shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk uyarısı — minimal, alt kısımda */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4">
          <p className="text-[11px] text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            <strong>Risk Uyarısı:</strong> Türev ürünlerle işlem yapmak önemli riskler taşır ve tüm yatırımcılar için uygun olmayabilir.
            Geçmiş performans gelecekteki sonuçların göstergesi değildir. Felix Markets, Comoros&apos;da kayıtlı (HT00324040) ve
            ASIC tarafından düzenlenmiştir (ACN 648 763 955).
          </p>
        </div>
      </section>
    </>
  );
}
