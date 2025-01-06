"use client";
import { logout } from "@/lib/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";
import axios from "axios";

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
      <div>Welcome {email}</div>
      <div>Name: {user?.name}</div>
      <button onClick={handleSignout}>logout</button>
    </>
  );
}
