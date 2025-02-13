import { NextRequest, NextResponse } from "next/server";

// Store admin and superadmin IDs as Sets (initialized once)
const ADMIN_IDS = new Set([
  process.env.ADMIN_ID,
  process.env.ADMIN_2_ID,
  process.env.ADMIN_3_ID,
  process.env.ADMIN_4_ID,
  process.env.ADMIN_5_ID,
  process.env.ADMIN_6_ID,
  process.env.ADMIN_7_ID,
  process.env.ADMIN_8_ID,
  process.env.ADMIN_9_ID,
  process.env.ADMIN_10_ID,
  process.env.ADMIN_11_ID,
  process.env.ADMIN_12_ID,
  process.env.ADMIN_13_ID,
  process.env.ADMIN_14_ID,
  process.env.ADMIN_15_ID,
  process.env.ADMIN_16_ID,
  process.env.ADMIN_17_ID,
  process.env.ADMIN_18_ID,
  process.env.ADMIN_19_ID,
  process.env.ADMIN_20_ID,
]);

const SUPERADMIN_IDS = new Set([
  process.env.ADMIN_ID,
  process.env.ADMIN_2_ID,
  process.env.ADMIN_3_ID,
  process.env.ADMIN_4_ID,
  process.env.ADMIN_5_ID,
  process.env.ADMIN_10_ID,
]);

let requestCount = 0; // Global variable to track calls

export function middleware(req: NextRequest) {
  // Track middleware calls (only in dev mode)
  if (process.env.NODE_ENV === "development") {
    requestCount++;
    console.log(`🔄 Middleware called ${requestCount} times for ${req.nextUrl.pathname}`);
  }

  const userCookie = req.cookies.get("users");
  let userID: string | null = null;
  let emailVerified = false;

  // Parse userCookie once (if it exists)
  if (userCookie) {
    try {
      const userCredential = JSON.parse(userCookie.value);
      userID = userCredential.uid ?? null;
      emailVerified = userCredential.emailVerified ?? false;
    } catch (error) {
      console.error("Error parsing userCookie:", error);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  const isAuthenticated = Boolean(userID);
  const role = SUPERADMIN_IDS.has(userID ?? "")
    ? "superadmin"
    : ADMIN_IDS.has(userID ?? "")
    ? "admin"
    : "user";

  const pathname = req.nextUrl.pathname;

  // Redirect Rules

  // (1) Redirect authenticated users from /register & /login to /profile
  if (isAuthenticated && ["/register", "/login"].includes(pathname)) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  // (2) Redirect unauthenticated users trying to access /profile to /login
  if (!isAuthenticated && pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // (3) Restrict /admin & /superadmin access
  if (pathname.startsWith("/admin") && role !== "admin" && role !== "superadmin") {
    return NextResponse.redirect(new URL(isAuthenticated ? "/profile" : "/login", req.url));
  }

  if (pathname.startsWith("/superadmin") && role !== "superadmin") {
    return NextResponse.redirect(new URL(isAuthenticated ? "/profile" : "/login", req.url));
  }

  // (4) Redirect unauthenticated users from /event/register-* to /login
  if (!isAuthenticated && pathname.startsWith("/event/register")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // (5) Prevent verified users from accessing /verify-email
  if (isAuthenticated && emailVerified && pathname.startsWith("/verify-email")) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return NextResponse.next();
}

// Restrict middleware execution to only relevant routes
export const config = {
  matcher: [
    "/profile/:path*",
    "/register",
    "/login",
    "/admin/:path*",
    "/superadmin/:path*",
    "/event/register-:path*",
    "/verify-email",
  ],
};
