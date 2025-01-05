"use client";
import { logout } from "@/lib/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function ProtectedComponent() {
  const userCookie = Cookies.get("user");
  const router = useRouter();

  if (!userCookie) {
    return <div>Please log in</div>;
  }

  // get the username form zustand, for now use email
  const email = userCookie ? JSON.parse(userCookie).email : null;

  async function handleSignout() {
    // remove the user cookie
    Cookies.remove("user");
    await logout();
    router.push("/login");
  }

  return (
    <>
      <div>Welcome {email}</div>
      <button onClick={handleSignout}>logout</button>
    </>
  );
}
