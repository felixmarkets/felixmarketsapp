import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Felix Markets App | Mobil Trading Uygulaması",
    template: "%s | Felix Markets App",
  },
  description:
    "Felix Markets mobil uygulamasını indirin. iOS ve Windows için profesyonel trading deneyimi. MetaTrader 5 entegrasyonu ve güvenli altyapı.",
  keywords: [
    "felix markets app",
    "mobil trading",
    "forex uygulaması",
    "trading app",
    "metatrader 5 mobil",
    "ios trading",
    "android trading",
    "mobil yatırım",
    "trading platformu",
    "anlık işlem",
    "mobil borsa",
    "cep telefonu trading",
  ],
  authors: [{ name: "Felix Markets" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://felixmarketsapp.com",
    siteName: "Felix Markets App",
    title: "Felix Markets App | Mobil Trading Uygulaması",
    description:
      "iOS ve Windows için profesyonel mobil trading uygulaması. MetaTrader 5 entegrasyonu ve 1000+ enstrüman.",
    images: [
      {
        url: "https://felixmarketsapp.com/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Felix Markets App Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Felix Markets App | Mobil Trading Uygulaması",
    description:
      "iOS ve Windows için profesyonel mobil trading uygulaması. MetaTrader 5 entegrasyonu ve 1000+ enstrüman.",
    images: ["https://felixmarketsapp.com/icon-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://felixmarketsapp.com",
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
