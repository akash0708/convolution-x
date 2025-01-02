import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Sparkhack
      <Link href="/event/register?eventName=sparkhack">Register</Link>
    </div>
  );
};

export default page;
