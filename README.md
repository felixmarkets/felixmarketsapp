# Felix Market Rehber

**felixmarketsrehber.com** — Felix Market Global'i destekleyen SEO uyumlu yatırım rehberi sitesi.

## Teknoloji

- **Framework:** Next.js 15 (App Router, Edge Runtime)
- **Hosting:** Cloudflare Pages (`@cloudflare/next-on-pages`)
- **Veritabanı:** Cloudflare D1 (SQLite) + Drizzle ORM
- **Depolama:** Cloudflare R2 (blog görselleri)
- **Stil:** Tailwind CSS + Shadcn UI bileşenleri
- **Tema:** Dark/Light mod desteği (next-themes)

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

## Cloudflare D1 Veritabanı Kurulumu

```bash
# D1 veritabanı oluştur
npx wrangler d1 create felixmarketsrehber-db

# wrangler.toml'daki database_id'yi güncelle

# Migration'ı çalıştır (lokal)
npm run db:migrate

# Migration'ı çalıştır (production)
npm run db:migrate:prod
```

## Cloudflare R2 Bucket Kurulumu

```bash
npx wrangler r2 bucket create felixmarketsrehber-images
```

## Deploy (Cloudflare Pages)

```bash
npm run pages:build
npm run pages:deploy
```

## Admin Paneli

`/admin` yolundan erişilir. `.env.local` veya `wrangler.toml` içindeki `ADMIN_PASSWORD` ile korunur.

## Sayfa Yapısı

| Sayfa | Yol | Açıklama |
|-------|-----|----------|
| Ana Sayfa | `/` | Landing page, avantajlar, CTA |
| Hakkımızda | `/hakkimizda` | Kurumsal tanıtım |
| Hizmetler | `/hizmetler` | Forex, Emtia, Hisse, Kripto |
| Yatırım Rehberi | `/yatirim-rehberi` | Temel finansal terimler |
| Blog | `/blog` | Dinamik blog listeleme |
| Blog Detay | `/blog/[slug]` | Blog yazısı detay |
| İletişim | `/iletisim` | İletişim formu |
| Admin | `/admin` | Blog CRUD paneli |
