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

export async function POST(request: NextRequest) {
  try {
    const { getRequestContext } = await import("@cloudflare/next-on-pages");
    const { env } = getRequestContext();

    const adminPassword = (env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD || "changeme123") as string;
    if (!verifyAuth(request, adminPassword)) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
    }

    if (!env.R2_BUCKET) {
      return NextResponse.json({ error: "R2 bucket yapılandırılmamış" }, { status: 500 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Dosya bulunamadı" }, { status: 400 });
    }

    const ext = file.name.split(".").pop() || "jpg";
    const key = `blog/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    await env.R2_BUCKET.put(key, file.stream(), {
      httpMetadata: { contentType: file.type },
    });

    const url = `/api/images/${key}`;

    return NextResponse.json({ success: true, url, key });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Yükleme hatası";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
