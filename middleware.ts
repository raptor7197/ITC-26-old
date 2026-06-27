import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = [
  "/dashboard",
  "/fellowship/application",
  "/fellowship/register",
  "/admin/fellowship",
];

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(path + "/"),
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  const authSession =
    request.cookies.get("__session")?.value ||
    request.cookies.get("firebase-auth-token")?.value;

  if (!authSession) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/fellowship/application/:path*",
    "/fellowship/register/:path*",
    "/admin/fellowship/:path*",
  ],
};
