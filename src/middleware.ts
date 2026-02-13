import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // pages.dev'den gelen istekleri ana domaine yönlendir
  if (host.includes("pages.dev")) {
    const url = new URL(request.url);
    url.host = "felixmarketsapp.com";
    url.protocol = "https:";
    return NextResponse.redirect(url.toString(), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml).*)"],
};
