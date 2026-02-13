import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ArrowRight } from "lucide-react";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Blog | Mobil Trading Haberleri ve Güncellemeler",
  description:
    "Felix Markets App güncellemeleri, mobil trading ipuçları ve uygulama haberleri. Yeni özellikler ve platform geliştirmeleri.",
  alternates: { canonical: "https://felixmarketsapp.com/blog" },
};

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string | null;
  created_at: string;
}

async function getPosts(): Promise<BlogPost[]> {
  try {
    const { getRequestContext } = await import("@cloudflare/next-on-pages");
    const { env } = getRequestContext();
    const db = env.DB;
    const result = await db
      .prepare(
        "SELECT id, title, slug, excerpt, cover_image, created_at FROM posts WHERE published = 1 ORDER BY created_at DESC"
      )
      .all<BlogPost>();
    return result.results || [];
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#111] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-gold">Uygulama Haberleri</span>
            </h1>
            <p className="text-lg text-gray-300">
              Felix Markets App güncellemeleri, mobil trading ipuçları ve platform haberleri.
            </p>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">Henüz uygulama haberi yayınlanmadı</h2>
              <p className="text-muted-foreground">
                Yakında uygulama güncellemeleri, yeni özellikler ve
                mobil trading ipuçları burada paylaşılacaktır.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:border-gold/50 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                    {post.cover_image && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <CalendarDays className="h-3.5 w-3.5" />
                        <time dateTime={post.created_at}>
                          {new Date(post.created_at).toLocaleDateString("tr-TR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <CardTitle className="text-xl group-hover:text-gold transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-gold text-sm font-medium mt-4">
                        Devamını Oku
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
