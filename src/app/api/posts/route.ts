import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

function verifyAuth(request: NextRequest, adminPassword: string): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) return false;
  const token = authHeader.split(" ")[1];
  try {
    const decoded = atob(token);
    return decoded.includes(adminPassword);
  } catch {
    return false;
  }
}

async function getEnv() {
  try {
    const { getRequestContext } = await import("@cloudflare/next-on-pages");
    const { env } = getRequestContext();
    return env;
  } catch {
    return null;
  }
}

export async function GET() {
  try {
    const env = await getEnv();
    if (!env?.DB) {
      return NextResponse.json({ posts: [] });
    }
    const result = await env.DB.prepare(
      "SELECT * FROM posts ORDER BY created_at DESC"
    ).all();
    return NextResponse.json({ posts: result.results || [] });
  } catch {
    return NextResponse.json({ posts: [] });
  }
}

export async function POST(request: NextRequest) {
  try {
    const env = await getEnv();
    if (!env?.DB) {
      return NextResponse.json({ error: "Veritabanı bağlantısı yok" }, { status: 500 });
    }

    const adminPassword = env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD || "changeme123";
    if (!verifyAuth(request, adminPassword as string)) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, excerpt, content, coverImage, metaTitle, metaDescription, published } = body;

    if (!title || !slug || !excerpt || !content) {
      return NextResponse.json({ error: "Zorunlu alanlar eksik" }, { status: 400 });
    }

    const now = new Date().toISOString();
    await env.DB.prepare(
      `INSERT INTO posts (title, slug, excerpt, content, cover_image, meta_title, meta_description, published, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        title,
        slug,
        excerpt,
        content,
        coverImage || null,
        metaTitle || title,
        metaDescription || excerpt,
        published !== false ? 1 : 0,
        now,
        now
      )
      .run();

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Sunucu hatası";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
