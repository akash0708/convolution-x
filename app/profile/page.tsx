"use client";
import { signOut, useSession } from "next-auth/react";

export default function ProtectedComponent() {
  const { data: session } = useSession();

  if (!session) {
    return <div>Please log in</div>;
  }

  async function handleSignout() {
    await signOut();
  }

  return (
    <>
      <div>Welcome {session.user.name}</div>
      <button onClick={handleSignout}>logout</button>
    </>
  );
}
