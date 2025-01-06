"use client";
import { logout } from "@/lib/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function ProtectedComponent() {
  const userCookie = Cookies.get("user");
  const router = useRouter();

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const removeUser = useUserStore((state) => state.removeUser);

  // get the username form zustand, for now use email
  const email = userCookie ? JSON.parse(userCookie).email : null;

  // useeffect to fetch user form email and set it to zustand : setUser({ id: res.data.id, name: res.data.name, email: res.data.email });
  useEffect(() => {
    // Fetch user details using post request to /api/user endpoint with email
    const fetchUser = async () => {
      try {
        const response = await axios.post("/api/users", { email });
        setUser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
        });
      } catch (error: any) {
        console.log("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  if (!userCookie || !user) {
    return <div>Please log in</div>;
  }

  async function handleSignout() {
    // remove the user cookie
    Cookies.remove("user");
    await logout();
    removeUser();
    router.push("/login");
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
        <div className="text-2xl font-bold text-gray-800 mb-4">
          Welcome, {email}
        </div>
        <div className="text-lg text-gray-600 mb-6">Name: {user?.name}</div>
        <div className="flex space-x-4">
          <button
            onClick={handleSignout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
          <Link
            href={"/"}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
}
