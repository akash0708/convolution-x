// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const userCookie = req.cookies.get("users");

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

  // Admin routes extract the user from the userCookie
  if (req.nextUrl.pathname.startsWith("/admin")) {
    try {
      const userCredential =
        typeof userCookie === "string" ? JSON.parse(userCookie) : userCookie;

      const userID = JSON.parse(userCredential.value);

      const allowedAdmins = [
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
      ];

      if (!allowedAdmins.includes(userID.uid)) {
        // console.log(typeof userID.uid);
        // console.log(typeof process.env.ADMIN_ID);
        // console.log("User:", userID.uid);
        // console.log("Admin:", process.env.ADMIN_ID);
        return NextResponse.redirect(new URL("/profile", req.url));
      }
    } catch (error) {
      console.error("Error parsing userCookie:", error);
    }
  }

  // now similar to the admin routes, we have a superadmin route
  // so we need to check if the user is a superadmin

  if (req.nextUrl.pathname.startsWith("/superadmin")) {
    try {
      const userCredential =
        typeof userCookie === "string" ? JSON.parse(userCookie) : userCookie;

      const userID = JSON.parse(userCredential.value);

      const allowedSuperAdmins = [
        process.env.ADMIN_ID,
        process.env.ADMIN_2_ID,
        process.env.ADMIN_3_ID,
        process.env.ADMIN_4_ID,
        process.env.ADMIN_5_ID,
        process.env.ADMIN_10_ID,
      ];

      if (!allowedSuperAdmins.includes(userID.uid)) {
        return NextResponse.redirect(new URL("/profile", req.url));
      }
    } catch (error) {
      console.error("Error parsing userCookie:", error);
    }
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

  // Prevent users with emailVerified: true from visiting /verify-email
  if (userCookie && req.nextUrl.pathname.startsWith("/verify-email")) {
    try {
      const userCredential =
        typeof userCookie === "string" ? JSON.parse(userCookie) : userCookie;

      const emailVerified = JSON.parse(userCredential.value).emailVerified;

      if (emailVerified) {
        return NextResponse.redirect(new URL("/profile", req.url));
      }
    } catch (error) {
      console.error("Error parsing userCookie:", error);
    }
  }

  return NextResponse.next();
}
