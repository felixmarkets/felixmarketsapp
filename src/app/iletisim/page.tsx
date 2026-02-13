import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle, Clock, Headphones } from "lucide-react";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Destek | Felix Markets App Yardım Merkezi",
  description:
    "Felix Markets App teknik destek ve yardım merkezi. Uygulama sorunları, hesap işlemleri ve kurulum desteği için 7/24 ekibimize ulaşın.",
  alternates: { canonical: "https://felixmarketsapp.com/iletisim" },
  openGraph: {
    title: "Felix Markets App Destek Merkezi",
    description: "Uygulama teknik desteği ve yardım için 7/24 ekibimize ulaşın.",
  },
};

export default function IletisimPage() {
  return (
    <>
      {/* Hero — farklı yapı: sol hizalı, ikon grid */}
      <section className="bg-[#111] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-gold text-sm font-semibold mb-4">
              <Headphones className="h-4 w-4" />
              7/24 Uygulama Desteği
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Yardım <span className="text-gold">Merkezi</span>
            </h1>
            <p className="text-gray-400 max-w-xl">
              Felix Markets App ile ilgili tüm sorularınız için destek ekibimiz
              her zaman yanınızda. Uygulama kurulumu, hesap işlemleri veya teknik
              sorunlar için bize ulaşın.
            </p>
          </div>
        </div>
      </section>

      {/* Contact channels — 3 kart yan yana (diğer sitelerden farklı layout) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border rounded-xl p-6 text-center space-y-3 hover:border-gold/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                <Mail className="h-5 w-5 text-gold" />
              </div>
              <h3 className="font-semibold">E-posta Desteği</h3>
              <p className="text-sm text-muted-foreground">Detaylı sorularınız için</p>
              <a href="mailto:support@felixmarkets.com" className="text-gold text-sm font-medium hover:underline block">
                support@felixmarkets.com
              </a>
            </div>

            <div className="bg-card border rounded-xl p-6 text-center space-y-3 hover:border-gold/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                <Phone className="h-5 w-5 text-gold" />
              </div>
              <h3 className="font-semibold">Telefon</h3>
              <p className="text-sm text-muted-foreground">Acil destek hattı</p>
              <a href="tel:+61272418913" className="text-gold text-sm font-medium hover:underline block">
                +61 272 418 913
              </a>
            </div>

            <div className="bg-card border rounded-xl p-6 text-center space-y-3 hover:border-gold/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <h3 className="font-semibold">Merkez Ofis</h3>
              <p className="text-sm text-muted-foreground">Kayıtlı adres</p>
              <span className="text-gold text-sm font-medium block">
                Fomboni – Comoros
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — diğer sitelerde yok */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">
            Sık Sorulan <span className="text-gold">Sorular</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Uygulamayı nereden indirebilirim?", a: "iOS için App Store'dan 'Felix Markets' aratarak, Windows için hizmetler sayfamızdaki MetaTrader 5 indirme linkinden indirebilirsiniz." },
              { q: "Hesap açmak için ne gerekiyor?", a: "Kimlik belgesi, e-posta adresi ve telefon numarası ile hızlıca hesap oluşturabilirsiniz. Minimum $100 depozito ile işlem yapmaya başlayabilirsiniz." },
              { q: "Uygulama hangi cihazları destekliyor?", a: "iPhone, iPad, Windows PC ve Mac bilgisayarlar desteklenmektedir. MetaTrader 5 altyapısı kullanılmaktadır." },
              { q: "Para yatırma ve çekme nasıl yapılır?", a: "Banka havalesi, kredi kartı ve diğer güvenli ödeme yöntemleri ile hesabınıza para yatırabilir veya çekebilirsiniz." },
              { q: "Teknik bir sorun yaşıyorum, ne yapmalıyım?", a: "support@felixmarkets.com adresine ekran görüntüsü ile birlikte sorununuzu bildirin. Ekibimiz en kısa sürede size dönüş yapacaktır." },
            ].map((item) => (
              <div key={item.q} className="bg-card border rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{item.q}</h3>
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destek saatleri — diğer sitelerde yok */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Destek ekibimiz 7 gün 24 saat hizmetinizdedir</span>
          </div>
        </div>
      </section>
    </>
  );
}
