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

  // Admin routes: Ensure the user is authenticated and is an admin
  if (req.nextUrl.pathname.startsWith("/admin")) {
    // If there's no userCookie, redirect to login
    if (!userCookie) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      // Parse the userCookie to get user credentials
      const userCredential = JSON.parse(userCookie.value);
      const userID = userCredential.uid;

      // List of allowed admin IDs
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

      // Check if the user is an allowed admin
      if (!allowedAdmins.includes(userID)) {
        return NextResponse.redirect(new URL("/profile", req.url));
      }
    } catch (error) {
      console.error("Error parsing userCookie:", error);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Superadmin routes: Ensure the user is authenticated and is a superadmin
  if (req.nextUrl.pathname.startsWith("/superadmin")) {
    // If there's no userCookie, redirect to login
    if (!userCookie) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      // Parse the userCookie to get user credentials
      const userCredential = JSON.parse(userCookie.value);
      const userID = userCredential.uid;

      // List of allowed superadmin IDs
      const allowedSuperAdmins = [
        process.env.ADMIN_ID,
        process.env.ADMIN_2_ID,
        process.env.ADMIN_3_ID,
        process.env.ADMIN_4_ID,
        process.env.ADMIN_5_ID,
        process.env.ADMIN_10_ID,
      ];

      // Check if the user is an allowed superadmin
      if (!allowedSuperAdmins.includes(userID)) {
        return NextResponse.redirect(new URL("/profile", req.url));
      }
    } catch (error) {
      console.error("Error parsing userCookie:", error);
      return NextResponse.redirect(new URL("/login", req.url));
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
