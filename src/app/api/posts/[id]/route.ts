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

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const env = await getEnv();
    if (!env?.DB) {
      return NextResponse.json({ error: "Veritabanı bağlantısı yok" }, { status: 500 });
    }
    const post = await env.DB.prepare("SELECT * FROM posts WHERE id = ?")
      .bind(Number(id))
      .first();
    if (!post) {
      return NextResponse.json({ error: "Yazı bulunamadı" }, { status: 404 });
    }
    return NextResponse.json({ post });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const env = await getEnv();
    if (!env?.DB) {
      return NextResponse.json({ error: "Veritabanı bağlantısı yok" }, { status: 500 });
    }

    const adminPassword = (env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD || "changeme123") as string;
    if (!verifyAuth(request, adminPassword)) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, excerpt, content, coverImage, metaTitle, metaDescription, published } = body;

    const now = new Date().toISOString();
    await env.DB.prepare(
      `UPDATE posts SET title = ?, slug = ?, excerpt = ?, content = ?, cover_image = ?, meta_title = ?, meta_description = ?, published = ?, updated_at = ? WHERE id = ?`
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
        Number(id)
      )
      .run();

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Sunucu hatası";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const env = await getEnv();
    if (!env?.DB) {
      return NextResponse.json({ error: "Veritabanı bağlantısı yok" }, { status: 500 });
    }

    const adminPassword = (env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD || "changeme123") as string;
    if (!verifyAuth(request, adminPassword)) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
    }

    await env.DB.prepare("DELETE FROM posts WHERE id = ?")
      .bind(Number(id))
      .run();

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
