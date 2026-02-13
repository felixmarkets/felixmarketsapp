import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    let adminPassword = "changeme123";
    try {
      const { getRequestContext } = await import("@cloudflare/next-on-pages");
      const { env } = getRequestContext();
      adminPassword = env.ADMIN_PASSWORD || adminPassword;
    } catch {
      adminPassword = process.env.ADMIN_PASSWORD || adminPassword;
    }

    if (password === adminPassword) {
      const token = btoa(`admin:${Date.now()}:${adminPassword}`);
      return NextResponse.json({ success: true, token });
    }

    return NextResponse.json({ success: false, error: "Geçersiz şifre" }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, error: "Sunucu hatası" }, { status: 500 });
  }
}
