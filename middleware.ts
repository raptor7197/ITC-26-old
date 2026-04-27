import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Client-only auth model:
 * Server-side middleware no longer blocks routes.
 * Route protection is handled in the client via Firebase Auth state.
 */
export default function middleware(_request: NextRequest) {
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
