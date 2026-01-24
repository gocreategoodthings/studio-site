import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isUnlocked = req.cookies.get("site_access")?.value === "granted";
  const isUnlockPage = req.nextUrl.pathname.startsWith("/unlock");

  if (!isUnlocked && !isUnlockPage) {
    return NextResponse.redirect(new URL("/unlock", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
