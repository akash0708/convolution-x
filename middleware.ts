// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const userCookie = req.cookies.get("user");

  // Redirect authenticated users from /register and /login to /profile
  if (
    userCookie &&
    ["/register", "/login"].some((path) =>
      req.nextUrl.pathname.startsWith(path)
    )
  ) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  // Redirect unauthenticated users trying to access /profile to /login
  if (!userCookie && req.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Redirect unauthenticated users from /event/register-solo or /event/register-team to /login
  if (
    !userCookie &&
    ["/event/register-solo", "/event/register-team"].some((path) =>
      req.nextUrl.pathname.startsWith(path)
    )
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Allow access to /event/[id] without authentication
  // No specific check is needed here since it's allowed for everyone

  return NextResponse.next();
}
