import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "İletişim | Felix Markets App Destek",
  description:
    "Felix Markets App ile iletişime geçin. Uygulama desteği, hesap sorunları ve teknik yardım için support@felixmarkets.com adresinden veya +61 272 418 913 numarasından ulaşın.",
  alternates: { canonical: "https://felixmarketsapp.com/iletisim" },
  openGraph: {
    title: "Felix Markets App İletişim | 7/24 Uygulama Desteği",
    description: "Uygulama desteği ve teknik yardım için 7/24 destek hattımızdan veya e-posta ile bize ulaşın.",
  },
};

export default function IletisimPage() {
  return (
    <>
      {/* Hero */}
      <section className="navy-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-gold">İletişim</span>
            </h1>
            <p className="text-lg text-gray-300">
              Sorularınız ve önerileriniz için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Bize Yazın</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ad Soyad</Label>
                    <Input id="name" placeholder="Adınız ve soyadınız" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta</Label>
                    <Input id="email" type="email" placeholder="ornek@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Konu</Label>
                    <Input id="subject" placeholder="Mesajınızın konusu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mesaj</Label>
                    <Textarea
                      id="message"
                      placeholder="Mesajınızı buraya yazın..."
                      rows={5}
                    />
                  </div>
                  <Button variant="gold" size="lg" className="w-full">
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">İletişim Bilgileri</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold">E-posta</h3>
                      <p className="text-muted-foreground">support@felixmarkets.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Telefon</h3>
                      <p className="text-muted-foreground">+61 272 418 913</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Adres</h3>
                      <p className="text-muted-foreground">Fomboni – Mwali Adası – Comoros</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <Card className="bg-navy-light text-white border-gold/20">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">
                    Felix Markets Hakkında
                  </h3>
                  <p className="text-gray-300 text-sm">
                    1000+ enstrüman, 0.01 pip spread, 1:400 kaldıraç ve
                    MetaTrader 5 platformuyla global piyasalarda işlem yapın.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button variant="gold" asChild>
                      <Link href="/hizmetler">
                        Hizmetleri İncele
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
