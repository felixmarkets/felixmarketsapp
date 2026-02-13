import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export const runtime = "edge";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
}

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const { getRequestContext } = await import("@cloudflare/next-on-pages");
    const { env } = getRequestContext();
    const db = env.DB;
    const result = await db
      .prepare("SELECT * FROM posts WHERE slug = ? AND published = 1")
      .bind(slug)
      .first<BlogPost>();
    return result || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Yazı Bulunamadı" };
  }

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      type: "article",
      publishedTime: post.created_at,
      images: post.cover_image ? [{ url: post.cover_image }] : [],
    },
    alternates: {
      canonical: `https://felixmarketsapp.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="navy-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Haberlere Dön
            </Link>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={post.created_at}>
                {new Date(post.created_at).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {post.cover_image && (
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-a:text-gold hover:prose-a:text-gold-light"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="navy-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Uygulamayı İndirin ve Başlayın
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Felix Markets mobil uygulamasıyla profesyonel trading deneyimini cebinizde yaşayın.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link href="/hizmetler">
              Özellikleri İncele <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
